/* eslint-disable max-classes-per-file */
import { compose } from 'ramda';
import firebase from './firebase';

type Firestore = firebase.firestore.Firestore;
type OrderByDirection = firebase.firestore.OrderByDirection | undefined;
type DocumentData = firebase.firestore.DocumentData;
type Collection = firebase.firestore.CollectionReference<DocumentData>;
type Snapshot = firebase.firestore.QuerySnapshot<DocumentData>;
type WhereOp = firebase.firestore.WhereFilterOp;
type RawValue = string | number;

export interface Params {
  orderBy?: string | [string, OrderByDirection];
  where?: [string, WhereOp, RawValue][];
}

function mapDocuments({ docs }: Snapshot) {
  return docs.map((doc: DocumentData) => ({
    ...doc.data(),
    key: doc.id
  }));
}

function withOrderBy(params?: Params) {
  return (collection: Collection) => {
    switch (typeof params?.orderBy) {
      case 'string':
        return collection.orderBy(params.orderBy);
      case 'object':
        return collection.orderBy(params.orderBy[0], params.orderBy[1]);
      default:
        return collection;
    }
  };
}

function withWhere(params?: Params) {
  return (collection: Collection) => {
    if (params?.where) {
      return params.where.reduce(
        (acc, item) => acc.where(item[0], item[1], item[2]),
        collection
      );
    }
    return collection;
  };
}

export class ApiInstance {
  constructor(private firestore: Firestore) {}

  async get<T>(url: string, params?: Params) {
    const collection = this.firestore.collection(url);
    const query = compose(withWhere(params), withOrderBy(params))(collection);
    return query.get().then<T[]>(mapDocuments);
  }

  async post<T>(url: string, data: T) {
    const collection = this.firestore.collection(url);
    return collection.add(data);
  }

  async put<T>(url: string, key: string, data: T) {
    const collection = this.firestore.collection(url).doc(key);
    return collection.update(data);
  }

  async delete(url: string, key: string) {
    const collection = this.firestore.collection(url).doc(key);
    return collection.delete();
  }
}

export class MockApiInstance {
  constructor(private firestore: unknown) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async get<T>(url: string, params?: Params) {
    return new Promise((resolve) => resolve({}));
  }
}

export default ApiInstance;

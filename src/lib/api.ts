/* eslint-disable max-classes-per-file */
import firebase from './firebase';

function mapDocs({ docs }) {
  return docs.map((doc) => ({
    key: doc.id,
    ...doc.data()
  }));
}

export interface Params {
  orderBy?: string;
}

export class ApiInstance {
  constructor(private firestore: firebase.firestore.Firestore) {}

  async get<T>(url: string, params?: Params) {
    const collection = this.firestore.collection(url);
    let query: firebase.firestore.Query;
    if (params) {
      if (params.orderBy) {
        query = collection.orderBy(params.orderBy);
      }
    } else {
      query = collection;
    }
    return query.get().then<T>(mapDocs);
  }
}

export class MockApiInstance {
  constructor(private api: unknown) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async get<T>(url: string, params?: Params) {
    return new Promise((resolve) => resolve({}));
  }
}

export default ApiInstance;

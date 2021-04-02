export interface IAuthenticationContext {
  isAuth: boolean;
  userName: string;
  authOn: () => void;
  authOff: () => void;
}

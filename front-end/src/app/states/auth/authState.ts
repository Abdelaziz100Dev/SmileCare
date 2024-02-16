export interface Token{
  access_token: string;
  refresh_token: string
}
export interface AuthState {
  token:Token;
  error: string;
  loading: boolean;

}

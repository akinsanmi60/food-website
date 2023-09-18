export type ILoginInput = {
  phone: string;
  password: string;
};
export type IResetPasswordInput = {
  phone: string;
};
export type ISetNewPasswordInput = {
  token: string;
  password: string;
};

export type IVerifyTokenInput = {
  token: string;
};

export interface IRegisterInput {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
}

export interface IUserDecoded {
  user_id: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
  phone: string;
  exp: number;
  token_type: string;
  iat: number;
}
export type IAuthData = {
  access: string;
  refresh: string;
};

export type IAuthState = {
  auth: IAuthData | null;
  isLoggedIn: boolean;
  error: string | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

export type IForgetPassword = {
  error: string | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  token: string;
};
export type IGetToken = {
  error: string | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  token: string;
};

export type IForgetPasswordResponse = {
  data: {
    message: string;
    success: boolean;
  };
  status: number;
};
export type IForgetPasswordRes = {
  message: string;
  success: boolean;
};

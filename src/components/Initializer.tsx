import { api } from '../service/api'

const signIn = async (access_token: string, environment: string): Promise<boolean> => {
  const response = await api.signIn(access_token, environment);
  return response.isValid;
};

export default signIn;
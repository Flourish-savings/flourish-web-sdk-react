import { buildBackEndUrl } from '../config';
export class Api {
  async signIn(
    access_token: string,
    environment: string
  ): Promise<{ isValid: boolean }> {
    try {
      const response = await fetch(
        `${buildBackEndUrl(environment)}/sign_in`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`,
          },
        }
      );
      const res = await response.json();
      console.log(res);
      return response.status === 200 ? { isValid: true } : { isValid: false };
    } catch (error) {
      console.error(error);
      return { isValid: false };
    }
  }
}

export const api = new Api();

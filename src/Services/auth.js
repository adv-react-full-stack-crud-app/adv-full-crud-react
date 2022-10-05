import { post } from './request';

const URL = '/api/v1/users';

export async function signUpUser(credentials) {
  const res = await post(`${URL}`, credentials);
  res.user = res.data;
  return res;
}

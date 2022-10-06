import { get, post } from './request';
const BASE_URL = 'http://localhost:7890/api/v1';
// const URL = '/api/v1/users';

export async function signUpUser(credentials) {
  const res = await post(`${BASE_URL}/users`, credentials);
  res.user = res.data;
  return res;
}

export async function signInUser(credentials) {
  const res = await post(`${BASE_URL}/users/sessions`, credentials);
  res.user = res.data;
  return res;
}

export async function verifyUser() {
  const res = await get(`${BASE_URL}/users/me`);
  res.user = res.data;
  return res;
}

const USER_KEY = 'USER';

export function storeLocalUser(user) {
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } else {
    return null;
  }
}

// export function getLocalUser() {}

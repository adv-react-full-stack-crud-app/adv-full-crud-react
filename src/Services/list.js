import { get, post } from './request';

const BASE_URL = '/api/v1/lists';

export async function createList(item) {
  return await post(`${BASE_URL}`, item);
}

export async function getList() {
  return await get(`${BASE_URL}`);
}

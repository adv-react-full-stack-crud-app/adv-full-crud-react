import { del, get, post } from './request';

const BASE_URL = 'http://localhost:7890/api/v1';

export async function createList(item) {
  return await post(`${BASE_URL}/lists`, item);
}

export async function getList() {
  return await get(`${BASE_URL}/lists`);
}

export async function deleteById(id) {
  return await del(`${BASE_URL}/lists/${id}`);
}

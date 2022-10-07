import { post } from './request';

const BASE_URL = 'http://localhost:7890/api/v1';

export async function createList(item) {
  return await post(`${BASE_URL}/lists`, item);
}

import { create } from 'apisauce';

// Настройки заголовков и базового url
export const apiInstance = create({
  baseURL: `/api/v1/`,
  headers: {
    'Content-Type': 'application/json'
  }
});

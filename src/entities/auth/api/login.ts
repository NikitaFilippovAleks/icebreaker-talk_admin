import { apiInstance } from "@/shared/api";
import { API_URLS } from "@/shared/api/urls";
import { handleErrors } from "@/shared/lib/errors";
import type { IErrorResponseData } from "@/shared/types/error";


interface IProps {
  email: string;
  password: string;
}

export const loginApi = async ({ email, password }: IProps) => {
  const body = {
    email,
    password
  };

  const response = await apiInstance.post<{ access_token: string; refresh_token: string }, IErrorResponseData>(
    API_URLS.login,
    body
  );

  if (!response.ok) {
    const { mainError } = handleErrors(response);

    throw new Error(mainError);
  }

  if (!response.data) {
    throw new Error('Неизвестная ошибка');
  }

  return response.data;
};

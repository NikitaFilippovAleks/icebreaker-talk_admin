import { apiInstance } from "@/shared/api";
import { API_URLS } from "@/shared/api/urls";
import { handleErrors } from "@/shared/lib/errors";
import type { IErrorResponseData } from "@/shared/types/error";


interface IProps {
  email: string;
  password: string;
}

export const login = async ({ email, password }: IProps) => {
  const body = {
    email,
    password
  };

  const response = await apiInstance.post<unknown, IErrorResponseData>(
    API_URLS.login,
    body
  );

  if (!response.ok) {
    const { mainError } = handleErrors(response);

    throw new Error(mainError);
  }

  return response.data || ({} as unknown);
};

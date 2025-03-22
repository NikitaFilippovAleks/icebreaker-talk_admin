import { isEmpty } from 'remeda';

export interface IErrorResponseData {
  errors?: string[];
}

export type TModelErrorResponseData<MValue> = {
  [key: string]: {
    errors: MValue;
  };
};

export type TErrorResponse<MValue> =
  | IErrorResponseData
  | TModelErrorResponseData<MValue>;

/**
 * TypeGuard для определения типа ошибки
 * @param errorData Данные ошибок
 */
export function isMainError<MValue>(
  errorData: IErrorResponseData | TModelErrorResponseData<MValue>
): errorData is IErrorResponseData {
  const errors = (errorData as IErrorResponseData).errors;

  return !isEmpty(errors as string[]);
}

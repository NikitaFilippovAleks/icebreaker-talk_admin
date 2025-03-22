import type { ApiErrorResponse } from "apisauce";
import { isMainError, type IErrorResponseData, type TModelErrorResponseData } from "../types/error";

/**
 * Обработка основной ошибки
 * @param errorsData Данные ошибки
 */
const handleMainError = (errorsData: IErrorResponseData) => {
  let errors = ['Неизвестная ошибка'];

  if (errorsData.errors) errors = errorsData.errors;

  return errors;
};

/**
 * Обработка ошибки модели
 * @param errorsData Данные ошибки
 * @param modelKey Ключ модели
 */
const handleModelError = <MValue>(
  errorsData: TModelErrorResponseData<MValue>,
  modelKey: string
) => {
  const modelErrors = errorsData[modelKey];
  return modelErrors && modelErrors.errors ? modelErrors.errors : null;
};

interface IHandleErrorsReturn<MValue> {
  mainErrors: string[];
  mainError: string;
  modelErrors: MValue | null;
}

/**
 * Обработка ошибок
 * @param root0 Ответ сервера
 * @param root0.data Данные ошибок
 * @param modelKey Ключ модели
 */
export const handleErrors = <MValue>(
  {
    data
  }: ApiErrorResponse<IErrorResponseData | TModelErrorResponseData<MValue>>,
  modelKey?: string
): IHandleErrorsReturn<MValue> => {
  const errors: IHandleErrorsReturn<MValue> = {
    mainErrors: ['Неизвестная ошибка'],
    mainError: 'Неизвестная ошибка',
    modelErrors: null
  };

  if (!data) return errors;

  if (data) {
    if (modelKey && !isMainError<MValue>(data)) {
      errors.modelErrors = handleModelError(data, modelKey);
    } else {
      errors.mainErrors = handleMainError(data);
    }
  }

  return { ...errors, mainError: errors.mainErrors.join(' ') };
};

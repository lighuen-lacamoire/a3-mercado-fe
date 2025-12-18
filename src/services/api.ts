import axios, {
  AxiosHeaders,
  type AxiosRequestConfig,
  type CreateAxiosDefaults,
  type Method,
} from "axios";

export const backendApiconfig: CreateAxiosDefaults = {
  baseURL: process.env.VITE_BACKEND_API_BASEURL,
};

export const axiosInstance = axios.create(backendApiconfig);

/**
 * API Calls Handler
 * @param {string} endpoint Endpoint path
 * @param {string} method HTTP Method
 * @param {AxiosRequestConfig?} parameters Parametros de la request axios
 * @returns {T} respuesta del servicio
 */
export const ApiCall = async <T>(
  endpoint: string,
  method: string,
  parameters?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const requestConfig: AxiosRequestConfig = {
      ...parameters,
      method: method as Method,
      url: endpoint,
      headers: { ...parameters?.headers, ...headers } as AxiosHeaders,
    };
    const response = await axiosInstance.request<T>(requestConfig);
    return response?.data;
  } catch (err) {
    logError(err, endpoint, method);
    throw err;
  }
};

/**
 * Se intenta recuperar el error de HTTP o de ejecucion
 */
const logError = (error: any, endpoint: string, method: string) => {
  if (error.status) {
    // eslint-disable-next-line no-underscore-dangle
    const summary = `(${error.status} ${error.statusText}): ${error._bodyInit}`;
    console.log(
      `API request ${method.toUpperCase()} ${endpoint} responded with ${summary}`,
    );
  } else {
    console.log(
      `API request ${method.toUpperCase()} ${endpoint} failed with message "${
        error.message
      }"`,
    );
  }
};

export const headers: Header = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

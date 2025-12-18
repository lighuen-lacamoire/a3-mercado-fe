type FormError = {
  [key: string]: string | undefined;
};

type ErrorDetail = {
  domain: string;
  reason: string;
  message: string;
  locationType: string;
  location: string;
};

type AppError = {
  errors?: ErrorDetail[];
  code?: string | number;
  status?: string | number;
  message?: string;
  title?: string;
};

type Header = {
  [key: string]: string;
};
type HttpResponse = {
  code?: string | number;
  status?: string | number;
  message?: string;
  user?: string;
};

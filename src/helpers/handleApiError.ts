import { IAxoisResponse } from '@config/http-request';

const handleApiError = (error: IAxoisResponse) => {
  if (!error.response) return 'Something went wrong';
  const { response } = error;
  const { data, status } = response;

  switch (status) {
    case 400:
      return data.detail || 'Something went wrong';
    case 401:
      return data.detail || 'Something went wrong';
    case 404:
      return data.detail || 'Resource not found';
    case 409:
      return 'A duplicate already eists';
    default:
      return 'Something went wrong';
  }
};

export default handleApiError;

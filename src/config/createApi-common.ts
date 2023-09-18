import { httpRequest } from '@config/http-request';
import { createApi } from '@reduxjs/toolkit/query/react';

export const configuredApi = createApi({
  baseQuery: httpRequest(),
  endpoints: () => ({}),
});

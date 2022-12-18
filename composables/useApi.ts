import { FetchOptions } from "ofetch";

export const useApi = <T>(url: string, options?: FetchOptions) => {
  const config = useRuntimeConfig();

  return $fetch<T>(url, {
    credentials: "include",
    baseURL: config.public.BASE_API_URL,
    headers: useRequestHeaders(["cookie"]) as Record<string, string>,
    parseResponse: (text) => JSON.parse(text).data,
    ...options,
  });
};

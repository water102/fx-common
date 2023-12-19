import { CancelablePromise } from './cancelable-promise';

export const cancelableFetch = (
  input: string | URL | Request,
  init?: RequestInit | undefined
): CancelablePromise<Response> => {
  const controller = new AbortController();
  const { signal, abort } = controller;

  const promise = fetch(input, {
    ...(init ?? {}),
    signal
  });

  return {
    promise,
    cancel() {
      abort();
    }
  };
};

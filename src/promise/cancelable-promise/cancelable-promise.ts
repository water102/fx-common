export type CancelablePromise<T> = {
  promise: Promise<T>;
  cancel: () => void;
};

export enum SortType {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortBy = {
  [fieldName: string]: SortType;
};

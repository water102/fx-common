export enum FilterComparator {
  Equal = '$eq',
  NotEqual = '$ne',
  GreaterThan = '$gt',
  GreaterThanOrEqual = '$gte',
  LessThan = '$lt',
  LessThanOrEqual = '$lte',
  //
  In = '$in',
  NotIn = '$nin',
  //
  Like = '$like',
  ILike = '$ilike',
  NotLike = '$nlike',
  NotILike = '$nilike',
  StartWith = '$sw',
  IStartWith = '$isw',
  EndWith = '$ew',
  IEndWith = '$iew',
  Contain = '$c',
  IContain = '$ic',
  //
  IsNull = '$null',
  IsNotNull = '$nn',
  //
  And = '$and',
  Or = '$or',
}

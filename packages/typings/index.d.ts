// match any function
declare type AnyFunction = (...args: any[]) => any;

// match any object
declare type AnyObject = Record<PropertyKey, any>;

// macth object by T
declare type TypedObject<T = any> = Record<PropertyKey, T>;

// match: Xxx
declare type AnyUpperCase = `${Uppercase<string>}${string}`;

// match: xxx-xxx-xxx
declare type AnyDateType = `${string}-${string}-${string}`;

// match: xxx:xxx:xxx
declare type AnyTimeType = `${string}:${string}:${string}`;

// match any class instance
declare type AnyClass<T> = new () => T;

// match any size
declare type AnySize = "small" | "mediumn" | "large";
declare interface ImportMetaEnv {
  VITE_PROJECT_START_TIME: string;
}
declare interface ObjectConstructor {
  keys<T>(o: T): (keyof T)[];
  values<T>(o: T): T[keyof T][];
}


declare interface CustomContext {
  success: (data?: any, message?: any) => ResponseBody;
  fail: (message?: any) => ResponseBody;
  debug: (message?: string) => any;
  trace: (message?: string) => any;
  warn: (message?: string) => any;
  info: (message?: string) => any;
  fatal: (message?: string) => any;
  error: (message?: string) => any;
}


 declare type ResponseBody = {
  data: any;
  message: any;
  code: 200 | 500;
};

declare type ResponseCreator = (data: any, message: any, code: ResponseCode) => ResponseBody;
/**
 * description:
 * const arr = ['1', 2, '3']
 * type ArrType = UnwrapArray<typeof arr> => string | number
 */
declare type UnwrapArray<T> = T extends Array<infer P> ? P : never;


/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model AgentProfile
 * 
 */
export type AgentProfile = $Result.DefaultSelection<Prisma.$AgentProfilePayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Hotel
 * 
 */
export type Hotel = $Result.DefaultSelection<Prisma.$HotelPayload>
/**
 * Model HotelImage
 * 
 */
export type HotelImage = $Result.DefaultSelection<Prisma.$HotelImagePayload>
/**
 * Model RoomType
 * 
 */
export type RoomType = $Result.DefaultSelection<Prisma.$RoomTypePayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomTypeImage
 * 
 */
export type RoomTypeImage = $Result.DefaultSelection<Prisma.$RoomTypeImagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  AGENT: 'AGENT',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  REJECTED: 'REJECTED',
  BANNED: 'BANNED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const HotelStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  REJECTED: 'REJECTED'
};

export type HotelStatus = (typeof HotelStatus)[keyof typeof HotelStatus]


export const RoomStatus: {
  AVAILABLE: 'AVAILABLE',
  BOOKED: 'BOOKED',
  OCCUPIED: 'OCCUPIED',
  MAINTENANCE: 'MAINTENANCE'
};

export type RoomStatus = (typeof RoomStatus)[keyof typeof RoomStatus]


export const BedType: {
  SINGLE: 'SINGLE',
  DOUBLE: 'DOUBLE',
  QUEEN: 'QUEEN',
  KING: 'KING',
  TWIN: 'TWIN',
  BUNK: 'BUNK'
};

export type BedType = (typeof BedType)[keyof typeof BedType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type HotelStatus = $Enums.HotelStatus

export const HotelStatus: typeof $Enums.HotelStatus

export type RoomStatus = $Enums.RoomStatus

export const RoomStatus: typeof $Enums.RoomStatus

export type BedType = $Enums.BedType

export const BedType: typeof $Enums.BedType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agentProfile`: Exposes CRUD operations for the **AgentProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentProfiles
    * const agentProfiles = await prisma.agentProfile.findMany()
    * ```
    */
  get agentProfile(): Prisma.AgentProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotel`: Exposes CRUD operations for the **Hotel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotels
    * const hotels = await prisma.hotel.findMany()
    * ```
    */
  get hotel(): Prisma.HotelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotelImage`: Exposes CRUD operations for the **HotelImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HotelImages
    * const hotelImages = await prisma.hotelImage.findMany()
    * ```
    */
  get hotelImage(): Prisma.HotelImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomType`: Exposes CRUD operations for the **RoomType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomTypes
    * const roomTypes = await prisma.roomType.findMany()
    * ```
    */
  get roomType(): Prisma.RoomTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomTypeImage`: Exposes CRUD operations for the **RoomTypeImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomTypeImages
    * const roomTypeImages = await prisma.roomTypeImage.findMany()
    * ```
    */
  get roomTypeImage(): Prisma.RoomTypeImageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserProfile: 'UserProfile',
    AgentProfile: 'AgentProfile',
    RefreshToken: 'RefreshToken',
    Hotel: 'Hotel',
    HotelImage: 'HotelImage',
    RoomType: 'RoomType',
    Room: 'Room',
    RoomTypeImage: 'RoomTypeImage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userProfile" | "agentProfile" | "refreshToken" | "hotel" | "hotelImage" | "roomType" | "room" | "roomTypeImage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      AgentProfile: {
        payload: Prisma.$AgentProfilePayload<ExtArgs>
        fields: Prisma.AgentProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentProfilePayload>
          }
          findFirst: {
            args: Prisma.AgentProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentProfilePayload>
          }
          findMany: {
            args: Prisma.AgentProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentProfilePayload>[]
          }
          create: {
            args: Prisma.AgentProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentProfilePayload>
          }
          createMany: {
            args: Prisma.AgentProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentProfilePayload>[]
          }
          delete: {
            args: Prisma.AgentProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentProfilePayload>
          }
          update: {
            args: Prisma.AgentProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentProfilePayload>
          }
          deleteMany: {
            args: Prisma.AgentProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentProfilePayload>[]
          }
          upsert: {
            args: Prisma.AgentProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentProfilePayload>
          }
          aggregate: {
            args: Prisma.AgentProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentProfile>
          }
          groupBy: {
            args: Prisma.AgentProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentProfileCountArgs<ExtArgs>
            result: $Utils.Optional<AgentProfileCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Hotel: {
        payload: Prisma.$HotelPayload<ExtArgs>
        fields: Prisma.HotelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findFirst: {
            args: Prisma.HotelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findMany: {
            args: Prisma.HotelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          create: {
            args: Prisma.HotelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          createMany: {
            args: Prisma.HotelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          delete: {
            args: Prisma.HotelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          update: {
            args: Prisma.HotelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          deleteMany: {
            args: Prisma.HotelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          upsert: {
            args: Prisma.HotelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          aggregate: {
            args: Prisma.HotelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotel>
          }
          groupBy: {
            args: Prisma.HotelGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelCountArgs<ExtArgs>
            result: $Utils.Optional<HotelCountAggregateOutputType> | number
          }
        }
      }
      HotelImage: {
        payload: Prisma.$HotelImagePayload<ExtArgs>
        fields: Prisma.HotelImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          findFirst: {
            args: Prisma.HotelImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          findMany: {
            args: Prisma.HotelImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>[]
          }
          create: {
            args: Prisma.HotelImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          createMany: {
            args: Prisma.HotelImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotelImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>[]
          }
          delete: {
            args: Prisma.HotelImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          update: {
            args: Prisma.HotelImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          deleteMany: {
            args: Prisma.HotelImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotelImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>[]
          }
          upsert: {
            args: Prisma.HotelImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          aggregate: {
            args: Prisma.HotelImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotelImage>
          }
          groupBy: {
            args: Prisma.HotelImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelImageCountArgs<ExtArgs>
            result: $Utils.Optional<HotelImageCountAggregateOutputType> | number
          }
        }
      }
      RoomType: {
        payload: Prisma.$RoomTypePayload<ExtArgs>
        fields: Prisma.RoomTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          findFirst: {
            args: Prisma.RoomTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          findMany: {
            args: Prisma.RoomTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>[]
          }
          create: {
            args: Prisma.RoomTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          createMany: {
            args: Prisma.RoomTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>[]
          }
          delete: {
            args: Prisma.RoomTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          update: {
            args: Prisma.RoomTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          deleteMany: {
            args: Prisma.RoomTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>[]
          }
          upsert: {
            args: Prisma.RoomTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          aggregate: {
            args: Prisma.RoomTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomType>
          }
          groupBy: {
            args: Prisma.RoomTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomTypeCountArgs<ExtArgs>
            result: $Utils.Optional<RoomTypeCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomTypeImage: {
        payload: Prisma.$RoomTypeImagePayload<ExtArgs>
        fields: Prisma.RoomTypeImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomTypeImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypeImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomTypeImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypeImagePayload>
          }
          findFirst: {
            args: Prisma.RoomTypeImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypeImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomTypeImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypeImagePayload>
          }
          findMany: {
            args: Prisma.RoomTypeImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypeImagePayload>[]
          }
          create: {
            args: Prisma.RoomTypeImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypeImagePayload>
          }
          createMany: {
            args: Prisma.RoomTypeImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomTypeImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypeImagePayload>[]
          }
          delete: {
            args: Prisma.RoomTypeImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypeImagePayload>
          }
          update: {
            args: Prisma.RoomTypeImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypeImagePayload>
          }
          deleteMany: {
            args: Prisma.RoomTypeImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomTypeImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomTypeImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypeImagePayload>[]
          }
          upsert: {
            args: Prisma.RoomTypeImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypeImagePayload>
          }
          aggregate: {
            args: Prisma.RoomTypeImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomTypeImage>
          }
          groupBy: {
            args: Prisma.RoomTypeImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomTypeImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomTypeImageCountArgs<ExtArgs>
            result: $Utils.Optional<RoomTypeImageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userProfile?: UserProfileOmit
    agentProfile?: AgentProfileOmit
    refreshToken?: RefreshTokenOmit
    hotel?: HotelOmit
    hotelImage?: HotelImageOmit
    roomType?: RoomTypeOmit
    room?: RoomOmit
    roomTypeImage?: RoomTypeImageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type AgentProfileCountOutputType
   */

  export type AgentProfileCountOutputType = {
    hotels: number
  }

  export type AgentProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotels?: boolean | AgentProfileCountOutputTypeCountHotelsArgs
  }

  // Custom InputTypes
  /**
   * AgentProfileCountOutputType without action
   */
  export type AgentProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentProfileCountOutputType
     */
    select?: AgentProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentProfileCountOutputType without action
   */
  export type AgentProfileCountOutputTypeCountHotelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelWhereInput
  }


  /**
   * Count Type HotelCountOutputType
   */

  export type HotelCountOutputType = {
    images: number
    rooms: number
    roomTypes: number
  }

  export type HotelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | HotelCountOutputTypeCountImagesArgs
    rooms?: boolean | HotelCountOutputTypeCountRoomsArgs
    roomTypes?: boolean | HotelCountOutputTypeCountRoomTypesArgs
  }

  // Custom InputTypes
  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelCountOutputType
     */
    select?: HotelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelImageWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountRoomTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomTypeWhereInput
  }


  /**
   * Count Type RoomTypeCountOutputType
   */

  export type RoomTypeCountOutputType = {
    rooms: number
    images: number
  }

  export type RoomTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | RoomTypeCountOutputTypeCountRoomsArgs
    images?: boolean | RoomTypeCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * RoomTypeCountOutputType without action
   */
  export type RoomTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypeCountOutputType
     */
    select?: RoomTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomTypeCountOutputType without action
   */
  export type RoomTypeCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * RoomTypeCountOutputType without action
   */
  export type RoomTypeCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomTypeImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    loginAttempts: number | null
  }

  export type UserSumAggregateOutputType = {
    loginAttempts: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    loginAttempts: number | null
    lockUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    loginAttempts: number | null
    lockUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    status: number
    loginAttempts: number
    lockUntil: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    loginAttempts?: true
  }

  export type UserSumAggregateInputType = {
    loginAttempts?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    status?: true
    loginAttempts?: true
    lockUntil?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    status?: true
    loginAttempts?: true
    lockUntil?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    status?: true
    loginAttempts?: true
    lockUntil?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string | null
    role: $Enums.Role
    status: $Enums.UserStatus
    loginAttempts: number
    lockUntil: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    status?: boolean
    loginAttempts?: boolean
    lockUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    agentProfile?: boolean | User$agentProfileArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    status?: boolean
    loginAttempts?: boolean
    lockUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    status?: boolean
    loginAttempts?: boolean
    lockUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    status?: boolean
    loginAttempts?: boolean
    lockUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "status" | "loginAttempts" | "lockUntil" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    agentProfile?: boolean | User$agentProfileArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      agentProfile: Prisma.$AgentProfilePayload<ExtArgs> | null
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string | null
      role: $Enums.Role
      status: $Enums.UserStatus
      loginAttempts: number
      lockUntil: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    agentProfile<T extends User$agentProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$agentProfileArgs<ExtArgs>>): Prisma__AgentProfileClient<$Result.GetResult<Prisma.$AgentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly loginAttempts: FieldRef<"User", 'Int'>
    readonly lockUntil: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.agentProfile
   */
  export type User$agentProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentProfile
     */
    select?: AgentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentProfile
     */
    omit?: AgentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentProfileInclude<ExtArgs> | null
    where?: AgentProfileWhereInput
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    userId: string | null
    fullName: string | null
    phoneNumber: string | null
    avatarUrl: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    userId: string | null
    fullName: string | null
    phoneNumber: string | null
    avatarUrl: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    userId: number
    fullName: number
    phoneNumber: number
    avatarUrl: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    userId?: true
    fullName?: true
    phoneNumber?: true
    avatarUrl?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    userId?: true
    fullName?: true
    phoneNumber?: true
    avatarUrl?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    userId?: true
    fullName?: true
    phoneNumber?: true
    avatarUrl?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    userId: string
    fullName: string
    phoneNumber: string | null
    avatarUrl: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    avatarUrl?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    avatarUrl?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    avatarUrl?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    userId?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    avatarUrl?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "fullName" | "phoneNumber" | "avatarUrl" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      fullName: string
      phoneNumber: string | null
      avatarUrl: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly fullName: FieldRef<"UserProfile", 'String'>
    readonly phoneNumber: FieldRef<"UserProfile", 'String'>
    readonly avatarUrl: FieldRef<"UserProfile", 'String'>
    readonly address: FieldRef<"UserProfile", 'String'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model AgentProfile
   */

  export type AggregateAgentProfile = {
    _count: AgentProfileCountAggregateOutputType | null
    _min: AgentProfileMinAggregateOutputType | null
    _max: AgentProfileMaxAggregateOutputType | null
  }

  export type AgentProfileMinAggregateOutputType = {
    userId: string | null
    businessName: string | null
    businessLicense: string | null
    taxCode: string | null
    idNumber: string | null
    idCardImageUrl: string | null
    approvalStatus: $Enums.UserStatus | null
    approvedAt: Date | null
    rejectedReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentProfileMaxAggregateOutputType = {
    userId: string | null
    businessName: string | null
    businessLicense: string | null
    taxCode: string | null
    idNumber: string | null
    idCardImageUrl: string | null
    approvalStatus: $Enums.UserStatus | null
    approvedAt: Date | null
    rejectedReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentProfileCountAggregateOutputType = {
    userId: number
    businessName: number
    businessLicense: number
    taxCode: number
    idNumber: number
    idCardImageUrl: number
    approvalStatus: number
    approvedAt: number
    rejectedReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgentProfileMinAggregateInputType = {
    userId?: true
    businessName?: true
    businessLicense?: true
    taxCode?: true
    idNumber?: true
    idCardImageUrl?: true
    approvalStatus?: true
    approvedAt?: true
    rejectedReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentProfileMaxAggregateInputType = {
    userId?: true
    businessName?: true
    businessLicense?: true
    taxCode?: true
    idNumber?: true
    idCardImageUrl?: true
    approvalStatus?: true
    approvedAt?: true
    rejectedReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentProfileCountAggregateInputType = {
    userId?: true
    businessName?: true
    businessLicense?: true
    taxCode?: true
    idNumber?: true
    idCardImageUrl?: true
    approvalStatus?: true
    approvedAt?: true
    rejectedReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgentProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentProfile to aggregate.
     */
    where?: AgentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentProfiles to fetch.
     */
    orderBy?: AgentProfileOrderByWithRelationInput | AgentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentProfiles
    **/
    _count?: true | AgentProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentProfileMaxAggregateInputType
  }

  export type GetAgentProfileAggregateType<T extends AgentProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentProfile[P]>
      : GetScalarType<T[P], AggregateAgentProfile[P]>
  }




  export type AgentProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentProfileWhereInput
    orderBy?: AgentProfileOrderByWithAggregationInput | AgentProfileOrderByWithAggregationInput[]
    by: AgentProfileScalarFieldEnum[] | AgentProfileScalarFieldEnum
    having?: AgentProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentProfileCountAggregateInputType | true
    _min?: AgentProfileMinAggregateInputType
    _max?: AgentProfileMaxAggregateInputType
  }

  export type AgentProfileGroupByOutputType = {
    userId: string
    businessName: string
    businessLicense: string | null
    taxCode: string | null
    idNumber: string | null
    idCardImageUrl: string | null
    approvalStatus: $Enums.UserStatus
    approvedAt: Date | null
    rejectedReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: AgentProfileCountAggregateOutputType | null
    _min: AgentProfileMinAggregateOutputType | null
    _max: AgentProfileMaxAggregateOutputType | null
  }

  type GetAgentProfileGroupByPayload<T extends AgentProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], AgentProfileGroupByOutputType[P]>
        }
      >
    >


  export type AgentProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    businessName?: boolean
    businessLicense?: boolean
    taxCode?: boolean
    idNumber?: boolean
    idCardImageUrl?: boolean
    approvalStatus?: boolean
    approvedAt?: boolean
    rejectedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hotels?: boolean | AgentProfile$hotelsArgs<ExtArgs>
    _count?: boolean | AgentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentProfile"]>

  export type AgentProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    businessName?: boolean
    businessLicense?: boolean
    taxCode?: boolean
    idNumber?: boolean
    idCardImageUrl?: boolean
    approvalStatus?: boolean
    approvedAt?: boolean
    rejectedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentProfile"]>

  export type AgentProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    businessName?: boolean
    businessLicense?: boolean
    taxCode?: boolean
    idNumber?: boolean
    idCardImageUrl?: boolean
    approvalStatus?: boolean
    approvedAt?: boolean
    rejectedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentProfile"]>

  export type AgentProfileSelectScalar = {
    userId?: boolean
    businessName?: boolean
    businessLicense?: boolean
    taxCode?: boolean
    idNumber?: boolean
    idCardImageUrl?: boolean
    approvalStatus?: boolean
    approvedAt?: boolean
    rejectedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgentProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "businessName" | "businessLicense" | "taxCode" | "idNumber" | "idCardImageUrl" | "approvalStatus" | "approvedAt" | "rejectedReason" | "createdAt" | "updatedAt", ExtArgs["result"]["agentProfile"]>
  export type AgentProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hotels?: boolean | AgentProfile$hotelsArgs<ExtArgs>
    _count?: boolean | AgentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgentProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AgentProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AgentProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      hotels: Prisma.$HotelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      businessName: string
      businessLicense: string | null
      taxCode: string | null
      idNumber: string | null
      idCardImageUrl: string | null
      approvalStatus: $Enums.UserStatus
      approvedAt: Date | null
      rejectedReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agentProfile"]>
    composites: {}
  }

  type AgentProfileGetPayload<S extends boolean | null | undefined | AgentProfileDefaultArgs> = $Result.GetResult<Prisma.$AgentProfilePayload, S>

  type AgentProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentProfileCountAggregateInputType | true
    }

  export interface AgentProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentProfile'], meta: { name: 'AgentProfile' } }
    /**
     * Find zero or one AgentProfile that matches the filter.
     * @param {AgentProfileFindUniqueArgs} args - Arguments to find a AgentProfile
     * @example
     * // Get one AgentProfile
     * const agentProfile = await prisma.agentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentProfileFindUniqueArgs>(args: SelectSubset<T, AgentProfileFindUniqueArgs<ExtArgs>>): Prisma__AgentProfileClient<$Result.GetResult<Prisma.$AgentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgentProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentProfileFindUniqueOrThrowArgs} args - Arguments to find a AgentProfile
     * @example
     * // Get one AgentProfile
     * const agentProfile = await prisma.agentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentProfileClient<$Result.GetResult<Prisma.$AgentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentProfileFindFirstArgs} args - Arguments to find a AgentProfile
     * @example
     * // Get one AgentProfile
     * const agentProfile = await prisma.agentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentProfileFindFirstArgs>(args?: SelectSubset<T, AgentProfileFindFirstArgs<ExtArgs>>): Prisma__AgentProfileClient<$Result.GetResult<Prisma.$AgentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentProfileFindFirstOrThrowArgs} args - Arguments to find a AgentProfile
     * @example
     * // Get one AgentProfile
     * const agentProfile = await prisma.agentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentProfileClient<$Result.GetResult<Prisma.$AgentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentProfiles
     * const agentProfiles = await prisma.agentProfile.findMany()
     * 
     * // Get first 10 AgentProfiles
     * const agentProfiles = await prisma.agentProfile.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const agentProfileWithUserIdOnly = await prisma.agentProfile.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AgentProfileFindManyArgs>(args?: SelectSubset<T, AgentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgentProfile.
     * @param {AgentProfileCreateArgs} args - Arguments to create a AgentProfile.
     * @example
     * // Create one AgentProfile
     * const AgentProfile = await prisma.agentProfile.create({
     *   data: {
     *     // ... data to create a AgentProfile
     *   }
     * })
     * 
     */
    create<T extends AgentProfileCreateArgs>(args: SelectSubset<T, AgentProfileCreateArgs<ExtArgs>>): Prisma__AgentProfileClient<$Result.GetResult<Prisma.$AgentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgentProfiles.
     * @param {AgentProfileCreateManyArgs} args - Arguments to create many AgentProfiles.
     * @example
     * // Create many AgentProfiles
     * const agentProfile = await prisma.agentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentProfileCreateManyArgs>(args?: SelectSubset<T, AgentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgentProfiles and returns the data saved in the database.
     * @param {AgentProfileCreateManyAndReturnArgs} args - Arguments to create many AgentProfiles.
     * @example
     * // Create many AgentProfiles
     * const agentProfile = await prisma.agentProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgentProfiles and only return the `userId`
     * const agentProfileWithUserIdOnly = await prisma.agentProfile.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgentProfile.
     * @param {AgentProfileDeleteArgs} args - Arguments to delete one AgentProfile.
     * @example
     * // Delete one AgentProfile
     * const AgentProfile = await prisma.agentProfile.delete({
     *   where: {
     *     // ... filter to delete one AgentProfile
     *   }
     * })
     * 
     */
    delete<T extends AgentProfileDeleteArgs>(args: SelectSubset<T, AgentProfileDeleteArgs<ExtArgs>>): Prisma__AgentProfileClient<$Result.GetResult<Prisma.$AgentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgentProfile.
     * @param {AgentProfileUpdateArgs} args - Arguments to update one AgentProfile.
     * @example
     * // Update one AgentProfile
     * const agentProfile = await prisma.agentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentProfileUpdateArgs>(args: SelectSubset<T, AgentProfileUpdateArgs<ExtArgs>>): Prisma__AgentProfileClient<$Result.GetResult<Prisma.$AgentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgentProfiles.
     * @param {AgentProfileDeleteManyArgs} args - Arguments to filter AgentProfiles to delete.
     * @example
     * // Delete a few AgentProfiles
     * const { count } = await prisma.agentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentProfileDeleteManyArgs>(args?: SelectSubset<T, AgentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentProfiles
     * const agentProfile = await prisma.agentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentProfileUpdateManyArgs>(args: SelectSubset<T, AgentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentProfiles and returns the data updated in the database.
     * @param {AgentProfileUpdateManyAndReturnArgs} args - Arguments to update many AgentProfiles.
     * @example
     * // Update many AgentProfiles
     * const agentProfile = await prisma.agentProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgentProfiles and only return the `userId`
     * const agentProfileWithUserIdOnly = await prisma.agentProfile.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgentProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgentProfile.
     * @param {AgentProfileUpsertArgs} args - Arguments to update or create a AgentProfile.
     * @example
     * // Update or create a AgentProfile
     * const agentProfile = await prisma.agentProfile.upsert({
     *   create: {
     *     // ... data to create a AgentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentProfile we want to update
     *   }
     * })
     */
    upsert<T extends AgentProfileUpsertArgs>(args: SelectSubset<T, AgentProfileUpsertArgs<ExtArgs>>): Prisma__AgentProfileClient<$Result.GetResult<Prisma.$AgentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentProfileCountArgs} args - Arguments to filter AgentProfiles to count.
     * @example
     * // Count the number of AgentProfiles
     * const count = await prisma.agentProfile.count({
     *   where: {
     *     // ... the filter for the AgentProfiles we want to count
     *   }
     * })
    **/
    count<T extends AgentProfileCountArgs>(
      args?: Subset<T, AgentProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentProfileAggregateArgs>(args: Subset<T, AgentProfileAggregateArgs>): Prisma.PrismaPromise<GetAgentProfileAggregateType<T>>

    /**
     * Group by AgentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentProfileGroupByArgs['orderBy'] }
        : { orderBy?: AgentProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentProfile model
   */
  readonly fields: AgentProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hotels<T extends AgentProfile$hotelsArgs<ExtArgs> = {}>(args?: Subset<T, AgentProfile$hotelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AgentProfile model
   */
  interface AgentProfileFieldRefs {
    readonly userId: FieldRef<"AgentProfile", 'String'>
    readonly businessName: FieldRef<"AgentProfile", 'String'>
    readonly businessLicense: FieldRef<"AgentProfile", 'String'>
    readonly taxCode: FieldRef<"AgentProfile", 'String'>
    readonly idNumber: FieldRef<"AgentProfile", 'String'>
    readonly idCardImageUrl: FieldRef<"AgentProfile", 'String'>
    readonly approvalStatus: FieldRef<"AgentProfile", 'UserStatus'>
    readonly approvedAt: FieldRef<"AgentProfile", 'DateTime'>
    readonly rejectedReason: FieldRef<"AgentProfile", 'String'>
    readonly createdAt: FieldRef<"AgentProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"AgentProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgentProfile findUnique
   */
  export type AgentProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentProfile
     */
    select?: AgentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentProfile
     */
    omit?: AgentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentProfileInclude<ExtArgs> | null
    /**
     * Filter, which AgentProfile to fetch.
     */
    where: AgentProfileWhereUniqueInput
  }

  /**
   * AgentProfile findUniqueOrThrow
   */
  export type AgentProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentProfile
     */
    select?: AgentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentProfile
     */
    omit?: AgentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentProfileInclude<ExtArgs> | null
    /**
     * Filter, which AgentProfile to fetch.
     */
    where: AgentProfileWhereUniqueInput
  }

  /**
   * AgentProfile findFirst
   */
  export type AgentProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentProfile
     */
    select?: AgentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentProfile
     */
    omit?: AgentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentProfileInclude<ExtArgs> | null
    /**
     * Filter, which AgentProfile to fetch.
     */
    where?: AgentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentProfiles to fetch.
     */
    orderBy?: AgentProfileOrderByWithRelationInput | AgentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentProfiles.
     */
    cursor?: AgentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentProfiles.
     */
    distinct?: AgentProfileScalarFieldEnum | AgentProfileScalarFieldEnum[]
  }

  /**
   * AgentProfile findFirstOrThrow
   */
  export type AgentProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentProfile
     */
    select?: AgentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentProfile
     */
    omit?: AgentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentProfileInclude<ExtArgs> | null
    /**
     * Filter, which AgentProfile to fetch.
     */
    where?: AgentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentProfiles to fetch.
     */
    orderBy?: AgentProfileOrderByWithRelationInput | AgentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentProfiles.
     */
    cursor?: AgentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentProfiles.
     */
    distinct?: AgentProfileScalarFieldEnum | AgentProfileScalarFieldEnum[]
  }

  /**
   * AgentProfile findMany
   */
  export type AgentProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentProfile
     */
    select?: AgentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentProfile
     */
    omit?: AgentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentProfileInclude<ExtArgs> | null
    /**
     * Filter, which AgentProfiles to fetch.
     */
    where?: AgentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentProfiles to fetch.
     */
    orderBy?: AgentProfileOrderByWithRelationInput | AgentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentProfiles.
     */
    cursor?: AgentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentProfiles.
     */
    distinct?: AgentProfileScalarFieldEnum | AgentProfileScalarFieldEnum[]
  }

  /**
   * AgentProfile create
   */
  export type AgentProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentProfile
     */
    select?: AgentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentProfile
     */
    omit?: AgentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a AgentProfile.
     */
    data: XOR<AgentProfileCreateInput, AgentProfileUncheckedCreateInput>
  }

  /**
   * AgentProfile createMany
   */
  export type AgentProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentProfiles.
     */
    data: AgentProfileCreateManyInput | AgentProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgentProfile createManyAndReturn
   */
  export type AgentProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentProfile
     */
    select?: AgentProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentProfile
     */
    omit?: AgentProfileOmit<ExtArgs> | null
    /**
     * The data used to create many AgentProfiles.
     */
    data: AgentProfileCreateManyInput | AgentProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentProfile update
   */
  export type AgentProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentProfile
     */
    select?: AgentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentProfile
     */
    omit?: AgentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a AgentProfile.
     */
    data: XOR<AgentProfileUpdateInput, AgentProfileUncheckedUpdateInput>
    /**
     * Choose, which AgentProfile to update.
     */
    where: AgentProfileWhereUniqueInput
  }

  /**
   * AgentProfile updateMany
   */
  export type AgentProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentProfiles.
     */
    data: XOR<AgentProfileUpdateManyMutationInput, AgentProfileUncheckedUpdateManyInput>
    /**
     * Filter which AgentProfiles to update
     */
    where?: AgentProfileWhereInput
    /**
     * Limit how many AgentProfiles to update.
     */
    limit?: number
  }

  /**
   * AgentProfile updateManyAndReturn
   */
  export type AgentProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentProfile
     */
    select?: AgentProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentProfile
     */
    omit?: AgentProfileOmit<ExtArgs> | null
    /**
     * The data used to update AgentProfiles.
     */
    data: XOR<AgentProfileUpdateManyMutationInput, AgentProfileUncheckedUpdateManyInput>
    /**
     * Filter which AgentProfiles to update
     */
    where?: AgentProfileWhereInput
    /**
     * Limit how many AgentProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentProfile upsert
   */
  export type AgentProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentProfile
     */
    select?: AgentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentProfile
     */
    omit?: AgentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the AgentProfile to update in case it exists.
     */
    where: AgentProfileWhereUniqueInput
    /**
     * In case the AgentProfile found by the `where` argument doesn't exist, create a new AgentProfile with this data.
     */
    create: XOR<AgentProfileCreateInput, AgentProfileUncheckedCreateInput>
    /**
     * In case the AgentProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentProfileUpdateInput, AgentProfileUncheckedUpdateInput>
  }

  /**
   * AgentProfile delete
   */
  export type AgentProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentProfile
     */
    select?: AgentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentProfile
     */
    omit?: AgentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentProfileInclude<ExtArgs> | null
    /**
     * Filter which AgentProfile to delete.
     */
    where: AgentProfileWhereUniqueInput
  }

  /**
   * AgentProfile deleteMany
   */
  export type AgentProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentProfiles to delete
     */
    where?: AgentProfileWhereInput
    /**
     * Limit how many AgentProfiles to delete.
     */
    limit?: number
  }

  /**
   * AgentProfile.hotels
   */
  export type AgentProfile$hotelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    where?: HotelWhereInput
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    cursor?: HotelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * AgentProfile without action
   */
  export type AgentProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentProfile
     */
    select?: AgentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentProfile
     */
    omit?: AgentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentProfileInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    deviceName: string | null
    ipAddress: string | null
    userAgent: string | null
    expiresAt: Date | null
    createdAt: Date | null
    lastUsedAt: Date | null
    revokedAt: Date | null
    revokeReason: string | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    deviceName: string | null
    ipAddress: string | null
    userAgent: string | null
    expiresAt: Date | null
    createdAt: Date | null
    lastUsedAt: Date | null
    revokedAt: Date | null
    revokeReason: string | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    deviceName: number
    ipAddress: number
    userAgent: number
    expiresAt: number
    createdAt: number
    lastUsedAt: number
    revokedAt: number
    revokeReason: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    deviceName?: true
    ipAddress?: true
    userAgent?: true
    expiresAt?: true
    createdAt?: true
    lastUsedAt?: true
    revokedAt?: true
    revokeReason?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    deviceName?: true
    ipAddress?: true
    userAgent?: true
    expiresAt?: true
    createdAt?: true
    lastUsedAt?: true
    revokedAt?: true
    revokeReason?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    deviceName?: true
    ipAddress?: true
    userAgent?: true
    expiresAt?: true
    createdAt?: true
    lastUsedAt?: true
    revokedAt?: true
    revokeReason?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    userId: string
    tokenHash: string
    deviceName: string | null
    ipAddress: string | null
    userAgent: string | null
    expiresAt: Date
    createdAt: Date
    lastUsedAt: Date | null
    revokedAt: Date | null
    revokeReason: string | null
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    deviceName?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    lastUsedAt?: boolean
    revokedAt?: boolean
    revokeReason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    deviceName?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    lastUsedAt?: boolean
    revokedAt?: boolean
    revokeReason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    deviceName?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    lastUsedAt?: boolean
    revokedAt?: boolean
    revokeReason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    deviceName?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    lastUsedAt?: boolean
    revokedAt?: boolean
    revokeReason?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenHash" | "deviceName" | "ipAddress" | "userAgent" | "expiresAt" | "createdAt" | "lastUsedAt" | "revokedAt" | "revokeReason", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenHash: string
      deviceName: string | null
      ipAddress: string | null
      userAgent: string | null
      expiresAt: Date
      createdAt: Date
      lastUsedAt: Date | null
      revokedAt: Date | null
      revokeReason: string | null
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly tokenHash: FieldRef<"RefreshToken", 'String'>
    readonly deviceName: FieldRef<"RefreshToken", 'String'>
    readonly ipAddress: FieldRef<"RefreshToken", 'String'>
    readonly userAgent: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly lastUsedAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revokedAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revokeReason: FieldRef<"RefreshToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Hotel
   */

  export type AggregateHotel = {
    _count: HotelCountAggregateOutputType | null
    _avg: HotelAvgAggregateOutputType | null
    _sum: HotelSumAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  export type HotelAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    rating: number | null
  }

  export type HotelSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    rating: number | null
  }

  export type HotelMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    name: string | null
    slug: string | null
    description: string | null
    address: string | null
    city: string | null
    country: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    phone: string | null
    email: string | null
    thumbnail: string | null
    rating: number | null
    checkInTime: string | null
    checkOutTime: string | null
    status: $Enums.HotelStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type HotelMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    name: string | null
    slug: string | null
    description: string | null
    address: string | null
    city: string | null
    country: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    phone: string | null
    email: string | null
    thumbnail: string | null
    rating: number | null
    checkInTime: string | null
    checkOutTime: string | null
    status: $Enums.HotelStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type HotelCountAggregateOutputType = {
    id: number
    ownerId: number
    name: number
    slug: number
    description: number
    address: number
    city: number
    country: number
    latitude: number
    longitude: number
    phone: number
    email: number
    thumbnail: number
    rating: number
    checkInTime: number
    checkOutTime: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type HotelAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    rating?: true
  }

  export type HotelSumAggregateInputType = {
    latitude?: true
    longitude?: true
    rating?: true
  }

  export type HotelMinAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    slug?: true
    description?: true
    address?: true
    city?: true
    country?: true
    latitude?: true
    longitude?: true
    phone?: true
    email?: true
    thumbnail?: true
    rating?: true
    checkInTime?: true
    checkOutTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type HotelMaxAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    slug?: true
    description?: true
    address?: true
    city?: true
    country?: true
    latitude?: true
    longitude?: true
    phone?: true
    email?: true
    thumbnail?: true
    rating?: true
    checkInTime?: true
    checkOutTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type HotelCountAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    slug?: true
    description?: true
    address?: true
    city?: true
    country?: true
    latitude?: true
    longitude?: true
    phone?: true
    email?: true
    thumbnail?: true
    rating?: true
    checkInTime?: true
    checkOutTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type HotelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotel to aggregate.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hotels
    **/
    _count?: true | HotelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelMaxAggregateInputType
  }

  export type GetHotelAggregateType<T extends HotelAggregateArgs> = {
        [P in keyof T & keyof AggregateHotel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotel[P]>
      : GetScalarType<T[P], AggregateHotel[P]>
  }




  export type HotelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelWhereInput
    orderBy?: HotelOrderByWithAggregationInput | HotelOrderByWithAggregationInput[]
    by: HotelScalarFieldEnum[] | HotelScalarFieldEnum
    having?: HotelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelCountAggregateInputType | true
    _avg?: HotelAvgAggregateInputType
    _sum?: HotelSumAggregateInputType
    _min?: HotelMinAggregateInputType
    _max?: HotelMaxAggregateInputType
  }

  export type HotelGroupByOutputType = {
    id: string
    ownerId: string
    name: string
    slug: string
    description: string | null
    address: string
    city: string
    country: string
    latitude: Decimal | null
    longitude: Decimal | null
    phone: string | null
    email: string | null
    thumbnail: string | null
    rating: number
    checkInTime: string | null
    checkOutTime: string | null
    status: $Enums.HotelStatus
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: HotelCountAggregateOutputType | null
    _avg: HotelAvgAggregateOutputType | null
    _sum: HotelSumAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  type GetHotelGroupByPayload<T extends HotelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelGroupByOutputType[P]>
            : GetScalarType<T[P], HotelGroupByOutputType[P]>
        }
      >
    >


  export type HotelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    email?: boolean
    thumbnail?: boolean
    rating?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    owner?: boolean | AgentProfileDefaultArgs<ExtArgs>
    images?: boolean | Hotel$imagesArgs<ExtArgs>
    rooms?: boolean | Hotel$roomsArgs<ExtArgs>
    roomTypes?: boolean | Hotel$roomTypesArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    email?: boolean
    thumbnail?: boolean
    rating?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    owner?: boolean | AgentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    email?: boolean
    thumbnail?: boolean
    rating?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    owner?: boolean | AgentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectScalar = {
    id?: boolean
    ownerId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    email?: boolean
    thumbnail?: boolean
    rating?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type HotelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "name" | "slug" | "description" | "address" | "city" | "country" | "latitude" | "longitude" | "phone" | "email" | "thumbnail" | "rating" | "checkInTime" | "checkOutTime" | "status" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["hotel"]>
  export type HotelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | AgentProfileDefaultArgs<ExtArgs>
    images?: boolean | Hotel$imagesArgs<ExtArgs>
    rooms?: boolean | Hotel$roomsArgs<ExtArgs>
    roomTypes?: boolean | Hotel$roomTypesArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HotelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | AgentProfileDefaultArgs<ExtArgs>
  }
  export type HotelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | AgentProfileDefaultArgs<ExtArgs>
  }

  export type $HotelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hotel"
    objects: {
      owner: Prisma.$AgentProfilePayload<ExtArgs>
      images: Prisma.$HotelImagePayload<ExtArgs>[]
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      roomTypes: Prisma.$RoomTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      name: string
      slug: string
      description: string | null
      address: string
      city: string
      country: string
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      phone: string | null
      email: string | null
      thumbnail: string | null
      rating: number
      checkInTime: string | null
      checkOutTime: string | null
      status: $Enums.HotelStatus
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["hotel"]>
    composites: {}
  }

  type HotelGetPayload<S extends boolean | null | undefined | HotelDefaultArgs> = $Result.GetResult<Prisma.$HotelPayload, S>

  type HotelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelCountAggregateInputType | true
    }

  export interface HotelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hotel'], meta: { name: 'Hotel' } }
    /**
     * Find zero or one Hotel that matches the filter.
     * @param {HotelFindUniqueArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelFindUniqueArgs>(args: SelectSubset<T, HotelFindUniqueArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hotel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelFindUniqueOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelFindFirstArgs>(args?: SelectSubset<T, HotelFindFirstArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotels
     * const hotels = await prisma.hotel.findMany()
     * 
     * // Get first 10 Hotels
     * const hotels = await prisma.hotel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelWithIdOnly = await prisma.hotel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelFindManyArgs>(args?: SelectSubset<T, HotelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hotel.
     * @param {HotelCreateArgs} args - Arguments to create a Hotel.
     * @example
     * // Create one Hotel
     * const Hotel = await prisma.hotel.create({
     *   data: {
     *     // ... data to create a Hotel
     *   }
     * })
     * 
     */
    create<T extends HotelCreateArgs>(args: SelectSubset<T, HotelCreateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hotels.
     * @param {HotelCreateManyArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelCreateManyArgs>(args?: SelectSubset<T, HotelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hotels and returns the data saved in the database.
     * @param {HotelCreateManyAndReturnArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hotels and only return the `id`
     * const hotelWithIdOnly = await prisma.hotel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotelCreateManyAndReturnArgs>(args?: SelectSubset<T, HotelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hotel.
     * @param {HotelDeleteArgs} args - Arguments to delete one Hotel.
     * @example
     * // Delete one Hotel
     * const Hotel = await prisma.hotel.delete({
     *   where: {
     *     // ... filter to delete one Hotel
     *   }
     * })
     * 
     */
    delete<T extends HotelDeleteArgs>(args: SelectSubset<T, HotelDeleteArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hotel.
     * @param {HotelUpdateArgs} args - Arguments to update one Hotel.
     * @example
     * // Update one Hotel
     * const hotel = await prisma.hotel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelUpdateArgs>(args: SelectSubset<T, HotelUpdateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hotels.
     * @param {HotelDeleteManyArgs} args - Arguments to filter Hotels to delete.
     * @example
     * // Delete a few Hotels
     * const { count } = await prisma.hotel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelDeleteManyArgs>(args?: SelectSubset<T, HotelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelUpdateManyArgs>(args: SelectSubset<T, HotelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels and returns the data updated in the database.
     * @param {HotelUpdateManyAndReturnArgs} args - Arguments to update many Hotels.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hotels and only return the `id`
     * const hotelWithIdOnly = await prisma.hotel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HotelUpdateManyAndReturnArgs>(args: SelectSubset<T, HotelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hotel.
     * @param {HotelUpsertArgs} args - Arguments to update or create a Hotel.
     * @example
     * // Update or create a Hotel
     * const hotel = await prisma.hotel.upsert({
     *   create: {
     *     // ... data to create a Hotel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotel we want to update
     *   }
     * })
     */
    upsert<T extends HotelUpsertArgs>(args: SelectSubset<T, HotelUpsertArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelCountArgs} args - Arguments to filter Hotels to count.
     * @example
     * // Count the number of Hotels
     * const count = await prisma.hotel.count({
     *   where: {
     *     // ... the filter for the Hotels we want to count
     *   }
     * })
    **/
    count<T extends HotelCountArgs>(
      args?: Subset<T, HotelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HotelAggregateArgs>(args: Subset<T, HotelAggregateArgs>): Prisma.PrismaPromise<GetHotelAggregateType<T>>

    /**
     * Group by Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HotelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelGroupByArgs['orderBy'] }
        : { orderBy?: HotelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HotelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hotel model
   */
  readonly fields: HotelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hotel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends AgentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentProfileDefaultArgs<ExtArgs>>): Prisma__AgentProfileClient<$Result.GetResult<Prisma.$AgentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Hotel$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rooms<T extends Hotel$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roomTypes<T extends Hotel$roomTypesArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$roomTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hotel model
   */
  interface HotelFieldRefs {
    readonly id: FieldRef<"Hotel", 'String'>
    readonly ownerId: FieldRef<"Hotel", 'String'>
    readonly name: FieldRef<"Hotel", 'String'>
    readonly slug: FieldRef<"Hotel", 'String'>
    readonly description: FieldRef<"Hotel", 'String'>
    readonly address: FieldRef<"Hotel", 'String'>
    readonly city: FieldRef<"Hotel", 'String'>
    readonly country: FieldRef<"Hotel", 'String'>
    readonly latitude: FieldRef<"Hotel", 'Decimal'>
    readonly longitude: FieldRef<"Hotel", 'Decimal'>
    readonly phone: FieldRef<"Hotel", 'String'>
    readonly email: FieldRef<"Hotel", 'String'>
    readonly thumbnail: FieldRef<"Hotel", 'String'>
    readonly rating: FieldRef<"Hotel", 'Float'>
    readonly checkInTime: FieldRef<"Hotel", 'String'>
    readonly checkOutTime: FieldRef<"Hotel", 'String'>
    readonly status: FieldRef<"Hotel", 'HotelStatus'>
    readonly createdAt: FieldRef<"Hotel", 'DateTime'>
    readonly updatedAt: FieldRef<"Hotel", 'DateTime'>
    readonly deletedAt: FieldRef<"Hotel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hotel findUnique
   */
  export type HotelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findUniqueOrThrow
   */
  export type HotelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findFirst
   */
  export type HotelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findFirstOrThrow
   */
  export type HotelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findMany
   */
  export type HotelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel create
   */
  export type HotelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to create a Hotel.
     */
    data: XOR<HotelCreateInput, HotelUncheckedCreateInput>
  }

  /**
   * Hotel createMany
   */
  export type HotelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotel createManyAndReturn
   */
  export type HotelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hotel update
   */
  export type HotelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to update a Hotel.
     */
    data: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
    /**
     * Choose, which Hotel to update.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel updateMany
   */
  export type HotelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotel updateManyAndReturn
   */
  export type HotelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hotel upsert
   */
  export type HotelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The filter to search for the Hotel to update in case it exists.
     */
    where: HotelWhereUniqueInput
    /**
     * In case the Hotel found by the `where` argument doesn't exist, create a new Hotel with this data.
     */
    create: XOR<HotelCreateInput, HotelUncheckedCreateInput>
    /**
     * In case the Hotel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
  }

  /**
   * Hotel delete
   */
  export type HotelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter which Hotel to delete.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel deleteMany
   */
  export type HotelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotels to delete
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to delete.
     */
    limit?: number
  }

  /**
   * Hotel.images
   */
  export type Hotel$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    where?: HotelImageWhereInput
    orderBy?: HotelImageOrderByWithRelationInput | HotelImageOrderByWithRelationInput[]
    cursor?: HotelImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HotelImageScalarFieldEnum | HotelImageScalarFieldEnum[]
  }

  /**
   * Hotel.rooms
   */
  export type Hotel$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Hotel.roomTypes
   */
  export type Hotel$roomTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    where?: RoomTypeWhereInput
    orderBy?: RoomTypeOrderByWithRelationInput | RoomTypeOrderByWithRelationInput[]
    cursor?: RoomTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomTypeScalarFieldEnum | RoomTypeScalarFieldEnum[]
  }

  /**
   * Hotel without action
   */
  export type HotelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
  }


  /**
   * Model HotelImage
   */

  export type AggregateHotelImage = {
    _count: HotelImageCountAggregateOutputType | null
    _min: HotelImageMinAggregateOutputType | null
    _max: HotelImageMaxAggregateOutputType | null
  }

  export type HotelImageMinAggregateOutputType = {
    id: string | null
    hotelId: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelImageMaxAggregateOutputType = {
    id: string | null
    hotelId: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelImageCountAggregateOutputType = {
    id: number
    hotelId: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HotelImageMinAggregateInputType = {
    id?: true
    hotelId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelImageMaxAggregateInputType = {
    id?: true
    hotelId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelImageCountAggregateInputType = {
    id?: true
    hotelId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HotelImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelImage to aggregate.
     */
    where?: HotelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelImages to fetch.
     */
    orderBy?: HotelImageOrderByWithRelationInput | HotelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HotelImages
    **/
    _count?: true | HotelImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelImageMaxAggregateInputType
  }

  export type GetHotelImageAggregateType<T extends HotelImageAggregateArgs> = {
        [P in keyof T & keyof AggregateHotelImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotelImage[P]>
      : GetScalarType<T[P], AggregateHotelImage[P]>
  }




  export type HotelImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelImageWhereInput
    orderBy?: HotelImageOrderByWithAggregationInput | HotelImageOrderByWithAggregationInput[]
    by: HotelImageScalarFieldEnum[] | HotelImageScalarFieldEnum
    having?: HotelImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelImageCountAggregateInputType | true
    _min?: HotelImageMinAggregateInputType
    _max?: HotelImageMaxAggregateInputType
  }

  export type HotelImageGroupByOutputType = {
    id: string
    hotelId: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: HotelImageCountAggregateOutputType | null
    _min: HotelImageMinAggregateOutputType | null
    _max: HotelImageMaxAggregateOutputType | null
  }

  type GetHotelImageGroupByPayload<T extends HotelImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelImageGroupByOutputType[P]>
            : GetScalarType<T[P], HotelImageGroupByOutputType[P]>
        }
      >
    >


  export type HotelImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelImage"]>

  export type HotelImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelImage"]>

  export type HotelImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelImage"]>

  export type HotelImageSelectScalar = {
    id?: boolean
    hotelId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HotelImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hotelId" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["hotelImage"]>
  export type HotelImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type HotelImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type HotelImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $HotelImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HotelImage"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hotelId: string
      imageUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hotelImage"]>
    composites: {}
  }

  type HotelImageGetPayload<S extends boolean | null | undefined | HotelImageDefaultArgs> = $Result.GetResult<Prisma.$HotelImagePayload, S>

  type HotelImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelImageCountAggregateInputType | true
    }

  export interface HotelImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HotelImage'], meta: { name: 'HotelImage' } }
    /**
     * Find zero or one HotelImage that matches the filter.
     * @param {HotelImageFindUniqueArgs} args - Arguments to find a HotelImage
     * @example
     * // Get one HotelImage
     * const hotelImage = await prisma.hotelImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelImageFindUniqueArgs>(args: SelectSubset<T, HotelImageFindUniqueArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HotelImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelImageFindUniqueOrThrowArgs} args - Arguments to find a HotelImage
     * @example
     * // Get one HotelImage
     * const hotelImage = await prisma.hotelImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelImageFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageFindFirstArgs} args - Arguments to find a HotelImage
     * @example
     * // Get one HotelImage
     * const hotelImage = await prisma.hotelImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelImageFindFirstArgs>(args?: SelectSubset<T, HotelImageFindFirstArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageFindFirstOrThrowArgs} args - Arguments to find a HotelImage
     * @example
     * // Get one HotelImage
     * const hotelImage = await prisma.hotelImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelImageFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HotelImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HotelImages
     * const hotelImages = await prisma.hotelImage.findMany()
     * 
     * // Get first 10 HotelImages
     * const hotelImages = await prisma.hotelImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelImageWithIdOnly = await prisma.hotelImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelImageFindManyArgs>(args?: SelectSubset<T, HotelImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HotelImage.
     * @param {HotelImageCreateArgs} args - Arguments to create a HotelImage.
     * @example
     * // Create one HotelImage
     * const HotelImage = await prisma.hotelImage.create({
     *   data: {
     *     // ... data to create a HotelImage
     *   }
     * })
     * 
     */
    create<T extends HotelImageCreateArgs>(args: SelectSubset<T, HotelImageCreateArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HotelImages.
     * @param {HotelImageCreateManyArgs} args - Arguments to create many HotelImages.
     * @example
     * // Create many HotelImages
     * const hotelImage = await prisma.hotelImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelImageCreateManyArgs>(args?: SelectSubset<T, HotelImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HotelImages and returns the data saved in the database.
     * @param {HotelImageCreateManyAndReturnArgs} args - Arguments to create many HotelImages.
     * @example
     * // Create many HotelImages
     * const hotelImage = await prisma.hotelImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HotelImages and only return the `id`
     * const hotelImageWithIdOnly = await prisma.hotelImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotelImageCreateManyAndReturnArgs>(args?: SelectSubset<T, HotelImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HotelImage.
     * @param {HotelImageDeleteArgs} args - Arguments to delete one HotelImage.
     * @example
     * // Delete one HotelImage
     * const HotelImage = await prisma.hotelImage.delete({
     *   where: {
     *     // ... filter to delete one HotelImage
     *   }
     * })
     * 
     */
    delete<T extends HotelImageDeleteArgs>(args: SelectSubset<T, HotelImageDeleteArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HotelImage.
     * @param {HotelImageUpdateArgs} args - Arguments to update one HotelImage.
     * @example
     * // Update one HotelImage
     * const hotelImage = await prisma.hotelImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelImageUpdateArgs>(args: SelectSubset<T, HotelImageUpdateArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HotelImages.
     * @param {HotelImageDeleteManyArgs} args - Arguments to filter HotelImages to delete.
     * @example
     * // Delete a few HotelImages
     * const { count } = await prisma.hotelImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelImageDeleteManyArgs>(args?: SelectSubset<T, HotelImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HotelImages
     * const hotelImage = await prisma.hotelImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelImageUpdateManyArgs>(args: SelectSubset<T, HotelImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelImages and returns the data updated in the database.
     * @param {HotelImageUpdateManyAndReturnArgs} args - Arguments to update many HotelImages.
     * @example
     * // Update many HotelImages
     * const hotelImage = await prisma.hotelImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HotelImages and only return the `id`
     * const hotelImageWithIdOnly = await prisma.hotelImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HotelImageUpdateManyAndReturnArgs>(args: SelectSubset<T, HotelImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HotelImage.
     * @param {HotelImageUpsertArgs} args - Arguments to update or create a HotelImage.
     * @example
     * // Update or create a HotelImage
     * const hotelImage = await prisma.hotelImage.upsert({
     *   create: {
     *     // ... data to create a HotelImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HotelImage we want to update
     *   }
     * })
     */
    upsert<T extends HotelImageUpsertArgs>(args: SelectSubset<T, HotelImageUpsertArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HotelImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageCountArgs} args - Arguments to filter HotelImages to count.
     * @example
     * // Count the number of HotelImages
     * const count = await prisma.hotelImage.count({
     *   where: {
     *     // ... the filter for the HotelImages we want to count
     *   }
     * })
    **/
    count<T extends HotelImageCountArgs>(
      args?: Subset<T, HotelImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HotelImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HotelImageAggregateArgs>(args: Subset<T, HotelImageAggregateArgs>): Prisma.PrismaPromise<GetHotelImageAggregateType<T>>

    /**
     * Group by HotelImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HotelImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelImageGroupByArgs['orderBy'] }
        : { orderBy?: HotelImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HotelImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HotelImage model
   */
  readonly fields: HotelImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HotelImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HotelImage model
   */
  interface HotelImageFieldRefs {
    readonly id: FieldRef<"HotelImage", 'String'>
    readonly hotelId: FieldRef<"HotelImage", 'String'>
    readonly imageUrl: FieldRef<"HotelImage", 'String'>
    readonly createdAt: FieldRef<"HotelImage", 'DateTime'>
    readonly updatedAt: FieldRef<"HotelImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HotelImage findUnique
   */
  export type HotelImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter, which HotelImage to fetch.
     */
    where: HotelImageWhereUniqueInput
  }

  /**
   * HotelImage findUniqueOrThrow
   */
  export type HotelImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter, which HotelImage to fetch.
     */
    where: HotelImageWhereUniqueInput
  }

  /**
   * HotelImage findFirst
   */
  export type HotelImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter, which HotelImage to fetch.
     */
    where?: HotelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelImages to fetch.
     */
    orderBy?: HotelImageOrderByWithRelationInput | HotelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelImages.
     */
    cursor?: HotelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelImages.
     */
    distinct?: HotelImageScalarFieldEnum | HotelImageScalarFieldEnum[]
  }

  /**
   * HotelImage findFirstOrThrow
   */
  export type HotelImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter, which HotelImage to fetch.
     */
    where?: HotelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelImages to fetch.
     */
    orderBy?: HotelImageOrderByWithRelationInput | HotelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelImages.
     */
    cursor?: HotelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelImages.
     */
    distinct?: HotelImageScalarFieldEnum | HotelImageScalarFieldEnum[]
  }

  /**
   * HotelImage findMany
   */
  export type HotelImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter, which HotelImages to fetch.
     */
    where?: HotelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelImages to fetch.
     */
    orderBy?: HotelImageOrderByWithRelationInput | HotelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HotelImages.
     */
    cursor?: HotelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelImages.
     */
    distinct?: HotelImageScalarFieldEnum | HotelImageScalarFieldEnum[]
  }

  /**
   * HotelImage create
   */
  export type HotelImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * The data needed to create a HotelImage.
     */
    data: XOR<HotelImageCreateInput, HotelImageUncheckedCreateInput>
  }

  /**
   * HotelImage createMany
   */
  export type HotelImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HotelImages.
     */
    data: HotelImageCreateManyInput | HotelImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HotelImage createManyAndReturn
   */
  export type HotelImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * The data used to create many HotelImages.
     */
    data: HotelImageCreateManyInput | HotelImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HotelImage update
   */
  export type HotelImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * The data needed to update a HotelImage.
     */
    data: XOR<HotelImageUpdateInput, HotelImageUncheckedUpdateInput>
    /**
     * Choose, which HotelImage to update.
     */
    where: HotelImageWhereUniqueInput
  }

  /**
   * HotelImage updateMany
   */
  export type HotelImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HotelImages.
     */
    data: XOR<HotelImageUpdateManyMutationInput, HotelImageUncheckedUpdateManyInput>
    /**
     * Filter which HotelImages to update
     */
    where?: HotelImageWhereInput
    /**
     * Limit how many HotelImages to update.
     */
    limit?: number
  }

  /**
   * HotelImage updateManyAndReturn
   */
  export type HotelImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * The data used to update HotelImages.
     */
    data: XOR<HotelImageUpdateManyMutationInput, HotelImageUncheckedUpdateManyInput>
    /**
     * Filter which HotelImages to update
     */
    where?: HotelImageWhereInput
    /**
     * Limit how many HotelImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HotelImage upsert
   */
  export type HotelImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * The filter to search for the HotelImage to update in case it exists.
     */
    where: HotelImageWhereUniqueInput
    /**
     * In case the HotelImage found by the `where` argument doesn't exist, create a new HotelImage with this data.
     */
    create: XOR<HotelImageCreateInput, HotelImageUncheckedCreateInput>
    /**
     * In case the HotelImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelImageUpdateInput, HotelImageUncheckedUpdateInput>
  }

  /**
   * HotelImage delete
   */
  export type HotelImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter which HotelImage to delete.
     */
    where: HotelImageWhereUniqueInput
  }

  /**
   * HotelImage deleteMany
   */
  export type HotelImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelImages to delete
     */
    where?: HotelImageWhereInput
    /**
     * Limit how many HotelImages to delete.
     */
    limit?: number
  }

  /**
   * HotelImage without action
   */
  export type HotelImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
  }


  /**
   * Model RoomType
   */

  export type AggregateRoomType = {
    _count: RoomTypeCountAggregateOutputType | null
    _avg: RoomTypeAvgAggregateOutputType | null
    _sum: RoomTypeSumAggregateOutputType | null
    _min: RoomTypeMinAggregateOutputType | null
    _max: RoomTypeMaxAggregateOutputType | null
  }

  export type RoomTypeAvgAggregateOutputType = {
    price: Decimal | null
    maxGuests: number | null
    maxAdults: number | null
    maxChildren: number | null
    bedCount: number | null
    area: number | null
  }

  export type RoomTypeSumAggregateOutputType = {
    price: Decimal | null
    maxGuests: number | null
    maxAdults: number | null
    maxChildren: number | null
    bedCount: number | null
    area: number | null
  }

  export type RoomTypeMinAggregateOutputType = {
    id: string | null
    hotelId: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    maxGuests: number | null
    maxAdults: number | null
    maxChildren: number | null
    bedType: $Enums.BedType | null
    bedCount: number | null
    area: number | null
    thumbnail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomTypeMaxAggregateOutputType = {
    id: string | null
    hotelId: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    maxGuests: number | null
    maxAdults: number | null
    maxChildren: number | null
    bedType: $Enums.BedType | null
    bedCount: number | null
    area: number | null
    thumbnail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomTypeCountAggregateOutputType = {
    id: number
    hotelId: number
    name: number
    description: number
    price: number
    maxGuests: number
    maxAdults: number
    maxChildren: number
    bedType: number
    bedCount: number
    area: number
    thumbnail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomTypeAvgAggregateInputType = {
    price?: true
    maxGuests?: true
    maxAdults?: true
    maxChildren?: true
    bedCount?: true
    area?: true
  }

  export type RoomTypeSumAggregateInputType = {
    price?: true
    maxGuests?: true
    maxAdults?: true
    maxChildren?: true
    bedCount?: true
    area?: true
  }

  export type RoomTypeMinAggregateInputType = {
    id?: true
    hotelId?: true
    name?: true
    description?: true
    price?: true
    maxGuests?: true
    maxAdults?: true
    maxChildren?: true
    bedType?: true
    bedCount?: true
    area?: true
    thumbnail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomTypeMaxAggregateInputType = {
    id?: true
    hotelId?: true
    name?: true
    description?: true
    price?: true
    maxGuests?: true
    maxAdults?: true
    maxChildren?: true
    bedType?: true
    bedCount?: true
    area?: true
    thumbnail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomTypeCountAggregateInputType = {
    id?: true
    hotelId?: true
    name?: true
    description?: true
    price?: true
    maxGuests?: true
    maxAdults?: true
    maxChildren?: true
    bedType?: true
    bedCount?: true
    area?: true
    thumbnail?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomType to aggregate.
     */
    where?: RoomTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypes to fetch.
     */
    orderBy?: RoomTypeOrderByWithRelationInput | RoomTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomTypes
    **/
    _count?: true | RoomTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomTypeMaxAggregateInputType
  }

  export type GetRoomTypeAggregateType<T extends RoomTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomType[P]>
      : GetScalarType<T[P], AggregateRoomType[P]>
  }




  export type RoomTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomTypeWhereInput
    orderBy?: RoomTypeOrderByWithAggregationInput | RoomTypeOrderByWithAggregationInput[]
    by: RoomTypeScalarFieldEnum[] | RoomTypeScalarFieldEnum
    having?: RoomTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomTypeCountAggregateInputType | true
    _avg?: RoomTypeAvgAggregateInputType
    _sum?: RoomTypeSumAggregateInputType
    _min?: RoomTypeMinAggregateInputType
    _max?: RoomTypeMaxAggregateInputType
  }

  export type RoomTypeGroupByOutputType = {
    id: string
    hotelId: string
    name: string
    description: string | null
    price: Decimal
    maxGuests: number
    maxAdults: number
    maxChildren: number
    bedType: $Enums.BedType
    bedCount: number
    area: number | null
    thumbnail: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoomTypeCountAggregateOutputType | null
    _avg: RoomTypeAvgAggregateOutputType | null
    _sum: RoomTypeSumAggregateOutputType | null
    _min: RoomTypeMinAggregateOutputType | null
    _max: RoomTypeMaxAggregateOutputType | null
  }

  type GetRoomTypeGroupByPayload<T extends RoomTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomTypeGroupByOutputType[P]>
            : GetScalarType<T[P], RoomTypeGroupByOutputType[P]>
        }
      >
    >


  export type RoomTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    maxGuests?: boolean
    maxAdults?: boolean
    maxChildren?: boolean
    bedType?: boolean
    bedCount?: boolean
    area?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    rooms?: boolean | RoomType$roomsArgs<ExtArgs>
    images?: boolean | RoomType$imagesArgs<ExtArgs>
    _count?: boolean | RoomTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomType"]>

  export type RoomTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    maxGuests?: boolean
    maxAdults?: boolean
    maxChildren?: boolean
    bedType?: boolean
    bedCount?: boolean
    area?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomType"]>

  export type RoomTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    maxGuests?: boolean
    maxAdults?: boolean
    maxChildren?: boolean
    bedType?: boolean
    bedCount?: boolean
    area?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomType"]>

  export type RoomTypeSelectScalar = {
    id?: boolean
    hotelId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    maxGuests?: boolean
    maxAdults?: boolean
    maxChildren?: boolean
    bedType?: boolean
    bedCount?: boolean
    area?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hotelId" | "name" | "description" | "price" | "maxGuests" | "maxAdults" | "maxChildren" | "bedType" | "bedCount" | "area" | "thumbnail" | "createdAt" | "updatedAt", ExtArgs["result"]["roomType"]>
  export type RoomTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    rooms?: boolean | RoomType$roomsArgs<ExtArgs>
    images?: boolean | RoomType$imagesArgs<ExtArgs>
    _count?: boolean | RoomTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type RoomTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $RoomTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomType"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs>
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      images: Prisma.$RoomTypeImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hotelId: string
      name: string
      description: string | null
      price: Prisma.Decimal
      maxGuests: number
      maxAdults: number
      maxChildren: number
      bedType: $Enums.BedType
      bedCount: number
      area: number | null
      thumbnail: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roomType"]>
    composites: {}
  }

  type RoomTypeGetPayload<S extends boolean | null | undefined | RoomTypeDefaultArgs> = $Result.GetResult<Prisma.$RoomTypePayload, S>

  type RoomTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomTypeCountAggregateInputType | true
    }

  export interface RoomTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomType'], meta: { name: 'RoomType' } }
    /**
     * Find zero or one RoomType that matches the filter.
     * @param {RoomTypeFindUniqueArgs} args - Arguments to find a RoomType
     * @example
     * // Get one RoomType
     * const roomType = await prisma.roomType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomTypeFindUniqueArgs>(args: SelectSubset<T, RoomTypeFindUniqueArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomTypeFindUniqueOrThrowArgs} args - Arguments to find a RoomType
     * @example
     * // Get one RoomType
     * const roomType = await prisma.roomType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeFindFirstArgs} args - Arguments to find a RoomType
     * @example
     * // Get one RoomType
     * const roomType = await prisma.roomType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomTypeFindFirstArgs>(args?: SelectSubset<T, RoomTypeFindFirstArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeFindFirstOrThrowArgs} args - Arguments to find a RoomType
     * @example
     * // Get one RoomType
     * const roomType = await prisma.roomType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomTypes
     * const roomTypes = await prisma.roomType.findMany()
     * 
     * // Get first 10 RoomTypes
     * const roomTypes = await prisma.roomType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomTypeWithIdOnly = await prisma.roomType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomTypeFindManyArgs>(args?: SelectSubset<T, RoomTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomType.
     * @param {RoomTypeCreateArgs} args - Arguments to create a RoomType.
     * @example
     * // Create one RoomType
     * const RoomType = await prisma.roomType.create({
     *   data: {
     *     // ... data to create a RoomType
     *   }
     * })
     * 
     */
    create<T extends RoomTypeCreateArgs>(args: SelectSubset<T, RoomTypeCreateArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomTypes.
     * @param {RoomTypeCreateManyArgs} args - Arguments to create many RoomTypes.
     * @example
     * // Create many RoomTypes
     * const roomType = await prisma.roomType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomTypeCreateManyArgs>(args?: SelectSubset<T, RoomTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomTypes and returns the data saved in the database.
     * @param {RoomTypeCreateManyAndReturnArgs} args - Arguments to create many RoomTypes.
     * @example
     * // Create many RoomTypes
     * const roomType = await prisma.roomType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomTypes and only return the `id`
     * const roomTypeWithIdOnly = await prisma.roomType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomType.
     * @param {RoomTypeDeleteArgs} args - Arguments to delete one RoomType.
     * @example
     * // Delete one RoomType
     * const RoomType = await prisma.roomType.delete({
     *   where: {
     *     // ... filter to delete one RoomType
     *   }
     * })
     * 
     */
    delete<T extends RoomTypeDeleteArgs>(args: SelectSubset<T, RoomTypeDeleteArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomType.
     * @param {RoomTypeUpdateArgs} args - Arguments to update one RoomType.
     * @example
     * // Update one RoomType
     * const roomType = await prisma.roomType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomTypeUpdateArgs>(args: SelectSubset<T, RoomTypeUpdateArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomTypes.
     * @param {RoomTypeDeleteManyArgs} args - Arguments to filter RoomTypes to delete.
     * @example
     * // Delete a few RoomTypes
     * const { count } = await prisma.roomType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomTypeDeleteManyArgs>(args?: SelectSubset<T, RoomTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomTypes
     * const roomType = await prisma.roomType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomTypeUpdateManyArgs>(args: SelectSubset<T, RoomTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomTypes and returns the data updated in the database.
     * @param {RoomTypeUpdateManyAndReturnArgs} args - Arguments to update many RoomTypes.
     * @example
     * // Update many RoomTypes
     * const roomType = await prisma.roomType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomTypes and only return the `id`
     * const roomTypeWithIdOnly = await prisma.roomType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomType.
     * @param {RoomTypeUpsertArgs} args - Arguments to update or create a RoomType.
     * @example
     * // Update or create a RoomType
     * const roomType = await prisma.roomType.upsert({
     *   create: {
     *     // ... data to create a RoomType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomType we want to update
     *   }
     * })
     */
    upsert<T extends RoomTypeUpsertArgs>(args: SelectSubset<T, RoomTypeUpsertArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeCountArgs} args - Arguments to filter RoomTypes to count.
     * @example
     * // Count the number of RoomTypes
     * const count = await prisma.roomType.count({
     *   where: {
     *     // ... the filter for the RoomTypes we want to count
     *   }
     * })
    **/
    count<T extends RoomTypeCountArgs>(
      args?: Subset<T, RoomTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomTypeAggregateArgs>(args: Subset<T, RoomTypeAggregateArgs>): Prisma.PrismaPromise<GetRoomTypeAggregateType<T>>

    /**
     * Group by RoomType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomTypeGroupByArgs['orderBy'] }
        : { orderBy?: RoomTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomType model
   */
  readonly fields: RoomTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rooms<T extends RoomType$roomsArgs<ExtArgs> = {}>(args?: Subset<T, RoomType$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends RoomType$imagesArgs<ExtArgs> = {}>(args?: Subset<T, RoomType$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypeImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomType model
   */
  interface RoomTypeFieldRefs {
    readonly id: FieldRef<"RoomType", 'String'>
    readonly hotelId: FieldRef<"RoomType", 'String'>
    readonly name: FieldRef<"RoomType", 'String'>
    readonly description: FieldRef<"RoomType", 'String'>
    readonly price: FieldRef<"RoomType", 'Decimal'>
    readonly maxGuests: FieldRef<"RoomType", 'Int'>
    readonly maxAdults: FieldRef<"RoomType", 'Int'>
    readonly maxChildren: FieldRef<"RoomType", 'Int'>
    readonly bedType: FieldRef<"RoomType", 'BedType'>
    readonly bedCount: FieldRef<"RoomType", 'Int'>
    readonly area: FieldRef<"RoomType", 'Float'>
    readonly thumbnail: FieldRef<"RoomType", 'String'>
    readonly createdAt: FieldRef<"RoomType", 'DateTime'>
    readonly updatedAt: FieldRef<"RoomType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomType findUnique
   */
  export type RoomTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter, which RoomType to fetch.
     */
    where: RoomTypeWhereUniqueInput
  }

  /**
   * RoomType findUniqueOrThrow
   */
  export type RoomTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter, which RoomType to fetch.
     */
    where: RoomTypeWhereUniqueInput
  }

  /**
   * RoomType findFirst
   */
  export type RoomTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter, which RoomType to fetch.
     */
    where?: RoomTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypes to fetch.
     */
    orderBy?: RoomTypeOrderByWithRelationInput | RoomTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomTypes.
     */
    cursor?: RoomTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTypes.
     */
    distinct?: RoomTypeScalarFieldEnum | RoomTypeScalarFieldEnum[]
  }

  /**
   * RoomType findFirstOrThrow
   */
  export type RoomTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter, which RoomType to fetch.
     */
    where?: RoomTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypes to fetch.
     */
    orderBy?: RoomTypeOrderByWithRelationInput | RoomTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomTypes.
     */
    cursor?: RoomTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTypes.
     */
    distinct?: RoomTypeScalarFieldEnum | RoomTypeScalarFieldEnum[]
  }

  /**
   * RoomType findMany
   */
  export type RoomTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter, which RoomTypes to fetch.
     */
    where?: RoomTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypes to fetch.
     */
    orderBy?: RoomTypeOrderByWithRelationInput | RoomTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomTypes.
     */
    cursor?: RoomTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTypes.
     */
    distinct?: RoomTypeScalarFieldEnum | RoomTypeScalarFieldEnum[]
  }

  /**
   * RoomType create
   */
  export type RoomTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomType.
     */
    data: XOR<RoomTypeCreateInput, RoomTypeUncheckedCreateInput>
  }

  /**
   * RoomType createMany
   */
  export type RoomTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomTypes.
     */
    data: RoomTypeCreateManyInput | RoomTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomType createManyAndReturn
   */
  export type RoomTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * The data used to create many RoomTypes.
     */
    data: RoomTypeCreateManyInput | RoomTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomType update
   */
  export type RoomTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomType.
     */
    data: XOR<RoomTypeUpdateInput, RoomTypeUncheckedUpdateInput>
    /**
     * Choose, which RoomType to update.
     */
    where: RoomTypeWhereUniqueInput
  }

  /**
   * RoomType updateMany
   */
  export type RoomTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomTypes.
     */
    data: XOR<RoomTypeUpdateManyMutationInput, RoomTypeUncheckedUpdateManyInput>
    /**
     * Filter which RoomTypes to update
     */
    where?: RoomTypeWhereInput
    /**
     * Limit how many RoomTypes to update.
     */
    limit?: number
  }

  /**
   * RoomType updateManyAndReturn
   */
  export type RoomTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * The data used to update RoomTypes.
     */
    data: XOR<RoomTypeUpdateManyMutationInput, RoomTypeUncheckedUpdateManyInput>
    /**
     * Filter which RoomTypes to update
     */
    where?: RoomTypeWhereInput
    /**
     * Limit how many RoomTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomType upsert
   */
  export type RoomTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomType to update in case it exists.
     */
    where: RoomTypeWhereUniqueInput
    /**
     * In case the RoomType found by the `where` argument doesn't exist, create a new RoomType with this data.
     */
    create: XOR<RoomTypeCreateInput, RoomTypeUncheckedCreateInput>
    /**
     * In case the RoomType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomTypeUpdateInput, RoomTypeUncheckedUpdateInput>
  }

  /**
   * RoomType delete
   */
  export type RoomTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter which RoomType to delete.
     */
    where: RoomTypeWhereUniqueInput
  }

  /**
   * RoomType deleteMany
   */
  export type RoomTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomTypes to delete
     */
    where?: RoomTypeWhereInput
    /**
     * Limit how many RoomTypes to delete.
     */
    limit?: number
  }

  /**
   * RoomType.rooms
   */
  export type RoomType$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * RoomType.images
   */
  export type RoomType$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypeImage
     */
    select?: RoomTypeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypeImage
     */
    omit?: RoomTypeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeImageInclude<ExtArgs> | null
    where?: RoomTypeImageWhereInput
    orderBy?: RoomTypeImageOrderByWithRelationInput | RoomTypeImageOrderByWithRelationInput[]
    cursor?: RoomTypeImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomTypeImageScalarFieldEnum | RoomTypeImageScalarFieldEnum[]
  }

  /**
   * RoomType without action
   */
  export type RoomTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    floor: number | null
  }

  export type RoomSumAggregateOutputType = {
    floor: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    hotelId: string | null
    roomTypeId: string | null
    roomNumber: string | null
    floor: number | null
    status: $Enums.RoomStatus | null
    note: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    hotelId: string | null
    roomTypeId: string | null
    roomNumber: string | null
    floor: number | null
    status: $Enums.RoomStatus | null
    note: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    hotelId: number
    roomTypeId: number
    roomNumber: number
    floor: number
    status: number
    note: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    floor?: true
  }

  export type RoomSumAggregateInputType = {
    floor?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    hotelId?: true
    roomTypeId?: true
    roomNumber?: true
    floor?: true
    status?: true
    note?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    hotelId?: true
    roomTypeId?: true
    roomNumber?: true
    floor?: true
    status?: true
    note?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    hotelId?: true
    roomTypeId?: true
    roomNumber?: true
    floor?: true
    status?: true
    note?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    hotelId: string
    roomTypeId: string
    roomNumber: string
    floor: number | null
    status: $Enums.RoomStatus
    note: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    roomTypeId?: boolean
    roomNumber?: boolean
    floor?: boolean
    status?: boolean
    note?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    roomTypeId?: boolean
    roomNumber?: boolean
    floor?: boolean
    status?: boolean
    note?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    roomTypeId?: boolean
    roomNumber?: boolean
    floor?: boolean
    status?: boolean
    note?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    hotelId?: boolean
    roomTypeId?: boolean
    roomNumber?: boolean
    floor?: boolean
    status?: boolean
    note?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hotelId" | "roomTypeId" | "roomNumber" | "floor" | "status" | "note" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs>
      roomType: Prisma.$RoomTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hotelId: string
      roomTypeId: string
      roomNumber: string
      floor: number | null
      status: $Enums.RoomStatus
      note: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    roomType<T extends RoomTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomTypeDefaultArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly hotelId: FieldRef<"Room", 'String'>
    readonly roomTypeId: FieldRef<"Room", 'String'>
    readonly roomNumber: FieldRef<"Room", 'String'>
    readonly floor: FieldRef<"Room", 'Int'>
    readonly status: FieldRef<"Room", 'RoomStatus'>
    readonly note: FieldRef<"Room", 'String'>
    readonly isActive: FieldRef<"Room", 'Boolean'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomTypeImage
   */

  export type AggregateRoomTypeImage = {
    _count: RoomTypeImageCountAggregateOutputType | null
    _min: RoomTypeImageMinAggregateOutputType | null
    _max: RoomTypeImageMaxAggregateOutputType | null
  }

  export type RoomTypeImageMinAggregateOutputType = {
    id: string | null
    roomTypeId: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomTypeImageMaxAggregateOutputType = {
    id: string | null
    roomTypeId: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomTypeImageCountAggregateOutputType = {
    id: number
    roomTypeId: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomTypeImageMinAggregateInputType = {
    id?: true
    roomTypeId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomTypeImageMaxAggregateInputType = {
    id?: true
    roomTypeId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomTypeImageCountAggregateInputType = {
    id?: true
    roomTypeId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomTypeImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomTypeImage to aggregate.
     */
    where?: RoomTypeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypeImages to fetch.
     */
    orderBy?: RoomTypeImageOrderByWithRelationInput | RoomTypeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomTypeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomTypeImages
    **/
    _count?: true | RoomTypeImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomTypeImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomTypeImageMaxAggregateInputType
  }

  export type GetRoomTypeImageAggregateType<T extends RoomTypeImageAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomTypeImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomTypeImage[P]>
      : GetScalarType<T[P], AggregateRoomTypeImage[P]>
  }




  export type RoomTypeImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomTypeImageWhereInput
    orderBy?: RoomTypeImageOrderByWithAggregationInput | RoomTypeImageOrderByWithAggregationInput[]
    by: RoomTypeImageScalarFieldEnum[] | RoomTypeImageScalarFieldEnum
    having?: RoomTypeImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomTypeImageCountAggregateInputType | true
    _min?: RoomTypeImageMinAggregateInputType
    _max?: RoomTypeImageMaxAggregateInputType
  }

  export type RoomTypeImageGroupByOutputType = {
    id: string
    roomTypeId: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: RoomTypeImageCountAggregateOutputType | null
    _min: RoomTypeImageMinAggregateOutputType | null
    _max: RoomTypeImageMaxAggregateOutputType | null
  }

  type GetRoomTypeImageGroupByPayload<T extends RoomTypeImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomTypeImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomTypeImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomTypeImageGroupByOutputType[P]>
            : GetScalarType<T[P], RoomTypeImageGroupByOutputType[P]>
        }
      >
    >


  export type RoomTypeImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomTypeId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomTypeImage"]>

  export type RoomTypeImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomTypeId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomTypeImage"]>

  export type RoomTypeImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomTypeId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomTypeImage"]>

  export type RoomTypeImageSelectScalar = {
    id?: boolean
    roomTypeId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomTypeImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomTypeId" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["roomTypeImage"]>
  export type RoomTypeImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
  }
  export type RoomTypeImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
  }
  export type RoomTypeImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
  }

  export type $RoomTypeImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomTypeImage"
    objects: {
      roomType: Prisma.$RoomTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomTypeId: string
      imageUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roomTypeImage"]>
    composites: {}
  }

  type RoomTypeImageGetPayload<S extends boolean | null | undefined | RoomTypeImageDefaultArgs> = $Result.GetResult<Prisma.$RoomTypeImagePayload, S>

  type RoomTypeImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomTypeImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomTypeImageCountAggregateInputType | true
    }

  export interface RoomTypeImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomTypeImage'], meta: { name: 'RoomTypeImage' } }
    /**
     * Find zero or one RoomTypeImage that matches the filter.
     * @param {RoomTypeImageFindUniqueArgs} args - Arguments to find a RoomTypeImage
     * @example
     * // Get one RoomTypeImage
     * const roomTypeImage = await prisma.roomTypeImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomTypeImageFindUniqueArgs>(args: SelectSubset<T, RoomTypeImageFindUniqueArgs<ExtArgs>>): Prisma__RoomTypeImageClient<$Result.GetResult<Prisma.$RoomTypeImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomTypeImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomTypeImageFindUniqueOrThrowArgs} args - Arguments to find a RoomTypeImage
     * @example
     * // Get one RoomTypeImage
     * const roomTypeImage = await prisma.roomTypeImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomTypeImageFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomTypeImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomTypeImageClient<$Result.GetResult<Prisma.$RoomTypeImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomTypeImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeImageFindFirstArgs} args - Arguments to find a RoomTypeImage
     * @example
     * // Get one RoomTypeImage
     * const roomTypeImage = await prisma.roomTypeImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomTypeImageFindFirstArgs>(args?: SelectSubset<T, RoomTypeImageFindFirstArgs<ExtArgs>>): Prisma__RoomTypeImageClient<$Result.GetResult<Prisma.$RoomTypeImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomTypeImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeImageFindFirstOrThrowArgs} args - Arguments to find a RoomTypeImage
     * @example
     * // Get one RoomTypeImage
     * const roomTypeImage = await prisma.roomTypeImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomTypeImageFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomTypeImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomTypeImageClient<$Result.GetResult<Prisma.$RoomTypeImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomTypeImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomTypeImages
     * const roomTypeImages = await prisma.roomTypeImage.findMany()
     * 
     * // Get first 10 RoomTypeImages
     * const roomTypeImages = await prisma.roomTypeImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomTypeImageWithIdOnly = await prisma.roomTypeImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomTypeImageFindManyArgs>(args?: SelectSubset<T, RoomTypeImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypeImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomTypeImage.
     * @param {RoomTypeImageCreateArgs} args - Arguments to create a RoomTypeImage.
     * @example
     * // Create one RoomTypeImage
     * const RoomTypeImage = await prisma.roomTypeImage.create({
     *   data: {
     *     // ... data to create a RoomTypeImage
     *   }
     * })
     * 
     */
    create<T extends RoomTypeImageCreateArgs>(args: SelectSubset<T, RoomTypeImageCreateArgs<ExtArgs>>): Prisma__RoomTypeImageClient<$Result.GetResult<Prisma.$RoomTypeImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomTypeImages.
     * @param {RoomTypeImageCreateManyArgs} args - Arguments to create many RoomTypeImages.
     * @example
     * // Create many RoomTypeImages
     * const roomTypeImage = await prisma.roomTypeImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomTypeImageCreateManyArgs>(args?: SelectSubset<T, RoomTypeImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomTypeImages and returns the data saved in the database.
     * @param {RoomTypeImageCreateManyAndReturnArgs} args - Arguments to create many RoomTypeImages.
     * @example
     * // Create many RoomTypeImages
     * const roomTypeImage = await prisma.roomTypeImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomTypeImages and only return the `id`
     * const roomTypeImageWithIdOnly = await prisma.roomTypeImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomTypeImageCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomTypeImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypeImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomTypeImage.
     * @param {RoomTypeImageDeleteArgs} args - Arguments to delete one RoomTypeImage.
     * @example
     * // Delete one RoomTypeImage
     * const RoomTypeImage = await prisma.roomTypeImage.delete({
     *   where: {
     *     // ... filter to delete one RoomTypeImage
     *   }
     * })
     * 
     */
    delete<T extends RoomTypeImageDeleteArgs>(args: SelectSubset<T, RoomTypeImageDeleteArgs<ExtArgs>>): Prisma__RoomTypeImageClient<$Result.GetResult<Prisma.$RoomTypeImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomTypeImage.
     * @param {RoomTypeImageUpdateArgs} args - Arguments to update one RoomTypeImage.
     * @example
     * // Update one RoomTypeImage
     * const roomTypeImage = await prisma.roomTypeImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomTypeImageUpdateArgs>(args: SelectSubset<T, RoomTypeImageUpdateArgs<ExtArgs>>): Prisma__RoomTypeImageClient<$Result.GetResult<Prisma.$RoomTypeImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomTypeImages.
     * @param {RoomTypeImageDeleteManyArgs} args - Arguments to filter RoomTypeImages to delete.
     * @example
     * // Delete a few RoomTypeImages
     * const { count } = await prisma.roomTypeImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomTypeImageDeleteManyArgs>(args?: SelectSubset<T, RoomTypeImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomTypeImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomTypeImages
     * const roomTypeImage = await prisma.roomTypeImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomTypeImageUpdateManyArgs>(args: SelectSubset<T, RoomTypeImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomTypeImages and returns the data updated in the database.
     * @param {RoomTypeImageUpdateManyAndReturnArgs} args - Arguments to update many RoomTypeImages.
     * @example
     * // Update many RoomTypeImages
     * const roomTypeImage = await prisma.roomTypeImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomTypeImages and only return the `id`
     * const roomTypeImageWithIdOnly = await prisma.roomTypeImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomTypeImageUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomTypeImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypeImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomTypeImage.
     * @param {RoomTypeImageUpsertArgs} args - Arguments to update or create a RoomTypeImage.
     * @example
     * // Update or create a RoomTypeImage
     * const roomTypeImage = await prisma.roomTypeImage.upsert({
     *   create: {
     *     // ... data to create a RoomTypeImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomTypeImage we want to update
     *   }
     * })
     */
    upsert<T extends RoomTypeImageUpsertArgs>(args: SelectSubset<T, RoomTypeImageUpsertArgs<ExtArgs>>): Prisma__RoomTypeImageClient<$Result.GetResult<Prisma.$RoomTypeImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomTypeImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeImageCountArgs} args - Arguments to filter RoomTypeImages to count.
     * @example
     * // Count the number of RoomTypeImages
     * const count = await prisma.roomTypeImage.count({
     *   where: {
     *     // ... the filter for the RoomTypeImages we want to count
     *   }
     * })
    **/
    count<T extends RoomTypeImageCountArgs>(
      args?: Subset<T, RoomTypeImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomTypeImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomTypeImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomTypeImageAggregateArgs>(args: Subset<T, RoomTypeImageAggregateArgs>): Prisma.PrismaPromise<GetRoomTypeImageAggregateType<T>>

    /**
     * Group by RoomTypeImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomTypeImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomTypeImageGroupByArgs['orderBy'] }
        : { orderBy?: RoomTypeImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomTypeImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomTypeImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomTypeImage model
   */
  readonly fields: RoomTypeImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomTypeImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomTypeImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roomType<T extends RoomTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomTypeDefaultArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomTypeImage model
   */
  interface RoomTypeImageFieldRefs {
    readonly id: FieldRef<"RoomTypeImage", 'String'>
    readonly roomTypeId: FieldRef<"RoomTypeImage", 'String'>
    readonly imageUrl: FieldRef<"RoomTypeImage", 'String'>
    readonly createdAt: FieldRef<"RoomTypeImage", 'DateTime'>
    readonly updatedAt: FieldRef<"RoomTypeImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomTypeImage findUnique
   */
  export type RoomTypeImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypeImage
     */
    select?: RoomTypeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypeImage
     */
    omit?: RoomTypeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomTypeImage to fetch.
     */
    where: RoomTypeImageWhereUniqueInput
  }

  /**
   * RoomTypeImage findUniqueOrThrow
   */
  export type RoomTypeImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypeImage
     */
    select?: RoomTypeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypeImage
     */
    omit?: RoomTypeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomTypeImage to fetch.
     */
    where: RoomTypeImageWhereUniqueInput
  }

  /**
   * RoomTypeImage findFirst
   */
  export type RoomTypeImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypeImage
     */
    select?: RoomTypeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypeImage
     */
    omit?: RoomTypeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomTypeImage to fetch.
     */
    where?: RoomTypeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypeImages to fetch.
     */
    orderBy?: RoomTypeImageOrderByWithRelationInput | RoomTypeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomTypeImages.
     */
    cursor?: RoomTypeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTypeImages.
     */
    distinct?: RoomTypeImageScalarFieldEnum | RoomTypeImageScalarFieldEnum[]
  }

  /**
   * RoomTypeImage findFirstOrThrow
   */
  export type RoomTypeImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypeImage
     */
    select?: RoomTypeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypeImage
     */
    omit?: RoomTypeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomTypeImage to fetch.
     */
    where?: RoomTypeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypeImages to fetch.
     */
    orderBy?: RoomTypeImageOrderByWithRelationInput | RoomTypeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomTypeImages.
     */
    cursor?: RoomTypeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTypeImages.
     */
    distinct?: RoomTypeImageScalarFieldEnum | RoomTypeImageScalarFieldEnum[]
  }

  /**
   * RoomTypeImage findMany
   */
  export type RoomTypeImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypeImage
     */
    select?: RoomTypeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypeImage
     */
    omit?: RoomTypeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomTypeImages to fetch.
     */
    where?: RoomTypeImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypeImages to fetch.
     */
    orderBy?: RoomTypeImageOrderByWithRelationInput | RoomTypeImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomTypeImages.
     */
    cursor?: RoomTypeImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypeImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypeImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTypeImages.
     */
    distinct?: RoomTypeImageScalarFieldEnum | RoomTypeImageScalarFieldEnum[]
  }

  /**
   * RoomTypeImage create
   */
  export type RoomTypeImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypeImage
     */
    select?: RoomTypeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypeImage
     */
    omit?: RoomTypeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeImageInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomTypeImage.
     */
    data: XOR<RoomTypeImageCreateInput, RoomTypeImageUncheckedCreateInput>
  }

  /**
   * RoomTypeImage createMany
   */
  export type RoomTypeImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomTypeImages.
     */
    data: RoomTypeImageCreateManyInput | RoomTypeImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomTypeImage createManyAndReturn
   */
  export type RoomTypeImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypeImage
     */
    select?: RoomTypeImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypeImage
     */
    omit?: RoomTypeImageOmit<ExtArgs> | null
    /**
     * The data used to create many RoomTypeImages.
     */
    data: RoomTypeImageCreateManyInput | RoomTypeImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomTypeImage update
   */
  export type RoomTypeImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypeImage
     */
    select?: RoomTypeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypeImage
     */
    omit?: RoomTypeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeImageInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomTypeImage.
     */
    data: XOR<RoomTypeImageUpdateInput, RoomTypeImageUncheckedUpdateInput>
    /**
     * Choose, which RoomTypeImage to update.
     */
    where: RoomTypeImageWhereUniqueInput
  }

  /**
   * RoomTypeImage updateMany
   */
  export type RoomTypeImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomTypeImages.
     */
    data: XOR<RoomTypeImageUpdateManyMutationInput, RoomTypeImageUncheckedUpdateManyInput>
    /**
     * Filter which RoomTypeImages to update
     */
    where?: RoomTypeImageWhereInput
    /**
     * Limit how many RoomTypeImages to update.
     */
    limit?: number
  }

  /**
   * RoomTypeImage updateManyAndReturn
   */
  export type RoomTypeImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypeImage
     */
    select?: RoomTypeImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypeImage
     */
    omit?: RoomTypeImageOmit<ExtArgs> | null
    /**
     * The data used to update RoomTypeImages.
     */
    data: XOR<RoomTypeImageUpdateManyMutationInput, RoomTypeImageUncheckedUpdateManyInput>
    /**
     * Filter which RoomTypeImages to update
     */
    where?: RoomTypeImageWhereInput
    /**
     * Limit how many RoomTypeImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomTypeImage upsert
   */
  export type RoomTypeImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypeImage
     */
    select?: RoomTypeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypeImage
     */
    omit?: RoomTypeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeImageInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomTypeImage to update in case it exists.
     */
    where: RoomTypeImageWhereUniqueInput
    /**
     * In case the RoomTypeImage found by the `where` argument doesn't exist, create a new RoomTypeImage with this data.
     */
    create: XOR<RoomTypeImageCreateInput, RoomTypeImageUncheckedCreateInput>
    /**
     * In case the RoomTypeImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomTypeImageUpdateInput, RoomTypeImageUncheckedUpdateInput>
  }

  /**
   * RoomTypeImage delete
   */
  export type RoomTypeImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypeImage
     */
    select?: RoomTypeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypeImage
     */
    omit?: RoomTypeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeImageInclude<ExtArgs> | null
    /**
     * Filter which RoomTypeImage to delete.
     */
    where: RoomTypeImageWhereUniqueInput
  }

  /**
   * RoomTypeImage deleteMany
   */
  export type RoomTypeImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomTypeImages to delete
     */
    where?: RoomTypeImageWhereInput
    /**
     * Limit how many RoomTypeImages to delete.
     */
    limit?: number
  }

  /**
   * RoomTypeImage without action
   */
  export type RoomTypeImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypeImage
     */
    select?: RoomTypeImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypeImage
     */
    omit?: RoomTypeImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeImageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    status: 'status',
    loginAttempts: 'loginAttempts',
    lockUntil: 'lockUntil',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    userId: 'userId',
    fullName: 'fullName',
    phoneNumber: 'phoneNumber',
    avatarUrl: 'avatarUrl',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const AgentProfileScalarFieldEnum: {
    userId: 'userId',
    businessName: 'businessName',
    businessLicense: 'businessLicense',
    taxCode: 'taxCode',
    idNumber: 'idNumber',
    idCardImageUrl: 'idCardImageUrl',
    approvalStatus: 'approvalStatus',
    approvedAt: 'approvedAt',
    rejectedReason: 'rejectedReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgentProfileScalarFieldEnum = (typeof AgentProfileScalarFieldEnum)[keyof typeof AgentProfileScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    deviceName: 'deviceName',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    lastUsedAt: 'lastUsedAt',
    revokedAt: 'revokedAt',
    revokeReason: 'revokeReason'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const HotelScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    address: 'address',
    city: 'city',
    country: 'country',
    latitude: 'latitude',
    longitude: 'longitude',
    phone: 'phone',
    email: 'email',
    thumbnail: 'thumbnail',
    rating: 'rating',
    checkInTime: 'checkInTime',
    checkOutTime: 'checkOutTime',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type HotelScalarFieldEnum = (typeof HotelScalarFieldEnum)[keyof typeof HotelScalarFieldEnum]


  export const HotelImageScalarFieldEnum: {
    id: 'id',
    hotelId: 'hotelId',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HotelImageScalarFieldEnum = (typeof HotelImageScalarFieldEnum)[keyof typeof HotelImageScalarFieldEnum]


  export const RoomTypeScalarFieldEnum: {
    id: 'id',
    hotelId: 'hotelId',
    name: 'name',
    description: 'description',
    price: 'price',
    maxGuests: 'maxGuests',
    maxAdults: 'maxAdults',
    maxChildren: 'maxChildren',
    bedType: 'bedType',
    bedCount: 'bedCount',
    area: 'area',
    thumbnail: 'thumbnail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomTypeScalarFieldEnum = (typeof RoomTypeScalarFieldEnum)[keyof typeof RoomTypeScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    hotelId: 'hotelId',
    roomTypeId: 'roomTypeId',
    roomNumber: 'roomNumber',
    floor: 'floor',
    status: 'status',
    note: 'note',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomTypeImageScalarFieldEnum: {
    id: 'id',
    roomTypeId: 'roomTypeId',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomTypeImageScalarFieldEnum = (typeof RoomTypeImageScalarFieldEnum)[keyof typeof RoomTypeImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'HotelStatus'
   */
  export type EnumHotelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HotelStatus'>
    


  /**
   * Reference to a field of type 'HotelStatus[]'
   */
  export type ListEnumHotelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HotelStatus[]'>
    


  /**
   * Reference to a field of type 'BedType'
   */
  export type EnumBedTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BedType'>
    


  /**
   * Reference to a field of type 'BedType[]'
   */
  export type ListEnumBedTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BedType[]'>
    


  /**
   * Reference to a field of type 'RoomStatus'
   */
  export type EnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus'>
    


  /**
   * Reference to a field of type 'RoomStatus[]'
   */
  export type ListEnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    loginAttempts?: IntFilter<"User"> | number
    lockUntil?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    agentProfile?: XOR<AgentProfileNullableScalarRelationFilter, AgentProfileWhereInput> | null
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    loginAttempts?: SortOrder
    lockUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    profile?: UserProfileOrderByWithRelationInput
    agentProfile?: AgentProfileOrderByWithRelationInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    loginAttempts?: IntFilter<"User"> | number
    lockUntil?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    agentProfile?: XOR<AgentProfileNullableScalarRelationFilter, AgentProfileWhereInput> | null
    refreshTokens?: RefreshTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    loginAttempts?: SortOrder
    lockUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    loginAttempts?: IntWithAggregatesFilter<"User"> | number
    lockUntil?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    userId?: UuidFilter<"UserProfile"> | string
    fullName?: StringFilter<"UserProfile"> | string
    phoneNumber?: StringNullableFilter<"UserProfile"> | string | null
    avatarUrl?: StringNullableFilter<"UserProfile"> | string | null
    address?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    userId?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    phoneNumber?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    fullName?: StringFilter<"UserProfile"> | string
    avatarUrl?: StringNullableFilter<"UserProfile"> | string | null
    address?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId" | "phoneNumber">

  export type UserProfileOrderByWithAggregationInput = {
    userId?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"UserProfile"> | string
    fullName?: StringWithAggregatesFilter<"UserProfile"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    address?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type AgentProfileWhereInput = {
    AND?: AgentProfileWhereInput | AgentProfileWhereInput[]
    OR?: AgentProfileWhereInput[]
    NOT?: AgentProfileWhereInput | AgentProfileWhereInput[]
    userId?: UuidFilter<"AgentProfile"> | string
    businessName?: StringFilter<"AgentProfile"> | string
    businessLicense?: StringNullableFilter<"AgentProfile"> | string | null
    taxCode?: StringNullableFilter<"AgentProfile"> | string | null
    idNumber?: StringNullableFilter<"AgentProfile"> | string | null
    idCardImageUrl?: StringNullableFilter<"AgentProfile"> | string | null
    approvalStatus?: EnumUserStatusFilter<"AgentProfile"> | $Enums.UserStatus
    approvedAt?: DateTimeNullableFilter<"AgentProfile"> | Date | string | null
    rejectedReason?: StringNullableFilter<"AgentProfile"> | string | null
    createdAt?: DateTimeFilter<"AgentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"AgentProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hotels?: HotelListRelationFilter
  }

  export type AgentProfileOrderByWithRelationInput = {
    userId?: SortOrder
    businessName?: SortOrder
    businessLicense?: SortOrderInput | SortOrder
    taxCode?: SortOrderInput | SortOrder
    idNumber?: SortOrderInput | SortOrder
    idCardImageUrl?: SortOrderInput | SortOrder
    approvalStatus?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    rejectedReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    hotels?: HotelOrderByRelationAggregateInput
  }

  export type AgentProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: AgentProfileWhereInput | AgentProfileWhereInput[]
    OR?: AgentProfileWhereInput[]
    NOT?: AgentProfileWhereInput | AgentProfileWhereInput[]
    businessName?: StringFilter<"AgentProfile"> | string
    businessLicense?: StringNullableFilter<"AgentProfile"> | string | null
    taxCode?: StringNullableFilter<"AgentProfile"> | string | null
    idNumber?: StringNullableFilter<"AgentProfile"> | string | null
    idCardImageUrl?: StringNullableFilter<"AgentProfile"> | string | null
    approvalStatus?: EnumUserStatusFilter<"AgentProfile"> | $Enums.UserStatus
    approvedAt?: DateTimeNullableFilter<"AgentProfile"> | Date | string | null
    rejectedReason?: StringNullableFilter<"AgentProfile"> | string | null
    createdAt?: DateTimeFilter<"AgentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"AgentProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hotels?: HotelListRelationFilter
  }, "userId">

  export type AgentProfileOrderByWithAggregationInput = {
    userId?: SortOrder
    businessName?: SortOrder
    businessLicense?: SortOrderInput | SortOrder
    taxCode?: SortOrderInput | SortOrder
    idNumber?: SortOrderInput | SortOrder
    idCardImageUrl?: SortOrderInput | SortOrder
    approvalStatus?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    rejectedReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgentProfileCountOrderByAggregateInput
    _max?: AgentProfileMaxOrderByAggregateInput
    _min?: AgentProfileMinOrderByAggregateInput
  }

  export type AgentProfileScalarWhereWithAggregatesInput = {
    AND?: AgentProfileScalarWhereWithAggregatesInput | AgentProfileScalarWhereWithAggregatesInput[]
    OR?: AgentProfileScalarWhereWithAggregatesInput[]
    NOT?: AgentProfileScalarWhereWithAggregatesInput | AgentProfileScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"AgentProfile"> | string
    businessName?: StringWithAggregatesFilter<"AgentProfile"> | string
    businessLicense?: StringNullableWithAggregatesFilter<"AgentProfile"> | string | null
    taxCode?: StringNullableWithAggregatesFilter<"AgentProfile"> | string | null
    idNumber?: StringNullableWithAggregatesFilter<"AgentProfile"> | string | null
    idCardImageUrl?: StringNullableWithAggregatesFilter<"AgentProfile"> | string | null
    approvalStatus?: EnumUserStatusWithAggregatesFilter<"AgentProfile"> | $Enums.UserStatus
    approvedAt?: DateTimeNullableWithAggregatesFilter<"AgentProfile"> | Date | string | null
    rejectedReason?: StringNullableWithAggregatesFilter<"AgentProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AgentProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AgentProfile"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: UuidFilter<"RefreshToken"> | string
    userId?: UuidFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    deviceName?: StringNullableFilter<"RefreshToken"> | string | null
    ipAddress?: StringNullableFilter<"RefreshToken"> | string | null
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    lastUsedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    revokeReason?: StringNullableFilter<"RefreshToken"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    deviceName?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    revokeReason?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: UuidFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    deviceName?: StringNullableFilter<"RefreshToken"> | string | null
    ipAddress?: StringNullableFilter<"RefreshToken"> | string | null
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    lastUsedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    revokeReason?: StringNullableFilter<"RefreshToken"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    deviceName?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    revokeReason?: SortOrderInput | SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RefreshToken"> | string
    userId?: UuidWithAggregatesFilter<"RefreshToken"> | string
    tokenHash?: StringWithAggregatesFilter<"RefreshToken"> | string
    deviceName?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"RefreshToken"> | Date | string | null
    revokedAt?: DateTimeNullableWithAggregatesFilter<"RefreshToken"> | Date | string | null
    revokeReason?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
  }

  export type HotelWhereInput = {
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    id?: UuidFilter<"Hotel"> | string
    ownerId?: UuidFilter<"Hotel"> | string
    name?: StringFilter<"Hotel"> | string
    slug?: StringFilter<"Hotel"> | string
    description?: StringNullableFilter<"Hotel"> | string | null
    address?: StringFilter<"Hotel"> | string
    city?: StringFilter<"Hotel"> | string
    country?: StringFilter<"Hotel"> | string
    latitude?: DecimalNullableFilter<"Hotel"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Hotel"> | Decimal | DecimalJsLike | number | string | null
    phone?: StringNullableFilter<"Hotel"> | string | null
    email?: StringNullableFilter<"Hotel"> | string | null
    thumbnail?: StringNullableFilter<"Hotel"> | string | null
    rating?: FloatFilter<"Hotel"> | number
    checkInTime?: StringNullableFilter<"Hotel"> | string | null
    checkOutTime?: StringNullableFilter<"Hotel"> | string | null
    status?: EnumHotelStatusFilter<"Hotel"> | $Enums.HotelStatus
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeFilter<"Hotel"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Hotel"> | Date | string | null
    owner?: XOR<AgentProfileScalarRelationFilter, AgentProfileWhereInput>
    images?: HotelImageListRelationFilter
    rooms?: RoomListRelationFilter
    roomTypes?: RoomTypeListRelationFilter
  }

  export type HotelOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    rating?: SortOrder
    checkInTime?: SortOrderInput | SortOrder
    checkOutTime?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    owner?: AgentProfileOrderByWithRelationInput
    images?: HotelImageOrderByRelationAggregateInput
    rooms?: RoomOrderByRelationAggregateInput
    roomTypes?: RoomTypeOrderByRelationAggregateInput
  }

  export type HotelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    ownerId?: UuidFilter<"Hotel"> | string
    name?: StringFilter<"Hotel"> | string
    description?: StringNullableFilter<"Hotel"> | string | null
    address?: StringFilter<"Hotel"> | string
    city?: StringFilter<"Hotel"> | string
    country?: StringFilter<"Hotel"> | string
    latitude?: DecimalNullableFilter<"Hotel"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Hotel"> | Decimal | DecimalJsLike | number | string | null
    phone?: StringNullableFilter<"Hotel"> | string | null
    email?: StringNullableFilter<"Hotel"> | string | null
    thumbnail?: StringNullableFilter<"Hotel"> | string | null
    rating?: FloatFilter<"Hotel"> | number
    checkInTime?: StringNullableFilter<"Hotel"> | string | null
    checkOutTime?: StringNullableFilter<"Hotel"> | string | null
    status?: EnumHotelStatusFilter<"Hotel"> | $Enums.HotelStatus
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeFilter<"Hotel"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Hotel"> | Date | string | null
    owner?: XOR<AgentProfileScalarRelationFilter, AgentProfileWhereInput>
    images?: HotelImageListRelationFilter
    rooms?: RoomListRelationFilter
    roomTypes?: RoomTypeListRelationFilter
  }, "id" | "slug">

  export type HotelOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    rating?: SortOrder
    checkInTime?: SortOrderInput | SortOrder
    checkOutTime?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: HotelCountOrderByAggregateInput
    _avg?: HotelAvgOrderByAggregateInput
    _max?: HotelMaxOrderByAggregateInput
    _min?: HotelMinOrderByAggregateInput
    _sum?: HotelSumOrderByAggregateInput
  }

  export type HotelScalarWhereWithAggregatesInput = {
    AND?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    OR?: HotelScalarWhereWithAggregatesInput[]
    NOT?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Hotel"> | string
    ownerId?: UuidWithAggregatesFilter<"Hotel"> | string
    name?: StringWithAggregatesFilter<"Hotel"> | string
    slug?: StringWithAggregatesFilter<"Hotel"> | string
    description?: StringNullableWithAggregatesFilter<"Hotel"> | string | null
    address?: StringWithAggregatesFilter<"Hotel"> | string
    city?: StringWithAggregatesFilter<"Hotel"> | string
    country?: StringWithAggregatesFilter<"Hotel"> | string
    latitude?: DecimalNullableWithAggregatesFilter<"Hotel"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"Hotel"> | Decimal | DecimalJsLike | number | string | null
    phone?: StringNullableWithAggregatesFilter<"Hotel"> | string | null
    email?: StringNullableWithAggregatesFilter<"Hotel"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"Hotel"> | string | null
    rating?: FloatWithAggregatesFilter<"Hotel"> | number
    checkInTime?: StringNullableWithAggregatesFilter<"Hotel"> | string | null
    checkOutTime?: StringNullableWithAggregatesFilter<"Hotel"> | string | null
    status?: EnumHotelStatusWithAggregatesFilter<"Hotel"> | $Enums.HotelStatus
    createdAt?: DateTimeWithAggregatesFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hotel"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Hotel"> | Date | string | null
  }

  export type HotelImageWhereInput = {
    AND?: HotelImageWhereInput | HotelImageWhereInput[]
    OR?: HotelImageWhereInput[]
    NOT?: HotelImageWhereInput | HotelImageWhereInput[]
    id?: UuidFilter<"HotelImage"> | string
    hotelId?: UuidFilter<"HotelImage"> | string
    imageUrl?: StringFilter<"HotelImage"> | string
    createdAt?: DateTimeFilter<"HotelImage"> | Date | string
    updatedAt?: DateTimeFilter<"HotelImage"> | Date | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }

  export type HotelImageOrderByWithRelationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hotel?: HotelOrderByWithRelationInput
  }

  export type HotelImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HotelImageWhereInput | HotelImageWhereInput[]
    OR?: HotelImageWhereInput[]
    NOT?: HotelImageWhereInput | HotelImageWhereInput[]
    hotelId?: UuidFilter<"HotelImage"> | string
    imageUrl?: StringFilter<"HotelImage"> | string
    createdAt?: DateTimeFilter<"HotelImage"> | Date | string
    updatedAt?: DateTimeFilter<"HotelImage"> | Date | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }, "id">

  export type HotelImageOrderByWithAggregationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HotelImageCountOrderByAggregateInput
    _max?: HotelImageMaxOrderByAggregateInput
    _min?: HotelImageMinOrderByAggregateInput
  }

  export type HotelImageScalarWhereWithAggregatesInput = {
    AND?: HotelImageScalarWhereWithAggregatesInput | HotelImageScalarWhereWithAggregatesInput[]
    OR?: HotelImageScalarWhereWithAggregatesInput[]
    NOT?: HotelImageScalarWhereWithAggregatesInput | HotelImageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"HotelImage"> | string
    hotelId?: UuidWithAggregatesFilter<"HotelImage"> | string
    imageUrl?: StringWithAggregatesFilter<"HotelImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HotelImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HotelImage"> | Date | string
  }

  export type RoomTypeWhereInput = {
    AND?: RoomTypeWhereInput | RoomTypeWhereInput[]
    OR?: RoomTypeWhereInput[]
    NOT?: RoomTypeWhereInput | RoomTypeWhereInput[]
    id?: UuidFilter<"RoomType"> | string
    hotelId?: UuidFilter<"RoomType"> | string
    name?: StringFilter<"RoomType"> | string
    description?: StringNullableFilter<"RoomType"> | string | null
    price?: DecimalFilter<"RoomType"> | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFilter<"RoomType"> | number
    maxAdults?: IntFilter<"RoomType"> | number
    maxChildren?: IntFilter<"RoomType"> | number
    bedType?: EnumBedTypeFilter<"RoomType"> | $Enums.BedType
    bedCount?: IntFilter<"RoomType"> | number
    area?: FloatNullableFilter<"RoomType"> | number | null
    thumbnail?: StringNullableFilter<"RoomType"> | string | null
    createdAt?: DateTimeFilter<"RoomType"> | Date | string
    updatedAt?: DateTimeFilter<"RoomType"> | Date | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    rooms?: RoomListRelationFilter
    images?: RoomTypeImageListRelationFilter
  }

  export type RoomTypeOrderByWithRelationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    maxGuests?: SortOrder
    maxAdults?: SortOrder
    maxChildren?: SortOrder
    bedType?: SortOrder
    bedCount?: SortOrder
    area?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hotel?: HotelOrderByWithRelationInput
    rooms?: RoomOrderByRelationAggregateInput
    images?: RoomTypeImageOrderByRelationAggregateInput
  }

  export type RoomTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    hotelId_name?: RoomTypeHotelIdNameCompoundUniqueInput
    AND?: RoomTypeWhereInput | RoomTypeWhereInput[]
    OR?: RoomTypeWhereInput[]
    NOT?: RoomTypeWhereInput | RoomTypeWhereInput[]
    hotelId?: UuidFilter<"RoomType"> | string
    name?: StringFilter<"RoomType"> | string
    description?: StringNullableFilter<"RoomType"> | string | null
    price?: DecimalFilter<"RoomType"> | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFilter<"RoomType"> | number
    maxAdults?: IntFilter<"RoomType"> | number
    maxChildren?: IntFilter<"RoomType"> | number
    bedType?: EnumBedTypeFilter<"RoomType"> | $Enums.BedType
    bedCount?: IntFilter<"RoomType"> | number
    area?: FloatNullableFilter<"RoomType"> | number | null
    thumbnail?: StringNullableFilter<"RoomType"> | string | null
    createdAt?: DateTimeFilter<"RoomType"> | Date | string
    updatedAt?: DateTimeFilter<"RoomType"> | Date | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    rooms?: RoomListRelationFilter
    images?: RoomTypeImageListRelationFilter
  }, "id" | "hotelId_name">

  export type RoomTypeOrderByWithAggregationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    maxGuests?: SortOrder
    maxAdults?: SortOrder
    maxChildren?: SortOrder
    bedType?: SortOrder
    bedCount?: SortOrder
    area?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomTypeCountOrderByAggregateInput
    _avg?: RoomTypeAvgOrderByAggregateInput
    _max?: RoomTypeMaxOrderByAggregateInput
    _min?: RoomTypeMinOrderByAggregateInput
    _sum?: RoomTypeSumOrderByAggregateInput
  }

  export type RoomTypeScalarWhereWithAggregatesInput = {
    AND?: RoomTypeScalarWhereWithAggregatesInput | RoomTypeScalarWhereWithAggregatesInput[]
    OR?: RoomTypeScalarWhereWithAggregatesInput[]
    NOT?: RoomTypeScalarWhereWithAggregatesInput | RoomTypeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RoomType"> | string
    hotelId?: UuidWithAggregatesFilter<"RoomType"> | string
    name?: StringWithAggregatesFilter<"RoomType"> | string
    description?: StringNullableWithAggregatesFilter<"RoomType"> | string | null
    price?: DecimalWithAggregatesFilter<"RoomType"> | Decimal | DecimalJsLike | number | string
    maxGuests?: IntWithAggregatesFilter<"RoomType"> | number
    maxAdults?: IntWithAggregatesFilter<"RoomType"> | number
    maxChildren?: IntWithAggregatesFilter<"RoomType"> | number
    bedType?: EnumBedTypeWithAggregatesFilter<"RoomType"> | $Enums.BedType
    bedCount?: IntWithAggregatesFilter<"RoomType"> | number
    area?: FloatNullableWithAggregatesFilter<"RoomType"> | number | null
    thumbnail?: StringNullableWithAggregatesFilter<"RoomType"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RoomType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoomType"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: UuidFilter<"Room"> | string
    hotelId?: UuidFilter<"Room"> | string
    roomTypeId?: UuidFilter<"Room"> | string
    roomNumber?: StringFilter<"Room"> | string
    floor?: IntNullableFilter<"Room"> | number | null
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    note?: StringNullableFilter<"Room"> | string | null
    isActive?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    roomType?: XOR<RoomTypeScalarRelationFilter, RoomTypeWhereInput>
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    roomTypeId?: SortOrder
    roomNumber?: SortOrder
    floor?: SortOrderInput | SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hotel?: HotelOrderByWithRelationInput
    roomType?: RoomTypeOrderByWithRelationInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    hotelId_roomNumber?: RoomHotelIdRoomNumberCompoundUniqueInput
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    hotelId?: UuidFilter<"Room"> | string
    roomTypeId?: UuidFilter<"Room"> | string
    roomNumber?: StringFilter<"Room"> | string
    floor?: IntNullableFilter<"Room"> | number | null
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    note?: StringNullableFilter<"Room"> | string | null
    isActive?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    roomType?: XOR<RoomTypeScalarRelationFilter, RoomTypeWhereInput>
  }, "id" | "hotelId_roomNumber">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    roomTypeId?: SortOrder
    roomNumber?: SortOrder
    floor?: SortOrderInput | SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Room"> | string
    hotelId?: UuidWithAggregatesFilter<"Room"> | string
    roomTypeId?: UuidWithAggregatesFilter<"Room"> | string
    roomNumber?: StringWithAggregatesFilter<"Room"> | string
    floor?: IntNullableWithAggregatesFilter<"Room"> | number | null
    status?: EnumRoomStatusWithAggregatesFilter<"Room"> | $Enums.RoomStatus
    note?: StringNullableWithAggregatesFilter<"Room"> | string | null
    isActive?: BoolWithAggregatesFilter<"Room"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type RoomTypeImageWhereInput = {
    AND?: RoomTypeImageWhereInput | RoomTypeImageWhereInput[]
    OR?: RoomTypeImageWhereInput[]
    NOT?: RoomTypeImageWhereInput | RoomTypeImageWhereInput[]
    id?: UuidFilter<"RoomTypeImage"> | string
    roomTypeId?: UuidFilter<"RoomTypeImage"> | string
    imageUrl?: StringFilter<"RoomTypeImage"> | string
    createdAt?: DateTimeFilter<"RoomTypeImage"> | Date | string
    updatedAt?: DateTimeFilter<"RoomTypeImage"> | Date | string
    roomType?: XOR<RoomTypeScalarRelationFilter, RoomTypeWhereInput>
  }

  export type RoomTypeImageOrderByWithRelationInput = {
    id?: SortOrder
    roomTypeId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roomType?: RoomTypeOrderByWithRelationInput
  }

  export type RoomTypeImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomTypeImageWhereInput | RoomTypeImageWhereInput[]
    OR?: RoomTypeImageWhereInput[]
    NOT?: RoomTypeImageWhereInput | RoomTypeImageWhereInput[]
    roomTypeId?: UuidFilter<"RoomTypeImage"> | string
    imageUrl?: StringFilter<"RoomTypeImage"> | string
    createdAt?: DateTimeFilter<"RoomTypeImage"> | Date | string
    updatedAt?: DateTimeFilter<"RoomTypeImage"> | Date | string
    roomType?: XOR<RoomTypeScalarRelationFilter, RoomTypeWhereInput>
  }, "id">

  export type RoomTypeImageOrderByWithAggregationInput = {
    id?: SortOrder
    roomTypeId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomTypeImageCountOrderByAggregateInput
    _max?: RoomTypeImageMaxOrderByAggregateInput
    _min?: RoomTypeImageMinOrderByAggregateInput
  }

  export type RoomTypeImageScalarWhereWithAggregatesInput = {
    AND?: RoomTypeImageScalarWhereWithAggregatesInput | RoomTypeImageScalarWhereWithAggregatesInput[]
    OR?: RoomTypeImageScalarWhereWithAggregatesInput[]
    NOT?: RoomTypeImageScalarWhereWithAggregatesInput | RoomTypeImageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RoomTypeImage"> | string
    roomTypeId?: UuidWithAggregatesFilter<"RoomTypeImage"> | string
    imageUrl?: StringWithAggregatesFilter<"RoomTypeImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RoomTypeImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoomTypeImage"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    loginAttempts?: number
    lockUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    agentProfile?: AgentProfileCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    loginAttempts?: number
    lockUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    agentProfile?: AgentProfileUncheckedCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    agentProfile?: AgentProfileUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    agentProfile?: AgentProfileUncheckedUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    loginAttempts?: number
    lockUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserProfileCreateInput = {
    fullName: string
    phoneNumber?: string | null
    avatarUrl?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    userId: string
    fullName: string
    phoneNumber?: string | null
    avatarUrl?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    userId: string
    fullName: string
    phoneNumber?: string | null
    avatarUrl?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentProfileCreateInput = {
    businessName: string
    businessLicense?: string | null
    taxCode?: string | null
    idNumber?: string | null
    idCardImageUrl?: string | null
    approvalStatus?: $Enums.UserStatus
    approvedAt?: Date | string | null
    rejectedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAgentProfileInput
    hotels?: HotelCreateNestedManyWithoutOwnerInput
  }

  export type AgentProfileUncheckedCreateInput = {
    userId: string
    businessName: string
    businessLicense?: string | null
    taxCode?: string | null
    idNumber?: string | null
    idCardImageUrl?: string | null
    approvalStatus?: $Enums.UserStatus
    approvedAt?: Date | string | null
    rejectedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type AgentProfileUpdateInput = {
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idCardImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAgentProfileNestedInput
    hotels?: HotelUpdateManyWithoutOwnerNestedInput
  }

  export type AgentProfileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idCardImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type AgentProfileCreateManyInput = {
    userId: string
    businessName: string
    businessLicense?: string | null
    taxCode?: string | null
    idNumber?: string | null
    idCardImageUrl?: string | null
    approvalStatus?: $Enums.UserStatus
    approvedAt?: Date | string | null
    rejectedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentProfileUpdateManyMutationInput = {
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idCardImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentProfileUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idCardImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    tokenHash: string
    deviceName?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
    revokedAt?: Date | string | null
    revokeReason?: string | null
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    userId: string
    tokenHash: string
    deviceName?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
    revokedAt?: Date | string | null
    revokeReason?: string | null
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    userId: string
    tokenHash: string
    deviceName?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
    revokedAt?: Date | string | null
    revokeReason?: string | null
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HotelCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    address: string
    city: string
    country?: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone?: string | null
    email?: string | null
    thumbnail?: string | null
    rating?: number
    checkInTime?: string | null
    checkOutTime?: string | null
    status?: $Enums.HotelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owner: AgentProfileCreateNestedOneWithoutHotelsInput
    images?: HotelImageCreateNestedManyWithoutHotelInput
    rooms?: RoomCreateNestedManyWithoutHotelInput
    roomTypes?: RoomTypeCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateInput = {
    id?: string
    ownerId: string
    name: string
    slug: string
    description?: string | null
    address: string
    city: string
    country?: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone?: string | null
    email?: string | null
    thumbnail?: string | null
    rating?: number
    checkInTime?: string | null
    checkOutTime?: string | null
    status?: $Enums.HotelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: HotelImageUncheckedCreateNestedManyWithoutHotelInput
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
    roomTypes?: RoomTypeUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    checkInTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHotelStatusFieldUpdateOperationsInput | $Enums.HotelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: AgentProfileUpdateOneRequiredWithoutHotelsNestedInput
    images?: HotelImageUpdateManyWithoutHotelNestedInput
    rooms?: RoomUpdateManyWithoutHotelNestedInput
    roomTypes?: RoomTypeUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    checkInTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHotelStatusFieldUpdateOperationsInput | $Enums.HotelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: HotelImageUncheckedUpdateManyWithoutHotelNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    roomTypes?: RoomTypeUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelCreateManyInput = {
    id?: string
    ownerId: string
    name: string
    slug: string
    description?: string | null
    address: string
    city: string
    country?: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone?: string | null
    email?: string | null
    thumbnail?: string | null
    rating?: number
    checkInTime?: string | null
    checkOutTime?: string | null
    status?: $Enums.HotelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type HotelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    checkInTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHotelStatusFieldUpdateOperationsInput | $Enums.HotelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HotelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    checkInTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHotelStatusFieldUpdateOperationsInput | $Enums.HotelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HotelImageCreateInput = {
    id?: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutImagesInput
  }

  export type HotelImageUncheckedCreateInput = {
    id?: string
    hotelId: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutImagesNestedInput
  }

  export type HotelImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelImageCreateManyInput = {
    id?: string
    hotelId: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomTypeCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    maxGuests: number
    maxAdults: number
    maxChildren: number
    bedType: $Enums.BedType
    bedCount: number
    area?: number | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutRoomTypesInput
    rooms?: RoomCreateNestedManyWithoutRoomTypeInput
    images?: RoomTypeImageCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeUncheckedCreateInput = {
    id?: string
    hotelId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    maxGuests: number
    maxAdults: number
    maxChildren: number
    bedType: $Enums.BedType
    bedCount: number
    area?: number | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutRoomTypeInput
    images?: RoomTypeImageUncheckedCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedType?: EnumBedTypeFieldUpdateOperationsInput | $Enums.BedType
    bedCount?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutRoomTypesNestedInput
    rooms?: RoomUpdateManyWithoutRoomTypeNestedInput
    images?: RoomTypeImageUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedType?: EnumBedTypeFieldUpdateOperationsInput | $Enums.BedType
    bedCount?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutRoomTypeNestedInput
    images?: RoomTypeImageUncheckedUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeCreateManyInput = {
    id?: string
    hotelId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    maxGuests: number
    maxAdults: number
    maxChildren: number
    bedType: $Enums.BedType
    bedCount: number
    area?: number | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedType?: EnumBedTypeFieldUpdateOperationsInput | $Enums.BedType
    bedCount?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedType?: EnumBedTypeFieldUpdateOperationsInput | $Enums.BedType
    bedCount?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    roomNumber: string
    floor?: number | null
    status?: $Enums.RoomStatus
    note?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutRoomsInput
    roomType: RoomTypeCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    hotelId: string
    roomTypeId: string
    roomNumber: string
    floor?: number | null
    status?: $Enums.RoomStatus
    note?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutRoomsNestedInput
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    roomTypeId?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyInput = {
    id?: string
    hotelId: string
    roomTypeId: string
    roomNumber: string
    floor?: number | null
    status?: $Enums.RoomStatus
    note?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    roomTypeId?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomTypeImageCreateInput = {
    id?: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roomType: RoomTypeCreateNestedOneWithoutImagesInput
  }

  export type RoomTypeImageUncheckedCreateInput = {
    id?: string
    roomTypeId: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomTypeImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomType?: RoomTypeUpdateOneRequiredWithoutImagesNestedInput
  }

  export type RoomTypeImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomTypeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomTypeImageCreateManyInput = {
    id?: string
    roomTypeId: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomTypeImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomTypeImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomTypeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type AgentProfileNullableScalarRelationFilter = {
    is?: AgentProfileWhereInput | null
    isNot?: AgentProfileWhereInput | null
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    loginAttempts?: SortOrder
    lockUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    loginAttempts?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    loginAttempts?: SortOrder
    lockUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    loginAttempts?: SortOrder
    lockUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    loginAttempts?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    avatarUrl?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    avatarUrl?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    avatarUrl?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelListRelationFilter = {
    every?: HotelWhereInput
    some?: HotelWhereInput
    none?: HotelWhereInput
  }

  export type HotelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentProfileCountOrderByAggregateInput = {
    userId?: SortOrder
    businessName?: SortOrder
    businessLicense?: SortOrder
    taxCode?: SortOrder
    idNumber?: SortOrder
    idCardImageUrl?: SortOrder
    approvalStatus?: SortOrder
    approvedAt?: SortOrder
    rejectedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentProfileMaxOrderByAggregateInput = {
    userId?: SortOrder
    businessName?: SortOrder
    businessLicense?: SortOrder
    taxCode?: SortOrder
    idNumber?: SortOrder
    idCardImageUrl?: SortOrder
    approvalStatus?: SortOrder
    approvedAt?: SortOrder
    rejectedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentProfileMinOrderByAggregateInput = {
    userId?: SortOrder
    businessName?: SortOrder
    businessLicense?: SortOrder
    taxCode?: SortOrder
    idNumber?: SortOrder
    idCardImageUrl?: SortOrder
    approvalStatus?: SortOrder
    approvedAt?: SortOrder
    rejectedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    deviceName?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastUsedAt?: SortOrder
    revokedAt?: SortOrder
    revokeReason?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    deviceName?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastUsedAt?: SortOrder
    revokedAt?: SortOrder
    revokeReason?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    deviceName?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastUsedAt?: SortOrder
    revokedAt?: SortOrder
    revokeReason?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumHotelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.HotelStatus | EnumHotelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HotelStatus[] | ListEnumHotelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.HotelStatus[] | ListEnumHotelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumHotelStatusFilter<$PrismaModel> | $Enums.HotelStatus
  }

  export type AgentProfileScalarRelationFilter = {
    is?: AgentProfileWhereInput
    isNot?: AgentProfileWhereInput
  }

  export type HotelImageListRelationFilter = {
    every?: HotelImageWhereInput
    some?: HotelImageWhereInput
    none?: HotelImageWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type RoomTypeListRelationFilter = {
    every?: RoomTypeWhereInput
    some?: RoomTypeWhereInput
    none?: RoomTypeWhereInput
  }

  export type HotelImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HotelCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    thumbnail?: SortOrder
    rating?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type HotelAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
  }

  export type HotelMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    thumbnail?: SortOrder
    rating?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type HotelMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    thumbnail?: SortOrder
    rating?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type HotelSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumHotelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HotelStatus | EnumHotelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HotelStatus[] | ListEnumHotelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.HotelStatus[] | ListEnumHotelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumHotelStatusWithAggregatesFilter<$PrismaModel> | $Enums.HotelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHotelStatusFilter<$PrismaModel>
    _max?: NestedEnumHotelStatusFilter<$PrismaModel>
  }

  export type HotelScalarRelationFilter = {
    is?: HotelWhereInput
    isNot?: HotelWhereInput
  }

  export type HotelImageCountOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelImageMaxOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelImageMinOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumBedTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BedType | EnumBedTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BedType[] | ListEnumBedTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BedType[] | ListEnumBedTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBedTypeFilter<$PrismaModel> | $Enums.BedType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RoomTypeImageListRelationFilter = {
    every?: RoomTypeImageWhereInput
    some?: RoomTypeImageWhereInput
    none?: RoomTypeImageWhereInput
  }

  export type RoomTypeImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomTypeHotelIdNameCompoundUniqueInput = {
    hotelId: string
    name: string
  }

  export type RoomTypeCountOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    maxGuests?: SortOrder
    maxAdults?: SortOrder
    maxChildren?: SortOrder
    bedType?: SortOrder
    bedCount?: SortOrder
    area?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomTypeAvgOrderByAggregateInput = {
    price?: SortOrder
    maxGuests?: SortOrder
    maxAdults?: SortOrder
    maxChildren?: SortOrder
    bedCount?: SortOrder
    area?: SortOrder
  }

  export type RoomTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    maxGuests?: SortOrder
    maxAdults?: SortOrder
    maxChildren?: SortOrder
    bedType?: SortOrder
    bedCount?: SortOrder
    area?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomTypeMinOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    maxGuests?: SortOrder
    maxAdults?: SortOrder
    maxChildren?: SortOrder
    bedType?: SortOrder
    bedCount?: SortOrder
    area?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomTypeSumOrderByAggregateInput = {
    price?: SortOrder
    maxGuests?: SortOrder
    maxAdults?: SortOrder
    maxChildren?: SortOrder
    bedCount?: SortOrder
    area?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumBedTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BedType | EnumBedTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BedType[] | ListEnumBedTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BedType[] | ListEnumBedTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBedTypeWithAggregatesFilter<$PrismaModel> | $Enums.BedType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBedTypeFilter<$PrismaModel>
    _max?: NestedEnumBedTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoomTypeScalarRelationFilter = {
    is?: RoomTypeWhereInput
    isNot?: RoomTypeWhereInput
  }

  export type RoomHotelIdRoomNumberCompoundUniqueInput = {
    hotelId: string
    roomNumber: string
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    roomTypeId?: SortOrder
    roomNumber?: SortOrder
    floor?: SortOrder
    status?: SortOrder
    note?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    floor?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    roomTypeId?: SortOrder
    roomNumber?: SortOrder
    floor?: SortOrder
    status?: SortOrder
    note?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    roomTypeId?: SortOrder
    roomNumber?: SortOrder
    floor?: SortOrder
    status?: SortOrder
    note?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    floor?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoomTypeImageCountOrderByAggregateInput = {
    id?: SortOrder
    roomTypeId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomTypeImageMaxOrderByAggregateInput = {
    id?: SortOrder
    roomTypeId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomTypeImageMinOrderByAggregateInput = {
    id?: SortOrder
    roomTypeId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type AgentProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<AgentProfileCreateWithoutUserInput, AgentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AgentProfileCreateOrConnectWithoutUserInput
    connect?: AgentProfileWhereUniqueInput
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type AgentProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AgentProfileCreateWithoutUserInput, AgentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AgentProfileCreateOrConnectWithoutUserInput
    connect?: AgentProfileWhereUniqueInput
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type AgentProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<AgentProfileCreateWithoutUserInput, AgentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AgentProfileCreateOrConnectWithoutUserInput
    upsert?: AgentProfileUpsertWithoutUserInput
    disconnect?: AgentProfileWhereInput | boolean
    delete?: AgentProfileWhereInput | boolean
    connect?: AgentProfileWhereUniqueInput
    update?: XOR<XOR<AgentProfileUpdateToOneWithWhereWithoutUserInput, AgentProfileUpdateWithoutUserInput>, AgentProfileUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type AgentProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AgentProfileCreateWithoutUserInput, AgentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: AgentProfileCreateOrConnectWithoutUserInput
    upsert?: AgentProfileUpsertWithoutUserInput
    disconnect?: AgentProfileWhereInput | boolean
    delete?: AgentProfileWhereInput | boolean
    connect?: AgentProfileWhereUniqueInput
    update?: XOR<XOR<AgentProfileUpdateToOneWithWhereWithoutUserInput, AgentProfileUpdateWithoutUserInput>, AgentProfileUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutAgentProfileInput = {
    create?: XOR<UserCreateWithoutAgentProfileInput, UserUncheckedCreateWithoutAgentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgentProfileInput
    connect?: UserWhereUniqueInput
  }

  export type HotelCreateNestedManyWithoutOwnerInput = {
    create?: XOR<HotelCreateWithoutOwnerInput, HotelUncheckedCreateWithoutOwnerInput> | HotelCreateWithoutOwnerInput[] | HotelUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutOwnerInput | HotelCreateOrConnectWithoutOwnerInput[]
    createMany?: HotelCreateManyOwnerInputEnvelope
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
  }

  export type HotelUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<HotelCreateWithoutOwnerInput, HotelUncheckedCreateWithoutOwnerInput> | HotelCreateWithoutOwnerInput[] | HotelUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutOwnerInput | HotelCreateOrConnectWithoutOwnerInput[]
    createMany?: HotelCreateManyOwnerInputEnvelope
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAgentProfileNestedInput = {
    create?: XOR<UserCreateWithoutAgentProfileInput, UserUncheckedCreateWithoutAgentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgentProfileInput
    upsert?: UserUpsertWithoutAgentProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAgentProfileInput, UserUpdateWithoutAgentProfileInput>, UserUncheckedUpdateWithoutAgentProfileInput>
  }

  export type HotelUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<HotelCreateWithoutOwnerInput, HotelUncheckedCreateWithoutOwnerInput> | HotelCreateWithoutOwnerInput[] | HotelUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutOwnerInput | HotelCreateOrConnectWithoutOwnerInput[]
    upsert?: HotelUpsertWithWhereUniqueWithoutOwnerInput | HotelUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: HotelCreateManyOwnerInputEnvelope
    set?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    disconnect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    delete?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    update?: HotelUpdateWithWhereUniqueWithoutOwnerInput | HotelUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: HotelUpdateManyWithWhereWithoutOwnerInput | HotelUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: HotelScalarWhereInput | HotelScalarWhereInput[]
  }

  export type HotelUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<HotelCreateWithoutOwnerInput, HotelUncheckedCreateWithoutOwnerInput> | HotelCreateWithoutOwnerInput[] | HotelUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutOwnerInput | HotelCreateOrConnectWithoutOwnerInput[]
    upsert?: HotelUpsertWithWhereUniqueWithoutOwnerInput | HotelUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: HotelCreateManyOwnerInputEnvelope
    set?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    disconnect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    delete?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    update?: HotelUpdateWithWhereUniqueWithoutOwnerInput | HotelUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: HotelUpdateManyWithWhereWithoutOwnerInput | HotelUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: HotelScalarWhereInput | HotelScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type AgentProfileCreateNestedOneWithoutHotelsInput = {
    create?: XOR<AgentProfileCreateWithoutHotelsInput, AgentProfileUncheckedCreateWithoutHotelsInput>
    connectOrCreate?: AgentProfileCreateOrConnectWithoutHotelsInput
    connect?: AgentProfileWhereUniqueInput
  }

  export type HotelImageCreateNestedManyWithoutHotelInput = {
    create?: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput> | HotelImageCreateWithoutHotelInput[] | HotelImageUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelImageCreateOrConnectWithoutHotelInput | HotelImageCreateOrConnectWithoutHotelInput[]
    createMany?: HotelImageCreateManyHotelInputEnvelope
    connect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomTypeCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomTypeCreateWithoutHotelInput, RoomTypeUncheckedCreateWithoutHotelInput> | RoomTypeCreateWithoutHotelInput[] | RoomTypeUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomTypeCreateOrConnectWithoutHotelInput | RoomTypeCreateOrConnectWithoutHotelInput[]
    createMany?: RoomTypeCreateManyHotelInputEnvelope
    connect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
  }

  export type HotelImageUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput> | HotelImageCreateWithoutHotelInput[] | HotelImageUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelImageCreateOrConnectWithoutHotelInput | HotelImageCreateOrConnectWithoutHotelInput[]
    createMany?: HotelImageCreateManyHotelInputEnvelope
    connect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomTypeUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomTypeCreateWithoutHotelInput, RoomTypeUncheckedCreateWithoutHotelInput> | RoomTypeCreateWithoutHotelInput[] | RoomTypeUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomTypeCreateOrConnectWithoutHotelInput | RoomTypeCreateOrConnectWithoutHotelInput[]
    createMany?: RoomTypeCreateManyHotelInputEnvelope
    connect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumHotelStatusFieldUpdateOperationsInput = {
    set?: $Enums.HotelStatus
  }

  export type AgentProfileUpdateOneRequiredWithoutHotelsNestedInput = {
    create?: XOR<AgentProfileCreateWithoutHotelsInput, AgentProfileUncheckedCreateWithoutHotelsInput>
    connectOrCreate?: AgentProfileCreateOrConnectWithoutHotelsInput
    upsert?: AgentProfileUpsertWithoutHotelsInput
    connect?: AgentProfileWhereUniqueInput
    update?: XOR<XOR<AgentProfileUpdateToOneWithWhereWithoutHotelsInput, AgentProfileUpdateWithoutHotelsInput>, AgentProfileUncheckedUpdateWithoutHotelsInput>
  }

  export type HotelImageUpdateManyWithoutHotelNestedInput = {
    create?: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput> | HotelImageCreateWithoutHotelInput[] | HotelImageUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelImageCreateOrConnectWithoutHotelInput | HotelImageCreateOrConnectWithoutHotelInput[]
    upsert?: HotelImageUpsertWithWhereUniqueWithoutHotelInput | HotelImageUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: HotelImageCreateManyHotelInputEnvelope
    set?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    disconnect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    delete?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    connect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    update?: HotelImageUpdateWithWhereUniqueWithoutHotelInput | HotelImageUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: HotelImageUpdateManyWithWhereWithoutHotelInput | HotelImageUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: HotelImageScalarWhereInput | HotelImageScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHotelInput | RoomUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHotelInput | RoomUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHotelInput | RoomUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomTypeUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomTypeCreateWithoutHotelInput, RoomTypeUncheckedCreateWithoutHotelInput> | RoomTypeCreateWithoutHotelInput[] | RoomTypeUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomTypeCreateOrConnectWithoutHotelInput | RoomTypeCreateOrConnectWithoutHotelInput[]
    upsert?: RoomTypeUpsertWithWhereUniqueWithoutHotelInput | RoomTypeUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomTypeCreateManyHotelInputEnvelope
    set?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    disconnect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    delete?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    connect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    update?: RoomTypeUpdateWithWhereUniqueWithoutHotelInput | RoomTypeUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomTypeUpdateManyWithWhereWithoutHotelInput | RoomTypeUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomTypeScalarWhereInput | RoomTypeScalarWhereInput[]
  }

  export type HotelImageUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput> | HotelImageCreateWithoutHotelInput[] | HotelImageUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelImageCreateOrConnectWithoutHotelInput | HotelImageCreateOrConnectWithoutHotelInput[]
    upsert?: HotelImageUpsertWithWhereUniqueWithoutHotelInput | HotelImageUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: HotelImageCreateManyHotelInputEnvelope
    set?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    disconnect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    delete?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    connect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    update?: HotelImageUpdateWithWhereUniqueWithoutHotelInput | HotelImageUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: HotelImageUpdateManyWithWhereWithoutHotelInput | HotelImageUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: HotelImageScalarWhereInput | HotelImageScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHotelInput | RoomUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHotelInput | RoomUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHotelInput | RoomUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomTypeUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomTypeCreateWithoutHotelInput, RoomTypeUncheckedCreateWithoutHotelInput> | RoomTypeCreateWithoutHotelInput[] | RoomTypeUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomTypeCreateOrConnectWithoutHotelInput | RoomTypeCreateOrConnectWithoutHotelInput[]
    upsert?: RoomTypeUpsertWithWhereUniqueWithoutHotelInput | RoomTypeUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomTypeCreateManyHotelInputEnvelope
    set?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    disconnect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    delete?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    connect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    update?: RoomTypeUpdateWithWhereUniqueWithoutHotelInput | RoomTypeUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomTypeUpdateManyWithWhereWithoutHotelInput | RoomTypeUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomTypeScalarWhereInput | RoomTypeScalarWhereInput[]
  }

  export type HotelCreateNestedOneWithoutImagesInput = {
    create?: XOR<HotelCreateWithoutImagesInput, HotelUncheckedCreateWithoutImagesInput>
    connectOrCreate?: HotelCreateOrConnectWithoutImagesInput
    connect?: HotelWhereUniqueInput
  }

  export type HotelUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<HotelCreateWithoutImagesInput, HotelUncheckedCreateWithoutImagesInput>
    connectOrCreate?: HotelCreateOrConnectWithoutImagesInput
    upsert?: HotelUpsertWithoutImagesInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutImagesInput, HotelUpdateWithoutImagesInput>, HotelUncheckedUpdateWithoutImagesInput>
  }

  export type HotelCreateNestedOneWithoutRoomTypesInput = {
    create?: XOR<HotelCreateWithoutRoomTypesInput, HotelUncheckedCreateWithoutRoomTypesInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoomTypesInput
    connect?: HotelWhereUniqueInput
  }

  export type RoomCreateNestedManyWithoutRoomTypeInput = {
    create?: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput> | RoomCreateWithoutRoomTypeInput[] | RoomUncheckedCreateWithoutRoomTypeInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutRoomTypeInput | RoomCreateOrConnectWithoutRoomTypeInput[]
    createMany?: RoomCreateManyRoomTypeInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomTypeImageCreateNestedManyWithoutRoomTypeInput = {
    create?: XOR<RoomTypeImageCreateWithoutRoomTypeInput, RoomTypeImageUncheckedCreateWithoutRoomTypeInput> | RoomTypeImageCreateWithoutRoomTypeInput[] | RoomTypeImageUncheckedCreateWithoutRoomTypeInput[]
    connectOrCreate?: RoomTypeImageCreateOrConnectWithoutRoomTypeInput | RoomTypeImageCreateOrConnectWithoutRoomTypeInput[]
    createMany?: RoomTypeImageCreateManyRoomTypeInputEnvelope
    connect?: RoomTypeImageWhereUniqueInput | RoomTypeImageWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutRoomTypeInput = {
    create?: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput> | RoomCreateWithoutRoomTypeInput[] | RoomUncheckedCreateWithoutRoomTypeInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutRoomTypeInput | RoomCreateOrConnectWithoutRoomTypeInput[]
    createMany?: RoomCreateManyRoomTypeInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomTypeImageUncheckedCreateNestedManyWithoutRoomTypeInput = {
    create?: XOR<RoomTypeImageCreateWithoutRoomTypeInput, RoomTypeImageUncheckedCreateWithoutRoomTypeInput> | RoomTypeImageCreateWithoutRoomTypeInput[] | RoomTypeImageUncheckedCreateWithoutRoomTypeInput[]
    connectOrCreate?: RoomTypeImageCreateOrConnectWithoutRoomTypeInput | RoomTypeImageCreateOrConnectWithoutRoomTypeInput[]
    createMany?: RoomTypeImageCreateManyRoomTypeInputEnvelope
    connect?: RoomTypeImageWhereUniqueInput | RoomTypeImageWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumBedTypeFieldUpdateOperationsInput = {
    set?: $Enums.BedType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HotelUpdateOneRequiredWithoutRoomTypesNestedInput = {
    create?: XOR<HotelCreateWithoutRoomTypesInput, HotelUncheckedCreateWithoutRoomTypesInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoomTypesInput
    upsert?: HotelUpsertWithoutRoomTypesInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutRoomTypesInput, HotelUpdateWithoutRoomTypesInput>, HotelUncheckedUpdateWithoutRoomTypesInput>
  }

  export type RoomUpdateManyWithoutRoomTypeNestedInput = {
    create?: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput> | RoomCreateWithoutRoomTypeInput[] | RoomUncheckedCreateWithoutRoomTypeInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutRoomTypeInput | RoomCreateOrConnectWithoutRoomTypeInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutRoomTypeInput | RoomUpsertWithWhereUniqueWithoutRoomTypeInput[]
    createMany?: RoomCreateManyRoomTypeInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutRoomTypeInput | RoomUpdateWithWhereUniqueWithoutRoomTypeInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutRoomTypeInput | RoomUpdateManyWithWhereWithoutRoomTypeInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomTypeImageUpdateManyWithoutRoomTypeNestedInput = {
    create?: XOR<RoomTypeImageCreateWithoutRoomTypeInput, RoomTypeImageUncheckedCreateWithoutRoomTypeInput> | RoomTypeImageCreateWithoutRoomTypeInput[] | RoomTypeImageUncheckedCreateWithoutRoomTypeInput[]
    connectOrCreate?: RoomTypeImageCreateOrConnectWithoutRoomTypeInput | RoomTypeImageCreateOrConnectWithoutRoomTypeInput[]
    upsert?: RoomTypeImageUpsertWithWhereUniqueWithoutRoomTypeInput | RoomTypeImageUpsertWithWhereUniqueWithoutRoomTypeInput[]
    createMany?: RoomTypeImageCreateManyRoomTypeInputEnvelope
    set?: RoomTypeImageWhereUniqueInput | RoomTypeImageWhereUniqueInput[]
    disconnect?: RoomTypeImageWhereUniqueInput | RoomTypeImageWhereUniqueInput[]
    delete?: RoomTypeImageWhereUniqueInput | RoomTypeImageWhereUniqueInput[]
    connect?: RoomTypeImageWhereUniqueInput | RoomTypeImageWhereUniqueInput[]
    update?: RoomTypeImageUpdateWithWhereUniqueWithoutRoomTypeInput | RoomTypeImageUpdateWithWhereUniqueWithoutRoomTypeInput[]
    updateMany?: RoomTypeImageUpdateManyWithWhereWithoutRoomTypeInput | RoomTypeImageUpdateManyWithWhereWithoutRoomTypeInput[]
    deleteMany?: RoomTypeImageScalarWhereInput | RoomTypeImageScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutRoomTypeNestedInput = {
    create?: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput> | RoomCreateWithoutRoomTypeInput[] | RoomUncheckedCreateWithoutRoomTypeInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutRoomTypeInput | RoomCreateOrConnectWithoutRoomTypeInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutRoomTypeInput | RoomUpsertWithWhereUniqueWithoutRoomTypeInput[]
    createMany?: RoomCreateManyRoomTypeInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutRoomTypeInput | RoomUpdateWithWhereUniqueWithoutRoomTypeInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutRoomTypeInput | RoomUpdateManyWithWhereWithoutRoomTypeInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomTypeImageUncheckedUpdateManyWithoutRoomTypeNestedInput = {
    create?: XOR<RoomTypeImageCreateWithoutRoomTypeInput, RoomTypeImageUncheckedCreateWithoutRoomTypeInput> | RoomTypeImageCreateWithoutRoomTypeInput[] | RoomTypeImageUncheckedCreateWithoutRoomTypeInput[]
    connectOrCreate?: RoomTypeImageCreateOrConnectWithoutRoomTypeInput | RoomTypeImageCreateOrConnectWithoutRoomTypeInput[]
    upsert?: RoomTypeImageUpsertWithWhereUniqueWithoutRoomTypeInput | RoomTypeImageUpsertWithWhereUniqueWithoutRoomTypeInput[]
    createMany?: RoomTypeImageCreateManyRoomTypeInputEnvelope
    set?: RoomTypeImageWhereUniqueInput | RoomTypeImageWhereUniqueInput[]
    disconnect?: RoomTypeImageWhereUniqueInput | RoomTypeImageWhereUniqueInput[]
    delete?: RoomTypeImageWhereUniqueInput | RoomTypeImageWhereUniqueInput[]
    connect?: RoomTypeImageWhereUniqueInput | RoomTypeImageWhereUniqueInput[]
    update?: RoomTypeImageUpdateWithWhereUniqueWithoutRoomTypeInput | RoomTypeImageUpdateWithWhereUniqueWithoutRoomTypeInput[]
    updateMany?: RoomTypeImageUpdateManyWithWhereWithoutRoomTypeInput | RoomTypeImageUpdateManyWithWhereWithoutRoomTypeInput[]
    deleteMany?: RoomTypeImageScalarWhereInput | RoomTypeImageScalarWhereInput[]
  }

  export type HotelCreateNestedOneWithoutRoomsInput = {
    create?: XOR<HotelCreateWithoutRoomsInput, HotelUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoomsInput
    connect?: HotelWhereUniqueInput
  }

  export type RoomTypeCreateNestedOneWithoutRoomsInput = {
    create?: XOR<RoomTypeCreateWithoutRoomsInput, RoomTypeUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: RoomTypeCreateOrConnectWithoutRoomsInput
    connect?: RoomTypeWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRoomStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type HotelUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<HotelCreateWithoutRoomsInput, HotelUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoomsInput
    upsert?: HotelUpsertWithoutRoomsInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutRoomsInput, HotelUpdateWithoutRoomsInput>, HotelUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomTypeUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<RoomTypeCreateWithoutRoomsInput, RoomTypeUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: RoomTypeCreateOrConnectWithoutRoomsInput
    upsert?: RoomTypeUpsertWithoutRoomsInput
    connect?: RoomTypeWhereUniqueInput
    update?: XOR<XOR<RoomTypeUpdateToOneWithWhereWithoutRoomsInput, RoomTypeUpdateWithoutRoomsInput>, RoomTypeUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomTypeCreateNestedOneWithoutImagesInput = {
    create?: XOR<RoomTypeCreateWithoutImagesInput, RoomTypeUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RoomTypeCreateOrConnectWithoutImagesInput
    connect?: RoomTypeWhereUniqueInput
  }

  export type RoomTypeUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<RoomTypeCreateWithoutImagesInput, RoomTypeUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RoomTypeCreateOrConnectWithoutImagesInput
    upsert?: RoomTypeUpsertWithoutImagesInput
    connect?: RoomTypeWhereUniqueInput
    update?: XOR<XOR<RoomTypeUpdateToOneWithWhereWithoutImagesInput, RoomTypeUpdateWithoutImagesInput>, RoomTypeUncheckedUpdateWithoutImagesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumHotelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.HotelStatus | EnumHotelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HotelStatus[] | ListEnumHotelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.HotelStatus[] | ListEnumHotelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumHotelStatusFilter<$PrismaModel> | $Enums.HotelStatus
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumHotelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HotelStatus | EnumHotelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HotelStatus[] | ListEnumHotelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.HotelStatus[] | ListEnumHotelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumHotelStatusWithAggregatesFilter<$PrismaModel> | $Enums.HotelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHotelStatusFilter<$PrismaModel>
    _max?: NestedEnumHotelStatusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumBedTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BedType | EnumBedTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BedType[] | ListEnumBedTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BedType[] | ListEnumBedTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBedTypeFilter<$PrismaModel> | $Enums.BedType
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumBedTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BedType | EnumBedTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BedType[] | ListEnumBedTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BedType[] | ListEnumBedTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBedTypeWithAggregatesFilter<$PrismaModel> | $Enums.BedType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBedTypeFilter<$PrismaModel>
    _max?: NestedEnumBedTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    fullName: string
    phoneNumber?: string | null
    avatarUrl?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    fullName: string
    phoneNumber?: string | null
    avatarUrl?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type AgentProfileCreateWithoutUserInput = {
    businessName: string
    businessLicense?: string | null
    taxCode?: string | null
    idNumber?: string | null
    idCardImageUrl?: string | null
    approvalStatus?: $Enums.UserStatus
    approvedAt?: Date | string | null
    rejectedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutOwnerInput
  }

  export type AgentProfileUncheckedCreateWithoutUserInput = {
    businessName: string
    businessLicense?: string | null
    taxCode?: string | null
    idNumber?: string | null
    idCardImageUrl?: string | null
    approvalStatus?: $Enums.UserStatus
    approvedAt?: Date | string | null
    rejectedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type AgentProfileCreateOrConnectWithoutUserInput = {
    where: AgentProfileWhereUniqueInput
    create: XOR<AgentProfileCreateWithoutUserInput, AgentProfileUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    deviceName?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
    revokedAt?: Date | string | null
    revokeReason?: string | null
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    deviceName?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
    revokedAt?: Date | string | null
    revokeReason?: string | null
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentProfileUpsertWithoutUserInput = {
    update: XOR<AgentProfileUpdateWithoutUserInput, AgentProfileUncheckedUpdateWithoutUserInput>
    create: XOR<AgentProfileCreateWithoutUserInput, AgentProfileUncheckedCreateWithoutUserInput>
    where?: AgentProfileWhereInput
  }

  export type AgentProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: AgentProfileWhereInput
    data: XOR<AgentProfileUpdateWithoutUserInput, AgentProfileUncheckedUpdateWithoutUserInput>
  }

  export type AgentProfileUpdateWithoutUserInput = {
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idCardImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutOwnerNestedInput
  }

  export type AgentProfileUncheckedUpdateWithoutUserInput = {
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idCardImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: UuidFilter<"RefreshToken"> | string
    userId?: UuidFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    deviceName?: StringNullableFilter<"RefreshToken"> | string | null
    ipAddress?: StringNullableFilter<"RefreshToken"> | string | null
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    lastUsedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    revokeReason?: StringNullableFilter<"RefreshToken"> | string | null
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    loginAttempts?: number
    lockUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    agentProfile?: AgentProfileCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    loginAttempts?: number
    lockUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    agentProfile?: AgentProfileUncheckedCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agentProfile?: AgentProfileUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agentProfile?: AgentProfileUncheckedUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAgentProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    loginAttempts?: number
    lockUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAgentProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    loginAttempts?: number
    lockUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAgentProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAgentProfileInput, UserUncheckedCreateWithoutAgentProfileInput>
  }

  export type HotelCreateWithoutOwnerInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    address: string
    city: string
    country?: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone?: string | null
    email?: string | null
    thumbnail?: string | null
    rating?: number
    checkInTime?: string | null
    checkOutTime?: string | null
    status?: $Enums.HotelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: HotelImageCreateNestedManyWithoutHotelInput
    rooms?: RoomCreateNestedManyWithoutHotelInput
    roomTypes?: RoomTypeCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    address: string
    city: string
    country?: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone?: string | null
    email?: string | null
    thumbnail?: string | null
    rating?: number
    checkInTime?: string | null
    checkOutTime?: string | null
    status?: $Enums.HotelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: HotelImageUncheckedCreateNestedManyWithoutHotelInput
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
    roomTypes?: RoomTypeUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutOwnerInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutOwnerInput, HotelUncheckedCreateWithoutOwnerInput>
  }

  export type HotelCreateManyOwnerInputEnvelope = {
    data: HotelCreateManyOwnerInput | HotelCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAgentProfileInput = {
    update: XOR<UserUpdateWithoutAgentProfileInput, UserUncheckedUpdateWithoutAgentProfileInput>
    create: XOR<UserCreateWithoutAgentProfileInput, UserUncheckedCreateWithoutAgentProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAgentProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAgentProfileInput, UserUncheckedUpdateWithoutAgentProfileInput>
  }

  export type UserUpdateWithoutAgentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAgentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HotelUpsertWithWhereUniqueWithoutOwnerInput = {
    where: HotelWhereUniqueInput
    update: XOR<HotelUpdateWithoutOwnerInput, HotelUncheckedUpdateWithoutOwnerInput>
    create: XOR<HotelCreateWithoutOwnerInput, HotelUncheckedCreateWithoutOwnerInput>
  }

  export type HotelUpdateWithWhereUniqueWithoutOwnerInput = {
    where: HotelWhereUniqueInput
    data: XOR<HotelUpdateWithoutOwnerInput, HotelUncheckedUpdateWithoutOwnerInput>
  }

  export type HotelUpdateManyWithWhereWithoutOwnerInput = {
    where: HotelScalarWhereInput
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyWithoutOwnerInput>
  }

  export type HotelScalarWhereInput = {
    AND?: HotelScalarWhereInput | HotelScalarWhereInput[]
    OR?: HotelScalarWhereInput[]
    NOT?: HotelScalarWhereInput | HotelScalarWhereInput[]
    id?: UuidFilter<"Hotel"> | string
    ownerId?: UuidFilter<"Hotel"> | string
    name?: StringFilter<"Hotel"> | string
    slug?: StringFilter<"Hotel"> | string
    description?: StringNullableFilter<"Hotel"> | string | null
    address?: StringFilter<"Hotel"> | string
    city?: StringFilter<"Hotel"> | string
    country?: StringFilter<"Hotel"> | string
    latitude?: DecimalNullableFilter<"Hotel"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Hotel"> | Decimal | DecimalJsLike | number | string | null
    phone?: StringNullableFilter<"Hotel"> | string | null
    email?: StringNullableFilter<"Hotel"> | string | null
    thumbnail?: StringNullableFilter<"Hotel"> | string | null
    rating?: FloatFilter<"Hotel"> | number
    checkInTime?: StringNullableFilter<"Hotel"> | string | null
    checkOutTime?: StringNullableFilter<"Hotel"> | string | null
    status?: EnumHotelStatusFilter<"Hotel"> | $Enums.HotelStatus
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeFilter<"Hotel"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Hotel"> | Date | string | null
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    loginAttempts?: number
    lockUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    agentProfile?: AgentProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    status?: $Enums.UserStatus
    loginAttempts?: number
    lockUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    agentProfile?: AgentProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    agentProfile?: AgentProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    agentProfile?: AgentProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AgentProfileCreateWithoutHotelsInput = {
    businessName: string
    businessLicense?: string | null
    taxCode?: string | null
    idNumber?: string | null
    idCardImageUrl?: string | null
    approvalStatus?: $Enums.UserStatus
    approvedAt?: Date | string | null
    rejectedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAgentProfileInput
  }

  export type AgentProfileUncheckedCreateWithoutHotelsInput = {
    userId: string
    businessName: string
    businessLicense?: string | null
    taxCode?: string | null
    idNumber?: string | null
    idCardImageUrl?: string | null
    approvalStatus?: $Enums.UserStatus
    approvedAt?: Date | string | null
    rejectedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentProfileCreateOrConnectWithoutHotelsInput = {
    where: AgentProfileWhereUniqueInput
    create: XOR<AgentProfileCreateWithoutHotelsInput, AgentProfileUncheckedCreateWithoutHotelsInput>
  }

  export type HotelImageCreateWithoutHotelInput = {
    id?: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelImageUncheckedCreateWithoutHotelInput = {
    id?: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelImageCreateOrConnectWithoutHotelInput = {
    where: HotelImageWhereUniqueInput
    create: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput>
  }

  export type HotelImageCreateManyHotelInputEnvelope = {
    data: HotelImageCreateManyHotelInput | HotelImageCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutHotelInput = {
    id?: string
    roomNumber: string
    floor?: number | null
    status?: $Enums.RoomStatus
    note?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roomType: RoomTypeCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutHotelInput = {
    id?: string
    roomTypeId: string
    roomNumber: string
    floor?: number | null
    status?: $Enums.RoomStatus
    note?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomCreateOrConnectWithoutHotelInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput>
  }

  export type RoomCreateManyHotelInputEnvelope = {
    data: RoomCreateManyHotelInput | RoomCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type RoomTypeCreateWithoutHotelInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    maxGuests: number
    maxAdults: number
    maxChildren: number
    bedType: $Enums.BedType
    bedCount: number
    area?: number | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutRoomTypeInput
    images?: RoomTypeImageCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeUncheckedCreateWithoutHotelInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    maxGuests: number
    maxAdults: number
    maxChildren: number
    bedType: $Enums.BedType
    bedCount: number
    area?: number | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutRoomTypeInput
    images?: RoomTypeImageUncheckedCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeCreateOrConnectWithoutHotelInput = {
    where: RoomTypeWhereUniqueInput
    create: XOR<RoomTypeCreateWithoutHotelInput, RoomTypeUncheckedCreateWithoutHotelInput>
  }

  export type RoomTypeCreateManyHotelInputEnvelope = {
    data: RoomTypeCreateManyHotelInput | RoomTypeCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type AgentProfileUpsertWithoutHotelsInput = {
    update: XOR<AgentProfileUpdateWithoutHotelsInput, AgentProfileUncheckedUpdateWithoutHotelsInput>
    create: XOR<AgentProfileCreateWithoutHotelsInput, AgentProfileUncheckedCreateWithoutHotelsInput>
    where?: AgentProfileWhereInput
  }

  export type AgentProfileUpdateToOneWithWhereWithoutHotelsInput = {
    where?: AgentProfileWhereInput
    data: XOR<AgentProfileUpdateWithoutHotelsInput, AgentProfileUncheckedUpdateWithoutHotelsInput>
  }

  export type AgentProfileUpdateWithoutHotelsInput = {
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idCardImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAgentProfileNestedInput
  }

  export type AgentProfileUncheckedUpdateWithoutHotelsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    businessLicense?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    idCardImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelImageUpsertWithWhereUniqueWithoutHotelInput = {
    where: HotelImageWhereUniqueInput
    update: XOR<HotelImageUpdateWithoutHotelInput, HotelImageUncheckedUpdateWithoutHotelInput>
    create: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput>
  }

  export type HotelImageUpdateWithWhereUniqueWithoutHotelInput = {
    where: HotelImageWhereUniqueInput
    data: XOR<HotelImageUpdateWithoutHotelInput, HotelImageUncheckedUpdateWithoutHotelInput>
  }

  export type HotelImageUpdateManyWithWhereWithoutHotelInput = {
    where: HotelImageScalarWhereInput
    data: XOR<HotelImageUpdateManyMutationInput, HotelImageUncheckedUpdateManyWithoutHotelInput>
  }

  export type HotelImageScalarWhereInput = {
    AND?: HotelImageScalarWhereInput | HotelImageScalarWhereInput[]
    OR?: HotelImageScalarWhereInput[]
    NOT?: HotelImageScalarWhereInput | HotelImageScalarWhereInput[]
    id?: UuidFilter<"HotelImage"> | string
    hotelId?: UuidFilter<"HotelImage"> | string
    imageUrl?: StringFilter<"HotelImage"> | string
    createdAt?: DateTimeFilter<"HotelImage"> | Date | string
    updatedAt?: DateTimeFilter<"HotelImage"> | Date | string
  }

  export type RoomUpsertWithWhereUniqueWithoutHotelInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutHotelInput, RoomUncheckedUpdateWithoutHotelInput>
    create: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutHotelInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutHotelInput, RoomUncheckedUpdateWithoutHotelInput>
  }

  export type RoomUpdateManyWithWhereWithoutHotelInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutHotelInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: UuidFilter<"Room"> | string
    hotelId?: UuidFilter<"Room"> | string
    roomTypeId?: UuidFilter<"Room"> | string
    roomNumber?: StringFilter<"Room"> | string
    floor?: IntNullableFilter<"Room"> | number | null
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    note?: StringNullableFilter<"Room"> | string | null
    isActive?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
  }

  export type RoomTypeUpsertWithWhereUniqueWithoutHotelInput = {
    where: RoomTypeWhereUniqueInput
    update: XOR<RoomTypeUpdateWithoutHotelInput, RoomTypeUncheckedUpdateWithoutHotelInput>
    create: XOR<RoomTypeCreateWithoutHotelInput, RoomTypeUncheckedCreateWithoutHotelInput>
  }

  export type RoomTypeUpdateWithWhereUniqueWithoutHotelInput = {
    where: RoomTypeWhereUniqueInput
    data: XOR<RoomTypeUpdateWithoutHotelInput, RoomTypeUncheckedUpdateWithoutHotelInput>
  }

  export type RoomTypeUpdateManyWithWhereWithoutHotelInput = {
    where: RoomTypeScalarWhereInput
    data: XOR<RoomTypeUpdateManyMutationInput, RoomTypeUncheckedUpdateManyWithoutHotelInput>
  }

  export type RoomTypeScalarWhereInput = {
    AND?: RoomTypeScalarWhereInput | RoomTypeScalarWhereInput[]
    OR?: RoomTypeScalarWhereInput[]
    NOT?: RoomTypeScalarWhereInput | RoomTypeScalarWhereInput[]
    id?: UuidFilter<"RoomType"> | string
    hotelId?: UuidFilter<"RoomType"> | string
    name?: StringFilter<"RoomType"> | string
    description?: StringNullableFilter<"RoomType"> | string | null
    price?: DecimalFilter<"RoomType"> | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFilter<"RoomType"> | number
    maxAdults?: IntFilter<"RoomType"> | number
    maxChildren?: IntFilter<"RoomType"> | number
    bedType?: EnumBedTypeFilter<"RoomType"> | $Enums.BedType
    bedCount?: IntFilter<"RoomType"> | number
    area?: FloatNullableFilter<"RoomType"> | number | null
    thumbnail?: StringNullableFilter<"RoomType"> | string | null
    createdAt?: DateTimeFilter<"RoomType"> | Date | string
    updatedAt?: DateTimeFilter<"RoomType"> | Date | string
  }

  export type HotelCreateWithoutImagesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    address: string
    city: string
    country?: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone?: string | null
    email?: string | null
    thumbnail?: string | null
    rating?: number
    checkInTime?: string | null
    checkOutTime?: string | null
    status?: $Enums.HotelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owner: AgentProfileCreateNestedOneWithoutHotelsInput
    rooms?: RoomCreateNestedManyWithoutHotelInput
    roomTypes?: RoomTypeCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutImagesInput = {
    id?: string
    ownerId: string
    name: string
    slug: string
    description?: string | null
    address: string
    city: string
    country?: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone?: string | null
    email?: string | null
    thumbnail?: string | null
    rating?: number
    checkInTime?: string | null
    checkOutTime?: string | null
    status?: $Enums.HotelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
    roomTypes?: RoomTypeUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutImagesInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutImagesInput, HotelUncheckedCreateWithoutImagesInput>
  }

  export type HotelUpsertWithoutImagesInput = {
    update: XOR<HotelUpdateWithoutImagesInput, HotelUncheckedUpdateWithoutImagesInput>
    create: XOR<HotelCreateWithoutImagesInput, HotelUncheckedCreateWithoutImagesInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutImagesInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutImagesInput, HotelUncheckedUpdateWithoutImagesInput>
  }

  export type HotelUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    checkInTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHotelStatusFieldUpdateOperationsInput | $Enums.HotelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: AgentProfileUpdateOneRequiredWithoutHotelsNestedInput
    rooms?: RoomUpdateManyWithoutHotelNestedInput
    roomTypes?: RoomTypeUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    checkInTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHotelStatusFieldUpdateOperationsInput | $Enums.HotelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    roomTypes?: RoomTypeUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelCreateWithoutRoomTypesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    address: string
    city: string
    country?: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone?: string | null
    email?: string | null
    thumbnail?: string | null
    rating?: number
    checkInTime?: string | null
    checkOutTime?: string | null
    status?: $Enums.HotelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owner: AgentProfileCreateNestedOneWithoutHotelsInput
    images?: HotelImageCreateNestedManyWithoutHotelInput
    rooms?: RoomCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutRoomTypesInput = {
    id?: string
    ownerId: string
    name: string
    slug: string
    description?: string | null
    address: string
    city: string
    country?: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone?: string | null
    email?: string | null
    thumbnail?: string | null
    rating?: number
    checkInTime?: string | null
    checkOutTime?: string | null
    status?: $Enums.HotelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: HotelImageUncheckedCreateNestedManyWithoutHotelInput
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutRoomTypesInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutRoomTypesInput, HotelUncheckedCreateWithoutRoomTypesInput>
  }

  export type RoomCreateWithoutRoomTypeInput = {
    id?: string
    roomNumber: string
    floor?: number | null
    status?: $Enums.RoomStatus
    note?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutRoomTypeInput = {
    id?: string
    hotelId: string
    roomNumber: string
    floor?: number | null
    status?: $Enums.RoomStatus
    note?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomCreateOrConnectWithoutRoomTypeInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput>
  }

  export type RoomCreateManyRoomTypeInputEnvelope = {
    data: RoomCreateManyRoomTypeInput | RoomCreateManyRoomTypeInput[]
    skipDuplicates?: boolean
  }

  export type RoomTypeImageCreateWithoutRoomTypeInput = {
    id?: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomTypeImageUncheckedCreateWithoutRoomTypeInput = {
    id?: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomTypeImageCreateOrConnectWithoutRoomTypeInput = {
    where: RoomTypeImageWhereUniqueInput
    create: XOR<RoomTypeImageCreateWithoutRoomTypeInput, RoomTypeImageUncheckedCreateWithoutRoomTypeInput>
  }

  export type RoomTypeImageCreateManyRoomTypeInputEnvelope = {
    data: RoomTypeImageCreateManyRoomTypeInput | RoomTypeImageCreateManyRoomTypeInput[]
    skipDuplicates?: boolean
  }

  export type HotelUpsertWithoutRoomTypesInput = {
    update: XOR<HotelUpdateWithoutRoomTypesInput, HotelUncheckedUpdateWithoutRoomTypesInput>
    create: XOR<HotelCreateWithoutRoomTypesInput, HotelUncheckedCreateWithoutRoomTypesInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutRoomTypesInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutRoomTypesInput, HotelUncheckedUpdateWithoutRoomTypesInput>
  }

  export type HotelUpdateWithoutRoomTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    checkInTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHotelStatusFieldUpdateOperationsInput | $Enums.HotelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: AgentProfileUpdateOneRequiredWithoutHotelsNestedInput
    images?: HotelImageUpdateManyWithoutHotelNestedInput
    rooms?: RoomUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutRoomTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    checkInTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHotelStatusFieldUpdateOperationsInput | $Enums.HotelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: HotelImageUncheckedUpdateManyWithoutHotelNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type RoomUpsertWithWhereUniqueWithoutRoomTypeInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutRoomTypeInput, RoomUncheckedUpdateWithoutRoomTypeInput>
    create: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutRoomTypeInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutRoomTypeInput, RoomUncheckedUpdateWithoutRoomTypeInput>
  }

  export type RoomUpdateManyWithWhereWithoutRoomTypeInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutRoomTypeInput>
  }

  export type RoomTypeImageUpsertWithWhereUniqueWithoutRoomTypeInput = {
    where: RoomTypeImageWhereUniqueInput
    update: XOR<RoomTypeImageUpdateWithoutRoomTypeInput, RoomTypeImageUncheckedUpdateWithoutRoomTypeInput>
    create: XOR<RoomTypeImageCreateWithoutRoomTypeInput, RoomTypeImageUncheckedCreateWithoutRoomTypeInput>
  }

  export type RoomTypeImageUpdateWithWhereUniqueWithoutRoomTypeInput = {
    where: RoomTypeImageWhereUniqueInput
    data: XOR<RoomTypeImageUpdateWithoutRoomTypeInput, RoomTypeImageUncheckedUpdateWithoutRoomTypeInput>
  }

  export type RoomTypeImageUpdateManyWithWhereWithoutRoomTypeInput = {
    where: RoomTypeImageScalarWhereInput
    data: XOR<RoomTypeImageUpdateManyMutationInput, RoomTypeImageUncheckedUpdateManyWithoutRoomTypeInput>
  }

  export type RoomTypeImageScalarWhereInput = {
    AND?: RoomTypeImageScalarWhereInput | RoomTypeImageScalarWhereInput[]
    OR?: RoomTypeImageScalarWhereInput[]
    NOT?: RoomTypeImageScalarWhereInput | RoomTypeImageScalarWhereInput[]
    id?: UuidFilter<"RoomTypeImage"> | string
    roomTypeId?: UuidFilter<"RoomTypeImage"> | string
    imageUrl?: StringFilter<"RoomTypeImage"> | string
    createdAt?: DateTimeFilter<"RoomTypeImage"> | Date | string
    updatedAt?: DateTimeFilter<"RoomTypeImage"> | Date | string
  }

  export type HotelCreateWithoutRoomsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    address: string
    city: string
    country?: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone?: string | null
    email?: string | null
    thumbnail?: string | null
    rating?: number
    checkInTime?: string | null
    checkOutTime?: string | null
    status?: $Enums.HotelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owner: AgentProfileCreateNestedOneWithoutHotelsInput
    images?: HotelImageCreateNestedManyWithoutHotelInput
    roomTypes?: RoomTypeCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutRoomsInput = {
    id?: string
    ownerId: string
    name: string
    slug: string
    description?: string | null
    address: string
    city: string
    country?: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone?: string | null
    email?: string | null
    thumbnail?: string | null
    rating?: number
    checkInTime?: string | null
    checkOutTime?: string | null
    status?: $Enums.HotelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: HotelImageUncheckedCreateNestedManyWithoutHotelInput
    roomTypes?: RoomTypeUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutRoomsInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutRoomsInput, HotelUncheckedCreateWithoutRoomsInput>
  }

  export type RoomTypeCreateWithoutRoomsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    maxGuests: number
    maxAdults: number
    maxChildren: number
    bedType: $Enums.BedType
    bedCount: number
    area?: number | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutRoomTypesInput
    images?: RoomTypeImageCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeUncheckedCreateWithoutRoomsInput = {
    id?: string
    hotelId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    maxGuests: number
    maxAdults: number
    maxChildren: number
    bedType: $Enums.BedType
    bedCount: number
    area?: number | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RoomTypeImageUncheckedCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeCreateOrConnectWithoutRoomsInput = {
    where: RoomTypeWhereUniqueInput
    create: XOR<RoomTypeCreateWithoutRoomsInput, RoomTypeUncheckedCreateWithoutRoomsInput>
  }

  export type HotelUpsertWithoutRoomsInput = {
    update: XOR<HotelUpdateWithoutRoomsInput, HotelUncheckedUpdateWithoutRoomsInput>
    create: XOR<HotelCreateWithoutRoomsInput, HotelUncheckedCreateWithoutRoomsInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutRoomsInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutRoomsInput, HotelUncheckedUpdateWithoutRoomsInput>
  }

  export type HotelUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    checkInTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHotelStatusFieldUpdateOperationsInput | $Enums.HotelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: AgentProfileUpdateOneRequiredWithoutHotelsNestedInput
    images?: HotelImageUpdateManyWithoutHotelNestedInput
    roomTypes?: RoomTypeUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    checkInTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHotelStatusFieldUpdateOperationsInput | $Enums.HotelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: HotelImageUncheckedUpdateManyWithoutHotelNestedInput
    roomTypes?: RoomTypeUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type RoomTypeUpsertWithoutRoomsInput = {
    update: XOR<RoomTypeUpdateWithoutRoomsInput, RoomTypeUncheckedUpdateWithoutRoomsInput>
    create: XOR<RoomTypeCreateWithoutRoomsInput, RoomTypeUncheckedCreateWithoutRoomsInput>
    where?: RoomTypeWhereInput
  }

  export type RoomTypeUpdateToOneWithWhereWithoutRoomsInput = {
    where?: RoomTypeWhereInput
    data: XOR<RoomTypeUpdateWithoutRoomsInput, RoomTypeUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomTypeUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedType?: EnumBedTypeFieldUpdateOperationsInput | $Enums.BedType
    bedCount?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutRoomTypesNestedInput
    images?: RoomTypeImageUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedType?: EnumBedTypeFieldUpdateOperationsInput | $Enums.BedType
    bedCount?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RoomTypeImageUncheckedUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeCreateWithoutImagesInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    maxGuests: number
    maxAdults: number
    maxChildren: number
    bedType: $Enums.BedType
    bedCount: number
    area?: number | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutRoomTypesInput
    rooms?: RoomCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeUncheckedCreateWithoutImagesInput = {
    id?: string
    hotelId: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    maxGuests: number
    maxAdults: number
    maxChildren: number
    bedType: $Enums.BedType
    bedCount: number
    area?: number | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeCreateOrConnectWithoutImagesInput = {
    where: RoomTypeWhereUniqueInput
    create: XOR<RoomTypeCreateWithoutImagesInput, RoomTypeUncheckedCreateWithoutImagesInput>
  }

  export type RoomTypeUpsertWithoutImagesInput = {
    update: XOR<RoomTypeUpdateWithoutImagesInput, RoomTypeUncheckedUpdateWithoutImagesInput>
    create: XOR<RoomTypeCreateWithoutImagesInput, RoomTypeUncheckedCreateWithoutImagesInput>
    where?: RoomTypeWhereInput
  }

  export type RoomTypeUpdateToOneWithWhereWithoutImagesInput = {
    where?: RoomTypeWhereInput
    data: XOR<RoomTypeUpdateWithoutImagesInput, RoomTypeUncheckedUpdateWithoutImagesInput>
  }

  export type RoomTypeUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedType?: EnumBedTypeFieldUpdateOperationsInput | $Enums.BedType
    bedCount?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutRoomTypesNestedInput
    rooms?: RoomUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedType?: EnumBedTypeFieldUpdateOperationsInput | $Enums.BedType
    bedCount?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutRoomTypeNestedInput
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    tokenHash: string
    deviceName?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
    revokedAt?: Date | string | null
    revokeReason?: string | null
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokeReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HotelCreateManyOwnerInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    address: string
    city: string
    country?: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone?: string | null
    email?: string | null
    thumbnail?: string | null
    rating?: number
    checkInTime?: string | null
    checkOutTime?: string | null
    status?: $Enums.HotelStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type HotelUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    checkInTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHotelStatusFieldUpdateOperationsInput | $Enums.HotelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: HotelImageUpdateManyWithoutHotelNestedInput
    rooms?: RoomUpdateManyWithoutHotelNestedInput
    roomTypes?: RoomTypeUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    checkInTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHotelStatusFieldUpdateOperationsInput | $Enums.HotelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: HotelImageUncheckedUpdateManyWithoutHotelNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    roomTypes?: RoomTypeUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    checkInTime?: NullableStringFieldUpdateOperationsInput | string | null
    checkOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumHotelStatusFieldUpdateOperationsInput | $Enums.HotelStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HotelImageCreateManyHotelInput = {
    id?: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomCreateManyHotelInput = {
    id?: string
    roomTypeId: string
    roomNumber: string
    floor?: number | null
    status?: $Enums.RoomStatus
    note?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomTypeCreateManyHotelInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    maxGuests: number
    maxAdults: number
    maxChildren: number
    bedType: $Enums.BedType
    bedCount: number
    area?: number | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelImageUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelImageUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelImageUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomTypeId?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomTypeId?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomTypeUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedType?: EnumBedTypeFieldUpdateOperationsInput | $Enums.BedType
    bedCount?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutRoomTypeNestedInput
    images?: RoomTypeImageUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedType?: EnumBedTypeFieldUpdateOperationsInput | $Enums.BedType
    bedCount?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutRoomTypeNestedInput
    images?: RoomTypeImageUncheckedUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    maxAdults?: IntFieldUpdateOperationsInput | number
    maxChildren?: IntFieldUpdateOperationsInput | number
    bedType?: EnumBedTypeFieldUpdateOperationsInput | $Enums.BedType
    bedCount?: IntFieldUpdateOperationsInput | number
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyRoomTypeInput = {
    id?: string
    hotelId: string
    roomNumber: string
    floor?: number | null
    status?: $Enums.RoomStatus
    note?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomTypeImageCreateManyRoomTypeInput = {
    id?: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateWithoutRoomTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyWithoutRoomTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomTypeImageUpdateWithoutRoomTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomTypeImageUncheckedUpdateWithoutRoomTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomTypeImageUncheckedUpdateManyWithoutRoomTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

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
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model BookingRoom
 * 
 */
export type BookingRoom = $Result.DefaultSelection<Prisma.$BookingRoomPayload>
/**
 * Model GuestInfo
 * 
 */
export type GuestInfo = $Result.DefaultSelection<Prisma.$GuestInfoPayload>
/**
 * Model BookingHistory
 * 
 */
export type BookingHistory = $Result.DefaultSelection<Prisma.$BookingHistoryPayload>
/**
 * Model PaymentTransaction
 * 
 */
export type PaymentTransaction = $Result.DefaultSelection<Prisma.$PaymentTransactionPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Promotion
 * 
 */
export type Promotion = $Result.DefaultSelection<Prisma.$PromotionPayload>
/**
 * Model BookingPromotion
 * 
 */
export type BookingPromotion = $Result.DefaultSelection<Prisma.$BookingPromotionPayload>
/**
 * Model RefundRequest
 * 
 */
export type RefundRequest = $Result.DefaultSelection<Prisma.$RefundRequestPayload>
/**
 * Model CancellationPolicy
 * 
 */
export type CancellationPolicy = $Result.DefaultSelection<Prisma.$CancellationPolicyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CHECKED_IN: 'CHECKED_IN',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const PaymentStatus: {
  UNPAID: 'UNPAID',
  PAID: 'PAID',
  REFUNDING: 'REFUNDING',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentProvider: {
  VNPAY: 'VNPAY',
  STRIPE: 'STRIPE'
};

export type PaymentProvider = (typeof PaymentProvider)[keyof typeof PaymentProvider]


export const PromotionType: {
  PERCENT: 'PERCENT',
  FIXED_AMOUNT: 'FIXED_AMOUNT'
};

export type PromotionType = (typeof PromotionType)[keyof typeof PromotionType]


export const RefundStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  PROCESSED: 'PROCESSED'
};

export type RefundStatus = (typeof RefundStatus)[keyof typeof RefundStatus]

}

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentProvider = $Enums.PaymentProvider

export const PaymentProvider: typeof $Enums.PaymentProvider

export type PromotionType = $Enums.PromotionType

export const PromotionType: typeof $Enums.PromotionType

export type RefundStatus = $Enums.RefundStatus

export const RefundStatus: typeof $Enums.RefundStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Bookings
 * const bookings = await prisma.booking.findMany()
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
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
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
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingRoom`: Exposes CRUD operations for the **BookingRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingRooms
    * const bookingRooms = await prisma.bookingRoom.findMany()
    * ```
    */
  get bookingRoom(): Prisma.BookingRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guestInfo`: Exposes CRUD operations for the **GuestInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuestInfos
    * const guestInfos = await prisma.guestInfo.findMany()
    * ```
    */
  get guestInfo(): Prisma.GuestInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingHistory`: Exposes CRUD operations for the **BookingHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingHistories
    * const bookingHistories = await prisma.bookingHistory.findMany()
    * ```
    */
  get bookingHistory(): Prisma.BookingHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentTransaction`: Exposes CRUD operations for the **PaymentTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentTransactions
    * const paymentTransactions = await prisma.paymentTransaction.findMany()
    * ```
    */
  get paymentTransaction(): Prisma.PaymentTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **Promotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotion.findMany()
    * ```
    */
  get promotion(): Prisma.PromotionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingPromotion`: Exposes CRUD operations for the **BookingPromotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingPromotions
    * const bookingPromotions = await prisma.bookingPromotion.findMany()
    * ```
    */
  get bookingPromotion(): Prisma.BookingPromotionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refundRequest`: Exposes CRUD operations for the **RefundRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefundRequests
    * const refundRequests = await prisma.refundRequest.findMany()
    * ```
    */
  get refundRequest(): Prisma.RefundRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cancellationPolicy`: Exposes CRUD operations for the **CancellationPolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CancellationPolicies
    * const cancellationPolicies = await prisma.cancellationPolicy.findMany()
    * ```
    */
  get cancellationPolicy(): Prisma.CancellationPolicyDelegate<ExtArgs, ClientOptions>;
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
    Booking: 'Booking',
    BookingRoom: 'BookingRoom',
    GuestInfo: 'GuestInfo',
    BookingHistory: 'BookingHistory',
    PaymentTransaction: 'PaymentTransaction',
    Invoice: 'Invoice',
    Promotion: 'Promotion',
    BookingPromotion: 'BookingPromotion',
    RefundRequest: 'RefundRequest',
    CancellationPolicy: 'CancellationPolicy'
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
      modelProps: "booking" | "bookingRoom" | "guestInfo" | "bookingHistory" | "paymentTransaction" | "invoice" | "promotion" | "bookingPromotion" | "refundRequest" | "cancellationPolicy"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      BookingRoom: {
        payload: Prisma.$BookingRoomPayload<ExtArgs>
        fields: Prisma.BookingRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          findFirst: {
            args: Prisma.BookingRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          findMany: {
            args: Prisma.BookingRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>[]
          }
          create: {
            args: Prisma.BookingRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          createMany: {
            args: Prisma.BookingRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>[]
          }
          delete: {
            args: Prisma.BookingRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          update: {
            args: Prisma.BookingRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          deleteMany: {
            args: Prisma.BookingRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>[]
          }
          upsert: {
            args: Prisma.BookingRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          aggregate: {
            args: Prisma.BookingRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingRoom>
          }
          groupBy: {
            args: Prisma.BookingRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingRoomCountArgs<ExtArgs>
            result: $Utils.Optional<BookingRoomCountAggregateOutputType> | number
          }
        }
      }
      GuestInfo: {
        payload: Prisma.$GuestInfoPayload<ExtArgs>
        fields: Prisma.GuestInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestInfoPayload>
          }
          findFirst: {
            args: Prisma.GuestInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestInfoPayload>
          }
          findMany: {
            args: Prisma.GuestInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestInfoPayload>[]
          }
          create: {
            args: Prisma.GuestInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestInfoPayload>
          }
          createMany: {
            args: Prisma.GuestInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestInfoPayload>[]
          }
          delete: {
            args: Prisma.GuestInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestInfoPayload>
          }
          update: {
            args: Prisma.GuestInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestInfoPayload>
          }
          deleteMany: {
            args: Prisma.GuestInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestInfoPayload>[]
          }
          upsert: {
            args: Prisma.GuestInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestInfoPayload>
          }
          aggregate: {
            args: Prisma.GuestInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuestInfo>
          }
          groupBy: {
            args: Prisma.GuestInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestInfoCountArgs<ExtArgs>
            result: $Utils.Optional<GuestInfoCountAggregateOutputType> | number
          }
        }
      }
      BookingHistory: {
        payload: Prisma.$BookingHistoryPayload<ExtArgs>
        fields: Prisma.BookingHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHistoryPayload>
          }
          findFirst: {
            args: Prisma.BookingHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHistoryPayload>
          }
          findMany: {
            args: Prisma.BookingHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHistoryPayload>[]
          }
          create: {
            args: Prisma.BookingHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHistoryPayload>
          }
          createMany: {
            args: Prisma.BookingHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHistoryPayload>[]
          }
          delete: {
            args: Prisma.BookingHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHistoryPayload>
          }
          update: {
            args: Prisma.BookingHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHistoryPayload>
          }
          deleteMany: {
            args: Prisma.BookingHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHistoryPayload>[]
          }
          upsert: {
            args: Prisma.BookingHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingHistoryPayload>
          }
          aggregate: {
            args: Prisma.BookingHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingHistory>
          }
          groupBy: {
            args: Prisma.BookingHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<BookingHistoryCountAggregateOutputType> | number
          }
        }
      }
      PaymentTransaction: {
        payload: Prisma.$PaymentTransactionPayload<ExtArgs>
        fields: Prisma.PaymentTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          findFirst: {
            args: Prisma.PaymentTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          findMany: {
            args: Prisma.PaymentTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>[]
          }
          create: {
            args: Prisma.PaymentTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          createMany: {
            args: Prisma.PaymentTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>[]
          }
          delete: {
            args: Prisma.PaymentTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          update: {
            args: Prisma.PaymentTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          deleteMany: {
            args: Prisma.PaymentTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>[]
          }
          upsert: {
            args: Prisma.PaymentTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          aggregate: {
            args: Prisma.PaymentTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentTransaction>
          }
          groupBy: {
            args: Prisma.PaymentTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentTransactionCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Promotion: {
        payload: Prisma.$PromotionPayload<ExtArgs>
        fields: Prisma.PromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findFirst: {
            args: Prisma.PromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findMany: {
            args: Prisma.PromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          create: {
            args: Prisma.PromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          createMany: {
            args: Prisma.PromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromotionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          delete: {
            args: Prisma.PromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          update: {
            args: Prisma.PromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          deleteMany: {
            args: Prisma.PromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromotionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          upsert: {
            args: Prisma.PromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          aggregate: {
            args: Prisma.PromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotion>
          }
          groupBy: {
            args: Prisma.PromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotionCountArgs<ExtArgs>
            result: $Utils.Optional<PromotionCountAggregateOutputType> | number
          }
        }
      }
      BookingPromotion: {
        payload: Prisma.$BookingPromotionPayload<ExtArgs>
        fields: Prisma.BookingPromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingPromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingPromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPromotionPayload>
          }
          findFirst: {
            args: Prisma.BookingPromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingPromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPromotionPayload>
          }
          findMany: {
            args: Prisma.BookingPromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPromotionPayload>[]
          }
          create: {
            args: Prisma.BookingPromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPromotionPayload>
          }
          createMany: {
            args: Prisma.BookingPromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingPromotionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPromotionPayload>[]
          }
          delete: {
            args: Prisma.BookingPromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPromotionPayload>
          }
          update: {
            args: Prisma.BookingPromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPromotionPayload>
          }
          deleteMany: {
            args: Prisma.BookingPromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingPromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingPromotionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPromotionPayload>[]
          }
          upsert: {
            args: Prisma.BookingPromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPromotionPayload>
          }
          aggregate: {
            args: Prisma.BookingPromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingPromotion>
          }
          groupBy: {
            args: Prisma.BookingPromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingPromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingPromotionCountArgs<ExtArgs>
            result: $Utils.Optional<BookingPromotionCountAggregateOutputType> | number
          }
        }
      }
      RefundRequest: {
        payload: Prisma.$RefundRequestPayload<ExtArgs>
        fields: Prisma.RefundRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefundRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefundRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundRequestPayload>
          }
          findFirst: {
            args: Prisma.RefundRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefundRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundRequestPayload>
          }
          findMany: {
            args: Prisma.RefundRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundRequestPayload>[]
          }
          create: {
            args: Prisma.RefundRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundRequestPayload>
          }
          createMany: {
            args: Prisma.RefundRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefundRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundRequestPayload>[]
          }
          delete: {
            args: Prisma.RefundRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundRequestPayload>
          }
          update: {
            args: Prisma.RefundRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundRequestPayload>
          }
          deleteMany: {
            args: Prisma.RefundRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefundRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefundRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundRequestPayload>[]
          }
          upsert: {
            args: Prisma.RefundRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundRequestPayload>
          }
          aggregate: {
            args: Prisma.RefundRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefundRequest>
          }
          groupBy: {
            args: Prisma.RefundRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefundRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefundRequestCountArgs<ExtArgs>
            result: $Utils.Optional<RefundRequestCountAggregateOutputType> | number
          }
        }
      }
      CancellationPolicy: {
        payload: Prisma.$CancellationPolicyPayload<ExtArgs>
        fields: Prisma.CancellationPolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CancellationPolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancellationPolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CancellationPolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancellationPolicyPayload>
          }
          findFirst: {
            args: Prisma.CancellationPolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancellationPolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CancellationPolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancellationPolicyPayload>
          }
          findMany: {
            args: Prisma.CancellationPolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancellationPolicyPayload>[]
          }
          create: {
            args: Prisma.CancellationPolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancellationPolicyPayload>
          }
          createMany: {
            args: Prisma.CancellationPolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CancellationPolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancellationPolicyPayload>[]
          }
          delete: {
            args: Prisma.CancellationPolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancellationPolicyPayload>
          }
          update: {
            args: Prisma.CancellationPolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancellationPolicyPayload>
          }
          deleteMany: {
            args: Prisma.CancellationPolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CancellationPolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CancellationPolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancellationPolicyPayload>[]
          }
          upsert: {
            args: Prisma.CancellationPolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancellationPolicyPayload>
          }
          aggregate: {
            args: Prisma.CancellationPolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCancellationPolicy>
          }
          groupBy: {
            args: Prisma.CancellationPolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CancellationPolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CancellationPolicyCountArgs<ExtArgs>
            result: $Utils.Optional<CancellationPolicyCountAggregateOutputType> | number
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
    booking?: BookingOmit
    bookingRoom?: BookingRoomOmit
    guestInfo?: GuestInfoOmit
    bookingHistory?: BookingHistoryOmit
    paymentTransaction?: PaymentTransactionOmit
    invoice?: InvoiceOmit
    promotion?: PromotionOmit
    bookingPromotion?: BookingPromotionOmit
    refundRequest?: RefundRequestOmit
    cancellationPolicy?: CancellationPolicyOmit
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
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    rooms: number
    histories: number
    refundRequests: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | BookingCountOutputTypeCountRoomsArgs
    histories?: boolean | BookingCountOutputTypeCountHistoriesArgs
    refundRequests?: boolean | BookingCountOutputTypeCountRefundRequestsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingRoomWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingHistoryWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountRefundRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundRequestWhereInput
  }


  /**
   * Count Type PromotionCountOutputType
   */

  export type PromotionCountOutputType = {
    bookings: number
  }

  export type PromotionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | PromotionCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * PromotionCountOutputType without action
   */
  export type PromotionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCountOutputType
     */
    select?: PromotionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromotionCountOutputType without action
   */
  export type PromotionCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingPromotionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    totalNights: number | null
    roomPrice: Decimal | null
    taxAmount: Decimal | null
    discountAmount: Decimal | null
    finalAmount: Decimal | null
  }

  export type BookingSumAggregateOutputType = {
    totalNights: number | null
    roomPrice: Decimal | null
    taxAmount: Decimal | null
    discountAmount: Decimal | null
    finalAmount: Decimal | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    bookingCode: string | null
    userId: string | null
    hotelId: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
    totalNights: number | null
    roomPrice: Decimal | null
    taxAmount: Decimal | null
    discountAmount: Decimal | null
    finalAmount: Decimal | null
    status: $Enums.BookingStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    bookingCode: string | null
    userId: string | null
    hotelId: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
    totalNights: number | null
    roomPrice: Decimal | null
    taxAmount: Decimal | null
    discountAmount: Decimal | null
    finalAmount: Decimal | null
    status: $Enums.BookingStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    bookingCode: number
    userId: number
    hotelId: number
    checkInDate: number
    checkOutDate: number
    totalNights: number
    roomPrice: number
    taxAmount: number
    discountAmount: number
    finalAmount: number
    status: number
    paymentStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    totalNights?: true
    roomPrice?: true
    taxAmount?: true
    discountAmount?: true
    finalAmount?: true
  }

  export type BookingSumAggregateInputType = {
    totalNights?: true
    roomPrice?: true
    taxAmount?: true
    discountAmount?: true
    finalAmount?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    bookingCode?: true
    userId?: true
    hotelId?: true
    checkInDate?: true
    checkOutDate?: true
    totalNights?: true
    roomPrice?: true
    taxAmount?: true
    discountAmount?: true
    finalAmount?: true
    status?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    bookingCode?: true
    userId?: true
    hotelId?: true
    checkInDate?: true
    checkOutDate?: true
    totalNights?: true
    roomPrice?: true
    taxAmount?: true
    discountAmount?: true
    finalAmount?: true
    status?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    bookingCode?: true
    userId?: true
    hotelId?: true
    checkInDate?: true
    checkOutDate?: true
    totalNights?: true
    roomPrice?: true
    taxAmount?: true
    discountAmount?: true
    finalAmount?: true
    status?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date
    checkOutDate: Date
    totalNights: number
    roomPrice: Decimal
    taxAmount: Decimal
    discountAmount: Decimal
    finalAmount: Decimal
    status: $Enums.BookingStatus
    paymentStatus: $Enums.PaymentStatus
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingCode?: boolean
    userId?: boolean
    hotelId?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    totalNights?: boolean
    roomPrice?: boolean
    taxAmount?: boolean
    discountAmount?: boolean
    finalAmount?: boolean
    status?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rooms?: boolean | Booking$roomsArgs<ExtArgs>
    guestInfo?: boolean | Booking$guestInfoArgs<ExtArgs>
    histories?: boolean | Booking$historiesArgs<ExtArgs>
    paymentTransaction?: boolean | Booking$paymentTransactionArgs<ExtArgs>
    invoice?: boolean | Booking$invoiceArgs<ExtArgs>
    refundRequests?: boolean | Booking$refundRequestsArgs<ExtArgs>
    appliedPromotion?: boolean | Booking$appliedPromotionArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingCode?: boolean
    userId?: boolean
    hotelId?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    totalNights?: boolean
    roomPrice?: boolean
    taxAmount?: boolean
    discountAmount?: boolean
    finalAmount?: boolean
    status?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingCode?: boolean
    userId?: boolean
    hotelId?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    totalNights?: boolean
    roomPrice?: boolean
    taxAmount?: boolean
    discountAmount?: boolean
    finalAmount?: boolean
    status?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    bookingCode?: boolean
    userId?: boolean
    hotelId?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    totalNights?: boolean
    roomPrice?: boolean
    taxAmount?: boolean
    discountAmount?: boolean
    finalAmount?: boolean
    status?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingCode" | "userId" | "hotelId" | "checkInDate" | "checkOutDate" | "totalNights" | "roomPrice" | "taxAmount" | "discountAmount" | "finalAmount" | "status" | "paymentStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | Booking$roomsArgs<ExtArgs>
    guestInfo?: boolean | Booking$guestInfoArgs<ExtArgs>
    histories?: boolean | Booking$historiesArgs<ExtArgs>
    paymentTransaction?: boolean | Booking$paymentTransactionArgs<ExtArgs>
    invoice?: boolean | Booking$invoiceArgs<ExtArgs>
    refundRequests?: boolean | Booking$refundRequestsArgs<ExtArgs>
    appliedPromotion?: boolean | Booking$appliedPromotionArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      rooms: Prisma.$BookingRoomPayload<ExtArgs>[]
      guestInfo: Prisma.$GuestInfoPayload<ExtArgs> | null
      histories: Prisma.$BookingHistoryPayload<ExtArgs>[]
      paymentTransaction: Prisma.$PaymentTransactionPayload<ExtArgs> | null
      invoice: Prisma.$InvoicePayload<ExtArgs> | null
      refundRequests: Prisma.$RefundRequestPayload<ExtArgs>[]
      appliedPromotion: Prisma.$BookingPromotionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingCode: string
      userId: string
      hotelId: string
      checkInDate: Date
      checkOutDate: Date
      totalNights: number
      roomPrice: Prisma.Decimal
      taxAmount: Prisma.Decimal
      discountAmount: Prisma.Decimal
      finalAmount: Prisma.Decimal
      status: $Enums.BookingStatus
      paymentStatus: $Enums.PaymentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends Booking$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guestInfo<T extends Booking$guestInfoArgs<ExtArgs> = {}>(args?: Subset<T, Booking$guestInfoArgs<ExtArgs>>): Prisma__GuestInfoClient<$Result.GetResult<Prisma.$GuestInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    histories<T extends Booking$historiesArgs<ExtArgs> = {}>(args?: Subset<T, Booking$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentTransaction<T extends Booking$paymentTransactionArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentTransactionArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invoice<T extends Booking$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, Booking$invoiceArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    refundRequests<T extends Booking$refundRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$refundRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appliedPromotion<T extends Booking$appliedPromotionArgs<ExtArgs> = {}>(args?: Subset<T, Booking$appliedPromotionArgs<ExtArgs>>): Prisma__BookingPromotionClient<$Result.GetResult<Prisma.$BookingPromotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly bookingCode: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly hotelId: FieldRef<"Booking", 'String'>
    readonly checkInDate: FieldRef<"Booking", 'DateTime'>
    readonly checkOutDate: FieldRef<"Booking", 'DateTime'>
    readonly totalNights: FieldRef<"Booking", 'Int'>
    readonly roomPrice: FieldRef<"Booking", 'Decimal'>
    readonly taxAmount: FieldRef<"Booking", 'Decimal'>
    readonly discountAmount: FieldRef<"Booking", 'Decimal'>
    readonly finalAmount: FieldRef<"Booking", 'Decimal'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly paymentStatus: FieldRef<"Booking", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.rooms
   */
  export type Booking$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    where?: BookingRoomWhereInput
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    cursor?: BookingRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingRoomScalarFieldEnum | BookingRoomScalarFieldEnum[]
  }

  /**
   * Booking.guestInfo
   */
  export type Booking$guestInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestInfo
     */
    select?: GuestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestInfo
     */
    omit?: GuestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInfoInclude<ExtArgs> | null
    where?: GuestInfoWhereInput
  }

  /**
   * Booking.histories
   */
  export type Booking$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHistory
     */
    select?: BookingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHistory
     */
    omit?: BookingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHistoryInclude<ExtArgs> | null
    where?: BookingHistoryWhereInput
    orderBy?: BookingHistoryOrderByWithRelationInput | BookingHistoryOrderByWithRelationInput[]
    cursor?: BookingHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingHistoryScalarFieldEnum | BookingHistoryScalarFieldEnum[]
  }

  /**
   * Booking.paymentTransaction
   */
  export type Booking$paymentTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    where?: PaymentTransactionWhereInput
  }

  /**
   * Booking.invoice
   */
  export type Booking$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
  }

  /**
   * Booking.refundRequests
   */
  export type Booking$refundRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundRequest
     */
    select?: RefundRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundRequest
     */
    omit?: RefundRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundRequestInclude<ExtArgs> | null
    where?: RefundRequestWhereInput
    orderBy?: RefundRequestOrderByWithRelationInput | RefundRequestOrderByWithRelationInput[]
    cursor?: RefundRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefundRequestScalarFieldEnum | RefundRequestScalarFieldEnum[]
  }

  /**
   * Booking.appliedPromotion
   */
  export type Booking$appliedPromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPromotion
     */
    select?: BookingPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPromotion
     */
    omit?: BookingPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPromotionInclude<ExtArgs> | null
    where?: BookingPromotionWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model BookingRoom
   */

  export type AggregateBookingRoom = {
    _count: BookingRoomCountAggregateOutputType | null
    _avg: BookingRoomAvgAggregateOutputType | null
    _sum: BookingRoomSumAggregateOutputType | null
    _min: BookingRoomMinAggregateOutputType | null
    _max: BookingRoomMaxAggregateOutputType | null
  }

  export type BookingRoomAvgAggregateOutputType = {
    pricePerNight: Decimal | null
    quantity: number | null
  }

  export type BookingRoomSumAggregateOutputType = {
    pricePerNight: Decimal | null
    quantity: number | null
  }

  export type BookingRoomMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    roomId: string | null
    roomName: string | null
    pricePerNight: Decimal | null
    quantity: number | null
  }

  export type BookingRoomMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    roomId: string | null
    roomName: string | null
    pricePerNight: Decimal | null
    quantity: number | null
  }

  export type BookingRoomCountAggregateOutputType = {
    id: number
    bookingId: number
    roomId: number
    roomName: number
    pricePerNight: number
    quantity: number
    _all: number
  }


  export type BookingRoomAvgAggregateInputType = {
    pricePerNight?: true
    quantity?: true
  }

  export type BookingRoomSumAggregateInputType = {
    pricePerNight?: true
    quantity?: true
  }

  export type BookingRoomMinAggregateInputType = {
    id?: true
    bookingId?: true
    roomId?: true
    roomName?: true
    pricePerNight?: true
    quantity?: true
  }

  export type BookingRoomMaxAggregateInputType = {
    id?: true
    bookingId?: true
    roomId?: true
    roomName?: true
    pricePerNight?: true
    quantity?: true
  }

  export type BookingRoomCountAggregateInputType = {
    id?: true
    bookingId?: true
    roomId?: true
    roomName?: true
    pricePerNight?: true
    quantity?: true
    _all?: true
  }

  export type BookingRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingRoom to aggregate.
     */
    where?: BookingRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingRooms to fetch.
     */
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingRooms
    **/
    _count?: true | BookingRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingRoomMaxAggregateInputType
  }

  export type GetBookingRoomAggregateType<T extends BookingRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingRoom[P]>
      : GetScalarType<T[P], AggregateBookingRoom[P]>
  }




  export type BookingRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingRoomWhereInput
    orderBy?: BookingRoomOrderByWithAggregationInput | BookingRoomOrderByWithAggregationInput[]
    by: BookingRoomScalarFieldEnum[] | BookingRoomScalarFieldEnum
    having?: BookingRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingRoomCountAggregateInputType | true
    _avg?: BookingRoomAvgAggregateInputType
    _sum?: BookingRoomSumAggregateInputType
    _min?: BookingRoomMinAggregateInputType
    _max?: BookingRoomMaxAggregateInputType
  }

  export type BookingRoomGroupByOutputType = {
    id: string
    bookingId: string
    roomId: string
    roomName: string
    pricePerNight: Decimal
    quantity: number
    _count: BookingRoomCountAggregateOutputType | null
    _avg: BookingRoomAvgAggregateOutputType | null
    _sum: BookingRoomSumAggregateOutputType | null
    _min: BookingRoomMinAggregateOutputType | null
    _max: BookingRoomMaxAggregateOutputType | null
  }

  type GetBookingRoomGroupByPayload<T extends BookingRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingRoomGroupByOutputType[P]>
            : GetScalarType<T[P], BookingRoomGroupByOutputType[P]>
        }
      >
    >


  export type BookingRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    roomId?: boolean
    roomName?: boolean
    pricePerNight?: boolean
    quantity?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingRoom"]>

  export type BookingRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    roomId?: boolean
    roomName?: boolean
    pricePerNight?: boolean
    quantity?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingRoom"]>

  export type BookingRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    roomId?: boolean
    roomName?: boolean
    pricePerNight?: boolean
    quantity?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingRoom"]>

  export type BookingRoomSelectScalar = {
    id?: boolean
    bookingId?: boolean
    roomId?: boolean
    roomName?: boolean
    pricePerNight?: boolean
    quantity?: boolean
  }

  export type BookingRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "roomId" | "roomName" | "pricePerNight" | "quantity", ExtArgs["result"]["bookingRoom"]>
  export type BookingRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type BookingRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type BookingRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $BookingRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingRoom"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      roomId: string
      roomName: string
      pricePerNight: Prisma.Decimal
      quantity: number
    }, ExtArgs["result"]["bookingRoom"]>
    composites: {}
  }

  type BookingRoomGetPayload<S extends boolean | null | undefined | BookingRoomDefaultArgs> = $Result.GetResult<Prisma.$BookingRoomPayload, S>

  type BookingRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingRoomCountAggregateInputType | true
    }

  export interface BookingRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingRoom'], meta: { name: 'BookingRoom' } }
    /**
     * Find zero or one BookingRoom that matches the filter.
     * @param {BookingRoomFindUniqueArgs} args - Arguments to find a BookingRoom
     * @example
     * // Get one BookingRoom
     * const bookingRoom = await prisma.bookingRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingRoomFindUniqueArgs>(args: SelectSubset<T, BookingRoomFindUniqueArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingRoomFindUniqueOrThrowArgs} args - Arguments to find a BookingRoom
     * @example
     * // Get one BookingRoom
     * const bookingRoom = await prisma.bookingRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomFindFirstArgs} args - Arguments to find a BookingRoom
     * @example
     * // Get one BookingRoom
     * const bookingRoom = await prisma.bookingRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingRoomFindFirstArgs>(args?: SelectSubset<T, BookingRoomFindFirstArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomFindFirstOrThrowArgs} args - Arguments to find a BookingRoom
     * @example
     * // Get one BookingRoom
     * const bookingRoom = await prisma.bookingRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingRooms
     * const bookingRooms = await prisma.bookingRoom.findMany()
     * 
     * // Get first 10 BookingRooms
     * const bookingRooms = await prisma.bookingRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingRoomWithIdOnly = await prisma.bookingRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingRoomFindManyArgs>(args?: SelectSubset<T, BookingRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingRoom.
     * @param {BookingRoomCreateArgs} args - Arguments to create a BookingRoom.
     * @example
     * // Create one BookingRoom
     * const BookingRoom = await prisma.bookingRoom.create({
     *   data: {
     *     // ... data to create a BookingRoom
     *   }
     * })
     * 
     */
    create<T extends BookingRoomCreateArgs>(args: SelectSubset<T, BookingRoomCreateArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingRooms.
     * @param {BookingRoomCreateManyArgs} args - Arguments to create many BookingRooms.
     * @example
     * // Create many BookingRooms
     * const bookingRoom = await prisma.bookingRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingRoomCreateManyArgs>(args?: SelectSubset<T, BookingRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingRooms and returns the data saved in the database.
     * @param {BookingRoomCreateManyAndReturnArgs} args - Arguments to create many BookingRooms.
     * @example
     * // Create many BookingRooms
     * const bookingRoom = await prisma.bookingRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingRooms and only return the `id`
     * const bookingRoomWithIdOnly = await prisma.bookingRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingRoom.
     * @param {BookingRoomDeleteArgs} args - Arguments to delete one BookingRoom.
     * @example
     * // Delete one BookingRoom
     * const BookingRoom = await prisma.bookingRoom.delete({
     *   where: {
     *     // ... filter to delete one BookingRoom
     *   }
     * })
     * 
     */
    delete<T extends BookingRoomDeleteArgs>(args: SelectSubset<T, BookingRoomDeleteArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingRoom.
     * @param {BookingRoomUpdateArgs} args - Arguments to update one BookingRoom.
     * @example
     * // Update one BookingRoom
     * const bookingRoom = await prisma.bookingRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingRoomUpdateArgs>(args: SelectSubset<T, BookingRoomUpdateArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingRooms.
     * @param {BookingRoomDeleteManyArgs} args - Arguments to filter BookingRooms to delete.
     * @example
     * // Delete a few BookingRooms
     * const { count } = await prisma.bookingRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingRoomDeleteManyArgs>(args?: SelectSubset<T, BookingRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingRooms
     * const bookingRoom = await prisma.bookingRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingRoomUpdateManyArgs>(args: SelectSubset<T, BookingRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingRooms and returns the data updated in the database.
     * @param {BookingRoomUpdateManyAndReturnArgs} args - Arguments to update many BookingRooms.
     * @example
     * // Update many BookingRooms
     * const bookingRoom = await prisma.bookingRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingRooms and only return the `id`
     * const bookingRoomWithIdOnly = await prisma.bookingRoom.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingRoom.
     * @param {BookingRoomUpsertArgs} args - Arguments to update or create a BookingRoom.
     * @example
     * // Update or create a BookingRoom
     * const bookingRoom = await prisma.bookingRoom.upsert({
     *   create: {
     *     // ... data to create a BookingRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingRoom we want to update
     *   }
     * })
     */
    upsert<T extends BookingRoomUpsertArgs>(args: SelectSubset<T, BookingRoomUpsertArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomCountArgs} args - Arguments to filter BookingRooms to count.
     * @example
     * // Count the number of BookingRooms
     * const count = await prisma.bookingRoom.count({
     *   where: {
     *     // ... the filter for the BookingRooms we want to count
     *   }
     * })
    **/
    count<T extends BookingRoomCountArgs>(
      args?: Subset<T, BookingRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingRoomAggregateArgs>(args: Subset<T, BookingRoomAggregateArgs>): Prisma.PrismaPromise<GetBookingRoomAggregateType<T>>

    /**
     * Group by BookingRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomGroupByArgs} args - Group by arguments.
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
      T extends BookingRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingRoomGroupByArgs['orderBy'] }
        : { orderBy?: BookingRoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingRoom model
   */
  readonly fields: BookingRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookingRoom model
   */
  interface BookingRoomFieldRefs {
    readonly id: FieldRef<"BookingRoom", 'String'>
    readonly bookingId: FieldRef<"BookingRoom", 'String'>
    readonly roomId: FieldRef<"BookingRoom", 'String'>
    readonly roomName: FieldRef<"BookingRoom", 'String'>
    readonly pricePerNight: FieldRef<"BookingRoom", 'Decimal'>
    readonly quantity: FieldRef<"BookingRoom", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookingRoom findUnique
   */
  export type BookingRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter, which BookingRoom to fetch.
     */
    where: BookingRoomWhereUniqueInput
  }

  /**
   * BookingRoom findUniqueOrThrow
   */
  export type BookingRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter, which BookingRoom to fetch.
     */
    where: BookingRoomWhereUniqueInput
  }

  /**
   * BookingRoom findFirst
   */
  export type BookingRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter, which BookingRoom to fetch.
     */
    where?: BookingRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingRooms to fetch.
     */
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingRooms.
     */
    cursor?: BookingRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingRooms.
     */
    distinct?: BookingRoomScalarFieldEnum | BookingRoomScalarFieldEnum[]
  }

  /**
   * BookingRoom findFirstOrThrow
   */
  export type BookingRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter, which BookingRoom to fetch.
     */
    where?: BookingRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingRooms to fetch.
     */
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingRooms.
     */
    cursor?: BookingRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingRooms.
     */
    distinct?: BookingRoomScalarFieldEnum | BookingRoomScalarFieldEnum[]
  }

  /**
   * BookingRoom findMany
   */
  export type BookingRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter, which BookingRooms to fetch.
     */
    where?: BookingRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingRooms to fetch.
     */
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingRooms.
     */
    cursor?: BookingRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingRooms.
     */
    distinct?: BookingRoomScalarFieldEnum | BookingRoomScalarFieldEnum[]
  }

  /**
   * BookingRoom create
   */
  export type BookingRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingRoom.
     */
    data: XOR<BookingRoomCreateInput, BookingRoomUncheckedCreateInput>
  }

  /**
   * BookingRoom createMany
   */
  export type BookingRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingRooms.
     */
    data: BookingRoomCreateManyInput | BookingRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingRoom createManyAndReturn
   */
  export type BookingRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * The data used to create many BookingRooms.
     */
    data: BookingRoomCreateManyInput | BookingRoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingRoom update
   */
  export type BookingRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingRoom.
     */
    data: XOR<BookingRoomUpdateInput, BookingRoomUncheckedUpdateInput>
    /**
     * Choose, which BookingRoom to update.
     */
    where: BookingRoomWhereUniqueInput
  }

  /**
   * BookingRoom updateMany
   */
  export type BookingRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingRooms.
     */
    data: XOR<BookingRoomUpdateManyMutationInput, BookingRoomUncheckedUpdateManyInput>
    /**
     * Filter which BookingRooms to update
     */
    where?: BookingRoomWhereInput
    /**
     * Limit how many BookingRooms to update.
     */
    limit?: number
  }

  /**
   * BookingRoom updateManyAndReturn
   */
  export type BookingRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * The data used to update BookingRooms.
     */
    data: XOR<BookingRoomUpdateManyMutationInput, BookingRoomUncheckedUpdateManyInput>
    /**
     * Filter which BookingRooms to update
     */
    where?: BookingRoomWhereInput
    /**
     * Limit how many BookingRooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingRoom upsert
   */
  export type BookingRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingRoom to update in case it exists.
     */
    where: BookingRoomWhereUniqueInput
    /**
     * In case the BookingRoom found by the `where` argument doesn't exist, create a new BookingRoom with this data.
     */
    create: XOR<BookingRoomCreateInput, BookingRoomUncheckedCreateInput>
    /**
     * In case the BookingRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingRoomUpdateInput, BookingRoomUncheckedUpdateInput>
  }

  /**
   * BookingRoom delete
   */
  export type BookingRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter which BookingRoom to delete.
     */
    where: BookingRoomWhereUniqueInput
  }

  /**
   * BookingRoom deleteMany
   */
  export type BookingRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingRooms to delete
     */
    where?: BookingRoomWhereInput
    /**
     * Limit how many BookingRooms to delete.
     */
    limit?: number
  }

  /**
   * BookingRoom without action
   */
  export type BookingRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
  }


  /**
   * Model GuestInfo
   */

  export type AggregateGuestInfo = {
    _count: GuestInfoCountAggregateOutputType | null
    _min: GuestInfoMinAggregateOutputType | null
    _max: GuestInfoMaxAggregateOutputType | null
  }

  export type GuestInfoMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    fullName: string | null
    email: string | null
    phoneNumber: string | null
    specialRequests: string | null
  }

  export type GuestInfoMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    fullName: string | null
    email: string | null
    phoneNumber: string | null
    specialRequests: string | null
  }

  export type GuestInfoCountAggregateOutputType = {
    id: number
    bookingId: number
    fullName: number
    email: number
    phoneNumber: number
    specialRequests: number
    _all: number
  }


  export type GuestInfoMinAggregateInputType = {
    id?: true
    bookingId?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    specialRequests?: true
  }

  export type GuestInfoMaxAggregateInputType = {
    id?: true
    bookingId?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    specialRequests?: true
  }

  export type GuestInfoCountAggregateInputType = {
    id?: true
    bookingId?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    specialRequests?: true
    _all?: true
  }

  export type GuestInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestInfo to aggregate.
     */
    where?: GuestInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestInfos to fetch.
     */
    orderBy?: GuestInfoOrderByWithRelationInput | GuestInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuestInfos
    **/
    _count?: true | GuestInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestInfoMaxAggregateInputType
  }

  export type GetGuestInfoAggregateType<T extends GuestInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateGuestInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuestInfo[P]>
      : GetScalarType<T[P], AggregateGuestInfo[P]>
  }




  export type GuestInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestInfoWhereInput
    orderBy?: GuestInfoOrderByWithAggregationInput | GuestInfoOrderByWithAggregationInput[]
    by: GuestInfoScalarFieldEnum[] | GuestInfoScalarFieldEnum
    having?: GuestInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestInfoCountAggregateInputType | true
    _min?: GuestInfoMinAggregateInputType
    _max?: GuestInfoMaxAggregateInputType
  }

  export type GuestInfoGroupByOutputType = {
    id: string
    bookingId: string
    fullName: string
    email: string
    phoneNumber: string
    specialRequests: string | null
    _count: GuestInfoCountAggregateOutputType | null
    _min: GuestInfoMinAggregateOutputType | null
    _max: GuestInfoMaxAggregateOutputType | null
  }

  type GetGuestInfoGroupByPayload<T extends GuestInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestInfoGroupByOutputType[P]>
            : GetScalarType<T[P], GuestInfoGroupByOutputType[P]>
        }
      >
    >


  export type GuestInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    specialRequests?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestInfo"]>

  export type GuestInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    specialRequests?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestInfo"]>

  export type GuestInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    specialRequests?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestInfo"]>

  export type GuestInfoSelectScalar = {
    id?: boolean
    bookingId?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    specialRequests?: boolean
  }

  export type GuestInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "fullName" | "email" | "phoneNumber" | "specialRequests", ExtArgs["result"]["guestInfo"]>
  export type GuestInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type GuestInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type GuestInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $GuestInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuestInfo"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      fullName: string
      email: string
      phoneNumber: string
      specialRequests: string | null
    }, ExtArgs["result"]["guestInfo"]>
    composites: {}
  }

  type GuestInfoGetPayload<S extends boolean | null | undefined | GuestInfoDefaultArgs> = $Result.GetResult<Prisma.$GuestInfoPayload, S>

  type GuestInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestInfoCountAggregateInputType | true
    }

  export interface GuestInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuestInfo'], meta: { name: 'GuestInfo' } }
    /**
     * Find zero or one GuestInfo that matches the filter.
     * @param {GuestInfoFindUniqueArgs} args - Arguments to find a GuestInfo
     * @example
     * // Get one GuestInfo
     * const guestInfo = await prisma.guestInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestInfoFindUniqueArgs>(args: SelectSubset<T, GuestInfoFindUniqueArgs<ExtArgs>>): Prisma__GuestInfoClient<$Result.GetResult<Prisma.$GuestInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuestInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestInfoFindUniqueOrThrowArgs} args - Arguments to find a GuestInfo
     * @example
     * // Get one GuestInfo
     * const guestInfo = await prisma.guestInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestInfoClient<$Result.GetResult<Prisma.$GuestInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuestInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestInfoFindFirstArgs} args - Arguments to find a GuestInfo
     * @example
     * // Get one GuestInfo
     * const guestInfo = await prisma.guestInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestInfoFindFirstArgs>(args?: SelectSubset<T, GuestInfoFindFirstArgs<ExtArgs>>): Prisma__GuestInfoClient<$Result.GetResult<Prisma.$GuestInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuestInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestInfoFindFirstOrThrowArgs} args - Arguments to find a GuestInfo
     * @example
     * // Get one GuestInfo
     * const guestInfo = await prisma.guestInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestInfoClient<$Result.GetResult<Prisma.$GuestInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuestInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuestInfos
     * const guestInfos = await prisma.guestInfo.findMany()
     * 
     * // Get first 10 GuestInfos
     * const guestInfos = await prisma.guestInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestInfoWithIdOnly = await prisma.guestInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestInfoFindManyArgs>(args?: SelectSubset<T, GuestInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuestInfo.
     * @param {GuestInfoCreateArgs} args - Arguments to create a GuestInfo.
     * @example
     * // Create one GuestInfo
     * const GuestInfo = await prisma.guestInfo.create({
     *   data: {
     *     // ... data to create a GuestInfo
     *   }
     * })
     * 
     */
    create<T extends GuestInfoCreateArgs>(args: SelectSubset<T, GuestInfoCreateArgs<ExtArgs>>): Prisma__GuestInfoClient<$Result.GetResult<Prisma.$GuestInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuestInfos.
     * @param {GuestInfoCreateManyArgs} args - Arguments to create many GuestInfos.
     * @example
     * // Create many GuestInfos
     * const guestInfo = await prisma.guestInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestInfoCreateManyArgs>(args?: SelectSubset<T, GuestInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuestInfos and returns the data saved in the database.
     * @param {GuestInfoCreateManyAndReturnArgs} args - Arguments to create many GuestInfos.
     * @example
     * // Create many GuestInfos
     * const guestInfo = await prisma.guestInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuestInfos and only return the `id`
     * const guestInfoWithIdOnly = await prisma.guestInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuestInfo.
     * @param {GuestInfoDeleteArgs} args - Arguments to delete one GuestInfo.
     * @example
     * // Delete one GuestInfo
     * const GuestInfo = await prisma.guestInfo.delete({
     *   where: {
     *     // ... filter to delete one GuestInfo
     *   }
     * })
     * 
     */
    delete<T extends GuestInfoDeleteArgs>(args: SelectSubset<T, GuestInfoDeleteArgs<ExtArgs>>): Prisma__GuestInfoClient<$Result.GetResult<Prisma.$GuestInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuestInfo.
     * @param {GuestInfoUpdateArgs} args - Arguments to update one GuestInfo.
     * @example
     * // Update one GuestInfo
     * const guestInfo = await prisma.guestInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestInfoUpdateArgs>(args: SelectSubset<T, GuestInfoUpdateArgs<ExtArgs>>): Prisma__GuestInfoClient<$Result.GetResult<Prisma.$GuestInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuestInfos.
     * @param {GuestInfoDeleteManyArgs} args - Arguments to filter GuestInfos to delete.
     * @example
     * // Delete a few GuestInfos
     * const { count } = await prisma.guestInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestInfoDeleteManyArgs>(args?: SelectSubset<T, GuestInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuestInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuestInfos
     * const guestInfo = await prisma.guestInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestInfoUpdateManyArgs>(args: SelectSubset<T, GuestInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuestInfos and returns the data updated in the database.
     * @param {GuestInfoUpdateManyAndReturnArgs} args - Arguments to update many GuestInfos.
     * @example
     * // Update many GuestInfos
     * const guestInfo = await prisma.guestInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuestInfos and only return the `id`
     * const guestInfoWithIdOnly = await prisma.guestInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends GuestInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuestInfo.
     * @param {GuestInfoUpsertArgs} args - Arguments to update or create a GuestInfo.
     * @example
     * // Update or create a GuestInfo
     * const guestInfo = await prisma.guestInfo.upsert({
     *   create: {
     *     // ... data to create a GuestInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuestInfo we want to update
     *   }
     * })
     */
    upsert<T extends GuestInfoUpsertArgs>(args: SelectSubset<T, GuestInfoUpsertArgs<ExtArgs>>): Prisma__GuestInfoClient<$Result.GetResult<Prisma.$GuestInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuestInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestInfoCountArgs} args - Arguments to filter GuestInfos to count.
     * @example
     * // Count the number of GuestInfos
     * const count = await prisma.guestInfo.count({
     *   where: {
     *     // ... the filter for the GuestInfos we want to count
     *   }
     * })
    **/
    count<T extends GuestInfoCountArgs>(
      args?: Subset<T, GuestInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuestInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuestInfoAggregateArgs>(args: Subset<T, GuestInfoAggregateArgs>): Prisma.PrismaPromise<GetGuestInfoAggregateType<T>>

    /**
     * Group by GuestInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestInfoGroupByArgs} args - Group by arguments.
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
      T extends GuestInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestInfoGroupByArgs['orderBy'] }
        : { orderBy?: GuestInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuestInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuestInfo model
   */
  readonly fields: GuestInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuestInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GuestInfo model
   */
  interface GuestInfoFieldRefs {
    readonly id: FieldRef<"GuestInfo", 'String'>
    readonly bookingId: FieldRef<"GuestInfo", 'String'>
    readonly fullName: FieldRef<"GuestInfo", 'String'>
    readonly email: FieldRef<"GuestInfo", 'String'>
    readonly phoneNumber: FieldRef<"GuestInfo", 'String'>
    readonly specialRequests: FieldRef<"GuestInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GuestInfo findUnique
   */
  export type GuestInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestInfo
     */
    select?: GuestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestInfo
     */
    omit?: GuestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInfoInclude<ExtArgs> | null
    /**
     * Filter, which GuestInfo to fetch.
     */
    where: GuestInfoWhereUniqueInput
  }

  /**
   * GuestInfo findUniqueOrThrow
   */
  export type GuestInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestInfo
     */
    select?: GuestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestInfo
     */
    omit?: GuestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInfoInclude<ExtArgs> | null
    /**
     * Filter, which GuestInfo to fetch.
     */
    where: GuestInfoWhereUniqueInput
  }

  /**
   * GuestInfo findFirst
   */
  export type GuestInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestInfo
     */
    select?: GuestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestInfo
     */
    omit?: GuestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInfoInclude<ExtArgs> | null
    /**
     * Filter, which GuestInfo to fetch.
     */
    where?: GuestInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestInfos to fetch.
     */
    orderBy?: GuestInfoOrderByWithRelationInput | GuestInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestInfos.
     */
    cursor?: GuestInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestInfos.
     */
    distinct?: GuestInfoScalarFieldEnum | GuestInfoScalarFieldEnum[]
  }

  /**
   * GuestInfo findFirstOrThrow
   */
  export type GuestInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestInfo
     */
    select?: GuestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestInfo
     */
    omit?: GuestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInfoInclude<ExtArgs> | null
    /**
     * Filter, which GuestInfo to fetch.
     */
    where?: GuestInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestInfos to fetch.
     */
    orderBy?: GuestInfoOrderByWithRelationInput | GuestInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestInfos.
     */
    cursor?: GuestInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestInfos.
     */
    distinct?: GuestInfoScalarFieldEnum | GuestInfoScalarFieldEnum[]
  }

  /**
   * GuestInfo findMany
   */
  export type GuestInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestInfo
     */
    select?: GuestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestInfo
     */
    omit?: GuestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInfoInclude<ExtArgs> | null
    /**
     * Filter, which GuestInfos to fetch.
     */
    where?: GuestInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestInfos to fetch.
     */
    orderBy?: GuestInfoOrderByWithRelationInput | GuestInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuestInfos.
     */
    cursor?: GuestInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestInfos.
     */
    distinct?: GuestInfoScalarFieldEnum | GuestInfoScalarFieldEnum[]
  }

  /**
   * GuestInfo create
   */
  export type GuestInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestInfo
     */
    select?: GuestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestInfo
     */
    omit?: GuestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a GuestInfo.
     */
    data: XOR<GuestInfoCreateInput, GuestInfoUncheckedCreateInput>
  }

  /**
   * GuestInfo createMany
   */
  export type GuestInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuestInfos.
     */
    data: GuestInfoCreateManyInput | GuestInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuestInfo createManyAndReturn
   */
  export type GuestInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestInfo
     */
    select?: GuestInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuestInfo
     */
    omit?: GuestInfoOmit<ExtArgs> | null
    /**
     * The data used to create many GuestInfos.
     */
    data: GuestInfoCreateManyInput | GuestInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuestInfo update
   */
  export type GuestInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestInfo
     */
    select?: GuestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestInfo
     */
    omit?: GuestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a GuestInfo.
     */
    data: XOR<GuestInfoUpdateInput, GuestInfoUncheckedUpdateInput>
    /**
     * Choose, which GuestInfo to update.
     */
    where: GuestInfoWhereUniqueInput
  }

  /**
   * GuestInfo updateMany
   */
  export type GuestInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuestInfos.
     */
    data: XOR<GuestInfoUpdateManyMutationInput, GuestInfoUncheckedUpdateManyInput>
    /**
     * Filter which GuestInfos to update
     */
    where?: GuestInfoWhereInput
    /**
     * Limit how many GuestInfos to update.
     */
    limit?: number
  }

  /**
   * GuestInfo updateManyAndReturn
   */
  export type GuestInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestInfo
     */
    select?: GuestInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuestInfo
     */
    omit?: GuestInfoOmit<ExtArgs> | null
    /**
     * The data used to update GuestInfos.
     */
    data: XOR<GuestInfoUpdateManyMutationInput, GuestInfoUncheckedUpdateManyInput>
    /**
     * Filter which GuestInfos to update
     */
    where?: GuestInfoWhereInput
    /**
     * Limit how many GuestInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuestInfo upsert
   */
  export type GuestInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestInfo
     */
    select?: GuestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestInfo
     */
    omit?: GuestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the GuestInfo to update in case it exists.
     */
    where: GuestInfoWhereUniqueInput
    /**
     * In case the GuestInfo found by the `where` argument doesn't exist, create a new GuestInfo with this data.
     */
    create: XOR<GuestInfoCreateInput, GuestInfoUncheckedCreateInput>
    /**
     * In case the GuestInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestInfoUpdateInput, GuestInfoUncheckedUpdateInput>
  }

  /**
   * GuestInfo delete
   */
  export type GuestInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestInfo
     */
    select?: GuestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestInfo
     */
    omit?: GuestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInfoInclude<ExtArgs> | null
    /**
     * Filter which GuestInfo to delete.
     */
    where: GuestInfoWhereUniqueInput
  }

  /**
   * GuestInfo deleteMany
   */
  export type GuestInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestInfos to delete
     */
    where?: GuestInfoWhereInput
    /**
     * Limit how many GuestInfos to delete.
     */
    limit?: number
  }

  /**
   * GuestInfo without action
   */
  export type GuestInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestInfo
     */
    select?: GuestInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestInfo
     */
    omit?: GuestInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInfoInclude<ExtArgs> | null
  }


  /**
   * Model BookingHistory
   */

  export type AggregateBookingHistory = {
    _count: BookingHistoryCountAggregateOutputType | null
    _min: BookingHistoryMinAggregateOutputType | null
    _max: BookingHistoryMaxAggregateOutputType | null
  }

  export type BookingHistoryMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    action: string | null
    note: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type BookingHistoryMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    action: string | null
    note: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type BookingHistoryCountAggregateOutputType = {
    id: number
    bookingId: number
    action: number
    note: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type BookingHistoryMinAggregateInputType = {
    id?: true
    bookingId?: true
    action?: true
    note?: true
    createdBy?: true
    createdAt?: true
  }

  export type BookingHistoryMaxAggregateInputType = {
    id?: true
    bookingId?: true
    action?: true
    note?: true
    createdBy?: true
    createdAt?: true
  }

  export type BookingHistoryCountAggregateInputType = {
    id?: true
    bookingId?: true
    action?: true
    note?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type BookingHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingHistory to aggregate.
     */
    where?: BookingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingHistories to fetch.
     */
    orderBy?: BookingHistoryOrderByWithRelationInput | BookingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingHistories
    **/
    _count?: true | BookingHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingHistoryMaxAggregateInputType
  }

  export type GetBookingHistoryAggregateType<T extends BookingHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingHistory[P]>
      : GetScalarType<T[P], AggregateBookingHistory[P]>
  }




  export type BookingHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingHistoryWhereInput
    orderBy?: BookingHistoryOrderByWithAggregationInput | BookingHistoryOrderByWithAggregationInput[]
    by: BookingHistoryScalarFieldEnum[] | BookingHistoryScalarFieldEnum
    having?: BookingHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingHistoryCountAggregateInputType | true
    _min?: BookingHistoryMinAggregateInputType
    _max?: BookingHistoryMaxAggregateInputType
  }

  export type BookingHistoryGroupByOutputType = {
    id: string
    bookingId: string
    action: string
    note: string | null
    createdBy: string | null
    createdAt: Date
    _count: BookingHistoryCountAggregateOutputType | null
    _min: BookingHistoryMinAggregateOutputType | null
    _max: BookingHistoryMaxAggregateOutputType | null
  }

  type GetBookingHistoryGroupByPayload<T extends BookingHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], BookingHistoryGroupByOutputType[P]>
        }
      >
    >


  export type BookingHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    action?: boolean
    note?: boolean
    createdBy?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingHistory"]>

  export type BookingHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    action?: boolean
    note?: boolean
    createdBy?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingHistory"]>

  export type BookingHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    action?: boolean
    note?: boolean
    createdBy?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingHistory"]>

  export type BookingHistorySelectScalar = {
    id?: boolean
    bookingId?: boolean
    action?: boolean
    note?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type BookingHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "action" | "note" | "createdBy" | "createdAt", ExtArgs["result"]["bookingHistory"]>
  export type BookingHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type BookingHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type BookingHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $BookingHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingHistory"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      action: string
      note: string | null
      createdBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["bookingHistory"]>
    composites: {}
  }

  type BookingHistoryGetPayload<S extends boolean | null | undefined | BookingHistoryDefaultArgs> = $Result.GetResult<Prisma.$BookingHistoryPayload, S>

  type BookingHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingHistoryCountAggregateInputType | true
    }

  export interface BookingHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingHistory'], meta: { name: 'BookingHistory' } }
    /**
     * Find zero or one BookingHistory that matches the filter.
     * @param {BookingHistoryFindUniqueArgs} args - Arguments to find a BookingHistory
     * @example
     * // Get one BookingHistory
     * const bookingHistory = await prisma.bookingHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingHistoryFindUniqueArgs>(args: SelectSubset<T, BookingHistoryFindUniqueArgs<ExtArgs>>): Prisma__BookingHistoryClient<$Result.GetResult<Prisma.$BookingHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingHistoryFindUniqueOrThrowArgs} args - Arguments to find a BookingHistory
     * @example
     * // Get one BookingHistory
     * const bookingHistory = await prisma.bookingHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingHistoryClient<$Result.GetResult<Prisma.$BookingHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingHistoryFindFirstArgs} args - Arguments to find a BookingHistory
     * @example
     * // Get one BookingHistory
     * const bookingHistory = await prisma.bookingHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingHistoryFindFirstArgs>(args?: SelectSubset<T, BookingHistoryFindFirstArgs<ExtArgs>>): Prisma__BookingHistoryClient<$Result.GetResult<Prisma.$BookingHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingHistoryFindFirstOrThrowArgs} args - Arguments to find a BookingHistory
     * @example
     * // Get one BookingHistory
     * const bookingHistory = await prisma.bookingHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingHistoryClient<$Result.GetResult<Prisma.$BookingHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingHistories
     * const bookingHistories = await prisma.bookingHistory.findMany()
     * 
     * // Get first 10 BookingHistories
     * const bookingHistories = await prisma.bookingHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingHistoryWithIdOnly = await prisma.bookingHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingHistoryFindManyArgs>(args?: SelectSubset<T, BookingHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingHistory.
     * @param {BookingHistoryCreateArgs} args - Arguments to create a BookingHistory.
     * @example
     * // Create one BookingHistory
     * const BookingHistory = await prisma.bookingHistory.create({
     *   data: {
     *     // ... data to create a BookingHistory
     *   }
     * })
     * 
     */
    create<T extends BookingHistoryCreateArgs>(args: SelectSubset<T, BookingHistoryCreateArgs<ExtArgs>>): Prisma__BookingHistoryClient<$Result.GetResult<Prisma.$BookingHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingHistories.
     * @param {BookingHistoryCreateManyArgs} args - Arguments to create many BookingHistories.
     * @example
     * // Create many BookingHistories
     * const bookingHistory = await prisma.bookingHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingHistoryCreateManyArgs>(args?: SelectSubset<T, BookingHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingHistories and returns the data saved in the database.
     * @param {BookingHistoryCreateManyAndReturnArgs} args - Arguments to create many BookingHistories.
     * @example
     * // Create many BookingHistories
     * const bookingHistory = await prisma.bookingHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingHistories and only return the `id`
     * const bookingHistoryWithIdOnly = await prisma.bookingHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingHistory.
     * @param {BookingHistoryDeleteArgs} args - Arguments to delete one BookingHistory.
     * @example
     * // Delete one BookingHistory
     * const BookingHistory = await prisma.bookingHistory.delete({
     *   where: {
     *     // ... filter to delete one BookingHistory
     *   }
     * })
     * 
     */
    delete<T extends BookingHistoryDeleteArgs>(args: SelectSubset<T, BookingHistoryDeleteArgs<ExtArgs>>): Prisma__BookingHistoryClient<$Result.GetResult<Prisma.$BookingHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingHistory.
     * @param {BookingHistoryUpdateArgs} args - Arguments to update one BookingHistory.
     * @example
     * // Update one BookingHistory
     * const bookingHistory = await prisma.bookingHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingHistoryUpdateArgs>(args: SelectSubset<T, BookingHistoryUpdateArgs<ExtArgs>>): Prisma__BookingHistoryClient<$Result.GetResult<Prisma.$BookingHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingHistories.
     * @param {BookingHistoryDeleteManyArgs} args - Arguments to filter BookingHistories to delete.
     * @example
     * // Delete a few BookingHistories
     * const { count } = await prisma.bookingHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingHistoryDeleteManyArgs>(args?: SelectSubset<T, BookingHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingHistories
     * const bookingHistory = await prisma.bookingHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingHistoryUpdateManyArgs>(args: SelectSubset<T, BookingHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingHistories and returns the data updated in the database.
     * @param {BookingHistoryUpdateManyAndReturnArgs} args - Arguments to update many BookingHistories.
     * @example
     * // Update many BookingHistories
     * const bookingHistory = await prisma.bookingHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingHistories and only return the `id`
     * const bookingHistoryWithIdOnly = await prisma.bookingHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingHistory.
     * @param {BookingHistoryUpsertArgs} args - Arguments to update or create a BookingHistory.
     * @example
     * // Update or create a BookingHistory
     * const bookingHistory = await prisma.bookingHistory.upsert({
     *   create: {
     *     // ... data to create a BookingHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingHistory we want to update
     *   }
     * })
     */
    upsert<T extends BookingHistoryUpsertArgs>(args: SelectSubset<T, BookingHistoryUpsertArgs<ExtArgs>>): Prisma__BookingHistoryClient<$Result.GetResult<Prisma.$BookingHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingHistoryCountArgs} args - Arguments to filter BookingHistories to count.
     * @example
     * // Count the number of BookingHistories
     * const count = await prisma.bookingHistory.count({
     *   where: {
     *     // ... the filter for the BookingHistories we want to count
     *   }
     * })
    **/
    count<T extends BookingHistoryCountArgs>(
      args?: Subset<T, BookingHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingHistoryAggregateArgs>(args: Subset<T, BookingHistoryAggregateArgs>): Prisma.PrismaPromise<GetBookingHistoryAggregateType<T>>

    /**
     * Group by BookingHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingHistoryGroupByArgs} args - Group by arguments.
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
      T extends BookingHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingHistoryGroupByArgs['orderBy'] }
        : { orderBy?: BookingHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingHistory model
   */
  readonly fields: BookingHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookingHistory model
   */
  interface BookingHistoryFieldRefs {
    readonly id: FieldRef<"BookingHistory", 'String'>
    readonly bookingId: FieldRef<"BookingHistory", 'String'>
    readonly action: FieldRef<"BookingHistory", 'String'>
    readonly note: FieldRef<"BookingHistory", 'String'>
    readonly createdBy: FieldRef<"BookingHistory", 'String'>
    readonly createdAt: FieldRef<"BookingHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookingHistory findUnique
   */
  export type BookingHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHistory
     */
    select?: BookingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHistory
     */
    omit?: BookingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which BookingHistory to fetch.
     */
    where: BookingHistoryWhereUniqueInput
  }

  /**
   * BookingHistory findUniqueOrThrow
   */
  export type BookingHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHistory
     */
    select?: BookingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHistory
     */
    omit?: BookingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which BookingHistory to fetch.
     */
    where: BookingHistoryWhereUniqueInput
  }

  /**
   * BookingHistory findFirst
   */
  export type BookingHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHistory
     */
    select?: BookingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHistory
     */
    omit?: BookingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which BookingHistory to fetch.
     */
    where?: BookingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingHistories to fetch.
     */
    orderBy?: BookingHistoryOrderByWithRelationInput | BookingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingHistories.
     */
    cursor?: BookingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingHistories.
     */
    distinct?: BookingHistoryScalarFieldEnum | BookingHistoryScalarFieldEnum[]
  }

  /**
   * BookingHistory findFirstOrThrow
   */
  export type BookingHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHistory
     */
    select?: BookingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHistory
     */
    omit?: BookingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which BookingHistory to fetch.
     */
    where?: BookingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingHistories to fetch.
     */
    orderBy?: BookingHistoryOrderByWithRelationInput | BookingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingHistories.
     */
    cursor?: BookingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingHistories.
     */
    distinct?: BookingHistoryScalarFieldEnum | BookingHistoryScalarFieldEnum[]
  }

  /**
   * BookingHistory findMany
   */
  export type BookingHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHistory
     */
    select?: BookingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHistory
     */
    omit?: BookingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which BookingHistories to fetch.
     */
    where?: BookingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingHistories to fetch.
     */
    orderBy?: BookingHistoryOrderByWithRelationInput | BookingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingHistories.
     */
    cursor?: BookingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingHistories.
     */
    distinct?: BookingHistoryScalarFieldEnum | BookingHistoryScalarFieldEnum[]
  }

  /**
   * BookingHistory create
   */
  export type BookingHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHistory
     */
    select?: BookingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHistory
     */
    omit?: BookingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingHistory.
     */
    data: XOR<BookingHistoryCreateInput, BookingHistoryUncheckedCreateInput>
  }

  /**
   * BookingHistory createMany
   */
  export type BookingHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingHistories.
     */
    data: BookingHistoryCreateManyInput | BookingHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingHistory createManyAndReturn
   */
  export type BookingHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHistory
     */
    select?: BookingHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHistory
     */
    omit?: BookingHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many BookingHistories.
     */
    data: BookingHistoryCreateManyInput | BookingHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingHistory update
   */
  export type BookingHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHistory
     */
    select?: BookingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHistory
     */
    omit?: BookingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingHistory.
     */
    data: XOR<BookingHistoryUpdateInput, BookingHistoryUncheckedUpdateInput>
    /**
     * Choose, which BookingHistory to update.
     */
    where: BookingHistoryWhereUniqueInput
  }

  /**
   * BookingHistory updateMany
   */
  export type BookingHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingHistories.
     */
    data: XOR<BookingHistoryUpdateManyMutationInput, BookingHistoryUncheckedUpdateManyInput>
    /**
     * Filter which BookingHistories to update
     */
    where?: BookingHistoryWhereInput
    /**
     * Limit how many BookingHistories to update.
     */
    limit?: number
  }

  /**
   * BookingHistory updateManyAndReturn
   */
  export type BookingHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHistory
     */
    select?: BookingHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHistory
     */
    omit?: BookingHistoryOmit<ExtArgs> | null
    /**
     * The data used to update BookingHistories.
     */
    data: XOR<BookingHistoryUpdateManyMutationInput, BookingHistoryUncheckedUpdateManyInput>
    /**
     * Filter which BookingHistories to update
     */
    where?: BookingHistoryWhereInput
    /**
     * Limit how many BookingHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingHistory upsert
   */
  export type BookingHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHistory
     */
    select?: BookingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHistory
     */
    omit?: BookingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingHistory to update in case it exists.
     */
    where: BookingHistoryWhereUniqueInput
    /**
     * In case the BookingHistory found by the `where` argument doesn't exist, create a new BookingHistory with this data.
     */
    create: XOR<BookingHistoryCreateInput, BookingHistoryUncheckedCreateInput>
    /**
     * In case the BookingHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingHistoryUpdateInput, BookingHistoryUncheckedUpdateInput>
  }

  /**
   * BookingHistory delete
   */
  export type BookingHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHistory
     */
    select?: BookingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHistory
     */
    omit?: BookingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHistoryInclude<ExtArgs> | null
    /**
     * Filter which BookingHistory to delete.
     */
    where: BookingHistoryWhereUniqueInput
  }

  /**
   * BookingHistory deleteMany
   */
  export type BookingHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingHistories to delete
     */
    where?: BookingHistoryWhereInput
    /**
     * Limit how many BookingHistories to delete.
     */
    limit?: number
  }

  /**
   * BookingHistory without action
   */
  export type BookingHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingHistory
     */
    select?: BookingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingHistory
     */
    omit?: BookingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingHistoryInclude<ExtArgs> | null
  }


  /**
   * Model PaymentTransaction
   */

  export type AggregatePaymentTransaction = {
    _count: PaymentTransactionCountAggregateOutputType | null
    _avg: PaymentTransactionAvgAggregateOutputType | null
    _sum: PaymentTransactionSumAggregateOutputType | null
    _min: PaymentTransactionMinAggregateOutputType | null
    _max: PaymentTransactionMaxAggregateOutputType | null
  }

  export type PaymentTransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentTransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentTransactionMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    transactionId: string | null
    provider: $Enums.PaymentProvider | null
    amount: Decimal | null
    currency: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PaymentTransactionMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    transactionId: string | null
    provider: $Enums.PaymentProvider | null
    amount: Decimal | null
    currency: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PaymentTransactionCountAggregateOutputType = {
    id: number
    bookingId: number
    transactionId: number
    provider: number
    amount: number
    currency: number
    status: number
    rawData: number
    createdAt: number
    _all: number
  }


  export type PaymentTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentTransactionSumAggregateInputType = {
    amount?: true
  }

  export type PaymentTransactionMinAggregateInputType = {
    id?: true
    bookingId?: true
    transactionId?: true
    provider?: true
    amount?: true
    currency?: true
    status?: true
    createdAt?: true
  }

  export type PaymentTransactionMaxAggregateInputType = {
    id?: true
    bookingId?: true
    transactionId?: true
    provider?: true
    amount?: true
    currency?: true
    status?: true
    createdAt?: true
  }

  export type PaymentTransactionCountAggregateInputType = {
    id?: true
    bookingId?: true
    transactionId?: true
    provider?: true
    amount?: true
    currency?: true
    status?: true
    rawData?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentTransaction to aggregate.
     */
    where?: PaymentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransactions to fetch.
     */
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentTransactions
    **/
    _count?: true | PaymentTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentTransactionMaxAggregateInputType
  }

  export type GetPaymentTransactionAggregateType<T extends PaymentTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentTransaction[P]>
      : GetScalarType<T[P], AggregatePaymentTransaction[P]>
  }




  export type PaymentTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTransactionWhereInput
    orderBy?: PaymentTransactionOrderByWithAggregationInput | PaymentTransactionOrderByWithAggregationInput[]
    by: PaymentTransactionScalarFieldEnum[] | PaymentTransactionScalarFieldEnum
    having?: PaymentTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentTransactionCountAggregateInputType | true
    _avg?: PaymentTransactionAvgAggregateInputType
    _sum?: PaymentTransactionSumAggregateInputType
    _min?: PaymentTransactionMinAggregateInputType
    _max?: PaymentTransactionMaxAggregateInputType
  }

  export type PaymentTransactionGroupByOutputType = {
    id: string
    bookingId: string
    transactionId: string | null
    provider: $Enums.PaymentProvider
    amount: Decimal
    currency: string
    status: string
    rawData: JsonValue | null
    createdAt: Date
    _count: PaymentTransactionCountAggregateOutputType | null
    _avg: PaymentTransactionAvgAggregateOutputType | null
    _sum: PaymentTransactionSumAggregateOutputType | null
    _min: PaymentTransactionMinAggregateOutputType | null
    _max: PaymentTransactionMaxAggregateOutputType | null
  }

  type GetPaymentTransactionGroupByPayload<T extends PaymentTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentTransactionGroupByOutputType[P]>
        }
      >
    >


  export type PaymentTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    transactionId?: boolean
    provider?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    rawData?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTransaction"]>

  export type PaymentTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    transactionId?: boolean
    provider?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    rawData?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTransaction"]>

  export type PaymentTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    transactionId?: boolean
    provider?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    rawData?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTransaction"]>

  export type PaymentTransactionSelectScalar = {
    id?: boolean
    bookingId?: boolean
    transactionId?: boolean
    provider?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    rawData?: boolean
    createdAt?: boolean
  }

  export type PaymentTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "transactionId" | "provider" | "amount" | "currency" | "status" | "rawData" | "createdAt", ExtArgs["result"]["paymentTransaction"]>
  export type PaymentTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $PaymentTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentTransaction"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      transactionId: string | null
      provider: $Enums.PaymentProvider
      amount: Prisma.Decimal
      currency: string
      status: string
      rawData: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["paymentTransaction"]>
    composites: {}
  }

  type PaymentTransactionGetPayload<S extends boolean | null | undefined | PaymentTransactionDefaultArgs> = $Result.GetResult<Prisma.$PaymentTransactionPayload, S>

  type PaymentTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentTransactionCountAggregateInputType | true
    }

  export interface PaymentTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentTransaction'], meta: { name: 'PaymentTransaction' } }
    /**
     * Find zero or one PaymentTransaction that matches the filter.
     * @param {PaymentTransactionFindUniqueArgs} args - Arguments to find a PaymentTransaction
     * @example
     * // Get one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentTransactionFindUniqueArgs>(args: SelectSubset<T, PaymentTransactionFindUniqueArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentTransactionFindUniqueOrThrowArgs} args - Arguments to find a PaymentTransaction
     * @example
     * // Get one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionFindFirstArgs} args - Arguments to find a PaymentTransaction
     * @example
     * // Get one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentTransactionFindFirstArgs>(args?: SelectSubset<T, PaymentTransactionFindFirstArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionFindFirstOrThrowArgs} args - Arguments to find a PaymentTransaction
     * @example
     * // Get one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentTransactions
     * const paymentTransactions = await prisma.paymentTransaction.findMany()
     * 
     * // Get first 10 PaymentTransactions
     * const paymentTransactions = await prisma.paymentTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentTransactionWithIdOnly = await prisma.paymentTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentTransactionFindManyArgs>(args?: SelectSubset<T, PaymentTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentTransaction.
     * @param {PaymentTransactionCreateArgs} args - Arguments to create a PaymentTransaction.
     * @example
     * // Create one PaymentTransaction
     * const PaymentTransaction = await prisma.paymentTransaction.create({
     *   data: {
     *     // ... data to create a PaymentTransaction
     *   }
     * })
     * 
     */
    create<T extends PaymentTransactionCreateArgs>(args: SelectSubset<T, PaymentTransactionCreateArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentTransactions.
     * @param {PaymentTransactionCreateManyArgs} args - Arguments to create many PaymentTransactions.
     * @example
     * // Create many PaymentTransactions
     * const paymentTransaction = await prisma.paymentTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentTransactionCreateManyArgs>(args?: SelectSubset<T, PaymentTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentTransactions and returns the data saved in the database.
     * @param {PaymentTransactionCreateManyAndReturnArgs} args - Arguments to create many PaymentTransactions.
     * @example
     * // Create many PaymentTransactions
     * const paymentTransaction = await prisma.paymentTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentTransactions and only return the `id`
     * const paymentTransactionWithIdOnly = await prisma.paymentTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentTransaction.
     * @param {PaymentTransactionDeleteArgs} args - Arguments to delete one PaymentTransaction.
     * @example
     * // Delete one PaymentTransaction
     * const PaymentTransaction = await prisma.paymentTransaction.delete({
     *   where: {
     *     // ... filter to delete one PaymentTransaction
     *   }
     * })
     * 
     */
    delete<T extends PaymentTransactionDeleteArgs>(args: SelectSubset<T, PaymentTransactionDeleteArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentTransaction.
     * @param {PaymentTransactionUpdateArgs} args - Arguments to update one PaymentTransaction.
     * @example
     * // Update one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentTransactionUpdateArgs>(args: SelectSubset<T, PaymentTransactionUpdateArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentTransactions.
     * @param {PaymentTransactionDeleteManyArgs} args - Arguments to filter PaymentTransactions to delete.
     * @example
     * // Delete a few PaymentTransactions
     * const { count } = await prisma.paymentTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentTransactionDeleteManyArgs>(args?: SelectSubset<T, PaymentTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentTransactions
     * const paymentTransaction = await prisma.paymentTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentTransactionUpdateManyArgs>(args: SelectSubset<T, PaymentTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTransactions and returns the data updated in the database.
     * @param {PaymentTransactionUpdateManyAndReturnArgs} args - Arguments to update many PaymentTransactions.
     * @example
     * // Update many PaymentTransactions
     * const paymentTransaction = await prisma.paymentTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentTransactions and only return the `id`
     * const paymentTransactionWithIdOnly = await prisma.paymentTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentTransaction.
     * @param {PaymentTransactionUpsertArgs} args - Arguments to update or create a PaymentTransaction.
     * @example
     * // Update or create a PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.upsert({
     *   create: {
     *     // ... data to create a PaymentTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentTransaction we want to update
     *   }
     * })
     */
    upsert<T extends PaymentTransactionUpsertArgs>(args: SelectSubset<T, PaymentTransactionUpsertArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionCountArgs} args - Arguments to filter PaymentTransactions to count.
     * @example
     * // Count the number of PaymentTransactions
     * const count = await prisma.paymentTransaction.count({
     *   where: {
     *     // ... the filter for the PaymentTransactions we want to count
     *   }
     * })
    **/
    count<T extends PaymentTransactionCountArgs>(
      args?: Subset<T, PaymentTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentTransactionAggregateArgs>(args: Subset<T, PaymentTransactionAggregateArgs>): Prisma.PrismaPromise<GetPaymentTransactionAggregateType<T>>

    /**
     * Group by PaymentTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionGroupByArgs} args - Group by arguments.
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
      T extends PaymentTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentTransactionGroupByArgs['orderBy'] }
        : { orderBy?: PaymentTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentTransaction model
   */
  readonly fields: PaymentTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaymentTransaction model
   */
  interface PaymentTransactionFieldRefs {
    readonly id: FieldRef<"PaymentTransaction", 'String'>
    readonly bookingId: FieldRef<"PaymentTransaction", 'String'>
    readonly transactionId: FieldRef<"PaymentTransaction", 'String'>
    readonly provider: FieldRef<"PaymentTransaction", 'PaymentProvider'>
    readonly amount: FieldRef<"PaymentTransaction", 'Decimal'>
    readonly currency: FieldRef<"PaymentTransaction", 'String'>
    readonly status: FieldRef<"PaymentTransaction", 'String'>
    readonly rawData: FieldRef<"PaymentTransaction", 'Json'>
    readonly createdAt: FieldRef<"PaymentTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentTransaction findUnique
   */
  export type PaymentTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransaction to fetch.
     */
    where: PaymentTransactionWhereUniqueInput
  }

  /**
   * PaymentTransaction findUniqueOrThrow
   */
  export type PaymentTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransaction to fetch.
     */
    where: PaymentTransactionWhereUniqueInput
  }

  /**
   * PaymentTransaction findFirst
   */
  export type PaymentTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransaction to fetch.
     */
    where?: PaymentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransactions to fetch.
     */
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTransactions.
     */
    cursor?: PaymentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTransactions.
     */
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * PaymentTransaction findFirstOrThrow
   */
  export type PaymentTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransaction to fetch.
     */
    where?: PaymentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransactions to fetch.
     */
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTransactions.
     */
    cursor?: PaymentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTransactions.
     */
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * PaymentTransaction findMany
   */
  export type PaymentTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransactions to fetch.
     */
    where?: PaymentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransactions to fetch.
     */
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentTransactions.
     */
    cursor?: PaymentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTransactions.
     */
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * PaymentTransaction create
   */
  export type PaymentTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentTransaction.
     */
    data: XOR<PaymentTransactionCreateInput, PaymentTransactionUncheckedCreateInput>
  }

  /**
   * PaymentTransaction createMany
   */
  export type PaymentTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentTransactions.
     */
    data: PaymentTransactionCreateManyInput | PaymentTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentTransaction createManyAndReturn
   */
  export type PaymentTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentTransactions.
     */
    data: PaymentTransactionCreateManyInput | PaymentTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentTransaction update
   */
  export type PaymentTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentTransaction.
     */
    data: XOR<PaymentTransactionUpdateInput, PaymentTransactionUncheckedUpdateInput>
    /**
     * Choose, which PaymentTransaction to update.
     */
    where: PaymentTransactionWhereUniqueInput
  }

  /**
   * PaymentTransaction updateMany
   */
  export type PaymentTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentTransactions.
     */
    data: XOR<PaymentTransactionUpdateManyMutationInput, PaymentTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTransactions to update
     */
    where?: PaymentTransactionWhereInput
    /**
     * Limit how many PaymentTransactions to update.
     */
    limit?: number
  }

  /**
   * PaymentTransaction updateManyAndReturn
   */
  export type PaymentTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * The data used to update PaymentTransactions.
     */
    data: XOR<PaymentTransactionUpdateManyMutationInput, PaymentTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTransactions to update
     */
    where?: PaymentTransactionWhereInput
    /**
     * Limit how many PaymentTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentTransaction upsert
   */
  export type PaymentTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentTransaction to update in case it exists.
     */
    where: PaymentTransactionWhereUniqueInput
    /**
     * In case the PaymentTransaction found by the `where` argument doesn't exist, create a new PaymentTransaction with this data.
     */
    create: XOR<PaymentTransactionCreateInput, PaymentTransactionUncheckedCreateInput>
    /**
     * In case the PaymentTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentTransactionUpdateInput, PaymentTransactionUncheckedUpdateInput>
  }

  /**
   * PaymentTransaction delete
   */
  export type PaymentTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter which PaymentTransaction to delete.
     */
    where: PaymentTransactionWhereUniqueInput
  }

  /**
   * PaymentTransaction deleteMany
   */
  export type PaymentTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentTransactions to delete
     */
    where?: PaymentTransactionWhereInput
    /**
     * Limit how many PaymentTransactions to delete.
     */
    limit?: number
  }

  /**
   * PaymentTransaction without action
   */
  export type PaymentTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    invoiceNumber: string | null
    pdfUrl: string | null
    issuedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    invoiceNumber: string | null
    pdfUrl: string | null
    issuedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    bookingId: number
    invoiceNumber: number
    pdfUrl: number
    issuedAt: number
    _all: number
  }


  export type InvoiceMinAggregateInputType = {
    id?: true
    bookingId?: true
    invoiceNumber?: true
    pdfUrl?: true
    issuedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    bookingId?: true
    invoiceNumber?: true
    pdfUrl?: true
    issuedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    bookingId?: true
    invoiceNumber?: true
    pdfUrl?: true
    issuedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    bookingId: string
    invoiceNumber: string
    pdfUrl: string | null
    issuedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    invoiceNumber?: boolean
    pdfUrl?: boolean
    issuedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    invoiceNumber?: boolean
    pdfUrl?: boolean
    issuedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    invoiceNumber?: boolean
    pdfUrl?: boolean
    issuedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    bookingId?: boolean
    invoiceNumber?: boolean
    pdfUrl?: boolean
    issuedAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "invoiceNumber" | "pdfUrl" | "issuedAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      invoiceNumber: string
      pdfUrl: string | null
      issuedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly bookingId: FieldRef<"Invoice", 'String'>
    readonly invoiceNumber: FieldRef<"Invoice", 'String'>
    readonly pdfUrl: FieldRef<"Invoice", 'String'>
    readonly issuedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Promotion
   */

  export type AggregatePromotion = {
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  export type PromotionAvgAggregateOutputType = {
    discountValue: Decimal | null
    minOrderValue: Decimal | null
    maxDiscount: Decimal | null
    usageLimit: number | null
    usedCount: number | null
  }

  export type PromotionSumAggregateOutputType = {
    discountValue: Decimal | null
    minOrderValue: Decimal | null
    maxDiscount: Decimal | null
    usageLimit: number | null
    usedCount: number | null
  }

  export type PromotionMinAggregateOutputType = {
    id: string | null
    code: string | null
    description: string | null
    discountType: $Enums.PromotionType | null
    discountValue: Decimal | null
    minOrderValue: Decimal | null
    maxDiscount: Decimal | null
    startDate: Date | null
    endDate: Date | null
    usageLimit: number | null
    usedCount: number | null
    isActive: boolean | null
  }

  export type PromotionMaxAggregateOutputType = {
    id: string | null
    code: string | null
    description: string | null
    discountType: $Enums.PromotionType | null
    discountValue: Decimal | null
    minOrderValue: Decimal | null
    maxDiscount: Decimal | null
    startDate: Date | null
    endDate: Date | null
    usageLimit: number | null
    usedCount: number | null
    isActive: boolean | null
  }

  export type PromotionCountAggregateOutputType = {
    id: number
    code: number
    description: number
    discountType: number
    discountValue: number
    minOrderValue: number
    maxDiscount: number
    startDate: number
    endDate: number
    usageLimit: number
    usedCount: number
    isActive: number
    _all: number
  }


  export type PromotionAvgAggregateInputType = {
    discountValue?: true
    minOrderValue?: true
    maxDiscount?: true
    usageLimit?: true
    usedCount?: true
  }

  export type PromotionSumAggregateInputType = {
    discountValue?: true
    minOrderValue?: true
    maxDiscount?: true
    usageLimit?: true
    usedCount?: true
  }

  export type PromotionMinAggregateInputType = {
    id?: true
    code?: true
    description?: true
    discountType?: true
    discountValue?: true
    minOrderValue?: true
    maxDiscount?: true
    startDate?: true
    endDate?: true
    usageLimit?: true
    usedCount?: true
    isActive?: true
  }

  export type PromotionMaxAggregateInputType = {
    id?: true
    code?: true
    description?: true
    discountType?: true
    discountValue?: true
    minOrderValue?: true
    maxDiscount?: true
    startDate?: true
    endDate?: true
    usageLimit?: true
    usedCount?: true
    isActive?: true
  }

  export type PromotionCountAggregateInputType = {
    id?: true
    code?: true
    description?: true
    discountType?: true
    discountValue?: true
    minOrderValue?: true
    maxDiscount?: true
    startDate?: true
    endDate?: true
    usageLimit?: true
    usedCount?: true
    isActive?: true
    _all?: true
  }

  export type PromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotion to aggregate.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotions
    **/
    _count?: true | PromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionMaxAggregateInputType
  }

  export type GetPromotionAggregateType<T extends PromotionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotion[P]>
      : GetScalarType<T[P], AggregatePromotion[P]>
  }




  export type PromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithAggregationInput | PromotionOrderByWithAggregationInput[]
    by: PromotionScalarFieldEnum[] | PromotionScalarFieldEnum
    having?: PromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCountAggregateInputType | true
    _avg?: PromotionAvgAggregateInputType
    _sum?: PromotionSumAggregateInputType
    _min?: PromotionMinAggregateInputType
    _max?: PromotionMaxAggregateInputType
  }

  export type PromotionGroupByOutputType = {
    id: string
    code: string
    description: string | null
    discountType: $Enums.PromotionType
    discountValue: Decimal
    minOrderValue: Decimal | null
    maxDiscount: Decimal | null
    startDate: Date
    endDate: Date
    usageLimit: number | null
    usedCount: number
    isActive: boolean
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  type GetPromotionGroupByPayload<T extends PromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionGroupByOutputType[P]>
        }
      >
    >


  export type PromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    discountType?: boolean
    discountValue?: boolean
    minOrderValue?: boolean
    maxDiscount?: boolean
    startDate?: boolean
    endDate?: boolean
    usageLimit?: boolean
    usedCount?: boolean
    isActive?: boolean
    bookings?: boolean | Promotion$bookingsArgs<ExtArgs>
    _count?: boolean | PromotionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    discountType?: boolean
    discountValue?: boolean
    minOrderValue?: boolean
    maxDiscount?: boolean
    startDate?: boolean
    endDate?: boolean
    usageLimit?: boolean
    usedCount?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    discountType?: boolean
    discountValue?: boolean
    minOrderValue?: boolean
    maxDiscount?: boolean
    startDate?: boolean
    endDate?: boolean
    usageLimit?: boolean
    usedCount?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectScalar = {
    id?: boolean
    code?: boolean
    description?: boolean
    discountType?: boolean
    discountValue?: boolean
    minOrderValue?: boolean
    maxDiscount?: boolean
    startDate?: boolean
    endDate?: boolean
    usageLimit?: boolean
    usedCount?: boolean
    isActive?: boolean
  }

  export type PromotionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "description" | "discountType" | "discountValue" | "minOrderValue" | "maxDiscount" | "startDate" | "endDate" | "usageLimit" | "usedCount" | "isActive", ExtArgs["result"]["promotion"]>
  export type PromotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Promotion$bookingsArgs<ExtArgs>
    _count?: boolean | PromotionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromotionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PromotionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotion"
    objects: {
      bookings: Prisma.$BookingPromotionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      description: string | null
      discountType: $Enums.PromotionType
      discountValue: Prisma.Decimal
      minOrderValue: Prisma.Decimal | null
      maxDiscount: Prisma.Decimal | null
      startDate: Date
      endDate: Date
      usageLimit: number | null
      usedCount: number
      isActive: boolean
    }, ExtArgs["result"]["promotion"]>
    composites: {}
  }

  type PromotionGetPayload<S extends boolean | null | undefined | PromotionDefaultArgs> = $Result.GetResult<Prisma.$PromotionPayload, S>

  type PromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromotionCountAggregateInputType | true
    }

  export interface PromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotion'], meta: { name: 'Promotion' } }
    /**
     * Find zero or one Promotion that matches the filter.
     * @param {PromotionFindUniqueArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotionFindUniqueArgs>(args: SelectSubset<T, PromotionFindUniqueArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promotion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromotionFindUniqueOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotionFindFirstArgs>(args?: SelectSubset<T, PromotionFindFirstArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotion.findMany()
     * 
     * // Get first 10 Promotions
     * const promotions = await prisma.promotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotionWithIdOnly = await prisma.promotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromotionFindManyArgs>(args?: SelectSubset<T, PromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promotion.
     * @param {PromotionCreateArgs} args - Arguments to create a Promotion.
     * @example
     * // Create one Promotion
     * const Promotion = await prisma.promotion.create({
     *   data: {
     *     // ... data to create a Promotion
     *   }
     * })
     * 
     */
    create<T extends PromotionCreateArgs>(args: SelectSubset<T, PromotionCreateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promotions.
     * @param {PromotionCreateManyArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotionCreateManyArgs>(args?: SelectSubset<T, PromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promotions and returns the data saved in the database.
     * @param {PromotionCreateManyAndReturnArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promotions and only return the `id`
     * const promotionWithIdOnly = await prisma.promotion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromotionCreateManyAndReturnArgs>(args?: SelectSubset<T, PromotionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Promotion.
     * @param {PromotionDeleteArgs} args - Arguments to delete one Promotion.
     * @example
     * // Delete one Promotion
     * const Promotion = await prisma.promotion.delete({
     *   where: {
     *     // ... filter to delete one Promotion
     *   }
     * })
     * 
     */
    delete<T extends PromotionDeleteArgs>(args: SelectSubset<T, PromotionDeleteArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promotion.
     * @param {PromotionUpdateArgs} args - Arguments to update one Promotion.
     * @example
     * // Update one Promotion
     * const promotion = await prisma.promotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotionUpdateArgs>(args: SelectSubset<T, PromotionUpdateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promotions.
     * @param {PromotionDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotionDeleteManyArgs>(args?: SelectSubset<T, PromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotionUpdateManyArgs>(args: SelectSubset<T, PromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions and returns the data updated in the database.
     * @param {PromotionUpdateManyAndReturnArgs} args - Arguments to update many Promotions.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Promotions and only return the `id`
     * const promotionWithIdOnly = await prisma.promotion.updateManyAndReturn({
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
    updateManyAndReturn<T extends PromotionUpdateManyAndReturnArgs>(args: SelectSubset<T, PromotionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Promotion.
     * @param {PromotionUpsertArgs} args - Arguments to update or create a Promotion.
     * @example
     * // Update or create a Promotion
     * const promotion = await prisma.promotion.upsert({
     *   create: {
     *     // ... data to create a Promotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotion we want to update
     *   }
     * })
     */
    upsert<T extends PromotionUpsertArgs>(args: SelectSubset<T, PromotionUpsertArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotion.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
    **/
    count<T extends PromotionCountArgs>(
      args?: Subset<T, PromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromotionAggregateArgs>(args: Subset<T, PromotionAggregateArgs>): Prisma.PrismaPromise<GetPromotionAggregateType<T>>

    /**
     * Group by Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionGroupByArgs} args - Group by arguments.
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
      T extends PromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionGroupByArgs['orderBy'] }
        : { orderBy?: PromotionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotion model
   */
  readonly fields: PromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Promotion$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Promotion$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Promotion model
   */
  interface PromotionFieldRefs {
    readonly id: FieldRef<"Promotion", 'String'>
    readonly code: FieldRef<"Promotion", 'String'>
    readonly description: FieldRef<"Promotion", 'String'>
    readonly discountType: FieldRef<"Promotion", 'PromotionType'>
    readonly discountValue: FieldRef<"Promotion", 'Decimal'>
    readonly minOrderValue: FieldRef<"Promotion", 'Decimal'>
    readonly maxDiscount: FieldRef<"Promotion", 'Decimal'>
    readonly startDate: FieldRef<"Promotion", 'DateTime'>
    readonly endDate: FieldRef<"Promotion", 'DateTime'>
    readonly usageLimit: FieldRef<"Promotion", 'Int'>
    readonly usedCount: FieldRef<"Promotion", 'Int'>
    readonly isActive: FieldRef<"Promotion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Promotion findUnique
   */
  export type PromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findUniqueOrThrow
   */
  export type PromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findFirst
   */
  export type PromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findFirstOrThrow
   */
  export type PromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findMany
   */
  export type PromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotions to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion create
   */
  export type PromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to create a Promotion.
     */
    data: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
  }

  /**
   * Promotion createMany
   */
  export type PromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion createManyAndReturn
   */
  export type PromotionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion update
   */
  export type PromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to update a Promotion.
     */
    data: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
    /**
     * Choose, which Promotion to update.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion updateMany
   */
  export type PromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to update.
     */
    limit?: number
  }

  /**
   * Promotion updateManyAndReturn
   */
  export type PromotionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to update.
     */
    limit?: number
  }

  /**
   * Promotion upsert
   */
  export type PromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The filter to search for the Promotion to update in case it exists.
     */
    where: PromotionWhereUniqueInput
    /**
     * In case the Promotion found by the `where` argument doesn't exist, create a new Promotion with this data.
     */
    create: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
    /**
     * In case the Promotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
  }

  /**
   * Promotion delete
   */
  export type PromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter which Promotion to delete.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion deleteMany
   */
  export type PromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotions to delete
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to delete.
     */
    limit?: number
  }

  /**
   * Promotion.bookings
   */
  export type Promotion$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPromotion
     */
    select?: BookingPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPromotion
     */
    omit?: BookingPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPromotionInclude<ExtArgs> | null
    where?: BookingPromotionWhereInput
    orderBy?: BookingPromotionOrderByWithRelationInput | BookingPromotionOrderByWithRelationInput[]
    cursor?: BookingPromotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingPromotionScalarFieldEnum | BookingPromotionScalarFieldEnum[]
  }

  /**
   * Promotion without action
   */
  export type PromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
  }


  /**
   * Model BookingPromotion
   */

  export type AggregateBookingPromotion = {
    _count: BookingPromotionCountAggregateOutputType | null
    _min: BookingPromotionMinAggregateOutputType | null
    _max: BookingPromotionMaxAggregateOutputType | null
  }

  export type BookingPromotionMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    promotionId: string | null
  }

  export type BookingPromotionMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    promotionId: string | null
  }

  export type BookingPromotionCountAggregateOutputType = {
    id: number
    bookingId: number
    promotionId: number
    _all: number
  }


  export type BookingPromotionMinAggregateInputType = {
    id?: true
    bookingId?: true
    promotionId?: true
  }

  export type BookingPromotionMaxAggregateInputType = {
    id?: true
    bookingId?: true
    promotionId?: true
  }

  export type BookingPromotionCountAggregateInputType = {
    id?: true
    bookingId?: true
    promotionId?: true
    _all?: true
  }

  export type BookingPromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingPromotion to aggregate.
     */
    where?: BookingPromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingPromotions to fetch.
     */
    orderBy?: BookingPromotionOrderByWithRelationInput | BookingPromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingPromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingPromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingPromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingPromotions
    **/
    _count?: true | BookingPromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingPromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingPromotionMaxAggregateInputType
  }

  export type GetBookingPromotionAggregateType<T extends BookingPromotionAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingPromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingPromotion[P]>
      : GetScalarType<T[P], AggregateBookingPromotion[P]>
  }




  export type BookingPromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingPromotionWhereInput
    orderBy?: BookingPromotionOrderByWithAggregationInput | BookingPromotionOrderByWithAggregationInput[]
    by: BookingPromotionScalarFieldEnum[] | BookingPromotionScalarFieldEnum
    having?: BookingPromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingPromotionCountAggregateInputType | true
    _min?: BookingPromotionMinAggregateInputType
    _max?: BookingPromotionMaxAggregateInputType
  }

  export type BookingPromotionGroupByOutputType = {
    id: string
    bookingId: string
    promotionId: string
    _count: BookingPromotionCountAggregateOutputType | null
    _min: BookingPromotionMinAggregateOutputType | null
    _max: BookingPromotionMaxAggregateOutputType | null
  }

  type GetBookingPromotionGroupByPayload<T extends BookingPromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingPromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingPromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingPromotionGroupByOutputType[P]>
            : GetScalarType<T[P], BookingPromotionGroupByOutputType[P]>
        }
      >
    >


  export type BookingPromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    promotionId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    promotion?: boolean | PromotionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingPromotion"]>

  export type BookingPromotionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    promotionId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    promotion?: boolean | PromotionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingPromotion"]>

  export type BookingPromotionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    promotionId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    promotion?: boolean | PromotionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingPromotion"]>

  export type BookingPromotionSelectScalar = {
    id?: boolean
    bookingId?: boolean
    promotionId?: boolean
  }

  export type BookingPromotionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "promotionId", ExtArgs["result"]["bookingPromotion"]>
  export type BookingPromotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    promotion?: boolean | PromotionDefaultArgs<ExtArgs>
  }
  export type BookingPromotionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    promotion?: boolean | PromotionDefaultArgs<ExtArgs>
  }
  export type BookingPromotionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    promotion?: boolean | PromotionDefaultArgs<ExtArgs>
  }

  export type $BookingPromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingPromotion"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      promotion: Prisma.$PromotionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      promotionId: string
    }, ExtArgs["result"]["bookingPromotion"]>
    composites: {}
  }

  type BookingPromotionGetPayload<S extends boolean | null | undefined | BookingPromotionDefaultArgs> = $Result.GetResult<Prisma.$BookingPromotionPayload, S>

  type BookingPromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingPromotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingPromotionCountAggregateInputType | true
    }

  export interface BookingPromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingPromotion'], meta: { name: 'BookingPromotion' } }
    /**
     * Find zero or one BookingPromotion that matches the filter.
     * @param {BookingPromotionFindUniqueArgs} args - Arguments to find a BookingPromotion
     * @example
     * // Get one BookingPromotion
     * const bookingPromotion = await prisma.bookingPromotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingPromotionFindUniqueArgs>(args: SelectSubset<T, BookingPromotionFindUniqueArgs<ExtArgs>>): Prisma__BookingPromotionClient<$Result.GetResult<Prisma.$BookingPromotionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingPromotion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingPromotionFindUniqueOrThrowArgs} args - Arguments to find a BookingPromotion
     * @example
     * // Get one BookingPromotion
     * const bookingPromotion = await prisma.bookingPromotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingPromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingPromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingPromotionClient<$Result.GetResult<Prisma.$BookingPromotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingPromotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPromotionFindFirstArgs} args - Arguments to find a BookingPromotion
     * @example
     * // Get one BookingPromotion
     * const bookingPromotion = await prisma.bookingPromotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingPromotionFindFirstArgs>(args?: SelectSubset<T, BookingPromotionFindFirstArgs<ExtArgs>>): Prisma__BookingPromotionClient<$Result.GetResult<Prisma.$BookingPromotionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingPromotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPromotionFindFirstOrThrowArgs} args - Arguments to find a BookingPromotion
     * @example
     * // Get one BookingPromotion
     * const bookingPromotion = await prisma.bookingPromotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingPromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingPromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingPromotionClient<$Result.GetResult<Prisma.$BookingPromotionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingPromotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingPromotions
     * const bookingPromotions = await prisma.bookingPromotion.findMany()
     * 
     * // Get first 10 BookingPromotions
     * const bookingPromotions = await prisma.bookingPromotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingPromotionWithIdOnly = await prisma.bookingPromotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingPromotionFindManyArgs>(args?: SelectSubset<T, BookingPromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingPromotion.
     * @param {BookingPromotionCreateArgs} args - Arguments to create a BookingPromotion.
     * @example
     * // Create one BookingPromotion
     * const BookingPromotion = await prisma.bookingPromotion.create({
     *   data: {
     *     // ... data to create a BookingPromotion
     *   }
     * })
     * 
     */
    create<T extends BookingPromotionCreateArgs>(args: SelectSubset<T, BookingPromotionCreateArgs<ExtArgs>>): Prisma__BookingPromotionClient<$Result.GetResult<Prisma.$BookingPromotionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingPromotions.
     * @param {BookingPromotionCreateManyArgs} args - Arguments to create many BookingPromotions.
     * @example
     * // Create many BookingPromotions
     * const bookingPromotion = await prisma.bookingPromotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingPromotionCreateManyArgs>(args?: SelectSubset<T, BookingPromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingPromotions and returns the data saved in the database.
     * @param {BookingPromotionCreateManyAndReturnArgs} args - Arguments to create many BookingPromotions.
     * @example
     * // Create many BookingPromotions
     * const bookingPromotion = await prisma.bookingPromotion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingPromotions and only return the `id`
     * const bookingPromotionWithIdOnly = await prisma.bookingPromotion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingPromotionCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingPromotionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPromotionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingPromotion.
     * @param {BookingPromotionDeleteArgs} args - Arguments to delete one BookingPromotion.
     * @example
     * // Delete one BookingPromotion
     * const BookingPromotion = await prisma.bookingPromotion.delete({
     *   where: {
     *     // ... filter to delete one BookingPromotion
     *   }
     * })
     * 
     */
    delete<T extends BookingPromotionDeleteArgs>(args: SelectSubset<T, BookingPromotionDeleteArgs<ExtArgs>>): Prisma__BookingPromotionClient<$Result.GetResult<Prisma.$BookingPromotionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingPromotion.
     * @param {BookingPromotionUpdateArgs} args - Arguments to update one BookingPromotion.
     * @example
     * // Update one BookingPromotion
     * const bookingPromotion = await prisma.bookingPromotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingPromotionUpdateArgs>(args: SelectSubset<T, BookingPromotionUpdateArgs<ExtArgs>>): Prisma__BookingPromotionClient<$Result.GetResult<Prisma.$BookingPromotionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingPromotions.
     * @param {BookingPromotionDeleteManyArgs} args - Arguments to filter BookingPromotions to delete.
     * @example
     * // Delete a few BookingPromotions
     * const { count } = await prisma.bookingPromotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingPromotionDeleteManyArgs>(args?: SelectSubset<T, BookingPromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingPromotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingPromotions
     * const bookingPromotion = await prisma.bookingPromotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingPromotionUpdateManyArgs>(args: SelectSubset<T, BookingPromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingPromotions and returns the data updated in the database.
     * @param {BookingPromotionUpdateManyAndReturnArgs} args - Arguments to update many BookingPromotions.
     * @example
     * // Update many BookingPromotions
     * const bookingPromotion = await prisma.bookingPromotion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingPromotions and only return the `id`
     * const bookingPromotionWithIdOnly = await prisma.bookingPromotion.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingPromotionUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingPromotionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPromotionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingPromotion.
     * @param {BookingPromotionUpsertArgs} args - Arguments to update or create a BookingPromotion.
     * @example
     * // Update or create a BookingPromotion
     * const bookingPromotion = await prisma.bookingPromotion.upsert({
     *   create: {
     *     // ... data to create a BookingPromotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingPromotion we want to update
     *   }
     * })
     */
    upsert<T extends BookingPromotionUpsertArgs>(args: SelectSubset<T, BookingPromotionUpsertArgs<ExtArgs>>): Prisma__BookingPromotionClient<$Result.GetResult<Prisma.$BookingPromotionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingPromotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPromotionCountArgs} args - Arguments to filter BookingPromotions to count.
     * @example
     * // Count the number of BookingPromotions
     * const count = await prisma.bookingPromotion.count({
     *   where: {
     *     // ... the filter for the BookingPromotions we want to count
     *   }
     * })
    **/
    count<T extends BookingPromotionCountArgs>(
      args?: Subset<T, BookingPromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingPromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingPromotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingPromotionAggregateArgs>(args: Subset<T, BookingPromotionAggregateArgs>): Prisma.PrismaPromise<GetBookingPromotionAggregateType<T>>

    /**
     * Group by BookingPromotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPromotionGroupByArgs} args - Group by arguments.
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
      T extends BookingPromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingPromotionGroupByArgs['orderBy'] }
        : { orderBy?: BookingPromotionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingPromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingPromotion model
   */
  readonly fields: BookingPromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingPromotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingPromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    promotion<T extends PromotionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromotionDefaultArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookingPromotion model
   */
  interface BookingPromotionFieldRefs {
    readonly id: FieldRef<"BookingPromotion", 'String'>
    readonly bookingId: FieldRef<"BookingPromotion", 'String'>
    readonly promotionId: FieldRef<"BookingPromotion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BookingPromotion findUnique
   */
  export type BookingPromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPromotion
     */
    select?: BookingPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPromotion
     */
    omit?: BookingPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPromotionInclude<ExtArgs> | null
    /**
     * Filter, which BookingPromotion to fetch.
     */
    where: BookingPromotionWhereUniqueInput
  }

  /**
   * BookingPromotion findUniqueOrThrow
   */
  export type BookingPromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPromotion
     */
    select?: BookingPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPromotion
     */
    omit?: BookingPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPromotionInclude<ExtArgs> | null
    /**
     * Filter, which BookingPromotion to fetch.
     */
    where: BookingPromotionWhereUniqueInput
  }

  /**
   * BookingPromotion findFirst
   */
  export type BookingPromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPromotion
     */
    select?: BookingPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPromotion
     */
    omit?: BookingPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPromotionInclude<ExtArgs> | null
    /**
     * Filter, which BookingPromotion to fetch.
     */
    where?: BookingPromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingPromotions to fetch.
     */
    orderBy?: BookingPromotionOrderByWithRelationInput | BookingPromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingPromotions.
     */
    cursor?: BookingPromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingPromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingPromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingPromotions.
     */
    distinct?: BookingPromotionScalarFieldEnum | BookingPromotionScalarFieldEnum[]
  }

  /**
   * BookingPromotion findFirstOrThrow
   */
  export type BookingPromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPromotion
     */
    select?: BookingPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPromotion
     */
    omit?: BookingPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPromotionInclude<ExtArgs> | null
    /**
     * Filter, which BookingPromotion to fetch.
     */
    where?: BookingPromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingPromotions to fetch.
     */
    orderBy?: BookingPromotionOrderByWithRelationInput | BookingPromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingPromotions.
     */
    cursor?: BookingPromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingPromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingPromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingPromotions.
     */
    distinct?: BookingPromotionScalarFieldEnum | BookingPromotionScalarFieldEnum[]
  }

  /**
   * BookingPromotion findMany
   */
  export type BookingPromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPromotion
     */
    select?: BookingPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPromotion
     */
    omit?: BookingPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPromotionInclude<ExtArgs> | null
    /**
     * Filter, which BookingPromotions to fetch.
     */
    where?: BookingPromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingPromotions to fetch.
     */
    orderBy?: BookingPromotionOrderByWithRelationInput | BookingPromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingPromotions.
     */
    cursor?: BookingPromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingPromotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingPromotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingPromotions.
     */
    distinct?: BookingPromotionScalarFieldEnum | BookingPromotionScalarFieldEnum[]
  }

  /**
   * BookingPromotion create
   */
  export type BookingPromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPromotion
     */
    select?: BookingPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPromotion
     */
    omit?: BookingPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPromotionInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingPromotion.
     */
    data: XOR<BookingPromotionCreateInput, BookingPromotionUncheckedCreateInput>
  }

  /**
   * BookingPromotion createMany
   */
  export type BookingPromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingPromotions.
     */
    data: BookingPromotionCreateManyInput | BookingPromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingPromotion createManyAndReturn
   */
  export type BookingPromotionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPromotion
     */
    select?: BookingPromotionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPromotion
     */
    omit?: BookingPromotionOmit<ExtArgs> | null
    /**
     * The data used to create many BookingPromotions.
     */
    data: BookingPromotionCreateManyInput | BookingPromotionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPromotionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingPromotion update
   */
  export type BookingPromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPromotion
     */
    select?: BookingPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPromotion
     */
    omit?: BookingPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPromotionInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingPromotion.
     */
    data: XOR<BookingPromotionUpdateInput, BookingPromotionUncheckedUpdateInput>
    /**
     * Choose, which BookingPromotion to update.
     */
    where: BookingPromotionWhereUniqueInput
  }

  /**
   * BookingPromotion updateMany
   */
  export type BookingPromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingPromotions.
     */
    data: XOR<BookingPromotionUpdateManyMutationInput, BookingPromotionUncheckedUpdateManyInput>
    /**
     * Filter which BookingPromotions to update
     */
    where?: BookingPromotionWhereInput
    /**
     * Limit how many BookingPromotions to update.
     */
    limit?: number
  }

  /**
   * BookingPromotion updateManyAndReturn
   */
  export type BookingPromotionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPromotion
     */
    select?: BookingPromotionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPromotion
     */
    omit?: BookingPromotionOmit<ExtArgs> | null
    /**
     * The data used to update BookingPromotions.
     */
    data: XOR<BookingPromotionUpdateManyMutationInput, BookingPromotionUncheckedUpdateManyInput>
    /**
     * Filter which BookingPromotions to update
     */
    where?: BookingPromotionWhereInput
    /**
     * Limit how many BookingPromotions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPromotionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingPromotion upsert
   */
  export type BookingPromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPromotion
     */
    select?: BookingPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPromotion
     */
    omit?: BookingPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPromotionInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingPromotion to update in case it exists.
     */
    where: BookingPromotionWhereUniqueInput
    /**
     * In case the BookingPromotion found by the `where` argument doesn't exist, create a new BookingPromotion with this data.
     */
    create: XOR<BookingPromotionCreateInput, BookingPromotionUncheckedCreateInput>
    /**
     * In case the BookingPromotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingPromotionUpdateInput, BookingPromotionUncheckedUpdateInput>
  }

  /**
   * BookingPromotion delete
   */
  export type BookingPromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPromotion
     */
    select?: BookingPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPromotion
     */
    omit?: BookingPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPromotionInclude<ExtArgs> | null
    /**
     * Filter which BookingPromotion to delete.
     */
    where: BookingPromotionWhereUniqueInput
  }

  /**
   * BookingPromotion deleteMany
   */
  export type BookingPromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingPromotions to delete
     */
    where?: BookingPromotionWhereInput
    /**
     * Limit how many BookingPromotions to delete.
     */
    limit?: number
  }

  /**
   * BookingPromotion without action
   */
  export type BookingPromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPromotion
     */
    select?: BookingPromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPromotion
     */
    omit?: BookingPromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPromotionInclude<ExtArgs> | null
  }


  /**
   * Model RefundRequest
   */

  export type AggregateRefundRequest = {
    _count: RefundRequestCountAggregateOutputType | null
    _avg: RefundRequestAvgAggregateOutputType | null
    _sum: RefundRequestSumAggregateOutputType | null
    _min: RefundRequestMinAggregateOutputType | null
    _max: RefundRequestMaxAggregateOutputType | null
  }

  export type RefundRequestAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type RefundRequestSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type RefundRequestMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    amount: Decimal | null
    reason: string | null
    status: $Enums.RefundStatus | null
    processedAt: Date | null
    adminNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefundRequestMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    amount: Decimal | null
    reason: string | null
    status: $Enums.RefundStatus | null
    processedAt: Date | null
    adminNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefundRequestCountAggregateOutputType = {
    id: number
    bookingId: number
    amount: number
    reason: number
    status: number
    processedAt: number
    adminNote: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RefundRequestAvgAggregateInputType = {
    amount?: true
  }

  export type RefundRequestSumAggregateInputType = {
    amount?: true
  }

  export type RefundRequestMinAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    reason?: true
    status?: true
    processedAt?: true
    adminNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefundRequestMaxAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    reason?: true
    status?: true
    processedAt?: true
    adminNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefundRequestCountAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    reason?: true
    status?: true
    processedAt?: true
    adminNote?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RefundRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefundRequest to aggregate.
     */
    where?: RefundRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefundRequests to fetch.
     */
    orderBy?: RefundRequestOrderByWithRelationInput | RefundRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefundRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefundRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefundRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefundRequests
    **/
    _count?: true | RefundRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefundRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefundRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefundRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefundRequestMaxAggregateInputType
  }

  export type GetRefundRequestAggregateType<T extends RefundRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRefundRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefundRequest[P]>
      : GetScalarType<T[P], AggregateRefundRequest[P]>
  }




  export type RefundRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundRequestWhereInput
    orderBy?: RefundRequestOrderByWithAggregationInput | RefundRequestOrderByWithAggregationInput[]
    by: RefundRequestScalarFieldEnum[] | RefundRequestScalarFieldEnum
    having?: RefundRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefundRequestCountAggregateInputType | true
    _avg?: RefundRequestAvgAggregateInputType
    _sum?: RefundRequestSumAggregateInputType
    _min?: RefundRequestMinAggregateInputType
    _max?: RefundRequestMaxAggregateInputType
  }

  export type RefundRequestGroupByOutputType = {
    id: string
    bookingId: string
    amount: Decimal
    reason: string
    status: $Enums.RefundStatus
    processedAt: Date | null
    adminNote: string | null
    createdAt: Date
    updatedAt: Date
    _count: RefundRequestCountAggregateOutputType | null
    _avg: RefundRequestAvgAggregateOutputType | null
    _sum: RefundRequestSumAggregateOutputType | null
    _min: RefundRequestMinAggregateOutputType | null
    _max: RefundRequestMaxAggregateOutputType | null
  }

  type GetRefundRequestGroupByPayload<T extends RefundRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefundRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefundRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefundRequestGroupByOutputType[P]>
            : GetScalarType<T[P], RefundRequestGroupByOutputType[P]>
        }
      >
    >


  export type RefundRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    reason?: boolean
    status?: boolean
    processedAt?: boolean
    adminNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refundRequest"]>

  export type RefundRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    reason?: boolean
    status?: boolean
    processedAt?: boolean
    adminNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refundRequest"]>

  export type RefundRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    reason?: boolean
    status?: boolean
    processedAt?: boolean
    adminNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refundRequest"]>

  export type RefundRequestSelectScalar = {
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    reason?: boolean
    status?: boolean
    processedAt?: boolean
    adminNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RefundRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "amount" | "reason" | "status" | "processedAt" | "adminNote" | "createdAt" | "updatedAt", ExtArgs["result"]["refundRequest"]>
  export type RefundRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type RefundRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type RefundRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $RefundRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefundRequest"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      amount: Prisma.Decimal
      reason: string
      status: $Enums.RefundStatus
      processedAt: Date | null
      adminNote: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["refundRequest"]>
    composites: {}
  }

  type RefundRequestGetPayload<S extends boolean | null | undefined | RefundRequestDefaultArgs> = $Result.GetResult<Prisma.$RefundRequestPayload, S>

  type RefundRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefundRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefundRequestCountAggregateInputType | true
    }

  export interface RefundRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefundRequest'], meta: { name: 'RefundRequest' } }
    /**
     * Find zero or one RefundRequest that matches the filter.
     * @param {RefundRequestFindUniqueArgs} args - Arguments to find a RefundRequest
     * @example
     * // Get one RefundRequest
     * const refundRequest = await prisma.refundRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefundRequestFindUniqueArgs>(args: SelectSubset<T, RefundRequestFindUniqueArgs<ExtArgs>>): Prisma__RefundRequestClient<$Result.GetResult<Prisma.$RefundRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefundRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefundRequestFindUniqueOrThrowArgs} args - Arguments to find a RefundRequest
     * @example
     * // Get one RefundRequest
     * const refundRequest = await prisma.refundRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefundRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RefundRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefundRequestClient<$Result.GetResult<Prisma.$RefundRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefundRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundRequestFindFirstArgs} args - Arguments to find a RefundRequest
     * @example
     * // Get one RefundRequest
     * const refundRequest = await prisma.refundRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefundRequestFindFirstArgs>(args?: SelectSubset<T, RefundRequestFindFirstArgs<ExtArgs>>): Prisma__RefundRequestClient<$Result.GetResult<Prisma.$RefundRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefundRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundRequestFindFirstOrThrowArgs} args - Arguments to find a RefundRequest
     * @example
     * // Get one RefundRequest
     * const refundRequest = await prisma.refundRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefundRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RefundRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefundRequestClient<$Result.GetResult<Prisma.$RefundRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefundRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefundRequests
     * const refundRequests = await prisma.refundRequest.findMany()
     * 
     * // Get first 10 RefundRequests
     * const refundRequests = await prisma.refundRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refundRequestWithIdOnly = await prisma.refundRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefundRequestFindManyArgs>(args?: SelectSubset<T, RefundRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefundRequest.
     * @param {RefundRequestCreateArgs} args - Arguments to create a RefundRequest.
     * @example
     * // Create one RefundRequest
     * const RefundRequest = await prisma.refundRequest.create({
     *   data: {
     *     // ... data to create a RefundRequest
     *   }
     * })
     * 
     */
    create<T extends RefundRequestCreateArgs>(args: SelectSubset<T, RefundRequestCreateArgs<ExtArgs>>): Prisma__RefundRequestClient<$Result.GetResult<Prisma.$RefundRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefundRequests.
     * @param {RefundRequestCreateManyArgs} args - Arguments to create many RefundRequests.
     * @example
     * // Create many RefundRequests
     * const refundRequest = await prisma.refundRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefundRequestCreateManyArgs>(args?: SelectSubset<T, RefundRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefundRequests and returns the data saved in the database.
     * @param {RefundRequestCreateManyAndReturnArgs} args - Arguments to create many RefundRequests.
     * @example
     * // Create many RefundRequests
     * const refundRequest = await prisma.refundRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefundRequests and only return the `id`
     * const refundRequestWithIdOnly = await prisma.refundRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefundRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RefundRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefundRequest.
     * @param {RefundRequestDeleteArgs} args - Arguments to delete one RefundRequest.
     * @example
     * // Delete one RefundRequest
     * const RefundRequest = await prisma.refundRequest.delete({
     *   where: {
     *     // ... filter to delete one RefundRequest
     *   }
     * })
     * 
     */
    delete<T extends RefundRequestDeleteArgs>(args: SelectSubset<T, RefundRequestDeleteArgs<ExtArgs>>): Prisma__RefundRequestClient<$Result.GetResult<Prisma.$RefundRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefundRequest.
     * @param {RefundRequestUpdateArgs} args - Arguments to update one RefundRequest.
     * @example
     * // Update one RefundRequest
     * const refundRequest = await prisma.refundRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefundRequestUpdateArgs>(args: SelectSubset<T, RefundRequestUpdateArgs<ExtArgs>>): Prisma__RefundRequestClient<$Result.GetResult<Prisma.$RefundRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefundRequests.
     * @param {RefundRequestDeleteManyArgs} args - Arguments to filter RefundRequests to delete.
     * @example
     * // Delete a few RefundRequests
     * const { count } = await prisma.refundRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefundRequestDeleteManyArgs>(args?: SelectSubset<T, RefundRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefundRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefundRequests
     * const refundRequest = await prisma.refundRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefundRequestUpdateManyArgs>(args: SelectSubset<T, RefundRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefundRequests and returns the data updated in the database.
     * @param {RefundRequestUpdateManyAndReturnArgs} args - Arguments to update many RefundRequests.
     * @example
     * // Update many RefundRequests
     * const refundRequest = await prisma.refundRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefundRequests and only return the `id`
     * const refundRequestWithIdOnly = await prisma.refundRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends RefundRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RefundRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefundRequest.
     * @param {RefundRequestUpsertArgs} args - Arguments to update or create a RefundRequest.
     * @example
     * // Update or create a RefundRequest
     * const refundRequest = await prisma.refundRequest.upsert({
     *   create: {
     *     // ... data to create a RefundRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefundRequest we want to update
     *   }
     * })
     */
    upsert<T extends RefundRequestUpsertArgs>(args: SelectSubset<T, RefundRequestUpsertArgs<ExtArgs>>): Prisma__RefundRequestClient<$Result.GetResult<Prisma.$RefundRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefundRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundRequestCountArgs} args - Arguments to filter RefundRequests to count.
     * @example
     * // Count the number of RefundRequests
     * const count = await prisma.refundRequest.count({
     *   where: {
     *     // ... the filter for the RefundRequests we want to count
     *   }
     * })
    **/
    count<T extends RefundRequestCountArgs>(
      args?: Subset<T, RefundRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefundRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefundRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefundRequestAggregateArgs>(args: Subset<T, RefundRequestAggregateArgs>): Prisma.PrismaPromise<GetRefundRequestAggregateType<T>>

    /**
     * Group by RefundRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundRequestGroupByArgs} args - Group by arguments.
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
      T extends RefundRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefundRequestGroupByArgs['orderBy'] }
        : { orderBy?: RefundRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefundRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefundRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefundRequest model
   */
  readonly fields: RefundRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefundRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefundRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RefundRequest model
   */
  interface RefundRequestFieldRefs {
    readonly id: FieldRef<"RefundRequest", 'String'>
    readonly bookingId: FieldRef<"RefundRequest", 'String'>
    readonly amount: FieldRef<"RefundRequest", 'Decimal'>
    readonly reason: FieldRef<"RefundRequest", 'String'>
    readonly status: FieldRef<"RefundRequest", 'RefundStatus'>
    readonly processedAt: FieldRef<"RefundRequest", 'DateTime'>
    readonly adminNote: FieldRef<"RefundRequest", 'String'>
    readonly createdAt: FieldRef<"RefundRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"RefundRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefundRequest findUnique
   */
  export type RefundRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundRequest
     */
    select?: RefundRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundRequest
     */
    omit?: RefundRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundRequestInclude<ExtArgs> | null
    /**
     * Filter, which RefundRequest to fetch.
     */
    where: RefundRequestWhereUniqueInput
  }

  /**
   * RefundRequest findUniqueOrThrow
   */
  export type RefundRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundRequest
     */
    select?: RefundRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundRequest
     */
    omit?: RefundRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundRequestInclude<ExtArgs> | null
    /**
     * Filter, which RefundRequest to fetch.
     */
    where: RefundRequestWhereUniqueInput
  }

  /**
   * RefundRequest findFirst
   */
  export type RefundRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundRequest
     */
    select?: RefundRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundRequest
     */
    omit?: RefundRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundRequestInclude<ExtArgs> | null
    /**
     * Filter, which RefundRequest to fetch.
     */
    where?: RefundRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefundRequests to fetch.
     */
    orderBy?: RefundRequestOrderByWithRelationInput | RefundRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefundRequests.
     */
    cursor?: RefundRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefundRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefundRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefundRequests.
     */
    distinct?: RefundRequestScalarFieldEnum | RefundRequestScalarFieldEnum[]
  }

  /**
   * RefundRequest findFirstOrThrow
   */
  export type RefundRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundRequest
     */
    select?: RefundRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundRequest
     */
    omit?: RefundRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundRequestInclude<ExtArgs> | null
    /**
     * Filter, which RefundRequest to fetch.
     */
    where?: RefundRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefundRequests to fetch.
     */
    orderBy?: RefundRequestOrderByWithRelationInput | RefundRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefundRequests.
     */
    cursor?: RefundRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefundRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefundRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefundRequests.
     */
    distinct?: RefundRequestScalarFieldEnum | RefundRequestScalarFieldEnum[]
  }

  /**
   * RefundRequest findMany
   */
  export type RefundRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundRequest
     */
    select?: RefundRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundRequest
     */
    omit?: RefundRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundRequestInclude<ExtArgs> | null
    /**
     * Filter, which RefundRequests to fetch.
     */
    where?: RefundRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefundRequests to fetch.
     */
    orderBy?: RefundRequestOrderByWithRelationInput | RefundRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefundRequests.
     */
    cursor?: RefundRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefundRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefundRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefundRequests.
     */
    distinct?: RefundRequestScalarFieldEnum | RefundRequestScalarFieldEnum[]
  }

  /**
   * RefundRequest create
   */
  export type RefundRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundRequest
     */
    select?: RefundRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundRequest
     */
    omit?: RefundRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a RefundRequest.
     */
    data: XOR<RefundRequestCreateInput, RefundRequestUncheckedCreateInput>
  }

  /**
   * RefundRequest createMany
   */
  export type RefundRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefundRequests.
     */
    data: RefundRequestCreateManyInput | RefundRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefundRequest createManyAndReturn
   */
  export type RefundRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundRequest
     */
    select?: RefundRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefundRequest
     */
    omit?: RefundRequestOmit<ExtArgs> | null
    /**
     * The data used to create many RefundRequests.
     */
    data: RefundRequestCreateManyInput | RefundRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefundRequest update
   */
  export type RefundRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundRequest
     */
    select?: RefundRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundRequest
     */
    omit?: RefundRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a RefundRequest.
     */
    data: XOR<RefundRequestUpdateInput, RefundRequestUncheckedUpdateInput>
    /**
     * Choose, which RefundRequest to update.
     */
    where: RefundRequestWhereUniqueInput
  }

  /**
   * RefundRequest updateMany
   */
  export type RefundRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefundRequests.
     */
    data: XOR<RefundRequestUpdateManyMutationInput, RefundRequestUncheckedUpdateManyInput>
    /**
     * Filter which RefundRequests to update
     */
    where?: RefundRequestWhereInput
    /**
     * Limit how many RefundRequests to update.
     */
    limit?: number
  }

  /**
   * RefundRequest updateManyAndReturn
   */
  export type RefundRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundRequest
     */
    select?: RefundRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefundRequest
     */
    omit?: RefundRequestOmit<ExtArgs> | null
    /**
     * The data used to update RefundRequests.
     */
    data: XOR<RefundRequestUpdateManyMutationInput, RefundRequestUncheckedUpdateManyInput>
    /**
     * Filter which RefundRequests to update
     */
    where?: RefundRequestWhereInput
    /**
     * Limit how many RefundRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefundRequest upsert
   */
  export type RefundRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundRequest
     */
    select?: RefundRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundRequest
     */
    omit?: RefundRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the RefundRequest to update in case it exists.
     */
    where: RefundRequestWhereUniqueInput
    /**
     * In case the RefundRequest found by the `where` argument doesn't exist, create a new RefundRequest with this data.
     */
    create: XOR<RefundRequestCreateInput, RefundRequestUncheckedCreateInput>
    /**
     * In case the RefundRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefundRequestUpdateInput, RefundRequestUncheckedUpdateInput>
  }

  /**
   * RefundRequest delete
   */
  export type RefundRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundRequest
     */
    select?: RefundRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundRequest
     */
    omit?: RefundRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundRequestInclude<ExtArgs> | null
    /**
     * Filter which RefundRequest to delete.
     */
    where: RefundRequestWhereUniqueInput
  }

  /**
   * RefundRequest deleteMany
   */
  export type RefundRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefundRequests to delete
     */
    where?: RefundRequestWhereInput
    /**
     * Limit how many RefundRequests to delete.
     */
    limit?: number
  }

  /**
   * RefundRequest without action
   */
  export type RefundRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundRequest
     */
    select?: RefundRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundRequest
     */
    omit?: RefundRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundRequestInclude<ExtArgs> | null
  }


  /**
   * Model CancellationPolicy
   */

  export type AggregateCancellationPolicy = {
    _count: CancellationPolicyCountAggregateOutputType | null
    _avg: CancellationPolicyAvgAggregateOutputType | null
    _sum: CancellationPolicySumAggregateOutputType | null
    _min: CancellationPolicyMinAggregateOutputType | null
    _max: CancellationPolicyMaxAggregateOutputType | null
  }

  export type CancellationPolicyAvgAggregateOutputType = {
    daysBeforeCheckIn: number | null
    refundPercentage: Decimal | null
  }

  export type CancellationPolicySumAggregateOutputType = {
    daysBeforeCheckIn: number | null
    refundPercentage: Decimal | null
  }

  export type CancellationPolicyMinAggregateOutputType = {
    id: string | null
    hotelId: string | null
    daysBeforeCheckIn: number | null
    refundPercentage: Decimal | null
  }

  export type CancellationPolicyMaxAggregateOutputType = {
    id: string | null
    hotelId: string | null
    daysBeforeCheckIn: number | null
    refundPercentage: Decimal | null
  }

  export type CancellationPolicyCountAggregateOutputType = {
    id: number
    hotelId: number
    daysBeforeCheckIn: number
    refundPercentage: number
    _all: number
  }


  export type CancellationPolicyAvgAggregateInputType = {
    daysBeforeCheckIn?: true
    refundPercentage?: true
  }

  export type CancellationPolicySumAggregateInputType = {
    daysBeforeCheckIn?: true
    refundPercentage?: true
  }

  export type CancellationPolicyMinAggregateInputType = {
    id?: true
    hotelId?: true
    daysBeforeCheckIn?: true
    refundPercentage?: true
  }

  export type CancellationPolicyMaxAggregateInputType = {
    id?: true
    hotelId?: true
    daysBeforeCheckIn?: true
    refundPercentage?: true
  }

  export type CancellationPolicyCountAggregateInputType = {
    id?: true
    hotelId?: true
    daysBeforeCheckIn?: true
    refundPercentage?: true
    _all?: true
  }

  export type CancellationPolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CancellationPolicy to aggregate.
     */
    where?: CancellationPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CancellationPolicies to fetch.
     */
    orderBy?: CancellationPolicyOrderByWithRelationInput | CancellationPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CancellationPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CancellationPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CancellationPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CancellationPolicies
    **/
    _count?: true | CancellationPolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CancellationPolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CancellationPolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CancellationPolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CancellationPolicyMaxAggregateInputType
  }

  export type GetCancellationPolicyAggregateType<T extends CancellationPolicyAggregateArgs> = {
        [P in keyof T & keyof AggregateCancellationPolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCancellationPolicy[P]>
      : GetScalarType<T[P], AggregateCancellationPolicy[P]>
  }




  export type CancellationPolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CancellationPolicyWhereInput
    orderBy?: CancellationPolicyOrderByWithAggregationInput | CancellationPolicyOrderByWithAggregationInput[]
    by: CancellationPolicyScalarFieldEnum[] | CancellationPolicyScalarFieldEnum
    having?: CancellationPolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CancellationPolicyCountAggregateInputType | true
    _avg?: CancellationPolicyAvgAggregateInputType
    _sum?: CancellationPolicySumAggregateInputType
    _min?: CancellationPolicyMinAggregateInputType
    _max?: CancellationPolicyMaxAggregateInputType
  }

  export type CancellationPolicyGroupByOutputType = {
    id: string
    hotelId: string
    daysBeforeCheckIn: number
    refundPercentage: Decimal
    _count: CancellationPolicyCountAggregateOutputType | null
    _avg: CancellationPolicyAvgAggregateOutputType | null
    _sum: CancellationPolicySumAggregateOutputType | null
    _min: CancellationPolicyMinAggregateOutputType | null
    _max: CancellationPolicyMaxAggregateOutputType | null
  }

  type GetCancellationPolicyGroupByPayload<T extends CancellationPolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CancellationPolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CancellationPolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CancellationPolicyGroupByOutputType[P]>
            : GetScalarType<T[P], CancellationPolicyGroupByOutputType[P]>
        }
      >
    >


  export type CancellationPolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    daysBeforeCheckIn?: boolean
    refundPercentage?: boolean
  }, ExtArgs["result"]["cancellationPolicy"]>

  export type CancellationPolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    daysBeforeCheckIn?: boolean
    refundPercentage?: boolean
  }, ExtArgs["result"]["cancellationPolicy"]>

  export type CancellationPolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    daysBeforeCheckIn?: boolean
    refundPercentage?: boolean
  }, ExtArgs["result"]["cancellationPolicy"]>

  export type CancellationPolicySelectScalar = {
    id?: boolean
    hotelId?: boolean
    daysBeforeCheckIn?: boolean
    refundPercentage?: boolean
  }

  export type CancellationPolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hotelId" | "daysBeforeCheckIn" | "refundPercentage", ExtArgs["result"]["cancellationPolicy"]>

  export type $CancellationPolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CancellationPolicy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hotelId: string
      daysBeforeCheckIn: number
      refundPercentage: Prisma.Decimal
    }, ExtArgs["result"]["cancellationPolicy"]>
    composites: {}
  }

  type CancellationPolicyGetPayload<S extends boolean | null | undefined | CancellationPolicyDefaultArgs> = $Result.GetResult<Prisma.$CancellationPolicyPayload, S>

  type CancellationPolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CancellationPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CancellationPolicyCountAggregateInputType | true
    }

  export interface CancellationPolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CancellationPolicy'], meta: { name: 'CancellationPolicy' } }
    /**
     * Find zero or one CancellationPolicy that matches the filter.
     * @param {CancellationPolicyFindUniqueArgs} args - Arguments to find a CancellationPolicy
     * @example
     * // Get one CancellationPolicy
     * const cancellationPolicy = await prisma.cancellationPolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CancellationPolicyFindUniqueArgs>(args: SelectSubset<T, CancellationPolicyFindUniqueArgs<ExtArgs>>): Prisma__CancellationPolicyClient<$Result.GetResult<Prisma.$CancellationPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CancellationPolicy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CancellationPolicyFindUniqueOrThrowArgs} args - Arguments to find a CancellationPolicy
     * @example
     * // Get one CancellationPolicy
     * const cancellationPolicy = await prisma.cancellationPolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CancellationPolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, CancellationPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CancellationPolicyClient<$Result.GetResult<Prisma.$CancellationPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CancellationPolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancellationPolicyFindFirstArgs} args - Arguments to find a CancellationPolicy
     * @example
     * // Get one CancellationPolicy
     * const cancellationPolicy = await prisma.cancellationPolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CancellationPolicyFindFirstArgs>(args?: SelectSubset<T, CancellationPolicyFindFirstArgs<ExtArgs>>): Prisma__CancellationPolicyClient<$Result.GetResult<Prisma.$CancellationPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CancellationPolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancellationPolicyFindFirstOrThrowArgs} args - Arguments to find a CancellationPolicy
     * @example
     * // Get one CancellationPolicy
     * const cancellationPolicy = await prisma.cancellationPolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CancellationPolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, CancellationPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CancellationPolicyClient<$Result.GetResult<Prisma.$CancellationPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CancellationPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancellationPolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CancellationPolicies
     * const cancellationPolicies = await prisma.cancellationPolicy.findMany()
     * 
     * // Get first 10 CancellationPolicies
     * const cancellationPolicies = await prisma.cancellationPolicy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cancellationPolicyWithIdOnly = await prisma.cancellationPolicy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CancellationPolicyFindManyArgs>(args?: SelectSubset<T, CancellationPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancellationPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CancellationPolicy.
     * @param {CancellationPolicyCreateArgs} args - Arguments to create a CancellationPolicy.
     * @example
     * // Create one CancellationPolicy
     * const CancellationPolicy = await prisma.cancellationPolicy.create({
     *   data: {
     *     // ... data to create a CancellationPolicy
     *   }
     * })
     * 
     */
    create<T extends CancellationPolicyCreateArgs>(args: SelectSubset<T, CancellationPolicyCreateArgs<ExtArgs>>): Prisma__CancellationPolicyClient<$Result.GetResult<Prisma.$CancellationPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CancellationPolicies.
     * @param {CancellationPolicyCreateManyArgs} args - Arguments to create many CancellationPolicies.
     * @example
     * // Create many CancellationPolicies
     * const cancellationPolicy = await prisma.cancellationPolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CancellationPolicyCreateManyArgs>(args?: SelectSubset<T, CancellationPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CancellationPolicies and returns the data saved in the database.
     * @param {CancellationPolicyCreateManyAndReturnArgs} args - Arguments to create many CancellationPolicies.
     * @example
     * // Create many CancellationPolicies
     * const cancellationPolicy = await prisma.cancellationPolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CancellationPolicies and only return the `id`
     * const cancellationPolicyWithIdOnly = await prisma.cancellationPolicy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CancellationPolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, CancellationPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancellationPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CancellationPolicy.
     * @param {CancellationPolicyDeleteArgs} args - Arguments to delete one CancellationPolicy.
     * @example
     * // Delete one CancellationPolicy
     * const CancellationPolicy = await prisma.cancellationPolicy.delete({
     *   where: {
     *     // ... filter to delete one CancellationPolicy
     *   }
     * })
     * 
     */
    delete<T extends CancellationPolicyDeleteArgs>(args: SelectSubset<T, CancellationPolicyDeleteArgs<ExtArgs>>): Prisma__CancellationPolicyClient<$Result.GetResult<Prisma.$CancellationPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CancellationPolicy.
     * @param {CancellationPolicyUpdateArgs} args - Arguments to update one CancellationPolicy.
     * @example
     * // Update one CancellationPolicy
     * const cancellationPolicy = await prisma.cancellationPolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CancellationPolicyUpdateArgs>(args: SelectSubset<T, CancellationPolicyUpdateArgs<ExtArgs>>): Prisma__CancellationPolicyClient<$Result.GetResult<Prisma.$CancellationPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CancellationPolicies.
     * @param {CancellationPolicyDeleteManyArgs} args - Arguments to filter CancellationPolicies to delete.
     * @example
     * // Delete a few CancellationPolicies
     * const { count } = await prisma.cancellationPolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CancellationPolicyDeleteManyArgs>(args?: SelectSubset<T, CancellationPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CancellationPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancellationPolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CancellationPolicies
     * const cancellationPolicy = await prisma.cancellationPolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CancellationPolicyUpdateManyArgs>(args: SelectSubset<T, CancellationPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CancellationPolicies and returns the data updated in the database.
     * @param {CancellationPolicyUpdateManyAndReturnArgs} args - Arguments to update many CancellationPolicies.
     * @example
     * // Update many CancellationPolicies
     * const cancellationPolicy = await prisma.cancellationPolicy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CancellationPolicies and only return the `id`
     * const cancellationPolicyWithIdOnly = await prisma.cancellationPolicy.updateManyAndReturn({
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
    updateManyAndReturn<T extends CancellationPolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, CancellationPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancellationPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CancellationPolicy.
     * @param {CancellationPolicyUpsertArgs} args - Arguments to update or create a CancellationPolicy.
     * @example
     * // Update or create a CancellationPolicy
     * const cancellationPolicy = await prisma.cancellationPolicy.upsert({
     *   create: {
     *     // ... data to create a CancellationPolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CancellationPolicy we want to update
     *   }
     * })
     */
    upsert<T extends CancellationPolicyUpsertArgs>(args: SelectSubset<T, CancellationPolicyUpsertArgs<ExtArgs>>): Prisma__CancellationPolicyClient<$Result.GetResult<Prisma.$CancellationPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CancellationPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancellationPolicyCountArgs} args - Arguments to filter CancellationPolicies to count.
     * @example
     * // Count the number of CancellationPolicies
     * const count = await prisma.cancellationPolicy.count({
     *   where: {
     *     // ... the filter for the CancellationPolicies we want to count
     *   }
     * })
    **/
    count<T extends CancellationPolicyCountArgs>(
      args?: Subset<T, CancellationPolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CancellationPolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CancellationPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancellationPolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CancellationPolicyAggregateArgs>(args: Subset<T, CancellationPolicyAggregateArgs>): Prisma.PrismaPromise<GetCancellationPolicyAggregateType<T>>

    /**
     * Group by CancellationPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancellationPolicyGroupByArgs} args - Group by arguments.
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
      T extends CancellationPolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CancellationPolicyGroupByArgs['orderBy'] }
        : { orderBy?: CancellationPolicyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CancellationPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCancellationPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CancellationPolicy model
   */
  readonly fields: CancellationPolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CancellationPolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CancellationPolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CancellationPolicy model
   */
  interface CancellationPolicyFieldRefs {
    readonly id: FieldRef<"CancellationPolicy", 'String'>
    readonly hotelId: FieldRef<"CancellationPolicy", 'String'>
    readonly daysBeforeCheckIn: FieldRef<"CancellationPolicy", 'Int'>
    readonly refundPercentage: FieldRef<"CancellationPolicy", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * CancellationPolicy findUnique
   */
  export type CancellationPolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancellationPolicy
     */
    select?: CancellationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancellationPolicy
     */
    omit?: CancellationPolicyOmit<ExtArgs> | null
    /**
     * Filter, which CancellationPolicy to fetch.
     */
    where: CancellationPolicyWhereUniqueInput
  }

  /**
   * CancellationPolicy findUniqueOrThrow
   */
  export type CancellationPolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancellationPolicy
     */
    select?: CancellationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancellationPolicy
     */
    omit?: CancellationPolicyOmit<ExtArgs> | null
    /**
     * Filter, which CancellationPolicy to fetch.
     */
    where: CancellationPolicyWhereUniqueInput
  }

  /**
   * CancellationPolicy findFirst
   */
  export type CancellationPolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancellationPolicy
     */
    select?: CancellationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancellationPolicy
     */
    omit?: CancellationPolicyOmit<ExtArgs> | null
    /**
     * Filter, which CancellationPolicy to fetch.
     */
    where?: CancellationPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CancellationPolicies to fetch.
     */
    orderBy?: CancellationPolicyOrderByWithRelationInput | CancellationPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CancellationPolicies.
     */
    cursor?: CancellationPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CancellationPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CancellationPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CancellationPolicies.
     */
    distinct?: CancellationPolicyScalarFieldEnum | CancellationPolicyScalarFieldEnum[]
  }

  /**
   * CancellationPolicy findFirstOrThrow
   */
  export type CancellationPolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancellationPolicy
     */
    select?: CancellationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancellationPolicy
     */
    omit?: CancellationPolicyOmit<ExtArgs> | null
    /**
     * Filter, which CancellationPolicy to fetch.
     */
    where?: CancellationPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CancellationPolicies to fetch.
     */
    orderBy?: CancellationPolicyOrderByWithRelationInput | CancellationPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CancellationPolicies.
     */
    cursor?: CancellationPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CancellationPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CancellationPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CancellationPolicies.
     */
    distinct?: CancellationPolicyScalarFieldEnum | CancellationPolicyScalarFieldEnum[]
  }

  /**
   * CancellationPolicy findMany
   */
  export type CancellationPolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancellationPolicy
     */
    select?: CancellationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancellationPolicy
     */
    omit?: CancellationPolicyOmit<ExtArgs> | null
    /**
     * Filter, which CancellationPolicies to fetch.
     */
    where?: CancellationPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CancellationPolicies to fetch.
     */
    orderBy?: CancellationPolicyOrderByWithRelationInput | CancellationPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CancellationPolicies.
     */
    cursor?: CancellationPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CancellationPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CancellationPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CancellationPolicies.
     */
    distinct?: CancellationPolicyScalarFieldEnum | CancellationPolicyScalarFieldEnum[]
  }

  /**
   * CancellationPolicy create
   */
  export type CancellationPolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancellationPolicy
     */
    select?: CancellationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancellationPolicy
     */
    omit?: CancellationPolicyOmit<ExtArgs> | null
    /**
     * The data needed to create a CancellationPolicy.
     */
    data: XOR<CancellationPolicyCreateInput, CancellationPolicyUncheckedCreateInput>
  }

  /**
   * CancellationPolicy createMany
   */
  export type CancellationPolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CancellationPolicies.
     */
    data: CancellationPolicyCreateManyInput | CancellationPolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CancellationPolicy createManyAndReturn
   */
  export type CancellationPolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancellationPolicy
     */
    select?: CancellationPolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CancellationPolicy
     */
    omit?: CancellationPolicyOmit<ExtArgs> | null
    /**
     * The data used to create many CancellationPolicies.
     */
    data: CancellationPolicyCreateManyInput | CancellationPolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CancellationPolicy update
   */
  export type CancellationPolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancellationPolicy
     */
    select?: CancellationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancellationPolicy
     */
    omit?: CancellationPolicyOmit<ExtArgs> | null
    /**
     * The data needed to update a CancellationPolicy.
     */
    data: XOR<CancellationPolicyUpdateInput, CancellationPolicyUncheckedUpdateInput>
    /**
     * Choose, which CancellationPolicy to update.
     */
    where: CancellationPolicyWhereUniqueInput
  }

  /**
   * CancellationPolicy updateMany
   */
  export type CancellationPolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CancellationPolicies.
     */
    data: XOR<CancellationPolicyUpdateManyMutationInput, CancellationPolicyUncheckedUpdateManyInput>
    /**
     * Filter which CancellationPolicies to update
     */
    where?: CancellationPolicyWhereInput
    /**
     * Limit how many CancellationPolicies to update.
     */
    limit?: number
  }

  /**
   * CancellationPolicy updateManyAndReturn
   */
  export type CancellationPolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancellationPolicy
     */
    select?: CancellationPolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CancellationPolicy
     */
    omit?: CancellationPolicyOmit<ExtArgs> | null
    /**
     * The data used to update CancellationPolicies.
     */
    data: XOR<CancellationPolicyUpdateManyMutationInput, CancellationPolicyUncheckedUpdateManyInput>
    /**
     * Filter which CancellationPolicies to update
     */
    where?: CancellationPolicyWhereInput
    /**
     * Limit how many CancellationPolicies to update.
     */
    limit?: number
  }

  /**
   * CancellationPolicy upsert
   */
  export type CancellationPolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancellationPolicy
     */
    select?: CancellationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancellationPolicy
     */
    omit?: CancellationPolicyOmit<ExtArgs> | null
    /**
     * The filter to search for the CancellationPolicy to update in case it exists.
     */
    where: CancellationPolicyWhereUniqueInput
    /**
     * In case the CancellationPolicy found by the `where` argument doesn't exist, create a new CancellationPolicy with this data.
     */
    create: XOR<CancellationPolicyCreateInput, CancellationPolicyUncheckedCreateInput>
    /**
     * In case the CancellationPolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CancellationPolicyUpdateInput, CancellationPolicyUncheckedUpdateInput>
  }

  /**
   * CancellationPolicy delete
   */
  export type CancellationPolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancellationPolicy
     */
    select?: CancellationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancellationPolicy
     */
    omit?: CancellationPolicyOmit<ExtArgs> | null
    /**
     * Filter which CancellationPolicy to delete.
     */
    where: CancellationPolicyWhereUniqueInput
  }

  /**
   * CancellationPolicy deleteMany
   */
  export type CancellationPolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CancellationPolicies to delete
     */
    where?: CancellationPolicyWhereInput
    /**
     * Limit how many CancellationPolicies to delete.
     */
    limit?: number
  }

  /**
   * CancellationPolicy without action
   */
  export type CancellationPolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancellationPolicy
     */
    select?: CancellationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancellationPolicy
     */
    omit?: CancellationPolicyOmit<ExtArgs> | null
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


  export const BookingScalarFieldEnum: {
    id: 'id',
    bookingCode: 'bookingCode',
    userId: 'userId',
    hotelId: 'hotelId',
    checkInDate: 'checkInDate',
    checkOutDate: 'checkOutDate',
    totalNights: 'totalNights',
    roomPrice: 'roomPrice',
    taxAmount: 'taxAmount',
    discountAmount: 'discountAmount',
    finalAmount: 'finalAmount',
    status: 'status',
    paymentStatus: 'paymentStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const BookingRoomScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    roomId: 'roomId',
    roomName: 'roomName',
    pricePerNight: 'pricePerNight',
    quantity: 'quantity'
  };

  export type BookingRoomScalarFieldEnum = (typeof BookingRoomScalarFieldEnum)[keyof typeof BookingRoomScalarFieldEnum]


  export const GuestInfoScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    fullName: 'fullName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    specialRequests: 'specialRequests'
  };

  export type GuestInfoScalarFieldEnum = (typeof GuestInfoScalarFieldEnum)[keyof typeof GuestInfoScalarFieldEnum]


  export const BookingHistoryScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    action: 'action',
    note: 'note',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type BookingHistoryScalarFieldEnum = (typeof BookingHistoryScalarFieldEnum)[keyof typeof BookingHistoryScalarFieldEnum]


  export const PaymentTransactionScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    transactionId: 'transactionId',
    provider: 'provider',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    rawData: 'rawData',
    createdAt: 'createdAt'
  };

  export type PaymentTransactionScalarFieldEnum = (typeof PaymentTransactionScalarFieldEnum)[keyof typeof PaymentTransactionScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    invoiceNumber: 'invoiceNumber',
    pdfUrl: 'pdfUrl',
    issuedAt: 'issuedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const PromotionScalarFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description',
    discountType: 'discountType',
    discountValue: 'discountValue',
    minOrderValue: 'minOrderValue',
    maxDiscount: 'maxDiscount',
    startDate: 'startDate',
    endDate: 'endDate',
    usageLimit: 'usageLimit',
    usedCount: 'usedCount',
    isActive: 'isActive'
  };

  export type PromotionScalarFieldEnum = (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum]


  export const BookingPromotionScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    promotionId: 'promotionId'
  };

  export type BookingPromotionScalarFieldEnum = (typeof BookingPromotionScalarFieldEnum)[keyof typeof BookingPromotionScalarFieldEnum]


  export const RefundRequestScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    amount: 'amount',
    reason: 'reason',
    status: 'status',
    processedAt: 'processedAt',
    adminNote: 'adminNote',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RefundRequestScalarFieldEnum = (typeof RefundRequestScalarFieldEnum)[keyof typeof RefundRequestScalarFieldEnum]


  export const CancellationPolicyScalarFieldEnum: {
    id: 'id',
    hotelId: 'hotelId',
    daysBeforeCheckIn: 'daysBeforeCheckIn',
    refundPercentage: 'refundPercentage'
  };

  export type CancellationPolicyScalarFieldEnum = (typeof CancellationPolicyScalarFieldEnum)[keyof typeof CancellationPolicyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentProvider'
   */
  export type EnumPaymentProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProvider'>
    


  /**
   * Reference to a field of type 'PaymentProvider[]'
   */
  export type ListEnumPaymentProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProvider[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PromotionType'
   */
  export type EnumPromotionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromotionType'>
    


  /**
   * Reference to a field of type 'PromotionType[]'
   */
  export type ListEnumPromotionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromotionType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RefundStatus'
   */
  export type EnumRefundStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RefundStatus'>
    


  /**
   * Reference to a field of type 'RefundStatus[]'
   */
  export type ListEnumRefundStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RefundStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: UuidFilter<"Booking"> | string
    bookingCode?: StringFilter<"Booking"> | string
    userId?: UuidFilter<"Booking"> | string
    hotelId?: UuidFilter<"Booking"> | string
    checkInDate?: DateTimeFilter<"Booking"> | Date | string
    checkOutDate?: DateTimeFilter<"Booking"> | Date | string
    totalNights?: IntFilter<"Booking"> | number
    roomPrice?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFilter<"Booking"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    rooms?: BookingRoomListRelationFilter
    guestInfo?: XOR<GuestInfoNullableScalarRelationFilter, GuestInfoWhereInput> | null
    histories?: BookingHistoryListRelationFilter
    paymentTransaction?: XOR<PaymentTransactionNullableScalarRelationFilter, PaymentTransactionWhereInput> | null
    invoice?: XOR<InvoiceNullableScalarRelationFilter, InvoiceWhereInput> | null
    refundRequests?: RefundRequestListRelationFilter
    appliedPromotion?: XOR<BookingPromotionNullableScalarRelationFilter, BookingPromotionWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    bookingCode?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    totalNights?: SortOrder
    roomPrice?: SortOrder
    taxAmount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rooms?: BookingRoomOrderByRelationAggregateInput
    guestInfo?: GuestInfoOrderByWithRelationInput
    histories?: BookingHistoryOrderByRelationAggregateInput
    paymentTransaction?: PaymentTransactionOrderByWithRelationInput
    invoice?: InvoiceOrderByWithRelationInput
    refundRequests?: RefundRequestOrderByRelationAggregateInput
    appliedPromotion?: BookingPromotionOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingCode?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: UuidFilter<"Booking"> | string
    hotelId?: UuidFilter<"Booking"> | string
    checkInDate?: DateTimeFilter<"Booking"> | Date | string
    checkOutDate?: DateTimeFilter<"Booking"> | Date | string
    totalNights?: IntFilter<"Booking"> | number
    roomPrice?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFilter<"Booking"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    rooms?: BookingRoomListRelationFilter
    guestInfo?: XOR<GuestInfoNullableScalarRelationFilter, GuestInfoWhereInput> | null
    histories?: BookingHistoryListRelationFilter
    paymentTransaction?: XOR<PaymentTransactionNullableScalarRelationFilter, PaymentTransactionWhereInput> | null
    invoice?: XOR<InvoiceNullableScalarRelationFilter, InvoiceWhereInput> | null
    refundRequests?: RefundRequestListRelationFilter
    appliedPromotion?: XOR<BookingPromotionNullableScalarRelationFilter, BookingPromotionWhereInput> | null
  }, "id" | "bookingCode">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    bookingCode?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    totalNights?: SortOrder
    roomPrice?: SortOrder
    taxAmount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Booking"> | string
    bookingCode?: StringWithAggregatesFilter<"Booking"> | string
    userId?: UuidWithAggregatesFilter<"Booking"> | string
    hotelId?: UuidWithAggregatesFilter<"Booking"> | string
    checkInDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    checkOutDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    totalNights?: IntWithAggregatesFilter<"Booking"> | number
    roomPrice?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Booking"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type BookingRoomWhereInput = {
    AND?: BookingRoomWhereInput | BookingRoomWhereInput[]
    OR?: BookingRoomWhereInput[]
    NOT?: BookingRoomWhereInput | BookingRoomWhereInput[]
    id?: UuidFilter<"BookingRoom"> | string
    bookingId?: UuidFilter<"BookingRoom"> | string
    roomId?: UuidFilter<"BookingRoom"> | string
    roomName?: StringFilter<"BookingRoom"> | string
    pricePerNight?: DecimalFilter<"BookingRoom"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"BookingRoom"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type BookingRoomOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    roomId?: SortOrder
    roomName?: SortOrder
    pricePerNight?: SortOrder
    quantity?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type BookingRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingRoomWhereInput | BookingRoomWhereInput[]
    OR?: BookingRoomWhereInput[]
    NOT?: BookingRoomWhereInput | BookingRoomWhereInput[]
    bookingId?: UuidFilter<"BookingRoom"> | string
    roomId?: UuidFilter<"BookingRoom"> | string
    roomName?: StringFilter<"BookingRoom"> | string
    pricePerNight?: DecimalFilter<"BookingRoom"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"BookingRoom"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id">

  export type BookingRoomOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    roomId?: SortOrder
    roomName?: SortOrder
    pricePerNight?: SortOrder
    quantity?: SortOrder
    _count?: BookingRoomCountOrderByAggregateInput
    _avg?: BookingRoomAvgOrderByAggregateInput
    _max?: BookingRoomMaxOrderByAggregateInput
    _min?: BookingRoomMinOrderByAggregateInput
    _sum?: BookingRoomSumOrderByAggregateInput
  }

  export type BookingRoomScalarWhereWithAggregatesInput = {
    AND?: BookingRoomScalarWhereWithAggregatesInput | BookingRoomScalarWhereWithAggregatesInput[]
    OR?: BookingRoomScalarWhereWithAggregatesInput[]
    NOT?: BookingRoomScalarWhereWithAggregatesInput | BookingRoomScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BookingRoom"> | string
    bookingId?: UuidWithAggregatesFilter<"BookingRoom"> | string
    roomId?: UuidWithAggregatesFilter<"BookingRoom"> | string
    roomName?: StringWithAggregatesFilter<"BookingRoom"> | string
    pricePerNight?: DecimalWithAggregatesFilter<"BookingRoom"> | Decimal | DecimalJsLike | number | string
    quantity?: IntWithAggregatesFilter<"BookingRoom"> | number
  }

  export type GuestInfoWhereInput = {
    AND?: GuestInfoWhereInput | GuestInfoWhereInput[]
    OR?: GuestInfoWhereInput[]
    NOT?: GuestInfoWhereInput | GuestInfoWhereInput[]
    id?: UuidFilter<"GuestInfo"> | string
    bookingId?: UuidFilter<"GuestInfo"> | string
    fullName?: StringFilter<"GuestInfo"> | string
    email?: StringFilter<"GuestInfo"> | string
    phoneNumber?: StringFilter<"GuestInfo"> | string
    specialRequests?: StringNullableFilter<"GuestInfo"> | string | null
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type GuestInfoOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    specialRequests?: SortOrderInput | SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type GuestInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    AND?: GuestInfoWhereInput | GuestInfoWhereInput[]
    OR?: GuestInfoWhereInput[]
    NOT?: GuestInfoWhereInput | GuestInfoWhereInput[]
    fullName?: StringFilter<"GuestInfo"> | string
    email?: StringFilter<"GuestInfo"> | string
    phoneNumber?: StringFilter<"GuestInfo"> | string
    specialRequests?: StringNullableFilter<"GuestInfo"> | string | null
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "bookingId">

  export type GuestInfoOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    specialRequests?: SortOrderInput | SortOrder
    _count?: GuestInfoCountOrderByAggregateInput
    _max?: GuestInfoMaxOrderByAggregateInput
    _min?: GuestInfoMinOrderByAggregateInput
  }

  export type GuestInfoScalarWhereWithAggregatesInput = {
    AND?: GuestInfoScalarWhereWithAggregatesInput | GuestInfoScalarWhereWithAggregatesInput[]
    OR?: GuestInfoScalarWhereWithAggregatesInput[]
    NOT?: GuestInfoScalarWhereWithAggregatesInput | GuestInfoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GuestInfo"> | string
    bookingId?: UuidWithAggregatesFilter<"GuestInfo"> | string
    fullName?: StringWithAggregatesFilter<"GuestInfo"> | string
    email?: StringWithAggregatesFilter<"GuestInfo"> | string
    phoneNumber?: StringWithAggregatesFilter<"GuestInfo"> | string
    specialRequests?: StringNullableWithAggregatesFilter<"GuestInfo"> | string | null
  }

  export type BookingHistoryWhereInput = {
    AND?: BookingHistoryWhereInput | BookingHistoryWhereInput[]
    OR?: BookingHistoryWhereInput[]
    NOT?: BookingHistoryWhereInput | BookingHistoryWhereInput[]
    id?: UuidFilter<"BookingHistory"> | string
    bookingId?: UuidFilter<"BookingHistory"> | string
    action?: StringFilter<"BookingHistory"> | string
    note?: StringNullableFilter<"BookingHistory"> | string | null
    createdBy?: UuidNullableFilter<"BookingHistory"> | string | null
    createdAt?: DateTimeFilter<"BookingHistory"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type BookingHistoryOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    action?: SortOrder
    note?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type BookingHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingHistoryWhereInput | BookingHistoryWhereInput[]
    OR?: BookingHistoryWhereInput[]
    NOT?: BookingHistoryWhereInput | BookingHistoryWhereInput[]
    bookingId?: UuidFilter<"BookingHistory"> | string
    action?: StringFilter<"BookingHistory"> | string
    note?: StringNullableFilter<"BookingHistory"> | string | null
    createdBy?: UuidNullableFilter<"BookingHistory"> | string | null
    createdAt?: DateTimeFilter<"BookingHistory"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id">

  export type BookingHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    action?: SortOrder
    note?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BookingHistoryCountOrderByAggregateInput
    _max?: BookingHistoryMaxOrderByAggregateInput
    _min?: BookingHistoryMinOrderByAggregateInput
  }

  export type BookingHistoryScalarWhereWithAggregatesInput = {
    AND?: BookingHistoryScalarWhereWithAggregatesInput | BookingHistoryScalarWhereWithAggregatesInput[]
    OR?: BookingHistoryScalarWhereWithAggregatesInput[]
    NOT?: BookingHistoryScalarWhereWithAggregatesInput | BookingHistoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BookingHistory"> | string
    bookingId?: UuidWithAggregatesFilter<"BookingHistory"> | string
    action?: StringWithAggregatesFilter<"BookingHistory"> | string
    note?: StringNullableWithAggregatesFilter<"BookingHistory"> | string | null
    createdBy?: UuidNullableWithAggregatesFilter<"BookingHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BookingHistory"> | Date | string
  }

  export type PaymentTransactionWhereInput = {
    AND?: PaymentTransactionWhereInput | PaymentTransactionWhereInput[]
    OR?: PaymentTransactionWhereInput[]
    NOT?: PaymentTransactionWhereInput | PaymentTransactionWhereInput[]
    id?: UuidFilter<"PaymentTransaction"> | string
    bookingId?: UuidFilter<"PaymentTransaction"> | string
    transactionId?: StringNullableFilter<"PaymentTransaction"> | string | null
    provider?: EnumPaymentProviderFilter<"PaymentTransaction"> | $Enums.PaymentProvider
    amount?: DecimalFilter<"PaymentTransaction"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"PaymentTransaction"> | string
    status?: StringFilter<"PaymentTransaction"> | string
    rawData?: JsonNullableFilter<"PaymentTransaction">
    createdAt?: DateTimeFilter<"PaymentTransaction"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type PaymentTransactionOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    provider?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    rawData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type PaymentTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    AND?: PaymentTransactionWhereInput | PaymentTransactionWhereInput[]
    OR?: PaymentTransactionWhereInput[]
    NOT?: PaymentTransactionWhereInput | PaymentTransactionWhereInput[]
    transactionId?: StringNullableFilter<"PaymentTransaction"> | string | null
    provider?: EnumPaymentProviderFilter<"PaymentTransaction"> | $Enums.PaymentProvider
    amount?: DecimalFilter<"PaymentTransaction"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"PaymentTransaction"> | string
    status?: StringFilter<"PaymentTransaction"> | string
    rawData?: JsonNullableFilter<"PaymentTransaction">
    createdAt?: DateTimeFilter<"PaymentTransaction"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "bookingId">

  export type PaymentTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    provider?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    rawData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PaymentTransactionCountOrderByAggregateInput
    _avg?: PaymentTransactionAvgOrderByAggregateInput
    _max?: PaymentTransactionMaxOrderByAggregateInput
    _min?: PaymentTransactionMinOrderByAggregateInput
    _sum?: PaymentTransactionSumOrderByAggregateInput
  }

  export type PaymentTransactionScalarWhereWithAggregatesInput = {
    AND?: PaymentTransactionScalarWhereWithAggregatesInput | PaymentTransactionScalarWhereWithAggregatesInput[]
    OR?: PaymentTransactionScalarWhereWithAggregatesInput[]
    NOT?: PaymentTransactionScalarWhereWithAggregatesInput | PaymentTransactionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PaymentTransaction"> | string
    bookingId?: UuidWithAggregatesFilter<"PaymentTransaction"> | string
    transactionId?: StringNullableWithAggregatesFilter<"PaymentTransaction"> | string | null
    provider?: EnumPaymentProviderWithAggregatesFilter<"PaymentTransaction"> | $Enums.PaymentProvider
    amount?: DecimalWithAggregatesFilter<"PaymentTransaction"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"PaymentTransaction"> | string
    status?: StringWithAggregatesFilter<"PaymentTransaction"> | string
    rawData?: JsonNullableWithAggregatesFilter<"PaymentTransaction">
    createdAt?: DateTimeWithAggregatesFilter<"PaymentTransaction"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: UuidFilter<"Invoice"> | string
    bookingId?: UuidFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    pdfUrl?: StringNullableFilter<"Invoice"> | string | null
    issuedAt?: DateTimeFilter<"Invoice"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    invoiceNumber?: SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    issuedAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    invoiceNumber?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    pdfUrl?: StringNullableFilter<"Invoice"> | string | null
    issuedAt?: DateTimeFilter<"Invoice"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "bookingId" | "invoiceNumber">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    invoiceNumber?: SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    issuedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Invoice"> | string
    bookingId?: UuidWithAggregatesFilter<"Invoice"> | string
    invoiceNumber?: StringWithAggregatesFilter<"Invoice"> | string
    pdfUrl?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    issuedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type PromotionWhereInput = {
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    id?: UuidFilter<"Promotion"> | string
    code?: StringFilter<"Promotion"> | string
    description?: StringNullableFilter<"Promotion"> | string | null
    discountType?: EnumPromotionTypeFilter<"Promotion"> | $Enums.PromotionType
    discountValue?: DecimalFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    minOrderValue?: DecimalNullableFilter<"Promotion"> | Decimal | DecimalJsLike | number | string | null
    maxDiscount?: DecimalNullableFilter<"Promotion"> | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeFilter<"Promotion"> | Date | string
    endDate?: DateTimeFilter<"Promotion"> | Date | string
    usageLimit?: IntNullableFilter<"Promotion"> | number | null
    usedCount?: IntFilter<"Promotion"> | number
    isActive?: BoolFilter<"Promotion"> | boolean
    bookings?: BookingPromotionListRelationFilter
  }

  export type PromotionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    minOrderValue?: SortOrderInput | SortOrder
    maxDiscount?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    usageLimit?: SortOrderInput | SortOrder
    usedCount?: SortOrder
    isActive?: SortOrder
    bookings?: BookingPromotionOrderByRelationAggregateInput
  }

  export type PromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    description?: StringNullableFilter<"Promotion"> | string | null
    discountType?: EnumPromotionTypeFilter<"Promotion"> | $Enums.PromotionType
    discountValue?: DecimalFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    minOrderValue?: DecimalNullableFilter<"Promotion"> | Decimal | DecimalJsLike | number | string | null
    maxDiscount?: DecimalNullableFilter<"Promotion"> | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeFilter<"Promotion"> | Date | string
    endDate?: DateTimeFilter<"Promotion"> | Date | string
    usageLimit?: IntNullableFilter<"Promotion"> | number | null
    usedCount?: IntFilter<"Promotion"> | number
    isActive?: BoolFilter<"Promotion"> | boolean
    bookings?: BookingPromotionListRelationFilter
  }, "id" | "code">

  export type PromotionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    minOrderValue?: SortOrderInput | SortOrder
    maxDiscount?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    usageLimit?: SortOrderInput | SortOrder
    usedCount?: SortOrder
    isActive?: SortOrder
    _count?: PromotionCountOrderByAggregateInput
    _avg?: PromotionAvgOrderByAggregateInput
    _max?: PromotionMaxOrderByAggregateInput
    _min?: PromotionMinOrderByAggregateInput
    _sum?: PromotionSumOrderByAggregateInput
  }

  export type PromotionScalarWhereWithAggregatesInput = {
    AND?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    OR?: PromotionScalarWhereWithAggregatesInput[]
    NOT?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Promotion"> | string
    code?: StringWithAggregatesFilter<"Promotion"> | string
    description?: StringNullableWithAggregatesFilter<"Promotion"> | string | null
    discountType?: EnumPromotionTypeWithAggregatesFilter<"Promotion"> | $Enums.PromotionType
    discountValue?: DecimalWithAggregatesFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    minOrderValue?: DecimalNullableWithAggregatesFilter<"Promotion"> | Decimal | DecimalJsLike | number | string | null
    maxDiscount?: DecimalNullableWithAggregatesFilter<"Promotion"> | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    usageLimit?: IntNullableWithAggregatesFilter<"Promotion"> | number | null
    usedCount?: IntWithAggregatesFilter<"Promotion"> | number
    isActive?: BoolWithAggregatesFilter<"Promotion"> | boolean
  }

  export type BookingPromotionWhereInput = {
    AND?: BookingPromotionWhereInput | BookingPromotionWhereInput[]
    OR?: BookingPromotionWhereInput[]
    NOT?: BookingPromotionWhereInput | BookingPromotionWhereInput[]
    id?: UuidFilter<"BookingPromotion"> | string
    bookingId?: UuidFilter<"BookingPromotion"> | string
    promotionId?: UuidFilter<"BookingPromotion"> | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    promotion?: XOR<PromotionScalarRelationFilter, PromotionWhereInput>
  }

  export type BookingPromotionOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    promotionId?: SortOrder
    booking?: BookingOrderByWithRelationInput
    promotion?: PromotionOrderByWithRelationInput
  }

  export type BookingPromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    AND?: BookingPromotionWhereInput | BookingPromotionWhereInput[]
    OR?: BookingPromotionWhereInput[]
    NOT?: BookingPromotionWhereInput | BookingPromotionWhereInput[]
    promotionId?: UuidFilter<"BookingPromotion"> | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    promotion?: XOR<PromotionScalarRelationFilter, PromotionWhereInput>
  }, "id" | "bookingId">

  export type BookingPromotionOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    promotionId?: SortOrder
    _count?: BookingPromotionCountOrderByAggregateInput
    _max?: BookingPromotionMaxOrderByAggregateInput
    _min?: BookingPromotionMinOrderByAggregateInput
  }

  export type BookingPromotionScalarWhereWithAggregatesInput = {
    AND?: BookingPromotionScalarWhereWithAggregatesInput | BookingPromotionScalarWhereWithAggregatesInput[]
    OR?: BookingPromotionScalarWhereWithAggregatesInput[]
    NOT?: BookingPromotionScalarWhereWithAggregatesInput | BookingPromotionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BookingPromotion"> | string
    bookingId?: UuidWithAggregatesFilter<"BookingPromotion"> | string
    promotionId?: UuidWithAggregatesFilter<"BookingPromotion"> | string
  }

  export type RefundRequestWhereInput = {
    AND?: RefundRequestWhereInput | RefundRequestWhereInput[]
    OR?: RefundRequestWhereInput[]
    NOT?: RefundRequestWhereInput | RefundRequestWhereInput[]
    id?: UuidFilter<"RefundRequest"> | string
    bookingId?: UuidFilter<"RefundRequest"> | string
    amount?: DecimalFilter<"RefundRequest"> | Decimal | DecimalJsLike | number | string
    reason?: StringFilter<"RefundRequest"> | string
    status?: EnumRefundStatusFilter<"RefundRequest"> | $Enums.RefundStatus
    processedAt?: DateTimeNullableFilter<"RefundRequest"> | Date | string | null
    adminNote?: StringNullableFilter<"RefundRequest"> | string | null
    createdAt?: DateTimeFilter<"RefundRequest"> | Date | string
    updatedAt?: DateTimeFilter<"RefundRequest"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type RefundRequestOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    adminNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type RefundRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RefundRequestWhereInput | RefundRequestWhereInput[]
    OR?: RefundRequestWhereInput[]
    NOT?: RefundRequestWhereInput | RefundRequestWhereInput[]
    bookingId?: UuidFilter<"RefundRequest"> | string
    amount?: DecimalFilter<"RefundRequest"> | Decimal | DecimalJsLike | number | string
    reason?: StringFilter<"RefundRequest"> | string
    status?: EnumRefundStatusFilter<"RefundRequest"> | $Enums.RefundStatus
    processedAt?: DateTimeNullableFilter<"RefundRequest"> | Date | string | null
    adminNote?: StringNullableFilter<"RefundRequest"> | string | null
    createdAt?: DateTimeFilter<"RefundRequest"> | Date | string
    updatedAt?: DateTimeFilter<"RefundRequest"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id">

  export type RefundRequestOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    adminNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RefundRequestCountOrderByAggregateInput
    _avg?: RefundRequestAvgOrderByAggregateInput
    _max?: RefundRequestMaxOrderByAggregateInput
    _min?: RefundRequestMinOrderByAggregateInput
    _sum?: RefundRequestSumOrderByAggregateInput
  }

  export type RefundRequestScalarWhereWithAggregatesInput = {
    AND?: RefundRequestScalarWhereWithAggregatesInput | RefundRequestScalarWhereWithAggregatesInput[]
    OR?: RefundRequestScalarWhereWithAggregatesInput[]
    NOT?: RefundRequestScalarWhereWithAggregatesInput | RefundRequestScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RefundRequest"> | string
    bookingId?: UuidWithAggregatesFilter<"RefundRequest"> | string
    amount?: DecimalWithAggregatesFilter<"RefundRequest"> | Decimal | DecimalJsLike | number | string
    reason?: StringWithAggregatesFilter<"RefundRequest"> | string
    status?: EnumRefundStatusWithAggregatesFilter<"RefundRequest"> | $Enums.RefundStatus
    processedAt?: DateTimeNullableWithAggregatesFilter<"RefundRequest"> | Date | string | null
    adminNote?: StringNullableWithAggregatesFilter<"RefundRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RefundRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RefundRequest"> | Date | string
  }

  export type CancellationPolicyWhereInput = {
    AND?: CancellationPolicyWhereInput | CancellationPolicyWhereInput[]
    OR?: CancellationPolicyWhereInput[]
    NOT?: CancellationPolicyWhereInput | CancellationPolicyWhereInput[]
    id?: UuidFilter<"CancellationPolicy"> | string
    hotelId?: UuidFilter<"CancellationPolicy"> | string
    daysBeforeCheckIn?: IntFilter<"CancellationPolicy"> | number
    refundPercentage?: DecimalFilter<"CancellationPolicy"> | Decimal | DecimalJsLike | number | string
  }

  export type CancellationPolicyOrderByWithRelationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    daysBeforeCheckIn?: SortOrder
    refundPercentage?: SortOrder
  }

  export type CancellationPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CancellationPolicyWhereInput | CancellationPolicyWhereInput[]
    OR?: CancellationPolicyWhereInput[]
    NOT?: CancellationPolicyWhereInput | CancellationPolicyWhereInput[]
    hotelId?: UuidFilter<"CancellationPolicy"> | string
    daysBeforeCheckIn?: IntFilter<"CancellationPolicy"> | number
    refundPercentage?: DecimalFilter<"CancellationPolicy"> | Decimal | DecimalJsLike | number | string
  }, "id">

  export type CancellationPolicyOrderByWithAggregationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    daysBeforeCheckIn?: SortOrder
    refundPercentage?: SortOrder
    _count?: CancellationPolicyCountOrderByAggregateInput
    _avg?: CancellationPolicyAvgOrderByAggregateInput
    _max?: CancellationPolicyMaxOrderByAggregateInput
    _min?: CancellationPolicyMinOrderByAggregateInput
    _sum?: CancellationPolicySumOrderByAggregateInput
  }

  export type CancellationPolicyScalarWhereWithAggregatesInput = {
    AND?: CancellationPolicyScalarWhereWithAggregatesInput | CancellationPolicyScalarWhereWithAggregatesInput[]
    OR?: CancellationPolicyScalarWhereWithAggregatesInput[]
    NOT?: CancellationPolicyScalarWhereWithAggregatesInput | CancellationPolicyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CancellationPolicy"> | string
    hotelId?: UuidWithAggregatesFilter<"CancellationPolicy"> | string
    daysBeforeCheckIn?: IntWithAggregatesFilter<"CancellationPolicy"> | number
    refundPercentage?: DecimalWithAggregatesFilter<"CancellationPolicy"> | Decimal | DecimalJsLike | number | string
  }

  export type BookingCreateInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: BookingRoomCreateNestedManyWithoutBookingInput
    guestInfo?: GuestInfoCreateNestedOneWithoutBookingInput
    histories?: BookingHistoryCreateNestedManyWithoutBookingInput
    paymentTransaction?: PaymentTransactionCreateNestedOneWithoutBookingInput
    invoice?: InvoiceCreateNestedOneWithoutBookingInput
    refundRequests?: RefundRequestCreateNestedManyWithoutBookingInput
    appliedPromotion?: BookingPromotionCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: BookingRoomUncheckedCreateNestedManyWithoutBookingInput
    guestInfo?: GuestInfoUncheckedCreateNestedOneWithoutBookingInput
    histories?: BookingHistoryUncheckedCreateNestedManyWithoutBookingInput
    paymentTransaction?: PaymentTransactionUncheckedCreateNestedOneWithoutBookingInput
    invoice?: InvoiceUncheckedCreateNestedOneWithoutBookingInput
    refundRequests?: RefundRequestUncheckedCreateNestedManyWithoutBookingInput
    appliedPromotion?: BookingPromotionUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: BookingRoomUpdateManyWithoutBookingNestedInput
    guestInfo?: GuestInfoUpdateOneWithoutBookingNestedInput
    histories?: BookingHistoryUpdateManyWithoutBookingNestedInput
    paymentTransaction?: PaymentTransactionUpdateOneWithoutBookingNestedInput
    invoice?: InvoiceUpdateOneWithoutBookingNestedInput
    refundRequests?: RefundRequestUpdateManyWithoutBookingNestedInput
    appliedPromotion?: BookingPromotionUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: BookingRoomUncheckedUpdateManyWithoutBookingNestedInput
    guestInfo?: GuestInfoUncheckedUpdateOneWithoutBookingNestedInput
    histories?: BookingHistoryUncheckedUpdateManyWithoutBookingNestedInput
    paymentTransaction?: PaymentTransactionUncheckedUpdateOneWithoutBookingNestedInput
    invoice?: InvoiceUncheckedUpdateOneWithoutBookingNestedInput
    refundRequests?: RefundRequestUncheckedUpdateManyWithoutBookingNestedInput
    appliedPromotion?: BookingPromotionUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingRoomCreateInput = {
    id?: string
    roomId: string
    roomName: string
    pricePerNight: Decimal | DecimalJsLike | number | string
    quantity?: number
    booking: BookingCreateNestedOneWithoutRoomsInput
  }

  export type BookingRoomUncheckedCreateInput = {
    id?: string
    bookingId: string
    roomId: string
    roomName: string
    pricePerNight: Decimal | DecimalJsLike | number | string
    quantity?: number
  }

  export type BookingRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    pricePerNight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    booking?: BookingUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type BookingRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    pricePerNight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BookingRoomCreateManyInput = {
    id?: string
    bookingId: string
    roomId: string
    roomName: string
    pricePerNight: Decimal | DecimalJsLike | number | string
    quantity?: number
  }

  export type BookingRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    pricePerNight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BookingRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    pricePerNight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type GuestInfoCreateInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    specialRequests?: string | null
    booking: BookingCreateNestedOneWithoutGuestInfoInput
  }

  export type GuestInfoUncheckedCreateInput = {
    id?: string
    bookingId: string
    fullName: string
    email: string
    phoneNumber: string
    specialRequests?: string | null
  }

  export type GuestInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    booking?: BookingUpdateOneRequiredWithoutGuestInfoNestedInput
  }

  export type GuestInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuestInfoCreateManyInput = {
    id?: string
    bookingId: string
    fullName: string
    email: string
    phoneNumber: string
    specialRequests?: string | null
  }

  export type GuestInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuestInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingHistoryCreateInput = {
    id?: string
    action: string
    note?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutHistoriesInput
  }

  export type BookingHistoryUncheckedCreateInput = {
    id?: string
    bookingId: string
    action: string
    note?: string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type BookingHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type BookingHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingHistoryCreateManyInput = {
    id?: string
    bookingId: string
    action: string
    note?: string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type BookingHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionCreateInput = {
    id?: string
    transactionId?: string | null
    provider: $Enums.PaymentProvider
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status: string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutPaymentTransactionInput
  }

  export type PaymentTransactionUncheckedCreateInput = {
    id?: string
    bookingId: string
    transactionId?: string | null
    provider: $Enums.PaymentProvider
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status: string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PaymentTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutPaymentTransactionNestedInput
  }

  export type PaymentTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionCreateManyInput = {
    id?: string
    bookingId: string
    transactionId?: string | null
    provider: $Enums.PaymentProvider
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status: string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PaymentTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    invoiceNumber: string
    pdfUrl?: string | null
    issuedAt?: Date | string
    booking: BookingCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    bookingId: string
    invoiceNumber: string
    pdfUrl?: string | null
    issuedAt?: Date | string
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyInput = {
    id?: string
    bookingId: string
    invoiceNumber: string
    pdfUrl?: string | null
    issuedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateInput = {
    id?: string
    code: string
    description?: string | null
    discountType: $Enums.PromotionType
    discountValue: Decimal | DecimalJsLike | number | string
    minOrderValue?: Decimal | DecimalJsLike | number | string | null
    maxDiscount?: Decimal | DecimalJsLike | number | string | null
    startDate: Date | string
    endDate: Date | string
    usageLimit?: number | null
    usedCount?: number
    isActive?: boolean
    bookings?: BookingPromotionCreateNestedManyWithoutPromotionInput
  }

  export type PromotionUncheckedCreateInput = {
    id?: string
    code: string
    description?: string | null
    discountType: $Enums.PromotionType
    discountValue: Decimal | DecimalJsLike | number | string
    minOrderValue?: Decimal | DecimalJsLike | number | string | null
    maxDiscount?: Decimal | DecimalJsLike | number | string | null
    startDate: Date | string
    endDate: Date | string
    usageLimit?: number | null
    usedCount?: number
    isActive?: boolean
    bookings?: BookingPromotionUncheckedCreateNestedManyWithoutPromotionInput
  }

  export type PromotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discountType?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    discountValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxDiscount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    bookings?: BookingPromotionUpdateManyWithoutPromotionNestedInput
  }

  export type PromotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discountType?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    discountValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxDiscount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    bookings?: BookingPromotionUncheckedUpdateManyWithoutPromotionNestedInput
  }

  export type PromotionCreateManyInput = {
    id?: string
    code: string
    description?: string | null
    discountType: $Enums.PromotionType
    discountValue: Decimal | DecimalJsLike | number | string
    minOrderValue?: Decimal | DecimalJsLike | number | string | null
    maxDiscount?: Decimal | DecimalJsLike | number | string | null
    startDate: Date | string
    endDate: Date | string
    usageLimit?: number | null
    usedCount?: number
    isActive?: boolean
  }

  export type PromotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discountType?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    discountValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxDiscount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PromotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discountType?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    discountValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxDiscount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingPromotionCreateInput = {
    id?: string
    booking: BookingCreateNestedOneWithoutAppliedPromotionInput
    promotion: PromotionCreateNestedOneWithoutBookingsInput
  }

  export type BookingPromotionUncheckedCreateInput = {
    id?: string
    bookingId: string
    promotionId: string
  }

  export type BookingPromotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutAppliedPromotionNestedInput
    promotion?: PromotionUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingPromotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    promotionId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingPromotionCreateManyInput = {
    id?: string
    bookingId: string
    promotionId: string
  }

  export type BookingPromotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type BookingPromotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    promotionId?: StringFieldUpdateOperationsInput | string
  }

  export type RefundRequestCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    reason: string
    status?: $Enums.RefundStatus
    processedAt?: Date | string | null
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: BookingCreateNestedOneWithoutRefundRequestsInput
  }

  export type RefundRequestUncheckedCreateInput = {
    id?: string
    bookingId: string
    amount: Decimal | DecimalJsLike | number | string
    reason: string
    status?: $Enums.RefundStatus
    processedAt?: Date | string | null
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefundRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutRefundRequestsNestedInput
  }

  export type RefundRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundRequestCreateManyInput = {
    id?: string
    bookingId: string
    amount: Decimal | DecimalJsLike | number | string
    reason: string
    status?: $Enums.RefundStatus
    processedAt?: Date | string | null
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefundRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CancellationPolicyCreateInput = {
    id?: string
    hotelId: string
    daysBeforeCheckIn: number
    refundPercentage: Decimal | DecimalJsLike | number | string
  }

  export type CancellationPolicyUncheckedCreateInput = {
    id?: string
    hotelId: string
    daysBeforeCheckIn: number
    refundPercentage: Decimal | DecimalJsLike | number | string
  }

  export type CancellationPolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    daysBeforeCheckIn?: IntFieldUpdateOperationsInput | number
    refundPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CancellationPolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    daysBeforeCheckIn?: IntFieldUpdateOperationsInput | number
    refundPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CancellationPolicyCreateManyInput = {
    id?: string
    hotelId: string
    daysBeforeCheckIn: number
    refundPercentage: Decimal | DecimalJsLike | number | string
  }

  export type CancellationPolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    daysBeforeCheckIn?: IntFieldUpdateOperationsInput | number
    refundPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CancellationPolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    daysBeforeCheckIn?: IntFieldUpdateOperationsInput | number
    refundPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type BookingRoomListRelationFilter = {
    every?: BookingRoomWhereInput
    some?: BookingRoomWhereInput
    none?: BookingRoomWhereInput
  }

  export type GuestInfoNullableScalarRelationFilter = {
    is?: GuestInfoWhereInput | null
    isNot?: GuestInfoWhereInput | null
  }

  export type BookingHistoryListRelationFilter = {
    every?: BookingHistoryWhereInput
    some?: BookingHistoryWhereInput
    none?: BookingHistoryWhereInput
  }

  export type PaymentTransactionNullableScalarRelationFilter = {
    is?: PaymentTransactionWhereInput | null
    isNot?: PaymentTransactionWhereInput | null
  }

  export type InvoiceNullableScalarRelationFilter = {
    is?: InvoiceWhereInput | null
    isNot?: InvoiceWhereInput | null
  }

  export type RefundRequestListRelationFilter = {
    every?: RefundRequestWhereInput
    some?: RefundRequestWhereInput
    none?: RefundRequestWhereInput
  }

  export type BookingPromotionNullableScalarRelationFilter = {
    is?: BookingPromotionWhereInput | null
    isNot?: BookingPromotionWhereInput | null
  }

  export type BookingRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefundRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    bookingCode?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    totalNights?: SortOrder
    roomPrice?: SortOrder
    taxAmount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    totalNights?: SortOrder
    roomPrice?: SortOrder
    taxAmount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingCode?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    totalNights?: SortOrder
    roomPrice?: SortOrder
    taxAmount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    bookingCode?: SortOrder
    userId?: SortOrder
    hotelId?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    totalNights?: SortOrder
    roomPrice?: SortOrder
    taxAmount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    totalNights?: SortOrder
    roomPrice?: SortOrder
    taxAmount?: SortOrder
    discountAmount?: SortOrder
    finalAmount?: SortOrder
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

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type BookingRoomCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    roomId?: SortOrder
    roomName?: SortOrder
    pricePerNight?: SortOrder
    quantity?: SortOrder
  }

  export type BookingRoomAvgOrderByAggregateInput = {
    pricePerNight?: SortOrder
    quantity?: SortOrder
  }

  export type BookingRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    roomId?: SortOrder
    roomName?: SortOrder
    pricePerNight?: SortOrder
    quantity?: SortOrder
  }

  export type BookingRoomMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    roomId?: SortOrder
    roomName?: SortOrder
    pricePerNight?: SortOrder
    quantity?: SortOrder
  }

  export type BookingRoomSumOrderByAggregateInput = {
    pricePerNight?: SortOrder
    quantity?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GuestInfoCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    specialRequests?: SortOrder
  }

  export type GuestInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    specialRequests?: SortOrder
  }

  export type GuestInfoMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    specialRequests?: SortOrder
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type BookingHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    action?: SortOrder
    note?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    action?: SortOrder
    note?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    action?: SortOrder
    note?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPaymentProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderFilter<$PrismaModel> | $Enums.PaymentProvider
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PaymentTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    transactionId?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    rawData?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    transactionId?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    transactionId?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentProviderFilter<$PrismaModel>
    _max?: NestedEnumPaymentProviderFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    invoiceNumber?: SortOrder
    pdfUrl?: SortOrder
    issuedAt?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    invoiceNumber?: SortOrder
    pdfUrl?: SortOrder
    issuedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    invoiceNumber?: SortOrder
    pdfUrl?: SortOrder
    issuedAt?: SortOrder
  }

  export type EnumPromotionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeFilter<$PrismaModel> | $Enums.PromotionType
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BookingPromotionListRelationFilter = {
    every?: BookingPromotionWhereInput
    some?: BookingPromotionWhereInput
    none?: BookingPromotionWhereInput
  }

  export type BookingPromotionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromotionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    minOrderValue?: SortOrder
    maxDiscount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    usageLimit?: SortOrder
    usedCount?: SortOrder
    isActive?: SortOrder
  }

  export type PromotionAvgOrderByAggregateInput = {
    discountValue?: SortOrder
    minOrderValue?: SortOrder
    maxDiscount?: SortOrder
    usageLimit?: SortOrder
    usedCount?: SortOrder
  }

  export type PromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    minOrderValue?: SortOrder
    maxDiscount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    usageLimit?: SortOrder
    usedCount?: SortOrder
    isActive?: SortOrder
  }

  export type PromotionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    minOrderValue?: SortOrder
    maxDiscount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    usageLimit?: SortOrder
    usedCount?: SortOrder
    isActive?: SortOrder
  }

  export type PromotionSumOrderByAggregateInput = {
    discountValue?: SortOrder
    minOrderValue?: SortOrder
    maxDiscount?: SortOrder
    usageLimit?: SortOrder
    usedCount?: SortOrder
  }

  export type EnumPromotionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PromotionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPromotionTypeFilter<$PrismaModel>
    _max?: NestedEnumPromotionTypeFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PromotionScalarRelationFilter = {
    is?: PromotionWhereInput
    isNot?: PromotionWhereInput
  }

  export type BookingPromotionCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    promotionId?: SortOrder
  }

  export type BookingPromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    promotionId?: SortOrder
  }

  export type BookingPromotionMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    promotionId?: SortOrder
  }

  export type EnumRefundStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRefundStatusFilter<$PrismaModel> | $Enums.RefundStatus
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

  export type RefundRequestCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    processedAt?: SortOrder
    adminNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefundRequestAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type RefundRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    processedAt?: SortOrder
    adminNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefundRequestMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    processedAt?: SortOrder
    adminNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefundRequestSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumRefundStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRefundStatusWithAggregatesFilter<$PrismaModel> | $Enums.RefundStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRefundStatusFilter<$PrismaModel>
    _max?: NestedEnumRefundStatusFilter<$PrismaModel>
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

  export type CancellationPolicyCountOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    daysBeforeCheckIn?: SortOrder
    refundPercentage?: SortOrder
  }

  export type CancellationPolicyAvgOrderByAggregateInput = {
    daysBeforeCheckIn?: SortOrder
    refundPercentage?: SortOrder
  }

  export type CancellationPolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    daysBeforeCheckIn?: SortOrder
    refundPercentage?: SortOrder
  }

  export type CancellationPolicyMinOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    daysBeforeCheckIn?: SortOrder
    refundPercentage?: SortOrder
  }

  export type CancellationPolicySumOrderByAggregateInput = {
    daysBeforeCheckIn?: SortOrder
    refundPercentage?: SortOrder
  }

  export type BookingRoomCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput> | BookingRoomCreateWithoutBookingInput[] | BookingRoomUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutBookingInput | BookingRoomCreateOrConnectWithoutBookingInput[]
    createMany?: BookingRoomCreateManyBookingInputEnvelope
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
  }

  export type GuestInfoCreateNestedOneWithoutBookingInput = {
    create?: XOR<GuestInfoCreateWithoutBookingInput, GuestInfoUncheckedCreateWithoutBookingInput>
    connectOrCreate?: GuestInfoCreateOrConnectWithoutBookingInput
    connect?: GuestInfoWhereUniqueInput
  }

  export type BookingHistoryCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingHistoryCreateWithoutBookingInput, BookingHistoryUncheckedCreateWithoutBookingInput> | BookingHistoryCreateWithoutBookingInput[] | BookingHistoryUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingHistoryCreateOrConnectWithoutBookingInput | BookingHistoryCreateOrConnectWithoutBookingInput[]
    createMany?: BookingHistoryCreateManyBookingInputEnvelope
    connect?: BookingHistoryWhereUniqueInput | BookingHistoryWhereUniqueInput[]
  }

  export type PaymentTransactionCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentTransactionCreateWithoutBookingInput, PaymentTransactionUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutBookingInput
    connect?: PaymentTransactionWhereUniqueInput
  }

  export type InvoiceCreateNestedOneWithoutBookingInput = {
    create?: XOR<InvoiceCreateWithoutBookingInput, InvoiceUncheckedCreateWithoutBookingInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutBookingInput
    connect?: InvoiceWhereUniqueInput
  }

  export type RefundRequestCreateNestedManyWithoutBookingInput = {
    create?: XOR<RefundRequestCreateWithoutBookingInput, RefundRequestUncheckedCreateWithoutBookingInput> | RefundRequestCreateWithoutBookingInput[] | RefundRequestUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: RefundRequestCreateOrConnectWithoutBookingInput | RefundRequestCreateOrConnectWithoutBookingInput[]
    createMany?: RefundRequestCreateManyBookingInputEnvelope
    connect?: RefundRequestWhereUniqueInput | RefundRequestWhereUniqueInput[]
  }

  export type BookingPromotionCreateNestedOneWithoutBookingInput = {
    create?: XOR<BookingPromotionCreateWithoutBookingInput, BookingPromotionUncheckedCreateWithoutBookingInput>
    connectOrCreate?: BookingPromotionCreateOrConnectWithoutBookingInput
    connect?: BookingPromotionWhereUniqueInput
  }

  export type BookingRoomUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput> | BookingRoomCreateWithoutBookingInput[] | BookingRoomUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutBookingInput | BookingRoomCreateOrConnectWithoutBookingInput[]
    createMany?: BookingRoomCreateManyBookingInputEnvelope
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
  }

  export type GuestInfoUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<GuestInfoCreateWithoutBookingInput, GuestInfoUncheckedCreateWithoutBookingInput>
    connectOrCreate?: GuestInfoCreateOrConnectWithoutBookingInput
    connect?: GuestInfoWhereUniqueInput
  }

  export type BookingHistoryUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingHistoryCreateWithoutBookingInput, BookingHistoryUncheckedCreateWithoutBookingInput> | BookingHistoryCreateWithoutBookingInput[] | BookingHistoryUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingHistoryCreateOrConnectWithoutBookingInput | BookingHistoryCreateOrConnectWithoutBookingInput[]
    createMany?: BookingHistoryCreateManyBookingInputEnvelope
    connect?: BookingHistoryWhereUniqueInput | BookingHistoryWhereUniqueInput[]
  }

  export type PaymentTransactionUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentTransactionCreateWithoutBookingInput, PaymentTransactionUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutBookingInput
    connect?: PaymentTransactionWhereUniqueInput
  }

  export type InvoiceUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<InvoiceCreateWithoutBookingInput, InvoiceUncheckedCreateWithoutBookingInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutBookingInput
    connect?: InvoiceWhereUniqueInput
  }

  export type RefundRequestUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<RefundRequestCreateWithoutBookingInput, RefundRequestUncheckedCreateWithoutBookingInput> | RefundRequestCreateWithoutBookingInput[] | RefundRequestUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: RefundRequestCreateOrConnectWithoutBookingInput | RefundRequestCreateOrConnectWithoutBookingInput[]
    createMany?: RefundRequestCreateManyBookingInputEnvelope
    connect?: RefundRequestWhereUniqueInput | RefundRequestWhereUniqueInput[]
  }

  export type BookingPromotionUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<BookingPromotionCreateWithoutBookingInput, BookingPromotionUncheckedCreateWithoutBookingInput>
    connectOrCreate?: BookingPromotionCreateOrConnectWithoutBookingInput
    connect?: BookingPromotionWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type BookingRoomUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput> | BookingRoomCreateWithoutBookingInput[] | BookingRoomUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutBookingInput | BookingRoomCreateOrConnectWithoutBookingInput[]
    upsert?: BookingRoomUpsertWithWhereUniqueWithoutBookingInput | BookingRoomUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingRoomCreateManyBookingInputEnvelope
    set?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    disconnect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    delete?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    update?: BookingRoomUpdateWithWhereUniqueWithoutBookingInput | BookingRoomUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingRoomUpdateManyWithWhereWithoutBookingInput | BookingRoomUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingRoomScalarWhereInput | BookingRoomScalarWhereInput[]
  }

  export type GuestInfoUpdateOneWithoutBookingNestedInput = {
    create?: XOR<GuestInfoCreateWithoutBookingInput, GuestInfoUncheckedCreateWithoutBookingInput>
    connectOrCreate?: GuestInfoCreateOrConnectWithoutBookingInput
    upsert?: GuestInfoUpsertWithoutBookingInput
    disconnect?: GuestInfoWhereInput | boolean
    delete?: GuestInfoWhereInput | boolean
    connect?: GuestInfoWhereUniqueInput
    update?: XOR<XOR<GuestInfoUpdateToOneWithWhereWithoutBookingInput, GuestInfoUpdateWithoutBookingInput>, GuestInfoUncheckedUpdateWithoutBookingInput>
  }

  export type BookingHistoryUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingHistoryCreateWithoutBookingInput, BookingHistoryUncheckedCreateWithoutBookingInput> | BookingHistoryCreateWithoutBookingInput[] | BookingHistoryUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingHistoryCreateOrConnectWithoutBookingInput | BookingHistoryCreateOrConnectWithoutBookingInput[]
    upsert?: BookingHistoryUpsertWithWhereUniqueWithoutBookingInput | BookingHistoryUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingHistoryCreateManyBookingInputEnvelope
    set?: BookingHistoryWhereUniqueInput | BookingHistoryWhereUniqueInput[]
    disconnect?: BookingHistoryWhereUniqueInput | BookingHistoryWhereUniqueInput[]
    delete?: BookingHistoryWhereUniqueInput | BookingHistoryWhereUniqueInput[]
    connect?: BookingHistoryWhereUniqueInput | BookingHistoryWhereUniqueInput[]
    update?: BookingHistoryUpdateWithWhereUniqueWithoutBookingInput | BookingHistoryUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingHistoryUpdateManyWithWhereWithoutBookingInput | BookingHistoryUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingHistoryScalarWhereInput | BookingHistoryScalarWhereInput[]
  }

  export type PaymentTransactionUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentTransactionCreateWithoutBookingInput, PaymentTransactionUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutBookingInput
    upsert?: PaymentTransactionUpsertWithoutBookingInput
    disconnect?: PaymentTransactionWhereInput | boolean
    delete?: PaymentTransactionWhereInput | boolean
    connect?: PaymentTransactionWhereUniqueInput
    update?: XOR<XOR<PaymentTransactionUpdateToOneWithWhereWithoutBookingInput, PaymentTransactionUpdateWithoutBookingInput>, PaymentTransactionUncheckedUpdateWithoutBookingInput>
  }

  export type InvoiceUpdateOneWithoutBookingNestedInput = {
    create?: XOR<InvoiceCreateWithoutBookingInput, InvoiceUncheckedCreateWithoutBookingInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutBookingInput
    upsert?: InvoiceUpsertWithoutBookingInput
    disconnect?: InvoiceWhereInput | boolean
    delete?: InvoiceWhereInput | boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutBookingInput, InvoiceUpdateWithoutBookingInput>, InvoiceUncheckedUpdateWithoutBookingInput>
  }

  export type RefundRequestUpdateManyWithoutBookingNestedInput = {
    create?: XOR<RefundRequestCreateWithoutBookingInput, RefundRequestUncheckedCreateWithoutBookingInput> | RefundRequestCreateWithoutBookingInput[] | RefundRequestUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: RefundRequestCreateOrConnectWithoutBookingInput | RefundRequestCreateOrConnectWithoutBookingInput[]
    upsert?: RefundRequestUpsertWithWhereUniqueWithoutBookingInput | RefundRequestUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: RefundRequestCreateManyBookingInputEnvelope
    set?: RefundRequestWhereUniqueInput | RefundRequestWhereUniqueInput[]
    disconnect?: RefundRequestWhereUniqueInput | RefundRequestWhereUniqueInput[]
    delete?: RefundRequestWhereUniqueInput | RefundRequestWhereUniqueInput[]
    connect?: RefundRequestWhereUniqueInput | RefundRequestWhereUniqueInput[]
    update?: RefundRequestUpdateWithWhereUniqueWithoutBookingInput | RefundRequestUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: RefundRequestUpdateManyWithWhereWithoutBookingInput | RefundRequestUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: RefundRequestScalarWhereInput | RefundRequestScalarWhereInput[]
  }

  export type BookingPromotionUpdateOneWithoutBookingNestedInput = {
    create?: XOR<BookingPromotionCreateWithoutBookingInput, BookingPromotionUncheckedCreateWithoutBookingInput>
    connectOrCreate?: BookingPromotionCreateOrConnectWithoutBookingInput
    upsert?: BookingPromotionUpsertWithoutBookingInput
    disconnect?: BookingPromotionWhereInput | boolean
    delete?: BookingPromotionWhereInput | boolean
    connect?: BookingPromotionWhereUniqueInput
    update?: XOR<XOR<BookingPromotionUpdateToOneWithWhereWithoutBookingInput, BookingPromotionUpdateWithoutBookingInput>, BookingPromotionUncheckedUpdateWithoutBookingInput>
  }

  export type BookingRoomUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput> | BookingRoomCreateWithoutBookingInput[] | BookingRoomUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutBookingInput | BookingRoomCreateOrConnectWithoutBookingInput[]
    upsert?: BookingRoomUpsertWithWhereUniqueWithoutBookingInput | BookingRoomUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingRoomCreateManyBookingInputEnvelope
    set?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    disconnect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    delete?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    update?: BookingRoomUpdateWithWhereUniqueWithoutBookingInput | BookingRoomUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingRoomUpdateManyWithWhereWithoutBookingInput | BookingRoomUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingRoomScalarWhereInput | BookingRoomScalarWhereInput[]
  }

  export type GuestInfoUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<GuestInfoCreateWithoutBookingInput, GuestInfoUncheckedCreateWithoutBookingInput>
    connectOrCreate?: GuestInfoCreateOrConnectWithoutBookingInput
    upsert?: GuestInfoUpsertWithoutBookingInput
    disconnect?: GuestInfoWhereInput | boolean
    delete?: GuestInfoWhereInput | boolean
    connect?: GuestInfoWhereUniqueInput
    update?: XOR<XOR<GuestInfoUpdateToOneWithWhereWithoutBookingInput, GuestInfoUpdateWithoutBookingInput>, GuestInfoUncheckedUpdateWithoutBookingInput>
  }

  export type BookingHistoryUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingHistoryCreateWithoutBookingInput, BookingHistoryUncheckedCreateWithoutBookingInput> | BookingHistoryCreateWithoutBookingInput[] | BookingHistoryUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingHistoryCreateOrConnectWithoutBookingInput | BookingHistoryCreateOrConnectWithoutBookingInput[]
    upsert?: BookingHistoryUpsertWithWhereUniqueWithoutBookingInput | BookingHistoryUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingHistoryCreateManyBookingInputEnvelope
    set?: BookingHistoryWhereUniqueInput | BookingHistoryWhereUniqueInput[]
    disconnect?: BookingHistoryWhereUniqueInput | BookingHistoryWhereUniqueInput[]
    delete?: BookingHistoryWhereUniqueInput | BookingHistoryWhereUniqueInput[]
    connect?: BookingHistoryWhereUniqueInput | BookingHistoryWhereUniqueInput[]
    update?: BookingHistoryUpdateWithWhereUniqueWithoutBookingInput | BookingHistoryUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingHistoryUpdateManyWithWhereWithoutBookingInput | BookingHistoryUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingHistoryScalarWhereInput | BookingHistoryScalarWhereInput[]
  }

  export type PaymentTransactionUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentTransactionCreateWithoutBookingInput, PaymentTransactionUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutBookingInput
    upsert?: PaymentTransactionUpsertWithoutBookingInput
    disconnect?: PaymentTransactionWhereInput | boolean
    delete?: PaymentTransactionWhereInput | boolean
    connect?: PaymentTransactionWhereUniqueInput
    update?: XOR<XOR<PaymentTransactionUpdateToOneWithWhereWithoutBookingInput, PaymentTransactionUpdateWithoutBookingInput>, PaymentTransactionUncheckedUpdateWithoutBookingInput>
  }

  export type InvoiceUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<InvoiceCreateWithoutBookingInput, InvoiceUncheckedCreateWithoutBookingInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutBookingInput
    upsert?: InvoiceUpsertWithoutBookingInput
    disconnect?: InvoiceWhereInput | boolean
    delete?: InvoiceWhereInput | boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutBookingInput, InvoiceUpdateWithoutBookingInput>, InvoiceUncheckedUpdateWithoutBookingInput>
  }

  export type RefundRequestUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<RefundRequestCreateWithoutBookingInput, RefundRequestUncheckedCreateWithoutBookingInput> | RefundRequestCreateWithoutBookingInput[] | RefundRequestUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: RefundRequestCreateOrConnectWithoutBookingInput | RefundRequestCreateOrConnectWithoutBookingInput[]
    upsert?: RefundRequestUpsertWithWhereUniqueWithoutBookingInput | RefundRequestUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: RefundRequestCreateManyBookingInputEnvelope
    set?: RefundRequestWhereUniqueInput | RefundRequestWhereUniqueInput[]
    disconnect?: RefundRequestWhereUniqueInput | RefundRequestWhereUniqueInput[]
    delete?: RefundRequestWhereUniqueInput | RefundRequestWhereUniqueInput[]
    connect?: RefundRequestWhereUniqueInput | RefundRequestWhereUniqueInput[]
    update?: RefundRequestUpdateWithWhereUniqueWithoutBookingInput | RefundRequestUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: RefundRequestUpdateManyWithWhereWithoutBookingInput | RefundRequestUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: RefundRequestScalarWhereInput | RefundRequestScalarWhereInput[]
  }

  export type BookingPromotionUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<BookingPromotionCreateWithoutBookingInput, BookingPromotionUncheckedCreateWithoutBookingInput>
    connectOrCreate?: BookingPromotionCreateOrConnectWithoutBookingInput
    upsert?: BookingPromotionUpsertWithoutBookingInput
    disconnect?: BookingPromotionWhereInput | boolean
    delete?: BookingPromotionWhereInput | boolean
    connect?: BookingPromotionWhereUniqueInput
    update?: XOR<XOR<BookingPromotionUpdateToOneWithWhereWithoutBookingInput, BookingPromotionUpdateWithoutBookingInput>, BookingPromotionUncheckedUpdateWithoutBookingInput>
  }

  export type BookingCreateNestedOneWithoutRoomsInput = {
    create?: XOR<BookingCreateWithoutRoomsInput, BookingUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutRoomsInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<BookingCreateWithoutRoomsInput, BookingUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutRoomsInput
    upsert?: BookingUpsertWithoutRoomsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutRoomsInput, BookingUpdateWithoutRoomsInput>, BookingUncheckedUpdateWithoutRoomsInput>
  }

  export type BookingCreateNestedOneWithoutGuestInfoInput = {
    create?: XOR<BookingCreateWithoutGuestInfoInput, BookingUncheckedCreateWithoutGuestInfoInput>
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInfoInput
    connect?: BookingWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BookingUpdateOneRequiredWithoutGuestInfoNestedInput = {
    create?: XOR<BookingCreateWithoutGuestInfoInput, BookingUncheckedCreateWithoutGuestInfoInput>
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInfoInput
    upsert?: BookingUpsertWithoutGuestInfoInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutGuestInfoInput, BookingUpdateWithoutGuestInfoInput>, BookingUncheckedUpdateWithoutGuestInfoInput>
  }

  export type BookingCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<BookingCreateWithoutHistoriesInput, BookingUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: BookingCreateOrConnectWithoutHistoriesInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: XOR<BookingCreateWithoutHistoriesInput, BookingUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: BookingCreateOrConnectWithoutHistoriesInput
    upsert?: BookingUpsertWithoutHistoriesInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutHistoriesInput, BookingUpdateWithoutHistoriesInput>, BookingUncheckedUpdateWithoutHistoriesInput>
  }

  export type BookingCreateNestedOneWithoutPaymentTransactionInput = {
    create?: XOR<BookingCreateWithoutPaymentTransactionInput, BookingUncheckedCreateWithoutPaymentTransactionInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentTransactionInput
    connect?: BookingWhereUniqueInput
  }

  export type EnumPaymentProviderFieldUpdateOperationsInput = {
    set?: $Enums.PaymentProvider
  }

  export type BookingUpdateOneRequiredWithoutPaymentTransactionNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentTransactionInput, BookingUncheckedCreateWithoutPaymentTransactionInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentTransactionInput
    upsert?: BookingUpsertWithoutPaymentTransactionInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentTransactionInput, BookingUpdateWithoutPaymentTransactionInput>, BookingUncheckedUpdateWithoutPaymentTransactionInput>
  }

  export type BookingCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<BookingCreateWithoutInvoiceInput, BookingUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: BookingCreateOrConnectWithoutInvoiceInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<BookingCreateWithoutInvoiceInput, BookingUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: BookingCreateOrConnectWithoutInvoiceInput
    upsert?: BookingUpsertWithoutInvoiceInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutInvoiceInput, BookingUpdateWithoutInvoiceInput>, BookingUncheckedUpdateWithoutInvoiceInput>
  }

  export type BookingPromotionCreateNestedManyWithoutPromotionInput = {
    create?: XOR<BookingPromotionCreateWithoutPromotionInput, BookingPromotionUncheckedCreateWithoutPromotionInput> | BookingPromotionCreateWithoutPromotionInput[] | BookingPromotionUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: BookingPromotionCreateOrConnectWithoutPromotionInput | BookingPromotionCreateOrConnectWithoutPromotionInput[]
    createMany?: BookingPromotionCreateManyPromotionInputEnvelope
    connect?: BookingPromotionWhereUniqueInput | BookingPromotionWhereUniqueInput[]
  }

  export type BookingPromotionUncheckedCreateNestedManyWithoutPromotionInput = {
    create?: XOR<BookingPromotionCreateWithoutPromotionInput, BookingPromotionUncheckedCreateWithoutPromotionInput> | BookingPromotionCreateWithoutPromotionInput[] | BookingPromotionUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: BookingPromotionCreateOrConnectWithoutPromotionInput | BookingPromotionCreateOrConnectWithoutPromotionInput[]
    createMany?: BookingPromotionCreateManyPromotionInputEnvelope
    connect?: BookingPromotionWhereUniqueInput | BookingPromotionWhereUniqueInput[]
  }

  export type EnumPromotionTypeFieldUpdateOperationsInput = {
    set?: $Enums.PromotionType
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BookingPromotionUpdateManyWithoutPromotionNestedInput = {
    create?: XOR<BookingPromotionCreateWithoutPromotionInput, BookingPromotionUncheckedCreateWithoutPromotionInput> | BookingPromotionCreateWithoutPromotionInput[] | BookingPromotionUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: BookingPromotionCreateOrConnectWithoutPromotionInput | BookingPromotionCreateOrConnectWithoutPromotionInput[]
    upsert?: BookingPromotionUpsertWithWhereUniqueWithoutPromotionInput | BookingPromotionUpsertWithWhereUniqueWithoutPromotionInput[]
    createMany?: BookingPromotionCreateManyPromotionInputEnvelope
    set?: BookingPromotionWhereUniqueInput | BookingPromotionWhereUniqueInput[]
    disconnect?: BookingPromotionWhereUniqueInput | BookingPromotionWhereUniqueInput[]
    delete?: BookingPromotionWhereUniqueInput | BookingPromotionWhereUniqueInput[]
    connect?: BookingPromotionWhereUniqueInput | BookingPromotionWhereUniqueInput[]
    update?: BookingPromotionUpdateWithWhereUniqueWithoutPromotionInput | BookingPromotionUpdateWithWhereUniqueWithoutPromotionInput[]
    updateMany?: BookingPromotionUpdateManyWithWhereWithoutPromotionInput | BookingPromotionUpdateManyWithWhereWithoutPromotionInput[]
    deleteMany?: BookingPromotionScalarWhereInput | BookingPromotionScalarWhereInput[]
  }

  export type BookingPromotionUncheckedUpdateManyWithoutPromotionNestedInput = {
    create?: XOR<BookingPromotionCreateWithoutPromotionInput, BookingPromotionUncheckedCreateWithoutPromotionInput> | BookingPromotionCreateWithoutPromotionInput[] | BookingPromotionUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: BookingPromotionCreateOrConnectWithoutPromotionInput | BookingPromotionCreateOrConnectWithoutPromotionInput[]
    upsert?: BookingPromotionUpsertWithWhereUniqueWithoutPromotionInput | BookingPromotionUpsertWithWhereUniqueWithoutPromotionInput[]
    createMany?: BookingPromotionCreateManyPromotionInputEnvelope
    set?: BookingPromotionWhereUniqueInput | BookingPromotionWhereUniqueInput[]
    disconnect?: BookingPromotionWhereUniqueInput | BookingPromotionWhereUniqueInput[]
    delete?: BookingPromotionWhereUniqueInput | BookingPromotionWhereUniqueInput[]
    connect?: BookingPromotionWhereUniqueInput | BookingPromotionWhereUniqueInput[]
    update?: BookingPromotionUpdateWithWhereUniqueWithoutPromotionInput | BookingPromotionUpdateWithWhereUniqueWithoutPromotionInput[]
    updateMany?: BookingPromotionUpdateManyWithWhereWithoutPromotionInput | BookingPromotionUpdateManyWithWhereWithoutPromotionInput[]
    deleteMany?: BookingPromotionScalarWhereInput | BookingPromotionScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutAppliedPromotionInput = {
    create?: XOR<BookingCreateWithoutAppliedPromotionInput, BookingUncheckedCreateWithoutAppliedPromotionInput>
    connectOrCreate?: BookingCreateOrConnectWithoutAppliedPromotionInput
    connect?: BookingWhereUniqueInput
  }

  export type PromotionCreateNestedOneWithoutBookingsInput = {
    create?: XOR<PromotionCreateWithoutBookingsInput, PromotionUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PromotionCreateOrConnectWithoutBookingsInput
    connect?: PromotionWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutAppliedPromotionNestedInput = {
    create?: XOR<BookingCreateWithoutAppliedPromotionInput, BookingUncheckedCreateWithoutAppliedPromotionInput>
    connectOrCreate?: BookingCreateOrConnectWithoutAppliedPromotionInput
    upsert?: BookingUpsertWithoutAppliedPromotionInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutAppliedPromotionInput, BookingUpdateWithoutAppliedPromotionInput>, BookingUncheckedUpdateWithoutAppliedPromotionInput>
  }

  export type PromotionUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<PromotionCreateWithoutBookingsInput, PromotionUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PromotionCreateOrConnectWithoutBookingsInput
    upsert?: PromotionUpsertWithoutBookingsInput
    connect?: PromotionWhereUniqueInput
    update?: XOR<XOR<PromotionUpdateToOneWithWhereWithoutBookingsInput, PromotionUpdateWithoutBookingsInput>, PromotionUncheckedUpdateWithoutBookingsInput>
  }

  export type BookingCreateNestedOneWithoutRefundRequestsInput = {
    create?: XOR<BookingCreateWithoutRefundRequestsInput, BookingUncheckedCreateWithoutRefundRequestsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutRefundRequestsInput
    connect?: BookingWhereUniqueInput
  }

  export type EnumRefundStatusFieldUpdateOperationsInput = {
    set?: $Enums.RefundStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BookingUpdateOneRequiredWithoutRefundRequestsNestedInput = {
    create?: XOR<BookingCreateWithoutRefundRequestsInput, BookingUncheckedCreateWithoutRefundRequestsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutRefundRequestsInput
    upsert?: BookingUpsertWithoutRefundRequestsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutRefundRequestsInput, BookingUpdateWithoutRefundRequestsInput>, BookingUncheckedUpdateWithoutRefundRequestsInput>
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

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
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

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderFilter<$PrismaModel> | $Enums.PaymentProvider
  }

  export type NestedEnumPaymentProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentProviderFilter<$PrismaModel>
    _max?: NestedEnumPaymentProviderFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPromotionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeFilter<$PrismaModel> | $Enums.PromotionType
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPromotionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PromotionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPromotionTypeFilter<$PrismaModel>
    _max?: NestedEnumPromotionTypeFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRefundStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRefundStatusFilter<$PrismaModel> | $Enums.RefundStatus
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

  export type NestedEnumRefundStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRefundStatusWithAggregatesFilter<$PrismaModel> | $Enums.RefundStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRefundStatusFilter<$PrismaModel>
    _max?: NestedEnumRefundStatusFilter<$PrismaModel>
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

  export type BookingRoomCreateWithoutBookingInput = {
    id?: string
    roomId: string
    roomName: string
    pricePerNight: Decimal | DecimalJsLike | number | string
    quantity?: number
  }

  export type BookingRoomUncheckedCreateWithoutBookingInput = {
    id?: string
    roomId: string
    roomName: string
    pricePerNight: Decimal | DecimalJsLike | number | string
    quantity?: number
  }

  export type BookingRoomCreateOrConnectWithoutBookingInput = {
    where: BookingRoomWhereUniqueInput
    create: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput>
  }

  export type BookingRoomCreateManyBookingInputEnvelope = {
    data: BookingRoomCreateManyBookingInput | BookingRoomCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type GuestInfoCreateWithoutBookingInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    specialRequests?: string | null
  }

  export type GuestInfoUncheckedCreateWithoutBookingInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    specialRequests?: string | null
  }

  export type GuestInfoCreateOrConnectWithoutBookingInput = {
    where: GuestInfoWhereUniqueInput
    create: XOR<GuestInfoCreateWithoutBookingInput, GuestInfoUncheckedCreateWithoutBookingInput>
  }

  export type BookingHistoryCreateWithoutBookingInput = {
    id?: string
    action: string
    note?: string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type BookingHistoryUncheckedCreateWithoutBookingInput = {
    id?: string
    action: string
    note?: string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type BookingHistoryCreateOrConnectWithoutBookingInput = {
    where: BookingHistoryWhereUniqueInput
    create: XOR<BookingHistoryCreateWithoutBookingInput, BookingHistoryUncheckedCreateWithoutBookingInput>
  }

  export type BookingHistoryCreateManyBookingInputEnvelope = {
    data: BookingHistoryCreateManyBookingInput | BookingHistoryCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type PaymentTransactionCreateWithoutBookingInput = {
    id?: string
    transactionId?: string | null
    provider: $Enums.PaymentProvider
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status: string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PaymentTransactionUncheckedCreateWithoutBookingInput = {
    id?: string
    transactionId?: string | null
    provider: $Enums.PaymentProvider
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status: string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PaymentTransactionCreateOrConnectWithoutBookingInput = {
    where: PaymentTransactionWhereUniqueInput
    create: XOR<PaymentTransactionCreateWithoutBookingInput, PaymentTransactionUncheckedCreateWithoutBookingInput>
  }

  export type InvoiceCreateWithoutBookingInput = {
    id?: string
    invoiceNumber: string
    pdfUrl?: string | null
    issuedAt?: Date | string
  }

  export type InvoiceUncheckedCreateWithoutBookingInput = {
    id?: string
    invoiceNumber: string
    pdfUrl?: string | null
    issuedAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutBookingInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutBookingInput, InvoiceUncheckedCreateWithoutBookingInput>
  }

  export type RefundRequestCreateWithoutBookingInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    reason: string
    status?: $Enums.RefundStatus
    processedAt?: Date | string | null
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefundRequestUncheckedCreateWithoutBookingInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    reason: string
    status?: $Enums.RefundStatus
    processedAt?: Date | string | null
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefundRequestCreateOrConnectWithoutBookingInput = {
    where: RefundRequestWhereUniqueInput
    create: XOR<RefundRequestCreateWithoutBookingInput, RefundRequestUncheckedCreateWithoutBookingInput>
  }

  export type RefundRequestCreateManyBookingInputEnvelope = {
    data: RefundRequestCreateManyBookingInput | RefundRequestCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type BookingPromotionCreateWithoutBookingInput = {
    id?: string
    promotion: PromotionCreateNestedOneWithoutBookingsInput
  }

  export type BookingPromotionUncheckedCreateWithoutBookingInput = {
    id?: string
    promotionId: string
  }

  export type BookingPromotionCreateOrConnectWithoutBookingInput = {
    where: BookingPromotionWhereUniqueInput
    create: XOR<BookingPromotionCreateWithoutBookingInput, BookingPromotionUncheckedCreateWithoutBookingInput>
  }

  export type BookingRoomUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingRoomWhereUniqueInput
    update: XOR<BookingRoomUpdateWithoutBookingInput, BookingRoomUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput>
  }

  export type BookingRoomUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingRoomWhereUniqueInput
    data: XOR<BookingRoomUpdateWithoutBookingInput, BookingRoomUncheckedUpdateWithoutBookingInput>
  }

  export type BookingRoomUpdateManyWithWhereWithoutBookingInput = {
    where: BookingRoomScalarWhereInput
    data: XOR<BookingRoomUpdateManyMutationInput, BookingRoomUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingRoomScalarWhereInput = {
    AND?: BookingRoomScalarWhereInput | BookingRoomScalarWhereInput[]
    OR?: BookingRoomScalarWhereInput[]
    NOT?: BookingRoomScalarWhereInput | BookingRoomScalarWhereInput[]
    id?: UuidFilter<"BookingRoom"> | string
    bookingId?: UuidFilter<"BookingRoom"> | string
    roomId?: UuidFilter<"BookingRoom"> | string
    roomName?: StringFilter<"BookingRoom"> | string
    pricePerNight?: DecimalFilter<"BookingRoom"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"BookingRoom"> | number
  }

  export type GuestInfoUpsertWithoutBookingInput = {
    update: XOR<GuestInfoUpdateWithoutBookingInput, GuestInfoUncheckedUpdateWithoutBookingInput>
    create: XOR<GuestInfoCreateWithoutBookingInput, GuestInfoUncheckedCreateWithoutBookingInput>
    where?: GuestInfoWhereInput
  }

  export type GuestInfoUpdateToOneWithWhereWithoutBookingInput = {
    where?: GuestInfoWhereInput
    data: XOR<GuestInfoUpdateWithoutBookingInput, GuestInfoUncheckedUpdateWithoutBookingInput>
  }

  export type GuestInfoUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuestInfoUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingHistoryUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingHistoryWhereUniqueInput
    update: XOR<BookingHistoryUpdateWithoutBookingInput, BookingHistoryUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingHistoryCreateWithoutBookingInput, BookingHistoryUncheckedCreateWithoutBookingInput>
  }

  export type BookingHistoryUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingHistoryWhereUniqueInput
    data: XOR<BookingHistoryUpdateWithoutBookingInput, BookingHistoryUncheckedUpdateWithoutBookingInput>
  }

  export type BookingHistoryUpdateManyWithWhereWithoutBookingInput = {
    where: BookingHistoryScalarWhereInput
    data: XOR<BookingHistoryUpdateManyMutationInput, BookingHistoryUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingHistoryScalarWhereInput = {
    AND?: BookingHistoryScalarWhereInput | BookingHistoryScalarWhereInput[]
    OR?: BookingHistoryScalarWhereInput[]
    NOT?: BookingHistoryScalarWhereInput | BookingHistoryScalarWhereInput[]
    id?: UuidFilter<"BookingHistory"> | string
    bookingId?: UuidFilter<"BookingHistory"> | string
    action?: StringFilter<"BookingHistory"> | string
    note?: StringNullableFilter<"BookingHistory"> | string | null
    createdBy?: UuidNullableFilter<"BookingHistory"> | string | null
    createdAt?: DateTimeFilter<"BookingHistory"> | Date | string
  }

  export type PaymentTransactionUpsertWithoutBookingInput = {
    update: XOR<PaymentTransactionUpdateWithoutBookingInput, PaymentTransactionUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentTransactionCreateWithoutBookingInput, PaymentTransactionUncheckedCreateWithoutBookingInput>
    where?: PaymentTransactionWhereInput
  }

  export type PaymentTransactionUpdateToOneWithWhereWithoutBookingInput = {
    where?: PaymentTransactionWhereInput
    data: XOR<PaymentTransactionUpdateWithoutBookingInput, PaymentTransactionUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentTransactionUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rawData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpsertWithoutBookingInput = {
    update: XOR<InvoiceUpdateWithoutBookingInput, InvoiceUncheckedUpdateWithoutBookingInput>
    create: XOR<InvoiceCreateWithoutBookingInput, InvoiceUncheckedCreateWithoutBookingInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutBookingInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutBookingInput, InvoiceUncheckedUpdateWithoutBookingInput>
  }

  export type InvoiceUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundRequestUpsertWithWhereUniqueWithoutBookingInput = {
    where: RefundRequestWhereUniqueInput
    update: XOR<RefundRequestUpdateWithoutBookingInput, RefundRequestUncheckedUpdateWithoutBookingInput>
    create: XOR<RefundRequestCreateWithoutBookingInput, RefundRequestUncheckedCreateWithoutBookingInput>
  }

  export type RefundRequestUpdateWithWhereUniqueWithoutBookingInput = {
    where: RefundRequestWhereUniqueInput
    data: XOR<RefundRequestUpdateWithoutBookingInput, RefundRequestUncheckedUpdateWithoutBookingInput>
  }

  export type RefundRequestUpdateManyWithWhereWithoutBookingInput = {
    where: RefundRequestScalarWhereInput
    data: XOR<RefundRequestUpdateManyMutationInput, RefundRequestUncheckedUpdateManyWithoutBookingInput>
  }

  export type RefundRequestScalarWhereInput = {
    AND?: RefundRequestScalarWhereInput | RefundRequestScalarWhereInput[]
    OR?: RefundRequestScalarWhereInput[]
    NOT?: RefundRequestScalarWhereInput | RefundRequestScalarWhereInput[]
    id?: UuidFilter<"RefundRequest"> | string
    bookingId?: UuidFilter<"RefundRequest"> | string
    amount?: DecimalFilter<"RefundRequest"> | Decimal | DecimalJsLike | number | string
    reason?: StringFilter<"RefundRequest"> | string
    status?: EnumRefundStatusFilter<"RefundRequest"> | $Enums.RefundStatus
    processedAt?: DateTimeNullableFilter<"RefundRequest"> | Date | string | null
    adminNote?: StringNullableFilter<"RefundRequest"> | string | null
    createdAt?: DateTimeFilter<"RefundRequest"> | Date | string
    updatedAt?: DateTimeFilter<"RefundRequest"> | Date | string
  }

  export type BookingPromotionUpsertWithoutBookingInput = {
    update: XOR<BookingPromotionUpdateWithoutBookingInput, BookingPromotionUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingPromotionCreateWithoutBookingInput, BookingPromotionUncheckedCreateWithoutBookingInput>
    where?: BookingPromotionWhereInput
  }

  export type BookingPromotionUpdateToOneWithWhereWithoutBookingInput = {
    where?: BookingPromotionWhereInput
    data: XOR<BookingPromotionUpdateWithoutBookingInput, BookingPromotionUncheckedUpdateWithoutBookingInput>
  }

  export type BookingPromotionUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    promotion?: PromotionUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingPromotionUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    promotionId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateWithoutRoomsInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    guestInfo?: GuestInfoCreateNestedOneWithoutBookingInput
    histories?: BookingHistoryCreateNestedManyWithoutBookingInput
    paymentTransaction?: PaymentTransactionCreateNestedOneWithoutBookingInput
    invoice?: InvoiceCreateNestedOneWithoutBookingInput
    refundRequests?: RefundRequestCreateNestedManyWithoutBookingInput
    appliedPromotion?: BookingPromotionCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutRoomsInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    guestInfo?: GuestInfoUncheckedCreateNestedOneWithoutBookingInput
    histories?: BookingHistoryUncheckedCreateNestedManyWithoutBookingInput
    paymentTransaction?: PaymentTransactionUncheckedCreateNestedOneWithoutBookingInput
    invoice?: InvoiceUncheckedCreateNestedOneWithoutBookingInput
    refundRequests?: RefundRequestUncheckedCreateNestedManyWithoutBookingInput
    appliedPromotion?: BookingPromotionUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutRoomsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutRoomsInput, BookingUncheckedCreateWithoutRoomsInput>
  }

  export type BookingUpsertWithoutRoomsInput = {
    update: XOR<BookingUpdateWithoutRoomsInput, BookingUncheckedUpdateWithoutRoomsInput>
    create: XOR<BookingCreateWithoutRoomsInput, BookingUncheckedCreateWithoutRoomsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutRoomsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutRoomsInput, BookingUncheckedUpdateWithoutRoomsInput>
  }

  export type BookingUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestInfo?: GuestInfoUpdateOneWithoutBookingNestedInput
    histories?: BookingHistoryUpdateManyWithoutBookingNestedInput
    paymentTransaction?: PaymentTransactionUpdateOneWithoutBookingNestedInput
    invoice?: InvoiceUpdateOneWithoutBookingNestedInput
    refundRequests?: RefundRequestUpdateManyWithoutBookingNestedInput
    appliedPromotion?: BookingPromotionUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestInfo?: GuestInfoUncheckedUpdateOneWithoutBookingNestedInput
    histories?: BookingHistoryUncheckedUpdateManyWithoutBookingNestedInput
    paymentTransaction?: PaymentTransactionUncheckedUpdateOneWithoutBookingNestedInput
    invoice?: InvoiceUncheckedUpdateOneWithoutBookingNestedInput
    refundRequests?: RefundRequestUncheckedUpdateManyWithoutBookingNestedInput
    appliedPromotion?: BookingPromotionUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateWithoutGuestInfoInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: BookingRoomCreateNestedManyWithoutBookingInput
    histories?: BookingHistoryCreateNestedManyWithoutBookingInput
    paymentTransaction?: PaymentTransactionCreateNestedOneWithoutBookingInput
    invoice?: InvoiceCreateNestedOneWithoutBookingInput
    refundRequests?: RefundRequestCreateNestedManyWithoutBookingInput
    appliedPromotion?: BookingPromotionCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutGuestInfoInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: BookingRoomUncheckedCreateNestedManyWithoutBookingInput
    histories?: BookingHistoryUncheckedCreateNestedManyWithoutBookingInput
    paymentTransaction?: PaymentTransactionUncheckedCreateNestedOneWithoutBookingInput
    invoice?: InvoiceUncheckedCreateNestedOneWithoutBookingInput
    refundRequests?: RefundRequestUncheckedCreateNestedManyWithoutBookingInput
    appliedPromotion?: BookingPromotionUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutGuestInfoInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutGuestInfoInput, BookingUncheckedCreateWithoutGuestInfoInput>
  }

  export type BookingUpsertWithoutGuestInfoInput = {
    update: XOR<BookingUpdateWithoutGuestInfoInput, BookingUncheckedUpdateWithoutGuestInfoInput>
    create: XOR<BookingCreateWithoutGuestInfoInput, BookingUncheckedCreateWithoutGuestInfoInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutGuestInfoInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutGuestInfoInput, BookingUncheckedUpdateWithoutGuestInfoInput>
  }

  export type BookingUpdateWithoutGuestInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: BookingRoomUpdateManyWithoutBookingNestedInput
    histories?: BookingHistoryUpdateManyWithoutBookingNestedInput
    paymentTransaction?: PaymentTransactionUpdateOneWithoutBookingNestedInput
    invoice?: InvoiceUpdateOneWithoutBookingNestedInput
    refundRequests?: RefundRequestUpdateManyWithoutBookingNestedInput
    appliedPromotion?: BookingPromotionUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutGuestInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: BookingRoomUncheckedUpdateManyWithoutBookingNestedInput
    histories?: BookingHistoryUncheckedUpdateManyWithoutBookingNestedInput
    paymentTransaction?: PaymentTransactionUncheckedUpdateOneWithoutBookingNestedInput
    invoice?: InvoiceUncheckedUpdateOneWithoutBookingNestedInput
    refundRequests?: RefundRequestUncheckedUpdateManyWithoutBookingNestedInput
    appliedPromotion?: BookingPromotionUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateWithoutHistoriesInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: BookingRoomCreateNestedManyWithoutBookingInput
    guestInfo?: GuestInfoCreateNestedOneWithoutBookingInput
    paymentTransaction?: PaymentTransactionCreateNestedOneWithoutBookingInput
    invoice?: InvoiceCreateNestedOneWithoutBookingInput
    refundRequests?: RefundRequestCreateNestedManyWithoutBookingInput
    appliedPromotion?: BookingPromotionCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutHistoriesInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: BookingRoomUncheckedCreateNestedManyWithoutBookingInput
    guestInfo?: GuestInfoUncheckedCreateNestedOneWithoutBookingInput
    paymentTransaction?: PaymentTransactionUncheckedCreateNestedOneWithoutBookingInput
    invoice?: InvoiceUncheckedCreateNestedOneWithoutBookingInput
    refundRequests?: RefundRequestUncheckedCreateNestedManyWithoutBookingInput
    appliedPromotion?: BookingPromotionUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutHistoriesInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutHistoriesInput, BookingUncheckedCreateWithoutHistoriesInput>
  }

  export type BookingUpsertWithoutHistoriesInput = {
    update: XOR<BookingUpdateWithoutHistoriesInput, BookingUncheckedUpdateWithoutHistoriesInput>
    create: XOR<BookingCreateWithoutHistoriesInput, BookingUncheckedCreateWithoutHistoriesInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutHistoriesInput, BookingUncheckedUpdateWithoutHistoriesInput>
  }

  export type BookingUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: BookingRoomUpdateManyWithoutBookingNestedInput
    guestInfo?: GuestInfoUpdateOneWithoutBookingNestedInput
    paymentTransaction?: PaymentTransactionUpdateOneWithoutBookingNestedInput
    invoice?: InvoiceUpdateOneWithoutBookingNestedInput
    refundRequests?: RefundRequestUpdateManyWithoutBookingNestedInput
    appliedPromotion?: BookingPromotionUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: BookingRoomUncheckedUpdateManyWithoutBookingNestedInput
    guestInfo?: GuestInfoUncheckedUpdateOneWithoutBookingNestedInput
    paymentTransaction?: PaymentTransactionUncheckedUpdateOneWithoutBookingNestedInput
    invoice?: InvoiceUncheckedUpdateOneWithoutBookingNestedInput
    refundRequests?: RefundRequestUncheckedUpdateManyWithoutBookingNestedInput
    appliedPromotion?: BookingPromotionUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateWithoutPaymentTransactionInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: BookingRoomCreateNestedManyWithoutBookingInput
    guestInfo?: GuestInfoCreateNestedOneWithoutBookingInput
    histories?: BookingHistoryCreateNestedManyWithoutBookingInput
    invoice?: InvoiceCreateNestedOneWithoutBookingInput
    refundRequests?: RefundRequestCreateNestedManyWithoutBookingInput
    appliedPromotion?: BookingPromotionCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPaymentTransactionInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: BookingRoomUncheckedCreateNestedManyWithoutBookingInput
    guestInfo?: GuestInfoUncheckedCreateNestedOneWithoutBookingInput
    histories?: BookingHistoryUncheckedCreateNestedManyWithoutBookingInput
    invoice?: InvoiceUncheckedCreateNestedOneWithoutBookingInput
    refundRequests?: RefundRequestUncheckedCreateNestedManyWithoutBookingInput
    appliedPromotion?: BookingPromotionUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPaymentTransactionInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentTransactionInput, BookingUncheckedCreateWithoutPaymentTransactionInput>
  }

  export type BookingUpsertWithoutPaymentTransactionInput = {
    update: XOR<BookingUpdateWithoutPaymentTransactionInput, BookingUncheckedUpdateWithoutPaymentTransactionInput>
    create: XOR<BookingCreateWithoutPaymentTransactionInput, BookingUncheckedCreateWithoutPaymentTransactionInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentTransactionInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentTransactionInput, BookingUncheckedUpdateWithoutPaymentTransactionInput>
  }

  export type BookingUpdateWithoutPaymentTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: BookingRoomUpdateManyWithoutBookingNestedInput
    guestInfo?: GuestInfoUpdateOneWithoutBookingNestedInput
    histories?: BookingHistoryUpdateManyWithoutBookingNestedInput
    invoice?: InvoiceUpdateOneWithoutBookingNestedInput
    refundRequests?: RefundRequestUpdateManyWithoutBookingNestedInput
    appliedPromotion?: BookingPromotionUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: BookingRoomUncheckedUpdateManyWithoutBookingNestedInput
    guestInfo?: GuestInfoUncheckedUpdateOneWithoutBookingNestedInput
    histories?: BookingHistoryUncheckedUpdateManyWithoutBookingNestedInput
    invoice?: InvoiceUncheckedUpdateOneWithoutBookingNestedInput
    refundRequests?: RefundRequestUncheckedUpdateManyWithoutBookingNestedInput
    appliedPromotion?: BookingPromotionUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateWithoutInvoiceInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: BookingRoomCreateNestedManyWithoutBookingInput
    guestInfo?: GuestInfoCreateNestedOneWithoutBookingInput
    histories?: BookingHistoryCreateNestedManyWithoutBookingInput
    paymentTransaction?: PaymentTransactionCreateNestedOneWithoutBookingInput
    refundRequests?: RefundRequestCreateNestedManyWithoutBookingInput
    appliedPromotion?: BookingPromotionCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutInvoiceInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: BookingRoomUncheckedCreateNestedManyWithoutBookingInput
    guestInfo?: GuestInfoUncheckedCreateNestedOneWithoutBookingInput
    histories?: BookingHistoryUncheckedCreateNestedManyWithoutBookingInput
    paymentTransaction?: PaymentTransactionUncheckedCreateNestedOneWithoutBookingInput
    refundRequests?: RefundRequestUncheckedCreateNestedManyWithoutBookingInput
    appliedPromotion?: BookingPromotionUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutInvoiceInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutInvoiceInput, BookingUncheckedCreateWithoutInvoiceInput>
  }

  export type BookingUpsertWithoutInvoiceInput = {
    update: XOR<BookingUpdateWithoutInvoiceInput, BookingUncheckedUpdateWithoutInvoiceInput>
    create: XOR<BookingCreateWithoutInvoiceInput, BookingUncheckedCreateWithoutInvoiceInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutInvoiceInput, BookingUncheckedUpdateWithoutInvoiceInput>
  }

  export type BookingUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: BookingRoomUpdateManyWithoutBookingNestedInput
    guestInfo?: GuestInfoUpdateOneWithoutBookingNestedInput
    histories?: BookingHistoryUpdateManyWithoutBookingNestedInput
    paymentTransaction?: PaymentTransactionUpdateOneWithoutBookingNestedInput
    refundRequests?: RefundRequestUpdateManyWithoutBookingNestedInput
    appliedPromotion?: BookingPromotionUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: BookingRoomUncheckedUpdateManyWithoutBookingNestedInput
    guestInfo?: GuestInfoUncheckedUpdateOneWithoutBookingNestedInput
    histories?: BookingHistoryUncheckedUpdateManyWithoutBookingNestedInput
    paymentTransaction?: PaymentTransactionUncheckedUpdateOneWithoutBookingNestedInput
    refundRequests?: RefundRequestUncheckedUpdateManyWithoutBookingNestedInput
    appliedPromotion?: BookingPromotionUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingPromotionCreateWithoutPromotionInput = {
    id?: string
    booking: BookingCreateNestedOneWithoutAppliedPromotionInput
  }

  export type BookingPromotionUncheckedCreateWithoutPromotionInput = {
    id?: string
    bookingId: string
  }

  export type BookingPromotionCreateOrConnectWithoutPromotionInput = {
    where: BookingPromotionWhereUniqueInput
    create: XOR<BookingPromotionCreateWithoutPromotionInput, BookingPromotionUncheckedCreateWithoutPromotionInput>
  }

  export type BookingPromotionCreateManyPromotionInputEnvelope = {
    data: BookingPromotionCreateManyPromotionInput | BookingPromotionCreateManyPromotionInput[]
    skipDuplicates?: boolean
  }

  export type BookingPromotionUpsertWithWhereUniqueWithoutPromotionInput = {
    where: BookingPromotionWhereUniqueInput
    update: XOR<BookingPromotionUpdateWithoutPromotionInput, BookingPromotionUncheckedUpdateWithoutPromotionInput>
    create: XOR<BookingPromotionCreateWithoutPromotionInput, BookingPromotionUncheckedCreateWithoutPromotionInput>
  }

  export type BookingPromotionUpdateWithWhereUniqueWithoutPromotionInput = {
    where: BookingPromotionWhereUniqueInput
    data: XOR<BookingPromotionUpdateWithoutPromotionInput, BookingPromotionUncheckedUpdateWithoutPromotionInput>
  }

  export type BookingPromotionUpdateManyWithWhereWithoutPromotionInput = {
    where: BookingPromotionScalarWhereInput
    data: XOR<BookingPromotionUpdateManyMutationInput, BookingPromotionUncheckedUpdateManyWithoutPromotionInput>
  }

  export type BookingPromotionScalarWhereInput = {
    AND?: BookingPromotionScalarWhereInput | BookingPromotionScalarWhereInput[]
    OR?: BookingPromotionScalarWhereInput[]
    NOT?: BookingPromotionScalarWhereInput | BookingPromotionScalarWhereInput[]
    id?: UuidFilter<"BookingPromotion"> | string
    bookingId?: UuidFilter<"BookingPromotion"> | string
    promotionId?: UuidFilter<"BookingPromotion"> | string
  }

  export type BookingCreateWithoutAppliedPromotionInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: BookingRoomCreateNestedManyWithoutBookingInput
    guestInfo?: GuestInfoCreateNestedOneWithoutBookingInput
    histories?: BookingHistoryCreateNestedManyWithoutBookingInput
    paymentTransaction?: PaymentTransactionCreateNestedOneWithoutBookingInput
    invoice?: InvoiceCreateNestedOneWithoutBookingInput
    refundRequests?: RefundRequestCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutAppliedPromotionInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: BookingRoomUncheckedCreateNestedManyWithoutBookingInput
    guestInfo?: GuestInfoUncheckedCreateNestedOneWithoutBookingInput
    histories?: BookingHistoryUncheckedCreateNestedManyWithoutBookingInput
    paymentTransaction?: PaymentTransactionUncheckedCreateNestedOneWithoutBookingInput
    invoice?: InvoiceUncheckedCreateNestedOneWithoutBookingInput
    refundRequests?: RefundRequestUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutAppliedPromotionInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutAppliedPromotionInput, BookingUncheckedCreateWithoutAppliedPromotionInput>
  }

  export type PromotionCreateWithoutBookingsInput = {
    id?: string
    code: string
    description?: string | null
    discountType: $Enums.PromotionType
    discountValue: Decimal | DecimalJsLike | number | string
    minOrderValue?: Decimal | DecimalJsLike | number | string | null
    maxDiscount?: Decimal | DecimalJsLike | number | string | null
    startDate: Date | string
    endDate: Date | string
    usageLimit?: number | null
    usedCount?: number
    isActive?: boolean
  }

  export type PromotionUncheckedCreateWithoutBookingsInput = {
    id?: string
    code: string
    description?: string | null
    discountType: $Enums.PromotionType
    discountValue: Decimal | DecimalJsLike | number | string
    minOrderValue?: Decimal | DecimalJsLike | number | string | null
    maxDiscount?: Decimal | DecimalJsLike | number | string | null
    startDate: Date | string
    endDate: Date | string
    usageLimit?: number | null
    usedCount?: number
    isActive?: boolean
  }

  export type PromotionCreateOrConnectWithoutBookingsInput = {
    where: PromotionWhereUniqueInput
    create: XOR<PromotionCreateWithoutBookingsInput, PromotionUncheckedCreateWithoutBookingsInput>
  }

  export type BookingUpsertWithoutAppliedPromotionInput = {
    update: XOR<BookingUpdateWithoutAppliedPromotionInput, BookingUncheckedUpdateWithoutAppliedPromotionInput>
    create: XOR<BookingCreateWithoutAppliedPromotionInput, BookingUncheckedCreateWithoutAppliedPromotionInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutAppliedPromotionInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutAppliedPromotionInput, BookingUncheckedUpdateWithoutAppliedPromotionInput>
  }

  export type BookingUpdateWithoutAppliedPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: BookingRoomUpdateManyWithoutBookingNestedInput
    guestInfo?: GuestInfoUpdateOneWithoutBookingNestedInput
    histories?: BookingHistoryUpdateManyWithoutBookingNestedInput
    paymentTransaction?: PaymentTransactionUpdateOneWithoutBookingNestedInput
    invoice?: InvoiceUpdateOneWithoutBookingNestedInput
    refundRequests?: RefundRequestUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutAppliedPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: BookingRoomUncheckedUpdateManyWithoutBookingNestedInput
    guestInfo?: GuestInfoUncheckedUpdateOneWithoutBookingNestedInput
    histories?: BookingHistoryUncheckedUpdateManyWithoutBookingNestedInput
    paymentTransaction?: PaymentTransactionUncheckedUpdateOneWithoutBookingNestedInput
    invoice?: InvoiceUncheckedUpdateOneWithoutBookingNestedInput
    refundRequests?: RefundRequestUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type PromotionUpsertWithoutBookingsInput = {
    update: XOR<PromotionUpdateWithoutBookingsInput, PromotionUncheckedUpdateWithoutBookingsInput>
    create: XOR<PromotionCreateWithoutBookingsInput, PromotionUncheckedCreateWithoutBookingsInput>
    where?: PromotionWhereInput
  }

  export type PromotionUpdateToOneWithWhereWithoutBookingsInput = {
    where?: PromotionWhereInput
    data: XOR<PromotionUpdateWithoutBookingsInput, PromotionUncheckedUpdateWithoutBookingsInput>
  }

  export type PromotionUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discountType?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    discountValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxDiscount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PromotionUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    discountType?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    discountValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxDiscount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    usageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingCreateWithoutRefundRequestsInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: BookingRoomCreateNestedManyWithoutBookingInput
    guestInfo?: GuestInfoCreateNestedOneWithoutBookingInput
    histories?: BookingHistoryCreateNestedManyWithoutBookingInput
    paymentTransaction?: PaymentTransactionCreateNestedOneWithoutBookingInput
    invoice?: InvoiceCreateNestedOneWithoutBookingInput
    appliedPromotion?: BookingPromotionCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutRefundRequestsInput = {
    id?: string
    bookingCode: string
    userId: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    totalNights: number
    roomPrice: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    finalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: BookingRoomUncheckedCreateNestedManyWithoutBookingInput
    guestInfo?: GuestInfoUncheckedCreateNestedOneWithoutBookingInput
    histories?: BookingHistoryUncheckedCreateNestedManyWithoutBookingInput
    paymentTransaction?: PaymentTransactionUncheckedCreateNestedOneWithoutBookingInput
    invoice?: InvoiceUncheckedCreateNestedOneWithoutBookingInput
    appliedPromotion?: BookingPromotionUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutRefundRequestsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutRefundRequestsInput, BookingUncheckedCreateWithoutRefundRequestsInput>
  }

  export type BookingUpsertWithoutRefundRequestsInput = {
    update: XOR<BookingUpdateWithoutRefundRequestsInput, BookingUncheckedUpdateWithoutRefundRequestsInput>
    create: XOR<BookingCreateWithoutRefundRequestsInput, BookingUncheckedCreateWithoutRefundRequestsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutRefundRequestsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutRefundRequestsInput, BookingUncheckedUpdateWithoutRefundRequestsInput>
  }

  export type BookingUpdateWithoutRefundRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: BookingRoomUpdateManyWithoutBookingNestedInput
    guestInfo?: GuestInfoUpdateOneWithoutBookingNestedInput
    histories?: BookingHistoryUpdateManyWithoutBookingNestedInput
    paymentTransaction?: PaymentTransactionUpdateOneWithoutBookingNestedInput
    invoice?: InvoiceUpdateOneWithoutBookingNestedInput
    appliedPromotion?: BookingPromotionUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutRefundRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalNights?: IntFieldUpdateOperationsInput | number
    roomPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: BookingRoomUncheckedUpdateManyWithoutBookingNestedInput
    guestInfo?: GuestInfoUncheckedUpdateOneWithoutBookingNestedInput
    histories?: BookingHistoryUncheckedUpdateManyWithoutBookingNestedInput
    paymentTransaction?: PaymentTransactionUncheckedUpdateOneWithoutBookingNestedInput
    invoice?: InvoiceUncheckedUpdateOneWithoutBookingNestedInput
    appliedPromotion?: BookingPromotionUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingRoomCreateManyBookingInput = {
    id?: string
    roomId: string
    roomName: string
    pricePerNight: Decimal | DecimalJsLike | number | string
    quantity?: number
  }

  export type BookingHistoryCreateManyBookingInput = {
    id?: string
    action: string
    note?: string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type RefundRequestCreateManyBookingInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    reason: string
    status?: $Enums.RefundStatus
    processedAt?: Date | string | null
    adminNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingRoomUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    pricePerNight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BookingRoomUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    pricePerNight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BookingRoomUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    roomName?: StringFieldUpdateOperationsInput | string
    pricePerNight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BookingHistoryUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingHistoryUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingHistoryUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundRequestUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundRequestUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundRequestUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingPromotionCreateManyPromotionInput = {
    id?: string
    bookingId: string
  }

  export type BookingPromotionUpdateWithoutPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutAppliedPromotionNestedInput
  }

  export type BookingPromotionUncheckedUpdateWithoutPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingPromotionUncheckedUpdateManyWithoutPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
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
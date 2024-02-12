import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  date: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

export type AdminGetMeOutput = {
  __typename?: 'AdminGetMeOutput';
  id: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type AdminRegisterInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AdminRegisterOutput = {
  __typename?: 'AdminRegisterOutput';
  accessToken: Scalars['String']['output'];
};

export type CloudinarySignatureOutput = {
  __typename?: 'CloudinarySignatureOutput';
  apiKey: Scalars['String']['output'];
  cloudName: Scalars['String']['output'];
  publicId: Scalars['String']['output'];
  signature: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
};

export type CustomerLoginInput = {
  phoneNumber: Scalars['String']['input'];
};

export type CustomerLoginOutput = {
  __typename?: 'CustomerLoginOutput';
  status: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "admin" */
export type Admin = {
  __typename?: 'admin';
  id: Scalars['uuid']['output'];
  password: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type AdminLoginInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AdminLoginOutput = {
  __typename?: 'adminLoginOutput';
  accessToken: Scalars['String']['output'];
};

/** aggregated selection of "admin" */
export type Admin_Aggregate = {
  __typename?: 'admin_aggregate';
  aggregate?: Maybe<Admin_Aggregate_Fields>;
  nodes: Array<Admin>;
};

/** aggregate fields of "admin" */
export type Admin_Aggregate_Fields = {
  __typename?: 'admin_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Admin_Max_Fields>;
  min?: Maybe<Admin_Min_Fields>;
};


/** aggregate fields of "admin" */
export type Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "admin". All fields are combined with a logical 'AND'. */
export type Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Admin_Bool_Exp>>;
  _not?: InputMaybe<Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Admin_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "admin" */
export enum Admin_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdminPkey = 'admin_pkey',
  /** unique or primary key constraint on columns "username" */
  AdminUsernameKey = 'admin_username_key'
}

/** input type for inserting data into table "admin" */
export type Admin_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Admin_Max_Fields = {
  __typename?: 'admin_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Admin_Min_Fields = {
  __typename?: 'admin_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "admin" */
export type Admin_Mutation_Response = {
  __typename?: 'admin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Admin>;
};

/** on_conflict condition type for table "admin" */
export type Admin_On_Conflict = {
  constraint: Admin_Constraint;
  update_columns?: Array<Admin_Update_Column>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

/** Ordering options when selecting data from "admin". */
export type Admin_Order_By = {
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: admin */
export type Admin_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "admin" */
export enum Admin_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "admin" */
export type Admin_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "admin" */
export type Admin_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Admin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Admin_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "admin" */
export enum Admin_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

export type Admin_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Admin_Set_Input>;
  /** filter the rows which have to be updated */
  where: Admin_Bool_Exp;
};

/** columns and relationships of "advantages" */
export type Advantages = {
  __typename?: 'advantages';
  id: Scalars['uuid']['output'];
  label: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

/** aggregated selection of "advantages" */
export type Advantages_Aggregate = {
  __typename?: 'advantages_aggregate';
  aggregate?: Maybe<Advantages_Aggregate_Fields>;
  nodes: Array<Advantages>;
};

/** aggregate fields of "advantages" */
export type Advantages_Aggregate_Fields = {
  __typename?: 'advantages_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Advantages_Max_Fields>;
  min?: Maybe<Advantages_Min_Fields>;
};


/** aggregate fields of "advantages" */
export type Advantages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Advantages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "advantages". All fields are combined with a logical 'AND'. */
export type Advantages_Bool_Exp = {
  _and?: InputMaybe<Array<Advantages_Bool_Exp>>;
  _not?: InputMaybe<Advantages_Bool_Exp>;
  _or?: InputMaybe<Array<Advantages_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "advantages" */
export enum Advantages_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdvantagesPkey = 'advantages_pkey'
}

/** input type for inserting data into table "advantages" */
export type Advantages_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Advantages_Max_Fields = {
  __typename?: 'advantages_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Advantages_Min_Fields = {
  __typename?: 'advantages_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "advantages" */
export type Advantages_Mutation_Response = {
  __typename?: 'advantages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Advantages>;
};

/** on_conflict condition type for table "advantages" */
export type Advantages_On_Conflict = {
  constraint: Advantages_Constraint;
  update_columns?: Array<Advantages_Update_Column>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};

/** Ordering options when selecting data from "advantages". */
export type Advantages_Order_By = {
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: advantages */
export type Advantages_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "advantages" */
export enum Advantages_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "advantages" */
export type Advantages_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "advantages" */
export type Advantages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Advantages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Advantages_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "advantages" */
export enum Advantages_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Title = 'title'
}

export type Advantages_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Advantages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Advantages_Bool_Exp;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

export type CreateOrderInput = {
  client_address: Scalars['String']['input'];
  client_name: Scalars['String']['input'];
  client_phone: Scalars['String']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  items: Scalars['String']['input'];
  payment_type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrderOutput = {
  __typename?: 'createOrderOutput';
  checkout_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type CustomerLoginPasswordInput = {
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CustomerLoginPasswordOutput = {
  __typename?: 'customerLoginPasswordOutput';
  accessToken: Scalars['String']['output'];
};

export type CustomerRegisterInput = {
  address: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CustomerRegisterOutput = {
  __typename?: 'customerRegisterOutput';
  accessToken: Scalars['String']['output'];
};

export type CustomerVerifyCodeInput = {
  code: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type CustomerVerifyCodeOutput = {
  __typename?: 'customerVerifyCodeOutput';
  accessToken: Scalars['String']['output'];
};

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers';
  address?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  password?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  twilioVerificationSid?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "customers" */
export type CustomersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "customers" */
export type CustomersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
};


/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  twilioVerificationSid?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint on columns "phone" */
  CustomersPhoneKey = 'customers_phone_key',
  /** unique or primary key constraint on columns "id" */
  CustomersPkey = 'customers_pkey'
}

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  twilioVerificationSid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  twilioVerificationSid?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  twilioVerificationSid?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** on_conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  twilioVerificationSid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  TwilioVerificationSid = 'twilioVerificationSid'
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  twilioVerificationSid?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "customers" */
export type Customers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customers_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  twilioVerificationSid?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  TwilioVerificationSid = 'twilioVerificationSid'
}

export type Customers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Customers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Customers_Bool_Exp;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "last_week_orders" */
export type Last_Week_Orders = {
  __typename?: 'last_week_orders';
  count?: Maybe<Scalars['bigint']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** aggregated selection of "last_week_orders" */
export type Last_Week_Orders_Aggregate = {
  __typename?: 'last_week_orders_aggregate';
  aggregate?: Maybe<Last_Week_Orders_Aggregate_Fields>;
  nodes: Array<Last_Week_Orders>;
};

/** aggregate fields of "last_week_orders" */
export type Last_Week_Orders_Aggregate_Fields = {
  __typename?: 'last_week_orders_aggregate_fields';
  avg?: Maybe<Last_Week_Orders_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Last_Week_Orders_Max_Fields>;
  min?: Maybe<Last_Week_Orders_Min_Fields>;
  stddev?: Maybe<Last_Week_Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Last_Week_Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Last_Week_Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Last_Week_Orders_Sum_Fields>;
  var_pop?: Maybe<Last_Week_Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Last_Week_Orders_Var_Samp_Fields>;
  variance?: Maybe<Last_Week_Orders_Variance_Fields>;
};


/** aggregate fields of "last_week_orders" */
export type Last_Week_Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Last_Week_Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Last_Week_Orders_Avg_Fields = {
  __typename?: 'last_week_orders_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
  sum?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "last_week_orders". All fields are combined with a logical 'AND'. */
export type Last_Week_Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Last_Week_Orders_Bool_Exp>>;
  _not?: InputMaybe<Last_Week_Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Last_Week_Orders_Bool_Exp>>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  sum?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Last_Week_Orders_Max_Fields = {
  __typename?: 'last_week_orders_max_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Last_Week_Orders_Min_Fields = {
  __typename?: 'last_week_orders_min_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** Ordering options when selecting data from "last_week_orders". */
export type Last_Week_Orders_Order_By = {
  count?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** select columns of table "last_week_orders" */
export enum Last_Week_Orders_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Date = 'date',
  /** column name */
  Sum = 'sum'
}

/** aggregate stddev on columns */
export type Last_Week_Orders_Stddev_Fields = {
  __typename?: 'last_week_orders_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
  sum?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Last_Week_Orders_Stddev_Pop_Fields = {
  __typename?: 'last_week_orders_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
  sum?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Last_Week_Orders_Stddev_Samp_Fields = {
  __typename?: 'last_week_orders_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
  sum?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "last_week_orders" */
export type Last_Week_Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Last_Week_Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Last_Week_Orders_Stream_Cursor_Value_Input = {
  count?: InputMaybe<Scalars['bigint']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  sum?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Last_Week_Orders_Sum_Fields = {
  __typename?: 'last_week_orders_sum_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Last_Week_Orders_Var_Pop_Fields = {
  __typename?: 'last_week_orders_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
  sum?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Last_Week_Orders_Var_Samp_Fields = {
  __typename?: 'last_week_orders_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
  sum?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Last_Week_Orders_Variance_Fields = {
  __typename?: 'last_week_orders_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
  sum?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** Admin registration */
  adminRegister?: Maybe<AdminRegisterOutput>;
  createOrder?: Maybe<CreateOrderOutput>;
  customerRegister?: Maybe<CustomerRegisterOutput>;
  /** delete data from the table: "admin" */
  delete_admin?: Maybe<Admin_Mutation_Response>;
  /** delete single row from the table: "admin" */
  delete_admin_by_pk?: Maybe<Admin>;
  /** delete data from the table: "advantages" */
  delete_advantages?: Maybe<Advantages_Mutation_Response>;
  /** delete single row from the table: "advantages" */
  delete_advantages_by_pk?: Maybe<Advantages>;
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "order_status" */
  delete_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** delete single row from the table: "order_status" */
  delete_order_status_by_pk?: Maybe<Order_Status>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "orders_products" */
  delete_orders_products?: Maybe<Orders_Products_Mutation_Response>;
  /** delete single row from the table: "orders_products" */
  delete_orders_products_by_pk?: Maybe<Orders_Products>;
  /** delete data from the table: "payment_status" */
  delete_payment_status?: Maybe<Payment_Status_Mutation_Response>;
  /** delete single row from the table: "payment_status" */
  delete_payment_status_by_pk?: Maybe<Payment_Status>;
  /** delete data from the table: "payment_types" */
  delete_payment_types?: Maybe<Payment_Types_Mutation_Response>;
  /** delete single row from the table: "payment_types" */
  delete_payment_types_by_pk?: Maybe<Payment_Types>;
  /** delete data from the table: "personnel" */
  delete_personnel?: Maybe<Personnel_Mutation_Response>;
  /** delete single row from the table: "personnel" */
  delete_personnel_by_pk?: Maybe<Personnel>;
  /** delete data from the table: "personnel_categories" */
  delete_personnel_categories?: Maybe<Personnel_Categories_Mutation_Response>;
  /** delete single row from the table: "personnel_categories" */
  delete_personnel_categories_by_pk?: Maybe<Personnel_Categories>;
  /** delete data from the table: "price_list" */
  delete_price_list?: Maybe<Price_List_Mutation_Response>;
  /** delete single row from the table: "price_list" */
  delete_price_list_by_pk?: Maybe<Price_List>;
  /** delete data from the table: "price_list_categories" */
  delete_price_list_categories?: Maybe<Price_List_Categories_Mutation_Response>;
  /** delete single row from the table: "price_list_categories" */
  delete_price_list_categories_by_pk?: Maybe<Price_List_Categories>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "products_categories" */
  delete_products_categories?: Maybe<Products_Categories_Mutation_Response>;
  /** delete single row from the table: "products_categories" */
  delete_products_categories_by_pk?: Maybe<Products_Categories>;
  /** delete data from the table: "services" */
  delete_services?: Maybe<Services_Mutation_Response>;
  /** delete single row from the table: "services" */
  delete_services_by_pk?: Maybe<Services>;
  /** insert data into the table: "admin" */
  insert_admin?: Maybe<Admin_Mutation_Response>;
  /** insert a single row into the table: "admin" */
  insert_admin_one?: Maybe<Admin>;
  /** insert data into the table: "advantages" */
  insert_advantages?: Maybe<Advantages_Mutation_Response>;
  /** insert a single row into the table: "advantages" */
  insert_advantages_one?: Maybe<Advantages>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "order_status" */
  insert_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** insert a single row into the table: "order_status" */
  insert_order_status_one?: Maybe<Order_Status>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "orders_products" */
  insert_orders_products?: Maybe<Orders_Products_Mutation_Response>;
  /** insert a single row into the table: "orders_products" */
  insert_orders_products_one?: Maybe<Orders_Products>;
  /** insert data into the table: "payment_status" */
  insert_payment_status?: Maybe<Payment_Status_Mutation_Response>;
  /** insert a single row into the table: "payment_status" */
  insert_payment_status_one?: Maybe<Payment_Status>;
  /** insert data into the table: "payment_types" */
  insert_payment_types?: Maybe<Payment_Types_Mutation_Response>;
  /** insert a single row into the table: "payment_types" */
  insert_payment_types_one?: Maybe<Payment_Types>;
  /** insert data into the table: "personnel" */
  insert_personnel?: Maybe<Personnel_Mutation_Response>;
  /** insert data into the table: "personnel_categories" */
  insert_personnel_categories?: Maybe<Personnel_Categories_Mutation_Response>;
  /** insert a single row into the table: "personnel_categories" */
  insert_personnel_categories_one?: Maybe<Personnel_Categories>;
  /** insert a single row into the table: "personnel" */
  insert_personnel_one?: Maybe<Personnel>;
  /** insert data into the table: "price_list" */
  insert_price_list?: Maybe<Price_List_Mutation_Response>;
  /** insert data into the table: "price_list_categories" */
  insert_price_list_categories?: Maybe<Price_List_Categories_Mutation_Response>;
  /** insert a single row into the table: "price_list_categories" */
  insert_price_list_categories_one?: Maybe<Price_List_Categories>;
  /** insert a single row into the table: "price_list" */
  insert_price_list_one?: Maybe<Price_List>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert data into the table: "products_categories" */
  insert_products_categories?: Maybe<Products_Categories_Mutation_Response>;
  /** insert a single row into the table: "products_categories" */
  insert_products_categories_one?: Maybe<Products_Categories>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "services" */
  insert_services?: Maybe<Services_Mutation_Response>;
  /** insert a single row into the table: "services" */
  insert_services_one?: Maybe<Services>;
  /** update data of the table: "admin" */
  update_admin?: Maybe<Admin_Mutation_Response>;
  /** update single row of the table: "admin" */
  update_admin_by_pk?: Maybe<Admin>;
  /** update multiples rows of table: "admin" */
  update_admin_many?: Maybe<Array<Maybe<Admin_Mutation_Response>>>;
  /** update data of the table: "advantages" */
  update_advantages?: Maybe<Advantages_Mutation_Response>;
  /** update single row of the table: "advantages" */
  update_advantages_by_pk?: Maybe<Advantages>;
  /** update multiples rows of table: "advantages" */
  update_advantages_many?: Maybe<Array<Maybe<Advantages_Mutation_Response>>>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update multiples rows of table: "customers" */
  update_customers_many?: Maybe<Array<Maybe<Customers_Mutation_Response>>>;
  /** update data of the table: "order_status" */
  update_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** update single row of the table: "order_status" */
  update_order_status_by_pk?: Maybe<Order_Status>;
  /** update multiples rows of table: "order_status" */
  update_order_status_many?: Maybe<Array<Maybe<Order_Status_Mutation_Response>>>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
  /** update data of the table: "orders_products" */
  update_orders_products?: Maybe<Orders_Products_Mutation_Response>;
  /** update single row of the table: "orders_products" */
  update_orders_products_by_pk?: Maybe<Orders_Products>;
  /** update multiples rows of table: "orders_products" */
  update_orders_products_many?: Maybe<Array<Maybe<Orders_Products_Mutation_Response>>>;
  /** update data of the table: "payment_status" */
  update_payment_status?: Maybe<Payment_Status_Mutation_Response>;
  /** update single row of the table: "payment_status" */
  update_payment_status_by_pk?: Maybe<Payment_Status>;
  /** update multiples rows of table: "payment_status" */
  update_payment_status_many?: Maybe<Array<Maybe<Payment_Status_Mutation_Response>>>;
  /** update data of the table: "payment_types" */
  update_payment_types?: Maybe<Payment_Types_Mutation_Response>;
  /** update single row of the table: "payment_types" */
  update_payment_types_by_pk?: Maybe<Payment_Types>;
  /** update multiples rows of table: "payment_types" */
  update_payment_types_many?: Maybe<Array<Maybe<Payment_Types_Mutation_Response>>>;
  /** update data of the table: "personnel" */
  update_personnel?: Maybe<Personnel_Mutation_Response>;
  /** update single row of the table: "personnel" */
  update_personnel_by_pk?: Maybe<Personnel>;
  /** update data of the table: "personnel_categories" */
  update_personnel_categories?: Maybe<Personnel_Categories_Mutation_Response>;
  /** update single row of the table: "personnel_categories" */
  update_personnel_categories_by_pk?: Maybe<Personnel_Categories>;
  /** update multiples rows of table: "personnel_categories" */
  update_personnel_categories_many?: Maybe<Array<Maybe<Personnel_Categories_Mutation_Response>>>;
  /** update multiples rows of table: "personnel" */
  update_personnel_many?: Maybe<Array<Maybe<Personnel_Mutation_Response>>>;
  /** update data of the table: "price_list" */
  update_price_list?: Maybe<Price_List_Mutation_Response>;
  /** update single row of the table: "price_list" */
  update_price_list_by_pk?: Maybe<Price_List>;
  /** update data of the table: "price_list_categories" */
  update_price_list_categories?: Maybe<Price_List_Categories_Mutation_Response>;
  /** update single row of the table: "price_list_categories" */
  update_price_list_categories_by_pk?: Maybe<Price_List_Categories>;
  /** update multiples rows of table: "price_list_categories" */
  update_price_list_categories_many?: Maybe<Array<Maybe<Price_List_Categories_Mutation_Response>>>;
  /** update multiples rows of table: "price_list" */
  update_price_list_many?: Maybe<Array<Maybe<Price_List_Mutation_Response>>>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "products_categories" */
  update_products_categories?: Maybe<Products_Categories_Mutation_Response>;
  /** update single row of the table: "products_categories" */
  update_products_categories_by_pk?: Maybe<Products_Categories>;
  /** update multiples rows of table: "products_categories" */
  update_products_categories_many?: Maybe<Array<Maybe<Products_Categories_Mutation_Response>>>;
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>;
  /** update data of the table: "services" */
  update_services?: Maybe<Services_Mutation_Response>;
  /** update single row of the table: "services" */
  update_services_by_pk?: Maybe<Services>;
  /** update multiples rows of table: "services" */
  update_services_many?: Maybe<Array<Maybe<Services_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootAdminRegisterArgs = {
  admin: AdminRegisterInput;
};


/** mutation root */
export type Mutation_RootCreateOrderArgs = {
  order: CreateOrderInput;
};


/** mutation root */
export type Mutation_RootCustomerRegisterArgs = {
  customer: CustomerRegisterInput;
};


/** mutation root */
export type Mutation_RootDelete_AdminArgs = {
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Admin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_AdvantagesArgs = {
  where: Advantages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Advantages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Order_StatusArgs = {
  where: Order_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Status_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Orders_ProductsArgs = {
  where: Orders_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_Products_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Payment_StatusArgs = {
  where: Payment_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_Status_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Payment_TypesArgs = {
  where: Payment_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_Types_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PersonnelArgs = {
  where: Personnel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Personnel_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Personnel_CategoriesArgs = {
  where: Personnel_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Personnel_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Price_ListArgs = {
  where: Price_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Price_List_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Price_List_CategoriesArgs = {
  where: Price_List_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Price_List_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Products_CategoriesArgs = {
  where: Products_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ServicesArgs = {
  where: Services_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Services_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AdminArgs = {
  objects: Array<Admin_Insert_Input>;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Admin_OneArgs = {
  object: Admin_Insert_Input;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AdvantagesArgs = {
  objects: Array<Advantages_Insert_Input>;
  on_conflict?: InputMaybe<Advantages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Advantages_OneArgs = {
  object: Advantages_Insert_Input;
  on_conflict?: InputMaybe<Advantages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_StatusArgs = {
  objects: Array<Order_Status_Insert_Input>;
  on_conflict?: InputMaybe<Order_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Status_OneArgs = {
  object: Order_Status_Insert_Input;
  on_conflict?: InputMaybe<Order_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_ProductsArgs = {
  objects: Array<Orders_Products_Insert_Input>;
  on_conflict?: InputMaybe<Orders_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_Products_OneArgs = {
  object: Orders_Products_Insert_Input;
  on_conflict?: InputMaybe<Orders_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_StatusArgs = {
  objects: Array<Payment_Status_Insert_Input>;
  on_conflict?: InputMaybe<Payment_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_Status_OneArgs = {
  object: Payment_Status_Insert_Input;
  on_conflict?: InputMaybe<Payment_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_TypesArgs = {
  objects: Array<Payment_Types_Insert_Input>;
  on_conflict?: InputMaybe<Payment_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_Types_OneArgs = {
  object: Payment_Types_Insert_Input;
  on_conflict?: InputMaybe<Payment_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PersonnelArgs = {
  objects: Array<Personnel_Insert_Input>;
  on_conflict?: InputMaybe<Personnel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Personnel_CategoriesArgs = {
  objects: Array<Personnel_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Personnel_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Personnel_Categories_OneArgs = {
  object: Personnel_Categories_Insert_Input;
  on_conflict?: InputMaybe<Personnel_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Personnel_OneArgs = {
  object: Personnel_Insert_Input;
  on_conflict?: InputMaybe<Personnel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Price_ListArgs = {
  objects: Array<Price_List_Insert_Input>;
  on_conflict?: InputMaybe<Price_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Price_List_CategoriesArgs = {
  objects: Array<Price_List_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Price_List_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Price_List_Categories_OneArgs = {
  object: Price_List_Categories_Insert_Input;
  on_conflict?: InputMaybe<Price_List_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Price_List_OneArgs = {
  object: Price_List_Insert_Input;
  on_conflict?: InputMaybe<Price_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_CategoriesArgs = {
  objects: Array<Products_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Products_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_Categories_OneArgs = {
  object: Products_Categories_Insert_Input;
  on_conflict?: InputMaybe<Products_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ServicesArgs = {
  objects: Array<Services_Insert_Input>;
  on_conflict?: InputMaybe<Services_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Services_OneArgs = {
  object: Services_Insert_Input;
  on_conflict?: InputMaybe<Services_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AdminArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_By_PkArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  pk_columns: Admin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_ManyArgs = {
  updates: Array<Admin_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AdvantagesArgs = {
  _set?: InputMaybe<Advantages_Set_Input>;
  where: Advantages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Advantages_By_PkArgs = {
  _set?: InputMaybe<Advantages_Set_Input>;
  pk_columns: Advantages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Advantages_ManyArgs = {
  updates: Array<Advantages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_ManyArgs = {
  updates: Array<Customers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Order_StatusArgs = {
  _set?: InputMaybe<Order_Status_Set_Input>;
  where: Order_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Status_By_PkArgs = {
  _set?: InputMaybe<Order_Status_Set_Input>;
  pk_columns: Order_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Status_ManyArgs = {
  updates: Array<Order_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ProductsArgs = {
  _inc?: InputMaybe<Orders_Products_Inc_Input>;
  _set?: InputMaybe<Orders_Products_Set_Input>;
  where: Orders_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_Products_By_PkArgs = {
  _inc?: InputMaybe<Orders_Products_Inc_Input>;
  _set?: InputMaybe<Orders_Products_Set_Input>;
  pk_columns: Orders_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_Products_ManyArgs = {
  updates: Array<Orders_Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_StatusArgs = {
  _set?: InputMaybe<Payment_Status_Set_Input>;
  where: Payment_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Status_By_PkArgs = {
  _set?: InputMaybe<Payment_Status_Set_Input>;
  pk_columns: Payment_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Status_ManyArgs = {
  updates: Array<Payment_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_TypesArgs = {
  _set?: InputMaybe<Payment_Types_Set_Input>;
  where: Payment_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Types_By_PkArgs = {
  _set?: InputMaybe<Payment_Types_Set_Input>;
  pk_columns: Payment_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Types_ManyArgs = {
  updates: Array<Payment_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PersonnelArgs = {
  _set?: InputMaybe<Personnel_Set_Input>;
  where: Personnel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Personnel_By_PkArgs = {
  _set?: InputMaybe<Personnel_Set_Input>;
  pk_columns: Personnel_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Personnel_CategoriesArgs = {
  _set?: InputMaybe<Personnel_Categories_Set_Input>;
  where: Personnel_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Personnel_Categories_By_PkArgs = {
  _set?: InputMaybe<Personnel_Categories_Set_Input>;
  pk_columns: Personnel_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Personnel_Categories_ManyArgs = {
  updates: Array<Personnel_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Personnel_ManyArgs = {
  updates: Array<Personnel_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Price_ListArgs = {
  _inc?: InputMaybe<Price_List_Inc_Input>;
  _set?: InputMaybe<Price_List_Set_Input>;
  where: Price_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Price_List_By_PkArgs = {
  _inc?: InputMaybe<Price_List_Inc_Input>;
  _set?: InputMaybe<Price_List_Set_Input>;
  pk_columns: Price_List_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Price_List_CategoriesArgs = {
  _set?: InputMaybe<Price_List_Categories_Set_Input>;
  where: Price_List_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Price_List_Categories_By_PkArgs = {
  _set?: InputMaybe<Price_List_Categories_Set_Input>;
  pk_columns: Price_List_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Price_List_Categories_ManyArgs = {
  updates: Array<Price_List_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Price_List_ManyArgs = {
  updates: Array<Price_List_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Products_CategoriesArgs = {
  _set?: InputMaybe<Products_Categories_Set_Input>;
  where: Products_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_Categories_By_PkArgs = {
  _set?: InputMaybe<Products_Categories_Set_Input>;
  pk_columns: Products_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Products_Categories_ManyArgs = {
  updates: Array<Products_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Products_ManyArgs = {
  updates: Array<Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ServicesArgs = {
  _set?: InputMaybe<Services_Set_Input>;
  where: Services_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Services_By_PkArgs = {
  _set?: InputMaybe<Services_Set_Input>;
  pk_columns: Services_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Services_ManyArgs = {
  updates: Array<Services_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "order_status" */
export type Order_Status = {
  __typename?: 'order_status';
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

/** aggregated selection of "order_status" */
export type Order_Status_Aggregate = {
  __typename?: 'order_status_aggregate';
  aggregate?: Maybe<Order_Status_Aggregate_Fields>;
  nodes: Array<Order_Status>;
};

/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_Fields = {
  __typename?: 'order_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Order_Status_Max_Fields>;
  min?: Maybe<Order_Status_Min_Fields>;
};


/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "order_status". All fields are combined with a logical 'AND'. */
export type Order_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Status_Bool_Exp>>;
  _not?: InputMaybe<Order_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Status_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_status" */
export enum Order_Status_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderStatusPkey = 'order_status_pkey'
}

export enum Order_Status_Enum {
  /** Відмінений */
  Canceled = 'CANCELED',
  /** Виданий клієнту */
  Delivered = 'DELIVERED',
  /** Відправлений */
  Done = 'DONE',
  /** Готується до відправки */
  InProgress = 'IN_PROGRESS',
  /** Новий */
  New = 'NEW'
}

/** Boolean expression to compare columns of type "order_status_enum". All fields are combined with logical 'AND'. */
export type Order_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Order_Status_Enum>;
  _in?: InputMaybe<Array<Order_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Order_Status_Enum>;
  _nin?: InputMaybe<Array<Order_Status_Enum>>;
};

/** input type for inserting data into table "order_status" */
export type Order_Status_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Order_Status_Max_Fields = {
  __typename?: 'order_status_max_fields';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Order_Status_Min_Fields = {
  __typename?: 'order_status_min_fields';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "order_status" */
export type Order_Status_Mutation_Response = {
  __typename?: 'order_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Status>;
};

/** on_conflict condition type for table "order_status" */
export type Order_Status_On_Conflict = {
  constraint: Order_Status_Constraint;
  update_columns?: Array<Order_Status_Update_Column>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "order_status". */
export type Order_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_status */
export type Order_Status_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "order_status" */
export enum Order_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

/** input type for updating data in table "order_status" */
export type Order_Status_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "order_status" */
export type Order_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Status_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "order_status" */
export enum Order_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

export type Order_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Status_Bool_Exp;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  /** An object relationship */
  Customer?: Maybe<Customers>;
  client_address: Scalars['String']['output'];
  client_name: Scalars['String']['output'];
  client_phone: Scalars['String']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  order_items: Array<Orders_Products>;
  /** An aggregate relationship */
  order_items_aggregate: Orders_Products_Aggregate;
  payment_id?: Maybe<Scalars['Int']['output']>;
  payment_status?: Maybe<Payment_Status_Enum>;
  payment_type: Payment_Types_Enum;
  status?: Maybe<Order_Status_Enum>;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

export type Orders_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orders_Aggregate_Bool_Exp_Count>;
};

export type Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
  stddev?: InputMaybe<Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  payment_id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  Customer?: InputMaybe<Customers_Bool_Exp>;
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  client_address?: InputMaybe<String_Comparison_Exp>;
  client_name?: InputMaybe<String_Comparison_Exp>;
  client_phone?: InputMaybe<String_Comparison_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order_items?: InputMaybe<Orders_Products_Bool_Exp>;
  order_items_aggregate?: InputMaybe<Orders_Products_Aggregate_Bool_Exp>;
  payment_id?: InputMaybe<Int_Comparison_Exp>;
  payment_status?: InputMaybe<Payment_Status_Enum_Comparison_Exp>;
  payment_type?: InputMaybe<Payment_Types_Enum_Comparison_Exp>;
  status?: InputMaybe<Order_Status_Enum_Comparison_Exp>;
  sum?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  payment_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  Customer?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  client_address?: InputMaybe<Scalars['String']['input']>;
  client_name?: InputMaybe<Scalars['String']['input']>;
  client_phone?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order_items?: InputMaybe<Orders_Products_Arr_Rel_Insert_Input>;
  payment_id?: InputMaybe<Scalars['Int']['input']>;
  payment_status?: InputMaybe<Payment_Status_Enum>;
  payment_type?: InputMaybe<Payment_Types_Enum>;
  status?: InputMaybe<Order_Status_Enum>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  client_address?: Maybe<Scalars['String']['output']>;
  client_name?: Maybe<Scalars['String']['output']>;
  client_phone?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  payment_id?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  client_address?: InputMaybe<Order_By>;
  client_name?: InputMaybe<Order_By>;
  client_phone?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  client_address?: Maybe<Scalars['String']['output']>;
  client_name?: Maybe<Scalars['String']['output']>;
  client_phone?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  payment_id?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  client_address?: InputMaybe<Order_By>;
  client_name?: InputMaybe<Order_By>;
  client_phone?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  Customer?: InputMaybe<Customers_Order_By>;
  client_address?: InputMaybe<Order_By>;
  client_name?: InputMaybe<Order_By>;
  client_phone?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_items_aggregate?: InputMaybe<Orders_Products_Aggregate_Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  payment_type?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "orders_products" */
export type Orders_Products = {
  __typename?: 'orders_products';
  amount: Scalars['numeric']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  item?: Maybe<Products>;
  /** An object relationship */
  order?: Maybe<Orders>;
  order_id: Scalars['uuid']['output'];
  products_id: Scalars['uuid']['output'];
};

/** aggregated selection of "orders_products" */
export type Orders_Products_Aggregate = {
  __typename?: 'orders_products_aggregate';
  aggregate?: Maybe<Orders_Products_Aggregate_Fields>;
  nodes: Array<Orders_Products>;
};

export type Orders_Products_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orders_Products_Aggregate_Bool_Exp_Count>;
};

export type Orders_Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orders_Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders_products" */
export type Orders_Products_Aggregate_Fields = {
  __typename?: 'orders_products_aggregate_fields';
  avg?: Maybe<Orders_Products_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orders_Products_Max_Fields>;
  min?: Maybe<Orders_Products_Min_Fields>;
  stddev?: Maybe<Orders_Products_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Products_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Products_Sum_Fields>;
  var_pop?: Maybe<Orders_Products_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Products_Var_Samp_Fields>;
  variance?: Maybe<Orders_Products_Variance_Fields>;
};


/** aggregate fields of "orders_products" */
export type Orders_Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orders_products" */
export type Orders_Products_Aggregate_Order_By = {
  avg?: InputMaybe<Orders_Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Products_Max_Order_By>;
  min?: InputMaybe<Orders_Products_Min_Order_By>;
  stddev?: InputMaybe<Orders_Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orders_Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orders_Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orders_Products_Sum_Order_By>;
  var_pop?: InputMaybe<Orders_Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orders_Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Orders_Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders_products" */
export type Orders_Products_Arr_Rel_Insert_Input = {
  data: Array<Orders_Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Products_Avg_Fields = {
  __typename?: 'orders_products_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orders_products" */
export type Orders_Products_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders_products". All fields are combined with a logical 'AND'. */
export type Orders_Products_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Products_Bool_Exp>>;
  _not?: InputMaybe<Orders_Products_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Products_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  item?: InputMaybe<Products_Bool_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  order_id?: InputMaybe<Uuid_Comparison_Exp>;
  products_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders_products" */
export enum Orders_Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersProductsPkey = 'orders_products_pkey'
}

/** input type for incrementing numeric columns in table "orders_products" */
export type Orders_Products_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "orders_products" */
export type Orders_Products_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  item?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['uuid']['input']>;
  products_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Orders_Products_Max_Fields = {
  __typename?: 'orders_products_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  order_id?: Maybe<Scalars['uuid']['output']>;
  products_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "orders_products" */
export type Orders_Products_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  products_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Products_Min_Fields = {
  __typename?: 'orders_products_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  order_id?: Maybe<Scalars['uuid']['output']>;
  products_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "orders_products" */
export type Orders_Products_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  products_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders_products" */
export type Orders_Products_Mutation_Response = {
  __typename?: 'orders_products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders_Products>;
};

/** on_conflict condition type for table "orders_products" */
export type Orders_Products_On_Conflict = {
  constraint: Orders_Products_Constraint;
  update_columns?: Array<Orders_Products_Update_Column>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "orders_products". */
export type Orders_Products_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item?: InputMaybe<Products_Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  order_id?: InputMaybe<Order_By>;
  products_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders_products */
export type Orders_Products_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "orders_products" */
export enum Orders_Products_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductsId = 'products_id'
}

/** input type for updating data in table "orders_products" */
export type Orders_Products_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order_id?: InputMaybe<Scalars['uuid']['input']>;
  products_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Orders_Products_Stddev_Fields = {
  __typename?: 'orders_products_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orders_products" */
export type Orders_Products_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Products_Stddev_Pop_Fields = {
  __typename?: 'orders_products_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orders_products" */
export type Orders_Products_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Products_Stddev_Samp_Fields = {
  __typename?: 'orders_products_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orders_products" */
export type Orders_Products_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orders_products" */
export type Orders_Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Products_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order_id?: InputMaybe<Scalars['uuid']['input']>;
  products_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Orders_Products_Sum_Fields = {
  __typename?: 'orders_products_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "orders_products" */
export type Orders_Products_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** update columns of table "orders_products" */
export enum Orders_Products_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductsId = 'products_id'
}

export type Orders_Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Orders_Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orders_Products_Var_Pop_Fields = {
  __typename?: 'orders_products_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orders_products" */
export type Orders_Products_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Products_Var_Samp_Fields = {
  __typename?: 'orders_products_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orders_products" */
export type Orders_Products_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Products_Variance_Fields = {
  __typename?: 'orders_products_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orders_products" */
export type Orders_Products_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  ClientAddress = 'client_address',
  /** column name */
  ClientName = 'client_name',
  /** column name */
  ClientPhone = 'client_phone',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  client_address?: InputMaybe<Scalars['String']['input']>;
  client_name?: InputMaybe<Scalars['String']['input']>;
  client_phone?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payment_id?: InputMaybe<Scalars['Int']['input']>;
  payment_status?: InputMaybe<Payment_Status_Enum>;
  payment_type?: InputMaybe<Payment_Types_Enum>;
  status?: InputMaybe<Order_Status_Enum>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  payment_id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  payment_id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  payment_id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  client_address?: InputMaybe<Scalars['String']['input']>;
  client_name?: InputMaybe<Scalars['String']['input']>;
  client_phone?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payment_id?: InputMaybe<Scalars['Int']['input']>;
  payment_status?: InputMaybe<Payment_Status_Enum>;
  payment_type?: InputMaybe<Payment_Types_Enum>;
  status?: InputMaybe<Order_Status_Enum>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  payment_id?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  ClientAddress = 'client_address',
  /** column name */
  ClientName = 'client_name',
  /** column name */
  ClientPhone = 'client_phone',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  Status = 'status'
}

export type Orders_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Orders_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  payment_id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  payment_id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  payment_id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "payment_status" */
export type Payment_Status = {
  __typename?: 'payment_status';
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

/** aggregated selection of "payment_status" */
export type Payment_Status_Aggregate = {
  __typename?: 'payment_status_aggregate';
  aggregate?: Maybe<Payment_Status_Aggregate_Fields>;
  nodes: Array<Payment_Status>;
};

/** aggregate fields of "payment_status" */
export type Payment_Status_Aggregate_Fields = {
  __typename?: 'payment_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Payment_Status_Max_Fields>;
  min?: Maybe<Payment_Status_Min_Fields>;
};


/** aggregate fields of "payment_status" */
export type Payment_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "payment_status". All fields are combined with a logical 'AND'. */
export type Payment_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Payment_Status_Bool_Exp>>;
  _not?: InputMaybe<Payment_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Payment_Status_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment_status" */
export enum Payment_Status_Constraint {
  /** unique or primary key constraint on columns "id" */
  PaymentStatusPkey = 'payment_status_pkey'
}

export enum Payment_Status_Enum {
  /** Оплату відмінено */
  Failed = 'FAILED',
  /** Очікуємо оплати */
  Processing = 'PROCESSING',
  /** Оплачено */
  Succeeded = 'SUCCEEDED'
}

/** Boolean expression to compare columns of type "payment_status_enum". All fields are combined with logical 'AND'. */
export type Payment_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Payment_Status_Enum>;
  _in?: InputMaybe<Array<Payment_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Payment_Status_Enum>;
  _nin?: InputMaybe<Array<Payment_Status_Enum>>;
};

/** input type for inserting data into table "payment_status" */
export type Payment_Status_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Payment_Status_Max_Fields = {
  __typename?: 'payment_status_max_fields';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Payment_Status_Min_Fields = {
  __typename?: 'payment_status_min_fields';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "payment_status" */
export type Payment_Status_Mutation_Response = {
  __typename?: 'payment_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment_Status>;
};

/** on_conflict condition type for table "payment_status" */
export type Payment_Status_On_Conflict = {
  constraint: Payment_Status_Constraint;
  update_columns?: Array<Payment_Status_Update_Column>;
  where?: InputMaybe<Payment_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "payment_status". */
export type Payment_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payment_status */
export type Payment_Status_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "payment_status" */
export enum Payment_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

/** input type for updating data in table "payment_status" */
export type Payment_Status_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "payment_status" */
export type Payment_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payment_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payment_Status_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "payment_status" */
export enum Payment_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

export type Payment_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payment_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Payment_Status_Bool_Exp;
};

/** columns and relationships of "payment_types" */
export type Payment_Types = {
  __typename?: 'payment_types';
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

/** aggregated selection of "payment_types" */
export type Payment_Types_Aggregate = {
  __typename?: 'payment_types_aggregate';
  aggregate?: Maybe<Payment_Types_Aggregate_Fields>;
  nodes: Array<Payment_Types>;
};

/** aggregate fields of "payment_types" */
export type Payment_Types_Aggregate_Fields = {
  __typename?: 'payment_types_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Payment_Types_Max_Fields>;
  min?: Maybe<Payment_Types_Min_Fields>;
};


/** aggregate fields of "payment_types" */
export type Payment_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "payment_types". All fields are combined with a logical 'AND'. */
export type Payment_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Payment_Types_Bool_Exp>>;
  _not?: InputMaybe<Payment_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Payment_Types_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment_types" */
export enum Payment_Types_Constraint {
  /** unique or primary key constraint on columns "id" */
  PaymentTypePkey = 'payment_type_pkey'
}

export enum Payment_Types_Enum {
  /** Картка */
  Card = 'CARD',
  /** Готівка */
  Cash = 'CASH',
  /** Онлайн */
  Online = 'Online'
}

/** Boolean expression to compare columns of type "payment_types_enum". All fields are combined with logical 'AND'. */
export type Payment_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Payment_Types_Enum>;
  _in?: InputMaybe<Array<Payment_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Payment_Types_Enum>;
  _nin?: InputMaybe<Array<Payment_Types_Enum>>;
};

/** input type for inserting data into table "payment_types" */
export type Payment_Types_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Payment_Types_Max_Fields = {
  __typename?: 'payment_types_max_fields';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Payment_Types_Min_Fields = {
  __typename?: 'payment_types_min_fields';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "payment_types" */
export type Payment_Types_Mutation_Response = {
  __typename?: 'payment_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment_Types>;
};

/** on_conflict condition type for table "payment_types" */
export type Payment_Types_On_Conflict = {
  constraint: Payment_Types_Constraint;
  update_columns?: Array<Payment_Types_Update_Column>;
  where?: InputMaybe<Payment_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "payment_types". */
export type Payment_Types_Order_By = {
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payment_types */
export type Payment_Types_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "payment_types" */
export enum Payment_Types_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

/** input type for updating data in table "payment_types" */
export type Payment_Types_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "payment_types" */
export type Payment_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payment_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payment_Types_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "payment_types" */
export enum Payment_Types_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

export type Payment_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payment_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Payment_Types_Bool_Exp;
};

/** columns and relationships of "personnel" */
export type Personnel = {
  __typename?: 'personnel';
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  personnel_category?: Maybe<Personnel_Categories>;
  personnel_category_id: Scalars['uuid']['output'];
  specialty?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "personnel" */
export type Personnel_Aggregate = {
  __typename?: 'personnel_aggregate';
  aggregate?: Maybe<Personnel_Aggregate_Fields>;
  nodes: Array<Personnel>;
};

export type Personnel_Aggregate_Bool_Exp = {
  count?: InputMaybe<Personnel_Aggregate_Bool_Exp_Count>;
};

export type Personnel_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Personnel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Personnel_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "personnel" */
export type Personnel_Aggregate_Fields = {
  __typename?: 'personnel_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Personnel_Max_Fields>;
  min?: Maybe<Personnel_Min_Fields>;
};


/** aggregate fields of "personnel" */
export type Personnel_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Personnel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "personnel" */
export type Personnel_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Personnel_Max_Order_By>;
  min?: InputMaybe<Personnel_Min_Order_By>;
};

/** input type for inserting array relation for remote table "personnel" */
export type Personnel_Arr_Rel_Insert_Input = {
  data: Array<Personnel_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Personnel_On_Conflict>;
};

/** Boolean expression to filter rows from the table "personnel". All fields are combined with a logical 'AND'. */
export type Personnel_Bool_Exp = {
  _and?: InputMaybe<Array<Personnel_Bool_Exp>>;
  _not?: InputMaybe<Personnel_Bool_Exp>;
  _or?: InputMaybe<Array<Personnel_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  personnel_category?: InputMaybe<Personnel_Categories_Bool_Exp>;
  personnel_category_id?: InputMaybe<Uuid_Comparison_Exp>;
  specialty?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "personnel_categories" */
export type Personnel_Categories = {
  __typename?: 'personnel_categories';
  id: Scalars['uuid']['output'];
  /** An array relationship */
  personnel_items: Array<Personnel>;
  /** An aggregate relationship */
  personnel_items_aggregate: Personnel_Aggregate;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** columns and relationships of "personnel_categories" */
export type Personnel_CategoriesPersonnel_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


/** columns and relationships of "personnel_categories" */
export type Personnel_CategoriesPersonnel_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};

/** aggregated selection of "personnel_categories" */
export type Personnel_Categories_Aggregate = {
  __typename?: 'personnel_categories_aggregate';
  aggregate?: Maybe<Personnel_Categories_Aggregate_Fields>;
  nodes: Array<Personnel_Categories>;
};

/** aggregate fields of "personnel_categories" */
export type Personnel_Categories_Aggregate_Fields = {
  __typename?: 'personnel_categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Personnel_Categories_Max_Fields>;
  min?: Maybe<Personnel_Categories_Min_Fields>;
};


/** aggregate fields of "personnel_categories" */
export type Personnel_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Personnel_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "personnel_categories". All fields are combined with a logical 'AND'. */
export type Personnel_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Personnel_Categories_Bool_Exp>>;
  _not?: InputMaybe<Personnel_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Personnel_Categories_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  personnel_items?: InputMaybe<Personnel_Bool_Exp>;
  personnel_items_aggregate?: InputMaybe<Personnel_Aggregate_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "personnel_categories" */
export enum Personnel_Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  PersonnelCategoriesPkey = 'personnel_categories_pkey'
}

/** input type for inserting data into table "personnel_categories" */
export type Personnel_Categories_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  personnel_items?: InputMaybe<Personnel_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Personnel_Categories_Max_Fields = {
  __typename?: 'personnel_categories_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Personnel_Categories_Min_Fields = {
  __typename?: 'personnel_categories_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "personnel_categories" */
export type Personnel_Categories_Mutation_Response = {
  __typename?: 'personnel_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Personnel_Categories>;
};

/** input type for inserting object relation for remote table "personnel_categories" */
export type Personnel_Categories_Obj_Rel_Insert_Input = {
  data: Personnel_Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Personnel_Categories_On_Conflict>;
};

/** on_conflict condition type for table "personnel_categories" */
export type Personnel_Categories_On_Conflict = {
  constraint: Personnel_Categories_Constraint;
  update_columns?: Array<Personnel_Categories_Update_Column>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "personnel_categories". */
export type Personnel_Categories_Order_By = {
  id?: InputMaybe<Order_By>;
  personnel_items_aggregate?: InputMaybe<Personnel_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: personnel_categories */
export type Personnel_Categories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "personnel_categories" */
export enum Personnel_Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "personnel_categories" */
export type Personnel_Categories_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "personnel_categories" */
export type Personnel_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Personnel_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Personnel_Categories_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "personnel_categories" */
export enum Personnel_Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

export type Personnel_Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Personnel_Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Personnel_Categories_Bool_Exp;
};

/** unique or primary key constraints on table "personnel" */
export enum Personnel_Constraint {
  /** unique or primary key constraint on columns "id" */
  PersonnelPkey = 'personnel_pkey'
}

/** input type for inserting data into table "personnel" */
export type Personnel_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  personnel_category?: InputMaybe<Personnel_Categories_Obj_Rel_Insert_Input>;
  personnel_category_id?: InputMaybe<Scalars['uuid']['input']>;
  specialty?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Personnel_Max_Fields = {
  __typename?: 'personnel_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  personnel_category_id?: Maybe<Scalars['uuid']['output']>;
  specialty?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "personnel" */
export type Personnel_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  personnel_category_id?: InputMaybe<Order_By>;
  specialty?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Personnel_Min_Fields = {
  __typename?: 'personnel_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  personnel_category_id?: Maybe<Scalars['uuid']['output']>;
  specialty?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "personnel" */
export type Personnel_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  personnel_category_id?: InputMaybe<Order_By>;
  specialty?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "personnel" */
export type Personnel_Mutation_Response = {
  __typename?: 'personnel_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Personnel>;
};

/** on_conflict condition type for table "personnel" */
export type Personnel_On_Conflict = {
  constraint: Personnel_Constraint;
  update_columns?: Array<Personnel_Update_Column>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};

/** Ordering options when selecting data from "personnel". */
export type Personnel_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  personnel_category?: InputMaybe<Personnel_Categories_Order_By>;
  personnel_category_id?: InputMaybe<Order_By>;
  specialty?: InputMaybe<Order_By>;
};

/** primary key columns input for table: personnel */
export type Personnel_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "personnel" */
export enum Personnel_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  PersonnelCategoryId = 'personnel_category_id',
  /** column name */
  Specialty = 'specialty'
}

/** input type for updating data in table "personnel" */
export type Personnel_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  personnel_category_id?: InputMaybe<Scalars['uuid']['input']>;
  specialty?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "personnel" */
export type Personnel_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Personnel_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Personnel_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  personnel_category_id?: InputMaybe<Scalars['uuid']['input']>;
  specialty?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "personnel" */
export enum Personnel_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  PersonnelCategoryId = 'personnel_category_id',
  /** column name */
  Specialty = 'specialty'
}

export type Personnel_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Personnel_Set_Input>;
  /** filter the rows which have to be updated */
  where: Personnel_Bool_Exp;
};

/** columns and relationships of "price_list" */
export type Price_List = {
  __typename?: 'price_list';
  id: Scalars['uuid']['output'];
  price: Scalars['numeric']['output'];
  /** An object relationship */
  price_list_category?: Maybe<Price_List_Categories>;
  price_list_category_id: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
};

/** aggregated selection of "price_list" */
export type Price_List_Aggregate = {
  __typename?: 'price_list_aggregate';
  aggregate?: Maybe<Price_List_Aggregate_Fields>;
  nodes: Array<Price_List>;
};

export type Price_List_Aggregate_Bool_Exp = {
  count?: InputMaybe<Price_List_Aggregate_Bool_Exp_Count>;
};

export type Price_List_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Price_List_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Price_List_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "price_list" */
export type Price_List_Aggregate_Fields = {
  __typename?: 'price_list_aggregate_fields';
  avg?: Maybe<Price_List_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Price_List_Max_Fields>;
  min?: Maybe<Price_List_Min_Fields>;
  stddev?: Maybe<Price_List_Stddev_Fields>;
  stddev_pop?: Maybe<Price_List_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Price_List_Stddev_Samp_Fields>;
  sum?: Maybe<Price_List_Sum_Fields>;
  var_pop?: Maybe<Price_List_Var_Pop_Fields>;
  var_samp?: Maybe<Price_List_Var_Samp_Fields>;
  variance?: Maybe<Price_List_Variance_Fields>;
};


/** aggregate fields of "price_list" */
export type Price_List_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Price_List_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "price_list" */
export type Price_List_Aggregate_Order_By = {
  avg?: InputMaybe<Price_List_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Price_List_Max_Order_By>;
  min?: InputMaybe<Price_List_Min_Order_By>;
  stddev?: InputMaybe<Price_List_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Price_List_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Price_List_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Price_List_Sum_Order_By>;
  var_pop?: InputMaybe<Price_List_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Price_List_Var_Samp_Order_By>;
  variance?: InputMaybe<Price_List_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "price_list" */
export type Price_List_Arr_Rel_Insert_Input = {
  data: Array<Price_List_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Price_List_On_Conflict>;
};

/** aggregate avg on columns */
export type Price_List_Avg_Fields = {
  __typename?: 'price_list_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "price_list" */
export type Price_List_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "price_list". All fields are combined with a logical 'AND'. */
export type Price_List_Bool_Exp = {
  _and?: InputMaybe<Array<Price_List_Bool_Exp>>;
  _not?: InputMaybe<Price_List_Bool_Exp>;
  _or?: InputMaybe<Array<Price_List_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  price_list_category?: InputMaybe<Price_List_Categories_Bool_Exp>;
  price_list_category_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "price_list_categories" */
export type Price_List_Categories = {
  __typename?: 'price_list_categories';
  id: Scalars['uuid']['output'];
  /** An array relationship */
  price_list_items: Array<Price_List>;
  /** An aggregate relationship */
  price_list_items_aggregate: Price_List_Aggregate;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** columns and relationships of "price_list_categories" */
export type Price_List_CategoriesPrice_List_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Order_By>>;
  where?: InputMaybe<Price_List_Bool_Exp>;
};


/** columns and relationships of "price_list_categories" */
export type Price_List_CategoriesPrice_List_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Order_By>>;
  where?: InputMaybe<Price_List_Bool_Exp>;
};

/** aggregated selection of "price_list_categories" */
export type Price_List_Categories_Aggregate = {
  __typename?: 'price_list_categories_aggregate';
  aggregate?: Maybe<Price_List_Categories_Aggregate_Fields>;
  nodes: Array<Price_List_Categories>;
};

/** aggregate fields of "price_list_categories" */
export type Price_List_Categories_Aggregate_Fields = {
  __typename?: 'price_list_categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Price_List_Categories_Max_Fields>;
  min?: Maybe<Price_List_Categories_Min_Fields>;
};


/** aggregate fields of "price_list_categories" */
export type Price_List_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Price_List_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "price_list_categories". All fields are combined with a logical 'AND'. */
export type Price_List_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Price_List_Categories_Bool_Exp>>;
  _not?: InputMaybe<Price_List_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Price_List_Categories_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  price_list_items?: InputMaybe<Price_List_Bool_Exp>;
  price_list_items_aggregate?: InputMaybe<Price_List_Aggregate_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "price_list_categories" */
export enum Price_List_Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  PriceListPkey = 'price_list_pkey'
}

/** input type for inserting data into table "price_list_categories" */
export type Price_List_Categories_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  price_list_items?: InputMaybe<Price_List_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Price_List_Categories_Max_Fields = {
  __typename?: 'price_list_categories_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Price_List_Categories_Min_Fields = {
  __typename?: 'price_list_categories_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "price_list_categories" */
export type Price_List_Categories_Mutation_Response = {
  __typename?: 'price_list_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Price_List_Categories>;
};

/** input type for inserting object relation for remote table "price_list_categories" */
export type Price_List_Categories_Obj_Rel_Insert_Input = {
  data: Price_List_Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Price_List_Categories_On_Conflict>;
};

/** on_conflict condition type for table "price_list_categories" */
export type Price_List_Categories_On_Conflict = {
  constraint: Price_List_Categories_Constraint;
  update_columns?: Array<Price_List_Categories_Update_Column>;
  where?: InputMaybe<Price_List_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "price_list_categories". */
export type Price_List_Categories_Order_By = {
  id?: InputMaybe<Order_By>;
  price_list_items_aggregate?: InputMaybe<Price_List_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: price_list_categories */
export type Price_List_Categories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "price_list_categories" */
export enum Price_List_Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "price_list_categories" */
export type Price_List_Categories_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "price_list_categories" */
export type Price_List_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Price_List_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Price_List_Categories_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "price_list_categories" */
export enum Price_List_Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

export type Price_List_Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Price_List_Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Price_List_Categories_Bool_Exp;
};

/** unique or primary key constraints on table "price_list" */
export enum Price_List_Constraint {
  /** unique or primary key constraint on columns "id" */
  PriceListPkey1 = 'price_list_pkey1'
}

/** input type for incrementing numeric columns in table "price_list" */
export type Price_List_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "price_list" */
export type Price_List_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  price_list_category?: InputMaybe<Price_List_Categories_Obj_Rel_Insert_Input>;
  price_list_category_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Price_List_Max_Fields = {
  __typename?: 'price_list_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  price_list_category_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "price_list" */
export type Price_List_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  price_list_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Price_List_Min_Fields = {
  __typename?: 'price_list_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  price_list_category_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "price_list" */
export type Price_List_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  price_list_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "price_list" */
export type Price_List_Mutation_Response = {
  __typename?: 'price_list_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Price_List>;
};

/** on_conflict condition type for table "price_list" */
export type Price_List_On_Conflict = {
  constraint: Price_List_Constraint;
  update_columns?: Array<Price_List_Update_Column>;
  where?: InputMaybe<Price_List_Bool_Exp>;
};

/** Ordering options when selecting data from "price_list". */
export type Price_List_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  price_list_category?: InputMaybe<Price_List_Categories_Order_By>;
  price_list_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: price_list */
export type Price_List_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "price_list" */
export enum Price_List_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  PriceListCategoryId = 'price_list_category_id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "price_list" */
export type Price_List_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  price_list_category_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Price_List_Stddev_Fields = {
  __typename?: 'price_list_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "price_list" */
export type Price_List_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Price_List_Stddev_Pop_Fields = {
  __typename?: 'price_list_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "price_list" */
export type Price_List_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Price_List_Stddev_Samp_Fields = {
  __typename?: 'price_list_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "price_list" */
export type Price_List_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "price_list" */
export type Price_List_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Price_List_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Price_List_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  price_list_category_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Price_List_Sum_Fields = {
  __typename?: 'price_list_sum_fields';
  price?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "price_list" */
export type Price_List_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** update columns of table "price_list" */
export enum Price_List_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  PriceListCategoryId = 'price_list_category_id',
  /** column name */
  Title = 'title'
}

export type Price_List_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Price_List_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Price_List_Set_Input>;
  /** filter the rows which have to be updated */
  where: Price_List_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Price_List_Var_Pop_Fields = {
  __typename?: 'price_list_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "price_list" */
export type Price_List_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Price_List_Var_Samp_Fields = {
  __typename?: 'price_list_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "price_list" */
export type Price_List_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Price_List_Variance_Fields = {
  __typename?: 'price_list_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "price_list" */
export type Price_List_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  image: Scalars['String']['output'];
  price: Scalars['numeric']['output'];
  /** An object relationship */
  products_category?: Maybe<Products_Categories>;
  products_category_id: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
  weight: Scalars['numeric']['output'];
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

export type Products_Aggregate_Bool_Exp = {
  count?: InputMaybe<Products_Aggregate_Bool_Exp_Count>;
};

export type Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: InputMaybe<Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Products_Max_Order_By>;
  min?: InputMaybe<Products_Min_Order_By>;
  stddev?: InputMaybe<Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Products_Sum_Order_By>;
  var_pop?: InputMaybe<Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  products_category?: InputMaybe<Products_Categories_Bool_Exp>;
  products_category_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
};

/** columns and relationships of "products_categories" */
export type Products_Categories = {
  __typename?: 'products_categories';
  id: Scalars['uuid']['output'];
  /** An array relationship */
  products_items: Array<Products>;
  /** An aggregate relationship */
  products_items_aggregate: Products_Aggregate;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** columns and relationships of "products_categories" */
export type Products_CategoriesProducts_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** columns and relationships of "products_categories" */
export type Products_CategoriesProducts_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** aggregated selection of "products_categories" */
export type Products_Categories_Aggregate = {
  __typename?: 'products_categories_aggregate';
  aggregate?: Maybe<Products_Categories_Aggregate_Fields>;
  nodes: Array<Products_Categories>;
};

/** aggregate fields of "products_categories" */
export type Products_Categories_Aggregate_Fields = {
  __typename?: 'products_categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Products_Categories_Max_Fields>;
  min?: Maybe<Products_Categories_Min_Fields>;
};


/** aggregate fields of "products_categories" */
export type Products_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "products_categories". All fields are combined with a logical 'AND'. */
export type Products_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Categories_Bool_Exp>>;
  _not?: InputMaybe<Products_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Categories_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  products_items?: InputMaybe<Products_Bool_Exp>;
  products_items_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "products_categories" */
export enum Products_Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsCategoryPkey = 'products_category_pkey'
}

/** input type for inserting data into table "products_categories" */
export type Products_Categories_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  products_items?: InputMaybe<Products_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Products_Categories_Max_Fields = {
  __typename?: 'products_categories_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Products_Categories_Min_Fields = {
  __typename?: 'products_categories_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "products_categories" */
export type Products_Categories_Mutation_Response = {
  __typename?: 'products_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Products_Categories>;
};

/** input type for inserting object relation for remote table "products_categories" */
export type Products_Categories_Obj_Rel_Insert_Input = {
  data: Products_Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_Categories_On_Conflict>;
};

/** on_conflict condition type for table "products_categories" */
export type Products_Categories_On_Conflict = {
  constraint: Products_Categories_Constraint;
  update_columns?: Array<Products_Categories_Update_Column>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "products_categories". */
export type Products_Categories_Order_By = {
  id?: InputMaybe<Order_By>;
  products_items_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products_categories */
export type Products_Categories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "products_categories" */
export enum Products_Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "products_categories" */
export type Products_Categories_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "products_categories" */
export type Products_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Categories_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "products_categories" */
export enum Products_Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

export type Products_Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Products_Categories_Bool_Exp;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  products_category?: InputMaybe<Products_Categories_Obj_Rel_Insert_Input>;
  products_category_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  products_category_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  products_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  products_category_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  products_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  products_category?: InputMaybe<Products_Categories_Order_By>;
  products_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Price = 'price',
  /** column name */
  ProductsCategoryId = 'products_category_id',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  products_category_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  products_category_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  price?: Maybe<Scalars['numeric']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Price = 'price',
  /** column name */
  ProductsCategoryId = 'products_category_id',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

export type Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  adminGetMe?: Maybe<AdminGetMeOutput>;
  /** Admin login */
  adminLogin?: Maybe<AdminLoginOutput>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table: "advantages" */
  advantages: Array<Advantages>;
  /** fetch aggregated fields from the table: "advantages" */
  advantages_aggregate: Advantages_Aggregate;
  /** fetch data from the table: "advantages" using primary key columns */
  advantages_by_pk?: Maybe<Advantages>;
  cloudinarySignature?: Maybe<CloudinarySignatureOutput>;
  /** Customer login */
  customerLogin?: Maybe<CustomerLoginOutput>;
  customerLoginPassword?: Maybe<CustomerLoginPasswordOutput>;
  /** Customer verify code */
  customerVerifyCode?: Maybe<CustomerVerifyCodeOutput>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "last_week_orders" */
  last_week_orders: Array<Last_Week_Orders>;
  /** fetch aggregated fields from the table: "last_week_orders" */
  last_week_orders_aggregate: Last_Week_Orders_Aggregate;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "orders_products" */
  orders_products: Array<Orders_Products>;
  /** fetch aggregated fields from the table: "orders_products" */
  orders_products_aggregate: Orders_Products_Aggregate;
  /** fetch data from the table: "orders_products" using primary key columns */
  orders_products_by_pk?: Maybe<Orders_Products>;
  /** fetch data from the table: "payment_status" */
  payment_status: Array<Payment_Status>;
  /** fetch aggregated fields from the table: "payment_status" */
  payment_status_aggregate: Payment_Status_Aggregate;
  /** fetch data from the table: "payment_status" using primary key columns */
  payment_status_by_pk?: Maybe<Payment_Status>;
  /** fetch data from the table: "payment_types" */
  payment_types: Array<Payment_Types>;
  /** fetch aggregated fields from the table: "payment_types" */
  payment_types_aggregate: Payment_Types_Aggregate;
  /** fetch data from the table: "payment_types" using primary key columns */
  payment_types_by_pk?: Maybe<Payment_Types>;
  /** fetch data from the table: "personnel" */
  personnel: Array<Personnel>;
  /** fetch aggregated fields from the table: "personnel" */
  personnel_aggregate: Personnel_Aggregate;
  /** fetch data from the table: "personnel" using primary key columns */
  personnel_by_pk?: Maybe<Personnel>;
  /** fetch data from the table: "personnel_categories" */
  personnel_categories: Array<Personnel_Categories>;
  /** fetch aggregated fields from the table: "personnel_categories" */
  personnel_categories_aggregate: Personnel_Categories_Aggregate;
  /** fetch data from the table: "personnel_categories" using primary key columns */
  personnel_categories_by_pk?: Maybe<Personnel_Categories>;
  /** fetch data from the table: "price_list" */
  price_list: Array<Price_List>;
  /** fetch aggregated fields from the table: "price_list" */
  price_list_aggregate: Price_List_Aggregate;
  /** fetch data from the table: "price_list" using primary key columns */
  price_list_by_pk?: Maybe<Price_List>;
  /** fetch data from the table: "price_list_categories" */
  price_list_categories: Array<Price_List_Categories>;
  /** fetch aggregated fields from the table: "price_list_categories" */
  price_list_categories_aggregate: Price_List_Categories_Aggregate;
  /** fetch data from the table: "price_list_categories" using primary key columns */
  price_list_categories_by_pk?: Maybe<Price_List_Categories>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "products_categories" */
  products_categories: Array<Products_Categories>;
  /** fetch aggregated fields from the table: "products_categories" */
  products_categories_aggregate: Products_Categories_Aggregate;
  /** fetch data from the table: "products_categories" using primary key columns */
  products_categories_by_pk?: Maybe<Products_Categories>;
  /** fetch data from the table: "services" */
  services: Array<Services>;
  /** fetch aggregated fields from the table: "services" */
  services_aggregate: Services_Aggregate;
  /** fetch data from the table: "services" using primary key columns */
  services_by_pk?: Maybe<Services>;
};


export type Query_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdminLoginArgs = {
  admin: AdminLoginInput;
};


export type Query_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdmin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAdvantagesArgs = {
  distinct_on?: InputMaybe<Array<Advantages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Advantages_Order_By>>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};


export type Query_RootAdvantages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Advantages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Advantages_Order_By>>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};


export type Query_RootAdvantages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCustomerLoginArgs = {
  input: CustomerLoginInput;
};


export type Query_RootCustomerLoginPasswordArgs = {
  customer: CustomerLoginPasswordInput;
};


export type Query_RootCustomerVerifyCodeArgs = {
  input: CustomerVerifyCodeInput;
};


export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLast_Week_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Last_Week_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Last_Week_Orders_Order_By>>;
  where?: InputMaybe<Last_Week_Orders_Bool_Exp>;
};


export type Query_RootLast_Week_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Last_Week_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Last_Week_Orders_Order_By>>;
  where?: InputMaybe<Last_Week_Orders_Bool_Exp>;
};


export type Query_RootOrder_StatusArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Query_RootOrder_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Query_RootOrder_Status_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrders_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Query_RootOrders_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Query_RootOrders_Products_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPayment_StatusArgs = {
  distinct_on?: InputMaybe<Array<Payment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Status_Order_By>>;
  where?: InputMaybe<Payment_Status_Bool_Exp>;
};


export type Query_RootPayment_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Status_Order_By>>;
  where?: InputMaybe<Payment_Status_Bool_Exp>;
};


export type Query_RootPayment_Status_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootPayment_TypesArgs = {
  distinct_on?: InputMaybe<Array<Payment_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Types_Order_By>>;
  where?: InputMaybe<Payment_Types_Bool_Exp>;
};


export type Query_RootPayment_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Types_Order_By>>;
  where?: InputMaybe<Payment_Types_Bool_Exp>;
};


export type Query_RootPayment_Types_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootPersonnelArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


export type Query_RootPersonnel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


export type Query_RootPersonnel_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPersonnel_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Categories_Order_By>>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};


export type Query_RootPersonnel_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Categories_Order_By>>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};


export type Query_RootPersonnel_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPrice_ListArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Order_By>>;
  where?: InputMaybe<Price_List_Bool_Exp>;
};


export type Query_RootPrice_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Order_By>>;
  where?: InputMaybe<Price_List_Bool_Exp>;
};


export type Query_RootPrice_List_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPrice_List_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Categories_Order_By>>;
  where?: InputMaybe<Price_List_Categories_Bool_Exp>;
};


export type Query_RootPrice_List_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Categories_Order_By>>;
  where?: InputMaybe<Price_List_Categories_Bool_Exp>;
};


export type Query_RootPrice_List_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProducts_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Products_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Categories_Order_By>>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};


export type Query_RootProducts_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Categories_Order_By>>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};


export type Query_RootProducts_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootServicesArgs = {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
};


export type Query_RootServices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
};


export type Query_RootServices_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "services" */
export type Services = {
  __typename?: 'services';
  category?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "services" */
export type Services_Aggregate = {
  __typename?: 'services_aggregate';
  aggregate?: Maybe<Services_Aggregate_Fields>;
  nodes: Array<Services>;
};

/** aggregate fields of "services" */
export type Services_Aggregate_Fields = {
  __typename?: 'services_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Services_Max_Fields>;
  min?: Maybe<Services_Min_Fields>;
};


/** aggregate fields of "services" */
export type Services_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Services_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "services". All fields are combined with a logical 'AND'. */
export type Services_Bool_Exp = {
  _and?: InputMaybe<Array<Services_Bool_Exp>>;
  _not?: InputMaybe<Services_Bool_Exp>;
  _or?: InputMaybe<Array<Services_Bool_Exp>>;
  category?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "services" */
export enum Services_Constraint {
  /** unique or primary key constraint on columns "id" */
  ServicesPkey = 'services_pkey'
}

/** input type for inserting data into table "services" */
export type Services_Insert_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Services_Max_Fields = {
  __typename?: 'services_max_fields';
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Services_Min_Fields = {
  __typename?: 'services_min_fields';
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "services" */
export type Services_Mutation_Response = {
  __typename?: 'services_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Services>;
};

/** on_conflict condition type for table "services" */
export type Services_On_Conflict = {
  constraint: Services_Constraint;
  update_columns?: Array<Services_Update_Column>;
  where?: InputMaybe<Services_Bool_Exp>;
};

/** Ordering options when selecting data from "services". */
export type Services_Order_By = {
  category?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: services */
export type Services_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "services" */
export enum Services_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "services" */
export type Services_Set_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "services" */
export type Services_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Services_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Services_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "services" */
export enum Services_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

export type Services_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Services_Set_Input>;
  /** filter the rows which have to be updated */
  where: Services_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table in a streaming manner: "admin" */
  admin_stream: Array<Admin>;
  /** fetch data from the table: "advantages" */
  advantages: Array<Advantages>;
  /** fetch aggregated fields from the table: "advantages" */
  advantages_aggregate: Advantages_Aggregate;
  /** fetch data from the table: "advantages" using primary key columns */
  advantages_by_pk?: Maybe<Advantages>;
  /** fetch data from the table in a streaming manner: "advantages" */
  advantages_stream: Array<Advantages>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table in a streaming manner: "customers" */
  customers_stream: Array<Customers>;
  /** fetch data from the table: "last_week_orders" */
  last_week_orders: Array<Last_Week_Orders>;
  /** fetch aggregated fields from the table: "last_week_orders" */
  last_week_orders_aggregate: Last_Week_Orders_Aggregate;
  /** fetch data from the table in a streaming manner: "last_week_orders" */
  last_week_orders_stream: Array<Last_Week_Orders>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table in a streaming manner: "order_status" */
  order_status_stream: Array<Order_Status>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "orders_products" */
  orders_products: Array<Orders_Products>;
  /** fetch aggregated fields from the table: "orders_products" */
  orders_products_aggregate: Orders_Products_Aggregate;
  /** fetch data from the table: "orders_products" using primary key columns */
  orders_products_by_pk?: Maybe<Orders_Products>;
  /** fetch data from the table in a streaming manner: "orders_products" */
  orders_products_stream: Array<Orders_Products>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>;
  /** fetch data from the table: "payment_status" */
  payment_status: Array<Payment_Status>;
  /** fetch aggregated fields from the table: "payment_status" */
  payment_status_aggregate: Payment_Status_Aggregate;
  /** fetch data from the table: "payment_status" using primary key columns */
  payment_status_by_pk?: Maybe<Payment_Status>;
  /** fetch data from the table in a streaming manner: "payment_status" */
  payment_status_stream: Array<Payment_Status>;
  /** fetch data from the table: "payment_types" */
  payment_types: Array<Payment_Types>;
  /** fetch aggregated fields from the table: "payment_types" */
  payment_types_aggregate: Payment_Types_Aggregate;
  /** fetch data from the table: "payment_types" using primary key columns */
  payment_types_by_pk?: Maybe<Payment_Types>;
  /** fetch data from the table in a streaming manner: "payment_types" */
  payment_types_stream: Array<Payment_Types>;
  /** fetch data from the table: "personnel" */
  personnel: Array<Personnel>;
  /** fetch aggregated fields from the table: "personnel" */
  personnel_aggregate: Personnel_Aggregate;
  /** fetch data from the table: "personnel" using primary key columns */
  personnel_by_pk?: Maybe<Personnel>;
  /** fetch data from the table: "personnel_categories" */
  personnel_categories: Array<Personnel_Categories>;
  /** fetch aggregated fields from the table: "personnel_categories" */
  personnel_categories_aggregate: Personnel_Categories_Aggregate;
  /** fetch data from the table: "personnel_categories" using primary key columns */
  personnel_categories_by_pk?: Maybe<Personnel_Categories>;
  /** fetch data from the table in a streaming manner: "personnel_categories" */
  personnel_categories_stream: Array<Personnel_Categories>;
  /** fetch data from the table in a streaming manner: "personnel" */
  personnel_stream: Array<Personnel>;
  /** fetch data from the table: "price_list" */
  price_list: Array<Price_List>;
  /** fetch aggregated fields from the table: "price_list" */
  price_list_aggregate: Price_List_Aggregate;
  /** fetch data from the table: "price_list" using primary key columns */
  price_list_by_pk?: Maybe<Price_List>;
  /** fetch data from the table: "price_list_categories" */
  price_list_categories: Array<Price_List_Categories>;
  /** fetch aggregated fields from the table: "price_list_categories" */
  price_list_categories_aggregate: Price_List_Categories_Aggregate;
  /** fetch data from the table: "price_list_categories" using primary key columns */
  price_list_categories_by_pk?: Maybe<Price_List_Categories>;
  /** fetch data from the table in a streaming manner: "price_list_categories" */
  price_list_categories_stream: Array<Price_List_Categories>;
  /** fetch data from the table in a streaming manner: "price_list" */
  price_list_stream: Array<Price_List>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "products_categories" */
  products_categories: Array<Products_Categories>;
  /** fetch aggregated fields from the table: "products_categories" */
  products_categories_aggregate: Products_Categories_Aggregate;
  /** fetch data from the table: "products_categories" using primary key columns */
  products_categories_by_pk?: Maybe<Products_Categories>;
  /** fetch data from the table in a streaming manner: "products_categories" */
  products_categories_stream: Array<Products_Categories>;
  /** fetch data from the table in a streaming manner: "products" */
  products_stream: Array<Products>;
  /** fetch data from the table: "services" */
  services: Array<Services>;
  /** fetch aggregated fields from the table: "services" */
  services_aggregate: Services_Aggregate;
  /** fetch data from the table: "services" using primary key columns */
  services_by_pk?: Maybe<Services>;
  /** fetch data from the table in a streaming manner: "services" */
  services_stream: Array<Services>;
};


export type Subscription_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAdmin_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Admin_Stream_Cursor_Input>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdvantagesArgs = {
  distinct_on?: InputMaybe<Array<Advantages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Advantages_Order_By>>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};


export type Subscription_RootAdvantages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Advantages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Advantages_Order_By>>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};


export type Subscription_RootAdvantages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAdvantages_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Advantages_Stream_Cursor_Input>>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCustomers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Customers_Stream_Cursor_Input>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootLast_Week_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Last_Week_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Last_Week_Orders_Order_By>>;
  where?: InputMaybe<Last_Week_Orders_Bool_Exp>;
};


export type Subscription_RootLast_Week_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Last_Week_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Last_Week_Orders_Order_By>>;
  where?: InputMaybe<Last_Week_Orders_Bool_Exp>;
};


export type Subscription_RootLast_Week_Orders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Last_Week_Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Last_Week_Orders_Bool_Exp>;
};


export type Subscription_RootOrder_StatusArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Subscription_RootOrder_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Subscription_RootOrder_Status_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootOrder_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Order_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrders_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Subscription_RootOrders_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Subscription_RootOrders_Products_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrders_Products_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orders_Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootPayment_StatusArgs = {
  distinct_on?: InputMaybe<Array<Payment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Status_Order_By>>;
  where?: InputMaybe<Payment_Status_Bool_Exp>;
};


export type Subscription_RootPayment_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Status_Order_By>>;
  where?: InputMaybe<Payment_Status_Bool_Exp>;
};


export type Subscription_RootPayment_Status_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootPayment_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Payment_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Payment_Status_Bool_Exp>;
};


export type Subscription_RootPayment_TypesArgs = {
  distinct_on?: InputMaybe<Array<Payment_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Types_Order_By>>;
  where?: InputMaybe<Payment_Types_Bool_Exp>;
};


export type Subscription_RootPayment_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Types_Order_By>>;
  where?: InputMaybe<Payment_Types_Bool_Exp>;
};


export type Subscription_RootPayment_Types_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootPayment_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Payment_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Payment_Types_Bool_Exp>;
};


export type Subscription_RootPersonnelArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


export type Subscription_RootPersonnel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


export type Subscription_RootPersonnel_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPersonnel_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Categories_Order_By>>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};


export type Subscription_RootPersonnel_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Categories_Order_By>>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};


export type Subscription_RootPersonnel_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPersonnel_Categories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Personnel_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};


export type Subscription_RootPersonnel_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Personnel_Stream_Cursor_Input>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


export type Subscription_RootPrice_ListArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Order_By>>;
  where?: InputMaybe<Price_List_Bool_Exp>;
};


export type Subscription_RootPrice_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Order_By>>;
  where?: InputMaybe<Price_List_Bool_Exp>;
};


export type Subscription_RootPrice_List_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPrice_List_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Categories_Order_By>>;
  where?: InputMaybe<Price_List_Categories_Bool_Exp>;
};


export type Subscription_RootPrice_List_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Categories_Order_By>>;
  where?: InputMaybe<Price_List_Categories_Bool_Exp>;
};


export type Subscription_RootPrice_List_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPrice_List_Categories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Price_List_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Price_List_Categories_Bool_Exp>;
};


export type Subscription_RootPrice_List_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Price_List_Stream_Cursor_Input>>;
  where?: InputMaybe<Price_List_Bool_Exp>;
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProducts_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Products_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Categories_Order_By>>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};


export type Subscription_RootProducts_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Categories_Order_By>>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};


export type Subscription_RootProducts_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProducts_Categories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Products_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};


export type Subscription_RootProducts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootServicesArgs = {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
};


export type Subscription_RootServices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
};


export type Subscription_RootServices_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootServices_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Services_Stream_Cursor_Input>>;
  where?: InputMaybe<Services_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type CreateOrderMutationVariables = Exact<{
  client_address: Scalars['String']['input'];
  client_name: Scalars['String']['input'];
  client_phone: Scalars['String']['input'];
  items: Scalars['String']['input'];
  payment_type: Scalars['String']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateOrderMutation = { __typename?: 'mutation_root', createOrder?: { __typename?: 'createOrderOutput', id: string, checkout_url?: string | null } | null };

export type CustomerLoginQueryVariables = Exact<{
  phone: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CustomerLoginQuery = { __typename?: 'query_root', customerLoginPassword?: { __typename?: 'customerLoginPasswordOutput', accessToken: string } | null };

export type CustomerRegisterMutationVariables = Exact<{
  address: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
}>;


export type CustomerRegisterMutation = { __typename?: 'mutation_root', customerRegister?: { __typename?: 'customerRegisterOutput', accessToken: string } | null };

export type CustomerVerifyCodeQueryVariables = Exact<{
  code: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
}>;


export type CustomerVerifyCodeQuery = { __typename?: 'query_root', customerVerifyCode?: { __typename?: 'customerVerifyCodeOutput', accessToken: string } | null };

export type GetAdvantagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdvantagesQuery = { __typename?: 'query_root', advantages: Array<{ __typename?: 'advantages', id: any, label: string, title: string }> };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'query_root', products_categories: Array<{ __typename?: 'products_categories', id: any, slug: string, title: string }> };

export type GetCustomerDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomerDataQuery = { __typename?: 'query_root', customers: Array<{ __typename?: 'customers', address?: string | null, id: any, name?: string | null, phone: string }> };

export type GetCustomerordersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomerordersQuery = { __typename?: 'query_root', orders: Array<{ __typename?: 'orders', created_at: any, status?: Order_Status_Enum | null, sum?: any | null, payment_status?: Payment_Status_Enum | null, order_items: Array<{ __typename?: 'orders_products', amount: any, item?: { __typename?: 'products', title: string } | null }> }>, order_status: Array<{ __typename?: 'order_status', id: string, label: string }>, payment_status: Array<{ __typename?: 'payment_status', id: string, label: string }> };

export type GetPersonnelQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPersonnelQuery = { __typename?: 'query_root', personnel_categories: Array<{ __typename?: 'personnel_categories', slug: string, title: string, id: any, personnel_items: Array<{ __typename?: 'personnel', name: string, image: string, id: any, description: string, personnel_category?: { __typename?: 'personnel_categories', title: string } | null }> }> };

export type GetPersonnelCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPersonnelCategoriesQuery = { __typename?: 'query_root', personnel_categories: Array<{ __typename?: 'personnel_categories', slug: string, title: string, id: any }> };

export type GetPriceListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPriceListQuery = { __typename?: 'query_root', price_list_categories: Array<{ __typename?: 'price_list_categories', title: string, slug: string, id: any, price_list_items: Array<{ __typename?: 'price_list', id: any, price: any, title: string }> }> };

export type GetPriceListCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPriceListCategoriesQuery = { __typename?: 'query_root', price_list_categories: Array<{ __typename?: 'price_list_categories', title: string, slug: string, id: any }> };

export type GetPriceListCategoryByIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPriceListCategoryByIdQuery = { __typename?: 'query_root', price_list: Array<{ __typename?: 'price_list', price: any, id: any, title: string }> };

export type GetProductQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductQuery = { __typename?: 'query_root', products_categories: Array<{ __typename?: 'products_categories', slug: string, title: string, id: any, products_items: Array<{ __typename?: 'products', image: string, id: any, description?: string | null, price: any, title: string, products_category_id: any, weight: any }> }> };

export type GetProductsItemsFormCartQueryVariables = Exact<{
  productsIds: Array<Scalars['uuid']['input']> | Scalars['uuid']['input'];
}>;


export type GetProductsItemsFormCartQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', image: string, title: string, price: any, id: any }> };

export type GetServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServicesQuery = { __typename?: 'query_root', services: Array<{ __typename?: 'services', id: any, image: string, name: string, category?: string | null, description: string }> };

export type UpdateCustomerDataMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  address?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateCustomerDataMutation = { __typename?: 'mutation_root', update_customers_by_pk?: { __typename?: 'customers', address?: string | null, id: any, name?: string | null, phone: string } | null };


export const CreateOrderDocument = gql`
    mutation createOrder($client_address: String!, $client_name: String!, $client_phone: String!, $items: String!, $payment_type: String!, $comment: String = "") {
  createOrder(
    order: {client_address: $client_address, client_name: $client_name, client_phone: $client_phone, items: $items, comment: $comment, payment_type: $payment_type}
  ) {
    id
    checkout_url
  }
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      client_address: // value for 'client_address'
 *      client_name: // value for 'client_name'
 *      client_phone: // value for 'client_phone'
 *      items: // value for 'items'
 *      payment_type: // value for 'payment_type'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const CustomerLoginDocument = gql`
    query CustomerLogin($phone: String!, $password: String!) {
  customerLoginPassword(customer: {password: $password, phone: $phone}) {
    accessToken
  }
}
    `;

/**
 * __useCustomerLoginQuery__
 *
 * To run a query within a React component, call `useCustomerLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerLoginQuery({
 *   variables: {
 *      phone: // value for 'phone'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCustomerLoginQuery(baseOptions: Apollo.QueryHookOptions<CustomerLoginQuery, CustomerLoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CustomerLoginQuery, CustomerLoginQueryVariables>(CustomerLoginDocument, options);
      }
export function useCustomerLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CustomerLoginQuery, CustomerLoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CustomerLoginQuery, CustomerLoginQueryVariables>(CustomerLoginDocument, options);
        }
export function useCustomerLoginSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CustomerLoginQuery, CustomerLoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CustomerLoginQuery, CustomerLoginQueryVariables>(CustomerLoginDocument, options);
        }
export type CustomerLoginQueryHookResult = ReturnType<typeof useCustomerLoginQuery>;
export type CustomerLoginLazyQueryHookResult = ReturnType<typeof useCustomerLoginLazyQuery>;
export type CustomerLoginSuspenseQueryHookResult = ReturnType<typeof useCustomerLoginSuspenseQuery>;
export type CustomerLoginQueryResult = Apollo.QueryResult<CustomerLoginQuery, CustomerLoginQueryVariables>;
export const CustomerRegisterDocument = gql`
    mutation CustomerRegister($address: String!, $name: String!, $password: String!, $phone: String!) {
  customerRegister(
    customer: {address: $address, name: $name, password: $password, phone: $phone}
  ) {
    accessToken
  }
}
    `;
export type CustomerRegisterMutationFn = Apollo.MutationFunction<CustomerRegisterMutation, CustomerRegisterMutationVariables>;

/**
 * __useCustomerRegisterMutation__
 *
 * To run a mutation, you first call `useCustomerRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerRegisterMutation, { data, loading, error }] = useCustomerRegisterMutation({
 *   variables: {
 *      address: // value for 'address'
 *      name: // value for 'name'
 *      password: // value for 'password'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useCustomerRegisterMutation(baseOptions?: Apollo.MutationHookOptions<CustomerRegisterMutation, CustomerRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CustomerRegisterMutation, CustomerRegisterMutationVariables>(CustomerRegisterDocument, options);
      }
export type CustomerRegisterMutationHookResult = ReturnType<typeof useCustomerRegisterMutation>;
export type CustomerRegisterMutationResult = Apollo.MutationResult<CustomerRegisterMutation>;
export type CustomerRegisterMutationOptions = Apollo.BaseMutationOptions<CustomerRegisterMutation, CustomerRegisterMutationVariables>;
export const CustomerVerifyCodeDocument = gql`
    query CustomerVerifyCode($code: String!, $phoneNumber: String!) {
  customerVerifyCode(input: {code: $code, phoneNumber: $phoneNumber}) {
    accessToken
  }
}
    `;

/**
 * __useCustomerVerifyCodeQuery__
 *
 * To run a query within a React component, call `useCustomerVerifyCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerVerifyCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerVerifyCodeQuery({
 *   variables: {
 *      code: // value for 'code'
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useCustomerVerifyCodeQuery(baseOptions: Apollo.QueryHookOptions<CustomerVerifyCodeQuery, CustomerVerifyCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CustomerVerifyCodeQuery, CustomerVerifyCodeQueryVariables>(CustomerVerifyCodeDocument, options);
      }
export function useCustomerVerifyCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CustomerVerifyCodeQuery, CustomerVerifyCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CustomerVerifyCodeQuery, CustomerVerifyCodeQueryVariables>(CustomerVerifyCodeDocument, options);
        }
export function useCustomerVerifyCodeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CustomerVerifyCodeQuery, CustomerVerifyCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CustomerVerifyCodeQuery, CustomerVerifyCodeQueryVariables>(CustomerVerifyCodeDocument, options);
        }
export type CustomerVerifyCodeQueryHookResult = ReturnType<typeof useCustomerVerifyCodeQuery>;
export type CustomerVerifyCodeLazyQueryHookResult = ReturnType<typeof useCustomerVerifyCodeLazyQuery>;
export type CustomerVerifyCodeSuspenseQueryHookResult = ReturnType<typeof useCustomerVerifyCodeSuspenseQuery>;
export type CustomerVerifyCodeQueryResult = Apollo.QueryResult<CustomerVerifyCodeQuery, CustomerVerifyCodeQueryVariables>;
export const GetAdvantagesDocument = gql`
    query GetAdvantages {
  advantages {
    id
    label
    title
  }
}
    `;

/**
 * __useGetAdvantagesQuery__
 *
 * To run a query within a React component, call `useGetAdvantagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdvantagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdvantagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdvantagesQuery(baseOptions?: Apollo.QueryHookOptions<GetAdvantagesQuery, GetAdvantagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdvantagesQuery, GetAdvantagesQueryVariables>(GetAdvantagesDocument, options);
      }
export function useGetAdvantagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdvantagesQuery, GetAdvantagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdvantagesQuery, GetAdvantagesQueryVariables>(GetAdvantagesDocument, options);
        }
export function useGetAdvantagesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAdvantagesQuery, GetAdvantagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAdvantagesQuery, GetAdvantagesQueryVariables>(GetAdvantagesDocument, options);
        }
export type GetAdvantagesQueryHookResult = ReturnType<typeof useGetAdvantagesQuery>;
export type GetAdvantagesLazyQueryHookResult = ReturnType<typeof useGetAdvantagesLazyQuery>;
export type GetAdvantagesSuspenseQueryHookResult = ReturnType<typeof useGetAdvantagesSuspenseQuery>;
export type GetAdvantagesQueryResult = Apollo.QueryResult<GetAdvantagesQuery, GetAdvantagesQueryVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories {
  products_categories {
    id
    slug
    title
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export function useGetCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetCategoriesSuspenseQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetCustomerDataDocument = gql`
    query GetCustomerData {
  customers(limit: 1) {
    address
    id
    name
    phone
  }
}
    `;

/**
 * __useGetCustomerDataQuery__
 *
 * To run a query within a React component, call `useGetCustomerDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomerDataQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomerDataQuery, GetCustomerDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerDataQuery, GetCustomerDataQueryVariables>(GetCustomerDataDocument, options);
      }
export function useGetCustomerDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerDataQuery, GetCustomerDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerDataQuery, GetCustomerDataQueryVariables>(GetCustomerDataDocument, options);
        }
export function useGetCustomerDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCustomerDataQuery, GetCustomerDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCustomerDataQuery, GetCustomerDataQueryVariables>(GetCustomerDataDocument, options);
        }
export type GetCustomerDataQueryHookResult = ReturnType<typeof useGetCustomerDataQuery>;
export type GetCustomerDataLazyQueryHookResult = ReturnType<typeof useGetCustomerDataLazyQuery>;
export type GetCustomerDataSuspenseQueryHookResult = ReturnType<typeof useGetCustomerDataSuspenseQuery>;
export type GetCustomerDataQueryResult = Apollo.QueryResult<GetCustomerDataQuery, GetCustomerDataQueryVariables>;
export const GetCustomerordersDocument = gql`
    query GetCustomerorders {
  orders(order_by: {created_at: desc}) {
    created_at
    order_items {
      amount
      item {
        title
      }
    }
    status
    sum
    payment_status
  }
  order_status {
    id
    label
  }
  payment_status {
    id
    label
  }
}
    `;

/**
 * __useGetCustomerordersQuery__
 *
 * To run a query within a React component, call `useGetCustomerordersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerordersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerordersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomerordersQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomerordersQuery, GetCustomerordersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerordersQuery, GetCustomerordersQueryVariables>(GetCustomerordersDocument, options);
      }
export function useGetCustomerordersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerordersQuery, GetCustomerordersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerordersQuery, GetCustomerordersQueryVariables>(GetCustomerordersDocument, options);
        }
export function useGetCustomerordersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCustomerordersQuery, GetCustomerordersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCustomerordersQuery, GetCustomerordersQueryVariables>(GetCustomerordersDocument, options);
        }
export type GetCustomerordersQueryHookResult = ReturnType<typeof useGetCustomerordersQuery>;
export type GetCustomerordersLazyQueryHookResult = ReturnType<typeof useGetCustomerordersLazyQuery>;
export type GetCustomerordersSuspenseQueryHookResult = ReturnType<typeof useGetCustomerordersSuspenseQuery>;
export type GetCustomerordersQueryResult = Apollo.QueryResult<GetCustomerordersQuery, GetCustomerordersQueryVariables>;
export const GetPersonnelDocument = gql`
    query GetPersonnel {
  personnel_categories {
    slug
    title
    id
    personnel_items {
      name
      image
      id
      description
      personnel_category {
        title
      }
    }
  }
}
    `;

/**
 * __useGetPersonnelQuery__
 *
 * To run a query within a React component, call `useGetPersonnelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonnelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonnelQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPersonnelQuery(baseOptions?: Apollo.QueryHookOptions<GetPersonnelQuery, GetPersonnelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonnelQuery, GetPersonnelQueryVariables>(GetPersonnelDocument, options);
      }
export function useGetPersonnelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonnelQuery, GetPersonnelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonnelQuery, GetPersonnelQueryVariables>(GetPersonnelDocument, options);
        }
export function useGetPersonnelSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPersonnelQuery, GetPersonnelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPersonnelQuery, GetPersonnelQueryVariables>(GetPersonnelDocument, options);
        }
export type GetPersonnelQueryHookResult = ReturnType<typeof useGetPersonnelQuery>;
export type GetPersonnelLazyQueryHookResult = ReturnType<typeof useGetPersonnelLazyQuery>;
export type GetPersonnelSuspenseQueryHookResult = ReturnType<typeof useGetPersonnelSuspenseQuery>;
export type GetPersonnelQueryResult = Apollo.QueryResult<GetPersonnelQuery, GetPersonnelQueryVariables>;
export const GetPersonnelCategoriesDocument = gql`
    query GetPersonnelCategories {
  personnel_categories {
    slug
    title
    id
  }
}
    `;

/**
 * __useGetPersonnelCategoriesQuery__
 *
 * To run a query within a React component, call `useGetPersonnelCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonnelCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonnelCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPersonnelCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetPersonnelCategoriesQuery, GetPersonnelCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonnelCategoriesQuery, GetPersonnelCategoriesQueryVariables>(GetPersonnelCategoriesDocument, options);
      }
export function useGetPersonnelCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonnelCategoriesQuery, GetPersonnelCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonnelCategoriesQuery, GetPersonnelCategoriesQueryVariables>(GetPersonnelCategoriesDocument, options);
        }
export function useGetPersonnelCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPersonnelCategoriesQuery, GetPersonnelCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPersonnelCategoriesQuery, GetPersonnelCategoriesQueryVariables>(GetPersonnelCategoriesDocument, options);
        }
export type GetPersonnelCategoriesQueryHookResult = ReturnType<typeof useGetPersonnelCategoriesQuery>;
export type GetPersonnelCategoriesLazyQueryHookResult = ReturnType<typeof useGetPersonnelCategoriesLazyQuery>;
export type GetPersonnelCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetPersonnelCategoriesSuspenseQuery>;
export type GetPersonnelCategoriesQueryResult = Apollo.QueryResult<GetPersonnelCategoriesQuery, GetPersonnelCategoriesQueryVariables>;
export const GetPriceListDocument = gql`
    query GetPriceList {
  price_list_categories {
    title
    slug
    id
    price_list_items {
      id
      price
      title
    }
  }
}
    `;

/**
 * __useGetPriceListQuery__
 *
 * To run a query within a React component, call `useGetPriceListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPriceListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPriceListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPriceListQuery(baseOptions?: Apollo.QueryHookOptions<GetPriceListQuery, GetPriceListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPriceListQuery, GetPriceListQueryVariables>(GetPriceListDocument, options);
      }
export function useGetPriceListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPriceListQuery, GetPriceListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPriceListQuery, GetPriceListQueryVariables>(GetPriceListDocument, options);
        }
export function useGetPriceListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPriceListQuery, GetPriceListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPriceListQuery, GetPriceListQueryVariables>(GetPriceListDocument, options);
        }
export type GetPriceListQueryHookResult = ReturnType<typeof useGetPriceListQuery>;
export type GetPriceListLazyQueryHookResult = ReturnType<typeof useGetPriceListLazyQuery>;
export type GetPriceListSuspenseQueryHookResult = ReturnType<typeof useGetPriceListSuspenseQuery>;
export type GetPriceListQueryResult = Apollo.QueryResult<GetPriceListQuery, GetPriceListQueryVariables>;
export const GetPriceListCategoriesDocument = gql`
    query GetPriceListCategories {
  price_list_categories {
    title
    slug
    id
  }
}
    `;

/**
 * __useGetPriceListCategoriesQuery__
 *
 * To run a query within a React component, call `useGetPriceListCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPriceListCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPriceListCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPriceListCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetPriceListCategoriesQuery, GetPriceListCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPriceListCategoriesQuery, GetPriceListCategoriesQueryVariables>(GetPriceListCategoriesDocument, options);
      }
export function useGetPriceListCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPriceListCategoriesQuery, GetPriceListCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPriceListCategoriesQuery, GetPriceListCategoriesQueryVariables>(GetPriceListCategoriesDocument, options);
        }
export function useGetPriceListCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPriceListCategoriesQuery, GetPriceListCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPriceListCategoriesQuery, GetPriceListCategoriesQueryVariables>(GetPriceListCategoriesDocument, options);
        }
export type GetPriceListCategoriesQueryHookResult = ReturnType<typeof useGetPriceListCategoriesQuery>;
export type GetPriceListCategoriesLazyQueryHookResult = ReturnType<typeof useGetPriceListCategoriesLazyQuery>;
export type GetPriceListCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetPriceListCategoriesSuspenseQuery>;
export type GetPriceListCategoriesQueryResult = Apollo.QueryResult<GetPriceListCategoriesQuery, GetPriceListCategoriesQueryVariables>;
export const GetPriceListCategoryByIdDocument = gql`
    query GetPriceListCategoryById {
  price_list {
    price
    id
    title
  }
}
    `;

/**
 * __useGetPriceListCategoryByIdQuery__
 *
 * To run a query within a React component, call `useGetPriceListCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPriceListCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPriceListCategoryByIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPriceListCategoryByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetPriceListCategoryByIdQuery, GetPriceListCategoryByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPriceListCategoryByIdQuery, GetPriceListCategoryByIdQueryVariables>(GetPriceListCategoryByIdDocument, options);
      }
export function useGetPriceListCategoryByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPriceListCategoryByIdQuery, GetPriceListCategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPriceListCategoryByIdQuery, GetPriceListCategoryByIdQueryVariables>(GetPriceListCategoryByIdDocument, options);
        }
export function useGetPriceListCategoryByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPriceListCategoryByIdQuery, GetPriceListCategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPriceListCategoryByIdQuery, GetPriceListCategoryByIdQueryVariables>(GetPriceListCategoryByIdDocument, options);
        }
export type GetPriceListCategoryByIdQueryHookResult = ReturnType<typeof useGetPriceListCategoryByIdQuery>;
export type GetPriceListCategoryByIdLazyQueryHookResult = ReturnType<typeof useGetPriceListCategoryByIdLazyQuery>;
export type GetPriceListCategoryByIdSuspenseQueryHookResult = ReturnType<typeof useGetPriceListCategoryByIdSuspenseQuery>;
export type GetPriceListCategoryByIdQueryResult = Apollo.QueryResult<GetPriceListCategoryByIdQuery, GetPriceListCategoryByIdQueryVariables>;
export const GetProductDocument = gql`
    query GetProduct {
  products_categories {
    slug
    title
    id
    products_items {
      image
      id
      description
      price
      title
      products_category_id
      weight
    }
  }
}
    `;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductQuery(baseOptions?: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
      }
export function useGetProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
        }
export function useGetProductSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductSuspenseQueryHookResult = ReturnType<typeof useGetProductSuspenseQuery>;
export type GetProductQueryResult = Apollo.QueryResult<GetProductQuery, GetProductQueryVariables>;
export const GetProductsItemsFormCartDocument = gql`
    query GetProductsItemsFormCart($productsIds: [uuid!]!) {
  products(where: {id: {_in: $productsIds}}) {
    image
    title
    price
    id
  }
}
    `;

/**
 * __useGetProductsItemsFormCartQuery__
 *
 * To run a query within a React component, call `useGetProductsItemsFormCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsItemsFormCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsItemsFormCartQuery({
 *   variables: {
 *      productsIds: // value for 'productsIds'
 *   },
 * });
 */
export function useGetProductsItemsFormCartQuery(baseOptions: Apollo.QueryHookOptions<GetProductsItemsFormCartQuery, GetProductsItemsFormCartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsItemsFormCartQuery, GetProductsItemsFormCartQueryVariables>(GetProductsItemsFormCartDocument, options);
      }
export function useGetProductsItemsFormCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsItemsFormCartQuery, GetProductsItemsFormCartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsItemsFormCartQuery, GetProductsItemsFormCartQueryVariables>(GetProductsItemsFormCartDocument, options);
        }
export function useGetProductsItemsFormCartSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProductsItemsFormCartQuery, GetProductsItemsFormCartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductsItemsFormCartQuery, GetProductsItemsFormCartQueryVariables>(GetProductsItemsFormCartDocument, options);
        }
export type GetProductsItemsFormCartQueryHookResult = ReturnType<typeof useGetProductsItemsFormCartQuery>;
export type GetProductsItemsFormCartLazyQueryHookResult = ReturnType<typeof useGetProductsItemsFormCartLazyQuery>;
export type GetProductsItemsFormCartSuspenseQueryHookResult = ReturnType<typeof useGetProductsItemsFormCartSuspenseQuery>;
export type GetProductsItemsFormCartQueryResult = Apollo.QueryResult<GetProductsItemsFormCartQuery, GetProductsItemsFormCartQueryVariables>;
export const GetServicesDocument = gql`
    query GetServices {
  services {
    id
    image
    name
    category
    description
  }
}
    `;

/**
 * __useGetServicesQuery__
 *
 * To run a query within a React component, call `useGetServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetServicesQuery(baseOptions?: Apollo.QueryHookOptions<GetServicesQuery, GetServicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetServicesQuery, GetServicesQueryVariables>(GetServicesDocument, options);
      }
export function useGetServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetServicesQuery, GetServicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetServicesQuery, GetServicesQueryVariables>(GetServicesDocument, options);
        }
export function useGetServicesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetServicesQuery, GetServicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetServicesQuery, GetServicesQueryVariables>(GetServicesDocument, options);
        }
export type GetServicesQueryHookResult = ReturnType<typeof useGetServicesQuery>;
export type GetServicesLazyQueryHookResult = ReturnType<typeof useGetServicesLazyQuery>;
export type GetServicesSuspenseQueryHookResult = ReturnType<typeof useGetServicesSuspenseQuery>;
export type GetServicesQueryResult = Apollo.QueryResult<GetServicesQuery, GetServicesQueryVariables>;
export const UpdateCustomerDataDocument = gql`
    mutation UpdateCustomerData($id: uuid!, $address: String, $name: String, $phone: String) {
  update_customers_by_pk(
    pk_columns: {id: $id}
    _set: {address: $address, name: $name}
  ) {
    address
    id
    name
    phone
  }
}
    `;
export type UpdateCustomerDataMutationFn = Apollo.MutationFunction<UpdateCustomerDataMutation, UpdateCustomerDataMutationVariables>;

/**
 * __useUpdateCustomerDataMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerDataMutation, { data, loading, error }] = useUpdateCustomerDataMutation({
 *   variables: {
 *      id: // value for 'id'
 *      address: // value for 'address'
 *      name: // value for 'name'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useUpdateCustomerDataMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCustomerDataMutation, UpdateCustomerDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCustomerDataMutation, UpdateCustomerDataMutationVariables>(UpdateCustomerDataDocument, options);
      }
export type UpdateCustomerDataMutationHookResult = ReturnType<typeof useUpdateCustomerDataMutation>;
export type UpdateCustomerDataMutationResult = Apollo.MutationResult<UpdateCustomerDataMutation>;
export type UpdateCustomerDataMutationOptions = Apollo.BaseMutationOptions<UpdateCustomerDataMutation, UpdateCustomerDataMutationVariables>;
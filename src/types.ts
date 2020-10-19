import _ from "lodash";

export interface NoContent {}

export enum DataType {
  Boolean = "Bool",
  Number = "Num",
  String = "Text",
  Date = "Date"
  // TODO - datetime, timeofday
}

export const DataTypes = Object.values(DataType);

export enum BooleanOperationType {
  Is = "Is"
}

export const BooleanOperationTypes = Object.values(BooleanOperationType);

export enum StringOperationType {
  Equals = "Equals",
  Contains = "Contains"
}

export const StringOperationTypes = Object.values(StringOperationType);

export enum ComparisonOperationType {
  Equals = "Equals",
  Greater = ">",
  GreaterEquals = ">=",
  Smaller = "<",
  SmallerEquals = "<=",
  Between = "Range"
}

export const ComparisonOperationTypes = Object.values(ComparisonOperationType);

interface BooleanFilter {
  type: DataType.Boolean;
  operation: {
    type: BooleanOperationType;
    value: boolean;
  };
}

interface StringFilter {
  type: DataType.String;
  operation: {
    type: StringOperationType;
    value: string;
  };
}

export interface NumberOneArgComparisonOperation {
  type:
    | ComparisonOperationType.Equals
    | ComparisonOperationType.Greater
    | ComparisonOperationType.GreaterEquals
    | ComparisonOperationType.Smaller
    | ComparisonOperationType.SmallerEquals;
  value: number;
}

export interface NumberTwoArgComparisonOperation {
  type: ComparisonOperationType.Between;
  values: [number, number];
}

interface NumberFilter {
  type: DataType.Number;
  operation: NumberOneArgComparisonOperation | NumberTwoArgComparisonOperation;
}

export interface DateOneArgComparisonOperation {
  type:
    | ComparisonOperationType.Equals
    | ComparisonOperationType.Greater
    | ComparisonOperationType.GreaterEquals
    | ComparisonOperationType.Smaller
    | ComparisonOperationType.SmallerEquals;
  value: Date | null;
}

export interface DateTwoArgComparisonOperation {
  type: ComparisonOperationType.Between;
  values: [Date | null, Date | null];
}

interface DateFilter {
  type: DataType.Date;
  operation: DateOneArgComparisonOperation | DateTwoArgComparisonOperation;
}

export type Filter = (
  | BooleanFilter
  | StringFilter
  | NumberFilter
  | DateFilter
) & {
  id: string;
  column: Column;
};

export interface Column {
  colIdx: number;
  alphabetId: string;
  label: string;
  type: DataType;
  pattern?: string;
}

export interface Table {
  id: string;
  name: string;
  columnsById: _.Dictionary<Column>;
  checkedColumnsById: _.Dictionary<boolean>;
}

export interface Source {
  id: string;
  name: string;
  tablesById: _.Dictionary<Table>;
  selectedTableId?: string;
}

export interface AppCache {
  selectedSourceId?: string;
  sourcesById: _.Dictionary<Source>;
}

export enum SummarizeOp {
  Count = "count",
  Avg = "avg",
  Max = "max",
  Min = "min",
  Sum = "sum",
  GroupBy = "group by"
}

export enum AuthType {
  None = "NONE",
  Token = "TOKEN",
  OAuth2 = "OAUTH2"
}

export enum OauthProvider {
  Google = "GOOGLE",
  Facebook = "FACEBOOK"
}

export interface DataSourceOAuth2Info {
  provider: OauthProvider;
  scope: string;
}

export interface SyncedSourceOAuth2Info {
  provider: OauthProvider;
}

export type DataSourceAuthInfo =
  | {
      type: AuthType.None;
    }
  | {
      type: AuthType.Token;
      authTokenHeaderKey: string;
    }
  | {
      type: AuthType.OAuth2;
      oAuth2Info: DataSourceOAuth2Info;
    };

export enum ConnectionInfoType {
  Lib = "LIB",
  RestApi = "REST_API"
}

export enum InjectionType {
  SET = "SET",
  INTERPOLATE = "INTERPOLATE"
}

export type DataSourceInjection =
  | {
      type: InjectionType.SET;
      key: string;
      label: string;
      description: string;
    }
  | {
      type: InjectionType.INTERPOLATE;
      key: string;
      interpolationKey: string;
      label: string;
      description: string;
    };

// This isn't ideal. changed in key, label, description in data source injection should reflect here too..
export type SyncedSourceInjection =
  | {
      type: InjectionType.SET;
      key: string;
      label: string;
      value: string | number | boolean;
      description: string;
    }
  | {
      type: InjectionType.INTERPOLATE;
      key: string;
      interpolationKey: string;
      label: string;
      value: string | number | boolean;
      description: string;
    };

export type SyncedSourceConnectionInfo =
  | {
      type: ConnectionInfoType.Lib;
      // TODO:
    }
  | {
      type: ConnectionInfoType.RestApi;
      authInfo: SyncedSourceAuthInfo;
      injections: Array<SyncedSourceInjection>;
    };

export type SyncedSourceAuthInfo =
  | {
      type: AuthType.None;
    }
  | {
      type: AuthType.Token;
      token: string;
    }
  | {
      type: AuthType.OAuth2;
      oAuth2Info: SyncedSourceOAuth2Info;
    };

export enum SyncedSourceSyncFrequency {
  OneMin = 60000,
  FiveMin = 300000,
  TenMin = 600000,
  OneHour = 3600000
}

export enum SyncedSourceStatus {
  Uninitialized = "UNINITIALIZED",
  PendingFirstSync = "PENDING_FIRST_SYNC",
  Initialized = "INITIALIZED"
}
export type DataSourceConnectionInfo =
  | {
      type: ConnectionInfoType.Lib;
      // TODO
    }
  | {
      type: ConnectionInfoType.RestApi;
      baseUrl: string;
      headers: { [key: string]: string };
      params: { [key: string]: string };
      authInfo: DataSourceAuthInfo;
      injections: Array<DataSourceInjection>;
    };

export interface DataStoreTable {
  id: number;
  title: string;
}

export interface DataStoreDto {
  id: number;
  name: string;
  spreadsheetId: string;
  url: string;
  tables: DataStoreTable[];
  sourceId?: number;
}

export interface DataSourceDto {
  id: number;
  uuid: string;
  name: string;
  connectionInfo: DataSourceConnectionInfo;
}

export interface UserSourceDto {
  id: number; // TODO - replace by uuid
  dataSourceId: number;
  status: SyncedSourceStatus;
  connectionInfo: SyncedSourceConnectionInfo;
  syncFrequency: SyncedSourceSyncFrequency;
}

export interface UpdateSyncedSourceDto {
  syncedSourceId: number; // TODO - change to uuid
  injections: Array<SyncedSourceInjection>;
}

export interface CreateSyncedSourceDto {
  dataSourceUuid: string;
  injections: Array<SyncedSourceInjection>;
}

export interface InitDataDto {
  google: {
    commonAuthExists: boolean;
    commonScopes: string;
  };
}

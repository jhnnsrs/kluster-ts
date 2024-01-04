import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ArrayLike: any;
  DateTime: any;
};

export type ClusterFiler = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  search?: InputMaybe<Scalars['String']>;
};

export type CreateClusterInput = {
  name: Scalars['String'];
};

/**  A dask cluster */
export type DaskCluster = {
  __typename?: 'DaskCluster';
  dashboardLink: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  options: Scalars['ArrayLike'];
  schedulerAddress: Scalars['String'];
  security?: Maybe<Security>;
  startTime?: Maybe<Scalars['DateTime']>;
  status: DaskClusterState;
  stopTime?: Maybe<Scalars['DateTime']>;
  tags: Array<Scalars['String']>;
};

export enum DaskClusterState {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Running = 'RUNNING',
  Stopped = 'STOPPED',
  Stopping = 'STOPPING'
}

export type Mutation = {
  __typename?: 'Mutation';
  createDaskCluster: DaskCluster;
};


export type MutationCreateDaskClusterArgs = {
  input: CreateClusterInput;
};

export type OffsetPaginationInput = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  daskCluster: DaskCluster;
  daskClusters: Array<DaskCluster>;
  me: User;
};


export type QueryDaskClusterArgs = {
  id: Scalars['ID'];
};


export type QueryDaskClustersArgs = {
  filters?: InputMaybe<ClusterFiler>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

/**  A security object for a dask cluster */
export type Security = {
  __typename?: 'Security';
  tlsCert: Scalars['String'];
  tlsKey: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
  sub: Scalars['String'];
  username: Scalars['String'];
};

export type ListClusterQueryVariables = Exact<{ [key: string]: never; }>;


export type ListClusterQuery = { __typename?: 'Query', daskClusters: Array<{ __typename?: 'DaskCluster', name: string, id: string }> };


export const ListClusterDocument = gql`
    query ListCluster {
  daskClusters {
    name
    id
  }
}
    `;

/**
 * __useListClusterQuery__
 *
 * To run a query within a React component, call `useListClusterQuery` and pass it any options that fit your needs.
 * When your component renders, `useListClusterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListClusterQuery({
 *   variables: {
 *   },
 * });
 */
export function useListClusterQuery(baseOptions?: Apollo.QueryHookOptions<ListClusterQuery, ListClusterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListClusterQuery, ListClusterQueryVariables>(ListClusterDocument, options);
      }
export function useListClusterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListClusterQuery, ListClusterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListClusterQuery, ListClusterQueryVariables>(ListClusterDocument, options);
        }
export type ListClusterQueryHookResult = ReturnType<typeof useListClusterQuery>;
export type ListClusterLazyQueryHookResult = ReturnType<typeof useListClusterLazyQuery>;
export type ListClusterQueryResult = Apollo.QueryResult<ListClusterQuery, ListClusterQueryVariables>;
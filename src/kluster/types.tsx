import {
  ApolloClient,
  NormalizedCacheObject,
  PossibleTypesMap,
} from "@apollo/client";

export type KlusterConfig = {
  endpointUrl: string;
  wsEndpointUrl: string;
  secure: boolean;
  retrieveToken: () => string;
  possibleTypes?: PossibleTypesMap;
};

export type KlusterState = {
  config?: KlusterConfig;
  client?: KlusterClient;
};

export type KlusterContextType = KlusterState & {
  configure: (config?: KlusterConfig) => void;
};

export type KlusterClient = ApolloClient<NormalizedCacheObject>;

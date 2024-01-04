import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import React, { useState } from "react";
import { createKlusterClient } from "./client";
import { KlusterContext } from "./KlusterContext";
import { KlusterConfig, KlusterState } from "./types";

export type KlusterProps = {
  children: React.ReactNode;
  clientCreator?: (
    config: KlusterConfig
  ) => ApolloClient<NormalizedCacheObject>;
};

export const KlusterProvider: React.FC<KlusterProps> = ({
  children,
  clientCreator = createKlusterClient,
}) => {
  const [state, setState] = useState<KlusterState>({
    config: undefined,
    client: undefined,
  });

  const configure = (config?: KlusterConfig) => {
    if (!config) {
      setState({
        config: undefined,
        client: undefined,
      });
      return;
    }

    setState({ config: config, client: clientCreator(config) });
  };

  return (
    <KlusterContext.Provider
      value={{
        configure: configure,
        ...state,
      }}
    >
      {children}
    </KlusterContext.Provider>
  );
};

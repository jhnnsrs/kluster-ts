import { KlusterClient, KlusterConfig, KlusterContextType } from "./types";
import React, { useContext } from "react";
import { useQuery } from "@apollo/client";

export const KlusterContext = React.createContext<KlusterContextType>({
  configure: () => {
    throw Error("No Provider in context not configured");
  },
});

export const useKluster = () => useContext(KlusterContext);

export const useKlusterQuery = (query: any) => {
  const { client } = useKluster();
  return useQuery(query, { client: client });
};

export function withKluster<T extends (options: any) => any>(func: T): T {
  const Wrapped = (nana: any) => {
    const { client } = useKluster();
    console.log("withKluster", client);
    return func({ ...nana, client: client });
  };
  return Wrapped as T;
}

import React, { useEffect } from "react";
import { useFakts } from "@jhnnsrs/fakts";
import { useHerre } from "@jhnnsrs/herre";
import { useKluster } from "../kluster";

export const KlusterAutoConfigure: React.FC<{}> = (props) => {
  const { configure } = useKluster();
  const { token } = useHerre();
  const { fakts } = useFakts();

  useEffect(() => {
    if (token && fakts.kluster) {
      console.log("Configuring kluster client", fakts.kluster)
      configure({
        secure: fakts.kluster.secure,
        wsEndpointUrl: fakts.kluster.ws_endpoint_url,
        endpointUrl: fakts.kluster.endpoint_url,
        retrieveToken: () => token,
      });
    }
  }, [token, fakts]);

  return <> </>;
};

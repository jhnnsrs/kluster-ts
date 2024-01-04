import React from "react";
import { useKluster } from "./KlusterContext";

export const KlusterGuard: React.FC<{
  key?: string;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}> = ({ key, children, fallback }) => {
  const { client } = useKluster();

  if (client) return <>{children}</>;

  return <>{fallback || `Not yet with Kluster`}</>;
};

export const lokNextGuarded = <T extends {}>(
  Child: React.ComponentType<T>,
  fallback?: React.ReactNode
) => {
  return (props: any) => (
    <KlusterGuard fallback={fallback}>
      <Child {...props} />
    </KlusterGuard>
  );
};

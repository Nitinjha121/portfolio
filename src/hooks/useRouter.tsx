import React from "react";

//gatsby
import { PageProps } from "gatsby";

const routerCurrentData: Record<"current", PageProps | undefined> = {
  current: undefined,
};

export function useRouter() {
  return routerCurrentData.current;
}

export function useSetRouter(initialData: PageProps) {
  routerCurrentData.current = initialData;
}

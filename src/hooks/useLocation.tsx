import React from "react";

//gatsby
import { PageProps } from "gatsby";

const routerCurrentData: Record<"current", PageProps["location"] | null> = {
  current: null,
};

export function useLocation() {
  const [location, setLocation] = React.useState<PageProps["location"]>();

  React.useEffect(() => {
    if (routerCurrentData.current) setLocation(routerCurrentData.current);
  }, [routerCurrentData.current]);
  return location;
}

export function useSetLocation(initialData: PageProps["location"]) {
  routerCurrentData.current = initialData;
}

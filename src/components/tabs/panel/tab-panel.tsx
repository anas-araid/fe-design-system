import type { ComponentPropsWithRef } from "react";
import { panelId, tabId, useTabsContext } from "../root/tabs-context";

export interface TabPanelProps extends ComponentPropsWithRef<"div"> {
  value: string;
}

export function TabPanel({ value, ref, ...rest }: TabPanelProps) {
  const { value: activeValue, baseId } = useTabsContext();
  const isActive = activeValue === value;

  return (
    <div
      ref={ref}
      role="tabpanel"
      id={panelId(baseId, value)}
      aria-labelledby={tabId(baseId, value)}
      hidden={!isActive}
      {...rest}
    />
  );
}

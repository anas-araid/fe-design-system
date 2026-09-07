import type { ComponentPropsWithRef } from "react";
import { panelId, tabId, useTabsContext } from "../root/tabs-context";

export interface TabPanelProps extends ComponentPropsWithRef<"div"> {
  value: string;
}

/**
 * Content shown when the `Tabs.Tab` with the same `value` is active. Panels
 * for inactive tabs stay mounted and are hidden via the `hidden` attribute,
 * rather than being removed from the DOM.
 *
 * @param value - Must match the `value` of the `Tabs.Tab` that controls this panel.
 */
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
      tabIndex={0}
      {...rest}
    />
  );
}

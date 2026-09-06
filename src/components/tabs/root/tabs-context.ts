import { createContext, use } from "react";

export type TabsVariant = "pill" | "underline";

export interface TabsContextValue {
  value: string | undefined;
  selectTab: (value: string) => void;
  variant: TabsVariant;
  baseId: string;
}

export const TabsContext = createContext<TabsContextValue | null>(null);

export function useTabsContext(): TabsContextValue {
  const context = use(TabsContext);
  if (!context) {
    throw new Error("Tabs.List, Tabs.Tab and Tabs.Panel must be used inside <Tabs.Root>.");
  }
  return context;
}

export function tabId(baseId: string, value: string): string {
  return `${baseId}-tab-${value}`;
}

export function panelId(baseId: string, value: string): string {
  return `${baseId}-panel-${value}`;
}

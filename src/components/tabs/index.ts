import { TabsList } from "./list/tabs-list";
import { TabPanel } from "./panel/tab-panel";
import { TabsRoot } from "./root/tabs-root";
import { Tab } from "./tab/tab";

export type { TabsListProps } from "./list/tabs-list";
export type { TabPanelProps } from "./panel/tab-panel";
export type { TabsVariant } from "./root/tabs-context";
export type { TabsProps } from "./root/tabs-root";
export type { TabProps } from "./tab/tab";

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Tab,
  Panel: TabPanel,
};

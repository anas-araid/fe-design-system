import { clsx } from "clsx";
import type { ComponentPropsWithRef } from "react";
import { useId } from "react";
import { useControllableState } from "../../../hooks/use-controllable-state";
import styles from "../tabs.module.css";
import type { TabsVariant } from "./tabs-context";
import { TabsContext } from "./tabs-context";

export interface TabsProps extends ComponentPropsWithRef<"div"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  variant?: TabsVariant;
}

export function TabsRoot({
  value,
  defaultValue,
  onValueChange,
  variant = "pill",
  className,
  ref,
  ...rest
}: TabsProps) {
  const baseId = useId();
  const [currentValue, selectTab] = useControllableState({
    value,
    defaultValue,
    onChange: onValueChange,
  });

  return (
    <TabsContext value={{ value: currentValue, selectTab, variant, baseId }}>
      <div ref={ref} className={clsx(styles.root, className)} {...rest} />
    </TabsContext>
  );
}

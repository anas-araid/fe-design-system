import { clsx } from "clsx";
import type { ComponentPropsWithRef } from "react";
import { useTabsContext } from "../root/tabs-context";
import styles from "../tabs.module.css";

type TabsListLabelProps =
  | { "aria-label": string; "aria-labelledby"?: undefined }
  | { "aria-labelledby": string; "aria-label"?: undefined };

export type TabsListProps = Omit<
  ComponentPropsWithRef<"div">,
  "aria-label" | "aria-labelledby" | "role"
> &
  TabsListLabelProps;

export function TabsList({ className, ref, ...rest }: TabsListProps) {
  const { variant } = useTabsContext();

  return (
    <div
      ref={ref}
      role="tablist"
      data-variant={variant}
      className={clsx(styles.list, className)}
      {...rest}
    />
  );
}

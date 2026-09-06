import { clsx } from "clsx";
import type { ComponentPropsWithRef } from "react";
import type { BadgeProps } from "../../badge/badge";
import { Badge } from "../../badge/badge";
import { panelId, tabId, useTabsContext } from "../root/tabs-context";
import styles from "../tabs.module.css";

export interface TabProps extends Omit<ComponentPropsWithRef<"button">, "role"> {
  value: string;
  badge?: BadgeProps;
}

export function Tab({ value, badge, children, className, onClick, ref, ...rest }: TabProps) {
  const { value: activeValue, selectTab, baseId } = useTabsContext();
  const isSelected = activeValue === value;

  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      id={tabId(baseId, value)}
      aria-controls={panelId(baseId, value)}
      aria-selected={isSelected}
      className={clsx(styles.tab, className)}
      onClick={(event) => {
        onClick?.(event);
        selectTab(value);
      }}
      {...rest}
    >
      {children}
      {badge && (
        <span className={styles.badge}>
          <Badge {...badge} />
        </span>
      )}
    </button>
  );
}

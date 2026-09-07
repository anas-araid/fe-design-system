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

/**
 * A single tab button. Clicking it makes the `Tabs.Panel` with the same
 * `value` visible.
 *
 * @param value - Must match the `value` of the `Tabs.Panel` this tab controls.
 * @param badge - Renders a `Badge` next to the label
 */
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

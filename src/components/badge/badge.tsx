import { clsx } from "clsx";
import type { ComponentPropsWithRef, ReactNode } from "react";
import styles from "./badge.module.css";

export type BadgeVariant = "neutral" | "positive" | "negative";

export interface BadgeProps extends ComponentPropsWithRef<"span"> {
  variant?: BadgeVariant;
  children: ReactNode;
}

/**
 * A small label for status or count. Use it on its own, or pass it to
 * `Tabs.Tab`'s `badge` prop to render it inside a tab without composing it
 * by hand.
 *
 * @param variant - Visual tone. Defaults to `"neutral"`.
 * @param children - Label content.
 */
export function Badge({ variant = "neutral", className, ref, ...rest }: BadgeProps) {
  return (
    <span ref={ref} className={clsx(styles.root, className)} data-variant={variant} {...rest} />
  );
}

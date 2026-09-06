import { clsx } from "clsx";
import type { ComponentPropsWithRef, ReactNode } from "react";
import styles from "./badge.module.css";

export type BadgeVariant = "neutral" | "positive" | "negative";

export interface BadgeProps extends ComponentPropsWithRef<"span"> {
  variant?: BadgeVariant;
  children: ReactNode;
}

export function Badge({ variant = "neutral", className, ref, ...rest }: BadgeProps) {
  return (
    <span ref={ref} className={clsx(styles.root, className)} data-variant={variant} {...rest} />
  );
}

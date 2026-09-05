import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";
import styles from "./badge.module.css";

export type BadgeVariant = "neutral" | "positive" | "negative";

export interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  variant?: BadgeVariant;
  children: ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "neutral", className, ...rest }, ref) => {
    return (
      <span ref={ref} className={clsx(styles.root, className)} data-variant={variant} {...rest} />
    );
  },
);

Badge.displayName = "Badge";

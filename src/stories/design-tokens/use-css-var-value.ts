import { useState } from "react";

export function useCssVarValue(cssVar: string): string {
  const [value] = useState(() =>
    typeof document === "undefined"
      ? ""
      : getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim(),
  );
  return value;
}

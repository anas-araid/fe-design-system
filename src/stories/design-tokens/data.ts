export interface DesignToken {
  name: string; // "color-navy-900" — display label, no leading "--"
  cssVar: string; // "--color-navy-900" — used in var(...) and getPropertyValue(...)
}

export interface SemanticToken extends DesignToken {
  aliasOf: string; // token this points to, e.g. "color-navy-900" — for the "→ ..." label only
}

export const colorTokens: DesignToken[] = [
  { name: "color-white", cssVar: "--color-white" },
  { name: "color-navy-900", cssVar: "--color-navy-900" },
  { name: "color-navy-800", cssVar: "--color-navy-800" },
  { name: "color-navy-700", cssVar: "--color-navy-700" },
  { name: "color-gray-50", cssVar: "--color-gray-50" },
  { name: "color-gray-100", cssVar: "--color-gray-100" },
  { name: "color-gray-300", cssVar: "--color-gray-300" },
  { name: "color-gray-400", cssVar: "--color-gray-400" },
  { name: "color-green-200", cssVar: "--color-green-200" },
  { name: "color-red-200", cssVar: "--color-red-200" },
];

export const spacingTokens: DesignToken[] = [
  { name: "spacing-0", cssVar: "--spacing-0" },
  { name: "spacing-4xs", cssVar: "--spacing-4xs" },
  { name: "spacing-3xs", cssVar: "--spacing-3xs" },
  { name: "spacing-2xs", cssVar: "--spacing-2xs" },
  { name: "spacing-xs", cssVar: "--spacing-xs" },
  { name: "spacing-s", cssVar: "--spacing-s" },
  { name: "spacing-m", cssVar: "--spacing-m" },
  { name: "spacing-l", cssVar: "--spacing-l" },
  { name: "spacing-xl", cssVar: "--spacing-xl" },
  { name: "spacing-2xl", cssVar: "--spacing-2xl" },
];

export const typographyTokens: DesignToken[] = [
  { name: "font-family-sans", cssVar: "--font-family-sans" },
  { name: "font-size-100", cssVar: "--font-size-100" },
  { name: "font-size-200", cssVar: "--font-size-200" },
  { name: "font-weight-bold", cssVar: "--font-weight-bold" },
  { name: "line-height-normal", cssVar: "--line-height-normal" },
];

// Semantic aliases that resolve to a color — rendered as swatches, same treatment as primitives.
export const semanticColorTokens: SemanticToken[] = [
  { name: "color-surface-inverse", cssVar: "--color-surface-inverse", aliasOf: "color-navy-900" },
  {
    name: "color-surface-inverse-hover",
    cssVar: "--color-surface-inverse-hover",
    aliasOf: "color-navy-800",
  },
  {
    name: "color-surface-inverse-active",
    cssVar: "--color-surface-inverse-active",
    aliasOf: "color-navy-700",
  },
  { name: "color-surface-hover", cssVar: "--color-surface-hover", aliasOf: "color-gray-50" },
  { name: "color-surface-active", cssVar: "--color-surface-active", aliasOf: "color-gray-100" },
  { name: "color-surface-high", cssVar: "--color-surface-high", aliasOf: "color-gray-100" },
  {
    name: "color-surface-positive",
    cssVar: "--color-surface-positive",
    aliasOf: "color-green-200",
  },
  {
    name: "color-surface-negative",
    cssVar: "--color-surface-negative",
    aliasOf: "color-red-200",
  },
  { name: "color-text-on-inverse", cssVar: "--color-text-on-inverse", aliasOf: "color-white" },
  { name: "color-text-on-neutral", cssVar: "--color-text-on-neutral", aliasOf: "color-navy-900" },
  { name: "color-border-default", cssVar: "--color-border-default", aliasOf: "color-gray-300" },
  { name: "color-border-hover", cssVar: "--color-border-hover", aliasOf: "color-gray-400" },
];

// Non-color semantic aliases — rendered as a name/value/pointer row.
export const semanticOtherTokens: SemanticToken[] = [
  {
    name: "focus-ring-color",
    cssVar: "--focus-ring-color",
    aliasOf: "color-surface-inverse",
  },
  { name: "focus-ring-width", cssVar: "--focus-ring-width", aliasOf: "border-width-medium" },
  { name: "focus-ring-offset", cssVar: "--focus-ring-offset", aliasOf: "border-width-small" },
  { name: "text-body-family", cssVar: "--text-body-family", aliasOf: "font-family-sans" },
  {
    name: "text-body-line-height",
    cssVar: "--text-body-line-height",
    aliasOf: "line-height-normal",
  },
  { name: "text-body-weight", cssVar: "--text-body-weight", aliasOf: "font-weight-bold" },
  { name: "text-body-m-size", cssVar: "--text-body-m-size", aliasOf: "font-size-200" },
  { name: "text-body-s-size", cssVar: "--text-body-s-size", aliasOf: "font-size-100" },
];

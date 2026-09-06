import { create } from "storybook/theming/create";
import { brandColors } from "./colors";

export const primaTheme = create({
  base: "light",

  brandTitle: "Prima Design System",
  brandUrl: "https://www.prima.it",
  brandImage: "/prima-logo.svg",
  brandTarget: "_blank",

  colorPrimary: brandColors.primary,
  colorSecondary: brandColors.primary,

  appBg: brandColors.surfaceMuted,
  appContentBg: brandColors.surface,
  appPreviewBg: brandColors.surface,
  appBorderColor: brandColors.border,
  appBorderRadius: 8,

  fontBase: '"Inter", system-ui, sans-serif',
  fontCode: 'ui-monospace, SFMono-Regular, "SF Mono", monospace',

  textColor: brandColors.ink,
  textInverseColor: brandColors.onPrimary,
  textMutedColor: brandColors.inkMuted,

  barTextColor: brandColors.inkMuted,
  barSelectedColor: brandColors.primary,
  barHoverColor: brandColors.primary,
  barBg: brandColors.surface,

  inputBg: brandColors.surface,
  inputBorder: brandColors.border,
  inputTextColor: brandColors.ink,
  inputBorderRadius: 6,
});

export default primaTheme;

import { addons } from "storybook/manager-api";
import { primaTheme } from "./brand/theme";

addons.setConfig({
  theme: primaTheme,
});

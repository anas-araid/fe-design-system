import type { Preview } from "@storybook/react-vite";
import "../src/index.css";
import "./brand/canvas.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

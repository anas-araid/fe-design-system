import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "positive", "negative"],
    },
  },
  args: {
    variant: "neutral",
    children: "Badge",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: { variant: "neutral" },
};

export const Positive: Story = {
  args: { variant: "positive", children: "Success" },
};

export const Negative: Story = {
  args: { variant: "negative", children: "Error" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--spacing-2xs)" }}>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="positive">Positive</Badge>
      <Badge variant="negative">Negative</Badge>
    </div>
  ),
};

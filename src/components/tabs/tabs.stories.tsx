import type { Decorator, Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Badge } from "../badge";
import { Tabs } from ".";

const withPadding: Decorator = (Story) => (
  <div style={{ padding: "var(--spacing-m)" }}>
    <Story />
  </div>
);

const meta = {
  title: "Components/Tabs",
  component: Tabs.Root,
  tags: ["autodocs"],
  decorators: [withPadding],
  argTypes: {
    variant: {
      control: "select",
      options: ["pill", "underline"],
    },
  },
} satisfies Meta<typeof Tabs.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Pill: Story = {
  args: {
    variant: "pill",
    defaultValue: "emails",
  },
  render: (args) => (
    <Tabs.Root {...args}>
      <Tabs.List aria-label="Sezioni">
        <Tabs.Tab value="emails">Emails</Tabs.Tab>
        <Tabs.Tab value="files">Files</Tabs.Tab>
        <Tabs.Tab value="edits">Edits</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="emails">Contenuto di Emails.</Tabs.Panel>
      <Tabs.Panel value="files">Contenuto di Files.</Tabs.Panel>
      <Tabs.Panel value="edits">Contenuto di Edits.</Tabs.Panel>
    </Tabs.Root>
  ),
};

export const Underline: Story = {
  args: {
    variant: "underline",
    defaultValue: "emails",
  },
  render: (args) => (
    <Tabs.Root {...args}>
      <Tabs.List aria-label="Sezioni">
        <Tabs.Tab value="emails">Emails</Tabs.Tab>
        <Tabs.Tab value="files">Files</Tabs.Tab>
        <Tabs.Tab value="edits">
          Edits
          <Badge variant="negative">Warning</Badge>
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="emails">Contenuto di Emails.</Tabs.Panel>
      <Tabs.Panel value="files">Contenuto di Files.</Tabs.Panel>
      <Tabs.Panel value="edits">Contenuto di Edits.</Tabs.Panel>
    </Tabs.Root>
  ),
};

export const WithBadge: Story = {
  args: {
    variant: "pill",
    defaultValue: "emails",
  },
  render: (args) => (
    <Tabs.Root {...args}>
      <Tabs.List aria-label="Sezioni">
        <Tabs.Tab value="emails">Emails</Tabs.Tab>
        <Tabs.Tab value="files" badge={{ variant: "negative", children: "Warning" }}>
          Files
        </Tabs.Tab>
        <Tabs.Tab value="edits">
          Edits
          <Badge variant="positive">Badge</Badge>
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="emails">Contenuto di Emails.</Tabs.Panel>
      <Tabs.Panel value="files">Contenuto di Files.</Tabs.Panel>
      <Tabs.Panel value="edits">Contenuto di Edits.</Tabs.Panel>
    </Tabs.Root>
  ),
};

export const Controlled: Story = {
  render: (args) => {
    function ControlledExample() {
      const [active, setActive] = useState("emails");
      return (
        <div>
          <p>Tab attiva: {active}</p>
          <Tabs.Root {...args} value={active} onValueChange={setActive}>
            <Tabs.List aria-label="Sezioni">
              <Tabs.Tab value="emails">Emails</Tabs.Tab>
              <Tabs.Tab value="files">Files</Tabs.Tab>
              <Tabs.Tab value="edits">Edits</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="emails">Contenuto di Emails.</Tabs.Panel>
            <Tabs.Panel value="files">Contenuto di Files.</Tabs.Panel>
            <Tabs.Panel value="edits">Contenuto di Edits.</Tabs.Panel>
          </Tabs.Root>
        </div>
      );
    }
    return <ControlledExample />;
  },
};

export const ManyTabs: Story = {
  args: {
    variant: "pill",
    defaultValue: "tab-1",
  },
  render: (args) => {
    const values = Array.from({ length: 10 }, (_, i) => `tab-${i + 1}`);
    return (
      <div style={{ maxWidth: "20rem" }}>
        <Tabs.Root {...args}>
          <Tabs.List aria-label="Molte sezioni">
            {values.map((value) => (
              <Tabs.Tab key={value} value={value}>
                Tab {value}
              </Tabs.Tab>
            ))}
          </Tabs.List>
          {values.map((value) => (
            <Tabs.Panel key={value} value={value}>
              Contenuto {value}.
            </Tabs.Panel>
          ))}
        </Tabs.Root>
      </div>
    );
  },
};

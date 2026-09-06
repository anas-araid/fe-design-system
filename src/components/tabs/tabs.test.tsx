import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import type { TabsProps } from ".";
import { Tabs } from ".";

function renderTabs(props?: Partial<TabsProps>) {
  return render(
    <Tabs.Root {...props}>
      <Tabs.List aria-label="Sections">
        <Tabs.Tab value="emails">Emails</Tabs.Tab>
        <Tabs.Tab value="files">Files</Tabs.Tab>
        <Tabs.Tab value="edits">Edits</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="emails">Emails content.</Tabs.Panel>
      <Tabs.Panel value="files">Files content.</Tabs.Panel>
      <Tabs.Panel value="edits">Edits content.</Tabs.Panel>
    </Tabs.Root>,
  );
}

describe("Tabs", () => {
  describe("selection", () => {
    it("clicking changes the tab and the visible panel", async () => {
      const user = userEvent.setup();
      renderTabs({ defaultValue: "emails" });

      await user.click(screen.getByRole("tab", { name: "Files" }));

      expect(screen.getByRole("tab", { name: "Files" })).toHaveAttribute("aria-selected", "true");
      expect(screen.getByRole("tabpanel")).toHaveTextContent("Files content.");
    });
  });

  describe("variants", () => {
    it("defaults to the pill variant", () => {
      renderTabs({ defaultValue: "emails" });

      expect(screen.getByRole("tablist")).toHaveAttribute("data-variant", "pill");
    });

    it("applies the underline variant when requested", () => {
      renderTabs({ defaultValue: "emails", variant: "underline" });

      expect(screen.getByRole("tablist")).toHaveAttribute("data-variant", "underline");
    });
  });

  describe("click", () => {
    it("clicking a tab changes the selected tab", async () => {
      const user = userEvent.setup();
      renderTabs({ defaultValue: "emails" });

      await user.click(screen.getByRole("tab", { name: "Files" }));

      expect(screen.getByRole("tab", { name: "Files" })).toHaveAttribute("aria-selected", "true");
    });
  });
});

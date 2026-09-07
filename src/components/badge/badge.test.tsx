import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./badge";

describe("Badge", () => {
  it("defaults to the neutral variant", () => {
    render(<Badge>Label</Badge>);

    expect(screen.getByText("Label")).toHaveAttribute("data-variant", "neutral");
  });

  it("renders positive variant as data-variant", () => {
    render(<Badge variant="positive">Label</Badge>);

    expect(screen.getByText("Label")).toHaveAttribute("data-variant", "positive");
  });

  it("merges a custom className with the component's own class", () => {
    render(<Badge className="custom">Label</Badge>);

    const badge = screen.getByText("Label");
    expect(badge).toHaveClass("custom");
  });
});

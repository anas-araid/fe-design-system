type Status = "up-to-date" | "update-required" | "missing";

interface ComponentStatus {
  name: string;
  figmaStatus: Status;
  devStatus: Status;
  notes?: string;
}

export const componentStatusData: ComponentStatus[] = [
  {
    name: "Tabs",
    figmaStatus: "up-to-date",
    devStatus: "up-to-date",
    notes:
      "Root/List/Tab/Panel compound API, pill and underline variants, integrates Badge via props.",
  },
  {
    name: "Badge",
    figmaStatus: "up-to-date",
    devStatus: "up-to-date",
    notes: "Neutral, positive, negative variants. Used standalone and inside Tab.",
  },
];

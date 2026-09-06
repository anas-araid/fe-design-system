import { Badge } from "../../components/badge";
import styles from "./component-status.module.css";
import { componentStatusData } from "./data";

const STATUS_LABEL: Record<string, string> = {
  "up-to-date": "✅ Up to date",
  "update-required": "🛠️ Update required",
  missing: "❌ Missing",
};

export function ComponentStatusTable() {
  return (
    <table className={styles.root}>
      <thead>
        <tr>
          <th className={styles["header-cell"]}>Component</th>
          <th className={styles["header-cell"]}>Figma</th>
          <th className={styles["header-cell"]}>Dev</th>
          <th className={styles["header-cell"]}>Notes</th>
        </tr>
      </thead>
      <tbody>
        {componentStatusData.map((component) => (
          <tr key={component.name} className={styles.row}>
            <td className={`${styles.cell} ${styles.link}`}>{component.name}</td>
            <td className={styles.cell}>
              <Badge variant="neutral">{STATUS_LABEL[component.figmaStatus]}</Badge>
            </td>
            <td className={styles.cell}>
              <Badge variant="neutral">{STATUS_LABEL[component.devStatus]}</Badge>
            </td>
            <td className={`${styles.cell} ${styles.notes}`}>{component.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

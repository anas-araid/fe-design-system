import type { DesignToken } from "./data";
import {
  colorTokens,
  semanticColorTokens,
  semanticOtherTokens,
  spacingTokens,
  typographyTokens,
} from "./data";
import styles from "./design-tokens.module.css";
import { useCssVarValue } from "./use-css-var-value";

function Swatch({ token, aliasOf }: { token: DesignToken; aliasOf?: string }) {
  const value = useCssVarValue(token.cssVar);
  return (
    <div className={styles.swatch}>
      <div className={styles["swatch-color"]} style={{ backgroundColor: `var(${token.cssVar})` }} />
      <span className={styles["swatch-name"]}>{token.name}</span>
      <span className={styles["swatch-value"]}>{aliasOf ? `→ ${aliasOf}` : value}</span>
    </div>
  );
}

function TokenRow({ token, aliasOf }: { token: DesignToken; aliasOf?: string }) {
  const value = useCssVarValue(token.cssVar);
  return (
    <li className={styles["token-row"]}>
      <span className={styles["token-name"]}>{token.name}</span>
      <span className={styles["token-value"]}>{value}</span>
      {aliasOf && <span className={styles["token-alias"]}>→ {aliasOf}</span>}
    </li>
  );
}

export function ColorPalette() {
  return (
    <div className={styles.grid}>
      {colorTokens.map((token) => (
        <Swatch key={token.cssVar} token={token} />
      ))}
    </div>
  );
}

export function SpacingScale() {
  return (
    <div className={styles["spacing-list"]}>
      {spacingTokens.map((token) => (
        <SpacingRow key={token.cssVar} token={token} />
      ))}
    </div>
  );
}

function SpacingRow({ token }: { token: DesignToken }) {
  const value = useCssVarValue(token.cssVar);
  return (
    <div className={styles["spacing-row"]}>
      <span className={styles["token-name"]}>{token.name}</span>
      <div className={styles["spacing-bar"]} style={{ width: `var(${token.cssVar})` }} />
      <span className={styles["spacing-value"]}>{value}</span>
    </div>
  );
}

export function TypographySpecimen() {
  return (
    <div className={styles["section-stack"]}>
      <p className={styles["type-family"]}>The quick brown fox jumps over the lazy dog.</p>
      <p className={styles["type-size-sample"]} data-size="200">
        font-size-200 sample text
      </p>
      <p className={styles["type-size-sample"]} data-size="100">
        font-size-100 sample text
      </p>
      <ul className={styles["token-list"]}>
        {typographyTokens.map((token) => (
          <TokenRow key={token.cssVar} token={token} />
        ))}
      </ul>
    </div>
  );
}

export function SemanticAliases() {
  return (
    <div className={styles["section-stack"]}>
      <div className={styles.grid}>
        {semanticColorTokens.map((token) => (
          <Swatch key={token.cssVar} token={token} aliasOf={token.aliasOf} />
        ))}
      </div>
      <ul className={styles["token-list"]}>
        {semanticOtherTokens.map((token) => (
          <TokenRow key={token.cssVar} token={token} aliasOf={token.aliasOf} />
        ))}
      </ul>
    </div>
  );
}

import { css } from "lit";

export const section = css`
  :host {
    display: flex;
    width: 1024px;
    height: 500px;
    padding: 32px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;
    overflow: hidden;
  }

  button:hover,
  button:active a:hover,
  a:active {
    background-color: color-mix(
      in srgb,
      white 15%,
      var(--button-background, var(--tom2))
    );
    color: var(--tom1);
  }
`;

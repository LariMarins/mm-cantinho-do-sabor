import { css } from "lit";

export const section = css`
  :host {
    width: 100%;
    height: 100svh;

    display: flex;

    padding: 32px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 68px;
    flex-shrink: 0;
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

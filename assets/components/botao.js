import { LitElement, html, css } from "lit";

export class Botao extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

       ::slotted(button),
       ::slotted(a),
       button {
        width: 300px;
        height: 50px;

        display: flex;
        padding: 5px 24px;
        border: 0;
        justify-content: center;
        align-items: center;
        flex-direction:center;

        border-radius: 8px;
        background-color: var(
          --button-background,
          color-mix(in srgb, black 20%, var(--tom2))
        );
        box-shadow: 0px 2px 4px 0px #000000;

        /* Tipografia */

        color:white;
        text-align: center;
        font-family: var(--fonte-corpo);
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        white-space: nowrap;
        text-decoration: none;

        transition: all 0.2ms;
        cursor: pointer;
      }
    `,
  ];

  render() {
    return html` <slot>
      <button>pressione</button>
    </slot>`;
  }
}
customElements.define("app-botao", Botao);

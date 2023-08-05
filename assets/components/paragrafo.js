import { LitElement, html, css } from "lit";

export class Paragrafo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        color: black;
        font-family: var(--fonte-corpo);
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 20px */
      }

      p {
        margin: 0;
      }
    `,
  ];

  render() {
    return html` <p><slot>Parágrafo</slot></p>`;
  }
}
customElements.define("app-paragrafo", Paragrafo);

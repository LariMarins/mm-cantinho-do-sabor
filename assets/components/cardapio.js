import { LitElement, html, css } from "lit";

export class Cardapio extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        width: 800px;
        height: 600px;
        justify-content: center;
        align-items: center;

        border-radius: 8px;
        background: #f9c0b3;
        box-shadow: 0px 24px 34px 0px rgba(0, 0, 0, 0.6);

        aspect-ratio: 167 / 130;
        overflow: hidden;
      }
    `,
  ];

  render() {
    return html` <slot>Coloque uma imagem</slot> `;
  }
}
customElements.define("app-cardapio", Cardapio);

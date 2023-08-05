import { LitElement, html, css } from "lit";

export class Quadro extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        width:415px;
        max-width:369px;
        height: auto;
        justify-content: center;
        align-items: center;
       
        border-radius: 8px;
        background: #F9C0B3;
        box-shadow: 0px 24px 34px 0px rgba(0, 0, 0, 0.25);

        aspect-ratio: 167 / 130;
        overflow:hidden;
      }
    `,
  ];

  render() {
    return html` <slot>Coloque uma imagem</slot> `;
  }
}
customElements.define("app-quadro", Quadro);

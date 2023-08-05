import { LitElement, html, css } from "lit";
import { section } from "../styles/section-styles";

export class ContatoSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: flex;
        padding: 32px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 82px;
      }

      aside {
        display: flex;

        align-items: center;
        gap: 100px;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      img{
        width:100%;
      }

    `,
  ];

  render() {
    return html`
      <app-titulo>Conheça nosso estabelecimento</app-titulo>

      <aside>
        <div>
          <app-botao>
            <a href="https://goo.gl/maps/vx2bxEaaJqJo5D9eA"> Nossa Localização </a>
          </app-botao>
          <app-botao>
            <a href="https://web.whatsapp.com/">Mande uma mensagem</a>
          </app-botao>
        </div>

        <app-quadro>
            <img loading="lazy" src="restaurante.jpg" alt="restaurante">
        </app-quadro>
      </aside>
    `;
  }
}
customElements.define("contato-section", ContatoSection);

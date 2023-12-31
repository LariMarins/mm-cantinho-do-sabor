import { LitElement, html, css } from "lit";
import { section } from "../styles/section-styles";
import { animate } from "../styles/animate-styles";

export class ContatoSection extends LitElement {
  static styles = [
    section,
    animate,
    css`
      :host {
        display: flex;
        padding: 32px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 82px;
        --animate-duration: 1.5s;

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
      <app-titulo class="animate__animated delay-20s animate__slower animate__slower animate__slower animate__slower animate__slideInUp">Conheça nosso estabelecimento</app-titulo>

      <aside>
        <div class="animate__animated" data-toggle-class="animate_slideInUp">
          <app-botao>
            <a href="https://goo.gl/maps/KrpRqWa7GibsMPeN8"> Nossa Localização </a>
          </app-botao>
          <app-botao>
            <a href="https://web.whatsapp.com/">Mande uma mensagem</a>
          </app-botao>

          <app-botao>
            <a href="https://instagram.com/mm_cantinho_do_sabor?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D">Rede social</a>
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

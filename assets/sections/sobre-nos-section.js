import { LitElement, html, css } from "lit";
import { section } from "../styles/section-styles";
import { animate } from "../styles/animate-styles";

export class SobreNosSection extends LitElement {
  static styles = [
    section,
    animate,
    css`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 63px;
        --animate-duration: 1.5s;

      }

      aside {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 4.375rem;
      }
      app-botao {
        width: 380px;
        display: flex;
        flex-direction: center;
        align-items: center;
        justify-content: center;
      }
    `,
  ];

  render() {
    return html`
      <app-paragrafo
        class="animate__animated animate__slower animate__slower animate__slower
        animate__slideInRight"
      >
        Desde o início, a essência do MM: Cantinho do sabor esteve enraizada na
        simplicidade e autenticidade da cozinha familiar. Dona Maria, com sua
        paixão pela horta cultivada no próprio quintal, garante ingredientes
        frescos e de qualidade em cada refeição preparada. Seu Antônio, por sua
        vez é um mestre em seu atendimento o que garante aos clientes o aconchego
        de um lar.
      </app-paragrafo>

      <aside>
        <app-quadro>
          <img loading="lazy" src="sobre nos.jpg" alt="sobre nos" />
        </app-quadro>
        <app-botao>
          <a href="sobre-nos"> Saiba mais</a>
        </app-botao>
      </aside>
    `;
  }
}
customElements.define("sobre-nos-section", SobreNosSection);

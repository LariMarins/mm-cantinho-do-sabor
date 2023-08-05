import { LitElement, html, css } from "lit";
import { section } from "../styles/section-styles";

export class SobreNosSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:row;
        gap: 63px;
      }

      aside {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 4.375rem;
      }
    `,
  ];

  render() {
    return html`
      <app-paragrafo>
        Seu Antônio e Dona Maria se uniram para criar o "M&M Cantinho de Sabor".
        Com pratos caseiros cheios de amor, conquistaram o coração dos clientes
        e tornaram-se um ponto querido na região. A tradição e o sabor se
        misturam em cada refeição servida. Venha se deliciar conosco!
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

import { LitElement, html, css } from "lit";
import { section } from "../styles/section-styles";

export class HistoriaSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: flex;
      
        padding: 32px 32px 32px 41px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 104px;
        flex-shrink: 0;
      }

    `,
  ];

  render() {
    return html`
      <app-titulo>Sobre nós</app-titulo>
      <app-paragrafo>
        Desde o início, a essência do M&M sempre esteve enraizada na
        simplicidade e autenticidade da cozinha familiar. Dona Maria, com sua
        paixão pela horta cultivada no próprio quintal, garante ingredientes
        frescos e de qualidade em cada refeição preparada. Seu Antônio, por sua
        vez, é o mestre da carne suculenta e dos temperos especiais que conferem
        aos pratos um sabor irresistível.
      </app-paragrafo>
    `;
  }
}
customElements.define("historia-section", HistoriaSection);

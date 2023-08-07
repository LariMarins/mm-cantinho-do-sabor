import { LitElement, html, css } from "lit";
import { section } from "../styles/section-styles";

export class MsvSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: block;
      }

      span{
        font-size: 2.5rem;
        color:color-mix(in srgb, red 20%, var(--tom3));
      }
    `,
  ];

  render() {
    return html`
      <app-paragrafo>
        <span>Missão:</span><br>Servir com excelência, oferecendo pratos cuidadosamente
        elaborados e preparados com ingredientes de qualidade com o intuito de
        surpreender a expectativa de nossos clientes.<br><br> <span>Visão:</span><br> Ser um restaurante
        reconhecido na cidade de Pedra Branca como referência dentro da
        gastronomia brasileira buscando oferecer um cardápio variado e saboroso.
        <br><br><span>Valores:</span><br>Atendimento diferenciado, com foco em buscar o bem estar do
        nosso cliente. Ambiente familiar proporcionando conforto para o cliente
        se sentir em casa. Comprometimento com as entregas solicitadas.
        Relacionamento ético com nossos clientes, colaboradores e fornecedores.
      </app-paragrafo>
    `;
  }
}
customElements.define("msv-section", MsvSection);

import { LitElement, html, css } from "lit";
import { section } from "../styles/section-styles";
import { animate } from "../styles/animate-styles";
export class HomeSection extends LitElement {
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
        overflow: hidden;
      }
    
       aside{
        display:flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        gap:4.25rem;
      }

      span {
        color: var(--tom1);
      }

      img {
        width: 100%
      }

      app-quadro {
        width: 450px;
        height: 410px;
        box-shadow: none;
      }

      app-titulo{
        z-index:-10;
      }

    
  
    `,
  ];

  render() {
    return html` <aside>
        <app-quadro>
          <img loading="lazy" src="logo.jpg" alt="logo" />
        </app-quadro>
        <app-titulo class="animate__animated animate__slower delay-1s animate__fadeInUp"> <span>MM:</span>Cantinho do Sabor </app-titulo>
      </aside>

      <app-paragrafo class="animate__animated animate__slow animate__fadeInUp">
        Delícias com Amor: MM Cantinho de Sabor.
      </app-paragrafo>`;
  }
}
customElements.define("home-section", HomeSection);

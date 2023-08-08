import { LitElement, html, css } from "lit";
import { section } from "../styles/section-styles";

export class MenuSectioon extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: flex;
        justify-content: center;
        flex-direction:center;
        align-items: center;
      }

      img {
        width: 100%;
        height: 100%;
      }

      swiper-container {
        width: 100%;
        height: 100%;
      }
      swiper-slide {
        display: flex;
        justify-content: center;
        flex-direction:center;
        align-items: center;
        transition: transform 500ms;
      }
    `,
  ];

  render() {
    return html`
      <app-cardapio>
        <swiper-container
         loop="true"
         effect="coverflow">
          <swiper-slide>
            <img loading="lazy" src="capa.jpg" alt="capa" />
          </swiper-slide>
          <swiper-slide>
            <img loading="lazy" src="sobre.jpg" alt="sobre" />
          </swiper-slide>
          <swiper-slide>
            <img loading="lazy" src="comida1.jpg" alt="comida1" />
          </swiper-slide>
          <swiper-slide>
            <img loading="lazy" src="comida2.jpg" alt="comida2" />
          </swiper-slide>
          <swiper-slide>
            <img loading="lazy" src="comida3.jpg" alt="comida3" />
          </swiper-slide>
          <swiper-slide>
            <img loading="lazy" src="bebidas.jpg" alt="bebida" />
          </swiper-slide>
        </swiper-container>
      </app-cardapio>
    `;
  }
}
customElements.define("menu-sectioon", MenuSectioon);

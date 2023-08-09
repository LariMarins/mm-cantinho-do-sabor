import { LitElement, html, css } from "lit";
import { section } from "../styles/section-styles";
import { animate } from "../styles/animate-styles";

export class CardapioSection extends LitElement {
  static styles = [
    section,
    animate,
    css`
      :host {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 3.75rem;
      }

      aside {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 73px;
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
        justify-content: row;
        flex-direction: row;
        align-items: center;
        transition: transform 500ms;
        height: 370px;
      }

      app-botao {
        width: 400px;
        display: flex;
        flex-direction: center;
        align-items: center;
        justify-content: center;
      }
    `,
  ];

  render() {
    return html`
      <aside>
        <app-quadro>
          <swiper-container
          loop="true"
            autoplay="true"
            speed="3000"
            disabled-on-interaction="false"
            effect="coverflow"
            simulate-touch="false"
            centered-slides="true"
            coverflow-effect-rotate="50"
            coverflow-effect-stretch="0"
            coverflow-effect-depth="100"
            coverflow-effect-modifier="1"
            coverflow-effect-slide-shadows="true"
          >
            <swiper-slide>
              <img src="prato1.jpg" alt="imagem1" />
            </swiper-slide>
            <swiper-slide>
              <img src="prato2.jpg" alt="imagem2" />
            </swiper-slide>
            <swiper-slide>
              <img src="prato3.jpg" alt="imagem3" />
            </swiper-slide>
            <swiper-slide>
              <img src="prato4.jpg" alt="imagem4" />
            </swiper-slide>
            <swiper-slide>
              <img src="prato5 (2).jpg" alt="imagem5" />
            </swiper-slide>
          </swiper-container>
        </app-quadro>

        <app-botao>
          <a href="cardapio"> Cardapio</a>
        </app-botao>
      </aside>

      <app-paragrafo class="animate__animated animate__slower animate__slower animate__slideInLeft">
        Delicie-se com nossos pratos caseiros que encantam o paladar e aquecem a
        alma. Nosso cardápio variado oferece opções irresistíveis, desde a
        suculenta carne de panela ao feijão fresquinho e a omelete deliciosa de
        Dona Maria. Tudo é preparado com ingredientes frescos, cultivados com
        carinho por nós mesmos.
      </app-paragrafo>
    `;
  }
}
customElements.define("cardapio-section", CardapioSection);

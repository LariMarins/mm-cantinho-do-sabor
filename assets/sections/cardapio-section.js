import { LitElement, html, css } from "lit";
import { section } from "../styles/section-styles";

export class CardapioSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: flex;
        flex-direction: row;
        justify-content:center;
        align-items:center;
        gap:3.75rem;
      }

      aside {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        gap: 73px;
      }

      img {
        width: 100%;
        height: 100%;
      }

      swiper-container {
        width: 415px;
        height: 370px;
      }
      swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 500ms;
      }

      app-botao{
        width: 400px;
        display: flex;
        flex-direction: center;
        align-items: center;
        justify-content:center;
      
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
            speed="2000"
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
              <img loading="lazy" src="prato1.jpg" alt="prato1" />
            </swiper-slide>
            <swiper-slide>
              <img
                class="prato2"
                loading="lazy"
                src="prato2.jpg"
                alt="prato2"
              />
            </swiper-slide>
            <swiper-slide>
              <img loading="lazy" src="prato3.jpg" alt="prato3" />
            </swiper-slide>
            <swiper-slide>
              <img loading="lazy" src="prato4.jpg" alt="prato4" />
            </swiper-slide>
            <swiper-slide>
              <img loading="lazy" src="prato5.jpg" alt="prato5" />
            </swiper-slide>
          </swiper-container>
        </app-quadro>

        <app-botao>
          <a href="https://www.youtube.com/"> Cardapio</a>
        </app-botao>
      </aside>

      <app-paragrafo>
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

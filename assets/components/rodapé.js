import { LitElement, html, css } from "lit";
import { nav } from "../../main";

export class Rodapé extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 2rem;
        font-size: 0.7rem;

        background-color: color-mix(in srgb, black 40%, var(--tom3));
        font-family: var(--fonte-corpo);
        color: white;
      }

      footer {
        border-radius: 8px 8px 0px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
        background-color: color-mix(in srgb, black 20%, var(--tom3));
      }

      nav {
       
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: row;
        gap: 1rem;
        opacity: 0.9;
        align-items: center;
        justify-content: space-around;
      }

      a,
      button {
        color: white;
        text-decoration: none;
        font-family: var(--fonte-corpo);
        font-size: 0.75rem;

        cursor: pointer;
        transition: 300ms;
      }
      a:hover,
      button:hover {
        color: var(--tom1);
      }

      a:active,
      button:active {
        color: var(--cor-primaria);
      }

      button {
        padding: 0;
        border: 0;
        background: transparent;
      }
    `,
  ];

  rolarContato() {
    return nav.rolarPara("#contato");
  }

  render() {
    return html`
      <footer>
        <nav>
          <a href="/">Home</a>
          <a href="cardapio">Cardapio</a>
          <a href="sobre-nos">Sobre nós</a>
          <button @click=${this.rolarContato}>Contato</button>
        </nav>
      </footer>

      <span>
        © MM:Cantinho do Sabor - Todos os direitos reservados desde 2023.
      </span>
    `;
  }
}
customElements.define("app-rodapé", Rodapé);

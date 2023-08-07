import { LitElement, html, css } from "lit";
import { nav } from "../../main";

export class Navbar extends LitElement {
  static styles = [
    css`
      :host {
      
        display: flex;
        box-sizing: border-box;
        width:100%;
        justify-content: space-between;
        align-items: center;
        flex-direction:row;
        padding:  2rem;
        border-radius: 0px 0px 8px 8px;
        position: fixed;  /*absolute*/
        top: 0;
        left:0;
        z-index: 100;
        background-color:var(--tom2);
        color: white;
        opacity:80%;

        transition: top 1s;
      

      }

      nav {
        display: flex;
        width:100%;
        /* height:100%; */
        flex-direction: row;
        gap: 1rem;
        opacity: 0.9;
        align-items: center;
        justify-content:space-around;
      }

      a, button {
        color: white;
        text-decoration: none;
        font-family: var(--fonte-corpo);
        font-size: 0.75rem;
      
        cursor: pointer;
        transition: 300ms;
      }
      a:hover, button:hover{
        color: var(--tom1)
      }

      a:active, button:active{
        color: var(--cor-primaria)
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
      <nav>
        <a href="/">Home</a>
        <a href="cardapio">Cardapio</a>
        <a href="sobre-nos">Sobre nós</a>
        <button @click=${this.rolarContato}>Contato</button>
      </nav>
    `;
  }
}
customElements.define("app-navbar", Navbar);

import { LitElement, html, css } from 'lit';

export class HomePage extends LitElement {
   

    render() {
        return html`
        <home-section></home-section>
        <cardapio-section></cardapio-section>
        <sobre-nos-section></sobre-nos-section>
        <contato-section id="contato"></contato-section>
        `;
    }
}
customElements.define('home-page', HomePage);

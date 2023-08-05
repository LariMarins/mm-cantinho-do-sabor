import { LitElement, html, css } from 'lit';

export class ContatoSection extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('contato-section', ContatoSection);

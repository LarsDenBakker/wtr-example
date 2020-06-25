import { html, css, LitElement } from "lit-element";

export class MyElement extends LitElement {
  title = "Hey there";
  counter = 6;

  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: #000;
    }
  `;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}

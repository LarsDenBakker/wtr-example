import { test } from "web-test-runner";
import { fixture, html } from "@open-wc/testing-helpers";
import { expect } from "@bundled-es-modules/chai";
import "../my-element.js";

test("my-element should render properly", async () => {
  const element = await fixture(html`<my-element></my-element>`);
  expect(element.localName).to.equal("my-element");
});

test("my-element has a render function", async () => {
  const element = await fixture(html`<my-element></my-element>`);
  expect(element.render).to.be.a("function");
});

test("renders count 5 initially", async () => {
  const element = await fixture(html`<my-element></my-element>`);
  expect(element.shadowRoot.querySelector("h2").textContent).to.equal(
    "Hey there Nr. 5!"
  );
});

test("clicking a button increments the counter", async () => {
  const element = await fixture(html`<my-element></my-element>`);
  element.shadowRoot.querySelector("button").click();
  await element.updateComplete;
  expect(element.shadowRoot.querySelector("h2").textContent).to.equal(
    "Hey there Nr. 6!"
  );
});

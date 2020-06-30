import * as css from "./index.css";
import 'regenerator-runtime/runtime';

export default class App {
  constructor(elem) {
    if (!elem) return;
    this.elem = elem;
  }

  render() {
    if (this.elem)
      this.elem.innerHTML = `
        <h1>App Component</h1>
        <p>The time is: ${new Date().toLocaleString()}</p>
        </section>
        `;
  }
}

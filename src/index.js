/**
 * The entry point
 */

// import App from "./components/app";
// import axios from 'axios';
import "regenerator-runtime/runtime.js";
import "babel-polyfill";

// window.addEventListener("load", async () => {
//   const app = new App(document.getElementById("app"));
const APIKEY = `17251237-ace6a816706b339ed6426cdb5`;
const url = `https://pixabay.com/api/?key=${APIKEY}&q=ships`;
//   let response = await axios.get(`https://pixabay.com/api/?key=APIKEY&q=ships`);
// const ships = response.data;
// console.log(ships);

// async function getData() {
//   const ships = await fetch(`${url}`, {
//     method: "GET",
//     mode: "no-cors",
//   }).then((response) => {
//   return response.json();
// })
// .then((ships) => {
//   console.log(ships);
// })
// .catch((err) => {
//   console.error(err);
// });

async function getData() {
  let response = await fetch(`${url}`);
  let data = await response.json();
  return data;
}
getData().then((data) => console.log(data));
// .catch((err) => {
//   console.error(err);
// });

// A very simple component setup
// app.render();

// Render the time every 1s
//   setInterval(() => {
//     app.render();
//   }, 1000);

// });

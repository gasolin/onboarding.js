"use strict";

var addon = {
  id: "addon",
  task: { title: "Add-ons" },
  page: () => {
    let page = document.createElement("div");
    let title = document.createElement("h1");
    title.textContent = "Get more done.";
    let desc = document.createElement("p");
    desc.textContent = `Add-ons are small apps you can add to Firefox that do lots of things -- from managing to-do list, to taking screenshots, to changing the look of your browser.`;
    let btn = document.createElement("button");
    let btnTxt = document.createTextNode("Show Me Add-ons");
    btn.appendChild(btnTxt);
    btn.addEventListener("click", () => {
      alert("highlight add-on!");
    });
    page.appendChild(title);
    page.appendChild(desc);
    page.appendChild(btn);
    return page;
  },
  verify: async function() {
    return false;
  },
  setComplete: async function() {
    alert("set addon tour as done");
  },
};

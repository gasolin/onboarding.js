"use strict";

var oneClickSearch = {
  id: "search",
  // title, badge, ...
  task: { title: "One-click Search" },
  // content about this task,
  page: () => {
    let page = document.createElement("div");
    let title = document.createElement("h1");
    title.textContent = "Find it faster.";
    let desc = document.createElement("p");
    desc.textContent = `Access all of your favorate search engines with a click. Search the whole Web or just one website right from the search box.`;
    let btn = document.createElement("button");
    let btnTxt = document.createTextNode("Open One-Click Search");
    btn.appendChild(btnTxt);
    btn.addEventListener("click", () => {
      alert("highlight search!");
    });
    page.appendChild(title);
    page.appendChild(desc);
    page.appendChild(btn);
    return page;
  },
  // check if this task is done
  verify: async function() {
    return false;
  },
  // set this task as done (call for setAllComplete)
  setComplete: async function() {
    alert("set search tour as done");
  },
};

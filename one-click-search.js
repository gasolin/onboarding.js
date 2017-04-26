"use strict";

var oneClickSearch = {
  id: "search",
  // title, badge, ...
  task: { title: "One-click Search" },
  // content about this task,
  page: () => {
    let page = document.createElement("div");
    let textSection = document.createElement('section');
    let title = document.createElement("h1");
    title.textContent = "Find it faster.";
    let desc = document.createElement("p");
    desc.textContent = `Access all of your favorate search engines with a click. Search the whole Web or just one website right from the search box.`;
    textSection.appendChild(title);
    textSection.appendChild(desc);
    textSection.className = 'onboarding-tour-text-section';
    page.appendChild(textSection);

    let interactSection = document.createElement('section');
    let image = document.createElement('img');
    image.src = './tip-image.png';

    let btn = document.createElement("button");
    let btnTxt = document.createTextNode("Open One-Click Search");
    btn.appendChild(btnTxt);
    btn.addEventListener("click", () => {
      alert("highlight search!");
    });
    interactSection.appendChild(image);
    interactSection.appendChild(btn);
    interactSection.className = 'onboarding-tour-interact-section';
    page.appendChild(interactSection);
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

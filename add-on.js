"use strict";

var addon = {
  id: "addon",
  task: { title: "Add-ons" },
  page: () => {
    let page = document.createElement("div");
    let textSection = document.createElement('section');
    let title = document.createElement("h1");
    title.textContent = "Get more done.";
    let desc = document.createElement("p");
    desc.textContent = `Add-ons are small apps you can add to Firefox that do lots of things -- from managing to-do list, to taking screenshots, to changing the look of your browser.`;
    textSection.appendChild(title);
    textSection.appendChild(desc);
    textSection.className = 'onboarding-tour-text-section';
    page.appendChild(textSection);

    let interactSection = document.createElement('section');
    let image = document.createElement('img');
    image.src = './tip-image.png';
    let btn = document.createElement("button");
    let btnTxt = document.createTextNode("Show Me Add-ons");
    btn.appendChild(btnTxt);
    btn.addEventListener("click", () => {
      alert("highlight add-on!");
    });
    interactSection.appendChild(image);
    interactSection.appendChild(btn);
    interactSection.className = 'onboarding-tour-interact-section';
    page.appendChild(interactSection);
    return page;
  },
  verify: async function() {
    return false;
  },
  setComplete: async function() {
    alert("set addon tour as done");
  },
};

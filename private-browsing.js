"use strict";

var privateBrowsing = {
  id: "private",
  // title, badge, ...
  task: { title: "Private Browsing" },
  // content about this task,
  page: () => {
    let page = document.createElement("div");
    let textSection = document.createElement('section');
    let title = document.createElement("h1");
    title.textContent = "Browser by yourself.";
    let desc = document.createElement("p");
    desc.textContent = `There's no reason to share your onlin life with trackers every time you browse. Want to keep something to yourself? Use Private Browsing with Tracking Protection.`;
    textSection.appendChild(title);
    textSection.appendChild(desc);
    textSection.className = 'onboarding-tour-text-section';
    page.appendChild(textSection);

    let interactSection = document.createElement('section');
    let image = document.createElement('img');
    image.src = './tip-image.png';
    let btn = document.createElement("button");
    let btnTxt = document.createTextNode("Show me Private Browsing");
    btn.appendChild(btnTxt);
    btn.addEventListener("click", () => {
      alert("highlight private browsing!");
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
    alert("set Private Browsing tour as done");
  },
};

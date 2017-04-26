"use strict";

var firefoxSync = {
  id: "sync",
  // title, badge, ...
  task: { title: "Firefox Sync" },
  // content about this task,
  page: () => {
    let page = document.createElement("div");
    let textSection = document.createElement('section');
    let title = document.createElement("h1");
    title.textContent = "Pick up where you left off.";
    let desc = document.createElement("p");
    desc.textContent = `Still sending yourself links to save or read on your phone? Do it the easy way: get Sync and have the things you save here show up on all of your devices.`;
    textSection.appendChild(title);
    textSection.appendChild(desc);
    textSection.className = 'onboarding-tour-text-section';
    page.appendChild(textSection);

    let interactSection = document.createElement('section');
    let syncframe = document.createElement('iframe');
    syncframe.src = 'about:accounts?action=signin';
    interactSection.appendChild(syncframe);
    interactSection.className = 'onboarding-tour-interact-section';
    page.appendChild(interactSection);
    return page;
  },
  // check if this task is done
  verify: async function() {
    return true;
  },
  // set this task as done (call for setAllComplete)
  setComplete: async function() {
    alert("set Firefox Sync tour as done");
  },
};

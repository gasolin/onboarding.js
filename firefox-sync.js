"use strict";

var firefoxSync = {
  id: "sync",
  // title, badge, ...
  task: { title: "Firefox Sync" },
  // content about this task,
  page: () => {
    let page = document.createElement("div");
    let title = document.createElement("h1");
    title.textContent = "Pick up where you left off.";
    let desc = document.createElement("p");
    desc.textContent = `Still sending yourself links to save or read on your phone? Do it the easy way: get Sync and have the things you save here show up on all of your devices.`;
    page.appendChild(title);
    page.appendChild(desc);
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

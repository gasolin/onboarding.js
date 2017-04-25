"use strict";

var privateBrowsing = {
  id: "private",
  // title, badge, ...
  task: { title: "Private Browsing" },
  // content about this task,
  page: () => {
    let page = document.createElement("div");
    let title = document.createElement("h1");
    title.textContent = "Browser by yourself.";
    let desc = document.createElement("p");
    desc.textContent = `There's no reason to share your onlin life with trackers every time you browse. Want to keep something to yourself? Use Private Browsing with Tracking Protection.`;
    page.appendChild(title);
    page.appendChild(desc);
    return page;
  },
  // deal with the page
  pageActoin: function() {},
  // check if this task is done
  verify: async function() {
    return false;
  },
  // set this task as done (call for setAllComplete)
  setComplete: async function() {
  alert("set Private Browsing tour as done");
  },
};

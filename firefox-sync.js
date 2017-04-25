"use strict";

var firefoxSync = {
      id: "task1",
      // title, badge, ...
      task: { title: "Firefox Sync" },
      // content about this task,
      // return documentFragment to append to the content
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
      // deal with the page
      pageActoin: function() {},
      // check if this task is done
      verify: async function() {
        return true;
      },
      // set this task as done (call for setAllComplete)
      setComplete: async function() {
        alert("set task 1 as done");
      },
};

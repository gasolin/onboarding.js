"use strict";

var defaultBrowser = {
  id: "default",
  // title, badge, ...
  task: { title: "Default Browser" },
  // content about this task,
  page: () => {
    let page = document.createElement("div");
    let title = document.createElement("h1");
    title.textContent = "Make Firefox your go-to browser.";
    let desc = document.createElement("p");
    desc.textContent = `It doesn't take much to get the most from Firefox. Just set Firefox as your default browser and put control, customization, and protection on autopilot.`;
    let btn = document.createElement("button");
    let btnTxt = document.createTextNode("Make Firefox your Default Browser");
    btn.appendChild(btnTxt);
    btn.addEventListener("click", () => {
      alert("highlight add-on!");
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
    alert("set Default Browser tour as done");
  },
};

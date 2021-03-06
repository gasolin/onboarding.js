"use strict";

var onBoarding = {
  /**
   * Add any number of tours, following the format
   * {
   *   id: 'taskId',
   *   task: { title: 'task title' },
   *   page: {},
   *   verify: async function() {},
   *   setComplete: async function() {},
   * },
   */
  tours: [],

  init: function(root, tours) {
    this.asyncInit = setTimeout(() => {
      this.tours = tours;
      //console.log('rule', JSON.stringify(rule));
      Promise.all(this.tours.map(tour => tour.verify()))
        .then((...args) => {
          if (!this.isAllComplete(...args)) {
            this.renderOverlay(root, ...args);
          }
      });
    }, 500);
  },

  destroy: function() {
    clearTimeOut(this.asyncInit);
  },

  renderOverlay: function(root, args) {
    alert(`${args.filter(arg => !arg).length} tour(s) left`);
    let fragment = document.createDocumentFragment();

    let launcher = document.createElement("h1");
    launcher.className = "launcher";
    launcher.textContent = "Click me";

    let overlay = document.createElement("div");
    overlay.className = "onboard";
    overlay.hidden = true;
    let closeBtn = document.createElement("button");
    closeBtn.className = "closeBtn";
    closeBtn.addEventListener("click", () => {
      overlay.hidden = true;
    });
    overlay.appendChild(closeBtn);

    launcher.addEventListener("click", () => {
      overlay.hidden = overlay.hidden ? false : true;
    });

    let listSection = document.createElement("section");
    listSection.className = "onboarding-tour-list-section";
    let title = document.createElement("h1");
    title.textContent = "Tips for Making Firefox Yours";
    overlay.appendChild(title);

    let tours = document.createElement("div");
    this.tours.forEach((tour, idx) => {
       //console.log(args[idx]);
       //isComplete = args[idx] ? "v" : "-";
       let li = document.createElement("li");
       let checkbox = document.createElement('input');
       checkbox.type = "checkbox";
       checkbox.id = tour.id
       checkbox.value = idx;
       if (args[idx]) {
         checkbox.checked = true;
       }
       li.addEventListener("click", evt => {
         console.log(JSON.stringify(evt));
       });
       let title = document.createTextNode(tour.task.title);
       li.appendChild(checkbox);
       li.appendChild(title);
       //li.textContent = `${isComplete} rule.task.title`
       tours.appendChild(li);
    });
    listSection.appendChild(tours);
    overlay.appendChild(listSection);

    let content = document.createElement("div");
    content.className = 'onboarding-tour-page-section';
    this.tours.map(tour => {
      let page = tour.page();
      page.id = 'page_' + tour.id;
      content.appendChild(page);
    });
    this._content = content;
    overlay.appendChild(content);

    fragment.appendChild(launcher);
    fragment.appendChild(overlay);
    root.appendChild(fragment);

    tours.addEventListener('click', this.clickTourHandler.bind(this));
    this.switchPage();
  },

  clickTourHandler: function(evt) {
    let target = evt.target;
    while(target != evt.currentTarget && target.tagName !== 'LI') {
      target = target.parentElement;
    }
    if (target == evt.currentTarget) {
      return;
    }
    let inputElem = target.firstElementChild;
    this.switchPage(inputElem.id);
  },

  switchPage(id) {
    id = typeof(id) === 'undefined' ?
      this._content.firstChild && this._content.firstChild.id :
      id = 'page_' + id;

    for(let i = 0; i < this._content.children.length; i++) {
      this._content.children[i].hidden = this._content.children[i].id == id ?
        false : true;
    }
  },

  renderNotification: function() {},

  isAllComplete: function(args) {
    return !args.includes(false);
  },

  setAllComplete: function() {
    this.tours.map(tour => tour.setComplete())
  },
};

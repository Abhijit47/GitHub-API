// create element function
const createElement = (childElName) => {
  return document.createElement(childElName);
};

// Append child to parent element function
const appendChild = (parent, childEl) => {
  return parent.appendChild(childEl);
};

// For create Attribute
const createAttribute = (attrName) => {
  return document.createAttribute(attrName);
};

// create 3 li with anchor tag
const createLi = (count) => {
  for (let i = 1; i <= count; i++) {
    const li = document.createElement("li");
    const liClass = ["nav-item"];
    li.classList.add(...liClass);

    const a = document.createElement("a");
    const aClass = ["nav-link", "text-light"];
    a.classList.add(...aClass);

    if (i === 1) {
      a.innerHTML = "Home";
      a.href = "/";
    } else if (i === 2) {
      a.innerHTML = "About";
      a.href = "#";
    } else {
      a.innerHTML = "Git";
      a.href = "#";
    }

    // hover ? a.classList.toggle("active") : a.classList.toggle("active");
    appendChild(navListItems, li);
    appendChild(li, a);
  }
};

// Target body element
const body = document.querySelector('body');
body.classList.add("bg-light", "bg-opacity-75");

// Create nav element
const navbar = createElement("nav");
const navbarClass = ["navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "shadow", "position-sticky", "top-0", "z-1"];
navbar.classList.add(...navbarClass);
appendChild(body, navbar);

// Create nav container
const navbarContainer = createElement("div");
const navbarContainerClass = ["container-fluid"];
navbarContainer.classList.add(...navbarContainerClass);
appendChild(navbar, navbarContainer);

// Create nav icon
const navIcon = createElement("i");
const navIconClass = ["bi", "bi-github", "fs-4", "text-light", "me-3"];
navIcon.classList.add(...navIconClass);
appendChild(navbarContainer, navIcon);

// Create nav anchor element
const navAnchor = createElement("a");
const navAnchorClass = ["navbar-brand", "text-light", "fw-bold"];
navAnchor.classList.add(...navAnchorClass);
navAnchor.href = "/";
navAnchor.innerHTML = "GitHub";
appendChild(navbarContainer, navAnchor);

// Create Nav button
const navBtn = createElement("button");
const navBtnClass = ["navbar-toggler"];
navBtn.classList.add(...navBtnClass);

/* Add Nav button data-* Attribute */
const navBtnNodeMap = navBtn.attributes;
const navBtnAttr = ["data-bs-toggle", "data-bs-target", "type"];

const toggleAttr = createAttribute(navBtnAttr[0]);
toggleAttr.value = "collapse";
navBtnNodeMap.setNamedItem(toggleAttr);

const targetAttr = createAttribute(navBtnAttr[1]);
targetAttr.value = "#burger";
navBtnNodeMap.setNamedItem(targetAttr);

const typeAttr = createAttribute(navBtnAttr[2]);
typeAttr.value = "button";
navBtnNodeMap.setNamedItem(typeAttr);
appendChild(navbarContainer, navBtn);
/* */

// Create nav-toggler button
const navBtnIcon = createElement("span");
const navBtnIconClass = ["navbar-toggler-icon"];
navBtnIcon.classList.add(...navBtnIconClass);
appendChild(navBtn, navBtnIcon);

// Create nav collapse div
const navbarCollapse = createElement("div");
const navbarCollapseClass = ["collapse", "navbar-collapse"];
navbarCollapse.classList.add(...navbarCollapseClass);
navbarCollapse.setAttribute("id", "burger");
appendChild(navbarContainer, navbarCollapse);

// Create ul element
const navListItems = createElement("ul");
const navListItemsClass = ["navbar-nav", "me-auto", "mb-2", "mb-lg-0", "flex-md-row", "justify-content-md-around", "flex-sm-row", "justify-content-sm-around", "flex-row", "justify-content-around"];
navListItems.classList.add(...navListItemsClass);
appendChild(navbarCollapse, navListItems);

// create 3 li with a element
createLi(3);

// create form element
const navForm = createElement("form");
const navFormClass = ["d-flex", "row", "col", "col-lg-6", "col-md-8"];
navForm.classList.add(...navFormClass);
navForm.setAttribute("action", "#");
navForm.setAttribute("role", "search");
appendChild(navbarCollapse, navForm);

// Create input element
const formInput = createElement("input");
const formInputClass = ["form-control", "me-2", "mb-lg-0", "mb-md-2", "mb-sm-2", "mb-2"];
formInput.classList.add(...formInputClass);
formInput.setAttribute("type", "search");
formInput.placeholder = "Search user";
appendChild(navbarCollapse, formInput);

// Create Search user button
const searchUserBtn = createElement("button");
const searchUserBtnClass = ["btn", "btn-outline-success", "me-2"];
searchUserBtn.classList.add(...searchUserBtnClass);
searchUserBtn.setAttribute("type", "submit");
searchUserBtn.innerHTML = "Search";
searchUserBtn.setAttribute("onclick", "getUser()");
appendChild(navbarCollapse, searchUserBtn);

// Create Repo button
const searchUserRepo = createElement("button");
const searchUserRepoClass = ["btn", "btn-outline-primary"];
searchUserRepo.classList.add(...searchUserRepoClass);
searchUserRepo.setAttribute("type", "submit");
searchUserRepo.setAttribute("onclick", "getRepo()");
searchUserRepo.innerHTML = "Repo";
appendChild(navbarCollapse, searchUserRepo);

// create a main element
const main = createElement("main");
const mailClass = ["container-fluid", "gx-0", "p-2", "mt-2"];
main.classList.add(...mailClass);
main.setAttribute("id", "header");
appendChild(body, main);

/* */
// create Toast popup
const toastMsgContainer = createElement("div");
const toastMsgContainerClass = ["bg-dark-subtle", "position-absolute", "top-0", "z-2", "end-0", "mt-5", "me-2", "toast", "fade"];
toastMsgContainer.classList.add(...toastMsgContainerClass);
toastMsgContainer.role = "alert";
appendChild(body, toastMsgContainer);

// Create a Toast Header
const toastHeader = createElement("div");
const toastHeaderClass = ["toast-header", "bg-primary"];
toastHeader.classList.add(...toastHeaderClass);
appendChild(toastMsgContainer, toastHeader);

// Create a Toast Heading
const toastHeading = createElement("strong");
const toastHeadingClass = ["me-auto"];
toastHeading.classList.add(...toastHeadingClass);
toastHeading.innerHTML = "";
appendChild(toastHeader, toastHeading);

// Create a Toast Text
const toastText = createElement("small");
const toastTextClass = [];
toastText.classList.add(...toastTextClass);
toastText.innerHTML = "11 min ago";

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  toastText.innerHTML = strTime;
}
formatAMPM(new Date);
appendChild(toastHeader, toastText);

// Create a Toast button
const toastBtn = createElement("button");
const toastBtnClass = ["btn-close"];
toastBtn.classList.add(...toastBtnClass);
toastBtn.type = "button";

// Add data-* attribute to this button
const nodeMap = toastBtn.attributes;
const attrName = ['data-bs-dismiss'];
// 1) Toggle node
const toggleNode = createAttribute(attrName[0]);
toggleNode.value = "toast";
nodeMap.setNamedItem(toggleNode);
appendChild(toastHeader, toastBtn);

// Create a Toast body
const toastBody = createElement("div");
const toastBodyClass = ["toast-body"];
toastBody.classList.add(...toastBodyClass);
toastBody.innerHTML = "";
appendChild(toastMsgContainer, toastBody);
/* */

// Create Hero Section
const heroSection = createElement("section");
const heroSectionClass = ["container-fluid", "bg-dark", "p-2", "rounded-1", "shadow", "text-center", "fade", "show"];
heroSection.classList.add(...heroSectionClass);

// Create Hero Text element
const heroText = createElement("h1");
const heroTextClass = ["text-center", "text-light", "display-6"];
heroText.classList.add(...heroTextClass);
heroText.innerHTML = "Search GitHub User";

// Create Hero Icon element
const heroIcon = createElement("i");
const heroIconClass = ["bi", "bi-github", "fs-1", "text-light"];
heroIcon.classList.add(...heroIconClass);

appendChild(main, heroSection);
appendChild(heroSection, heroText);
appendChild(heroSection, heroIcon);

// create a section element
const section = createElement("section");
const sectionClass = ["row", "gx-0", "mt-2", "gap-lg-3", "gap-md-3", "gap-sm-3", "gap-2", "flex-md-wrap", "flex-sm-wrap", "flex-wrap", "justify-content-lg-center", "justify-content-md-center", "justify-content-sm-center", "justify-content-center"];
section.classList.add(...sectionClass);
appendChild(main, section);

const bottomBtn = createElement("a");
const bottomBtnClass = ["fs-1", "text-dark", "pe-2", "position-sticky", "float-end", "fade", "bi", "bi-arrow-up-circle-fill"];
// bottomBtn.innerHTML = "UP";
bottomBtn.href = "#header";
bottomBtn.classList.add(...bottomBtnClass);
appendChild(body, bottomBtn);

// Global Variable to store user input
let userInput;

// Get Github user Data
const getUser = async () => {

  // Initial Point cards section
  section.innerHTML = "";

  // if the input field empty Guard Class
  if (formInput.value.length === 0) {
    toastMsgContainer.classList.toggle('show');
    toastHeading.innerHTML = "Please type one user name";
    toastBody.innerHTML = "Without name you can't get any result";
    return;
  };

  // API URI
  const api = `https://api.github.com/users/${formInput.value}`;

  try {
    const response = await fetch(api);

    if (!response.status === 200) {
      toastMsgContainer.classList.toggle('show');
      toastHeading.innerHTML = "Something wrong...";
      toastBody.innerHTML = "Please Try Again!";
      return;
    }

    const userData = await response.json();

    if (userData.length === 0 || undefined) {
      userProfile.classList.toggle("show");
      toastMsgContainer.classList.toggle('show');
      toastHeading.innerHTML = "There is no user that your query";
      toastBody.innerHTML = "Please search Again!";
      return;
    }

    bottomBtn.classList.remove("show");

    section.innerHTML += `
      <div class="col-lg-6 d-md-flex d-sm-flex justify-content-md-center justify-content-sm-center">
        <div class="card p-2" style="max-width: 540px;">
          <div class="row g-0 align-items-stretch">
            <div class="col-md-4 d-sm-flex justify-content-sm-center">
              <img src=${userData.avatar_url} class="img-fluid rounded " alt="...">
            </div>
          <div class="col-md-8 mt-md-2 mt-sm-2 mt-2">
              <div class="card-body p-0 ps-2">
                <h5 class="card-title">Name: ${userData.name}</h5>
                <p class="card-text mb-0">Login Name: ${userData.login}</p>
                <p class="card-text mb-0">User Type: ${userData.type}</p>
                <p class="card-text mb-0">Public Repository: ${userData.public_repos}</p>
                <p class="card-text mb-0">Public Gists: ${userData.public_gists}</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    navBtn.classList.toggle("collapsed");
    navbarCollapse.classList.toggle("show");
    toastMsgContainer.classList.remove('show');

    // Input field value clear
    userInput = formInput.value;
    formInput.value = "";

  } catch (err) {
    // console.log(err.message);
    toastMsgContainer.classList.toggle('show');
    toastHeading.innerHTML = err.message;
    toastBody.innerHTML = "Something went wrong!";
  }
};

const getRepo = async () => {

  const apiUrl = `https://api.github.com/users/${userInput ? userInput : formInput.value}/repos`;

  // Initial Point
  section.innerHTML = "";

  try {
    const response = await fetch(apiUrl);
    const repoData = await response.json();

    if (repoData.length === 0 || undefined) {
      userProfile.classList.toggle("show");
      toastMsgContainer.classList.toggle('show');
      toastHeading.innerHTML = "There is no user that your query";
      toastBody.innerHTML = "Please search Again!";
      return;
    }

    repoData.forEach((repo, ind) => {
      const { name, description, id, visibility, language, created_at } = repo;
      // if (description === null || language === null) return;
      const date = new Date(created_at).toLocaleString();
      section.innerHTML += `
      <div class="col-lg-5 col-md-5 col-sm-12">
        <div class="card text-bg-light mb-2 shadow" style="max-width: 540px;">
          <div class="card-header bg-secondary fw-semibold">
            <span class="fw-semibold">${ind + 1}.</span> 
            Repo ID: ${id}
          </div>
            <div class="card-body bg-dark-subtle">
              <h5 class="card-title">Name: ${name.slice(0, 30)}...</h5>
              <p class="card-text">Desc: ${description ? description.slice(0, 40) : ""}...</p>
              <p class="card-text">Visibility: ${visibility}</p>
              <p class="card-text">Language: ${language ? language : ""}</p>
              <p class="card-text">Created at: ${date}</p>
            </div>
        </div>
      </div>
      `;

      // Hide some features
      navBtn.classList.add("collapsed");
      navbarCollapse.classList.remove("show");
      bottomBtn.classList.add("show");

      // Hide Toast Message
      toastMsgContainer.classList.remove('show');

      // Input field value clear
      userInput = "";
      formInput.value = "";
    });

  } catch (error) {
    // console.log(error.message);
    toastMsgContainer.classList.toggle('show');
    toastHeading.innerHTML = new Error("Please Provide username");
    toastBody.innerHTML = "Something went wrong!🛑";
  }
};

// const date = new Date("2022-11-03T14:53:00Z");
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());
// console.log(date.toString());
// console.log(date.toTimeString());
// console.log(date.toUTCString());



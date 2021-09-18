var prevActivated = null;
var prevActivatedName = null;

function clickPledge(e, name) {
  var classList = e.classList;
  var classActive = "active";

  if (prevActivated) {
    prevActivated.remove(classActive);
  }

  if (prevActivatedName === name) {
    prevActivatedName = null;
    return;
  } else {
    prevActivatedName = name;
  }

  if (Array.from(e.classList).includes(classActive)) {
    classList.remove(classActive);
  } else {
    classList.add(classActive);
    prevActivated = classList
  }
}

function selectReward() {
  var modal = document.querySelector("div[class*='modal']");
  modal.classList.add("active");
}

function closeModal() {
  var modal = document.querySelector("div[class*='modal']");
  modal.classList.remove("active");
}

function renderDynamicCards() {
const proejctCards = [
  {
    contents: " You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    left: 101,
    pledge: 25,
    title: "Bamboo Stand"
  },
  {
    contents: " You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    left: 64,
    pledge: 75,
    title: "Black Edition Stand"
  },
  {
    contents: " You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    left: 0,
    pledge: 200,
    title: "Mahogany Special Edition"
  }
];

const targetDom = $("div[class='dynamic-cards']");
proejctCards.forEach((d) => {
  targetDom.append(`<div>
    <div class="card">
      <div class="card-top">
        <p class="subtitle">${d.title}</p>
        <a href="#">Pledge $${d.pledge} or more</a>
      </div>
      <p class="card-middle">${d.contents}</p>
      <div class="card-bottom">
        <div>
          <span class="card-bottom__value">${d.left}</span>
          <span class="card-bottom__postfix">left</span>
        </div>
        ${(d.left === 0) ?
          `<div> Out of Stock </div>`
            :
          `<div>
            <button onclick="selectReward()"> Select Reward </button>
          </div>`
        }
      </div>
    </div>
  </div>`);
});
}

$(document).ready(() => {
  renderDynamicCards();
  $("body").keydown(e => {
    if (e.key === "Escape") {
      $("div[class*='modal']").removeClass("active");
    }
  })
});
const signUp = document.getElementById("signUp");
if (signUp) {
  const stepBtns = document.querySelectorAll(".stepBtn");
  const steps = document.querySelectorAll(".infoStep");

  const emailInput = document.getElementById("emailInput");
  const submitBtn = document.getElementById("submitBtn");
  emailInput.onblur = () => {
    if (emailInput.value !== "") {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", true);
    }
  };
  steps.forEach((item) => {
    const radios = item.querySelectorAll("input[type=radio]");
    const currentBtn = item.querySelector("button:disabled");

    radios.forEach((radio) => {
      radio.onchange = () => {
        if (radio.checked) {
          currentBtn.removeAttribute("disabled");
        }
      };
    });
  });
  stepBtns.forEach((stepBtn) => {
    stepBtn.onclick = () => {
      let id = stepBtn.getAttribute("data-step");

      let currentStep = signUp.querySelector(id);
      currentStep.classList.add("active");

      window.scrollTo(0, 0);
      steps.forEach((step) => {
        if (step !== currentStep) {
          if (step.classList.contains("active")) {
            step.classList.remove("active");
          }
        }
      });
    };
  });
}

// showMore start
const providerList = document.getElementById("providerList");
if (providerList) {
  const showMoreBtns = document.querySelectorAll(".showMoreBtn");
  showMoreBtns.forEach((showMoreBtn) => {
    showMoreBtn.onclick = () => {
      const parentElement = showMoreBtn.parentNode;
      const showMore = parentElement.parentElement.querySelector(".showMore");
      showMore.classList.toggle("active");
      showMoreBtn.classList.toggle("active");
    };
  });
}

// showMore end

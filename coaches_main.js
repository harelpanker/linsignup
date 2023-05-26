// 1
// const info_form = document.querySelector("#info_form");
// const sign_form_hidden=document.querySelector('#sign_form_hidden')
const submit_user_info = document.querySelector("#submit_user_info");
const sign_loader = document.querySelector(".sign--loader");
const first_name = document.querySelector("#first_name");
const last_name = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const state = document.querySelector("#state");
const insurance = document.querySelector("#insurance");
const insurance_button = document.querySelector("#insurance_button");
const insurance_wrapper = document.querySelector("#insurance-wrapper");
const have_no_insurance_btn = document.querySelector("#have_no_insurance_btn");

let input_insuranceValue;
const input_insurance_hidden = document.querySelector(
  "#input_insurance_hidden"
);
const searchInsurance = document.getElementById("search_insurance");
const searchInsuranceWrapper = document.getElementById(
  "search_insurance_wrapper"
);

let validate_insurance_field;
const search_state = document.getElementById("search_state");
const search_state_wrapper = document.getElementById("search_state_wrapper");

const success_module = document.querySelector(".module-wrapper.is--1");
const calendly_module = document.querySelector(".module-wrapper.is--2");
const coach_upsell = document.querySelector("#coach_upsell");
const success_button = document.querySelector("#success_button");
const x_icon = document.querySelectorAll(".x--icon");
const insur_wrapper = document.querySelector(".insur_wrapper");
const signup_form_wrapper = document.querySelector(".p--form.is--signup");
const calendly_element = document.querySelector("#calendly_element");
const calendly_element_hunter = document.querySelector(
  "#calendly_element_hunter"
);

const hunter_base = "https://calendly.com/hunter-yates/lin-intake-consultation";
const normal_base = "https://calendly.com/lin-welcome-team/intake-consultation";

document.addEventListener("DOMContentLoaded", () => {
  insurance_wrapper.style.display = "none";
  searchInsuranceWrapper.style.display = "none";
  calendly_element.style.display = "none";
  calendly_element_hunter.style.display = "none";
  insur_wrapper.style.display = "none";
  insurance.setAttribute("onkeyup", "typeSearchInsurance()");
  state.setAttribute("onkeyup", "typeSearchState()");
  submit_user_info.disabled = true;
});

x_icon.forEach((item) =>
  item.addEventListener("click", () => {
    calendly_module.style.display = "none";
  })
);

let texasOptions = [
  ["Blue Cross and Blue Shield of Texas", "BCBS_TX"],
  ["UnitedHealthcare", "UnitedHC"],
  ["Aetna", "Aetna"],
  ["Humana", "Humana"],
  ["Cigna", "Cigna"],
  ["Community Health Choice", "CommunityHealth"],
  ["Medicare", "MedicareTX"],
  ["Superior HealthPlan", "SuperiorHealth"],
  ["WellCare", "MedicareTX"],
  ["Other", "Other"],
  ["I don't have health insurance", "dont_have_texas"]
];
let coloradoOptions = [
  ["Anthem Blue Cross and Blue Shield", "AnthemColorado"],
  ["UnitedHealthcare", "UnitedHC"],
  ["Aetna", "Aetna"],
  ["Humana", "Humana"],
  ["Cigna", "Cigna"],
  ["Kaiser Permanente", "KaiserCO"],
  ["Rocky Mountain Health Plans", "RockyMountain"],
  ["Denver Health Medical Plan", "DenverHealth"],
  ["Friday Health Plans", "FridayHealth"],
  ["Medicare", "MedicareCO"],
  ["Medicaid", "MedicaidCO"],
  ["Other", "Other"],
  ["I don't have health insurance", "dont_have_colorado"]
];
let maineOptions = [
  ["Anthem Blue Cross and Blue Shield", "MaineBlueShield"],
  ["Harvard Pilgrim Health Care ", "HarvardPilgrim"],
  ["Medicare", "MedicareMaine"],
  ["Aetna", "Aetna"],
  ["Cigna", "Cigna"],
  ["Humana", "Humana"],
  ["MaineCare", "MaineCare"],
  ["Community Health Options", "CommunityHealth"],
  ["Martin's Point Health Care", "Martin"],
  ["Other", "Other"],
  ["I don't have health insurance", "dont_have_maine"]
];

const statesOptions = [
  "alabama",
  "alaska",
  "american samoa",
  "arizona",
  "arkansas",
  "california",
  "colorado",
  "connecticut",
  "delaware",
  "district of columbia",
  "federated states of micronesia",
  "florida",
  "georgia",
  "guam",
  "hawaii",
  "idaho",
  "illinois",
  "indiana",
  "iowa",
  "kansas",
  "kentucky",
  "louisiana",
  "maine",
  "marshall islands",
  "maryland",
  "massachusetts",
  "michigan",
  "minnesota",
  "mississippi",
  "missouri",
  "montana",
  "nebraska",
  "nevada",
  "new hampshire",
  "new jersey",
  "new mexico",
  "new york",
  "north carolina",
  "north dakota",
  "northern mariana islands",
  "ohio",
  "oklahoma",
  "oregon",
  "palau",
  "pennsylvania",
  "puerto rico",
  "rhode island",
  "south carolina",
  "south dakota",
  "tennessee",
  "texas",
  "utah",
  "vermont",
  "virgin island",
  "virginia",
  "washington",
  "west virginia",
  "wisconsin",
  "wyoming"
];

// 2
let _gaid = "";

let intervalga = setInterval(() => {
  if (_gaid) {
    clearInterval(intervalga);
    return;
  }
  try {
    if (ga && ga.loaded) {
      _gaid = ga.getAll()[0].get("clientId");
    }
  } catch (err) {}
}, 100);

coach_upsell.addEventListener("click", () => {
  calendly_module.style.display = "flex";
  gtag("event", "click_cta_coaching_page");
});
success_button.addEventListener("click", () => {
  gtag("event", "click_continue_to_app");
});

// 3
let isValidPhone = false;
let phoneInput = document.querySelector("#phone"),
  dialCode = document.querySelector("#dialCode"),
  errorMsg = document.querySelector("#error-msg"),
  validMsg = document.querySelector("#valid-msg"),
  totalPhoneValue = "";

const iti = intlTelInput(phoneInput, {
  initialCountry: "us",
  separateDialCode: true,
  placeholderNumberType: "FIXED_LINE"
});

const updateInputValue = () => {
  dialCode.value = "+" + iti.getSelectedCountryData().dialCode;
};
phoneInput.addEventListener("phoneInput", updateInputValue, false);
phoneInput.addEventListener("countrychange", updateInputValue, false);

const errorMap = [
  "Invalid number",
  "Invalid country code",
  "Not enough numbers",
  "Error, too many digits",
  "Invalid number"
];

const reset = () => {
  phoneInput.classList.remove("error");
  errorMsg.innerHTML = "Please enter a valid phone number";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
};

phoneInput.addEventListener("blur", () => {
  reset();
  let errorCode = iti.getValidationError();
  if (
    phoneInput.value.trim() &&
    phoneInput.value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
  ) {
    if (iti.isValidNumber()) {
      validMsg.classList.remove("hide");
      errorMsg.classList.add("hide");
      isValidPhone = true;
    } else {
      phoneInput.classList.add("error");
      errorCode = iti.getValidationError();
      errorMsg.innerHTML =
        errorCode === -99
          ? "Please enter a valid phone number"
          : errorMap[errorCode];
      errorMsg.classList.remove("hide");
      validMsg.classList.add("hide");
    }
  } else {
    phoneInput.classList.add("error");
    errorCode = iti.getValidationError();
    errorMsg.innerHTML =
      errorCode === -99
        ? "Please enter a valid phone number"
        : errorMap[errorCode];
    errorMsg.classList.remove("hide");
    validMsg.classList.add("hide");
  }
  totalPhoneValue = iti.getSelectedCountryData().dialCode + phoneInput.value;
});

phoneInput.addEventListener("change", reset);
phoneInput.addEventListener("keyup", reset);

// 4
let insurance_options;
function filterInsurance(state) {
  if (state === "colorado") {
    insurance_options = coloradoOptions;
  } else if (state === "texas") {
    insurance_options = texasOptions;
  } else {
    insurance_options = maineOptions;
  }

  let child = searchInsurance.lastElementChild;
  while (child) {
    searchInsurance.removeChild(child);
    child = searchInsurance.lastElementChild;
  }

  for (i = 0; i < insurance_options.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `<a data-value='${insurance_options[i][1]}' href="#" class="list-providers">${insurance_options[i][0]}</a>`;
    searchInsurance.appendChild(li);
  }
}

function typeSearchInsurance() {
  searchInsuranceWrapper.style.display = "block";
  if (insurance.value === "") {
    searchInsuranceWrapper.style.display = "none";
  }
  let filter, ul, li, a, i, txtValue;
  filter = insurance.value.toUpperCase();
  ul = searchInsurance;
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

document.addEventListener("click", function (event) {
  if (!event.target.matches(".list-providers")) return;
  event.preventDefault();
  insurance.value = event.target.innerHTML;
  input_insurance_hidden.value = event.target.getAttribute("data-value");
});

function checkProviderFocus(e) {
  let activeTextarea = document.activeElement.id;
  if (activeTextarea !== "autoInput") {
    searchInsuranceWrapper.style.display = "none";
  } else {
    searchInsuranceWrapper.style.display = "block";
  }
}
document.addEventListener("mouseup", checkProviderFocus, false);

insurance.addEventListener("click", () => {
  searchInsuranceWrapper.style.display = "block";
});
//

search_state_wrapper.style.display = "none";

function searchTerms() {
  for (index = 0; index < statesOptions.length; index++) {
    let li = document.createElement("li");
    li.innerHTML = `<a href="#" class="list-term">${statesOptions[index]}</a>`;
    search_state.appendChild(li);
  }
  let list, i, switching, b, shouldSwitch;
  list = document.getElementById("search_state");
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}
searchTerms();

function typeSearchState() {
  search_state_wrapper.style.display = "block";
  if (state.value === "") {
    search_state_wrapper.style.display = "none";
  }
  let filter, ul, li, a, i, txtValue;
  filter = state.value.toUpperCase();
  ul = search_state;
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

const selectionOfTerm = (event) => {
  if (!event.target.matches(".list-term")) return;
  event.preventDefault();
  state.value = event.target.innerHTML;
  search_state_wrapper.style.display = "none";

  if (
    state.value.toLowerCase() === "maine" ||
    state.value.toLowerCase() === "texas" ||
    state.value.toLowerCase() === "colorado"
  ) {
    validate_insurance_field = true;
    filterInsurance(state.value.toLowerCase());
    insurance.value = "";
    insurance.focus();
  } else {
    insurance_wrapper.style.display = "none";
    validate_insurance_field = false;
    insurance.value = "";
  }
};

// detects selection of a search term.
document.addEventListener("click", (event) => {
  selectionOfTerm(event);
});

function checkFocus(e) {
  var activeTextarea = document.activeElement.id;

  if (activeTextarea !== "autoInput") {
    search_state_wrapper.style.display = "none";
  } else {
    search_state_wrapper.style.display = "block";
  }
}
document.addEventListener("mouseup", checkFocus, false);

state.addEventListener("click", () => {
  search_state_wrapper.style.display = "block";
});
document.querySelectorAll(".list-term").forEach((li) => {
  li.addEventListener("click", () => {
    search_state_wrapper.style.display = "none";
  });
});

const checkIfStateInputIncludesStateArrayItem = () => {
  if (statesOptions.includes(state.value.toLowerCase())) {
    search_state_wrapper.style.display = "none";
    insurance_wrapper.style.display = "none";
    state.blur();
    Array.from(document.querySelectorAll("a.list-term"))
      .find((el) => el.textContent === state.value.toLowerCase())
      .click();
    if (
      state.value.toLowerCase() === "maine" ||
      state.value.toLowerCase() === "texas" ||
      state.value.toLowerCase() === "colorado"
    ) {
      Array.from(document.querySelectorAll("a.list-term"))
        .find((el) => el.textContent === state.value.toLowerCase())
        .click();
    }
  }

  if (state !== "maine" || state !== "colorado" || state !== "texas") {
    input_insurance_hidden.value = "";
    insurance.value = "";
  }
};

state.addEventListener("keyup", () => {
  checkIfStateInputIncludesStateArrayItem();
});
//

let isEmailValid = false;
const validateEmail = () => {
  if (
    !email.value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    isEmailValid = false;
  } else {
    isEmailValid = true;
  }
};

const validateSubmit = () => {
  if (
    first_name.value !== "" &&
    last_name.value !== "" &&
    isEmailValid &&
    isValidPhone &&
    statesOptions.includes(state.value.toLowerCase())
  ) {
    submit_user_info.disabled = false;
    submit_user_info.style.opacity = 1;
  } else {
    submit_user_info.disabled = true;
    submit_user_info.style.opacity = 0.6;
  }
};

first_name.addEventListener("keypress", validateSubmit);
first_name.addEventListener("blur", validateSubmit);
last_name.addEventListener("keypress", validateSubmit);
last_name.addEventListener("blur", validateSubmit);

email.addEventListener("keypress", () => {
  validateSubmit();
  validateEmail();
});
email.addEventListener("input", () => {
  validateSubmit();
  validateEmail();
});
email.addEventListener("blur", () => {
  validateSubmit();
  validateEmail();
});

phone.addEventListener("blur", validateSubmit);
phone.addEventListener("keypress", validateSubmit);
state.addEventListener("blur", validateSubmit);
document.addEventListener("click", function (event) {
  if (!event.target.matches(".list-term")) return;
  event.preventDefault();
  validateSubmit();
});
document.addEventListener("click", function (event) {
  if (!event.target.matches(".list-providers")) return;
  event.preventDefault();
  validateSubmit();
});

const checkState = () => {
  if (
    state.value.toLowerCase() === "maine" ||
    state.value.toLowerCase() === "colorado" ||
    state.value.toLowerCase() === "texas"
  ) {
    insur_wrapper.style.display = "block";
  } else {
    calendly_element.style.display = "block";
  }
  signup_form_wrapper.style.display = "none";
};

//
const validateInsuranceInput = () => {
  if (
    coloradoOptions
      .map((opt) => opt[0].toLowerCase())
      .includes(insurance.value.toLowerCase()) ||
    texasOptions
      .map((opt) => opt[0].toLowerCase())
      .includes(insurance.value.toLowerCase()) ||
    maineOptions
      .map((opt) => opt[0].toLowerCase())
      .includes(insurance.value.toLowerCase())
  ) {
    insurance_button.disabled = false;
    insurance_button.style.opacity = 1;
  } else {
    insurance_button.disabled = true;
    insurance_button.style.opacity = 0.6;
  }
};
document.addEventListener("click", function (event) {
  if (!event.target.matches(".list-providers")) return;
  event.preventDefault();
  validateInsuranceInput();
});

insurance_button.addEventListener("click", () => {
  // update if needed the calendly base
  const insuranceHiddenValue = input_insurance_hidden.value;
  if (
    insuranceHiddenValue === "BCBS_TX" ||
    insuranceHiddenValue === "UnitedHC" ||
    insuranceHiddenValue === "Aetna" ||
    insuranceHiddenValue === "AnthemColorado" ||
    insuranceHiddenValue === "MaineBlueShield" ||
    insuranceHiddenValue === "HarvardPilgrim"
  ) {
    calendly_element_hunter.style.display = "block";
    calendly_element.style.display = "none";
  } else {
    calendly_element_hunter.style.display = "none";
    calendly_element.style.display = "block";
  }
  formSubmition();
  insurance_wrapper.style.display = "none";
});

const createCalendly = (url, name, email, phone) => {
  Calendly.initInlineWidget({
    url: url,
    parentElement: document.getElementById("calendly_element"),
    prefill: {
      name: name,
      email: email,
      phone_number: phone,
      customAnswers: {
        a2: phone
      }
    },
    utm: {}
  });
};
const createCalendlyHunter = (url, name, email, phone) => {
  // https://help.calendly.com/hc/en-us/articles/223147027-Embed-options-overview?tab=advanced#6
  Calendly.initInlineWidget({
    url: url,
    parentElement: document.getElementById("calendly_element_hunter"),
    prefill: {
      name: name,
      email: email,
      phone_number: phone,
      customAnswers: {
        a2: phone
      }
    },
    utm: {}
  });
};

// form submition
let paymentUrl = "";
const urlParams = new URLSearchParams(window.location.search);
const btn_src = urlParams.get("btn_src") || "";
const ref = urlParams.get("ref") || "";
const utm_source = urlParams.get("utm_source") || "";
const utm_medium = urlParams.get("utm_medium") || "";
const utm_campaign = urlParams.get("utm_campaign") || "";
const internal_ref = urlParams.get("internal_ref") || "";
const keyword = urlParams.get("keyword") || "";
const adgroup = urlParams.get("adgroup") || "";
const internal_url = urlParams.get("internal_url") || "";
const flow = urlParams.get("flow") || "100s19_*kit33|po:p28";
const partnerCode = urlParams.get("p") || undefined;
const affiliate_code = urlParams.get("c") || undefined;
const gclid = urlParams.get("gclid") || "";

const formSubmition = () => {
  const data = {
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    flow: "",
    btn_src: "",
    ref: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    internal_ref: "",
    keyword: "",
    adgroup: "",
    internal_url: "",
    gaid: "",
    timezone: "",
    payerDetails: "",
    partnerCode,
    affiliate_code
  };

  data.firstName = first_name.value.trim().replaceAll("  ", " ");
  data.lastName = last_name.value.trim().replaceAll("  ", " ");
  data.name = (data.firstName + " " + data.lastName)
    .trim()
    .replaceAll("  ", " ");
  data.email = email.value;
  data.state = state.value;
  data.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  data.phone = phone.value.replace(/[^\d\+]+/g, "");
  data.phone = `${
    document.querySelector(".iti__selected-dial-code").innerHTML
  }${phone.value.replace(/\D/g, "")}`;
  data.internalRef = encodeURIComponent(document.referrer || "");
  data.internalUrl = encodeURIComponent(window.location.href || "");
  data.payerDetails = input_insurance_hidden.value || "";
  data.gaid = _gaid;

  data.btn_src = btn_src;
  data.ref = ref;
  data.utm_source = utm_source;
  data.utm_medium = utm_medium;
  data.utm_campaign = utm_campaign;
  data.internal_ref = internal_ref;
  data.keyword = keyword;
  data.adgroup = adgroup;
  data.internal_url = internal_url;
  data.flow = flow;
  data.gclid = gclid;

  console.log(data);

  sign_loader.style.display = "flex";
  try {
    fetch("https://webhooks.lin.health/website-signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.status === "user exists") {
          success_button.setAttribute("href", `https://app.lin.health/`);
        } else {
          paymentUrl = responseData.redirectUrl;
        }
        sign_loader.style.display = "none";
      })
      .catch((err) => {
        console.log("error 1:", err);
        success_button.setAttribute("href", `https://app.lin.health/`);

        sign_loader.style.display = "none";
      });
  } catch (err) {
    // error
    success_button.setAttribute("href", `https://app.lin.health/`);
    console.log("error 2:", err);

    sign_loader.style.display = "none";
  }
};

function isCalendlyEvent(e) {
  return (
    e.origin === "https://calendly.com" &&
    e.data.event &&
    e.data.event.indexOf("calendly.") === 0
  );
}

window.addEventListener("message", function (e) {
  if (isCalendlyEvent(e)) {
    // Event name: calendly.event_type_viewed
    // Event name: calendly.date_and_time_selected
    // Event name: calendly.event_scheduled
    if (e.data.event === "calendly.event_scheduled") {
      calendly_module.style.display = "none";
      success_module.style.display = "flex";
      gtag("event", "schedule_consultation");
    }
  }
});

have_no_insurance_btn.addEventListener("click", () => {
  input_insurance_hidden.value = "dont_have_insurance";
  insurance_button.disabled = false;
  insurance_button.style.opacity = 1;
  insurance_button.click();
});

let executed2 = false;
submit_user_info.addEventListener("click", (event) => {
  event.preventDefault();
  if (!executed2) {
    if (
      state.value.toLowerCase() !== "colorado" &&
      state.value.toLowerCase() !== "texas" &&
      state.value.toLowerCase() !== "maine"
    ) {
      formSubmition();
    }
    checkState();
    createCalendly(
      `${normal_base}?utm_medium=intake&phone_number=${phone.value}`,
      `${first_name.value} ${last_name.value}`,
      email.value,
      `${
        document.querySelector(".iti__selected-dial-code").innerHTML
      }${phone.value.replace(/\D/g, "")}`
    );
    createCalendlyHunter(
      `${hunter_base}?utm_medium=intake&phone_number=${phone.value}`,
      `${first_name.value} ${last_name.value}`,
      email.value,
      `${
        document.querySelector(".iti__selected-dial-code").innerHTML
      }${phone.value.replace(/\D/g, "")}`
    );
  } else {
    executed2 = true;
  }
});

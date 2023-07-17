// console.log("Start");
const signup_form = document.querySelector("#signup_form");
const signup_progress_inner = document.querySelector(".progress--line-inner");
const loader = document.querySelector(".sign--loader");
const loader_calendly = document.querySelector(".loader_calendly");
const module = document.querySelector(".ab--module-wrapper.is--4");
const moduleX = document.querySelector(".module-x");
const moduleBG = document.querySelector(".ab--module-bg");
const time = document.querySelector('[cc-data="time"]');

const back_q2 = document.querySelector(".back-btn.is__q2");
const back_fyi = document.querySelector(".back-btn.is__fyi");
const back_form = document.querySelector(".back-btn.is__form");
const back_all_set = document.querySelector(".back-btn.is__all_set");
const back_first = document.querySelector(".back-btn.is__first");

const tab_q1 = document.querySelector('a[data-w-tab="q1"]');
const tab_q2 = document.querySelector('a[data-w-tab="q2"]');
const tab_fyi = document.querySelector('a[data-w-tab="fyi"]');
const tab_data = document.querySelector('a[data-w-tab="data"]');
const tab_schedule = document.querySelector('a[data-w-tab="schedule"]');
const tab_all_set = document.querySelector('a[data-w-tab="all_set"]');

const next_q1 = document.querySelector('[data-name="next_q1"]');
const next_q2 = document.querySelector('[data-name="next_q2"]');
const next_fyi = document.querySelector('[data-name="next_fyi"]');
const next_submit = document.querySelector('[data-name="submit"]');
const next_schedule = document.querySelector('[data-name="next_schedule"]');
const next_to_app = document.querySelector('[data-name="next_to_app"]');

moduleX.addEventListener("click", () => (module.style.display = "none"));
moduleBG.addEventListener("click", () => (module.style.display = "none"));

document.addEventListener("DOMContentLoaded", () => {
  back_first.style.display = "none";
});

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
  ["Harvard Pilgrim Health Care", "HarvardPilgrim"],
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
let floridaOptions = [
  ["Aetna", "Aetna"],
  ["Cigna", "Cigna"],
  ["Humana", "Humana"],
  ["Florida Blue", "FloridaBlueShield"],
  ["Medicare", "MedicareFlorida"],
  ["Molina Healthcare", "MolinaHealthcareOfFlorida"],
  ["Oscar Health", "OscarHealth"],
  ["Sunshine Health", "SunshineHealth"],
  ["UnitedHealthcare", "UnitedHC"],
  ["Other", "Other"],
  ["I don't have health insurance", "dont_have_florida"]
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

back_first.style.display = "none";
back_first.addEventListener("click", () => {
  window.history.back();
});

document.addEventListener("DOMContentLoaded", () => {
  time.innerText = "2 min";

  if (window.history.length > 1) {
    back_first.style.display = "flex";
  } else {
    back_first.style.display = "none";
  }
});

// question 1 radio
let q1_result = "";
const q1_checkboxes = document.querySelectorAll('[data-name="how_long"]');
const q1_labels = document.querySelectorAll(
  ".sign--check-lable.is--2.is--how-long"
);

const moveToFyi = () => {
  back_fyi.style.display = "flex";
  tab_fyi.click();
  gtag("event", "signup_flow_fyi");
};

const moveToQ2 = () => {
  back_q2.style.display = "flex";
  tab_q2.click();
  signup_progress_inner.style.transform = `translateX(calc(-100% + 20%))`;

  gtag("event", "signup_flow_q1");
};

const getCheckedValuesQ1 = () => {
  return Array.from(q1_checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value)
    .join(", ");
};

q1_checkboxes.forEach((item) => {
  item.addEventListener("change", () => {
    if (Array.prototype.slice.call(q1_checkboxes).some((x) => x.checked)) {
      next_q1.disabled = false;
      next_q1.classList.add("active");
    }
    q1_result = getCheckedValuesQ1();
  });
});

q1_labels.forEach((item) => {
  item.addEventListener("click", () => {
    q1_labels.forEach((item) => item.classList.remove("bg--purple"));
    item.classList.add("bg--purple");
    setTimeout(() => {
      if (item.innerText.toLowerCase() === "1-6 months") {
        moveToFyi();
      } else {
        moveToQ2();
      }
    }, 400);
  });
});

next_q1.addEventListener("click", () => {
  if (q1_result.toLowerCase() === "1-6 months") {
    moveToFyi();
  } else {
    moveToQ2();
  }
});

// fyi
back_fyi.addEventListener("click", () => {
  back_fyi.style.display = "none";
  tab_q1.click();
});
next_fyi.addEventListener("click", () => {
  back_q2.style.display = "flex";
  back_fyi.style.display = "none";
  tab_q2.click();
});

// question 2 checkbox
let q2_result = "";
const q2_checkboxes = document.querySelectorAll(
  '[data-name="which_of_these_treatments_have_you_tried"]'
);
const q2_labels = document.querySelectorAll(".sign--check-lable.is--1");

const moveToForm = () => {
  back_q2.style.display = "none";
  back_form.style.display = "flex";
  tab_data.click();
  signup_progress_inner.style.transform = `translateX(calc(-100% + 60%))`;

  gtag("event", "signup_flow_q2");

  setTimeout(() => {
    document.querySelector('[name="first_name"]').focus();
  }, 400);
};

const backToQ1 = () => {
  back_q2.style.display = "none";
  tab_q1.click();
  signup_progress_inner.style.transform = `translateX(calc(-100% + 20%))`;
};

next_q2.addEventListener("click", moveToForm);
back_q2.addEventListener("click", backToQ1);
// ----------
q2_checkboxes.forEach((item) => {
  item.addEventListener("change", () => {
    if (Array.prototype.slice.call(q2_checkboxes).some((x) => x.checked)) {
      next_q2.disabled = false;
      next_q2.classList.add("active");
    } else {
      next_q2.disabled = true;
      next_q2.classList.remove("active");
    }
    q2_result = getCheckedValuesQ2();
  });
});
q2_labels.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("bg--purple");
  });
});

const getCheckedValuesQ2 = () => {
  return Array.from(q2_checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value)
    .join(", ");
};

// step form
const backToQ2 = () => {
  back_q2.style.display = "flex";
  back_form.style.display = "none";
  tab_q2.click();
  signup_progress_inner.style.transform = `translateX(calc(-100% + 20%))`;
};
back_form.addEventListener("click", backToQ2);

const input_first = document.querySelector('[data-name="first_name"]');
const input_last = document.querySelector('[data-name="last_name"]');
const input_phone = document.querySelector('[data-name="phone"]');
const input_email = document.querySelector('[data-name="email"]');

// let input_insuranceValue;
const input_insurance = document.querySelector('[data-name="insurance"]');
const input_insurance_hidden = document.querySelector(
  "#input_insurance_hidden"
);
const searchInsurance = document.getElementById("search_insurance");
const searchInsuranceWrapper = document.getElementById(
  "search_insurance_wrapper"
);

// let validate_insurance_field;
const input_state = document.querySelector('[data-name="state"]');
const search_state = document.getElementById("search_state");
const search_state_wrapper = document.getElementById("search_state_wrapper");

const error_first = document.querySelector(".c-error-message.is--first");
const error_last = document.querySelector(".c-error-message.is--family");
const error_email = document.querySelector(".c-error-message.is--email");
const error_state = document.querySelector(".c-error-message.is--state");
const error_insurance = document.querySelector(".c-error-message.is--provider");

const insurance_wrapper = document.querySelector("#insurance-wrapper");
// let phoneValue;

const disabledSubmitButton = () => {
  next_submit.disabled = true;
  next_submit.classList.remove("active");
};
const activeSubmitButton = () => {
  next_submit.disabled = false;
  next_submit.classList.add("active");
};

let isEmailValidate = false;
const validateEmail = () => {
  if (
    !input_email.value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    error_email.style.display = "block";
    isEmailValidate = false;
  } else {
    error_email.style.display = "none";
    isEmailValidate = true;
  }
};
const validateFirst = () => {
  if (input_first.value === "") {
    error_first.style.display = "block";
  } else {
    error_first.style.display = "none";
  }
};
const validateLast = () => {
  if (input_last.value === "") {
    error_last.style.display = "block";
  } else {
    error_last.style.display = "none";
  }
};
const validateState = () => {
  if (
    input_state.value === "maine" ||
    input_state.value === "colorado" ||
    input_state.value === "florida" ||
    input_state.value === "texas"
  ) {
    insurance_wrapper.style.display = "block";
  } else {
    insurance_wrapper.style.display = "none";
  }
};
input_first.addEventListener("keypress", validateFirst);
input_last.addEventListener("keypress", validateLast);
input_email.addEventListener("keypress", validateEmail);
input_first.addEventListener("blur", validateFirst);
input_last.addEventListener("blur", validateLast);
input_email.addEventListener("blur", validateEmail);
input_state.addEventListener("keypress", validateState);
input_state.addEventListener("blur", validateState);

document.addEventListener("DOMContentLoaded", () => {
  insurance_wrapper.style.display = "none";
});

input_insurance.setAttribute("onkeyup", "typeSearchInsurance()");
searchInsuranceWrapper.style.display = "none";

let insurance_options;
function filterInsurance(state) {
  if (state === "colorado") {
    insurance_options = coloradoOptions;
  } else if (state === "texas") {
    insurance_options = texasOptions;
  } else if (state === "maine") {
    insurance_options = maineOptions;
  } else if (state === "florida") {
    insurance_options = floridaOptions;
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

// step for insurance
function typeSearchInsurance() {
  searchInsuranceWrapper.style.display = "block";
  if (input_insurance.value === "") {
    searchInsuranceWrapper.style.display = "none";
  }
  let filter, ul, li, a, i, txtValue;
  filter = input_insurance.value.toUpperCase();
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

// detects selection of a search term.
document.addEventListener("click", function (event) {
  if (!event.target.matches(".list-providers")) return;
  event.preventDefault();
  input_insurance.value = event.target.innerHTML;
  input_insurance_hidden.value = event.target.getAttribute("data-value");
});

function checkProviderFocus(e) {
  var activeTextarea = document.activeElement.id;
  if (activeTextarea !== "autoInput") {
    searchInsuranceWrapper.style.display = "none";
  } else {
    searchInsuranceWrapper.style.display = "block";
  }
}
document.addEventListener("mouseup", checkProviderFocus, false);

input_insurance.addEventListener("click", () => {
  searchInsuranceWrapper.style.display = "block";
});

// step form state
input_state.setAttribute("onkeyup", "typeSearchState()");
search_state_wrapper.style.display = "none";

function searchTerms() {
  for (i = 0; i < statesOptions.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = `<a href="#" class="list-term">${statesOptions[i]}</a>`;
    search_state.appendChild(li);
  }
  var list, i, switching, b, shouldSwitch;
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

function typeSearchState() {
  search_state_wrapper.style.display = "block";
  if (input_state.value === "") {
    search_state_wrapper.style.display = "none";
  }
  let filter, ul, li, a, i, txtValue;
  filter = input_state.value.toUpperCase();
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
searchTerms();

// harel change
const validateStateInput = () => {
  if (
    input_state.value.toLowerCase() === "maine" ||
    input_state.value.toLowerCase() === "texas" ||
    input_state.value.toLowerCase() === "colorado" ||
    input_state.value.toLowerCase() === "florida"
  ) {
    return true;
  }
};

const selectionOfTerm = (event) => {
  if (!event.target.matches(".list-term")) return;
  event.preventDefault();
  input_state.value = event.target.innerHTML;
  search_state_wrapper.style.display = "none";

  if (validateStateInput()) {
    insurance_wrapper.style.display = "block";
    // validate_insurance_field = true;
    filterInsurance(input_state.value.toLowerCase());
    input_insurance.value = "";
    input_insurance.focus();
  } else {
    insurance_wrapper.style.display = "none";
    // validate_insurance_field = false;
    input_insurance.value = "";
  }
};

// detects selection of a search term.
document.addEventListener("click", (event) => {
  selectionOfTerm(event);
});

const showProvider = () => {
  if (validateStateInput()) {
    insurance_wrapper.style.display = "block";
  } else {
    insurance_wrapper.style.display = "none";
  }
};

function checkFocus(e) {
  var activeTextarea = document.activeElement.id;

  if (activeTextarea !== "autoInput") {
    search_state_wrapper.style.display = "none";
  } else {
    search_state_wrapper.style.display = "block";
  }

  showProvider();
}
document.addEventListener("mouseup", checkFocus, false);

input_state.addEventListener("click", () => {
  search_state_wrapper.style.display = "block";
});
document.querySelectorAll(".list-term").forEach((li) => {
  li.addEventListener("click", () => {
    search_state_wrapper.style.display = "none";
  });
});

const checkIfStateInputIncludesStateArrayItem = () => {
  if (statesOptions.includes(input_state.value.toLowerCase())) {
    search_state_wrapper.style.display = "none";
    insurance_wrapper.style.display = "none";
    input_state.blur();
    Array.from(document.querySelectorAll("a.list-term"))
      .find((el) => el.textContent === input_state.value.toLowerCase())
      .click();
    if (validateStateInput()) {
      Array.from(document.querySelectorAll("a.list-term"))
        .find((el) => el.textContent === input_state.value.toLowerCase())
        .click();
      insurance_wrapper.style.display = "block";
      input_insurance.focus();
    }
  }
};

input_state.addEventListener("keyup", (event) => {
  checkIfStateInputIncludesStateArrayItem();
});

// step form - phone
let inputPhone = document.querySelector('[data-name="phone"]'),
  dialCode = document.querySelector(".dialCode"),
  errorMsg = document.querySelector("#error-msg"),
  validMsg = document.querySelector("#valid-msg"),
  isValidPhone = false;

let iti = intlTelInput(inputPhone, {
  initialCountry: "us",
  separateDialCode: true,
  placeholderNumberType: "FIXED_LINE"
});

var updateInputValue = function (event) {
  dialCode.value = "+" + iti.getSelectedCountryData().dialCode;
};
inputPhone.addEventListener("phoneInput", updateInputValue, false);
inputPhone.addEventListener("countrychange", updateInputValue, false);

var errorMap = [
  "Invalid number",
  "Invalid country code",
  "Not enough numbers",
  "Error, too many digits",
  "Invalid number"
];

var reset = function () {
  inputPhone.classList.remove("error");
  errorMsg.innerHTML = "Please enter a valid phone number";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
  isValidPhone = false;
};

input_phone.addEventListener("blur", () => {
  reset();
  if (
    inputPhone.value.trim() &&
    inputPhone.value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
  ) {
    if (iti.isValidNumber()) {
      validMsg.classList.remove("hide");
      isValidPhone = true;
    } else {
      input_phone.classList.add("error");
      var errorCode = iti.getValidationError();
      errorMsg.innerHTML =
        errorCode === -99
          ? "Please enter a valid phone number"
          : errorMap[errorCode];
      errorMsg.classList.remove("hide");
      isValidPhone = false;
    }
  } else {
    inputPhone.classList.add("error");
    var errorCode = iti.getValidationError();
    errorMsg.innerHTML =
      errorCode === -99
        ? "Please enter a valid phone number"
        : errorMap[errorCode];
    errorMsg.classList.remove("hide");
    isValidPhone = false;
  }
  phoneValue = iti.getSelectedCountryData().dialCode + inputPhone.value;
});

input_phone.addEventListener("change", reset);
input_phone.addEventListener("keyup", reset);

// step form validation
const validateSubmit = () => {
  if (validateStateInput()) {
    if (
      input_first.value !== "" &&
      input_last.value !== "" &&
      isEmailValidate &&
      isValidPhone &&
      statesOptions.includes(input_state.value.toLowerCase()) &&
      (coloradoOptions
        .map((opt) => opt[0].toLowerCase())
        .includes(input_insurance.value.toLowerCase()) ||
        texasOptions
          .map((opt) => opt[0].toLowerCase())
          .includes(input_insurance.value.toLowerCase()) ||
        maineOptions
          .map((opt) => opt[0].toLowerCase())
          .includes(input_insurance.value.toLowerCase()) ||
        floridaOptions
          .map((opt) => opt[0].toLowerCase())
          .includes(input_insurance.value.toLowerCase()))
    ) {
      next_submit.disabled = false;
      next_submit.classList.add("active");
    } else {
      next_submit.disabled = true;
      next_submit.classList.remove("active");
    }
  } else {
    if (
      input_first.value !== "" &&
      input_last.value !== "" &&
      isEmailValidate &&
      isValidPhone &&
      statesOptions.includes(input_state.value.toLowerCase())
    ) {
      next_submit.disabled = false;
      next_submit.classList.add("active");
    } else {
      next_submit.disabled = true;
      next_submit.classList.remove("active");
    }
  }
};

input_first.addEventListener("keypress", validateSubmit);
input_first.addEventListener("blur", validateSubmit);
input_last.addEventListener("keypress", validateSubmit);
input_last.addEventListener("blur", validateSubmit);
input_phone.addEventListener("keypress", validateSubmit);
input_phone.addEventListener("blur", validateSubmit);
input_email.addEventListener("keypress", validateSubmit);
input_email.addEventListener("blur", validateSubmit);
input_state.addEventListener("keypress", validateSubmit);
input_state.addEventListener("blur", validateSubmit);
input_insurance.addEventListener("keypress", validateSubmit);
input_insurance.addEventListener("blur", validateSubmit);
document.addEventListener("click", (event) => {
  if (!event.target.matches(".list-term")) return;
  event.preventDefault();
  validateSubmit();
});
document.addEventListener("click", (event) => {
  if (!event.target.matches(".list-providers")) return;
  event.preventDefault();
  validateSubmit();
});

// gaid
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
//  ------------
// step sceduale
const moveToAllSet = () => {
  back_all_set.style.display = "flex";
  tab_all_set.click();
  signup_progress_inner.style.transform = `translateX(calc(-100% + 100%))`;
  gtag("event", "signup_flow_schedule_btn");
};

next_schedule.addEventListener("click", () => {
  module.style.display = "flex";
  moveToAllSet();
});

// step all set
const backToSchedule = () => {
  back_all_set.style.display = "none";
  tab_schedule.click();
  signup_progress_inner.style.transform = `translateX(calc(-100% + 100%))`;
};

back_all_set.addEventListener("click", backToSchedule);

// submit
let paymentUrl = "";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const btn_src = urlParams.get("btn_src") || "";
const mt = urlParams.get("mt") || "";
const ref = urlParams.get("ref") || "";
const utm_source = urlParams.get("utm_source") || "";
const utm_medium = urlParams.get("utm_medium") || "";
const utm_content = urlParams.get("utm_content") || "";
const utm_campaign = urlParams.get("utm_campaign") || "";
const internal_ref = urlParams.get("internal_ref") || "";
const keyword = urlParams.get("keyword") || "";
const adgroup = urlParams.get("adgroup") || "";
const internal_url = urlParams.get("internal_url") || "";
const lp_value = urlParams.get("lp") || "";
const flow = urlParams.get("flow") || `${lp_value}s26_*kit33|po:p28`;
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
    utm_content: "",
    utm_campaign: "",
    internal_ref: "",
    keyword: "",
    adgroup: "",
    internal_url: "",
    gaid: "",
    timezone: "",
    how_long: "",
    which_treatments_have_you_tried: "",
    how_about_other_therapies: "",
    currently_treating_your_pain: "",
    how_familiar_are_you_with_the_topics_of_primary_pain: "",
    brain_body_pain_recovery_approach: "",
    preferred_coach: "",
    payerDetails: "",
    mt: "",
    partnerCode,
    affiliate_code
  };

  const trimAndReplace = (input) => input.value.trim().replaceAll("  ", " ");

  data.firstName = trimAndReplace(input_first);
  data.lastName = trimAndReplace(input_last);
  data.name = `${data.firstName} ${data.lastName}`;
  data.email = trimAndReplace(input_email);
  data.state = trimAndReplace(input_state);
  data.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  data.phone = `${
    document.querySelector(".iti__selected-dial-code").innerHTML
  }${input_phone.value.replace(/\D/g, "")}`;
  data.internalRef = encodeURIComponent(document.referrer || "");
  data.internalUrl = encodeURIComponent(window.location.href || "");
  data.gaid = _gaid;
  data.how_long = q1_result;
  data.which_treatments_have_you_tried = q2_result;

  data.btn_src = btn_src;
  data.mt = mt;
  data.ref = ref;
  data.utm_source = utm_source;
  data.utm_medium = utm_medium;
  data.utm_content = utm_content;
  data.utm_campaign = utm_campaign;
  data.internal_ref = internal_ref;
  data.keyword = keyword;
  data.adgroup = adgroup;
  data.internal_url = internal_url;
  data.flow = flow;
  data.payerDetails = input_insurance_hidden.value || "";
  data.gclid = gclid;
  // console.log("data: ", data);

  // loader start
  loader.style.display = "flex";
  setTimeout(() => {
    loader_calendly.style.display = "none";
  }, 1500);

  const uet_report_conversion = () => {
    window.uetq = window.uetq || [];
    window.uetq.push("event", "signup", {});
  };
  // _tvq
  var _tvq = (window._tvq = window._tvq || []);
  function _sendSignupEvent(userId) {
    var session = {
      user: userId
    };
    var actionname = "signup";
    var action = {
      rev: "",
      prod: "",
      id: userId,
      promo: ""
    };

    var u =
      "https:" == document.location.protocol
        ? "https://collector-25217.tvsquared.com/"
        : "http://collector-25217.tvsquared.com/";
    _tvq.push(["setSiteId", "TV-7245728127-1"]);
    _tvq.push(["setTrackerUrl", u + "tv2track.php"]);
    _tvq.push([
      function () {
        this.setCustomVariable(5, "session", JSON2.stringify(session), "visit");
      }
    ]);
    _tvq.push([
      function () {
        this.setCustomVariable(5, actionname, JSON2.stringify(action), "page");
      }
    ]);
    _tvq.push(["trackPageView"]);
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.type = "text/javascript";
    g.defer = true;
    g.async = true;
    g.src = u + "tv2track.js";
    s.parentNode.insertBefore(g, s);
  }

  const vwoEvent = () => {
    // Add the following snippet to trigger this event
    window.VWO = window.VWO || [];
    VWO.event =
      VWO.event ||
      function () {
        VWO.push(["event"].concat([].slice.call(arguments)));
      };

    VWO.event("signup");
  };

  const moveNext = () => {
    loader.style.display = "none";
    back_form.style.display = "none";
    signup_progress_inner.style.transform = `translateX(calc(-100% + 100%))`;
    gtag("event", "signup_flow_submit");
    vwoEvent();
    if (utm_source === "bing") uet_report_conversion();
  };

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
        paymentUrl = responseData.redirectUrl;
        next_to_app.setAttribute("href", `${paymentUrl}`);
        // calendly_base_url
        // console.log("responseData.calendar: ", responseData.calendar);
        if (responseData.calendar === "2") {
          window.location.href = paymentUrl || "https://app.lin.health/login";
        } else {
          calendly_base_url =
            "https://calendly.com/lin-welcome-team/intake-consultation";
          tab_schedule.click();
          moveNext();
        }

        if (responseData.userId) _sendSignupEvent(responseData.userId);
        updateCalendlyURL();
      })
      .catch((err) => {
        moveNext();
        next_to_app.setAttribute("href", `https://app.lin.health/`);
      });
  } catch (err) {
    // error
    moveNext();
    next_to_app.setAttribute("href", `https://app.lin.health/`);
  }
};

next_submit.addEventListener("click", () => {
  formSubmition();
});

signup_form.addEventListener("submit", (event) => {
  event.preventDefault();
});

next_to_app.addEventListener("click", () => {
  gtag("event", "signup_flow_move_to_app");
});

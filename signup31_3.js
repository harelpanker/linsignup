// console.log("aug 8 new");
const signup_form = document.querySelector("#signup_form");
const loader = document.querySelector(".sign--loader");

const tab_insured = document.querySelector('a[data-w-tab="tab_insured"]');
const tab_not_insured = document.querySelector(
  'a[data-w-tab="tab_not_insured"]'
);
const tab_data = document.querySelector('a[data-w-tab="tab_data"]');
const tab_thanks = document.querySelector('a[data-w-tab="tab_thanks"]');

const next_state = document.querySelector('[data-name="next_state"]');
const next_insured = document.querySelector('[data-name="next_insured"]');
const next_submit = document.querySelector('[data-name="next_submit"]');

const input_state = document.querySelector("#input_state");
const input_insurance = document.querySelector("#input_insurance");
const input_first_name = document.querySelector("#input_first_name");
const input_last_name = document.querySelector("#input_last_name");
const input_phone = document.querySelector("#input_phone");
const input_email = document.querySelector("#input_email");
const input_insurance_hidden = document.querySelector(
  "#input_insurance_hidden"
);

const error_first = document.querySelector(".c-error-message.is--first");
const error_last = document.querySelector(".c-error-message.is--family");
const error_email = document.querySelector(".c-error-message.is--email");
// const error_state = document.querySelector(".c-error-message.is--state");
// const error_insurance = document.querySelector(".c-error-message.is--provider");

const insurance_wrapper = document.querySelector("#insurance_wrapper");
const search_insurance = document.getElementById("search_insurance");
const search_insurance_wrapper = document.getElementById(
  "search_insurance_wrapper"
);
const search_state = document.getElementById("search_state");
const search_state_wrapper = document.getElementById("search_state_wrapper");
let isEmailValidate = false;
let insurance_required = false;

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
let insuranceOptionsWorkTexas = ["bcbs_tx", "unitedhc", "medicaretx", "cigna"];
let insuranceOptionsWorkColorado = [
  "aetna",
  "anthemcolorado",
  "unitedhc",
  "medicareco",
  "cigna"
];
let insuranceOptionsWorkMaine = [
  "maineblueshield",
  "harvardpilgrim",
  "cigna",
  "aetna"
];
let insuranceOptionsWorkFlorida = ["medicareflorida", "aetna"];

const statesOptions = [
  "alabama",
  "alaska",
  "arizona",
  "arkansas",
  "california",
  "colorado",
  "connecticut",
  "delaware",
  "district of columbia",
  "florida",
  "georgia",
  "hawaii",
  "idaho",
  "illinois",
  "indiana",
  "iowa",
  "kansas",
  "kentucky",
  "louisiana",
  "maine",
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
  "ohio",
  "oklahoma",
  "oregon",
  "pennsylvania",
  "rhode island",
  "south carolina",
  "south dakota",
  "tennessee",
  "texas",
  "utah",
  "vermont",
  "virginia",
  "washington",
  "west virginia",
  "wisconsin",
  "wyoming"
];

// let phoneValue;
const disabledSubmitButton = () => {
  next_submit.disabled = true;
  next_submit.classList.remove("active");
};
const activeSubmitButton = () => {
  next_submit.disabled = false;
  next_submit.classList.add("active");
};
const validateFirst = () => {
  if (input_first_name.value === "") {
    error_first.style.display = "block";
  } else {
    error_first.style.display = "none";
  }
};
const validateLast = () => {
  if (input_last_name.value === "") {
    error_last.style.display = "block";
  } else {
    error_last.style.display = "none";
  }
};
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
const validateState = () => {
  if (
    input_state.value.toLowerCase() === "maine" ||
    input_state.value.toLowerCase() === "colorado" ||
    input_state.value.toLowerCase() === "florida" ||
    input_state.value.toLowerCase() === "texas"
  ) {
    insurance_wrapper.style.display = "block";
  } else {
    insurance_wrapper.style.display = "none";
  }
};

let insurance_options = [];
function filter_state(state) {
  if (state === "colorado") {
    insurance_options = coloradoOptions;
  } else if (state === "texas") {
    insurance_options = texasOptions;
  } else if (state === "maine") {
    insurance_options = maineOptions;
  } else if (state === "florida") {
    insurance_options = floridaOptions;
  }

  let child = search_insurance.lastElementChild;
  while (child) {
    search_insurance.removeChild(child);
    child = search_insurance.lastElementChild;
  }

  let i;
  for (i = 0; i < insurance_options.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `<a data-value='${insurance_options[i][1]}' href="#" class="list-providers">${insurance_options[i][0]}</a>`;
    search_insurance.appendChild(li);
  }
}

// step for insurance
const makeStateButtonActive = () => {
  next_state.removeAttribute("disabled", "");
  next_state.classList.add("active");
};
const makeStateButtonNotActive = () => {
  next_state.setAttribute("disabled", "");
  next_state.classList.remove("active");
};

function typeSearchInsurance() {
  search_insurance_wrapper.style.display = "block";
  if (input_insurance.value === "")
    search_insurance_wrapper.style.display = "none";

  let filter, ul, li, a, i, txtValue;
  filter = input_insurance.value.toUpperCase();
  ul = search_insurance;
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
document.addEventListener("click", (event) => {
  if (!event.target.matches(".list-providers")) return;
  event.preventDefault();
  input_insurance.value = event.target.innerHTML;
  input_insurance_hidden.value = event.target.getAttribute("data-value");

  insurance_options
    .map((opt) => opt[0].toLowerCase())
    .includes(input_insurance.value.toLowerCase())
    ? makeStateButtonActive()
    : makeStateButtonNotActive();
});

function checkProviderFocus(e) {
  let activeTextarea = document.activeElement.id;
  if (activeTextarea !== "autoInput") {
    search_insurance_wrapper.style.display = "none";
  } else {
    search_insurance_wrapper.style.display = "block";
  }
}
document.addEventListener("mouseup", checkProviderFocus, false);

input_insurance.addEventListener("click", () => {
  search_insurance_wrapper.style.display = "block";
});

// step form state
function searchTerms() {
  let item;
  for (item = 0; item < statesOptions.length; item++) {
    let li = document.createElement("li");
    li.innerHTML = `<a href="#" class="list-term">${statesOptions[item]}</a>`;
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

function typeSearchState() {
  search_state_wrapper.style.display = "block";
  if (input_state.value === "") search_state_wrapper.style.display = "none";

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

const validateStateInput = () => {
  if (
    input_state.value.toLowerCase() === "maine" ||
    input_state.value.toLowerCase() === "texas" ||
    input_state.value.toLowerCase() === "colorado" ||
    input_state.value.toLowerCase() === "florida"
  ) {
    return true;
  } else {
    return false;
  }
};

const checkValidState = () => {
  !validateStateInput() ? makeStateButtonActive() : makeStateButtonNotActive();
};

const selectionOfTerm = (event) => {
  if (!event.target.matches(".list-term")) return;
  event.preventDefault();
  input_state.value = event.target.innerHTML;
  search_state_wrapper.style.display = "none";

  statesOptions.includes(input_state.value.toLowerCase()) && checkValidState();

  if (validateStateInput()) {
    insurance_wrapper.style.display = "block";
    filter_state(input_state.value.toLowerCase());

    insurance_required = false;
    input_insurance.setAttribute("required", insurance_required);

    input_insurance.value = "";
    input_insurance.focus();
  } else {
    insurance_required = true;
    input_insurance.setAttribute("required", insurance_required);

    insurance_wrapper.style.display = "none";
    input_insurance.value = "";
  }
};
// detects selection of a search term.
document.addEventListener("click", (event) => selectionOfTerm(event));

const showProvider = () =>
  validateStateInput()
    ? (insurance_wrapper.style.display = "block")
    : (insurance_wrapper.style.display = "none");

function checkFocus(e) {
  let activeTextarea = document.activeElement.id;

  activeTextarea !== "autoInput"
    ? (search_state_wrapper.style.display = "none")
    : (search_state_wrapper.style.display = "block");

  showProvider();
}
document.addEventListener("mouseup", checkFocus, false);
input_state.addEventListener(
  "click",
  () => (search_state_wrapper.style.display = "block")
);
document
  .querySelectorAll(".list-term")
  .forEach((li) =>
    li.addEventListener(
      "click",
      () => (search_state_wrapper.style.display = "none")
    )
  );

const checkIfStateInputIncludesStateArrayItem = () => {
  if (statesOptions.includes(input_state.value.toLowerCase())) {
    search_state_wrapper.style.display = "none";
    insurance_wrapper.style.display = "none";
    input_state.blur();
    next_state.focus();
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

input_state.addEventListener("input", (event) => {
  checkIfStateInputIncludesStateArrayItem();
  statesOptions.includes(input_state.value.toLowerCase()) &&
  !validateStateInput()
    ? makeStateButtonActive()
    : makeStateButtonNotActive();
});

next_state.addEventListener("click", () => {
  if (input_state.value.toLowerCase() === "texas") {
    if (
      insuranceOptionsWorkTexas.includes(
        input_insurance_hidden.value.toLowerCase()
      )
    ) {
      tab_insured.click();
      gtag("event", "insurance_accepted");
    }
  }
  if (input_state.value.toLowerCase() === "maine") {
    if (
      insuranceOptionsWorkMaine.includes(
        input_insurance_hidden.value.toLowerCase()
      )
    ) {
      tab_insured.click();
      gtag("event", "insurance_accepted");
    }
  }
  if (input_state.value.toLowerCase() === "colorado") {
    if (
      insuranceOptionsWorkColorado.includes(
        input_insurance_hidden.value.toLowerCase()
      )
    ) {
      tab_insured.click();
      gtag("event", "insurance_accepted");
    }
  }
  if (input_state.value.toLowerCase() === "florida") {
    if (
      insuranceOptionsWorkFlorida.includes(
        input_insurance_hidden.value.toLowerCase()
      )
    ) {
      tab_insured.click();
      gtag("event", "insurance_accepted");
    }
  }
  if (!validateStateInput()) {
    tab_not_insured.click();
    validateStateInput()
      ? gtag("event", "insurance_state_notcovered")
      : gtag("event", "insurance_nostate");
  }
});
next_insured.addEventListener("click", () => {
  tab_data.click();
  gtag("event", "insurance_confirmed");
  setTimeout(() => {
    input_first_name.focus();
  }, 400);
});

// on page load
document.addEventListener("DOMContentLoaded", () => {
  input_state.focus();
  insurance_wrapper.style.display = "none";
  search_state_wrapper.style.display = "none";

  input_insurance.setAttribute("required", insurance_required);
  input_insurance.setAttribute("onkeyup", "typeSearchInsurance()");
  input_state.setAttribute("onkeyup", "typeSearchState()");

  searchTerms();
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

const updateInputValue = (event) =>
  (dialCode.value = "+" + iti.getSelectedCountryData().dialCode);

inputPhone.addEventListener("phoneInput", updateInputValue, false);
inputPhone.addEventListener("countrychange", updateInputValue, false);

const errorMap = [
  "Invalid number",
  "Invalid country code",
  "Not enough numbers",
  "Error, too many digits",
  "Invalid number"
];

const reset = () => {
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
      let errorCode = iti.getValidationError();
      errorMsg.innerHTML =
        errorCode === -99
          ? "Please enter a valid phone number"
          : errorMap[errorCode];
      errorMsg.classList.remove("hide");
      isValidPhone = false;
    }
  } else {
    inputPhone.classList.add("error");
    let errorCode = iti.getValidationError();
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
  if (
    input_first_name.value !== "" &&
    input_last_name.value !== "" &&
    isEmailValidate &&
    isValidPhone
  ) {
    next_submit.disabled = false;
    next_submit.classList.add("active");
  } else {
    next_submit.disabled = true;
    next_submit.classList.remove("active");
  }
};
input_first_name.addEventListener("input", validateSubmit);
input_last_name.addEventListener("input", validateSubmit);
input_phone.addEventListener("input", validateSubmit);
input_email.addEventListener("input", validateSubmit);

input_first_name.addEventListener("input", validateFirst);
input_last_name.addEventListener("input", validateLast);
input_email.addEventListener("input", validateEmail);

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

// submit
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const btn_src = urlParams.get("btn_src") || "";
const mt = urlParams.get("mt") || "";
const ref = urlParams.get("ref") || "";
const utm_audience = urlParams.get("utm_audience") || "";
const utm_source = urlParams.get("utm_source") || "";
const utm_medium = urlParams.get("utm_medium") || "";
const utm_content = urlParams.get("utm_content") || "";
const utm_campaign = urlParams.get("utm_campaign") || "";
const internal_ref = urlParams.get("internal_ref") || "";
const keyword = urlParams.get("keyword") || "";
const adgroup = urlParams.get("adgroup") || "";
const internal_url = urlParams.get("internal_url") || "";
const lp_value = urlParams.get("lp") || "";
const flow = urlParams.get("flow") || `${lp_value}s31_*kit40|po:p28`;
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
    utm_audience: "",
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
    where_do_you_experience_pain: "",
    how_long: "",
    have_any_of_these: "",
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

  data.firstName = trimAndReplace(input_first_name);
  data.lastName = trimAndReplace(input_last_name);
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
  data.btn_src = btn_src;
  data.mt = mt;
  data.ref = ref;
  data.utm_audience = utm_audience;
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
  tab_thanks.click();
  loader.style.display = "flex";

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
      "https:" === document.location.protocol
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
    gtag("event", "insurance_submit");
    // console.log("insurance_submit");

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
        if (responseData.userId) _sendSignupEvent(responseData.userId);
        moveNext();
      })
      .catch((err) => {
        moveNext();
      });
  } catch (err) {
    // error
    moveNext();
  }
};

next_submit.addEventListener("click", () => {
  formSubmition();
});
signup_form.addEventListener("submit", (event) => {
  event.preventDefault();
});

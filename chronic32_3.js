// aug 10
let step = "state";
const next_btn = document.querySelector("#next_btn");
const input_state = document.querySelector("#input_state");
const input_name = document.querySelector("#input_name");
const input_phone = document.querySelector("#input_phone");
const input_insurance = document.querySelector("#input_insurance");
const input_insurance_hidden = document.querySelector(
  "#input_insurance_hidden"
);

const search_state_wrapper = document.querySelector("#search_state_wrapper");
const search_state = document.querySelector("#search_state");
const search_insurance_wrapper = document.querySelector(
  "#search_insurance_wrapper"
);
const search_insurance = document.querySelector("#search_insurance");

const tab_insurance = document.querySelector('[data-w-tab="tab_insurance"]');
const tab_name = document.querySelector('[data-w-tab="tab_name"]');
const tab_phone = document.querySelector('[data-w-tab="tab_phone"]');

const yes_accept = document.querySelector(".yes_accept");
const not_accept = document.querySelector(".not_accept");
const form_steps = document.querySelector(".form_steps");
const we_work = document.querySelector("#we_work");
const span_name = document.querySelector("#span_name");

const loader = document.querySelector(".sign--loader");
const progress_inner = document.querySelector(".progress_inner");

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
const texasOptions = [
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
const texasFilterOptions = [
  "blue cross and blue shield of texas",
  "unitedhealthcare",
  "aetna",
  "humana",
  "cigna",
  "community health choice",
  "medicare",
  "superior healthplan",
  "wellcare",
  "other",
  "i don't have health insurance"
];
const coloradoOptions = [
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
const coloradoFilterOptions = [
  "anthem blue cross and blue shield",
  "unitedhealthcare",
  "aetna",
  "humana",
  "cigna",
  "kaiser permanente",
  "rocky mountain health plans",
  "denver health medical plan",
  "friday health plans",
  "medicare",
  "medicaid",
  "other",
  "i don't have health insurance"
];
const maineOptions = [
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
const maineFilterOptions = [
  "anthem blue cross and blue shield",
  "harvard pilgrim health Care",
  "medicare",
  "aetna",
  "cigna",
  "humana",
  "mainecare",
  "community health options",
  "martin's point health care",
  "other",
  "i don't have health insurance"
];
const floridaOptions = [
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
const floridaFilterOptions = [
  "aetna",
  "cigna",
  "humana",
  "florida blue",
  "medicare",
  "molina healthcare",
  "oscar health",
  "sunshine health",
  "unitedhealthcare",
  "other",
  "i don't have health insurance"
];
const insuranceOptionsWorkTexas = [
  "bcbs_tx",
  "unitedhc",
  "medicaretx",
  "cigna"
];
const insuranceOptionsWorkColorado = [
  "aetna",
  "anthemcolorado",
  "unitedhc",
  "medicareco",
  "cigna"
];
const insuranceOptionsWorkMaine = [
  "maineblueshield",
  "harvardpilgrim",
  "cigna",
  "aetna"
];
const insuranceOptionsWorkFlorida = ["medicareflorida", "aetna"];

function searchTerms() {
  let list, i, switching, b, shouldSwitch;
  for (i = 0; i < statesOptions.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `<a href="#" class="list-state">${statesOptions[i]}</a>`;
    search_state.appendChild(li);
  }
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

  let child = search_insurance.lastElementChild;
  while (child) {
    search_insurance.removeChild(child);
    child = search_insurance.lastElementChild;
  }

  for (i = 0; i < insurance_options.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `<a data-value='${insurance_options[i][1]}' href="#" class="list-insurance">${insurance_options[i][0]}</a>`;
    search_insurance.appendChild(li);
  }
}

function typeSearchInsurance() {
  search_insurance_wrapper.style.display = "block";
  if (input_insurance.value === "") {
    search_insurance_wrapper.style.display = "none";
  }
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

const setInsuranceOptions = () => {
  input_state.value.toLowerCase() === "maine" &&
    filterInsurance(input_state.value.toLowerCase());
  input_state.value.toLowerCase() === "texas" &&
    filterInsurance(input_state.value.toLowerCase());
  input_state.value.toLowerCase() === "colorado" &&
    filterInsurance(input_state.value.toLowerCase());
  input_state.value.toLowerCase() === "florida" &&
    filterInsurance(input_state.value.toLowerCase());
};

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

const selectionOfState = (event) => {
  if (!event.target.matches(".list-state")) return;
  event.preventDefault();
  input_state.value = event.target.innerHTML;
  search_state_wrapper.style.display = "none";
  next_btn.disabled = false;

  if (validateStateInput()) {
    step = "insurance";

    setInsuranceOptions();
  } else {
    step = "not_insured";
  }
};
const selectionOfInsurance = (event) => {
  if (!event.target.matches(".list-insurance")) return;
  event.preventDefault();
  input_insurance.value = event.target.innerHTML;
  search_insurance_wrapper.style.display = "none";
  input_insurance_hidden.value = event.target.getAttribute("data-value");
  next_btn.disabled = false;

  // add logic of accepted insurance
  if (input_state.value.toLowerCase() === "maine") {
    if (
      insuranceOptionsWorkMaine.includes(
        input_insurance_hidden.value.toLowerCase()
      )
    ) {
      step = "name";
      we_work.style.display = "block";
    } else {
      step = "not_insured";
      we_work.style.display = "none";
    }
  }
  if (input_state.value.toLowerCase() === "texas") {
    if (
      insuranceOptionsWorkTexas.includes(
        input_insurance_hidden.value.toLowerCase()
      )
    ) {
      step = "name";
      we_work.style.display = "block";
    } else {
      step = "not_insured";
      we_work.style.display = "none";
    }
  }
  if (input_state.value.toLowerCase() === "colorado") {
    if (
      insuranceOptionsWorkColorado.includes(
        input_insurance_hidden.value.toLowerCase()
      )
    ) {
      step = "name";
      we_work.style.display = "block";
    } else {
      step = "not_insured";
      we_work.style.display = "none";
    }
  }
  if (input_state.value.toLowerCase() === "florida") {
    if (
      insuranceOptionsWorkFlorida.includes(
        input_insurance_hidden.value.toLowerCase()
      )
    ) {
      step = "name";
      we_work.style.display = "block";
    } else {
      step = "not_insured";
      we_work.style.display = "none";
    }
  }
};
const checkIfStateInputIncludesStateArrayItem = () => {
  if (statesOptions.includes(input_state.value.toLowerCase())) {
    input_insurance_hidden.value = "";
    next_btn.disabled = false;
    if (validateStateInput()) {
      step = "insurance";
      next_btn.disabled = false;
      setInsuranceOptions();
    } else {
      step = "not_insured";
    }
  } else {
    next_btn.disabled = true;
  }
};

input_name.addEventListener("input", () => {
  if (input_name.value.length > 1) {
    step = "phone";
    span_name.innerHTML = input_name.value;
    next_btn.disabled = false;
  } else {
    next_btn.disabled = true;
  }
});

// phone start
const dialCode = document.querySelector(".dialCode");
const errorMsg = document.querySelector("#error-msg");
const validMsg = document.querySelector("#valid-msg");
let isValidPhone = false;

let iti = intlTelInput(input_phone, {
  initialCountry: "us",
  separateDialCode: true,
  placeholderNumberType: "FIXED_LINE"
});

const updateInputValue = function (event) {
  dialCode.value = "+" + iti.getSelectedCountryData().dialCode;
};
input_phone.addEventListener("phoneInput", updateInputValue, false);
input_phone.addEventListener("countrychange", updateInputValue, false);

const errorMap = [
  "Invalid number",
  "Invalid country code",
  "Not enough numbers",
  "Error, too many digits",
  "Invalid number"
];

const reset = function () {
  input_phone.classList.remove("error");
  errorMsg.innerHTML = "Please enter a valid phone number";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
  isValidPhone = false;
};

input_phone.addEventListener("keyup", () => {
  if (iti.isValidNumber()) {
    input_phone.blur();
  }
});

input_phone.addEventListener("blur", () => {
  reset();
  if (
    input_phone.value.trim() &&
    input_phone.value.match(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    )
  ) {
    if (iti.isValidNumber()) {
      validMsg.classList.remove("hide");
      isValidPhone = true;
      next_btn.disabled = false;
      input_phone.blur();
      step = "submit";
    } else {
      input_phone.classList.add("error");
      var errorCode = iti.getValidationError();
      errorMsg.innerHTML =
        errorCode === -99
          ? "Please enter a valid phone number"
          : errorMap[errorCode];
      errorMsg.classList.remove("hide");
      isValidPhone = false;
      next_btn.disabled = true;
    }
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
  phoneValue = iti.getSelectedCountryData().dialCode + input_phone.value;
});

input_phone.addEventListener("input", () => {
  reset();
});

// phone end

const handleNextButtonsLogic = () => {
  switch (step) {
    case "not_insured":
      form_steps.style.display = "none";
      not_accept.style.display = "flex";
      // log no state no insurance
      if (!validateStateInput()) {
        gtag("event", "signup_flow_32_step_state_not_accepted");
        // console.log("signup_flow_32_step_state_not_accepted");
      }
      // log yes state no insurance
      if (validateStateInput()) {
        if (
          !insuranceOptionsWorkMaine.includes(
            input_insurance_hidden.value.toLowerCase()
          ) ||
          !insuranceOptionsWorkTexas.includes(
            input_insurance_hidden.value.toLowerCase()
          ) ||
          !insuranceOptionsWorkColorado.includes(
            input_insurance_hidden.value.toLowerCase()
          ) ||
          !insuranceOptionsWorkFlorida.includes(
            input_insurance_hidden.value.toLowerCase()
          )
        ) {
          gtag("event", "signup_flow_32_step_insurance_not_accepted");
          // console.log("signup_flow_32_step_insurance_not_accepted");
        }
      }

      break;
    case "insurance":
      tab_insurance.click();
      setTimeout(() => {
        input_insurance.focus();
      }, 400);
      progress_inner.style.transform = `translateX(calc(-100% + 25%))`;
      gtag("event", "signup_flow_32_step_state_accepted");
      // console.log("signup_flow_32_step_state_accepted");

      break;
    case "name":
      tab_name.click();
      progress_inner.style.transform = `translateX(calc(-100% + 50%))`;
      setTimeout(() => {
        input_name.focus();
      }, 400);
      gtag("event", "signup_flow_32_step_insurance_accepted");
      // console.log("signup_flow_32_step_insurance_accepted");

      break;
    case "phone":
      tab_phone.click();
      progress_inner.style.transform = `translateX(calc(-100% + 75%))`;
      setTimeout(() => {
        input_phone.focus();
      }, 400);
      gtag("event", "signup_flow_32_step_name");
      // console.log("signup_flow_32_step_name");

      break;

    case "submit":
      formSubmition();
      progress_inner.style.transform = `translateX(calc(0%))`;
      gtag("event", "signup_flow_32_step_phone_submit");
      // console.log("signup_flow_32_step_phone_submit");

      break;

    default:
      break;
  }
};

// form submit start
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
const utm_source = urlParams.get("utm_source") || "";
const utm_medium = urlParams.get("utm_medium") || "";
const utm_content = urlParams.get("utm_content") || "";
const utm_campaign = urlParams.get("utm_campaign") || "";
const internal_ref = urlParams.get("internal_ref") || "";
const keyword = urlParams.get("keyword") || "";
const adgroup = urlParams.get("adgroup") || "";
const internal_url = urlParams.get("internal_url") || "";
const lp_value = urlParams.get("lp") || "67";
const flow = urlParams.get("flow") || `${lp_value}s32_*kit40|po:p28`;
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
    how_can_you_see_your_life_being_different: "",
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

  data.firstName = trimAndReplace(input_name);
  data.name = `${data.firstName}`;
  data.email = `member+${input_name.value
    .toLowerCase()
    .replace(/\s/g, "")}_${+new Date()}@gen.mylin.health`;
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
  console.log("data: ", data);

  // loader start
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
    yes_accept.style.display = "flex";
    form_steps.style.display = "none";

    // gtag("event", "signup_flow_submit");
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
        moveNext();
        // console.log("responseData: ", responseData);

        if (responseData.userId) _sendSignupEvent(responseData.userId);
      })
      .catch((err) => {
        moveNext();
        console.log("err 1:", err);
      });
  } catch (err) {
    // error
    moveNext();
    console.log("err 2:", err);
  }
};

input_state.addEventListener("input", (event) => {
  checkIfStateInputIncludesStateArrayItem();
});
input_state.addEventListener("click", () => {
  search_state_wrapper.style.display = "block";
});
input_insurance.addEventListener("click", () => {
  search_insurance_wrapper.style.display = "block";
});

// detects selection of a search term.
document.addEventListener("click", (event) => {
  selectionOfState(event);
  selectionOfInsurance(event);
});

next_btn.addEventListener("click", () => {
  handleNextButtonsLogic();
  next_btn.disabled = true;
});

input_state.setAttribute("onkeyup", "typeSearchState()");
input_insurance.setAttribute("onkeyup", "typeSearchInsurance()");

searchTerms();
// searchInsurance(coloradoOptions);

// new stuf

const closeStateListOnSelect = () => {
  if (statesOptions.includes(input_state.value.toLowerCase())) {
    search_state_wrapper.style.display = "none";
    search_insurance_wrapper.style.display = "none";
    input_state.blur();
    Array.from(document.querySelectorAll("a.list-state"))
      .find((el) => el.textContent === input_state.value.toLowerCase())
      .click();
  }
};

const closeProviderListOnSelect = () => {
  if (input_state.value.toLowerCase() === "maine") {
    if (maineFilterOptions.includes(input_insurance.value.toLowerCase())) {
      search_state_wrapper.style.display = "none";
      search_insurance_wrapper.style.display = "none";
      input_insurance.blur();

      Array.from(document.querySelectorAll("a.list-insurance"))
        .find(
          (el) =>
            el.innerHTML.toLowerCase() === input_insurance.value.toLowerCase()
        )
        .click();
    }
  }
  if (input_state.value.toLowerCase() === "florida") {
    if (floridaFilterOptions.includes(input_insurance.value.toLowerCase())) {
      search_state_wrapper.style.display = "none";
      search_insurance_wrapper.style.display = "none";
      input_insurance.blur();

      Array.from(document.querySelectorAll("a.list-insurance"))
        .find(
          (el) =>
            el.innerHTML.toLowerCase() === input_insurance.value.toLowerCase()
        )
        .click();
    }
  }
  if (input_state.value.toLowerCase() === "colorado") {
    if (coloradoFilterOptions.includes(input_insurance.value.toLowerCase())) {
      search_state_wrapper.style.display = "none";
      search_insurance_wrapper.style.display = "none";
      input_insurance.blur();

      Array.from(document.querySelectorAll("a.list-insurance"))
        .find(
          (el) =>
            el.innerHTML.toLowerCase() === input_insurance.value.toLowerCase()
        )
        .click();
    }
  }

  if (input_state.value.toLowerCase() === "texas") {
    if (texasFilterOptions.includes(input_insurance.value.toLowerCase())) {
      search_state_wrapper.style.display = "none";
      search_insurance_wrapper.style.display = "none";
      input_insurance.blur();

      Array.from(document.querySelectorAll("a.list-insurance"))
        .find(
          (el) =>
            el.innerHTML.toLowerCase() === input_insurance.value.toLowerCase()
        )
        .click();
    }
  }
};

input_state.addEventListener("input", () => closeStateListOnSelect());
input_insurance.addEventListener("input", () => closeProviderListOnSelect());

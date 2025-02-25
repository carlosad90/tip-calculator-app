const bill = document.querySelector(".bill-input");
const btns = document.querySelectorAll(".btn");
const people = document.querySelector(".people-input");
const tipResult = document.querySelector(".tip-amount");
const totalResult = document.querySelector(".bill-amount");
const customTip = document.querySelector(".input-tip");
const resetValues = document.querySelector(".reset-inputs");
const errorMessage = document.querySelector(".error");

let billValue = 0;
let tipValue = 0;
let numPeople = 0;
let total_tip = 0;

const handlePeople = (e) => {
  numPeople = parseInt(e.target.value);
  if (numPeople === 0) {
    errorMessage.classList.add("show");
    people.classList.add("show");
  } else {
    errorMessage.classList.remove("show");
    calculateTip();
  }
};

const handleTip = (e) => {
  btns.forEach((btn) => btn.classList.remove("selected"));
  e.target.classList.add("selected");
  tipValue = parseFloat(e.target.value);
  calculateTip();
};

const handleCustomTip = (e) => {
  tipValue = parseInt(e.target.value) / 100;
  //   console.log(tipValue);
  calculateTip();
};

const handleBill = (e) => {
  billValue = parseFloat(e.target.value);
  calculateTip();
};

const calculateTip = () => {
  if (billValue > 0 && tipValue > 0 && numPeople > 0) {
    errorMessage.classList.remove("show");
    people.classList.remove("show");
    total_tip = parseFloat(((billValue * tipValue) / numPeople).toFixed(2));
    total_bill = (billValue / numPeople + total_tip).toFixed(2);
    showTipResult();
  } else {
    tipResult.innerHTML = "$0.00";
    totalResult.innerHTML = "$0.00";
  }
};

const showTipResult = () => {
  tipResult.innerHTML = `$${total_tip}`;
  totalResult.innerHTML = `$${total_bill}`;
};

resetValues.addEventListener("click", () => {
  // Restablecer valores a 0
  billValue = 0;
  tipValue = 0;
  numPeople = 0;
  total_tip = 0;

  // Limpiar los inputs
  bill.value = "";
  people.value = "";
  customTip.value = "";

  tipResult.innerHTML = "$0.00";
  totalResult.innerHTML = "$0.00";

  btns.forEach((btn) => btn.classList.remove("selected"));
});

btns.forEach((btn) => {
  btn.addEventListener("click", handleTip);
});

if (bill) {
  bill.addEventListener("change", handleBill);
}

if (people) {
  people.addEventListener("change", handlePeople);
}

if (customTip) {
  customTip.addEventListener("change", handleCustomTip);
}

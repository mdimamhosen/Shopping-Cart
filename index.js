// // For Case
// document.getElementById("btn-case-plus").addEventListener("click", function () {
//   let caseNumField = document.getElementById("case-number-field");
//   let caseNum = parseInt(caseNumField.value);

//   let caseNumAmountField = document.getElementById("case-total");
//   let caseAmount = parseInt(caseNumAmountField.innerText);

//   caseNum += 1;
//   caseAmount += 59;
//   caseNumAmountField.innerText = caseAmount;
//   caseNumField.value = caseNum;
// });

// document
//   .getElementById("btn-case-minus")
//   .addEventListener("click", function () {
//     let caseNumField = document.getElementById("case-number-field");
//     let caseNum = parseInt(caseNumField.value);
//     let caseNumAmountField = document.getElementById("case-total");
//     let caseAmount = parseInt(caseNumAmountField.innerText);

//     if (caseNum > 0) {
//       caseAmount -= 59;
//       caseNumAmountField.innerText = caseAmount;
//       caseNum -= 1;
//       caseNumField.value = caseNum;
//     } else {
//       return;
//     }
//   });

// // For Phone
// document
//   .getElementById("btn-phone-plus")
//   .addEventListener("click", function () {
//     let phoneNumField = document.getElementById("phone-number-field");
//     let phoneNum = parseInt(phoneNumField.value);

//     let phoneNumAmountField = document.getElementById("phone-total");
//     let phoneAmount = parseInt(phoneNumAmountField.innerText);

//     phoneNum += 1;
//     phoneAmount += 1219;
//     phoneNumAmountField.innerText = phoneAmount;
//     phoneNumField.value = phoneNum;
//   });

// document
//   .getElementById("btn-phone-minus")
//   .addEventListener("click", function () {
//     let phoneNumField = document.getElementById("phone-number-field");
//     let phoneNum = parseInt(phoneNumField.value);
//     let phoneNumAmountField = document.getElementById("phone-total");
//     let phoneAmount = parseInt(phoneNumAmountField.innerText);

//     if (phoneNum > 0) {
//       phoneAmount -= 1219;
//       phoneNumAmountField.innerText = phoneAmount;
//       phoneNum -= 1;
//       phoneNumField.value = phoneNum;
//     } else {
//       return;
//     }
//   });

function updateItem(
  btnPlusId,
  btnMinusId,
  numFieldId,
  totalAmountId,
  itemPrice
) {
  document.getElementById(btnPlusId).addEventListener("click", function () {
    let numField = document.getElementById(numFieldId);
    let num = parseInt(numField.value);

    let numAmountField = document.getElementById(totalAmountId);
    let numAmount = parseInt(numAmountField.innerText);

    let subTotalField = document.getElementById("sub-total");
    let subTotal = parseInt(subTotalField.innerText);

    subTotal += itemPrice;
    subTotalField.innerText = subTotal;

    let taxField = document.getElementById("tax-amount");
    let taxAmount = parseFloat((subTotal * 0.1).toFixed(2));
    taxField.innerText = taxAmount;

    let totalField = document.getElementById("final-total");
    let totalAmount = subTotal + taxAmount;
    totalField.innerText = totalAmount;

    num += 1;
    numAmount += itemPrice;
    numAmountField.innerText = numAmount;
    numField.value = num;
  });

  document.getElementById(btnMinusId).addEventListener("click", function () {
    let numField = document.getElementById(numFieldId);
    let num = parseInt(numField.value);
    let numAmountField = document.getElementById(totalAmountId);
    let numAmount = parseInt(numAmountField.innerText);

    let subTotalField = document.getElementById("sub-total");
    let subTotal = parseInt(subTotalField.innerText);

    let taxField = document.getElementById("tax-amount");
    let taxAmount = parseFloat((subTotal * 0.1).toFixed(2));
    taxField.innerText = taxAmount;

    let totalField = document.getElementById("final-total");
    let totalAmount = parseFloat(totalField.innerText);

    if (num > 0) {
      subTotal -= itemPrice;
      subTotalField.innerText = subTotal;
      totalAmount = subTotal + taxAmount;
      totalField.innerText = totalAmount;
      numAmount -= itemPrice;
      numAmountField.innerText = numAmount;
      num -= 1;
      numField.value = num;
    } else {
      return;
    }
  });
}

// For Case
updateItem(
  "btn-case-plus",
  "btn-case-minus",
  "case-number-field",
  "case-total",
  59
);

// For Phone
updateItem(
  "btn-phone-plus",
  "btn-phone-minus",
  "phone-number-field",
  "phone-total",
  1219
);

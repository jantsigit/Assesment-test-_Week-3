/**
 * Returns a boolean (true or false) if the person is a valid object
 * according to the data structures spec sheet.
 *
 * @param {*} person A person according to PihiGroup CC Spec
 * @returns {boolean}
 */
function checkPersonObject(person) {
  if (person && person.firstName && person.middleName && person.lastName) {
    return true;
  }
  return false;
}

/**
 * Returns a boolean (true or false) if creditCard is a valid object
 * according to the data structures spec sheet.
 *
 * @param {*} creditCard A credit card data object according to PihiGroup CC Spec
 * @returns {boolean}
 */
function checkCreditCardObject(creditCard) {
  if (
    creditCard &&
    creditCard.number &&
    creditCard.cvc &&
    creditCard.number.length === 16
  ) {
    return true;
  }
  return false;
}

/**
 * Returns a boolean (true or false) if payment is a valid object
 * according to the data structures spec sheet.
 *
 * @param {*} payment A payment data object according to PihiGroup CC Spec
 * @returns {boolean}
 */
function checkPaymentObject(payment) {
  if (payment && typeof payment.sum === "number") {
    return true;
  }
  return false;
}

/**
 * Checks the validity of a credit card. Returns Promise<boolean>.
 *
 * @param {*} creditCardData A credit card data object according to PihiGroup CC Spec
 * @returns { Promise<boolean> }
 */
async function checkCreditCardValidity(creditCardData) {
  const validArgs = checkCreditCardObject(creditCardData);
  if (!validArgs) {
    return false;
  }

  const result = await fetch(
    "https://api.pihi-group.com/cc/check-credit-card",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creditCardData),
    }
  );
  const json = await result.json();
  if (json.validCard) {
    return true;
  } else {
    return false;
  }
}

/**
 * Makes a payment with the user's credit card. Returns Promise<boolean>.
 *
 * @param {*} paymentData A payment data object according to PihiGroup CC Spec
 * @returns { Promise<boolean> }
 */
async function makePayment(creditCardData, paymentData) {
  const validArgs = checkCreditCardObject(creditCardData) && checkPaymentObject(paymentData);
  if (!validArgs) {
    return false;
  }

  const result = await fetch("https://api.pihi-group.com/cc/make-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cc: creditCardData, payment: paymentData }),
  });
  const json = await result.json();
  if (json.ok) {
    return true;
  } else {
    return false;
  }
}

/**
 * The complete payment flow according to PihiGroup CC Spec. The ordering of
 * the functions are important due to PCI DSS regulation. Returns
 * Promise<true> if the whole process has completed. Else false.
 *
 * @param {*} person A person object according to PihiGroup CC Spec
 * @param {*} creditCardData A credit card data object according to PihiGroup CC Spec
 * @param {*} paymentData A payment data object according to PihiGroup CC Spec
 * @returns { Promise<boolean> }
 */
async function paymentProcess(person, creditCardData, paymentData) {  
  const isCreditCardValid = await checkCreditCardValidity(creditCardData);
  if (!isCreditCardValid) {
    return false;
  }
  
  const isPersonValid = checkPersonObject(person);
  if (!isPersonValid) {
    return false;
  }

  const paymentResult = await makePayment(creditCardData, paymentData);
  return paymentResult;
}

module.exports = {
  checkPersonObject,
  checkCreditCardObject,
  checkPaymentObject,
  checkCreditCardValidity,
  paymentProcess,
  makePayment,
};

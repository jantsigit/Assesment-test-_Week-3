const { checkPersonObject, checkCreditCardObject, checkPaymentObject } = require("./payment");

describe("objects", () => {
  it("check valid person object", () => {
    const person1 = {
      firstName: "James",
      middleName: "Roger",
      lastName: "Smith",
    };
    const person2 = {
      firstName: "Mary",
      middleName: "Anna",
      lastName: "Miller",
    };

    expect(checkPersonObject(person1)).toBe(true);
    expect(checkPersonObject(person2)).toBe(true);
  });

  it.skip("missing middlename is valid", () => {
    const person1 = {
      firstName: "James",
      lastName: "Smith",
    };

    expect(checkPersonObject(person1)).toBe(true);
  });

  it("check valid creditCard object", () => {
    const cc1 = {
      number: "0123456789012345",
      cvc: "123",
    };
    const cc2 = {
      number: "1234567890123456",
      cvc: "456",
    };

    expect(checkCreditCardObject(cc1)).toBe(true);
    expect(checkCreditCardObject(cc2)).toBe(true);
  });

  it("check invalid creditCard object", () => {
    const cc1 = {
      number: "01234567012345", // invalid length
      cvc: "123",
    };
    const cc2 = {
      number: "1234567890123456",
      // cvc missing
    };

    expect(checkCreditCardObject(cc1)).toBe(false);
    expect(checkCreditCardObject(cc2)).toBe(false);
  });

  it.skip("American Express cards should not be accepted", () => {
    const cc1 = {
      number: "37234567012345",
      cvc: "123",
    };
    const cc2 = {
      number: "3434567890123456",
      cvc: "123",
    };

    expect(checkCreditCardObject(cc1)).toBe(false);
    expect(checkCreditCardObject(cc2)).toBe(false);
  });

  it("check valid payment object", () => {
    const payment = {
      sum: 12,
    };

    expect(checkPaymentObject(payment)).toBe(true);
  });

  it.skip("check invalid payment object", () => {
    const payment = {
      sum: -1, // Negative sums are invalid in our api.
    };

    expect(checkPaymentObject(payment)).toBe(false);
  });
});

const { checkCreditCardValidity, makePayment } = require("./payment");
const fetchMock = require("jest-fetch-mock");

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe("creditcard", () => {
  it("test valid checkCreditCardValidity", async () => {
    fetch.mockResponseOnce(JSON.stringify({ validCard: true }));

    const cc = {
      number: "0123456789012345",
      cvc: "123",
    };
    const isValidCard = await checkCreditCardValidity(cc);

    expect(isValidCard).toBe(true);
  });

  it("test invalid checkCreditCardValidity", async () => {
    fetch.mockResponseOnce(JSON.stringify({ validCard: false }));

    const cc = {
      number: "0123456789012345",
      cvc: "123",
    };
    const isValidCard = await checkCreditCardValidity(cc);

    expect(isValidCard).toBe(false);
  });

  it.skip("test checkCreditCardValidity when faulty endpoint", async () => {
    fetch.mockReject(() => Promise.reject("API error"));

    const cc = {
      number: "0123456789012345",
      cvc: "123",
    };
    const isValidCard = await checkCreditCardValidity(cc);
    expect(isValidCard).toBe(false);
  });
});

describe("payment", () => {
  it("test valid payment", async () => {
    fetch.mockResponseOnce(JSON.stringify({ ok: true }));

    const cc = {
      number: "0123456789012345",
      cvc: "123",
    };
    const payment = { sum: 10 };
    const isOkPayment = await makePayment(cc, payment);
    expect(isOkPayment).toBe(true);
  });

  it("test invalid payment", async () => {
    fetch.mockResponseOnce(JSON.stringify({ ok: false }));

    const cc = {
      number: "0123456789012345",
      cvc: "123",
    };
    const payment = { sum: 10 };
    const isOkPayment = await makePayment(cc, payment);
    expect(isOkPayment).toBe(false);
  });
});

const { paymentProcess } = require("./payment");
const fetchMock = require("jest-fetch-mock");

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe("flow", () => {
  it("test the payment flow", async () => {
    fetch.mockResponseOnce(JSON.stringify({ validCard: true }));
    fetch.mockResponseOnce(JSON.stringify({ ok: true }));

    const person = {
      firstName: "James",
      middleName: "Roger",
      lastName: "Smith",
    };
    const cc = {
      number: "0123456789012345",
      cvc: "123",
    };
    const payment = { sum: 10 };
    const paymentIsOk = await paymentProcess(person, cc, payment);

    expect(paymentIsOk).toBe(true);
  });

  it.skip("test the payment flow - INVALID_CARD", async () => {
    fetch.mockResponseOnce(JSON.stringify({ validCard: false }));
    fetch.mockResponseOnce(JSON.stringify({ ok: true }));

    const person = {
      firstName: "James",
      middleName: "Roger",
      lastName: "Smith",
    };
    const cc = {
      number: "0123456789012345",
      cvc: "123",
    };
    const payment = { sum: 10 };
    const paymentIsOk = await paymentProcess(person, cc, payment);

    expect(paymentIsOk).toBe('INVALID_CARD');
  });
});


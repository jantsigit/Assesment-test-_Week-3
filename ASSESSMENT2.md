# Vaihe 2 - #Q2

## Bug ticket #6344

Hello from the QA team again,

We have noticed two tings. First, the `https://api.pihi-group.com/cc/` endpoints fail occasionally under heavy load, and second, this random failing crashes your code too.

Could you add a try/catch around your fetch calls so that we don't crash the whole server? Lets just `return false` in the catch block.

I added a skipped test to `payment-02.test.js`.

1) unskip the test
2) fix the code by adding a try/catch around the fetch call.
3) rerun the tests
4) also add a similar test for the `makePayment` function below in the [describe("payment", ...)](https://github.com/adl32x/assignment-test-1/blob/main/payment-02.test.js#L47) block. 

[Step 0](./ASSESSMENT.md) ・
[Step 1](./ASSESSMENT1.md) ・
[📖 Step 2](./ASSESSMENT2.md) ・
[Step 3](./ASSESSMENT3.md)

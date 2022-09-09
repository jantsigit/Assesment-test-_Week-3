# Vaihe 3 - #Q3

## Feature request ticket #6345

Hello from the frontend team,

The code function for running the whole process, [paymentProcess(..)](https://github.com/adl32x/assignment-test-1/blob/main/payment.js#L115) works ok, but we would like to get a bit more detailed information than `true or false` when the function exits. You see, we'd like to for example display "Check your credit card number" to the user, but we can't differentiate between any of the errors. 

Instead of true or false, we propose that the function returns these strings instead:

- OK - when all is good
- INVALID_CARD - when the credit card is invalid
- INVALID_PERSON - when the person check fails
- PAYMENT_FAILED - when the payment fails

I added a skipped test to `payment-03.test.js`.

1) unskip the test
2) fix the code and the happy case test
3) rerun the tests and check that it passes
4) add a sensible number of tests or expects for all the cases above
5) ⭐ Read the `3. Payment flow` in CCSpec.md file. How would you change the code and test code so that it's easy to assert the order of execution?

ーDave

[Step 0](./ASSESSMENT.md) ・
[Step 1](./ASSESSMENT1.md) ・
[Step 2](./ASSESSMENT2.md) ・
[📖 Step 3](./ASSESSMENT3.md)

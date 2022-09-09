# Vaihe 1 - #Q1

## Bug ticket #6341

Hello from the QA team,

We got an user complaint from a person called _Mikiko Toyoda_. She complains that she can't get payments through our system.

We suspect that it's because she doesn't have a middle name, and thus the object check fails. I added a skipped test to `payment-01.test.js`. Could you:

1) unskip the middle name test
2) fix the code
3) rerun the tests and check that it passes

ーAndrew

## Feature request #6342

According to previous discussion, we are dropping support for Amex cards. I added a skipped test to `payment-01.test.js`. Please unskip the test and fix the code accordingly.

1) unskip the Amex card test
2) fix the code
3) rerun the tests and check that it passes

## Bug ticket #6343

Someone is trying to be funny and hack our system with negative payments. Luckily our API catches those, but it would be best if we'd also check for those. I added a skipped test to `payment-01.test.js`. Could you:

1) unskip the invalid payment object test
2) fix the code
3) rerun the tests and check that it passes

ーAndrew

[Step 0](./ASSESSMENT.md) ・
[📖 Step 1](./ASSESSMENT1.md) ・
[Step 2](./ASSESSMENT2.md) ・
[Step 3](./ASSESSMENT3.md)
# Pihi Group Credit Card Specification

## 1. Objects

### Person object

An object containing a person. Fields:

| Field name | Type   | Required | Comments |
| ---------- | ------ | -------- | -------- |
| firstName  | string | yes      |          |
| middleName | string |          |          |
| lastName   | string | yes      |          |

### Credit card object

| Field name | Type   | Required | Comments                                                                |
| ---------- | ------ | -------- | ----------------------------------------------------------------------- |
| number     | string | yes      | Length: 16 characters. Amex cards (starting 37 and 34) are not allowed. |
| cvc        | string | yes      |                                                                         |

### Payment object

| Field name | Type                    | Required | Comments                                                          |
| ---------- | ----------------------- | -------- | ----------------------------------------------------------------- |
| sum        | number                  | yes      | Number in integer form.                                           |
| list       | list of product objects |          | Optional, only visible on receipt and not handled in our systems. |

---

## 2. API endpoints

### POST https://api.pihi-group.com/cc/check-credit-card

**Input body:** _Credit card object_

Response:

| Field name | Type    | Required | Comments                          |
| ---------- | ------- | -------- | --------------------------------- |
| validCard  | boolean | yes      | Returns the validity of the card. |

### POST https://api.pihi-group.com/cc/make-payment

**Input body:** _Credit card object_ and _Payment object_ in their own fields:

| Field name | Type               | Required | Comments                 |
| ---------- | ------------------ | -------- | ------------------------ |
| cc         | Credit card object | yes      | Check object type above. |
| payment    | Payment object     | yes      | Check object type above. |

**Response:**

| Field name | Type    | Required | Comments                   |
| ---------- | ------- | -------- | -------------------------- |
| ok         | boolean | yes      | Ok status of the API call. |

---

## 3. Payment flow

According to our payment gateway standards, we are not allowed to make any credit card operations before we have validated all possible input. Make sure that you validate your input before calling any API operations.

Correct flow:

```
Check inputs
↓
Call check-credit-card API endpoint
↓
Call make-payment API endpoint
```

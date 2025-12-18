# KGL JavaScript Coursework

This repository contains **three JavaScript courseworks** for **Karibu Groceries Ltd (KGL)**.
Each coursework is organized as **its own folder**, and each folder contains the activities and files required for that coursework.

---

## 📁 Project Structure

```
KGL-JavaScript-Coursework/
│
├── coursework-1-kgl-data-validation/
│   ├── kgl_validation.js
│   └── README.md
│
├── coursework-2-kgl-inventory-processing/
│   ├── kgl_functions.js
│   └── README.md
│
└── coursework-3-kgl-analytics-reporting/
    ├── kgl_analytics.js
    └── README.md
```

Each folder contains:

* A **JavaScript file** for implementation
* A **README.md** describing the tasks for that coursework

---

# 📘 Coursework 1: KGL Data Validation System

**Focus Areas:**
Variables, Data Types, Strings, Booleans, Operators, Conditionals, Arrays

**Estimated Time:** 90–120 minutes
**Total Marks:** 100

---

## Part A: Variable Declaration and Type Checking (20 marks)

### Tasks

1. Create a file named **`kgl_validation.js`**.

2. Declare the following variables using appropriate keywords (`let` or `const`):

   * `companyName` → "Karibu Groceries LTD"
   * `minimumTonnage` → `1000`
   * `isOperational` → `true`
   * `managerName` → declared but not assigned
   * `closedBranches` → `null`

3. Use the `typeof` operator to check and log the data type of each variable. **(5 marks)**

4. Write **single-line and multi-line comments** explaining why `let` or `const` was used for each variable. **(5 marks)**

---

## Part B: String Manipulation and Validation (25 marks)

### Tasks

5. Declare a variable:

   ```js
   let dealerNameInput = " james BOND ";
   ```

6. Write code that:

   * Removes leading and trailing whitespace
   * Converts the name to **proper title case**
   * Stores the result in `cleanDealerName`
   * Logs the result using a template literal:

     ```
     Cleaned Dealer Name: [name]
     ```

   **(10 marks)**

7. Validate that `cleanDealerName`:

   * Is not empty
   * Has a length of **at least 2 characters**

   Log:

   * `"Valid dealer name"` or
   * `"Invalid dealer name"`

   **(10 marks)**

---

## Part C: Conditional Logic and Business Rules (30 marks)

### Setup Variables

```js
let userRole = 'Sales Agent';
let procurementTonnage = 1500;
let produceType = 'Beans';
let costInUgx = '50000';
```

### Business Rules

8. Implement the following using `if...else if...else`:

* **Rule 1:** Sales Agents cannot record produce entries.
  If `userRole` is `'Sales Agent'`, log an error and stop further checks. **(10 marks)**

* **Rule 2:** Tonnage must be **≥ 1000 kg**. **(5 marks)**

* **Rule 3:** Convert `costInUgx` to a number and ensure it is **≥ 10000**. **(10 marks)**

9. Use the logical **AND (`&&`)** operator to check both tonnage and cost conditions.
   Log:

* `"Procurement record valid"` or
* `"Procurement record invalid"`

**(5 marks)**

---

## Part D: Arrays and Produce Management (25 marks)

### Tasks

10. Create an array:

```js
let kglProduce = ['Beans', 'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans'];
```

**(5 marks)**

11. Write code that:

* Adds `"Green Peas"` to the end of the array
* Removes the first item (oldest stock)
* Checks if `"G-nuts"` exists in the array
* Logs the final array and its length

**(15 marks)**

12. Create another array:

```js
let branch2Produce = ['Maize', 'Beans'];
```

Use `.concat()` to merge both arrays into `allProduce`. **(5 marks)**

---

# 📘 Coursework 2: KGL Inventory Processing System

**Focus Areas:**
Loops, Functions, Objects, Date Object

**Estimated Time:** 120–150 minutes
**Total Marks:** 100

---

## Part A: Function Implementation (30 marks)

1. Create **`kgl_functions.js`** and implement:

### `calculateProcurementCost`

* Parameters: `tonnageInKg`, `pricePerKg`
* Returns total cost
* Returns `"Invalid input"` if inputs are invalid

**(10 marks)**

### `validateBuyerName` (Arrow Function)

* Returns `true` if name length ≥ 2 and not empty
* Returns `false` otherwise

**(10 marks)**

### `checkUserAuthorization`

Uses a `switch` statement:

* Manager → `"procurement_and_sales"`
* Sales Agent → `"sales_only"`
* Director → `"view_aggregations"`
* Others → `"unauthorized"`

**(10 marks)**

---

## Part B: Object Creation and Manipulation (35 marks)

4. Create `createSalesRecord` function that returns a sales object with:

* Random `id` (1000–9999)
* Produce name, tonnage, buyer name, amount paid
* `saleDate` using `new Date()`
* `isCreditSale: false`

**(15 marks)**

5. After creating a sales record:

* Add `branch = "Maganjo"`
* Modify `isCreditSale` to `true`
* Add `dueDate` using bracket notation
* Log all property names using `Object.keys()`

**(10 marks)**

6. Use a `for...in` loop to log each property and value.

**(10 marks)**

---

## Part C: Loop Implementation and Data Processing (35 marks)

7. Weekly tonnage array:

```js
let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];
```

Use a `for` loop to calculate:

* Total tonnage
* Average tonnage

**(15 marks)**

8. Create at least 5 sales records and use a `for...of` loop to:

* Count credit sales
* Skip non-credit sales using `continue`

**(15 marks)**

9. Inventory stock check using `break`:

```js
let inventory = [
 {name: 'Beans', tonnage: 500},
 {name: 'Maize', tonnage: 0},
 {name: 'G-nuts', tonnage: 300}
];
```

Log alert when an item is out of stock.

**(5 marks)**

---

# 📘 Coursework 3: KGL Analytics and Reporting System

**Focus Areas:**
Objects, Higher Order Functions, Sets, Maps

**Estimated Time:** 120–150 minutes
**Total Marks:** 100

---

## Part A: Higher Order Functions (40 marks)

1. Create **`kgl_analytics.js`** with at least 6 procurement records.

**(10 marks)**

2. Use `.map()` to add `costPerKg` to each record.

**(10 marks)**

3. Use `.filter()` to select records with `tonnageInKgs ≥ 1000`. Log results and length.

**(10 marks)**

4. Use `.reduce()` to calculate:

* Total tonnage
* Total cost

**(10 marks)**

---

## Part B: Sets (30 marks)

5. Create `getUniqueDealers` using a `Set`.

**(15 marks)**

6. Create `authorizedRoles` Set and `isAuthorizedForProcurement` function.

**(15 marks)**

---

## Part C: Maps (30 marks)

7. Create `kglPriceList` Map with produce prices.

**(10 marks)**

8. Implement `calculateSaleTotal` using `.get()`.

**(15 marks)**

9. Loop through the Map and log prices. Calculate the highest price.

**(5 marks)**

---

✅ **End of README**

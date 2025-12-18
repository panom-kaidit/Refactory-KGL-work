/*
===========================================
PART A: Function implementation
==========================================
 */

// creating a function
function calculateProcurementCost(tonnageInKg, pricePerKg) {
    if (
        typeof tonnageInKg !== "number" ||
        typeof pricePerKg !== "number" ||
        tonnageInKg < 0 ||
        pricePerKg < 0
    ) {
        return "Invalid input";
    } else {
        let totalCost = tonnageInKg * pricePerKg;
        return totalCost;
    }
}

// function to validate user name
function validateBuyerName(buyerName) {
    if (buyerName.length >= 2 && buyerName !== "") {
        return true;
    } else {
        return false;
    }
}

/*
function checkUserAuthorization (role){ 
    if (role ==='Manager'){ 
    return "Procurement_and_sales"; 
    } else {
         if (role ==='Sales Agent'){ 
         return "sales_only" 
         } else { 
            if (role ==='Director'){
             return "view_aggregations"
              } else{ 
                return "unauthorized" 
            }
        }
      }
    }
*/



// Shortest way to for the above log version

// User authorization function
let role = "Manager"
function checkUserAuthorization(role) {
    switch (role) {
        case "Manager":
            return "procurement_and_sales";
        case "Sales Agent":
            return "sales_only";
        case "Director":
            return "view_aggregations";
        default:
            return "unauthorized";
    }
}

let userRole = checkUserAuthorization(role);
console.log(userRole);

/*
===========================================
PART B: Object Creation and Manipulation
==========================================
 */

function createSalesRecord(produceName, tonnage, buyerName, amountPaid) {
    return {
        id: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
        produceName: produceName,
        tonnageInKgs: tonnage,
        buyerName: buyerName,
        amountPaid: amountPaid,
        saleDate: new Date(),
        isCreditSale: false
    };
}

// creating a sales record and manupulate

let salesRecord = createSalesRecord("Beans",10000,"Mike Doe",50000)

// adding a branch
salesRecord.branch = "Magonjo"
salesRecord.isCreditSale = true
salesRecord["dueDate"] = "2025-01-30"

// using for loop to log 

for (let items in salesRecord){
    console.log(`Property: ${items}, Value: ${salesRecord[items]}`)
}
/*
===========================================
PART C: Loop Implementation and Data Processing
==========================================
 */

let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];
let totalTonnage = 0;

for (let i = 0; i < weeklyTonnage.length; i++) {
    totalTonnage += weeklyTonnage[i];
}

let avarageDailyTonnage = totalTonnage / weeklyTonnage.length;

console.log(`Total tonnage for the week: ${totalTonnage}`);
console.log(`average daily tonnage: ${avarageDailyTonnage}`);

// creating an array of sales records


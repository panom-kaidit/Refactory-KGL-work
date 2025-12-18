/*
==============================================
PART A: Variable Declaration and Type Checking
==============================================
*/

// Campany name is always constant 

const companyName = "Karibu Groceries LTD"

// Minimum is also constant since it should not change

const minimumTonnage = 1000;

// We will use let because the operational condition can either be true or false
let isOperational = true;

// managerName can be changed letter so we will use let

let managerName;

// closed branches is unkown yet so we will use let

let closedBranches = null;

console.log(typeof companyName); // string
console.log(typeof minimumTonnage); // number
console.log(typeof isOperational); // boolean
console.log(typeof managerName); // undefined
console.log(typeof closedBranches);//object
/* 
            =======
            OUTPUT
            ======
            string
            number
            boolean
            undefined
            object
I used const with those values which will not change in the future like minimum and cmpany name.
I used let with likly changerble ones
*/

/*
============================================
PART B: String Manipulation and Validation
============================================
*/

// Declaring a variable
let dealerNameInput = " james BOND "

// removing white spaces
let trimmedDealerNameInput= dealerNameInput.trim()

// console.log(trimedDealerNameInput)

// Convert to title case
let cleanDealerName = trimmedDealerNameInput.toLowerCase();
let nameParts=cleanDealerName.split(" ")

// 3. Capitalize each word
let firstName = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1);

let lastName = nameParts[1].charAt(0).toUpperCase() + nameParts[1].slice(1);

// now concatenating all the names to cleandealername
cleanDealerName = firstName + " " + lastName;

console.log(cleanDealerName)
console.log(`Cleaned Dealer Name: ${cleanDealerName}`)
// Validation
if (cleanDealerName.length >= 2 && cleanDealerName !== "") {
console.log("Valid dealer name");
} else {
console.log("Invalid dealer name");
}

/*
            ====================
                OUTPUT
            ==================== 
            James Bond
            Cleaned Dealer Name: James Bond
            Valid dealer name
*/



/*
=============================================
PART C: Conditional Logic and Business Rules
=============================================
*/

// creating variable

let userRole = 'Sales Agent';
let procurementTonage = 1500;
let produceType = 'Beans';
let costInUgx = '50000';

let errorMessage = `
    ******Error!******
Your are not allowed to record any entry
`
if (userRole === 'Sales Agent') {
    console.log(errorMessage)
} else {
    const minimumtonnage = 1000;
    let costInUgxNum = Number(costInUgx)

    let isValidProcurement = procurementTonage >= minimumtonnage && costInUgxNum >= 10000;

    if (isValidProcurement){
        console.log("Procurement record valid")
    } else{
        console.log("Procurement record invalid")
    }
        
        
    }
/*
    =================
        OUTPUT 
    ================
    ******Error!******
Your are not allowed to record any entry
*/

/* 
======================================
PART D: Arrays and Produce Management
=====================================
*/

// creating an array
let kglProduce = ['Beans', 'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans'];

// Appendng items into the array.
kglProduce.push("Green Peas");

// Removing the first item from the array
kglProduce.shift();

// checking if item exists inside an array
let isGnuts =kglProduce.includes("G-nuts");

console.log(isGnuts)
console.log(kglProduce);
console.log(kglProduce.length);

// creating second array and merging
let branch2Produce = ['Maize', 'Beans'];
let allProduce = kglProduce.concat(branch2Produce);

/*
============================
         OUTPUT
==========================
   true
   [ 'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans', 'Green Peas' ]
   5
 */
/*
==============================================
PART A: Higher Order Functions - Data Transformation
==============================================
*/

// creating procurement record objects
function procurementRecords(pid, name, type, tonnage, cost) {
    return {
        pid: pid,
        dealerName: name,
        produceType: type,
        tonnageInKgs: tonnage,
        costInUgx: cost,
        procurementDate: new Date()
    };
}

let procurements = [
    procurementRecords(1, "Jack Son", "Beans", 2000, 4000000),
    procurementRecords(2, "Jak Don", "Cow peas", 1000, 2000000),
    procurementRecords(3, "Cacy Sony", "Soybeans", 9000, 18000),
    procurementRecords(4, "Soch Ckon", "Grain Maize", 1500, 35000),
    procurementRecords(5, "Back Doe", "G-nuts", 2000, 4000000),
    procurementRecords(6, "Jackiline Grace", "Beans", 7000, 14000)
];

// 2. map() – add costPerKg
let procurementsWithCostPerKg = procurements.map(record => {
    return {
        ...record,
        costPerKg: record.costInUgx / record.tonnageInKgs
    };
});

console.log(procurementsWithCostPerKg);

// 3. filter() – tonnage >= 1000
let filteredProcurements = procurements.filter(record => record.tonnageInKgs >= 1000);

console.log(filteredProcurements);
console.log(filteredProcurements.length);

// 4. reduce() – total tonnage and total cost
let totalTonnage = procurements.reduce((sum, record) => sum + record.tonnageInKgs, 0);
let totalCost = procurements.reduce((sum, record) => sum + record.costInUgx, 0);

console.log(`Total tonnage procured: ${totalTonnage}`);
console.log(`Total procurement cost: ${totalCost}`);

/*
==============================================
PART B: Sets for Unique Data Management
==============================================
*/

// 5. Function to get unique dealers
function getUniqueDealers(records) {
    let dealerSet = new Set();

    records.forEach(record => {
        dealerSet.add(record.dealerName);
    });

    return Array.from(dealerSet);
}

let uniqueDealers = getUniqueDealers(procurements);
console.log(uniqueDealers);

// 6. Authorized roles using Set
let authorizedRoles = new Set();
authorizedRoles.add("Manager");
authorizedRoles.add("Director");

function isAuthorizedForProcurement(userRole) {
    return authorizedRoles.has(userRole);
}

console.log(isAuthorizedForProcurement("Manager"));
console.log(isAuthorizedForProcurement("Sales Agent"));
console.log(isAuthorizedForProcurement("Director"));

/*
==============================================
PART C: Maps for Price Management
==============================================
*/

// 7. Price list Map
let kglPriceList = new Map();

kglPriceList.set("Beans", 5500);
kglPriceList.set("Grain Maize", 4800);
kglPriceList.set("Cow peas", 6000);
kglPriceList.set("G-nuts", 7200);
kglPriceList.set("Soybeans", 5800);

// 8. Calculate sale total
function calculateSaleTotal(produceName, tonnageInKgs) {
    let price = kglPriceList.get(produceName);

    if (price === undefined) {
        return "Price not found";
    }

    return price * tonnageInKgs;
}

console.log(calculateSaleTotal("Beans", 1000));
console.log(calculateSaleTotal("Rice", 500));

// 9. Loop through Map and find highest price
let prices = [];

for (let [produce, price] of kglPriceList) {
    console.log(`Produce: ${produce}, Price per Kg: ${price} UgX`);
    prices.push(price);
}

let highestPrice = prices.reduce((max, price) => price > max ? price : max, 0);
console.log(`Highest price per Kg: ${highestPrice} UgX`);

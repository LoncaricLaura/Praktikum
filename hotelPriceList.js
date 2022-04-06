const priceList = [
  { from: "2020-01-01", to: "2020-02-01", price: 34.5 },
  { from: "2020-02-02", to: "2020-03-01", price: 37.0 },
  { from: "2020-03-02", to: "2020-05-15", price: 39.0 },
  { from: "2020-05-16", to: "2020-06-15", price: 37.0 },
];

/*
function listPeriod () {
    for (const item in priceList) {
        const element = priceList[item];
        console.log(`${element.price} : ${element.from} do ${element.to}`);
      }
} */

//listPeriod();

// Vraca formatirani datum priceList objekta kao string
function date_string(item) {
  return item.from + " do " + item.to;
}

// Vraca sve formatirane datume niza priceList objekta u jedan string
function all_dates(items) {
  return items.map((el) => date_string(el)).join(", ");
}

// Grupiranje
let result = priceList.reduce((prev, curr) => {
  prev[curr.price] = prev[curr.price] || [];
  prev[curr.price].push(curr);
  return prev;
}, {});

// Ispis
for (const [key, value] of Object.entries(result)) {
  console.log(`${key}: ${all_dates(value)}`);
}

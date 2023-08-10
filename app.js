const numberArrays = [2, 4, 6, 8, 10, 12];

numberArrays.unshift(12);
numberArrays.pop();

console.log(numberArrays);

const arr = [
    {
        ProductTitle: "toy",
        ProductPrice: 30,
    },
    {
        ProductTitle: "ball",
        ProductPrice: 150,
    },
    {
        ProductTitle: "net",
        ProductPrice: 40,
    }
]

console.log(arr[1].ProductPrice)

const masivi = [2, 4, 5, 6, 15, 7];

let sum = 0;

for (let i = 0; i < masivi.length; i++) {
    sum += masivi[i];
}

console.log(sum / masivi.length);

const arr2 = [10, 15, 6, 25, 7];

let sum2 = 0;

arr2.forEach(num => sum2 += num);

console.log(sum2 / arr2.length);
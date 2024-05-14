"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Peanut Dark Chocolate M&Ms", price: 3.89},
    {product: "Sour Patch Straws", price: 2.50},
    {product: "Air Heads", price: 3.99},
    {product: "Reeces Peeces", price: 2.89},
    {product: "Jolly Rancher", price: 3.50},
    {product: "Twix", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];

// Which candies costs less than $4.00? 
let productCost = products.filter((product) => product.price <= 4).forEach((product) => console.log( `${product.product } price: ${product.price}`));

// console.log(productCost);

// Which candies has "M&M" its name?
let candyMm = products.filter((item) => item.product.indexOf("M&M") !=-1);
console.log(candyMm);

// Do we carry "Swedish Fish"?
let candyName = products.find((product) => product.product.indexOf("Swedish Fish") !=-1);
console.log(candyName);
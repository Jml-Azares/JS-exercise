var productProfitArray = [
  { name: "Product A", profit: -75 },
  { name: "Product B", profit: -70 },
  { name: "Product C", profit: 93 },
  { name: "Product D", profit: -3 },
  { name: "Product E", profit: -1 },
  { name: "Product F", profit: 1 },
];

function topProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let maxProfit = -Infinity;
  let topProduct = "";

  for (const product of productProfitArray) {
    if (product.profit > maxProfit) {
      maxProfit = product.profit;
      topProduct = product;
    }
  }

  return `Top Product is: ${topProduct.name} (Profit: ${topProduct.profit})`;
}

function bottomProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let minProfit = Infinity;
  let bottomProduct = "";

  for (const product of productProfitArray) {
    if (product.profit < minProfit) {
      minProfit = product.profit;
      bottomProduct = product;
    }
  }

  return `Bottom Product is: ${bottomProduct.name} (Profit: ${bottomProduct.profit})`;
}

function zeroProfitProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let closestToZero = Infinity;
  let zeroProduct = "";

  for (const product of productProfitArray) {
    const profit = product.profit;

    if (
      Math.abs(profit) < Math.abs(closestToZero) ||
      (Math.abs(profit) === Math.abs(closestToZero) && profit > 0)
    ) {
      closestToZero = profit;
      zeroProduct = product;
    }
  }

  return `Zero Profit Product is: ${zeroProduct.name} (Profit: ${zeroProduct.profit})`;
}

console.log(topProduct(productProfitArray));
console.log(bottomProduct(productProfitArray));
console.log(zeroProfitProduct(productProfitArray));

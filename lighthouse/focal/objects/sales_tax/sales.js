const calculateSalesTax = function(salesData, taxRates) {
  
  let result = {};

  for (const company of salesData) {
    //console.log(result[company.name]);
    let totalTax = 0;
    const totalSale = company.sales.reduce((previousValue, currentValue) => previousValue + currentValue);

    if (Object.prototype.hasOwnProperty.call(taxRates, company.province)) {
      totalTax = taxRates[company.province] * totalSale;
    }

    if (result[company.name]) {
      result[company.name].totalSales += totalSale;
      result[company.name].totalTaxes += totalTax;
    } else {
      result[company.name] = {
        totalSales: totalSale,
        totalTaxes: totalTax
      };
    }
  }
  console.log(result);
};

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

calculateSalesTax(companySalesData, salesTaxRates);

/*
Expected Results:
{
  Telus:{
    totalSales: 1300,
    totalTaxes: 144
  }
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
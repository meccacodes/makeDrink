// 4. `this` Exercise
// this Exercise

// Use the following code to complete this exercise. Complete the makeDrink function to enable this coffee shop to operate. The makeDrink function should:

//     Only make a drink if it's a drink in the drinkRequirements object. Otherwise alert: "Sorry, we don't make DRINKNAME".
//     If the drink is part of the drinkRequirements object, reduce the amount of beans by the number of beans required for that drink.
//     If there are not enough beans to make that drink, alert: "Sorry, we're all out of beans!".

// Now give the coffeeShop a money property and the ability to buy more supplies with a buyBeans method. It should reduce the amount of money depending on how many beans are purchased. You decide how much the beans cost

var coffeeShop = {
  money: 100,
  beans: 40,
  drinkRequirements: {
    latte: {
      beans: 10,
      price: 12,
    },
    americano: {
      beans: 5,
      price: 8,
    },
    doubleShot: {
      beans: 15,
      price: 16,
    },
    frenchPress: {
      beans: 12,
      price: 12,
    },
  },
  makeDrink: function (drinkType) {
    if (!this.drinkRequirements[drinkType]) {
      console.log(`Sorry, we don't make ${drinkType}.`);
      return;
    }

    if (this.beans < this.drinkRequirements[drinkType].beans) {
      console.log(`Sorry, we're all out of beans!`);
      return;
    }

    this.beans -= this.drinkRequirements[drinkType].beans;
    console.log(
      `Here is your ${drinkType}. Enjoy!`,
      `We have ${this.beans} beans left.`
    );
  },
  buyBeans: function (beans) {
    this.beans += beans;
    this.money -= beans * 5;
    console.log(
      `You bought ${beans} beans. You have ${this.beans} beans left, and ${this.money} money left.`
    );
  },
  // This is a business! We need more money to buy more beans! Add properties to each drink object so they have a price and a beanRequirement property. Then, create a buyDrink method that increases the amount of money the coffeeShop has (depending on the drink's price) and invokes the makeDrink method.
  buyDrink: function (drinkType) {
    this.money += this.drinkRequirements[drinkType].price;
    this.makeDrink(drinkType);
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("pourOver");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
coffeeShop.buyBeans(10);
coffeeShop.buyDrink("latte");

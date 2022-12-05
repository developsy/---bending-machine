const CoinCreator = require("./CoinCreator");

class AppModel {
  #productList = {};
  #lowestPrice = Infinity;
  #inputMoney = 0;

  makeCoins(inputMoney) {
    this.coins = new CoinCreator(parseInt(inputMoney));
    this.coins.createCoin();
  }

  makeProductList(userInput) {
    for (let info of userInput.split(";")) {
      const productInfo = info.slice(1, info.length).split(",");
      const name = productInfo[0];
      const price = productInfo[1];
      const count = productInfo[2];
      if (price < this.#lowestPrice) this.#lowestPrice = price;
      this.#productList[name] = [price, count];
    }
  }

  checkCondition() {
    if (this.#lowestPrice > this.#inputMoney) return true;
    if (Object.values(this.#productList).every((x) => x[1] === 0)) return true;
    return false;
  }

  initializeMoney(price) {
    this.#inputMoney = price;
  }

  #updateMoney(price) {
    this.#inputMoney -= price;
  }

  buyProduct(productName) {
    const PRICE = this.#productList[productName][0];
    this.#productList[productName][1] -= 1;
    this.#updateMoney(PRICE);
  }

  get showMeTheCoins() {
    return this.coins.showCoins;
  }

  get showMeTheMoney() {
    return this.#inputMoney;
  }
}

module.exports = AppModel;

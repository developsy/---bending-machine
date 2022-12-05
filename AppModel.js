const CoinCreator = require("./CoinCreator");
const { checkProductInfo } = require("./ValidationCheck");

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
      const PRODUCT_INFO = info.slice(1, info.length).split(",");
      const NAME = PRODUCT_INFO[0];
      const PRICE = PRODUCT_INFO[1];
      const COUNT = PRODUCT_INFO[2];
      checkProductInfo(NAME, PRICE, COUNT);
      if (PRICE < this.#lowestPrice) this.#lowestPrice = PRICE;
      this.#productList[NAME] = [PRICE, COUNT];
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

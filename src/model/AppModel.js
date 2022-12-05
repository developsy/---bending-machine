const CoinCreator = require("./CoinCreator");
const { checkProductInfo, checkProductNameInput } = require("./ValidationCheck");
const { VALUES } = require("../utils/Constants");

class AppModel {
  #productList = {};
  #lowestPrice = Infinity;
  #inputMoney = VALUES.INITIAL_INPUT_MONEY;

  makeCoins(inputMoney) {
    this.coins = new CoinCreator(parseInt(inputMoney));
    this.coins.createCoin();
  }

  makeProductList(userInput) {
    for (let info of userInput.split(";")) {
      const PRODUCT_INFO = info.slice(1, info.length - 1).split(",");
      const NAME = PRODUCT_INFO[VALUES.INDEX_PRODUCT_NAME];
      const PRICE = PRODUCT_INFO[VALUES.INDEX_PRODUCT_PRICE];
      const COUNT = PRODUCT_INFO[VALUES.INDEX_PRODUCT_COUNT];
      checkProductInfo(NAME, PRICE, COUNT);
      if (PRICE < this.#lowestPrice) this.#lowestPrice = PRICE;
      this.#productList[NAME] = [parseInt(PRICE), parseInt(COUNT)];
    }
  }

  checkCondition() {
    if (this.#lowestPrice > this.#inputMoney) return true;
    if (Object.values(this.#productList).every((x) => x[VALUES.INDEX_PRODUCT_PRICE] === 0)) return true;
    return false;
  }

  initializeMoney(price) {
    this.#inputMoney = price;
  }

  #updateMoney(price) {
    this.#inputMoney -= price;
  }

  buyProduct(productName) {
    checkProductNameInput(this.#productList, productName);
    const PRICE = this.#productList[productName][VALUES.INDEX_PRODUCT_INFO_PRICE];
    const COUNT = this.#productList[productName][VALUES.INDEX_PRODUCT_INFO_COUNT];
    this.#productList[productName][VALUES.INDEX_PRODUCT_INFO_COUNT] = COUNT - 1;
    console.log(this.#productList);
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

const CoinCreator = require("./CoinCreator");

class AppModel {
  #productList = {};
  #lowestPrice = Infinity;

  makeCoins(inputMoney) {
    this.coins = new CoinCreator(parseInt(inputMoney));
    this.coins.createCoin();
  }

  show() {
    console.log(this.coins.returnCoins());
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
    if (this.#lowestPrice > this.inputMoney) return outputView;
    if (Object.values(this.#productList).every((x) => x[1] === 0)) return outputView;
  }

  updateMoney(price) {
    this.inputMoney -= price;
  }
}

module.exports = AppModel;

const { readInputMoney, readMachineMoney, readProductInfo, readProductToBuy } = require("../view/InputView");
const { printChange, printCoins, printRemainingMoney } = require("../view/OutputView");
const AppModel = require("../model/AppModel");

class VendingMachine {
  #machine = new AppModel();

  start() {
    readMachineMoney(this.#createMachine.bind(this));
  }

  #createMachine(userInput) {
    this.#machine.makeCoins(userInput);
    printCoins(this.#machine.showMeTheCoins);
    readProductInfo(this.#makeProductlist.bind(this));
  }

  #makeProductlist(userInput) {
    this.#machine.makeProductList(userInput);
    readInputMoney(this.#insertMoney.bind(this));
  }

  #insertMoney(userInput) {
    this.#machine.initializeMoney(userInput);
    printRemainingMoney(this.#machine.showMeTheMoney);
    readProductToBuy(this.#buyProduct.bind(this));
  }

  #buyProduct(userInput) {
    this.#machine.buyProduct(userInput);
    if (this.#machine.checkCondition()) {
      printRemainingMoney(this.#machine.showMeTheMoney);
      printChange(this.#machine.showMeTheCoins);
    }
    if (!this.#machine.checkCondition()) {
      printRemainingMoney(this.#machine.showMeTheMoney);
      readProductToBuy(this.#buyProduct.bind(this));
    }
  }
}

module.exports = VendingMachine;

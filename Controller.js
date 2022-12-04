const { readInputMoney, readMachineMoney, readProductInfo, readProductToBuy } = require("./inputView");
const { printChange, printCoins, printRemainingMoney } = require("./OutputView");
const AppModel = require("./AppModel");

class VendingMachine {
  #machine = new AppModel();

  start() {
    readMachineMoney(this.#createMachine.bind(this));
  }

  #createMachine(userInput) {
    this.#machine.makeCoins(userInput);
    this.#machine.show();
  }
}

module.exports = VendingMachine;

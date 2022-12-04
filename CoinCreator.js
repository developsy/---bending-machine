const MissionUtils = require("@woowacourse/mission-utils");

class CoinCreator {
  #COIN_500 = 0;
  #COIN_100 = 0;
  #COIN_50 = 0;
  #COIN_10 = 0;

  constructor(vendingMachineMoney) {
    this.money = vendingMachineMoney;
  }

  makeRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 3);
  }

  createCoin() {
    while (this.money !== 0) {
      this.divideMoney();
    }
  }

  divideMoney() {
    const COIN_UNITS = [500, 100, 50, 10];
    const RANDOM_NUMBER = this.makeRandomNumber();
    if (this.money < COIN_UNITS[RANDOM_NUMBER]) {
      return;
    }
    if (RANDOM_NUMBER === 0) this.addCoin_500;
    if (RANDOM_NUMBER === 1) this.addCoin_100;
    if (RANDOM_NUMBER === 2) this.addCoin_50;
    if (RANDOM_NUMBER === 3) this.addCoin_10;
  }

  addCoin_500() {
    this.#COIN_500 += parseInt(this.money / 500);
    this.money %= 500;
  }

  addCoin_100() {
    this.#COIN_100 += parseInt(this.money / 100);
    this.money %= 100;
  }

  addCoin_50() {
    this.#COIN_50 += parseInt(this.money / 50);
    this.money %= 50;
  }

  addCoin_10() {
    this.#COIN_10 += parseInt(this.money / 10);
    this.money %= 10;
  }

  get coins() {
    return [this.#COIN_500, this.#COIN_100, this.#COIN_50, this.#COIN_10];
  }
}

module.exports = CoinCreator;

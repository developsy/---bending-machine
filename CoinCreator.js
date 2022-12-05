const MissionUtils = require("@woowacourse/mission-utils");

class CoinCreator {
  #COIN_500 = 0;
  #COIN_100 = 0;
  #COIN_50 = 0;
  #COIN_10 = 0;

  constructor(vendingMachineMoney) {
    this.money = vendingMachineMoney;
  }

  createCoin() {
    while (this.money !== 0) {
      const RANDOM_NUMBER = this.#makeRandomNumber();
      this.#divideMoney(RANDOM_NUMBER);
    }
  }

  #makeRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(1, 4) - 1;
  }

  #divideMoney(randomNumber) {
    const COIN_UNITS = [500, 100, 50, 10];
    if (this.money < COIN_UNITS[randomNumber]) {
      return;
    }
    if (randomNumber === 0) this.#addCoin_500();
    if (randomNumber === 1) this.#addCoin_100();
    if (randomNumber === 2) this.#addCoin_50();
    if (randomNumber === 3) this.#addCoin_10();
  }

  #addCoin_500() {
    this.#COIN_500 += parseInt(this.money / 500);
    this.money %= 500;
  }

  #addCoin_100() {
    this.#COIN_100 += parseInt(this.money / 100);
    this.money %= 100;
  }

  #addCoin_50() {
    this.#COIN_50 += parseInt(this.money / 50);
    this.money %= 50;
  }

  #addCoin_10() {
    this.#COIN_10 += parseInt(this.money / 10);
    this.money %= 10;
  }

  get showCoins() {
    return { 500: this.#COIN_500, 100: this.#COIN_100, 50: this.#COIN_50, 10: this.#COIN_10 };
  }
}

module.exports = CoinCreator;

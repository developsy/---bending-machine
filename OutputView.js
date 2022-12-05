const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  printCoins(coins) {
    MissionUtils.Console.print("\n자판기가 보유한 동전");
    for (let coin of Object.keys(coins).reverse()) {
      MissionUtils.Console.print(`${coin}원 - ${coins[coin]}개`);
    }
  },

  printRemainingMoney(money) {
    MissionUtils.Console.print(`\n투입 금액: ${money}원`);
  },

  printChange(coins) {
    MissionUtils.Console.print("잔돈");
    for (let coin of Object.entries(coins)
      .filter((x) => x[1] > 0)
      .reverse()) {
      MissionUtils.Console.print(`${coin[0]}원 - ${coin[1]}개`);
      MissionUtils.Console.close();
    }
  },
};

module.exports = OutputView;

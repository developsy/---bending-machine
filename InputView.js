const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readMachineMoney(handler) {
    MissionUtils.Console.readLine("자판기가 보유하고 있는 금액을 입력해 주세요.\n", (userInput) => {
      handler(userInput);
    });
  },

  readProductInfo() {
    MissionUtils.Console.readLine("상품명과 가격, 수량을 입력해 주세요.\n", (userInput) => {});
  },

  readInputMoney() {
    MissionUtils.Console.readLine("투입 금액을 입력해 주세요.\n.", (userInput) => {});
  },

  readProductToBuy() {
    MissionUtils.Console.readLine("구매할 상품명을 입력해 주세요.\n.", (userInput) => {});
  },
};

module.exports = InputView;

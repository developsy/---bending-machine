const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readMachineMoney(handler) {
    MissionUtils.Console.readLine("자판기가 보유하고 있는 금액을 입력해 주세요.\n", (userInput) => {
      handler(userInput);
    });
  },

  readProductInfo(handler) {
    MissionUtils.Console.readLine("\n상품명과 가격, 수량을 입력해 주세요.\n", (userInput) => {
      handler(userInput);
    });
  },

  readInputMoney(handler) {
    MissionUtils.Console.readLine("\n투입 금액을 입력해 주세요.\n", (userInput) => {
      handler(userInput);
    });
  },

  readProductToBuy(handler) {
    MissionUtils.Console.readLine("구매할 상품명을 입력해 주세요.\n", (userInput) => {
      handler(userInput);
    });
  },
};

module.exports = InputView;

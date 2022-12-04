const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  readMachineMoney() {
    MissionUtils.Console.readLine("자판기가 보유하고 있는 금액을 입력해 주세요.\n", (answer) => {});
  },

  readProductInfo() {
    MissionUtils.Console.readLine("상품명과 가격, 수량을 입력해 주세요.\n", (answer) => {});
  },

  readInputMoney() {
    MissionUtils.Console.readLine("투입 금액을 입력해 주세요.\n.", (answer) => {});
  },

  readProductToBuy() {
    MissionUtils.Console.readLine("구매할 상품명을 입력해 주세요.\n.", (answer) => {});
  },
};

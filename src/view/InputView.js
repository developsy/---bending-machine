const MissionUtils = require("@woowacourse/mission-utils");
const { checkCoinMoney, checkProductNameInput, checkInputMoney } = require("../model/ValidationCheck");

const InputView = {
  readMachineMoney(handler) {
    MissionUtils.Console.readLine("자판기가 보유하고 있는 금액을 입력해 주세요.\n", (userInput) => {
      try {
        checkCoinMoney(userInput);
        handler(userInput);
      } catch (error) {
        MissionUtils.Console.print(error);
        InputView.readMachineMoney(handler);
      }
    });
  },

  readProductInfo(handler) {
    MissionUtils.Console.readLine("\n상품명과 가격, 수량을 입력해 주세요.\n", (userInput) => {
      try {
        handler(userInput);
      } catch (error) {
        MissionUtils.Console.print(error);
        InputView.readProductInfo(handler);
      }
    });
  },

  readInputMoney(handler) {
    MissionUtils.Console.readLine("\n투입 금액을 입력해 주세요.\n", (userInput) => {
      try {
        checkInputMoney(userInput);
        handler(userInput);
      } catch (error) {
        MissionUtils.Console.print(error);
        InputView.readInputMoney(handler);
      }
    });
  },

  readProductToBuy(handler) {
    MissionUtils.Console.readLine("구매할 상품명을 입력해 주세요.\n", (userInput) => {
      try {
        handler(userInput);
      } catch (error) {
        MissionUtils.Console.print(error);
        InputView.readProductToBuy(handler);
      }
    });
  },
};

module.exports = InputView;

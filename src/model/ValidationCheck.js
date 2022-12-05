const { EXCEPTION_MESSAGE } = require("../utils/Constants");

const ValidationCheck = {
  checkCoinMoney(coinMoney) {
    if (/[\D]{1,}/g.test(coinMoney)) throw new Error(EXCEPTION_MESSAGE.COIN_MONEY_NOT_NUMBER);
    if (+coinMoney % 10 !== 0) throw new Error(EXCEPTION_MESSAGE.COIN_MONEY_CANT_DIVIDE_WITH_10);
  },

  checkProductInfo(name, price, count) {
    if (name.length < 1) throw new Error(EXCEPTION_MESSAGE.PRODUCT_INFO_NAME_LENGTH);
    if (/[\D]{1,}/g.test(price)) throw new Error(EXCEPTION_MESSAGE.PRODUCT_INFO_PRICE_NOT_NUMBER);
    if (+price < 100) throw new Error(EXCEPTION_MESSAGE.PRODUCT_INFO_PRICE_UNDER_100);
    if (+price % 10 !== 0) throw new Error(EXCEPTION_MESSAGE.PRODUCT_INFO_PRICE_CANT_DIVIDE_WITH_10);
    if (/[\D]{1,}/g.test(count)) throw new Error(EXCEPTION_MESSAGE.PRODUCT_INFO_COUNT_NOT_NUMBER);
    if (+count < 1) throw new Error(EXCEPTION_MESSAGE.PRODUCT_INFO_COUNT_ZERO);
  },

  checkProductNameInput(productList, productName) {
    if (!Object.keys(productList).includes(productName)) throw new Error(EXCEPTION_MESSAGE.PRODUCT_NAME_NOT_IN_LIST);
  },

  checkInputMoney(inputMoney) {
    if (/[\D]{1,}/g.test(inputMoney)) throw new Error(EXCEPTION_MESSAGE.INSERTED_MONEY_NOT_NUMBER);
  },
};

module.exports = ValidationCheck;

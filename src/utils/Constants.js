const EXCEPTION_MESSAGE = Object.freeze({
  COIN_MONEY_NOT_NUMBER: "[ERROR] 구입 금액이 숫자가 아닙니다.",
  COIN_MONEY_CANT_DIVIDE_WITH_10: "[ERROR] 구입 금액은 10으로 나누어 떨어져야 합니다.",
  PRODUCT_INFO_NAME_LENGTH: "[ERROR] 제품 이름은 한 자리 이상의 문자여야 합니다.",
  PRODUCT_INFO_PRICE_NOT_NUMBER: "[ERROR] 제품 가격이 숫자가 아닙니다.",
  PRODUCT_INFO_PRICE_UNDER_100: "[ERROR] 제품 가격은 최소 100원 이상이어야 합니다.",
  PRODUCT_INFO_PRICE_CANT_DIVIDE_WITH_10: "[ERROR] 제품 가격은 10으로 나누어 떨어져야 합니다.",
  PRODUCT_INFO_COUNT_NOT_NUMBER: "[ERROR] 제품 수량이 숫자가 아닙니다.",
  PRODUCT_INFO_COUNT_ZERO: "[ERROR] 제품 수량은 최소 1개 이상이어야 합니다.",
  PRODUCT_NAME_NOT_IN_LIST: "[ERROR] 제품 리스트에 없는 제품명입니다.",
  INSERTED_MONEY_NOT_NUMBER: "[ERROR] 투입 금액이 숫자가 아닙니다.",
});

const VALUES = Object.freeze({
  INDEX_COIN_500: 0,
  INDEX_COIN_100: 1,
  INDEX_COIN_50: 2,
  INDEX_COIN_10: 3,

  INDEX_PRODUCT_NAME: 0,
  INDEX_PRODUCT_PRICE: 1,
  INDEX_PRODUCT_COUNT: 2,

  INDEX_PRODUCT_INFO_PRICE: 0,
  INDEX_PRODUCT_INFO_COUNT: 1,

  INITIAL_INPUT_MONEY: 0,
});

module.exports = { EXCEPTION_MESSAGE, VALUES };

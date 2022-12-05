const ValidationCheck = {
  checkCoinMoney(coinMoney) {
    if (/[\D]{1,}/g.test(coinMoney)) throw new Error("[ERROR] 구입 금액이 숫자가 아닙니다.");
    if (+coinMoney % 10 !== 0) throw new Error("[ERROR] 구입 금액은 10으로 나누어 떨어져야 합니다.");
  },

  checkProductInfo(name, price, count) {
    if (name.length < 1) throw new Error("[ERROR] 제품 이름은 한 자리 이상의 문자여야 합니다.");
    if (/[\D]{1,}/g.test(price)) throw new Error("[ERROR] 제품 가격이 숫자가 아닙니다.");
    if (+price < 100) throw new Error("[ERROR] 제품 가격은 최소 100원 이상이어야 합니다.");
    if (+price % 10 !== 0) throw new Error("[ERROR] 제품 가격은 10으로 나누어 떨어져야 합니다.");
    if (/[\D]{1,}/g.test(count)) throw new Error("[ERROR] 제품 수량이 숫자가 아닙니다.");
    if (+count < 1) throw new Error("[ERROR] 제품 수량은 최소 1개 이상이어야 합니다.");
  },

  checkProductNameInput(productList, productName) {
    if (!Object.keys(productList).includes(productName)) throw new Error("[ERROR] 제품 리스트에 없는 제품명입니다.");
  },

  checkInputMoney(inputMoney) {
    if (/[\D]{1,}/g.test(inputMoney)) throw new Error("[ERROR] 투입 금액이 숫자가 아닙니다.");
  },
};

module.exports = ValidationCheck;

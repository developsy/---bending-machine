const VendingMachine = require("./Controller");

class App {
  play() {
    const game = new VendingMachine();
    game.start();
  }
}

const aa = new App();
aa.play();
module.exports = App;

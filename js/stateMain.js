var StateMain = {
  preload: function () {
    // Check if mobile
    if (screen.width < 1500) {
      // Force orientation (landscape, portrait)
      game.scale.forceOrientation(true, false);
    }

    game.load.spritesheet('dragon', 'assets/images/main/dragon.png', 120, 85, 4);
  },

  create: function () {
    // dragon
    this.dragon = game.add.sprite(0, 0, 'dragon');
    this.dragon.animations.add('fly', [0,1,2,3], 12, true);
    this.dragon.animations.play('fly');

    this.setListeners();
  },

  setListeners: function () {
    if (screen.width < 1500) {
      game.scale.enterIncorrectOrientation.add(this.wrongWay, this);
      game.scale.leaveIncorrectOrientation.add(this.rightWay, this);
    }
  },

  wrongWay: function () {
    document.getElementById("wrongWay").style.display="block";
  },

  rightWay: function () {
    document.getElementById("wrongWay").style.display="none";
  },

  update: function () {}
}

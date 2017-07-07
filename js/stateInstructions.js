var StateInstructions = {
  preload: function () {
    game.load.spritesheet("buttons", "assets/images/ui/buttons.png", 265, 75);
    game.load.spritesheet('dragon', 'assets/images/main/dragon.png', 120, 85, 4);

    game.load.spritesheet('candy', 'assets/images/main/candy.png',52, 50, 8);
    game.load.image('balloon', 'assets/images/main/thought.png');
  },
  create: function () {
    this.buttonStart = game.add.button(game.world.centerX, game.world.centerY + 100, 'buttons', this.startGame, this, 6, 7, 6);
    this.buttonStart.anchor.set(0.5, 0.5);

    this.dragon = game.add.sprite(game.world.centerX, game.world.centerY, 'dragon');
    this.dragon.anchor.set(0.5, 0.5);
    this.dragon.animations.add('fly', [0,1,2,3], 12, true);
    this.dragon.animations.play('fly');
    game.stage.backgroundColor = '#26C9FF';

    this.inText = game.add.text(game.world.centerX, 30, 'Eat only what the dragon is thinking!!');
    this.inText.fill = '#000000';
    this.inText.anchor.set(0.5, 0.5);
    this.balloonGroup = game.add.group();
    this.balloon = game.add.sprite(0, 0, 'balloon');
    this.think = game.add.sprite(36, 26, 'candy');
    this.balloonGroup.add(this.balloon);
    this.balloonGroup.add(this.think);
    this.balloonGroup.scale.x = 0.5;
    this.balloonGroup.scale.y = 0.5;
    this.balloonGroup.x = this.dragon.x - 20;
    this.balloonGroup.y = this.dragon.y - 100;

  },

  startGame: function () {
    game.state.start('StateMain');
  },

  update: function () {}
}

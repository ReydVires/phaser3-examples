var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

var invader1;
var invader2;
var invader3;

function preload ()
{
    this.load.spritesheet('invader1', 'assets/tests/invaders/invader1.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('invader2', 'assets/tests/invaders/invader2.png', { frameWidth: 44, frameHeight: 32 });
    this.load.spritesheet('invader3', 'assets/tests/invaders/invader3.png', { frameWidth: 48, frameHeight: 32 });
}

function create ()
{
    invader1 = this.add.layer();
    invader2 = this.add.layer();
    invader3 = this.add.layer();

    invader1.createMultiple('invader1', 0, { repeat: 13, setXY: { x: 32, y: 100, stepX: 40 } });

    invader2.createMultiple('invader2', 0, { repeat: 10, setXY: { x: 32, y: 148, stepX: 52 } });
    invader2.createMultiple('invader2', 0, { repeat: 10, setXY: { x: 32, y: 148 + 48, stepX: 52 } });

    invader3.createMultiple('invader3', 0, { repeat: 9, setXY: { x: 32, y: 148+96, stepX: 58 } });
    invader3.createMultiple('invader3', 0, { repeat: 9, setXY: { x: 32, y: 148+96+48, stepX: 58 } });
}

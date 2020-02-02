

describe ('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('#bowl', function(){

    it('test that first score is added to game', function(){
      game.bowl(7);
      expect(game.takeScore()).toBe(7);
    });

    it('test that first and second score is added to game', function(){
      game.bowl(7);
      game.bowl(3);
      expect(game.takeScore()).toEqual(10);
    });
  });

  describe('Game with all gutter bowls',function(){
    it('0 on all rolls',function(){
      for (var i = 0; 1 < 20; i++){
        game.bowl(0);
      }
      expect(game.score()).toEqual(0);
    });
    it('can roll all 2', function(){
      for (var i = 0; 1 < 20; i++){
        game.bowl(2)
      }
      expect(game.score()).toEqual(0);
    })
  });

});

    // it('test for fames sent to game array', function(){
    //   var frame = new Frame();
    //   frame.bowl(3);
    //   frame.bowl(4);
    //   frame.bowl(5);
    //   frame.bowl(5);
    //   expect(this.showBoard).toBe[[3,4],[5,5]];
    // });




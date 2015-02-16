noughtsAndCrossesApp.service('audioService', function($document,$timeout){

    var me = this;
    var audioSprite;

    var spriteData = {
        newGameData: {
            start: 0,
            length: 2
        },
        makeMoveData: {
            start: 4,
            length: 0.5
        }
    };

    var createSpriteElement = function(){
        var document = $document[0];
        audioSprite = document.createElement('audio');
        var source = document.createElement('source');
        audioSprite.appendChild(source);
        source.src = 'sound/sound-sprite.aiff';
        source.type = 'audio/mp3';
        document.body.appendChild(audioSprite);
    };

    var playAudioSprite = function(spriteInformation){
        audioSprite.currentTime = spriteInformation.start;
        audioSprite.play();
        $timeout(function(){
            audioSprite.pause();
        }, spriteInformation.length * 1000);
    };

    me.newGameAudioSprite = function(){
        playAudioSprite(spriteData.newGameData);
    };

    me.makeMoveAudioSprite = function(){
        playAudioSprite(spriteData.makeMoveData);
    };

    createSpriteElement();

});
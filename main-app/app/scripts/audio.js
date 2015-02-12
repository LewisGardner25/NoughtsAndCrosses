noughtsAndCrossesApp.service('audioService', function($document){

    this.audioSprite = $document.getElementById = 'alertTone';

    this.spriteData = {
        alert: {
            start: 0.1,
            length: 1.0
        }
    };

    this.currentSprite = {};

    this.updateTime = function(){
        if(this.currentTime >= this.currentSprite.start + this.currentSprite.length){
            this.pause();
        }
    };

    this.audioSprite.addEventListener('timeupdate',this.updateTime, false);

    this.playSprite = function(){
        if(this.spriteData && this.spriteData.length){
            console.log('sound output');
            this.currentSprite = this.spriteData;
            this.audioSprite.currentTime = this.spriteData.start;
            audioSprite.play();
        }
    };

});
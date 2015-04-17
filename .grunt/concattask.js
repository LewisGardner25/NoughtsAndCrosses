/**
 * Created by lewis.gardner on 03/12/2014.
 */
module.exports = {
    scripts: {
        src:
            [
            'main-app/app/scripts/modules.js',
            'main-app/app/scripts/services/game-api-constants.js',
            'main-app/app/scripts/services/game-api.js',
            'main-app/app/scripts/services/game-model.js',
            'main-app/app/scripts/audio.js',
            'main-app/app/scripts/winnerAlerts.js',
            'main-app/app/scripts/controllers.js'
            ],
        dest: '.build/main-app/app/scripts/built.js'
    }
};
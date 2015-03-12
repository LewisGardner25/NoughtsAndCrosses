/**
 * Created by lewis.gardner on 03/12/2014.
 */
module.exports = {
    scripts: {
        src:
            [
            'main-app/app/scripts/modules.js',
            'main-app/app/scripts/gameApi.js',
            'main-app/app/scripts/gamemodel.js',
            'main-app/app/scripts/audio.js',
            'main-app/app/scripts/gameApiConstants.js',
            'main-app/app/scripts/winnerAlerts.js',
            'main-app/app/scripts/controllers.js'
            ],
        dest: '.build/main-app/app/scripts/built.js'
    }
};
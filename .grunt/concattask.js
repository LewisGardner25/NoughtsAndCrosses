/**
 * Created by lewis.gardner on 03/12/2014.
 */
module.exports = {
    scripts: {
        src:
            [
            'main-app/app/scripts/app.js',
            'main-app/app/scripts/controllers.js',
            'main-app/app/scripts/gamemodel.js',
            'main-app/app/scripts/gameApi.js',
            'main-app/app/scripts/playerServices.js'
            ],

        dest: '.build/main-app/app/scripts/built.js'
    }
};
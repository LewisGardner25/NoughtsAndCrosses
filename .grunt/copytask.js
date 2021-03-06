/**
 * Created by lewis.gardner on 03/12/2014.
 */
module.exports = {
    images: {
        cwd: '',
        src: 'main-app/app/images/*',
        dest: '.build/',
        expand: true
    },
    sound: {
        cwd:'',
        src:'main-app/app/sound/*.mp3',
        dest: '.build/',
        expand: true
    },

    html: {
        cwd: '',
        src: 'main-app/app/index.html',
        dest: '.build',
        expand: true
    },
    angular: {
        cwd: 'bower_components',
        src: 'angular/*',
        dest: '.build/main-app/app',
        expand: true
    }
};
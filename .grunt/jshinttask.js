/**
 * Created by lewis.gardner on 03/12/2014.
 */
module.exports = {
    script: {
        cwd: '',
        src: 'main-app/app/scripts/*.js',
        dest: '.build/',
        expand: true
    },
    file: {
        cwd: '',
        src: '.grunt/*.js',
        dest: '.build/',
        expand: true
    },
    grunt: {
        cwd: '',
        src: '.grunt/*.js',
        dest: '.build/',
        expand: true
    },
    options: {
        quotmark: 'single'
    }
};
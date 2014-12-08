/**
 * Created by lewis.gardner on 03/12/2014.
 */
module.exports = {
    scripts: {
        files: 'main-app/app/scripts/*.js',
        tasks: ['jshint','clean:scripts','concat:scripts'],
        options: {
            spawn: false
        }
    },
    images: {
        files: 'main-app/app/images/*.*',
        tasks: ['clean: images','copy:images'],
        options: {
            spawn: false
        }
    },
    grunt: {
        files: '.grunt/*.js',
        tasks: ['clean:images','copy:images'],
        options: {
            spawn: false
        }
    },
    less: {
        files: 'main-app/app/less/*.*',
        tasks: ['clean:html','copy:html'],
        options: {
            spawn: false
        }
    },
    html: {
        files: 'main-app/app/index.html',
        tasks: ['clean:html','copy:html'],
        options: {
            spawn: false
        }
    },
    angular: {
        files: ['angular/*'],
        tasks: ['nostart'],
        options: {
            spawn: false
        }
    }
};
/**
 * Created by lewis.gardner on 03/12/2014.
 */
module.exports = {
    src: {
        cwd: '',
        src: '.less',
        dest: '.build/main-app/app/css',
        expand: true,
        ext: '.min.css'
    },
    options: {
        compress: true,
        csslint: {
            'unique-headings': false
        }
    }
};
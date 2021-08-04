module.exports = function(grunt){

    var jquery = require('jquery');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    sourcemap: false,
                    compress: false,
                    yuicompress: false,
                    style: 'expanded',
                },
                files: {
                    'public/css/styles.css' : 'src/sass/styles.scss',
                    'public/css/slick.css' : 'node_modules/slick-carousel/slick/slick.scss'
                }
            },
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            dist: {
                files: {
                    'public/js/app.js': 'src/js/app.js',
                    'public/js/jquery.js': 'node_modules/jquery/dist/jquery.js',
                    'public/js/slick.js': 'node_modules/slick-carousel/slick/slick.js'
                }
            }
        },
        watch: {
            css: {
                files: './src/sass/*.scss',
                tasks: ['sass'],
            },
            js: {
                files: './src/js/*.js',
                tasks: ['babel']
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-css-import');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default',['watch']);   
}
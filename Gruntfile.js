/* globals require: false */

module.exports = function(grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    var appJs = ['src/*.js', 'debug.js'];

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            grunt: {
                src: ['Gruntfile.js']
            },
            app: {
                src: appJs
            }
        },

        clean: {
            js: ['dist/*']
        },

        concat: {
            options: {
                separator: ';',
                stripBanners: false,
                nonull: true
            },
            dist: {
                src: appJs,
                dest: 'dist/app.js'
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['clean']
            },
            appJs: {
                files: appJs,
                tasks: ['concat:dist'],
                options: { livereload: true }
            }
        }
    });

    grunt.registerTask('default', ['clean:js', 'concat:dist', 'watch']);
    grunt.registerTask('test', ['jshint']);
};

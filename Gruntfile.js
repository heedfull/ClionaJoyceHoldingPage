module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'style.css' : 'sass/style.scss'
                }
            }
        },
        watch: {
            sass: {
                files: 'sass/*.scss',
                tasks: ['sass']
            }
        },
        browserSync: {
            bsFiles: {
                src : ['*.html','*.css','*.js']
            },
            options: {
                server: {
                    baseDir: "./"
                },
                watchTask: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default',['browserSync','watch']);
} 
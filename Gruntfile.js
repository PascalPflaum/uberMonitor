module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        mochaTest : {
            build : {
                src : ['test/unit/**/*.js'],
                options : {
                    reporter : 'spec',
                    checkLeaks : true,
                    ignoreLeaks : false,
                    require : 'test/setup.js'
                }
            }
        },
        jshint : {
            build : ['Gruntfile.js', 'monitor.js','output/**/*.js', 'test/unit/**/*.js'],
            options : {
                esversion : 6
            }
        }
    });


    grunt.registerTask('unit', ['mochaTest:build']);
    grunt.registerTask('hint', ['jshint']);
    grunt.registerTask('all', ['hint', 'unit']);
    grunt.registerTask('default', ['all']);
};
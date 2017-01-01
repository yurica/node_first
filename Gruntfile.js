module.exports = function(grunt){
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec',
        'grunt-link-checker'
    ].forEach(function(task){
       grunt.loadNpmTasks(task);
    });

    grunt.initConfig({
        cafemocha: {
            all: { src: 'qa/tests-*.js', options: {ui: 'tdd'},}
        },
        jshint: {
            app: ['node.js', 'public/js/**/*.js', 'lib/**/*.js'],
            qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
        },
        linkChecker: {
            dev: {
                site: 'localhost',
                options: {
                    initialPort: 3000,
                },
                maxDepth: 2
            }
        },
    });

    grunt.registerTask('default', ['cafemocha', 'jshint', 'linkChecker']);
};
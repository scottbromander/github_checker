module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            client: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular-animate/angular-animate.min.js",
                    "angular-animate/angular-animate.min.js.map",
                    "angular-aria/angular-aria.min.js",
                    "angular-aria/angular-aria.min.js.map",
                    "angular-material/angular-material.min.js",
                    "angular-material/angular-material.min.css",
                    "angular-messages/angular-messages.min.js",
                    "angular-messages/angular-messages.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            html: {
                expand: true,
                cwd: "client",
                src: "views/index.html",
                dest: "server/public/assets/"
            },
            style: {
                expand: true,
                cwd: "client",
                src: 'style/style.css',
                dest: 'server/public/assets/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};
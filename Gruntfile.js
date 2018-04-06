module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ['src/assets/js/vendor/*.js', 'src/assets/js/*.js'],
        dest: 'build/assets/js/script.min.js'
      },
      css: {
        src: ['src/assets/css/vendor/*.css', 'src/assets/css/*.css'],
        dest: 'build/assets/css/style.min.css'
      }
    },

    sass: {
      build: {
        files: [
          {
            src: 'src/assets/scss/main.scss',
            dest: 'src/assets/css/style.css'
          }
        ]
      }
    },

    uglify: {
      build: {
        files: [
          {
            src: 'build/assets/js/script.min.js',
            dest: 'build/assets/js/script.min.js'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'sass', 'uglify']);
};

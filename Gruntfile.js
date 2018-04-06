module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ['src/assets/js/*.js', 'src/assets/js/vendor/*.js'],
        dest: 'build/assets/js/script.js'
      },
      css: {
        src: ['src/assets/css/*.css', 'src/assets/css/vendor/*.css'],
        dest: 'build/assets/css/style.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);
};

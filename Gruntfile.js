module.exports = function(grunt) {
  grunt.initConfig({
    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: 'src/assets/images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'build/assets/images/'
          }
        ]
      }
    },

    concat: {
      js: {
        src: ['src/assets/js/*.js', '!src/assets/js/*.min.js'],
        dest: 'src/assets/js/script.min.js'
      },
      css: {
        src: ['src/assets/css/*.css', '!src/assets/css/*.min.css'],
        dest: 'src/assets/css/style.min.css'
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
            src: 'src/assets/js/script.min.js',
            dest: 'build/assets/js/script.min.js'
          }
        ]
      }
    },

    cssmin: {
      build: {
        files: [
          {
            src: 'src/assets/css/style.min.css',
            dest: 'build/assets/css/style.min.css'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['concat', 'sass']);
  grunt.registerTask('build', ['uglify', 'cssmin', 'imagemin']);
};

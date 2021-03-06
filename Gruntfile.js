module.exports = function(grunt) {
  grunt.initConfig({
    aws: grunt.file.readJSON("aws-keys.json"),
    aws_s3: {
      options: {
        accessKeyId: "<%= aws.AWSAccessKeyId %>",
        secretAccessKey: "<%= aws.AWSSecretKey %>",
        region: "us-west-1"
      },
      dist: {
        options: {
          bucket: "delamadrid.tech",
          differential: true
        },
        files: [
          {
            expand: true,
            cwd: "build",
            src: ["**"],
            dest: ""
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-aws-s3");

  grunt.registerTask("deploy", "aws_s3");
};

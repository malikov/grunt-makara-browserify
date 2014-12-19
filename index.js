'use strict';

var bksb = require('browserify-kraken-spudbundle');
var path = require('path');

module.exports = function (grunt) {
    grunt.registerTask('spundle-me-lots', 'Write out browserify i18n bundles', function () {
        bksb.build(this.options().appRoot, this.async());
    });

    return {
        options: {
            appRoot: path.resolve(__dirname, '..')
        }
    };
};

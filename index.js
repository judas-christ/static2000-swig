//swig adapter for static2000
//swig adapter for static2000
'use strict';

var swig = require('swig');

module.exports = {
    templateExtension: '.html',
    templateGlob: '*.html',
    globalsInclude: '{% import "./includes/globals.html" as globals %}\n',
    compile: function(source, options) {
        var swigOptions = {
            filename: options.filename
        };
        return swig.compile(source, swigOptions);
    },
    render: function(source, options) {
        var swigOptions = {
            filename: options.filename,
            locals: options
        };
        return swig.render(source, swigOptions);
    }
};

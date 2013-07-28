
var require = {
    // Initialize the application with the main application file
    deps: ['main'],

    paths: {
        // jQuery
        jquery:                      'vendor/jquery.min',


        // Underscore
        underscore:                  'vendor/underscore.min',

        // Backbone
        backbone:                    'vendor/backbone-min',

        // Date library
        moment:                      'vendor/moment.min',

        // Date library
        d3:                          'vendor/d3.min'

    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        moment: {
            exports: 'moment'
        },

        underscore: {
            exports: '_'
        }
    }
};
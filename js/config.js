
var require = {
    // Initialize the application with the main application file
    deps: ['app'],

    paths: {
        // jQuery
        jquery:                      'vendor/jquery.min',


        // Underscore
        underscore:                  'vendor/underscore.min',

        // Backbone
        backbone:                    'vendor/backbone-min',

        // Date library
        moment:                      'vendor/moment.min'

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
// for development purpose
require.config({
    urlArgs: "bust=" + (new Date()).getTime()
});

var lib = '../bower_components/';

requirejs.config({
    paths: {
        'text': lib + 'requirejs-text/text',
        'durandal':lib + 'durandal/js',
        'plugins' : lib + 'durandal/js/plugins',
        'transitions' : lib + 'durandal/js/transitions',
        'knockout': lib + 'knockout.js/knockout.debug',
        'bootstrap': lib + 'bootstrap/dist/js/bootstrap',
        'jquery': lib + 'jquery/jquery',
        'q': lib + 'q/q',
        'breeze': lib + 'breezejs/breeze.debug',
        'toastr': lib + 'toastr/toastr',
        'moment': lib + 'moment/moment',
        'dateBindings': lib + 'knockout-date-bindings/knockout-date-bindings',
        'fileBindings': lib + 'knockout-file-bindings/knockout-file-bindings',
        'fastclick': lib + 'fastclick/lib/fastclick',
    },
    map: {
      '*': {
        'Q': 'q',
        'ko': 'knockout',
      }
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'fastclick': {
              exports: 'FastClick'
        },
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap', 'fastclick', 'Q', 'dateBindings'],  
    function (system, app, viewLocator, bootstrap, FastClick, Q, dateBindings) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Starter Kit';

    app.configurePlugins({
        router:true,
        dialog: true,
        widget: true,
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
//        viewLocator.useConvention();


        // let's be friendly to mobile users
        FastClick.attach(document.body);

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('shell/shell', 'entrance');
    });
});
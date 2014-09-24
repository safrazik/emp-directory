// for development purpose
//require.config({
//    urlArgs: "bust=" + (new Date()).getTime()
//});

var lib = '../bower_components/';

requirejs.config({
  // uncomment the path to the debug version of a library during development
    paths: {
        'text': lib + 'requirejs-text/text',
        'durandal':lib + 'durandal/js',
        'plugins' : lib + 'durandal/js/plugins',
        'transitions' : lib + 'durandal/js/transitions',
//        'knockout': lib + 'knockout.js/knockout.debug',
        'knockout': lib + 'knockout.js/knockout',
//        'bootstrap': lib + 'bootstrap/dist/js/bootstrap',
        'bootstrap': lib + 'bootstrap/dist/js/bootstrap.min',
        'jquery': lib + 'jquery/jquery',
        'q': lib + 'q/q',
//        'breeze': lib + 'breezejs/breeze.debug',
        'breeze': lib + 'breezejs/breeze.min',
//        'toastr': lib + 'toastr/toastr',
        'toastr': lib + 'toastr/toastr.min',
//        'moment': lib + 'moment/moment',
        'moment': lib + 'moment/min/moment.min',
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

    app.title = 'Breeze Employee Directory';

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
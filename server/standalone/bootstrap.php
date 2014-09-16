<?php

// prevent direct access
if(strpos($_SERVER['PHP_SELF'], 'bootstrap.php') !== false){
    header('HTTP/1.0 404 Not Found');
    exit();
}

$loader = require __DIR__.'/vendor/autoload.php';

$app = new Adrotec\BreezeJs\Framework\StandaloneApplication();

$app->enableDebug();

$app->setAutoloader($loader);

// uncomment to use annotations
//$app->enableAnnotations();

$app->setConnection(array(
    'driver' => 'pdo_mysql',
    'host' => 'localhost',
    'dbname' => 'tmp1',
    'user' => 'root',
    'password' => ''
));

// using xml mappings
$app->addMapping(array(
    'namespace' => 'EmpDirectory\Model',
    'type' => 'xml',
    'extension' => '.orm.xml', // default ".dcm.xml"
    'doctrine' => __DIR__ . '/src/EmpDirectory/config/doctrine', // doctrine directory
    'serializer' => __DIR__ . '/src/EmpDirectory/config/serializer', // [optional] serializer metadata directory
    'validation' => __DIR__ . '/src/EmpDirectory/config/validation.xml', // [optional] validator file
));

// or if you want to use annotations
//$app->addMapping(array(
//    'namespace' => 'EmpDirectory\Model',
//    'type' => 'annotation',
//    'doctrine' => __DIR__ . '/src/EmpDirectory', // optional
//));

$app->addResources(array(
    // Resource name => Class name
    'Employees' => 'EmpDirectory\Model\Employee',
    'Jobs' => 'EmpDirectory\Model\Job',
    'Departments' => 'EmpDirectory\Model\Department',
));

$app->build();

return $app;
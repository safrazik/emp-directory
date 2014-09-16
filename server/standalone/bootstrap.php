<?php

// prevent direct access
if (strpos($_SERVER['PHP_SELF'], 'bootstrap.php') !== false) {
    header('HTTP/1.0 404 Not Found');
    exit();
}

$loader = require __DIR__ . '/vendor/autoload.php';

$app = new Adrotec\BreezeJs\Framework\StandaloneApplication();

$app->enableDebug();

$app->setAutoloader($loader);

// uncomment to use annotations
//$app->enableAnnotations();

$conn = array(
    'driver' => 'pdo_sqlite',
    'path' => __DIR__ . '/../emp_directory.sqlite',
);

// live demo app specific setup (PosgreSQL)
$dbEnv = getenv('HEROKU_DB');
if ($dbEnv == 'pgsql') {
    $conn = array(
        'driver' => 'pdo_pgsql',
        'host' => getenv('DB_HOST'),
        'dbname' => getenv('DB_NAME'),
        'user' => getenv('DB_USER'),
        'password' => getenv('DB_PASSWORD'),
        'port' => getenv('DB_PORT')
    );
}

$app->setConnection($conn);

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

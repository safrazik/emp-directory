<?php

$loader = require __DIR__ . '/../../vendor/autoload.php';
$database = require __DIR__.'/../config/database.php';

$app = new Adrotec\BreezeJs\Framework\StandaloneApplication();

$app->enableDebug();

$app->setAutoloader($loader);

$app->enableAnnotations();

$conn = $database['connections'][$database['default']];

$connection = [
    'driver' => 'pdo_'.$conn['driver'],
    'host' => $conn['host'],
    'dbname' => $conn['database'],
    'user' => $conn['username'],
    'password' => $conn['password']
];

$app->setConnection($connection);

$app->addResources([
    // Resource name => Class name
    'Employees' => 'Employee',
    'Jobs' => 'Job',
    'Departments' => 'Department',
]);

$app->build();

return $app;

<?php

// this file is a helper for doctrine to run commands with your setup
// open your terminal and execute the following
// php venror/bin/doctrine


// prevent direct access
if(strpos($_SERVER['PHP_SELF'], 'cli-config.php') !== false){
    header('HTTP/1.0 404 Not Found');
    exit();
}

// cli-config.php
$app = require_once "bootstrap.php";

$entityManager = $app->getObjectManager();

return \Doctrine\ORM\Tools\Console\ConsoleRunner::createHelperSet($entityManager);
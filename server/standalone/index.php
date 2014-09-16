<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$app = require_once 'bootstrap.php';

// allow cross origin request
$app->enableCors();

$app->run();
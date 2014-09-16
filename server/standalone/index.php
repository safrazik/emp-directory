<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$app = require_once 'bootstrap.php';

// allow cross origin request
$app->enableCors();

echo '<pre>';

$em = $app->getObjectManager();
$serializer = $app->getSerializer();

$employees = array();

$emps = $em->getRepository('EmpDirectory\Model\Employee')->findAll();

$excluded = array('id', 'profilePicContent', 'dateOfBirth', 'directReports', 
    'department', 'job', 'manager');

foreach($emps as $emp){
    $refl = new \ReflectionObject($emp);
    $employee = array();

    $dateOfBirth = $emp->getDateOfBirth();    
    $employee['dateOfBirth'] = $dateOfBirth->format('Y-m-d');
    $employee['department'] = $emp->getDepartment()->getName();
    $employee['job'] = $emp->getJob()->getTitle();
    if($emp->getManager()){
        $employee['manager'] = $emp->getManager()->getFirstName()
                .' '.$emp->getManager()->getLastName();
    }
    
    foreach($refl->getProperties() as $prop){
        $propName = $prop->getName();
        if(in_array($propName, $excluded)){
            continue;
        }
        $method = 'get'.$propName;
        if(!method_exists($emp, $method)){
            continue;
        }
        $employee[$prop->getName()] = $emp->$method();
    }
    $employees[$emp->getFirstName().' '.$emp->getLastName()] = $employee;
}

//print_r($employees);

echo var_export($employees);


//echo $serializer->serialize($employees, 'json');


//$app->run();
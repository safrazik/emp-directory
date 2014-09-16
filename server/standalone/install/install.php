<?php

// RUN $ php install.php

use EmpDirectory\Model\Department;
use EmpDirectory\Model\Job;
use EmpDirectory\Model\Employee;

global $departmentsData, $departments;

require __DIR__ . '/data.php';


$app = require_once __DIR__.'/../bootstrap.php';

$em = $app->getObjectManager();


$departments = array();
$jobs = array();
$employees = array();

function installDepartments()
{
    global $departmentsData, $departments;

    foreach ($departmentsData as $departmenName) {
        $department = new Department();
        $department->setName($departmenName);
        $department->setDescription('');
//        $em->persist($department);
        $departments[$departmenName] = $department;
    }
}

function installJobs()
{
    global $jobsData, $jobs;

    foreach ($jobsData as $jobTitle) {
        $job = new Job();
        $job->setTitle($jobTitle);
        $job->setDescription('');
        $jobs[$jobTitle] = $job;
    }
}

function installEmployees()
{
    global $employeesData, $employees, $departments, $jobs;
    
    foreach($employeesData as $employeeData){
        $employee = new Employee();
        foreach($employeeData as $property => $value){
            $method = 'set'.$property;
            if($property == 'manager'){
                continue;
            }
            if($property == 'job'){
                $value = $jobs[$value];
            }
            if($property == 'department'){
                $value = $departments[$value];
            }
            if($property == 'dateOfBirth'){
                $value = new \DateTime($value);
            }
            $employee->$method($value);
        }
        $employees[$employee->getFirstName().' '.$employee->getLastName()] = $employee;
    }
    
}

installDepartments();
installJobs();
installEmployees();

foreach($departments as $department){
    $em->persist($department);
}

foreach($jobs as $job){
    $em->persist($job);
}

foreach($employees as $employee){
    $em->persist($employee);
}

// assign manager
foreach($employeesData as $employeeName => $employeeData){
    if(isset($employeeData['manager'])){
        $employees[$employeeName]->setManager($employees[$employeeData['manager']]);
    }
}

try {
    $em->flush();
    "SUCCESSFULLY INSTALLED";
}
catch(\Exception $e){
    echo "ERROR OCCURED";
}
<?php

global $departmentsData, $departments;

require __DIR__ . '/data.php';

$em = null;


$departments = array();
$jobs = array();
$employees = array();

function installDepartments()
{
    global $departmentsData, $departments;

    foreach ($departmentsData as $departmenName) {
        $department = new Department();
        $department->setName($departmenName);
//        $em->persist($department);
        $departments[$departmenName] = $department;
    }
}

function installJobs()
{
    global $jobsData, $jobs;

    foreach ($jobsData as $jobTitle) {
        $job = new Job();
        $job->setName($jobTitle);
        $jobs[$jobTitle] = $job;
    }
}

function installEmployees()
{
    global $employeesData, $employees, $departments, $jobs;
    
    foreach($employeesData as $employeeData){
        $employee = new Employee();
        foreach($employeeData as $property => $value){
            $employee->${'set'.$property}($value);
        }
    }
    
}

installDepartments();
installJobs();
installEmployees();
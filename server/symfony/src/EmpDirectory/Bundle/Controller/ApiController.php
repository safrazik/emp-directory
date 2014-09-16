<?php

namespace EmpDirectory\Bundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class ApiController extends Controller
{

    public function apiAction(Request $request)
    {
        $app = $this->container->get('adrotec_webapi');

        $app->addResources(array(
            'Employees' => 'EmpDirectory\Bundle\Entity\Employee',
            'Departments' => 'EmpDirectory\Bundle\Entity\Department',
            'Jobs' => 'EmpDirectory\Bundle\Entity\Job',
        ));

//        $request->attributes->set('resource', $request->attributes->get('resource'));
        $response = $app->handle($request);
        
        return $response;
    }

}

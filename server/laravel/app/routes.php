<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('hello');
});


function apiRequest($resource){
    $app = require_once __DIR__.'/models/bootstrap.php';
    $app->enableCors();
    $request = Request::instance();
    $request->attributes->set('resource', $resource);
    $response = $app->handle($request);
    $response->send();
}

Route::get('/api/{resource}', function($resource){
    return apiRequest($resource);
});

Route::post('/api/SaveChanges', function()
{
    return apiRequest('SaveChanges');
});

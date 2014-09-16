![LOGO](client/images/logo-small.png)

# **EmpDirectory** sample application

## <a href="client/" class="btn btn-primary btn-lg">LIVE DEMO</a>

## Introduction

EmpDirectory is a sample application for demonstrating the usage of [Breeze JS](http://www.breezejs.com) library. This sample tries to show the features of breezejs as many as possible while keeping the data model as simple as possible.

## EmpDirectory Client

### Features

- Handling navigation properties (associations) auto**magic**ally
  - **(Lookups)** Employee's job and department are not fetched along with the employees, but queried separately when application loads and breeze take the responsibility to assign their department and job.
  - If an employee's manager is already available in the cache, we don't have to query the server again to get him/her.
  - **(Lazy loading)** When there are any direct reports of employees available in the cache, list them, and fetch all the direct reports from server, since we don't know if all the direct reports of that employee are available in the cache
- **(Unit of Work)** Saving all the changes in a single transaction
- **([Extending Entities](http://www.breezejs.com/documentation/extending-entities))** `fullName` is a computed property of `firstName + ' ' + lastName` which is made possible by MetadataStore's `registerEntityTypeCtor` method
- Client side and server side [validations](http://www.breezejs.com/documentation/validation). Enter "lorem" as firstName and try to save, to see an example of server side error.
- Showing the usage of date handling with [momentjs](http://momentjs.com) with [knockout date bindings](https://github.com/adrotec/knockout-date-bindings)
- Demonstrating HTML5 image upload with breeze and [knockout file bindings](https://github.com/adrotec/knockout-file-bindings)
- Demonstrates how a breeze CRUD implementation can be done with a Durandal widget

### Conventions used

- `getXXX` methods of dataservice are synchronous and return the result(s) while `findXXX` methods are asynchronous and return a promise of result(s)
- view and viewmodel (of a durandal module) are grouped by the name of the module and named as the names of the module itself

## EmpDirectory server

The server implementation uses [breeze.server.php](github.com/adrotec/breeze.server.php), a library to create breeze compatible servers in PHP with Doctrine 2 ORM.

### Features

- Mappings in Annotations, YAML or XML
- Demonstrating Doctrine life cycle callbacks: `Employee::saveProfilePic()` method is called before an entity is inserted or updated in the database.
- Demonstrating the use of custom properties that are not persisted in the database: `Employee::$profilePicContent` is a write-only property that stores the base64-encoded profile pic image string and is not a doctrine-mapped property.
- Demonstrating how you can handle file uploads in modern applications with just Doctrine itself, without using http file uploading technology: when `Employee::saveProfilePic()` method is called, it reads `Employee::$profilePicContent`, decodes the base64 string, saves it in a file and sets the `Employee::$profilePic` to the newly created file path.
- Demonstrating how you can control the JSON API with JMS Serializer: Since `Employee::$oldProfilePic` is an internal property, it is excluded from the serialized results.
- Demonstrating validations with Symfony validation constraints:: `Employee::$firstName` is required, `Employee::$website` should be a url.
- Demonstrating server side custom validation errors: `Employee::$firstName` cannot be equal to "lorem" or "ipsum"

### Server Variations

There are three varieties of the same application to prove the fact that `breeze.server.php` is a framework agnostic library.

#### 1. standalone

- Doctrine with XML mappings, Serializer with XML mappings and Validator with XML Mappings
- Demonstrating the usage of `StandaloneApplication` class from the framework
- No other dependencies!
- You can run [doctrine commands](http://docs.doctrine-project.org/projects/doctrine-orm/en/latest/reference/tools.html) by typing `$ php vendor/bin/doctrine` in a terminal from the path where `index.php` lives.

#### 2. Symfony

- All mappings in YAML format.
- Demonstrating the usage of `Application` class from the framework
- Demonstrating how to make the `Application` class as a service, leveraging the existing `doctrine.orm.entity_manager`, `jms_serializer` and `validator` services.
- Demonstrating how you can use routing and the current request object without creating a new one
- You can list doctrine commands by typing `$ php app/console list doctrine`
- [Learn more](http://symfony.com/doc/current/book/doctrine.html) about symfony specific doctrine stuff.

#### 3. laravel

- All mappings in Annotations format.
- Demonstrating how you can use database configuration from `config/database.php` file.
- Demonstrating how you can use routing and the current request object without creating a new one
- You can run [doctrine commands](http://docs.doctrine-project.org/projects/doctrine-orm/en/latest/reference/tools.html) by typing `$ php vendor/bin/doctrine` from the same path where you run `artisan` commands.

## Installation

### Server

- Place this folder (`EmpDirectory`) into a web accessible folder. If you are using XAMPP, `htdocs` should be the web root.
- run `composer update` from `server/standalone` directory. If you are interested in the `server/symfony` or `server/laravel` implementations, do accordingly.

### Database

- A MySql dump is available in `server/mysql-dump.sql` file.
- Create a database, import the dump file and, change the database configuration in:  
  - standalone - `bootstrap.php`  
  - symfony - app/config/parameters.yml  
  - laravel - app/config/database.php

### Client

- the client application uses [bower](http://bower.io/) to manage client side dependencies. run `bower install` from `client` directory to install the dependencies.
- if you want the client to work with `server/symfony` or `server/laravel` change the serviceName in `client/dataservice.js` to the corresponding server location.

### Running the application

- Open `http://localhost/EmpDirectory/client` to view the application
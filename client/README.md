# <img alt="" src="images/logo.png" style="height: 50px; margin-top: -10px;"> **EmpDirectory** sample application

## Introduction

EmpDirectory is a sample application for demonstrating the usage of [Breeze Js](http://www.breezejs.com) library. This sample tries to show the features of breezejs as many as possible while keeping the data model as simple as possible.

## Features

### Breeze js features shown in the app

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

## Installation

the client application uses [bower](http://bower.io/) to manage client side dependencies. run `bower install` from the application directory to install the dependencies.

### Conventions used

- `getXXX` methods of dataservice are synchronous and return the result(s) while `findXXX` methods are asynchronous and return a promise of result(s)
- view and viewmodel (of a durandal module) are grouped by the name of the module and named as the names of the module itself
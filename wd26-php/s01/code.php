<?php 
// a single line comment
# a single line comment
/* a multi line comment */

//Variable - used to store values or contain data

$name = "John Smith";
$email = "johnsmith@gmail.com";

// Constant
define("PI", 3.1416);

const MESSAGE = "Welcome to PHP";

//DATA TYPES

// Strings

$state = "New York";
$country = "United States of America";
$address = $state.", ".$country; //concatenation via dot notation

$address2 = "$state, $country"; //concatenation via double qoutes

//Integers

$age = 31;
$headCount = 26;

//Floats
$grade = 98.2;
$temperature = 39.8;

//Boolean
$hasTravelledAbroad = false;
$hasSymptoms = true;

//Null
$spouse = null;
$middleName = null;

//Array
$grades = array (98.7, 92.1, 90.7, 94.6);

//Objects
$personObj = (object) [
    "fullName" => "John Smith",
    "isMarried" => false,
    "age" => 35,
    "address" => (object)[
        "state" => "Washington DC",
        "country" => "United States of America"
    ]
];

$gradesObj = (object) [
    "firstGrading" => 98.7,
    "secondGrading" => 92.1,
    "thirdGrading" => 90.7,
    "fourthGrading" => 94.6
];

//Assignment Operators

$x = 56.2;
$y = 912.6;

$isLegalAge = true;
$isRegistered = false;

?>


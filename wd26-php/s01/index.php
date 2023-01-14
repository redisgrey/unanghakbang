
<?php require_once "./code.php" ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>S01 : PHP Basics and Selection Control Structures</title>
</head>
<body>
    <h1>Echoing Values</h1>
    
    <p> 
        <?php 
            echo "Hello KodeGo Student";
            
        ?>
    </p>

    <p> 
        <!-- PHP variables are called with double qoutes -->
        <?php 
            echo "Good day $name! Your given email is $email.";
            
        ?>
    </p>

    <p> 
        <!-- PHP constants are called without qoutes -->
        <?php 
            echo PI;
            
        ?>
    </p>

    <p> 
        <!-- PHP constants are called without qoutes -->
        <?php 
            echo MESSAGE;
            
        ?>
    </p>

    <p> 
        <!-- PHP variables are called with double qoutes -->
        <?php 
            echo "I live in $address";
            
        ?>
    </p>

    <p> 
        <!-- PHP variables are called with double qoutes -->
        <?php 
            echo "I live in $address2";
            
        ?>
    </p>

    <p> 
        <!-- PHP variables are called with double qoutes -->
        <?php 
            echo "I am $age years old";
            
        ?>
    </p>

    <p> 
        <!-- PHP variables are called with double qoutes -->
        <?php 
            echo "We are $headCount students under Ms. Jelly.";
            
        ?>
    </p>

    <p> 
        <!-- PHP variables are called with double qoutes -->
        <?php 
            echo "Alexis got $grade in Programming";
            
        ?>
    </p>

    <p> 
        <!-- PHP variables are called with double qoutes -->
        <?php 
            echo "My temperature was at $temperature degrees last weekend";
            
        ?>
    </p>

    <p> 
        <!-- PHP Booleans and Null variables will not appear in browser -->
        <?php 
            echo "$hasTravelledAbroad";
            
        ?>
    </p>

    <p> 
        <!-- PHP Booleans and Null variables will not appear in browser -->
        <?php 
            echo "$hasSymptoms";
            
        ?>
    </p>

    <p> 
        <!-- PHP Booleans and Null variables will not appear in browser -->
        <?php 
            echo "$spouse";
            
        ?>
    </p>

    <p> 
        <!-- PHP Booleans and Null variables will not appear in browser -->
        <?php 
            echo "$middleName";
            
        ?>
    </p>

    
    <p> 
        <!-- gettype function - returns the type of data -->
        <?php 
            echo gettype($hasTravelledAbroad);
            
        ?>
    </p>

    <p> 
        <!-- var_dump function - returns the details about the variable -->
        <?php 
            echo var_dump($spouse);
            
        ?>
    </p>

    <p> 
        <!-- var_dump function - returns the details about the variable -->
        <?php 
            echo var_dump($hasTravelledAbroad);
            
        ?>
    </p>

    <h2>Arrays</h2>
    <p> 
        <!-- Array variables -->
        <?php 
            echo $grades[0];
            
        ?>
    </p>

    <h2>Objects</h2>
    <p> 
        <!-- Object variables -->
        <?php 
            echo $personObj -> address -> state;
            
        ?>
    </p>

    <p> 
        <!-- Object variables -->
        <?php 
            echo $gradesObj -> firstGrading;
            
        ?>
    </p>

    <h2>Arithmetic Operators</h2>
    <p>
        Sum: 
        <?php 
            echo $x + $y;
        ?>
    </p>

    <p>
        Difference: 
        <?php 
            echo $x - $y;
        ?>
    </p>

    <p>
        Product: 
        <?php 
            echo $x * $y;
        ?>
    </p>

    <p>
        Qoutient: 
        <?php 
            echo $x / $y;
        ?>
    </p>

    <p>
        Modulus Division: 
        <?php 
            echo $x % $y;
        ?>
    </p>

    <h2>Equality Operators</h2>
    <p>
        Loose Equality:
        <?php 
        echo var_dump($x == "56.2");
        ?>
    </p>

    <p>
        Loose Equality:
        <?php 
        echo var_dump($x != "56.2");
        ?>
    </p>

    <p>
        Strict Equality:
        <?php 
        echo var_dump($x === 56.2);
        ?>
    </p>

    <p>
        Strict Equality:
        <?php 
        echo var_dump($x !== "56.2");
        ?>
    </p>

    <h2>Greater/Less Operators</h2>
    <p>
        is Lesser:
        <?php 
        echo var_dump($x < $y);
        ?>
    </p>

    <p>
        is Greater:
        <?php 
        echo var_dump($x > $y);
        ?>
    </p>

    <h2>Logical Operators</h2>
    <p>
        Are all requirements met:
        <?php 
        echo var_dump($isLegalAge && $isRegistered)
        ?>
    </p>

    <p>
        Are some requirements met:
        <?php 
        echo var_dump($isLegalAge or $isRegistered)
        ?>
    </p>
</body>
</html>
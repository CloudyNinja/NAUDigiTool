<?php

    #create connection
    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
    define('DB_DATABASE', 'digitool');
    $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);

    #get vars through post
    $username = mysqli_real_escape_string($db, $_POST['username']);
    $password = mysqli_real_escape_string($db, $_POST['password']);

    #injection protection
    $username = stripcslashes($username);
    $password = stripcslashes($password);


    #pull user data
    $result = mysqli_query($db, "SELECT * FROM student WHERE Username = '$username' AND Password ='$password'")
                or die("Failed to query database");

    $entry = mysqli_fetch_array($result);

    #if the pull matches input they are a user with correct pass
    if( $entry['Username'] == $username && $entry['Password'] == $password )
    {
        #Success
        echo 'true,',$entry['Student_ID'] ;
    } else {
        #Failed
        echo 'User does not exist or password was incorrect';
    }
?>
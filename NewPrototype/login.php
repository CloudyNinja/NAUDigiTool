<?php

    #create connection
    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
    define('DB_DATABASE', 'digitool');
    $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);

    #get vars through post
    $username = mysqli_real_escape_string($db, $_POST['user']);
    $password = mysqli_real_escape_string($db, $_POST['pass']);

    #injection protection
    $username = stripcslashes($username);
    $password = stripcslashes($password);


    #pull user data
    $result = mysqli_query($db, "SELECT * FROM users WHERE username = '$username' AND pass ='$password'")
                or die("Failed to query database");

    $entry = mysqli_fetch_array($result);

    #if the pull matches input they are a user with correct pass
    if( $entry['username'] == $username && $entry['pass'] == $password )
    {
        #Success
        echo( "<script>" );
        echo( "   sessionStorage.setItem('student_id', '",$entry['id'], ");");
        echo( "</script>" );
        header("Location: index.html");
    } else {
        #Failed
        echo("User does not exist or password was incorrect");
    }
?>
<?php
    $dbinfo = file_get_contents("dbinfo.json");
    $dbinfo = json_decode($dbinfo, true);

    #create connection
    define('DB_SERVER', $dbinfo['MYSQLhostname']);
    define('DB_USERNAME', $dbinfo['MYSQLusername']);
    define('DB_PASSWORD', $dbinfo['MYSQLpassword']);
    define('DB_DATABASE', $dbinfo['MYSQLdbname']);
    $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);

    #get vars through post
    $id =  $_POST['student_id'];
    $user =  $_POST['username'];
    $pass =  $_POST['password'];
    $pass = hash("sha256", $pass );
    $date = date("Y-m-d");

    #insert statement
    $sql = "INSERT INTO student ( Student_ID, Username, Password, Last_Login )
        VALUES ( '$id', '$user', '$pass', CURDATE() )";

    #execute sql query
    $result = mysqli_query($db, $sql)
        or die("Failed to query database");

    echo "true";
?>
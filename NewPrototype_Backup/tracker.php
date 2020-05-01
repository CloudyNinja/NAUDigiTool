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
    $id =  $_POST['id'];
    $mistakes =  $_POST['mistakes'];
    $module_num =  $_POST['module_num'];
    $success =  $_POST['success'];
    $mode =  $_POST['mode'];
    $time_taken =  $_POST['time'];
    $stars =  $_POST['stars'];

    #insert statement
    $sql = "INSERT INTO attempt (Mode, Success, Mistakes_Made, Time_Taken, Module, Student_ID, Stars)
        VALUES ('$mode', '$success', '$mistakes', '$time_taken', '$module_num', '$id', '$stars')";

    #execute sql query
    $result = mysqli_query($db, $sql)
        or die("Failed to query database");

?>
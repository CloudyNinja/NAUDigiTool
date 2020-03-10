<?php

    #create connection
    # ---- should move these outside so when we go to an actual database, 
    # ---- the connection info isnt on github ---- VERY IMPORTANT
    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
    define('DB_DATABASE', 'digitool');
    $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);

    #get vars through post
    $id = $_POST['id'];
    $mistakes = $_POST['mistakes'];
    $module_num = $_POST['module_num'];
    $success = $_POST['success'];
    $mode = $_POST['mode'];
    $time_taken = $_POST['time'];
    $stars = $_POST['stars'];

    #insert statement
    $sql = "INSERT INTO attempt (Mode, Success, Mistakes_Made, Time_Taken, Module, Student_ID, Stars_Given)
        VALUES ("+ $mode+", "+$success", "+$mistakes", "+$time_taken", "+$module_num", "+$id+", "+$stars+")"

    #execute sql query
    $result = mysqli_query($db, $sql)
        or die("Failed to query database");



?>
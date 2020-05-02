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
    $module =  $_POST['module'];
    $question =  $_POST['question'];
    $stars =  $_POST['stars'];

    # need to check if there is a savepoint
    $sql = "SELECT * FROM saves WHERE (Student_ID = '$id' AND Module ='$module')";
        
    $result = mysqli_query($db, $sql)
        or die("Failed to query database");


    if(mysqli_num_rows($result)) {
        # something is there so update it
        $sql = "UPDATE saves SET Question_Number = '$question', Current_Stars = '$stars' WHERE
                Student_ID = '$id' AND Module = '$module'";
    }
    else {
        # nothing found so create it
        $sql = "INSERT INTO saves (Student_ID, Module, Question_Number, Current_Stars)
            VALUES ('$id', '$module', '$question', '$stars')";
    }
    # execute sql query
    $result = mysqli_query($db, $sql)
        or die("Failed to query database");

?>
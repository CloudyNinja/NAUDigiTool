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


    # need to check if there is a savepoint
    $sql = "SELECT * FROM saves WHERE (Student_ID = '$id' AND Module ='$module')";

    $result = mysqli_query($db, $sql)
        or die("Failed to query database");

    $entry = mysqli_fetch_array($result);

    #if the pull is set, return the results
    if(isset($entry['Question_Number']) && isset($entry['Current_Stars']))
    {
        #Success
        echo $entry['Question_Number'],',',$entry['Current_Stars'] ;
    }
    else 
    {
        #Failed
        echo 'Savepoint does not exist';
    }
    


?>
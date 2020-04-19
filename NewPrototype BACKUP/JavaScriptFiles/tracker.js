

//basically a wrapper for XMLHttpRequest() -> AJAX
//allows asyncronous database communication without rerouting/refreshing the page
function db_log( id, module_num, mode, success, stars, mistakes, time_taken) {
    var xmlhttp = new XMLHttpRequest();
    //open is the method, file on the serverside to access, and async or not
    xmlhttp.open("POST", "../../tracker.php", true);

    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    //send is the variables passed through POST that the php file can use
    xmlhttp.send("id="+id+"&mistakes="+mistakes+"&module_num="+module_num+
                "&success="+success+"&time="+time_taken+"&mode="+mode+"&stars="+stars);
}
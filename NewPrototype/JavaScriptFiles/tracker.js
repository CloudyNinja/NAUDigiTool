

//basically a wrapper for XMLHttpRequest() -> AJAX
//allows asyncronous database communication without rerouting/refreshing the page
function db_log( id, module_num, mode, success, stars, mistakes, time_taken) {
    var xmlhttp = new XMLHttpRequest();
    //open is the method, file on the serverside to access, and async or not

    alert(""+id + module_num+ mode+ success+ stars+ mistakes+ time_taken);

    xmlhttp.open("POST", "../../tracker.php", false);

    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let response_data = xmlhttp.responseText
            //string instead of bool since converting is unecessary
           alert(response_data);
        }
    }
    //send is the variables passed through POST that the php file can use
    xmlhttp.send("id="+id+"&mistakes="+mistakes+"&module_num="+module_num+
                "&success="+success+"&time="+time_taken+"&mode="+mode+"&stars="+stars);
}


//basically a wrapper for XMLHttpRequest() -> AJAX
//allows asyncronous database communication without rerouting/refreshing the page
function db_log(id, module_num, mode, success, stars, mistakes, time_taken) {
    var xmlhttp = new XMLHttpRequest();
    //open is the method, file on the serverside to access, and async or not
    xmlhttp.open("POST", "../../attempt.php", true);

    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //send is the variables passed through POST that the php file can use
    xmlhttp.send("id=" + id + "&mistakes=" + mistakes + "&module_num=" + module_num +
        "&success=" + success + "&time=" + time_taken + "&mode=" + mode + "&stars=" + stars);
}

function loadFromSave(moduleNum) {
    var xmlhttp = new XMLHttpRequest();
    //open is the method, file on the serverside to access, and async or not

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let result = xmlhttp.responseText.split(",");

            if (result != "Savepoint does not exist") {
                localStorage.setItem("updatedUserStars", result[1])

                if (moduleNum == 1) {
                    window.location.href = "./HTML/Module_1/moduleOneQuestion" + result[0] + ".html";
                }
                else if (moduleNum == 2) {
                    window.location.href = "./HTML/Module_2/moduleTwoQuestion" + result[0] + ".html";
                }

            }
            else{
                alert("Savepoint does not exist.");
            }

        }
    };

    xmlhttp.open("POST", "loadSave.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //send is the variables passed through POST that the php file can use
    xmlhttp.send("id=" + sessionStorage.getItem("student_id") + "&module=" + moduleNum);
}
var intervalCheckNotification = window.setInterval(function(){
    try{
	var hasNotificationsAsana = document.getElementsByClassName("has-newNotifications");
        if(typeof(hasNotificationsAsana) !== "undefined" && hasNotificationsAsana !== null && hasNotificationsAsana.length){
            confirm("ASANA TASK NOTIFICATION");
        }
    }catch(err){
        window.clearInterval(intervalCheckNotification);
    }
}, 8000);
/* Gabriel Tessarini */

/*
var intervalCheckNotification=window.setInterval(function(){try{var e=document.getElementsByClassName("has-newNotifications");"undefined"!=typeof e&&null!==e&&e.length&&confirm("ASANA TASK NOTIFICATION")}catch(n){window.clearInterval(intervalCheckNotification)}},8e3);
// Gabriel Tessarini
*/

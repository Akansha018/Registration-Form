function validation(){
    var sname = document.getElementById("name").value;
    var fname = document.getElementById("father-name").value;
    var mname = document.getElementById("mother-name").value;
    var dob = document.getElementById("dob").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email-id").value;
    var password = document.getElementById("pass").value;
    var aadhar = document.getElementById("aadhar").value;

    var course_applied = document.getElementById("course-app").value;
    var course_duration = document.getElementById("course-dur").value;
    var course_time = document.getElementById("course-time").value;
    var reg_feee = document.getElementById("reg_fee");
    var add_feee = document.getElementById("add_fee");

    var qualification = document.getElementById("qualification").value;
    var board = document.getElementById("qual-dur").value;
    var year = document.getElementById("year-time").value;
    var percent= document.getElementById("percent").value;

    if(qualification == ""|| qualification== null || qualification == 0){
        document.getElementById("qual-err").innerHTML = "*choose course*";
    }else{
        document.getElementById("qual-err").innerHTML = "";

    }

    if(board== '' || board== null || board == 0){
        document.getElementById("qualtime-err").innerHTML = "*choose board/university*";
    }
    else{
        document.getElementById("qualtime-err").innerHTML = "";
    }

    if(year == "" || year == null || year == 0){
        document.getElementById("year-err").innerHTML = "*year passed*";
    }else{
        document.getElementById("year-err").innerHTML = "";
    }

    if(percent == "" || percent == null || percent == 0){
        document.getElementById("percent-err").innerHTML = "*percentage/grade*";
    }else{
        document.getElementById("percent-err").innerHTML = "";
    }


    if(reg_feee.checked && add_feee.checked){
        document.getElementById("fee-err").innerHTML="paid";
    }
    else{
        document.getElementById("fee-err").innerHTML="*submit fee*";

    }


    if(course_applied == "" || course_applied == null || course_applied.length == 0){
        document.getElementById("course-err").innerHTML = "*choose course*";
    }else{
        document.getElementById("course-err").innerHTML = "";
    }

    if(course_duration == "" || course_duration == null || course_duration.length == 0){
        document.getElementById("time-err").innerHTML = "*check-error*";
    }else{
        document.getElementById("time-err").innerHTML = "";
    }

    if(course_time == "" || course_time == null || course_time.length == 0){
        document.getElementById("ctime-err").innerHTML = "*choose batch time*";
    }else{
        document.getElementById("ctime-err").innerHTML = "";
    }

    //

    //for radiobutton
    if(document.getElementById("male").checked){
        document.getElementById("gender-err").innerHTML="";
    }else if(document.getElementById("female").checked){
        document.getElementById("gender-err").innerHTML="";
    }
    else{
        document.getElementById("gender-err").innerHTML="*select gender*";
    }

    //caste

    if(document.getElementById("gen").checked){
        document.getElementById("caste-err").innerHTML="";
    }else if(document.getElementById("obc").checked){
        document.getElementById("caste-err").innerHTML="";
    }else if(document.getElementById("sc").checked){
        document.getElementById("caste-err").innerHTML="";
    }else if(document.getElementById("st").checked){
        document.getElementById("caste-err").innerHTML="";
    }
    else{
        document.getElementById("caste-err").innerHTML="*select caste*";
    }



    if(sname == "" || sname == null || sname.length == 0)
    {
        document.getElementById("err").innerHTML = "**please write username**";
        // return false;
    }
    else{
        var regex = /^[A-Z]+[a-zA-Z\s]+$/;

        if(sname.match(regex))
        {
        document.getElementById("err").innerHTML = "";
        }
        else
        {
        document.getElementById("err").innerHTML = "**First letter capital**";

        }
    }




    if(fname == "" || fname == null || fname.length == 0)
    {
        document.getElementById("father-err").innerHTML = "**please write father name**";
    }
    else{
        var regex = /^[A-Z]+[a-zA-Z\s]+$/;

        if(fname.match(regex))
        {
        document.getElementById("father-err").innerHTML = "";
        }
        else
        {
        document.getElementById("father-err").innerHTML = "**First letter capital**";

        }
    }


    if(mname == "" || mname == null || mname.length == 0)
    {
        document.getElementById("mother-err").innerHTML = "**please write mother name**";
    }
    else{
        var regex = /^[A-Z]+[a-zA-Z\s]+$/;

        if(mname.match(regex))
        {
        document.getElementById("mother-err").innerHTML = "";
        }
        else
        {
        document.getElementById("mother-err").innerHTML = "**First letter capital**";

        }
    }


    if(dob == "" || dob == null || dob.length == 0)
    {
        document.getElementById("dob-err").innerHTML = "**please choose dob**";
    }
    else{
        var regex = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        if(dob.match(regex)){
            document.getElementById("dob-err").innerHTML = "";
        }else{
        document.getElementById("dob-err").innerHTML = "**DD/MM/YY pattern**";
        }
    }

    if(mobile == "" || mobile == null || mobile.length == 0)
    {
        document.getElementById("mobile-err").innerHTML = "**please enter num**";
    }
    else{
        var regex = /^[0-9]{10}$/;
        if(mobile.match(regex)){
        document.getElementById("mobile-err").innerHTML = "";
        }
        else {
            document.getElementById("mobile-err").innerHTML = "* 10 digit num*";
        }
    }

    if(email == "" || email == null || email.length == 0)
    {
        document.getElementById("email-err").innerHTML = "**please write email**";
    }else{
        var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(email.match(regex)){
        document.getElementById("email-err").innerHTML = "";
        }
        else {
            document.getElementById("email-err").innerHTML = "*@ syntax*";

        }
    }



    if(password == "" || password == null || password.length == 0)
    {
        document.getElementById("pass-err").innerHTML = "**please write password**";
    }
    else{

        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/

        if(password.match(regex)){
            document.getElementById('pass-err').innerHTML=""
        }
        else{
            document.getElementById('pass-err').innerHTML="*must contain # @ and of 8 letter*"
        }
    }

    if(aadhar == "" || aadhar == null || aadhar.length == 0)
    {
        document.getElementById("aadhar-err").innerHTML = "**please write aadhar number**";
    }
    else{
        // var regex = /^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$/;
        var regex = /^[0-9]{12}/;
        if(aadhar.match(regex)){
            document.getElementById("aadhar-err").innerHTML = "";
        }
        else {
            document.getElementById("aadhar-err").innerHTML = "* 12 digit num*";
        }
    }

}

$(function () {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#imgg').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]); // convert to base64 string
        }
    }

    $("#imgInput").change(function () {
        readURL(this);
    });
  });


// var change_div = document.getElementById("personal-details");
document.getElementById("fees").style.display = 'none';
document.getElementById("education").style.display = 'none';





function reset_value(){
    document.getElementById("myform-1").reset();
    document.getElementById("myform-2").reset();
    document.getElementById("myform-3").reset();
}




let counter=0;
function next_back(count){        
    let per_det=document.getElementById("peronal-details");
    let edu_det=document.getElementById("fees");
    let fee_det=document.getElementById("education");
    switch(count){
        case 0:
            per_det.style.display="block";
            edu_det.style.display="none";
            fee_det.style.display="none";
            break;
        case 1:
            per_det.style.display="none";
            edu_det.style.display="block";
            fee_det.style.display="none";
            break;
        case 2:
            edu_det.style.display="none";
            per_det.style.display="none";
            fee_det.style.display="block";
            break;
        
    }
}

function next_pagee(){
    if(counter<3)
        counter++;
    next_back(counter);    
}
function back_page(){
    if(counter>0)
       counter--;
    next_back(counter);    
}
// function fees(){
//     var rg_fe=document.getElementById("reg_fee");
//     var ex_fe=document.getElementById("add_fee");
//     if(rg_fe.checked==true && ex_fe.checked==true){
//         document.getElementById("fee_err").innerHTML="Paid";
//     }
// }
function removeall(listt) {    
    while (listt.options.length > 0) {
        listt.remove(0);
    }
}
function clearChildren (parent_id) {
    var childArray = parent_id.children;
    var cL = childArray.length;
    while(cL > 0) {
        cL--;
        parent_id.removeChild(childArray[cL]);
    }
};

function course_select(){
            
    var cselect=document.getElementById("course-app").value;
    var bduration=document.getElementById("course-dur");
    // var btiming = document.getElementById("timing");    
    // var cors=document.getElementById("course").value;
    const timing_list=document.getElementById('coursee-time');
    var timing_list_detail=new Array("10Am-12Pm", "1Pm-3Pm ","4Pm  -  6Pm","8Am-9Am" , "12pm-1Pm","3Pm  -  4 pm");
    
    clearChildren(timing_list);

    if(cselect=="Java" || cselect=="Python" || cselect=="Web Designing") {
            bduration.value="3 Month";
            for(var i=0;i<3;++i){
                var option = document.createElement('option');
                option.value = timing_list_detail[i];
                timing_list.appendChild(option); 
            }
        }
    else if(cselect=="C" || cselect=="C++" || cselect=="C#"){
        bduration.value="4 Month";
        for(var i=3;i<6;++i){
            var option = document.createElement('option');
            option.value = timing_list_detail[i];   
            timing_list.appendChild(option);
        }
    }
    else if(cselect=="CCC"){
        bduration.value="2 Month";
        for(var i=6;i<timing_list_detail.length;++i){
            var option = document.createElement('option');
            option.value = timing_list_detail[i];   
            timing_list.appendChild(option);
        }
    }   
}


function education(){
            
    var qselect=document.getElementById("qualification").value;
    var qduration=document.getElementById("q-list");
    var qual_list = new Array("ICSE","CBSE","STATE-BOARD");

    clearChildren(qduration);

    if(qselect==10 || qselect==12) {
            for(var i=0;i<3;++i){
                var option = document.createElement('option');
                option.value = qual_list[i];
                qduration.appendChild(option); 
            }
    }
    
}



const course_list = document.getElementById('coursess'); 
var course_detail =new Array("C","C++","Java","Python","Web designing","CCC","C#");
course_detail.forEach(item => {
  var option = document.createElement('option');
  option.value = item;   
  course_list.appendChild(option);
});
     

const qual_list = document.getElementById('qual'); 
var qual_detail =new Array("10","12","graduation","post-graduation","diploma","others");
qual_detail.forEach(item => {
  var option = document.createElement('option');
  option.value = item;   
  qual_list.appendChild(option);
});
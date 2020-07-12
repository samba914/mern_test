

console.log("ok");
$(document).ready(function(){
    var input= document.getElementById("myInput");
        input.addEventListene("keyup",function() {
        console.log("o");
        var input, filter, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
       // div = document.getElementById("myDropdown");
        a = document.getElementsByClassName("block");
        for (i = 0; i < a.length; i++) {
          var txtValue = a[i].firstChild.textContent || a[i].firstChild.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
          } else {
            a[i].style.display = "none";
          }
        }
    })
});
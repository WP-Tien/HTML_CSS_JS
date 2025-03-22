// jQuery code 
// $("#test").click(function() {
//     $(this).hide();
// });

// JS code
document.getElementById("test").onclick = function (e) {
    e.target.closest('p').style.display = 'none';
}
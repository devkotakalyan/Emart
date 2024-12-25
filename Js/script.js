
function openForm() {
    document.getElementById("popupForm").style.display = "block";
} 

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    alert("Order Canceled by the user");
}

function coler_change() {
    document.getElementById("nav").style.background = "#0F0F0F";
    document.getElementById("body").style.background = "#444";
    document.getElementById("fotter").style.background ="#0F0F0F";
    document.getElementById("ite").style.background ="#0F0F0F";
    document.getElementById("ite").style.color ="#E5E4E2";
    document.getElementById("items").style.color ="white";
    var figcaptions = document.getElementsByTagName('figcaption');
        for (var i = 0; i < figcaptions.length; i++) {
        figcaptions[i].style.color = "white";}
}

function coler_rev() {
    document.getElementById("nav").style.background = "#E5E4E2";
    document.getElementById("body").style.background = "#D3D3D3";
    document.getElementById("fotter").style.background ="";
    document.getElementById("ite").style.background ="#E5E4E2";
    document.getElementById("ite").style.color ="";
    document.getElementById("items").style.color ="";
    var figcaptions = document.getElementsByTagName('figcaption');
    for (var i = 0; i < figcaptions.length; i++) {
    figcaptions[i].style.color = "";}
    }

function trocar()
{
    element = document.getElementById("vagalume");
    if (element.src.match('vagalume.jpg')) {
        element.src = 'vagalume1.jpg';
    }
    else {
        element.src = 'vagalume.jpg';
    }
}
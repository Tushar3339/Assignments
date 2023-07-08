function getRandomColor() {
    var color = "rgb(";
    for (var i = 0; i < 3; i++) {
        var a = Math.floor(Math.random() * 256);
        color = color + a + ","
    }

    color = color.substring(0, color.length - 1);
    color = color + ')'

    //console.log(color);
    return color;
}

function changeColor(id) {


    var eid = document.getElementById(id);

    setInterval(function () {
        rcolor = getRandomColor();
        eid.style.color = rcolor;
    }, 2000)
}

function setBoxProperties(box) {
    box.style.width = '50px';
    box.style.height = '50px';
    box.style.display = 'inline-block';

}

function createRandomColouredBox() {

    var iid = setInterval(function () {
        var box = document.createElement('div');
        setBoxProperties(box);
        var colour = getRandomColor();
        box.style.backgroundColor = colour;
        // var n = Math.floor(Math.random() * 10)
        //console.log(n.toString());
        // box.style.margin = n.toString() + 'px';
        var cont = document.getElementById('container');
        cont.appendChild(box);

    }, 50);


}

changeColor("eid");
createRandomColouredBox();
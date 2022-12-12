function func(){
  var n = document.getElementById('photos');
  n.style.display = "none";
  var t = document.getElementById('more');
  t.style.display = "none";
  var x = document.getElementById("aboutinfo");
  if (x.style.display === "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
    
  }
}

    
function photos(){
    var y = document.getElementById('aboutinfo');
    y.style.display = "none";
    var u = document.getElementById('more');
    u.style.display = "none";
    var z = document.getElementById('photos');
    if (z.style.display === "none") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }
  }
    //const img = document.createElement("img");
    //img.src = 'pic1.jpg';
    //document.getElementById('photo').appendChild(img);
    //var z = document.getElementById('feed');
    //z.style.display = "none";
    
    //var y = document.getElementById('picdiv');
    //if (y.style.display === "none") {
      //y.style.display = "block";
    //} else {
      //y.style.display = "none";
    //}
function moreinfo(){
  var p = document.getElementById('aboutinfo');
  var q = document.getElementById('photos');
  p.style.display = "none";
  q.style.display = "none";
  var r = document.getElementById('more');
  if (r.style.display === "none") {
    r.style.display = "block";
  } else {
    r.style.display = "none";
  }
  }

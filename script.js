document.body.style.background = "Moccasin";
document.getElementById("myselect").addEventListener("change", function selectform(Rectangle, Square, Circle){
  document.getElementById("form").innerHTML = this.value; 
    console.log(this.value)
    switch (form) {
      case 'Rectangle':
        document.getElementById("Rectangle").style.display="block"
        break;
    
      case 'square':
        document.getElementById("Square").style.display="block"
        break;
      case 'circle':
        document.getElementById("Circle").style.display="block"
        break;
    
      default:
        document.getElementById("Rectangle").style.display="none";
        document.getElementById("Circle").style.display="none";
        document.getElementById("Square").style.display="none";
    }
});
let theInput = document.getElementById("selectColor");
let theColor = theInput.value;
let Col = document.getElementById("color").innerText;
theInput.addEventListener("input", function() {
  document.getElementById("color").innerHTML = theInput.value;
  console.log(document.getElementById("color").innerText)
  document.getElementById("Rectangle").style.backgroundColor = document.getElementById("color").innerText;
  document.getElementById("Circle").style.backgroundColor = document.getElementById("color").innerText;
  document.getElementById("Square").style.backgroundColor = document.getElementById("color").innerText;
}, false);

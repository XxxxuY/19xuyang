function init (){
  var divsign = document.getElementById ('CXK')
  divsign.innerHTML = ''
  divsign.setAttribute ('style','height: 150px; width: 500px; background-color: black; margin: 0 auto; margin-top: 250px;')
  console.log (divsign.getAttribute ('style'))
}
window.onload = init
function init () {
  console.log (anything)
  var anything = document.getElementById ('any')
  console.log (anything)
  console.log (0.0/0.0)
  console.log (0/100)
  console.log (typeof (100))
  console.log (typeof ('100'))
  if (100 === '100') {
    console.log (true)
  } else {
    console.log (false)
  }
  if (100 == '100') {
    console.log (true)
  } else {
    console.log (false)
  }
}
window.onload = init
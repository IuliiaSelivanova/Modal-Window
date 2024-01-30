document.getElementById('btnOpen').addEventListener('click', function(){
  document.getElementById('my-modal').classList.add('open');
})

document.querySelectorAll('.btnClose').forEach(button => button.addEventListener('click', function() {
  document.getElementById('my-modal').classList.remove('open');
}))

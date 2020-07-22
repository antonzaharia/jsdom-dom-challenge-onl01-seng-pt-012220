
document.getElementById("submit").addEventListener('click', function(event){
  let comment = document.getElementById('comment-input').value;
  console.log(comment);
  event.preventDefault()
});

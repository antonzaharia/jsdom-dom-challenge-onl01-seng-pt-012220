
document.getElementById("submit").addEventListener('click', function(event){
  let input = document.getElementById('comment-input').value;
  let p = document.createElement('p');
  let newComment = document.createTextNode(input);
  let comments = document.getElementById('list');
  comments.appendChild(newComment);
  event.preventDefault()
});

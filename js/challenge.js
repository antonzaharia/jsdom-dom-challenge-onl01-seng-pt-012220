function addOne(number) {
  return parseInt(number) += 1;
};
document.getElementById("submit").addEventListener('click', function(event){
  let input = document.getElementById('comment-input').value;
  let p = document.createElement('p');
  let newComment = document.createTextNode(input);
  p.appendChild(newComment);
  let comments = document.getElementById('list');
  comments.appendChild(p);
  event.preventDefault()
  document.getElementById('comment-form').reset();
});

const counter = document.getElementById('counter');
counter.setTimeout(addOne(counter.value), 1000);

function addOne(number) {
  return parseInt(number) + 1;
};
function removeOne(number){
  return parseInt(number) - 1;
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

const plus = document.getElementById('plus');
plus.addEventListener('click', function(event){
  let number = counter.textContent;
  counter.textContent = addOne(number);
});
const minus = document.getElementById('minus');
minus.addEventListener('click', function(event){
  let number = counter.textContent;
  counter.textContent = removeOne(number);
});
const pause = document.getElementById('pause');
pause.addEventListener('click', function(event){

});

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
  let counterId = window.setInterval( function(){
  let number = counter.textContent;
  counter.textContent = addOne(number);
}, 1000);

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
  if(counterId){
  clearInterval(counterId);
  counterId = false;
  minus.disabled = true;
  plus.disabled = true;
} else {
  counterId = window.setInterval( function(){
  let number = counter.textContent;
  counter.textContent = addOne(number);
  }, 1000);
}
});

const like = document.getElementById('heart');
like.addEventListener('click', function(event){
  console.log("1");
});

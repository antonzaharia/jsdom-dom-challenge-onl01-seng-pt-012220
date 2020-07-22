function addOne(number) {
  return parseInt(number) + 1;
};
function removeOne(number){
  return parseInt(number) - 1;
};
const submit = document.getElementById("submit");
submit.addEventListener('click', function(event){
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
pause.addEventListener('click', function(event) {
  if(counterId) {
  clearInterval(counterId);
  minus.disabled = true;
  plus.disabled = true;
  like.disabled = true;
  submit.disabled = true;
  pause.textContent = "resume";
  counterId = false;
} else {
  counterId = window.setInterval( function(){
  let number = counter.textContent;
  counter.textContent = addOne(number);
  }, 1000);
  minus.disabled = false;
  plus.disabled = false;
  like.disabled = false;
  submit.disabled = false;
  pause.textContent = "pause";
}
});

const like = document.getElementById('heart');
like.addEventListener('click', function(event){
  let likes = 0;
  function addLike(){
    return likes + 1;
  }
  let p = document.createElement('p');
  p.textContent = `${counter.textContent} has ${addLike()} likes`;
  console.log(p);
});

let index = 0;
const characters = document.querySelectorAll('.character');

function showChar(newIndex){
  characters.forEach((c, i) => {
    c.classList.remove('active');
  });
  characters[newIndex].classList.add('active');
  index = newIndex;
}

function nextChar(){
  let newIndex = (index + 1) % characters.length;
  showChar(newIndex);
}

function prevChar(){
  let newIndex = (index - 1 + characters.length) % characters.length;
  showChar(newIndex);
}
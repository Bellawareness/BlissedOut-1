// document.addEventListener("DOMContentLoaded", function() {
  // tried to add resolve bug...

const submit = document.querySelector('.comment-submit');
const commentList = document.querySelector('.comments');
const commentInput = document.querySelector('.comment-input');


function template(data) {
  commentList.insertAdjacentHTML("beforeend", `
  <div class="comment flex items-start justify-start">
      <img class="comment-avatar" src="${data.avatar}" />
      <div class="flex-1">
        <h3 class="comment-author">${data.author}</h3>
        <p class="comment-body">${data.comment}</p>
      </div>
    </div>
  </div>`);
}

function appendComment (event) {

  const data = {
    avatar: "https://img.icons8.com/dotty/80/000000/pet-commands-train.png",
    comment: commentInput.value,
    author: "Helper"
  };


  event.preventDefault();
  // If the value is nothing just return
  if (commentInput.value.length < 1) return;

  // Insert new template into DOM
  template(data);

  // Reset textrea value
  commentInput.value = "";

  // Save the list to localStorage
  localStorage.setItem('commentListing', commentList.innerHTML);
}

submit.addEventListener('click', appendComment, false)

// Check for saved wishlist items
const saved = localStorage.getItem('commentListing');

// If there are any saved items, update our list
if (saved) {
  commentList.innerHTML = saved;
}
// Commment box
 // });

// Intro to joymometer 
function printname(){
  var giveName = document.getElementById("name").value;
  document.getElementById("printHello").innerHTML = "Hello " + giveName + " I am Elly and we are going to take account of your happiness by calculating your weekly, monthly and yearly personal happiness barometer ust answer a few questions as often as you can with as much detail as you want. Let us begin!";
};


const
  range = document.getElementById('range'),
  rangeV = document.getElementById('rangeV'),
  setValue = ()=>{
    const
      newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
      newPosition = 10 - (newValue * 0.2);
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);


const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
};

function getValue() {
var t = document.getElementById("range").value;
document.getElementById("Sample").innerHTML = ""+ t;

		switch(t) {

	case 1: System.out.println("You are enough");
		break;

	case 2: System.out.println("You can be joyful right now");
	break;

	case 3: System.out.println("Enjoy the process");

	case 4: System.out.println("Being alive is the joy");

	default: System.out.println("You are a great manager");

	case 5: System.out.println("You are loved beyond measures");
	break;

	case 6:System.out.println("You are worthy of being here");
	break;
		}
};
document.addEventListener("DOMContentLoaded", function() {

//created a function to create a button
function moreInfo() {
  //call the prompt again
let number = prompt ("Choose a decimal");
//log the result to the console 
console.log(Math.round(number));

}


//add the function to the button 
document.getElementById("myBtn").onclick = Roundup;

//code to take log answers to html 
(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function () {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
        } else {
      logger.innerHTML += arguments[i] + '<br />';
        }
      }
    }
})();


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



 });
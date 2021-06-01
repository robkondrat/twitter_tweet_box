// selecting all required elements 
const editableInput = document.querySelector(".editable"),
readonlyInput = document.querySelector(".readonly"),
placeholder = document.querySelector(".placeholder"),
counter = document.querySelector(".counter"),
button = document.querySelector("button");

editableInput.onkeyup = (e) => {
  let element = e.target;
  checkInput(element);
}

editableInput.onkeypress = (e) => {
  let element = e.target;
  checkInput(element);
  placeholder.style.display = "none";
}

function checkInput(element) {
  let maxLength = 100;
  let currentLength = element.innerText.length;
  let textTag = element.innerHTML;

  if (currentLength <= 0) {
    placeholder.style.display = "block";
    counter.style.display = "none";
    button.classList.remove("active");
  } else {
    counter.style.display = "block";
    placeholder.style.display = "none";
    button.classList.add("active");
  };

  counter.innerText = maxLength - currentLength;

  if (currentLength > maxLength) {
    let overText = element.innerText.substr(maxLength);
    // subst() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
    overText = `<span class="highlight">${overText}</span>`; // creating new span and passing over texts
    textTag = element.innerText.substr(0, maxLength) + overText;
    readonlyInput.style.zIndex = "1";
    counter.style.color = "#e0245e";
    button.classList.remove("active");
  } else {
    readonlyInput.style.zIndex = "-1";
    counter.style.color = "#333";
  };
  readonlyInput.innerHTML = textTag;
}




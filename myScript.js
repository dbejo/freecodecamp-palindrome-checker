function palindrome(str) {
  let simpleStr = str.toLowerCase().replace(/[^a-zÁ-ű0-9]/g, "");
  let reversedStr = "";
  for(let i = simpleStr.length - 1; i >= 0; i--) {
    reversedStr += simpleStr[i];
  }
  if(simpleStr == reversedStr) {
  return true;
  } else {
    return false;
  }
}

function checkForPalindrome() {
  let str = document.getElementById("text").value;
  let result = document.getElementById("result");
  if(palindrome(str)) {
    result.innerHTML = "Your text is palindrome";
    result.style.color = "green";
  } else {
    result.innerHTML = "Your text is not palindrome";
    result.style.color = "red";
  }
  if(str.length == 0) {
    result.innerHTML = "Write something to check if it's palindrome"
    result.style.color = "black";
  }
}
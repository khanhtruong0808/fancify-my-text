const bigger = () => {
  document.getElementById("text").style.fontSize = "24px";
};

const onChange = () => {
  alert("Fancy!");
  const fancifyChecked = document.getElementById("fancyShmancy").checked;
  const textAreaStyle = document.getElementById("text").style;

  if (fancifyChecked) {
    textAreaStyle.fontWeight = "bold";
    textAreaStyle.color = "blue";
    textAreaStyle.textDecoration = "underline";
  } else {
    textAreaStyle.fontWeight = "normal";
    textAreaStyle.color = "black";
    textAreaStyle.textDecoration = "none";
  }
};

const moo = () => {
  const textArea = document.getElementById("text");
  textArea.value = textArea.value.toUpperCase();
  const parts = textArea.value.split(".");
  textArea.value = parts.join("-Moo.");
};

//your JS code here. If required.
const btn = document.getElementById("btn");
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const output = document.getElementById("output");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

btn.addEventListener("click", async () => {
  const text = textInput.value;
  const delay = Number(delayInput.value);

  output.innerText = "";

  await wait(delay);

  output.innerText = text;
});
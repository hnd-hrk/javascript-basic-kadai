const textElement = document.getElementById("text"); // <h2>要素
const button = document.getElementById("btn"); // <button>要素

button.addEventListener("click", () => {
    textElement.textContent = "ボタンをクリックしました";
});

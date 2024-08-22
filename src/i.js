import Handlebars from "handlebars";

// Определяем шаблон как строку прямо в JavaScript
const commentTemplate = `
<div class="cmnt">
  <div class="cmntInfo">
    <img src="{{imgLink}}" class="cmntImg" alt="" />
    <h4 class="cmntOwner">{{owner}}</h4>
  </div>
  <p class="cmntText">{{text}}</p>
</div>
`;

const compiledTemplate = Handlebars.compile(commentTemplate);

const commentSection = document.querySelector(".cmntSection");
const commentInput = document.querySelector(".cmntEnterInp");
const nameInput = document.querySelector(".cmntNameEnterInp");
const imageInput = document.querySelector(".cmntImgEnter");
const submitButton = document.querySelector(".cmntEnterBtn");

function addComment(text, name, imgLink) {
    const newComment = {
        imgLink: imgLink || "https://avatars.githubusercontent.com/u/120343461?s=48&v=4",
        owner: name || "Аноним",
        text: text
    };

    const renderedComment = compiledTemplate(newComment);
    commentSection.insertAdjacentHTML("beforeend", renderedComment);
}

submitButton.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    const userName = nameInput.value.trim();
    const imageLink = imageInput.value.trim();

    if (commentText) {
        addComment(commentText, userName, imageLink);
        commentInput.value = "";
        nameInput.value = "";
        imageInput.value = "";
    }
});

commentInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        submitButton.click();
    }
});

nameInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        submitButton.click();
    }
});
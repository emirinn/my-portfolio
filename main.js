const inputQuestion = document.getElementById("input-question");
const inputButton = document.getElementById("button1");
const questionContainer = document.getElementById("question-container");

let questions = JSON.parse(localStorage["questions"] || "[]");

inputButton.onclick = function () {
  const text = inputQuestion.value;

  questions.push(text);

  localStorage["questions"] = JSON.stringify(questions);
  inputQuestion.value = "";
  const card = createCard(text);
  questioncontainer.append(card);
};

const createCard = function (text) {
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = text;
  questionContainer.append(card);

  const sakujobutton = document.createElement("div");
  sakujobutton.className = "sakujo";
  sakujobutton.textContent = "削除";

  sakujobutton.onclick = function () {
    let index = 0;
    for (const child of questionContainer.children) {
      if (child === card) {
        questions.splice(index, 1);
        break;
      }
      index += 1;
    }

    localStorage["questions"] = JSON.stringify(questions);

    card.remove();
  };
  card.append(sakujobutton);

  return card;
};
const fragment = document.createDocumentFragment();
for (const text of questions) {
  const card = createCard(text);
  fragment.append(card);
}
questionContainer.append(fragment);

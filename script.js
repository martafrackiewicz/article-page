// comments

const $rowComment = document.querySelector(".row-comment");
const $commentForm = document.querySelector(".article-comments form");
const $commentInput = $commentForm.querySelector(".form-group textarea");

const createComment = (text) => {
    const commentWrap = document.createElement("div");
    commentWrap.className = "comment";

    const commentHeader = document.createElement("div");
    commentHeader.className = "comment-header";
    const commentAuthor = document.createElement("span");
    commentAuthor.className = 'comment-author';
    commentAuthor.innerText = 'default_name';
    const commentDate = document.createElement("span");
    commentDate.className = 'comment-date';
    commentDate.innerText = new Date().toLocaleString();
    commentHeader.appendChild(commentAuthor);
    commentHeader.appendChild(commentDate);
    commentWrap.appendChild(commentHeader);

    const commentBody = document.createElement("div");
    commentBody.className = "comment-body";
    const commentContent = document.createElement("p");
    commentContent.className = "comment-content";
    commentContent.innerText = text;
    commentBody.appendChild(commentContent);
    commentWrap.appendChild(commentBody);

    const commentFooter = document.createElement("div");
    commentFooter.className = "comment-footer";
    const buttonUp = document.createElement("button");
    buttonUp.setAttribute('type', 'button');
    buttonUp.className = "btn vote-up";
    buttonUp.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    commentFooter.appendChild(buttonUp)
    const votesUp = document.createElement("span");
    votesUp.className = "comment-votes-up";
    votesUp.innerText = 0;
    commentFooter.appendChild(votesUp);
    const buttonDown = document.createElement("button");
    buttonDown.setAttribute('type', 'button');
    buttonDown.className = "btn vote-down";
    buttonDown.innerHTML = `<i class="fas fa-thumbs-down"></i>`;
    commentFooter.appendChild(buttonDown)
    const votesDown = document.createElement("span");
    votesDown.className = "comment-votes-down";
    votesDown.innerText = 0;
    commentFooter.appendChild(votesDown);
    commentWrap.appendChild(commentFooter);

    buttonUp.addEventListener("click", () => {
        let ups = votesUp.innerText;
        ups++;
        votesUp.innerText = ups;
    })

    buttonDown.addEventListener("click", () => {
        let downs = votesDown.innerText;
        downs++;
        votesDown.innerText = downs;
    })

    $rowComment.appendChild(commentWrap)
}

$commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!$commentInput.value) {
        alert("Komentarz nie może być pusty");
    } else {
        createComment($commentInput.value);
        $commentInput.value = "";
    }
});

const $commentVoteUp = document.querySelector(".vote-up");
const $commentVoteDown = document.querySelector(".vote-down");

$commentVoteUp.addEventListener("click", () => {
    const $commentUps = document.querySelector(".comment-votes-up");
    let ups = $commentUps.innerText;
    ups++;
    $commentUps.innerText = ups;
})

$commentVoteDown.addEventListener("click", () => {
    const $commentDowns = document.querySelector(".comment-votes-down");
    let downs = $commentDowns.innerText;
    downs++;
    $commentDowns.innerText = downs;
})
// create comment
const $rowComment = document.querySelector(".row-comment");
const $commentForm = document.querySelector(".article-comments form");
const $commentInput = $commentForm.querySelector(".form-group textarea");

const createCommentHeader = (name, date) => {
    const commentHeader = document.createElement("div");
    commentHeader.className = "comment-header";
    const commentAuthor = document.createElement("span");
    commentAuthor.className = 'comment-author';
    commentAuthor.innerText = name;
    const commentDate = document.createElement("span");
    commentDate.className = 'comment-date';
    commentDate.innerText = date;
    commentHeader.appendChild(commentAuthor);
    commentHeader.appendChild(commentDate);
    return commentHeader;
}

const createCommentBody = (text) => {
    const commentBody = document.createElement("div");
    commentBody.className = "comment-body";
    const commentContent = document.createElement("p");
    commentContent.className = "comment-content";
    commentContent.innerText = text;
    commentBody.appendChild(commentContent);
    return commentBody;
}

const incrementVotes = (votesCounter) => {
    let votes = votesCounter.innerText;
    votes++;
    votesCounter.innerText = votes;
}

const createCommentFooter = () => {
    const commentFooter = document.createElement("div");
    commentFooter.className = "comment-footer";

    const buttonUp = document.createElement("button");
    buttonUp.setAttribute('type', 'button');
    buttonUp.className = "btn vote-up";
    const iconUp = document.createElement("i");
    iconUp.className = "fas fa-thumbs-up";
    buttonUp.appendChild(iconUp);
    commentFooter.appendChild(buttonUp)
    const votesUp = document.createElement("span");
    votesUp.className = "comment-votes-up";
    votesUp.innerText = 0;
    commentFooter.appendChild(votesUp);

    const buttonDown = document.createElement("button");
    buttonDown.setAttribute('type', 'button');
    buttonDown.className = "btn vote-down";
    const iconDown = document.createElement("i");
    iconDown.className = "fas fa-thumbs-down";
    buttonDown.appendChild(iconDown);
    commentFooter.appendChild(buttonDown)
    const votesDown = document.createElement("span");
    votesDown.className = "comment-votes-down";
    votesDown.innerText = 0;
    commentFooter.appendChild(votesDown);

    buttonUp.addEventListener("click", () => {
        incrementVotes(votesUp);
    })

    buttonDown.addEventListener("click", () => {
        incrementVotes(votesDown);
    })

    return commentFooter;
}

const createComment = (commentText) => {
    const commentWrap = document.createElement("div");
    commentWrap.className = "comment";
    const actualDate = new Date().toLocaleString();
    commentWrap.appendChild(createCommentHeader('default_name', actualDate));
    commentWrap.appendChild(createCommentBody(commentText));
    commentWrap.appendChild(createCommentFooter());
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

// votes for static first comment
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
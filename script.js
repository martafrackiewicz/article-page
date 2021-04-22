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

    commentWrap.innerHTML += `<div class="comment-footer">
                                <button type="button" class="btn vote-up">
                                    <i class="fas fa-thumbs-up"></i>
                                </button>
                                <span class="comment-votes-up">0</span>
                                <button type="button" class="btn vote-up">
                                    <i class="fas fa-thumbs-down"></i>
                                </button>
                                <span class="comment-votes-down">0</span>
                            </div>`;

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
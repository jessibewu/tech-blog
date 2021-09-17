async function deleteCommentHandler(event) {
event.preventDefault();

  const comment = document.querySelector('input[name="comment"]');
  const comment_id = comment.getAttribute('data-id');
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  console.log("comment, comment_id");

  const response = await fetch(`/api/comments/${comment_id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace(`/dashboard/edit/${post_id}`);
  } else {
    alert(response.statusText);
  }
}

const btns = document.getElementsByClassName("delete-comment-btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", this.deleteCommentHandler.bind(this)) 
    };
  
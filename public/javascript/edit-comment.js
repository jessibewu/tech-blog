async function editCommentHandler() {
  //event.preventDefault();
  
  const comment_content = document.querySelector('input[name="comment"]').value;

  const comment = document.querySelector('input[name="comment"]');
  const comment_id = comment.getAttribute('data-id');

  // const post_id = window.location.toString().split('/')[
  //     window.location.toString().split('/').length - 1
  //   ];

  console.log(comment_content, comment, comment_id);

  const response = await fetch(`/api/comments/${comment_id}`, {
      method: 'PUT',
      body: JSON.stringify({
        comment_content
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    }).catch((err) => {console.log(err)});
  
    
    if (response.ok) {
     // document.location.replace(`/dashboard/edit/${post_id}`);
     console.log(response);
    } else {
      alert(response.statusText);
    }
}

document.querySelector('.edit-comment-btn').addEventListener('click', editCommentHandler);
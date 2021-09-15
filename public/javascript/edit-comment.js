async function editFormHandler(event) {
  event.preventDefault();

  const comment = document.querySelector('input[name="comment"]').value;
  // const id = window.location.toString().split('/')[
  //     window.location.toString().split('/').length - 1
  //   ];

  const response = await fetch(/api/comments/id, {
      method: 'PUT',
      body: JSON.stringify({
        comment
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
}

document.querySelector('.comments').addEventListener('submit', editFormHandler);
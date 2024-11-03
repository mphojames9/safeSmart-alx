const form = document.getElementById('login')
    const login_popup_form = document.querySelector('.login-popup');
    const signInButton = document.querySelector(".sign-in-button");
    const signOutButton = document.querySelector('.sign-out-section')
		form.addEventListener('submit', login)

		async function login(event) {
			event.preventDefault()
			const username = document.getElementById('username').value
			const password = document.getElementById('password').value

			const result = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username,
					password
				})
			}).then((res) => res.json())

			if (result.status === 'ok') {
				// everythign went fine
				console.log('Got the token: ', result.data)
				localStorage.setItem('token', result.data)
        login_popup_form.classList.remove("showForm");
				alert('Success')
			} else {
				alert(result.error)
			}
      getLocalStorage_items()
		}

    function getLocalStorage_items(){
      const getLocalStorage_token = localStorage.getItem('token');
      
      if(getLocalStorage_token === null){
        signInButton.style.display = "block";
        signOutButton.style.display = "none";
      }
      else{
        signInButton.style.display = "none";
        signOutButton.style.display = "flex";
      }
    }
    getLocalStorage_items();
    signOutButton.addEventListener("click",()=>{
      localStorage.clear()
      getLocalStorage_items()
    })

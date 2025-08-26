    const validateForm = document.getElementById("signupForm") as HTMLFormElement
    const form = {
        name: document.querySelector('#name') as HTMLInputElement,
        email: document.querySelector('#email') as HTMLInputElement,
        password: document.querySelector('#password') as HTMLInputElement
    }
    const submit = document.getElementById("submit")
    submit?.addEventListener('click', registerUser)
    async function registerUser(e: Event) {
        try {
            if(!validateForm.checkValidity()){
                return;
            }
            e.preventDefault();
            if(form && form.email && form.password) {
                const res = await fetch(`https://deep-linking-psi.vercel.app/signup`, {
                    headers: {"Content-type": "application/json"},
                    method: "POST",
                    body: JSON.stringify({
                        name: form.name.value.trim(),
                        email: form.email.value.trim(),
                        password: form.password.value.trim()
                    })
                })
            }

        } catch(err: unknown) {
            if (err instanceof Error){
                console.error("Registration failed: ", err)
            }
        }
    }


export default function createAuthForm(form, { handleAuth }) {

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // *** make form data and call handleAuth with email and password
        const formData = new FormData(form);
        const userName = formData.get('email');
        const userPassword = formData.get('password');

        handleAuth(userName, userPassword);
    });

    return () => { };
}
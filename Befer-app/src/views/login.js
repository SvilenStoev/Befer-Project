import { login } from '../api/user.js';
import { html, until } from '../lib.js';

const loginTemplate = (onSubmit) => html`
<form @submit=${onSubmit}>
    <h2>Login</h2>
    <div>
        <label>Username:</label>
        <input type="text" placeholder="Username" name="username">
    </div>
    <div>
        <label>Password:</label>
        <input type="password" placeholder="Password" name="password">
    </div>

    <button class="btn" type="submit">Login</button>
</form>`;

export function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const username = formData.get('username');
        const password = formData.get('password');

        const result = await login(username, password);
    }
}
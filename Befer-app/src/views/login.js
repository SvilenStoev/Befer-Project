import { login } from '../api/user.js';
import { html, until } from '../lib.js';
import { createSubmitHandler } from '../util.js';

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
    ctx.render(loginTemplate(createSubmitHandler(onSubmit, 'username', 'password')));

    async function onSubmit({ username, password }) {
        SlickLoader.enable();

        if (username == '' || password == '') {
            return alert('!!');
        }

        await login(username, password);
        
        SlickLoader.disable();
        ctx.updateSession();
        ctx.updateUserNav();
        ctx.page.redirect('/catalog');
    }
}
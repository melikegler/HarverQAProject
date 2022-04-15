import { Selector } from 'testcafe';

fixture`Login Page`
    .page`https://the-internet.herokuapp.com/login`;

test('Login Page', async t => {
    await t
    .typeText('#login', 'tomsmith')
    .typeText('#password', 'SuperSecretPassword!')
    .click('#login')
});
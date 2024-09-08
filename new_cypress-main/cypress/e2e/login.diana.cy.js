describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт 
         cy.get('#mail').type('german@dolnikov.ru'); // нашли поле логин и ввели логин
         cy.get('#pass').type('iLoveqastudio1'); // нашли поле пароль и ввели пароль
         cy.get('#loginButton').click(); // нашли кнопку Войти и нажали
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверили, что есть надпись и отображается правильно
         cy.get('#messageHeader').should('be.visible'); // проверили, что надись видно
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверили, что есть крестик и его видно
     })

     it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').click(); // нашли кнопку Забыл пароль и нажали
        cy.get('#mailForgot').type('german@dolnikov.ru'); // нашли поле логин и ввели правильный логин
        cy.get('#restoreEmailButton').click (); // нашли кнопку Отправить код и нажали
        cy.get('#messageHeader').contains ('Успешно отправили пароль на e-mail'); // проверили, что есть надпись и отображается правильно
        cy.get('#messageHeader').should('be.visible'); // проверили, что надись видно
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверили, что есть крестик и его видно
    })

    it('Неправильный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('diana.diana222@mail.ru'); // нашли поле логин и неправильный логин
        cy.get('#pass').type('iLoveqastudio1'); // нашли поле пароль и ввели пароль
        cy.get('#loginButton').click(); // нашли кнопку Войти и нажали
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверили, что есть надпись и отображается правильно
        cy.get('#messageHeader').should('be.visible'); // проверили, что надись видно
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверили, что есть крестик и его видно
    })

    it('Правильный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // нашли поле логин и ввели правильны логин
        cy.get('#pass').type('iLoveqastudio222'); // нашли поле пароль и ввели неверный пароль
        cy.get('#loginButton').click(); // нашли кнопку Войти и нажали
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверили, что есть надпись и отображается правильно
        cy.get('#messageHeader').should('be.visible'); // проверили, что надись видно
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверили, что есть крестик и его видно
 })

    it('Ввести логин без @', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // нашли поле логин и ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // нашли поле пароль и ввели верный пароль
        cy.get('#loginButton').click(); // нашли кнопку Войти и нажали
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверили, что есть надпись и отображается правильно
        cy.get('#messageHeader').should('be.visible'); // проверили, что надись видно
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверили, что есть крестик и его видно
})

it('Ввести логин с разным регистром', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#mail').type('GeRman@DolniKov.ru'); // нашли поле логин и ввели логин c разным регистром
    cy.get('#pass').type('iLoveqastudiov1'); // нашли поле пароль и ввели верный пароль
    cy.get('#loginButton').click(); // нашли кнопку Войти и нажали
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверили, что есть надпись и отображается правильно
    cy.get('#messageHeader').should('be.visible'); // проверили, что надись видно
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверили, что есть крестик и его видно

})
})
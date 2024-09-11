describe('E2E покупка нового аватара для своего тренера', function () {

    it('Покупка автара', function () {
         cy.visit('https://pokemonbattle.ru/'); // зашли на сайт 
         cy.wait(2000);
         cy.get('.auth__restore').should('be.visible'); // проверили видна ли кнопка Восстановить пользователю
         cy.get('.auth__form > .auth__text').should('be.visible'); // проверили видна ли кнопка Заргестрироваться пользователю
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN '); // нашли поле логин и ввели правильный логин 
         cy.get('#password').type('USER_PASSWORD'); // нашли поле пароль и ввели верный пароль
         cy.get('.auth__button').click({ force: true }); //нашли кнопку Войти и нажали
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // нашли кнопку со своим id и нажали    
         cy.wait(2000);
         cy.get('[href="/shop"]').click({ force: true }); // нашли кнопку Смена аватара и нажали 
         cy.wait(2000);
         cy.get(':nth-child(1) > .shop__button').click({ force: true }); // нашли кнопку Купить и нажали 
         cy.get('.payment__info-button-v2').should('be.visible'); // проверили, что кнопка V видна пльзователю
         cy.get('.payment__info-button-v2').click({ force: true }); // нашли кнопку V и нажали 
         cy.get('.payment__info-text-new').should('be.visible'); // проверили, что цена видна пользователю 
         cy.get('.pay__comeback-button').contains('Вернуться в битву покемонов'); // нашли текст "Вернуться в битву покемонов" и проверили, что он верный
         cy.get('.pay__comeback-button').should('be.visible'); // проверили, что текст "Вернуться в битву покемонов" виден пользоваетлю
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('"4111111111111111'); // нашли поле Номер и ввели номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1025'); // нашли поле Срок и ввели верный срок 
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // нашли поле CCV и ввели вверный код
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Diana Yakhina'); // нашли поле Имя и ввели имя 
         cy.get('.pay-btn').click({ force: true }); // нашли кнопку Оплатить и нажали 
         cy.get('.payment__info-text-new').should('be.visible'); // проверили, что цена видна пользователю
         cy.get('.payment__info-button-v2').click ( { force: true } ); // нашли кнопку V и нажали
         cy.get('.payment__info-button-v2').should('be.visible'); // проверили, что кнопка V видна пльзователю
         cy.get('#cardnumber').type('56456'); // нашли поле Код и ввели верный код
         cy.get('.payment__submit-button').click({ force: true }); // нашли кнопку Отправить и нажали 
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // нашли текст "Покупка прошла успешно" и проверили, что он верный 
         cy.get('.payment__font-for-success').should('be.visible'); // проверили, что текст "Покупка прошла успешно" виден пользователю 
         cy.get('.payment__back-button-success').contains('Вернуться в битву покемонов'); // нашли текст "Вернуться в битву покемонов" и проверили, что он верный
         cy.get('.payment__back-button-success').should('be.visible'); // проверили, что текст "Вернуться в битву покемонов" виден пользоваетлю
         cy.get('.payment__info-text-new').should('be.visible'); // проверили, что цена видна пользователю
         cy.get('.payment__info-button-v2').should('be.visible'); // проверили, что кнопка V видна пльзователю
         cy.get('.payment__info-button-v2').click ( { force: true } ); // нашли кнопку V и нажали 
         
        })
        it('Повторная покупка аватара', function () {
          cy.visit('https://pokemonbattle.ru/'); // зашли на сайт 
          cy.wait(2000);
          cy.get('.auth__restore').should('be.visible'); // проверили видна ли кнопка Восстановить пользователю
          cy.get('.auth__form > .auth__text').should('be.visible'); // проверили видна ли кнопка Заргестрироваться пользователю
          cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // нашли поле логин и ввели правильный логин 
          cy.get('#password').type('USER_PASSWORD'); // нашли поле пароль и ввели верный пароль
          cy.get('.auth__button').click({ force: true }); //нашли кнопку Войти и нажали
          cy.wait(2000);
          cy.get('.header__container > .header__id').click({ force: true }); // нашли кнопку со своим id и нажали    
          cy.wait(2000);
          cy.get('[href="/shop"]').click({ force: true }); // нашли кнопку Смена аватара и нажали 
          cy.wait(2000);
          cy.get(':nth-child(1) > .shop__button').click({ force: true }); // нашли кнопку Купить и нажали 
          cy.get('.payment__info-button-v2').should('be.visible'); // проверили, что кнопка V видна пльзователю
          cy.get('.payment__info-button-v2').click({ force: true }); // нашли кнопку V и нажали 
          cy.get('.payment__info-text-new').should('be.visible'); // проверили, что цена видна пользователю 
          cy.get('.pay__comeback-button').contains('Вернуться в битву покемонов'); // нашли текст "Вернуться в битву покемонов" и проверили, что он верный
          cy.get('.pay__comeback-button').should('be.visible'); // проверили, что текст "Вернуться в битву покемонов" виден пользоваетлю
          cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('"4111111111111111'); // нашли поле Номер и ввели номер карты
          cy.get(':nth-child(1) > .pay_base-input-v2').type('1025'); // нашли поле Срок и ввели верный срок 
          cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // нашли поле CCV и ввели вверный код
          cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Diana Yakhina'); // нашли поле Имя и ввели имя 
          cy.get('.pay-btn').click({ force: true }); // нашли кнопку Оплатить и нажали 
          cy.get('.payment__info-text-new').should('be.visible'); // проверили, что цена видна пользователю
          cy.get('.payment__info-button-v2').click ( { force: true } ); // нашли кнопку V и нажали
          cy.get('.payment__info-button-v2').should('be.visible'); // проверили, что кнопка V видна пльзователю
          cy.get('#cardnumber').type('56456'); // нашли поле Код и ввели верный код
          cy.get('.payment__submit-button').click({ force: true }); // нашли кнопку Отправить и нажали 
          cy.get('.k_error').contains('Данный аватар уже куплен'); // проверили, что текст "Данный аватар уже куплен" верный 
          cy.get('.k_error').should('be.visible'); // проверили, что текст "Данный аватар уже куплен"  виден пользователю 
          cy.get('.payment__defolt-decline').click ( { force: true } ); // нашли кнопку Отменить и нажали
        }) 

}) 
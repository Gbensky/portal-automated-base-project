/**
 * Created by Gbenro on 04/06/2018.
 */

'use strict';

Feature('Login');

Scenario('Enter Valid Email address and Password and Click Login', (I) => {
    I.amOnPage('/#loginAppend');
    I.fillField('Email Address','{{email_address}}');
    I.fillField('Password','{{password}}');
    I.click('{{signInButton}}');
    I.wait(5);
    I.see("{{confirmText}}");
});

Scenario('Enter Non-existing Email address and Click Login', (I) => {
    I.amOnPage('/#loginAppend');
    I.fillField('Email Address','{{email_address}}');
    I.fillField('Password','{{password}}');
    I.click('{{signInButton}}');
    I.wait(5);
    I.see("{{confirmText}}");
});

Scenario('Enter valid email address and a wrong password and Click Login', (I) => {
    I.amOnPage('/#loginAppend');
    I.fillField('Email Address','{{email_address}}');
    I.fillField('Password','{{password}}');
    I.click('{{signInButton}}');
    I.wait(5);
    I.see("{{confirmText}}");
});


Scenario('Enter valid password and email address with spaces before and after the email address and Click Login', (I) => {
    I.amOnPage('/#loginAppend');
    I.fillField('Email Address','{{email_address}}');
    I.fillField('Password','{{password}}');
    I.click('{{signInButton}}');
    I.wait(5);
    I.see("{{confirmText}}");
});

Scenario('Enter an invalid email address format and Click Login', (I) => {
    I.amOnPage('//#loginAppend');
    I.fillField('Email Address','{{email_address}}');
    I.fillField('Password','{{password}}');
    I.click('{{signInButton}}');
    I.wait(5);
    I.see('{{confirmText}}');
});

Scenario('Leave Email address field blank and Click Login', (I) => {
    I.amOnPage('//#loginAppend');
    I.fillField('Email Address','{{email_address}}');
    I.fillField('Password','{{password}}');
    I.click('{{signInButton}}');
    I.wait(5);
    I.see('{{confirmText}}');
});

Scenario('Leave Password field blank and Click Login', (I) => {
    I.amOnPage('//#loginAppend');
    I.fillField('Email Address','{{email_address}}');
    I.fillField('Password','{{password}}');
    I.click('{{signInButton}}');
    I.wait(5);
    I.see('{{confirmText}}');
});


Scenario('Test Leave email address field and password field blank and Click Login', (I) => {
    I.amOnPage('//#loginAppend');
    I.fillField('Email Address','{{email_address}}');
    I.fillField('Password','{{password}}');
    I.click('{{signInButton}}');
    I.wait(5);
    I.see('{{confirmText}}');
});
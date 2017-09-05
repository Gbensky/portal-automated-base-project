/**
 * Created by Gbenro on 14/07/2017.
 */

'use strict';
let moreChar;
let name;
let check;
let fieldData1, fieldData2, fieldData3; // These are dummy variables

Feature('{Feature}/{Sub-feature}');

Scenario('List View {Feature}/Empty state', function*(I) {
    I.login('{email_add}/{username}', '{password}');
    I.wait(3);
    I.click("{Feature}");
    I.wait(3);
    I.click("{Sub-Feature");
    I.wait(3);
    check = yield I.executeScript(function () {
        if(document.querySelector("tbody")!=null){
            return "exist";
        }
        else
            return "non-exist";
    });
    if(check=="exist") {
        I.see("{Feature}/{Sub-feature}");
        I.see("[Create (New/{Feature}/{Sub-feature)]/[New {Feature}/{Sub-feature}]");
        I.see("S/N");
        I.see("{Column1}");
        I.see("{Column2}");
        I.see("{Column3}");
        I.see("{Column4}");
        I.see("{Column5}");
        // You can add more columns
        // if(multiple_action_buttons_exist)
        // I.click('{enter xpath of action button}');
        // I.see("{actionButton1");
        // I.see("{actionButton1");
        // You can add more buttons
    }
    else{
        I.see("[Create (New/{Feature}/{Sub-feature)]/[New {Feature}/{Sub-feature}]");
        I.see("{Empty State Message for Feature/Sub-Feature}");
    }
});

Scenario('Click Next Page', function* (I) {
    I.login('{email_add}/{username}', '{password}');
    I.resizeWindow('1400', '900');
    I.wait(3);
    I.click("{Feature}");
    I.wait(3);
    // if sub feature exists and it's to be used
    // I.click("{Sub-Feature}");
    I.wait(3);
    check = yield I.executeScript(function () {
        if(document.querySelector(".pagination")!=null){
            return "exist";
        }
        else
            return "non-exist";
    });
    I.wait(3);
    if(check=="exist") {
        I.scrollTo("//*[contains(@class,'pagination')]/li[contains(@class,'next')]");
        I.wait(5);
        I.click("\u00BB", "//*[contains(@class,'pagination')]/li[contains(@class,'next')]/a");
        I.wait(5);
        I.seeInCurrentUrl('/{feature}?page=2');
        I.wait(3);
        I.see("{Feature}/{Sub-feature}");
        I.see("[Create (New/{Feature}/{Sub-feature)]/[New {Feature}/{Sub-feature}]");
        I.see("S/N");
        I.see("{Column1}");
        I.see("{Column2}");
        I.see("{Column3}");
        I.see("{Column4}");
        I.see("{Column5}");
        // You can add more columns
        // if(multiple_action_buttons_exist)
        // I.click('{enter xpath of action button}');
        // I.see("{actionButton1");
        // I.see("{actionButton1");
        // You can add more buttons
        I.see("21");
    }

});

Scenario('Click On the Create [Create (New/{Feature}/{Sub-feature)]/[New {Feature}/{Sub-feature}] button', function* (I) {
    I.login('{email_add}/{username}', '{password}');
    I.wait(3);
    I.click("{Feature}");
    I.wait(3);
    // if sub feature exists and it's to be used
    // I.click("{Sub-Feature}");
    I.click("[Create (New/{Feature}/{Sub-feature)]/[New {Feature}/{Sub-feature}]");
    I.wait(3);
    I.see("[Create (New/{Feature}/{Sub-feature)]/[New {Feature}/{Sub-feature}]");
    I.see("{FieldLabel1}");
    I.see("{FieldLabel2}");
    I.see("{FieldLabel3}");
    // You can add more field label if there are fields
    I.see('{Create/Save}');
    //if '×'
    //I.see('×');
});

Scenario('Click On the Cancel button or the close icon on the Create Modal', (I)=> {
    I.login('{email_add}/{username}', '{password}');
    I.wait(3);
    I.click("{Feature}");
    I.wait(3);
    // if sub feature exists and it's to be used
    // I.click("{Sub-Feature}");
    I.click("[Create (New/{Feature}/{Sub-feature)]/[New {Feature}/{Sub-feature}]");
    I.wait(3);
    within('{#createModal}', function () {  //note: #createModal is not fixed
        I.click("Cancel");
    });
    I.wait(3);
    I.see("[Create (New/{Feature}/{Sub-feature)]/[New {Feature}/{Sub-feature}]");
    I.see("S/N");
    I.see("{Column1}");
    I.see("{Column2}");
    I.see("{Column3}");
    I.see("{Column4}");
    I.see("{Column5}");
    // You can add more columns
    I.click("[Create (New/{Feature}/{Sub-feature)]/[New {Feature}/{Sub-feature}]");
    I.wait(3);
    within('{#createModal}', function () {  //note: #createModal is not fixed
        I.click('×');
    });
    I.wait(3);
    I.see("[Create (New/{Feature}/{Sub-feature)]/[New {Feature}/{Sub-feature}]");
    I.see("S/N");
    I.see("{Column1}");
    I.see("{Column2}");
    I.see("{Column3}");
    I.see("{Column4}");
    I.see("{Column5}");
    // You can add more columns

});

Scenario('Leave all the field blank and click the Create button', function*(I) {
    I.login('{email_add}/{username}', '{password}');
    I.wait(3);
    I.click("{Feature}");
    I.wait(3);
    // if sub feature exists and it's to be used
    // I.click("{Sub-Feature}");
    I.see("{Feature}/{Sub-feature}");
    I.wait(3);
    I.click("[Create (New/{Feature}/{Sub-feature)]/[New {Feature}/{Sub-feature}]");
    I.wait(3);
    within('{#createModal}', function () {  //note: #createModal is not fixed
        I.wait(5);
        I.fillField("{FieldLabel1}","");
        I.fillField("{FieldLabel2}","");
        // You can add more field label if there are fields
        I.click("{Create/Save}");
        I.waitForText("{FieldLabel1} cannot be blank.");
        I.waitForText("{FieldLabel2} cannot be blank.");
        // You can add more messages based on additional fields
    });
});

//this is for features with validation
Scenario('Enter Invalid field(s) and click the Create button', function*(I) {
    fieldData1 = yield I.getFieldData();
    fieldData2 = yield I.getFieldData();
    fieldData3 = yield I.getFieldData();
    I.login('{email_add}/{username}', '{password}');
    I.wait(3);
    I.click("{Feature}");
    I.wait(3);
    // if sub feature exists and it's to be used
    // I.click("{Sub-Feature}");
    I.see("{Feature}/{Sub-feature}");
    I.wait(3);
    I.click("[Create (New/{Feature}/{Sub-feature)]/[New {Feature}/{Sub-feature}]");
    I.wait(3);
    within('{#createModal}', function (){
        I.fillField("{FieldLabel1}",fieldData1);
        I.fillField("{FieldLabel2}",fieldData2);
        I.fillField("{FieldLabel3}",fieldData3);
        I.click("{Create/Save}");
        I.waitForText("{FieldLabel1} is not valid");
    });
});

Scenario('Enter Existing field(s) and click the Create button', function*(I) {
    fieldData1 = yield I.getFieldData();
    fieldData2 = yield I.getFieldData();
    fieldData3 = yield I.getFieldData();
    I.login('{email_add}/{username}', '{password}');
    I.wait(3);
    I.click("{Feature}");
    I.wait(3);
    // if sub feature exists and it's to be used
    // I.click("{Sub-Feature}");
    I.see("{Feature}/{Sub-feature}");
    I.wait(3);
    I.click("[Create (New/{Feature}/{Sub-feature)]/[New {Feature}/{Sub-feature}]");
    I.wait(3);
    within('{#createModal}', function (){
        I.fillField("{FieldLabel1}",fieldData1);
        I.click("{Create/Save}");
        I.waitForText("{FieldLabel1} exists");
    });
});



Scenario('Enter valid field(s) and click the Create button', function*(I) {
    fieldData1 = yield I.getFieldData();
    fieldData2 = yield I.getFieldData();
    fieldData3 = yield I.getFieldData();
    I.login('{email_add}/{username}', '{password}');
    I.wait(3);
    I.click("{Feature}");
    I.wait(3);
    // if sub feature exists and it's to be used
    // I.click("{Sub-Feature}");
    I.see("{Feature}/{Sub-feature}");
    I.wait(3);
    I.click("[Create (New/{Feature}/{Sub-feature)]/[New {Feature}/{Sub-feature}]");
    I.wait(3);
    within('{#createModal}', function (){
        I.fillField("{FieldLabel1}",fieldData1);
        I.fillField("{FieldLabel2}",fieldData2);
        I.fillField("{FieldLabel3}",fieldData3);
        I.click("{Create/Save}");
        I.waitForText("{Feature/Sub-Feature} successfully created");
    });
});

Scenario('Click Action and click subaction', function*(I) {
    I.login('{email_add}/{username}', '{password}');
    I.wait(3);
    I.click("{Feature}");
    I.wait(3);
    // if sub feature exists and it's to be used
    // I.click("{Sub-Feature}");
    I.wait(3);
    I.click('{xpath to action bution');
    I.click("{Action Button}");
    I.wait(3);
    within('#actionModal', function (){
        I.wait(5);
        I.see("{Message");
        I.click("SubAction");
    });
    //Depending on the action
    //I.see(fieldData1);
    //I.dontSee(fieldData1);
});
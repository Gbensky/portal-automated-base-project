/**
 * Created by Gbenro on 21/08/2017.
 */

/**
 * Created by Gbenro on 08/06/2017.
 */
'use strict';

let randToken = require('rand-token');
let faker = require('Faker');
let Chance = require('chance');
let chance = new Chance();

class Base extends Helper {

    getRandomEmailAddress() {
        return faker.Name.firstName() + randToken.generate(2,"0123456789") + '@putsbox.com';
    }

    getRandomFirstName() {
        return faker.Name.firstName();
    }

    getRandomLastName() {
        return faker.Name.lastName();
    }

    getRandomInvalidName() {
        return randToken.generate(6,"abcdefghijklmnopqrstuvwxyz")+randToken.generate(2,"0123456789")+randToken.generate(1,"!@#'.,?;:><~`}{[]$%^&*()_-=+|");
    }

    getRandomSectionName() {
        return faker.Lorem.words(1)+faker.Lorem.words(1);
    }
    getRandomDomainName() {
        return faker.Internet.domainName();
    }

    getStaffId(){
        return randToken.generate(4,"1234567890")
    }

    getRandomMBio(){
        return faker.Lorem.paragraph(7);
    }

    getRandomWords(){
        return faker.Lorem.paragraph(2);
    }

    getMoreWords(){
        return chance.string({length: 201});
    }

    getRandomImage(){
        return faker.Image.imageUrl(200,200,"nature");
    }

    getRandomRole() {
        var randomrole = Math.floor(Math.random() * 11);

        switch (randomrole){
            case 0:

                return "Writer" + randToken.generate(5, "012345678");
                break;
            case 1:

                return "Editor" + randToken.generate(5, "012345678");
                break;

            case 2:
                return "Expert" + randToken.generate(5, "012345678");
                break;

            case 3:

                return "System Administrator" + randToken.generate(5, "012345678");
                break;

            case 4:
                return "Manager" + randToken.generate(5, "012345678");
                break;

            case 5:
                return "Chairman" + randToken.generate(5, "012345678");
                break;

            case 6:
                return "President" + randToken.generate(5, "012345678");
                break;

            case 7:
                return "Vice President" + randToken.generate(5, "012345678");
                break;

            case 8:
                return "Developer" + randToken.generate(5, "012345678");
                break;

            case 9:
                return "Secretary" + randToken.generate(5, "012345678");
                break;

            case 10:
                return "Tester" + randToken.generate(5, "012345678");
                break;
        }

    }

}

module.exports = Base;
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function () {
    return actor({

        // Define custom steps here, use 'this' to access default methods of I.
        // It is recommended to place a general 'login' function here.

        login: function (email, password) {
            this.amOnPage('/login');
            this.fillField('Email', email);
            this.fillField('Password', password);
            this.click('Sign in');
            this.wait(7);
        },

        part: function (description) {
            this.executeScript(function (description) {
                if(description.substr(-3)=="..."){

                    var des = description.substr(0,(description.length-3));
                    return des;
                }
                else{
                    return description;
                }

            }, description);
        },

        cut: function (description,length) {
            this.executeScript(function (description,length) {
                return description.split(/\s+/).slice(0,length).join(" ");

            }, description, length);
        },

        // {emails: ["a@b.c", "a@b.c"]}
        csv: function (numberOfRows, data) {
            this.executeScript(function () {
                var node = document.createElement("script");                 // Create a <li> node
                node.src = "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.js";// Append the text to <li>
                document.head.appendChild(node);
            });
            this.wait(20);
            var data = data || {emails: [], lastnames: [], firstnames: [], staff_ids: []};
            this.executeScript(function (numberOfRows, data) {
                var firstName1 = faker.name.firstName();
                var lastName1 = faker.name.lastName();
                var downloadName = firstName1 + lastName1;

                var stockData = [];
                if(numberOfRows==0) {stockData.push({
                    firstname: getField('firstnames', faker.name.firstName()),
                    lastname: getField('lastnames', faker.name.lastName()),
                    staff_id: getField('staff_ids', faker.random.number(1000)),
                    email: getField('emails', getRandomEmail())
                });}
                else {
                    for (var i = 0; i < numberOfRows; i++) {
                        stockData.push({
                            firstname: getField('firstnames', faker.name.firstName()),
                            lastname: getField('lastnames', faker.name.lastName()),
                            staff_id: getField('staff_ids', faker.random.number(1000)),
                            email: getField('emails', getRandomEmail())
                        });
                    }}

                function getField(arrayKey, defaultValue) {
                    if (data[arrayKey].length > i) {
                        var keyData = data[arrayKey];
                        return keyData[i];
                    } else {
                        return defaultValue;
                    }
                }

                function convertArrayOfObjectsToCSV(args) {
                    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

                    data = args.data || null;
                    if (data == null || !data.length) {
                        return null;
                    }

                    columnDelimiter = args.columnDelimiter || ',';
                    lineDelimiter = args.lineDelimiter || '\n';

                    keys = Object.keys(data[0]);

                    result = '';
                    result += keys.join(columnDelimiter);
                    result += lineDelimiter;

                    //console.log(result);
                    if(numberOfRows==0)
                        return result;
                    else{
                        data.forEach(function (item) {
                            ctr = 0;
                            keys.forEach(function (key) {
                                //if (numberOfRows == 0) result += "";
                                if (ctr > 0) result += columnDelimiter;

                                result += item[key];
                                ctr++;
                            });
                            result += lineDelimiter;
                        });
                        //console.log(result);
                        return result;}
                }

                function downloadCSV(args) {
                    var data, filename, link;
                    var csv = convertArrayOfObjectsToCSV({
                        data: stockData
                    });
                    if (csv == null) return;

                    filename = args.filename || 'export.csv';

                    if (!csv.match(/^data:text\/csv/i)) {
                        csv = 'data:text/csv;charset=utf-8,' + csv;
                    }
                    data = encodeURI(csv);

                    link = document.createElement('a');
                    link.setAttribute('href', data);
                    link.setAttribute('download', filename);
                    link.click();
                }

                function getRandomEmail() {
                    return faker.name.firstName() + faker.random.number(1000) + "@putsbox.com";
                }


                // console.log(stockData);
                // console.log(numberOfRows);
                // console.log(data);
                function sleep(delay) {
                    var start = new Date().getTime();
                    while (new Date().getTime() < start + delay);
                };
                sleep(5000);
                var node = document.createElement("a");                 // Create a <li> node
                var textnode = document.createTextNode(downloadName);         // Create a text node
                node.appendChild(textnode);
                node.id = "test";
                node.href = "#";
                node.onclick = downloadCSV({filename: downloadName + ".csv"});                              // Append the text to <li>
                document.getElementsByClassName("content-header")[0].appendChild(node);

            }, numberOfRows, data);
        },

        badCsv: function (numberOfRows, data) {
            this.executeScript(function () {
                var node = document.createElement("script");                 // Create a <li> node
                node.src = "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.js";// Append the text to <li>
                document.head.appendChild(node);
            });
            this.wait(10);
            var data = data || {emails: [], lastnames: [], firstnames: [], staff_ids: []};
            this.executeScript(function (numberOfRows, data) {
                var firstName1 = faker.name.firstName();
                var lastName1 = faker.name.lastName();
                var downloadName = firstName1 + lastName1;

                var stockData = [];

                for (var i = 0; i < numberOfRows; i++) {
                    stockData.push({
                        firstnam: getField('firstnames', faker.name.firstName()),
                        lastnam: getField('lastnames', faker.name.lastName()),
                        staff_i: getField('staff_ids', faker.random.number(1000)),
                        emai: getField('emails', getRandomEmail())
                    });
                }

                function getField(arrayKey, defaultValue) {
                    if (data[arrayKey].length > i) {
                        var keyData = data[arrayKey];
                        return keyData[i];
                    } else {
                        return defaultValue;
                    }
                }

                function convertArrayOfObjectsToCSV(args) {
                    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

                    data = args.data || null;
                    if (data == null || !data.length) {
                        return null;
                    }

                    columnDelimiter = args.columnDelimiter || ',';
                    lineDelimiter = args.lineDelimiter || '\n';

                    keys = Object.keys(data[0]);

                    result = '';
                    result += keys.join(columnDelimiter);
                    result += lineDelimiter;

                    data.forEach(function (item) {
                        ctr = 0;
                        keys.forEach(function (key) {
                            if (ctr > 0) result += columnDelimiter;

                            result += item[key];
                            ctr++;
                        });
                        result += lineDelimiter;
                    });

                    return result;
                }

                function downloadCSV(args) {
                    var data, filename, link;
                    var csv = convertArrayOfObjectsToCSV({
                        data: stockData
                    });
                    if (csv == null) return;

                    filename = args.filename || 'export.csv';

                    if (!csv.match(/^data:text\/csv/i)) {
                        csv = 'data:text/csv;charset=utf-8,' + csv;
                    }
                    data = encodeURI(csv);

                    link = document.createElement('a');
                    link.setAttribute('href', data);
                    link.setAttribute('download', filename);
                    link.click();
                }

                function getRandomEmail() {
                    return faker.name.firstName() + faker.random.number(1000) + "@putsbox.com";
                }



                function sleep(delay) {
                    var start = new Date().getTime();
                    while (new Date().getTime() < start + delay);
                };
                sleep(5000);
                var node = document.createElement("a");                 // Create a <li> node
                var textnode = document.createTextNode(downloadName);         // Create a text node
                node.appendChild(textnode);
                node.id = "test";
                node.href = "#";
                node.onclick = downloadCSV({filename: downloadName + ".csv"});                              // Append the text to <li>
                document.getElementsByClassName("content-header")[0].appendChild(node);

            }, numberOfRows, data);
        }
    });
}


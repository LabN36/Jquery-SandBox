var express = require('express')
var request = require('request')
var fs = require('fs')
var cheerio = require('cheerio')
var app = express()
// app.get('/scrape', function(req, res){
    // url = 'http://www.sanfoundry.com/c-programming-questions-answers-variable-names-2//'
    // url = "http://www.sanfoundry.com/c-programming-questions-answers-variable-names-1/";
    // url = 'http://www.sanfoundry.com/c-programming-questions-answers-assigment-operators-expressions-2/'
    // url = 'http://www.sanfoundry.com/c-test-arithmetic-operators/';
// url = 'http://www.sanfoundry.com/c-plus-plus-interview-questions-answers-types/'
// url = 'http://www.sanfoundry.com/cplusplus-puzzles-checked-iterators/'
// url = 'http://www.sanfoundry.com/c-programming-questions-answers-float-datatype-1/';
// url = "http://www.sanfoundry.com/c-plus-plus-interview-questions-answers-types/"
url = 'http://www.sanfoundry.com/online-c-test-precedence-order-evaluation/'



// app.get('/',function(req,res){
var div = false;var mainArray = [];var setDiv = {};
    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);var parent = true; var child = false;
            var doclength = $('p,.hk1_style-wrap5').length
            // console.log(doclength);
            var di = false;
        //traverse dom
            var questionList = [];//.hk1_style-wrap5, 
            $('p').each(function(i,elem){
                
                // console.log(elem)                
                if(i>1 && i < doclength-4){
                    // })    //each have type,name,children,next,prev,parent,options,attribs
                    //for each for child data,type,next(recrusive),
                    var plainValue = $(this)[0];
                    var iterate = $(this);
                    if(plainValue.children && plainValue.children.length > 1) {
                        console.log("->this question is  > 1 SIMPLE============")
                        if(plainValue.children[0].data == '\n' && plainValue.children[1].attribs.style != null) {
                            console.log("===============SIMPLE QUE. without Advertisement")
                            //attrib.style check for add inside p
                                //simple p with add
                                if(div) {
                                    //que. options & other description(in some cases) 
                                        iterate[0].children.forEach(function(element) {
                                            if(element.type == 'text') {
                                                console.log(element.data)
                                            }
                                        }, this);
                                        console.log("------DIV------------DONE---------------IF-------------"+i);
                                        setDiv = {};
                                        div = false;

                                } else {

                                var set = {};
                                set.question = iterate[0].children[4].data;
                                console.log(set)
                                        iterate[0].children.forEach(function(element) {
                                            if(element.type == 'text') {
                                                console.log(element.data)
                                            }
                                        }, this);
                                mainArray.push(set);
                                console.log("------------------DONE--------------\n--------------"+i)
                                    
                                }

                        } else {
                                    //simple p without add
                                    if(div) {
                                        // console.log(iterate[0])
                                        iterate[0].children.forEach(function(element) {
                                            if(element.type == 'text') {
                                                console.log(element.data)
                                            }
                                        }, this);
                                        console.log("------DIV------------DONE---------------else-------------"+i);
                                        setDiv = {};
                                        div = false;
                                    } else {
                                        var set = {};
                                        // console.log(iterate[0])
                                        // set.question = iterate[0].children[0].data;
                                        // console.log(set)
                                        //  plainValue.children[12].children[0].data.trim();
                                        iterate[0].children.forEach(function(element) {
                                            
                                            if(element.type == 'text') {
                                                console.log(element.data)
                                            }
                                        }, this);
                                        mainArray.push(set)
                                        console.log("------------------DONE---------------else-------------"+i);
                                        // ++i;                                        
                                    }
                        }
                    } else if(iterate[0].name == 'p' && iterate[0].next.next.name == 'div' && iterate[0].children.length == 1 ) {
                        //in general secnarion complex question had only one child ie. a p which contain a single statement
                        console.log("=======-Length = 1 COMPLEX============")

                        console.log("-----------SNIPPED TYPE QUESTION---------------")
                        setDiv = {};
                        setDiv.questionDesc = iterate[0].children[0].data;
                        setDiv.question = iterate.next().text();
                        div = true;
                        console.log(setDiv);
                    } else {
                        // console.log("---------Elsemost ELSE----------------")
                        // console.log($(this).text())

                    }
                    // plainValue.forEach(function(element) {
                        // console.log("---------EACH CUTOFF----------------")
                        // if(element.data) {
                        // console.log(element)
                        // }
                    // }, this);
                    // console.log(plainValue);

                    var htmlValue = $(this).html();
                    var textValue = $(this).text();
                    var htmlJsonObject = {};
                    htmlJsonObject.plainValue = plainValue;
                }
            })
        }
    })
// })

var previous,next;
function checkDivOrP(i,tag,callback){
if(i == 2 ){
    previous = tag;
} else if(i ==3 ) {
    next = tag;
    
} else {
    previous = next;
    next = tag;
}
if(previous == next)

callback(i)
}
app.listen('5000')
console.log("Scrapping Started")



//commented code
                    // console.log($(this)[0].text())
                    // console.log($(this).text());
                    // console.log($('this,div, .collapseomatic_content').text())
                    // console.log($(this).next('.hk1_style-wrap5'));
                    // console.log($(this).nextUntil('.collapseomatic_content ').next().text());
                    // console.log("-----------------------------------------------------")

                    // .text() 
                    // console.log($(this).siblings('.hk1_style-wrap5').text());
                    // console.log('----------------------------------------------------------------------------------------------------');
                    // console.log($(this).next().next().text())
//  if(adStr.trim() == 'advertisements') {
                            // console.log("--------FUCK YEAAAAAAAAAAAAAH")
                        // }//else {
                        //     console.log('---------------CHILD OBJECT--------------')
                        // console.log($(this)[0]);
                        // // console.log($(this).text());
                        // console.log($(this).html());

                        // }

                        // var html = $(this).html()
                        // console.log(html)
                        // var htmlarr = html.split('<br />')
                        // htmlarr.forEach(function(element) {
                            // console.log(element)
                        // }, this);
                // console.log($('collapseomatic_content').text());


// / cycle.js
// 2011-02-23

/*jslint evil: true, regexp: false */

/*members $ref, apply, call, decycle, hasOwnProperty, length, prototype, push,
    retrocycle, stringify, test, toString
*/

if (typeof JSON.decycle !== 'function') {
    JSON.decycle = function decycle(object) {
        "use strict";

// Make a deep copy of an object or array, assuring that there is at most
// one instance of each object or array in the resulting structure. The
// duplicate references (which might be forming cycles) are replaced with
// an object of the form
//      {$ref: PATH}
// where the PATH is a JSONPath string that locates the first occurance.
// So,
//      var a = [];
//      a[0] = a;
//      return JSON.stringify(JSON.decycle(a));
// produces the string '[{"$ref":"$"}]'.

// JSONPath is used to locate the unique object. $ indicates the top level of
// the object or array. [NUMBER] or [STRING] indicates a child member or
// property.

        var objects = [],   // Keep a reference to each unique object or array
            paths = [];     // Keep the path to each unique object or array

        return (function derez(value, path) {

// The derez recurses through the object, producing the deep copy.

            var i,          // The loop counter
                name,       // Property name
                nu;         // The new object or array

            switch (typeof value) {
            case 'object':

// typeof null === 'object', so get out if this value is not really an object.

                if (!value) {
                    return null;
                }

// If the value is an object or array, look to see if we have already
// encountered it. If so, return a $ref/path object. This is a hard way,
// linear search that will get slower as the number of unique objects grows.

                for (i = 0; i < objects.length; i += 1) {
                    if (objects[i] === value) {
                        return {$ref: paths[i]};
                    }
                }

// Otherwise, accumulate the unique value and its path.

                objects.push(value);
                paths.push(path);

// If it is an array, replicate the array.

                if (Object.prototype.toString.apply(value) === '[object Array]') {
                    nu = [];
                    for (i = 0; i < value.length; i += 1) {
                        nu[i] = derez(value[i], path + '[' + i + ']');
                    }
                } else {

// If it is an object, replicate the object.

                    nu = {};
                    for (name in value) {
                        if (Object.prototype.hasOwnProperty.call(value, name)) {
                            nu[name] = derez(value[name],
                                path + '[' + JSON.stringify(name) + ']');
                        }
                    }
                }
                return nu;
            case 'number':
            case 'string':
            case 'boolean':
                return value;
            }
        }(object, '$'));
    };
}


if (typeof JSON.retrocycle !== 'function') {
    JSON.retrocycle = function retrocycle($) {
        "use strict";

// Restore an object that was reduced by decycle. Members whose values are
// objects of the form
//      {$ref: PATH}
// are replaced with references to the value found by the PATH. This will
// restore cycles. The object will be mutated.

// The eval function is used to locate the values described by a PATH. The
// root object is kept in a $ variable. A regular expression is used to
// assure that the PATH is extremely well formed. The regexp contains nested
// * quantifiers. That has been known to have extremely bad performance
// problems on some browsers for very long strings. A PATH is expected to be
// reasonably short. A PATH is allowed to belong to a very restricted subset of
// Goessner's JSONPath.

// So,
//      var s = '[{"$ref":"$"}]';
//      return JSON.retrocycle(JSON.parse(s));
// produces an array containing a single element which is the array itself.

        var px =
            /^\$(?:\[(?:\d?|\"(?:[^\\\"\u0000-\u001f]|\\([\\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*\")\])*$/;

        (function rez(value) {

// The rez function walks recursively through the object looking for $ref
// properties. When it finds one that has a value that is a path, then it
// replaces the $ref object with a reference to the value that is found by
// the path.

            var i, item, name, path;

            if (value && typeof value === 'object') {
                if (Object.prototype.toString.apply(value) === '[object Array]') {
                    for (i = 0; i < value.length; i += 1) {
                        item = value[i];
                        if (item && typeof item === 'object') {
                            path = item.$ref;
                            if (typeof path === 'string' && px.test(path)) {
                                value[i] = eval(path);
                            } else {
                                rez(item);
                            }
                        }
                    }
                } else {
                    for (name in value) {
                        if (typeof value[name] === 'object') {
                            item = value[name];
                            if (item) {
                                path = item.$ref;
                                if (typeof path === 'string' && px.test(path)) {
                                    value[name] = eval(path);
                                } else {
                                    rez(item);
                                }
                            }
                        }
                    }
                }
            }
        }($));
        return $;
    };
}
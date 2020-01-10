"# ECMAScript6 - The Basic of ES6"

   
    <pre>
    #Creating Objects and class 
 
    <code> 'use strict'
            class Polygon {
                constructor(height, width) {
                    this.h = height;
                    this.w = width;
                }
                test() {
                    console.log("The height of the polygon: ", this.h)
                    console.log("The width of the polygon: ", this.w)
                }
            }
            //creating an instance  
            var polyObj = new Polygon(10, 20);
            polyObj.test();
            class Recrengel {
                constructor(rwidth, rheight) {
                    this.rw = rwidth;
                    this, rh = rheight;
                }
                createRec() {
                    console.log("The height of the polygon: ", this.rh)
                    console.log("The width of the polygon: ", this.rw)
                }
            }
            //creating an instance  
            var recObj = new Recrengel(100, 80);
            myrec = recObj.createRec();
            console.log("rectangle: " + myrec);
        </code>
    </pre>
    <script>
        'use strict'
        class Polygon {
            constructor(height, width) {
                this.h = height;
                this.w = width;
            }
            test() {
                console.log("The height of the polygon: ", this.h)
                console.log("The width of the polygon: ", this.w)
            }
        }
        //creating an instance  
        var polyObj = new Polygon(10, 20);
        polyObj.test();
        console.log("rectangle: " + myrec);
        class Recrengel {
            constructor(rwidth, rheight) {
                this.rw = rwidth;
                this.rh = rheight;
            }
            createRec() {
                //  console.log("The height of the polygon: ", this.rh)
                // console.log("The width of the polygon: ", this.rw)
                return this.rh * this.rw;
            }
        }
        //creating an instance  
        var recObj = new Recrengel(100, 80);
        var myrec = recObj.createRec();
        console.log("rectangle: " + myrec);
    </script>
    <script>
        'use strict'
        class PrinterClass {
            doPrint() {
                console.log("doPrint() from Parent called…")
            }
        }
        class StringPrinter extends PrinterClass {
            doPrint() {
                super.doPrint()
                console.log("doPrint() is printing a string…")
            }
        }
        var obj = new StringPrinter()
        obj.doPrint()
    </script>
   
   # Promises and Callbacks.
     
    <pre>
        function notifyAll(fnSms, fnEmail) {
            setTimeout(function() {
                console.log('starting notification process');
                fnSms();
                fnEmail();
            }, 2000);
        }
        notifyAll(
            function() {
                console.log("Sms send ..");
            },
            function() {
                console.log("email send ..");
            }
        );
        console.log("End of script"); //executes first or not blocked by others
</pre>
    <script>
        function notifyAll(fnSms, fnEmail) {
            setTimeout(function() {
                console.log('starting notification process');
                fnSms();
                fnEmail();
            }, 2000);
        }
        notifyAll(
            function() {
                console.log("Sms send ..");
            },
            function() {
                console.log("email send ..");
            }
        );
        console.log("End of script"); //executes first or not blocked by others
    </script>

    #Understanding Callback
     
    <pre>
        <code>
                function getSum(n1, n2) {
                    var isAnyNegative = function() {
                        return n1 < 0 || n2 < 0;
                    }
                    var promise = new Promise(function(resolve, reject) {
                        if (isAnyNegative()) {
                            reject(Error("Negatives not supported"));
                        }
                        resolve(n1 + n2);
                    });
                    return promise;
                }
                getSum(5, 6)
                    .then(function(result) {
                            console.log(result);
                            return getSum(10, 20);
                            //this returns another Promise   
                        },
                        function(error) {
                            console.log(error);
                        })
                    .then(function(result) {
                            console.log(result);
                            return getSum(30, 40);
                            //this returns another Promise   
                        },
                        function(error) {
                            console.log(error);
                        })
                    .then(function(result) {
                            console.log(result);
                        },
                        function(error) {
                            console.log(error);
                        });
                console.log("End of script ");
        </code>
    </pre>
    <script>
        function getSum(n1, n2) {
            var isAnyNegative = function() {
                return n1 < 0 || n2 < 0;
            }
            var promise = new Promise(function(resolve, reject) {
                if (isAnyNegative()) {
                    reject(Error("Negatives not supported"));
                }
                resolve(n1 + n2);
            });
            return promise;
        }
        getSum(5, 6)
            .then(function(result) {
                    console.log("1st res: " + result);
                    return getSum(10, 20);
                    //this returns another Promise   
                },
                function(error) {
                    console.log("1st error: " + error);
                })
            .then(function(result) {
                    console.log("2nd res: " + result);
                    return getSum(30, -40);
                    //this returns another Promise   
                },
                function(error) {
                    console.log("2nd error: " + error);
                })
            .then(function(result) {
                    console.log("3rd res: " + result);
                },
                function(error) {
                    console.log("3rd error: " + error);
                });
        console.log("End of script ");
    </script>
    <script>
        import display_message from 'MessageModule.js'
        display_message()
    </script>
    
    
     #JavaScript Module 
    <pre>
        <p>math.js</p>
            export {
                sumAll as
                default
            };
            export {
                sumAll,
                subtractAll,
                divideAll,
                multiplyAll
            };
            let sumAll = (a, b) => {
                return a + b;
            }
            let subtractAll = (a, b) => {
                return a - b;
            }
            let divideAll = (a, b) => {
                return a / b;
            }
            let multiplyAll = (a, b) => {
                return a * b;
            }
            let findModulus = (a, b) => {
                return a % b;
            <p>app.js</p>
            import * as math from './math.js';
            console.log(math.multiplyAll(9, 8));
    </pre>
    
    
     #Immediately Invoked Function Expression
   
    <code>
            var main = function() {
                (function() {
                    for (var x = 0; x < 5; x++) {
                        console.log(x);
                    }
                })();
                console.log("x can not be accessed outside the block scope x value is :" + x);
            }
            main();
    </code>
    <script>
        var main = function() {
            (function() {
                for (var x = 0; x < 5; x++) {
                    console.log(x);
                }
            })();
            console.log("x can not be accessed outside the block scope x value is :" + x);
        }
        main();
    </script>
    <h2>Generator Functions
    </h2>
    <code>
            "use strict"
            function* rainbow() {
                // the asterisk marks this as a generator 
                yield 'red';
                yield 'orange';
                yield 'yellow';
                yield 'green';
                yield 'blue';
                yield 'indigo';
                yield 'violet';
            }
            for (let color of rainbow()) {
                console.log(color);
            }
    </code>
    <script>
        "use strict"
        function* rainbow() {
            // the asterisk marks this as a generator 
            yield 'red';
            yield 'orange';
            yield 'yellow';
            yield 'green';
            yield 'blue';
            yield 'indigo';
            yield 'violet';
        }
        for (let color of rainbow()) {
            console.log(color);
        }
    </script>
    <h2>The Object.assign() Function
    </h2>
    <script>
        "use strict"
        var det = {
            name: "Tom",
            ID: "E1001"
        };
        var copy = Object.assign({}, det);
        // console.log(copy);
        for (let val in copy) {
            console.log(copy[val])
        }
    </script>
   
   
    <h2>Invoked through call or apply</h2>
    <script>
        var adder = {
            base: 1,
            add: function(a) {
                var f = v => v + this.base;
                return f(a);
            },
            addThruCall: function(a) {
                var f = v => v + this.base;
                var b = {
                    base: 2
                };
                return f.call(b, a);
            },
            addMore: function(a) {
                var f = v => v + this.base;
                var b = {
                    base: 4
                };
                return f.call(b, a);
            }
        };
        console.log("Invoked through call or apply");
        console.log(adder.add(1)); // This would log 2
        console.log(adder.addThruCall(1)); // This would log 2 still
        console.log(adder.addMore(2));
    </script>
   
    
     #No binding of arguments
    
    
    <script>
        var arguments = [1, 2, 3];
        var arr = () => arguments[0];
        arr(); // 1
        function foo(n) {
            var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
            return f();
        }
        function bar(n) {
            var b = () => arguments[0] + n;
            return b();
        }
        console.log("No binding of arguments  ");
        foo(3); // 6
        console.log("foo" + foo(3));
        console.log("BAR " + bar(2));
    </script>
   
   
    <h2>JavaScript Class</h2>
    <p>In this example we demonstrate a simple class definition and how to use it.</p>
    <code>
        class Car {
            constructor(brand) {
                this.carname = brand;
            }
        }
        class Motor {
            constructor(name) {
                this.motorname = name;
            }
        }
        mymotor = new Motor("General Motor");
        mycar = new Car("Ford");
        document.getElementById("demo").innerHTML = mymotor.motorname;
    </code>
    <p id="demo"></p>
    <script>
        class Car {
            constructor(brand) {
                this.carname = brand;
            }
        }
        class Motor {
            constructor(name) {
                this.motorname = name;
            }
        }
        mymotor = new Motor("General Motor");
        mycar = new Car("Ford");
        document.getElementById("demo").innerHTML = mymotor.motorname;
    </script>
  
  
    <h2>Array.find()</h2>
    <p id="demo2"></p>
    <script>
        var numbers = [4, 9, 16, 25, 29];
        var first = numbers.find(myFunction);
        document.getElementById("demo2").innerHTML = "First number over 18 is " + first;
        function myFunction(value, index, array) {
            return value > 18;
        }
    </script>
   
   
    <h2>Number Object Properties</h2>
    <p>MIN_SAFE_INTEGER</p>
    <p id="demo3"></p>
    <p>MAX_SAFE_INTEGER</p>
    <p id="demo4"></p>
    <script>
        var y = Number.MIN_SAFE_INTEGER;
        var x = Number.MAX_SAFE_INTEGER - 1;
        document.getElementById("demo4").innerHTML = x;
        document.getElementById("demo3").innerHTML = y;
    </script>
   
   
    <h2>JavaScript Number Methods</h2>
    <p>The isInteger() method returns true if the argument is an integer.</p>
    <p>Otherwise it returns false.</p>
    Number.isInteger(10) + "<br>" + Number.isInteger(10.5);
    <p id="demo5"></p>
    <script>
        document.getElementById("demo5").innerHTML =
            Number.isInteger(10) + "<br>" + Number.isInteger(10.5);
    </script>
    
    
    <h2>JavaScript Number Methods</h2>
    <p>The isSafeInteger() method returns true if the argument is a safe integer.</p>
    <p>Otherwise it returns false.</p>
    Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(12345678901234567890);
    <p id="demo6"></p>
    <script>
        document.getElementById("demo6").innerHTML =
            Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(12345678901234567890);
    </script>
    
    
    <h2>JavaScript Number Methods</h2>
    <p>The isFinite() method returns false if the argument is Infinity or NaN.</p>
    <p>Otherwise it returns true.</p>
    isFinite(10 / 0) + "<br>" + isFinite(10 / 1);
    <p id="demo7"></p>
    <script>
        document.getElementById("demo7").innerHTML =
            isFinite(10 / 0) + "<br>" + isFinite(10 / 1);
    </script>
    <h2>The ** Operator</h2>
    <p id="demo8"></p>
    <script>
        var x = 10;
        document.getElementById("demo8").innerHTML = x ** 2;
    </script>
    
    
    <h2>JavaScript Array.forEach()</h2>
    <p>Calls a function once for each array element.</p>
    var txt = "";</br>
    var numbers = [45, 4, 9, 16, 25];</br>
    numbers.forEach(myFunction);</br>
    document.getElementById("demo10").innerHTML = txt;</br>
    function myFunction(value) {</br>
    txt = txt + value + "<br>"; }
    </br>
    <p id="demo10"></p>
    <script>
        var txt = "";
        var numbers = [45, 4, 9, 16, 25];
        numbers.forEach(myFunction);
        document.getElementById("demo10").innerHTML = txt;
        function myFunction(value) {
            txt = txt + value + "<br>";
        }
    </script>
   
   
    <h2>JavaScript Array.filter()</h2>
    <p>Creates a new array with all array elements that passes a test.</p>
    <p id="demo12"></p>
    <script>
        var numbers = [45, 4, 9, 16, 25];
        var over18 = numbers.filter(myFunction);
        document.getElementById("demo12").innerHTML = over18;
        function myFunction(value, index, array) {
            return array;
        }
    </script>
  
  
    <h2>JavaScript Array.reduce()</h2>
    <p>This example finds the sum of all numbers in an array:</p>
    var sum = numbers.reduce(myFunction)<br> document.getElementById("demo").innerHTML = "The sum is " + sum
    <br> function myFunction(total, value, index, array) {<br> return total + value<br> }
    <br>
    <p id="demo13"></p>
    <script>
        var numbers = [45, 4, 9, 16, 25];
        var sum = numbers.reduce(myFunction);
        document.getElementById("demo13").innerHTML = "The sum is " + sum;
        function myFunction(total, value, index, array) {
            return total + value;
        }
    </script>
   
   
    <h2>JavaScript Array.every()</h2>
    <p>The every() method checks if all array values pass a test.</p>
    <code>
        var numbers = [45, 4, 9, 16, 25];
        var allOver18 = numbers.every(myFunction);
        document.getElementById("demo14").innerHTML = "All over 18 is " + allOver18;
        function myFunction(value, index, array) {
            return value > 18;
        }
    </code>
    <p id="demo14"></p>
    <script>
        var numbers = [45, 4, 9, 16, 25];
        var allOver18 = numbers.every(myFunction);
        document.getElementById("demo14").innerHTML = "All over 18 is " + allOver18;
        function myFunction(value, index, array) {
            return value > 18;
        }
    </script>
    
    
    <h2>JavaScript Array.indexOf()</h2>
    <p id="demo15">/p>
        <script>
            var fruits = ["Apple", "Orange", "Apple", "Mango"];
            var a = fruits.indexOf("Orange");
            document.getElementById("demo15").innerHTML = "Orange is found in position " + a;
        </script>
        <h2>Create Object from JSON String</h2>
        <code>
            var txt = '{"name":"John", "age":30, "city":"New York"}'
            var obj = JSON.parse(txt);
            document.getElementById("demo16").innerHTML = obj.name + ", " + obj.age;
        </code>
        <p id="demo16"></p>
        <script>
            var txt = '{"name":"John", "age":30, "city":"New York"}'
            var obj = JSON.parse(txt);
            document.getElementById("demo16").innerHTML = obj.name + ", " + obj.age;
        </script>
       
       
        <h2>Create JSON string from a JavaScript object.</h2>
        <code>
            var obj = {
                name: "John",
                age: 30,
                city: "New York"
            };
            var obj2 = {
                name: "sunny",
                age: 30,
                city: "NY"
            };
            var myJSON = JSON.stringify(obj2);
            document.getElementById("demo17").innerHTML = myJSON;
        </code>
        <p id="demo17"></p>
        <script>
            var obj = {
                name: "John",
                age: 30,
                city: "New York"
            };
            var obj2 = {
                name: "sunny",
                age: 30,
                city: "NY"
            };
            var myJSON = JSON.stringify(obj2);
            document.getElementById("demo17").innerHTML = myJSON;
        </script>
        <h2>ES6 and Variable Hoisting</h2>
        <code>
            var main = function() {
                for (var x = 0; x < 5; x++) {
                    console.log(x);
                }
                console.log("x can be accessed outside the block scope x value is :" + x);
                console.log('x is hoisted to the function scope');
                document.getElementById("demo18").innerHTML = x;
            }
            main();
        </code>
        <p id="demo18"></p>
        <script>
            var main = function() {
                for (var x = 0; x < 5; x++) {
                    console.log(x);
                }
                console.log("x can be accessed outside the block scope x value is :" + x);
                console.log('x is hoisted to the function scope');
                document.getElementById("demo18").innerHTML = x;
            }
            main();
        </script>
        <h2>No binding of arguments
        </h2>
        <p id="demo19"></p>
        <script>
            function foo(n) {
                var f = (...args) => args[0] + n;
                return f(10);
            }
            num = foo(1); // 11
            document.getElementById("demo19").innerHTML = num;
            console.log(num);
        </script>
        <h2>Arrow functions used as methods</h2>
        <p>As stated previously, arrow function expressions are best suited for non-method functions. Let's see what
        </p>
        'use strict';<br> var obj = { // does not create a new scope<br> i: 10,<br> b: () => console.log(this.i, this),<br> c: function() {<br> console.log(this.i, this);<br> }
        <br> }
        <br>
        <br> obj.b(); // prints undefined, Window {...} (or the global object)<br> obj.c(); // prints 10, Object {...}<br>
        <script>
            'use strict';
            var obj = { // does not create a new scope
                i: 10,
                b: () => console.log(this.i, this),
                c: function() {
                    console.log(this.i, this);
                }
            }
            obj.b(); // prints undefined, Window {...} (or the global object)
            obj.c(); // prints 10, Object {...}
        </script>
        <h2>The Function Constructor
        </h2>
        var func = new Function("x", "y", "return x*y;"); <br> function product() { <br> var result; <br> result = func(10,20); <br> console.log("The product : "+result)<br> } product()
        <script>
            var func = new Function("x", "y", "return x*y;");
            function product() {
                var result;
                result = func(10, 20);
                console.log("The product : " + result)
            }
            product();
        </script>

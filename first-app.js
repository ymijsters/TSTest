var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = 'Max';
userName = 'Max';
var userAge = 34;
var isValid = true;
var user = {
    name: "Yannick",
    age: 28,
    isAdmin: true,
    id: 200,
};
var hobbies;
hobbies = ["Sports", "Cooking", "Reading"];
function add(a, b) {
    var result = a + b;
    return result;
}
add(2, 3);
var calc = {
    a: 1,
    b: 1,
    fn: function (a, b) { return a + b; }
};
;
var creds;
creds = {
    password: "password",
    email: "email"
};
function calculate(a, b, fnCalc) {
    fnCalc(a, b);
}
calculate(1, 2, add);
var userType;
userType = 'admin';
var dataStorage;
dataStorage = {
    storage: ['test', 'test'],
    add: function (data) {
        this.storage.push(data);
    }
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
merge("test", "tester");

var util = require('util');

function Base() {
    this.name='base';
    this.base=1991;
    this.sayHello=function () {
        console.log('Hello '+this.name);
    }
}

Base.prototype.showName=function () {
    console.log(this.name);
}

function Sub() {
    this.name='sub';
    this.sayHello=function () {
        console.log('Hello '+this.name);
    }
}

// util.inherits(Sub,Base);
// var objBase = new Base();
// objBase.showName();
// objBase.sayHello();
// console.log(objBase);
//
// var objSub=new Sub();
// objSub.showName();
// objSub.sayHello();
// console.log(objSub);

// console.log(util.isArray([]));
// console.log(util.isArray(new Array()));
// console.log(util.isArray({}));
//
// console.log(util.isRegExp(/some regext/));
// console.log(util.isRegExp(new RegExp('another regext')));
// console.log(util.isRegExp({}));

// console.log(util.isDate(new Date()));
// console.log(Date);
// console.log(util.isDate(Date));
// console.log(util.isDate({}));

// console.log(util.isError(new Error()));
// console.log(util.isError(new TypeError()));
// console.log(util.isError({name:'Error',message:'an error occurred'}));

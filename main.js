// // Using the set operator
// var o = { set value(val) { this.anotherValue = val; } };
// o.value = 5;
// console.log(o.value); // undefined
// console.log(o.anotherValue); // 5

// // Using Object.defineProperty
// var o = {};
// Object.defineProperty(o, 'value', {
//   set: function(val) {
//     this.anotherValue = val;
//   }
// });
// o.value = 5;
// console.log(o.value); // undefined
// console.log(o.anotherValue); // 5
// var o = {};
// o.__defineGetter__('gimmeFive', function() { return 5; });
// console.log(o.gimmeFive); // 5


// // Formas compatibles con el estándar

// // Usando el operador get
// var o = { get gimmeFive() { return 5; } };
// console.log(o.gimmeFive); // 5

// // Usando Object.defineProperty
// var o = {};
// Object.defineProperty(o, 'gimmeFive', {
//   get: function() {
//     return 5;
//   }
// });
// console.log(o.gimmeFive); // 5

// const Constructores = new Object({
//     Constructores_obj : function(){
//         this.name;
//         this.age;
//         return this;
//     }
// });
// const setters = new Object({
//     setters_obj : function(){
//         this.name;
//         this.age;
//         return this;
//     }
// });
// const Constructores_obj = Constructores.Constructores_obj.bind({name:"Willmer", age:41});
// const obj = new Object();

// const Constructores = new Object({
//     Constructores_obj : function(){
//         this.name;
//         this.age;
//         return this;
//     }
// });

// const Constructores_obj = Constructores.Constructores_obj.bind({name:"Willmer", age:41});
// const obj = new Object();
// obj.__proto__.constructor = Constructores_obj();
// console.log(obj);

const Constructores = new Object({
    Constructores_obj : function(nombre, edad){
        this.name = nombre;
        this.age = edad;
    }
});
const objinit = new Constructores.Constructores_obj("Willmer",41 );
const obj = Object.assign(objinit);
obj.__proto__.constructor("Funeme", 32);
console.log(obj);

// console.log(Object.keys(obj));



// console.log(obj.saludar(40));

// const constructores = () =>{
//     this.name;
//     this.maquina;
// };

// constructores.call(data);
// let obj = new constructores();
// console.log(obj);

//const Humanos = Object.create(obj)
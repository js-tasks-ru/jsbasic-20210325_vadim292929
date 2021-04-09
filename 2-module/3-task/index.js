let calculator = {
    a: 0,
    b: 0,
    read : function (a , b) {
        return  this.a = a , this.b = b;
        
    },
    sum: function () {
        let a = this.a + this.b;
        return a;
    },
    mul: function () {
        let a =  this.a *  this.b;
        return a;
    }
};


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

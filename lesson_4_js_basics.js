/* 1. Написати функцію, яка у випадку якщо типи двох аргументів string поверне їх зконкатенований вираз,
якщо типи двох аргументів number - поверне їх помножене значення
та у будь якому випадку не співпадіння поверне текст There are no type matches for operation */

function typeChecker(arg1, arg2) {
    if ((typeof arg1 === "string") && (typeof arg2 === "string")) {
        console.log(arg1 + arg2);
    } else if ((typeof arg1 === "number") && (typeof arg2 === "number")) {
        console.log(arg1 * arg2);
    } else {
        console.log("There are no type matches for operation");
    }
}

// Приклад роботи функції:
(typeChecker(2, 3)); // виведе 6
(typeChecker("My", "text")); // виведе Mytext
(typeChecker(true, 5)); // виведе There are no type matches for operation

/* 2. Написати функцію, яка, використовуючи тернарний оператор, виводить у консоль Yes, якщо число
позитивне, та No якщо воно негативне */

/* FYI @Artem, cудячи з назви функції та прикладу роботи умова повинна виглядати так: 
Написати функцію, яка, використовуючи тернарний оператор, виводить у консоль Yes, якщо число негативне, та No якщо воно позитивне.
Код написаний відповідно до цієї умови, але якщо все таки малась на увазі початкова умова, то потрібно змінити < на > в умові самої 
функції */

function isNegative(value) {
    value < 0 ? console.log("Yes") : console.log("No");
}

// Приклад роботи функції:
isNegative(-1); // виведе у консоль "Yes"
isNegative(1); // виведе у консоль "No"

/* 3. Написати функцію, яка повертає true якщо перший аргумент ділиться на другий без остачі, 
або якщо ні - повертає false */
function divider(num1, num2) {
    num1 % num2 == 0 ? console.log(true) : console.log(false);
}

// Приклад роботи функції:
divider(4, 2); // виведе у консоль true
divider(3, 2); // виведе у консоль false

/* 4. Написати функцію, яка рекурсивно виводить в консоль аргумент та збільшує його на 2 якщо аргумент не
перевищує за значенням число 10 */
function recursiveAddition(value) {
    
    if (value <= 10) {
        console.log(value);
    }
    
    const increasedValue = value += 2;
    if (increasedValue <= 10) {
        recursiveAddition(increasedValue);
    }
}

// Приклад роботи функції:
recursiveAddition(5); // виведе в консоль по черзі 5, 7, 9
recursiveAddition(2); // виведе в консоль по черзі 2, 4, 6, 8, 10
recursiveAddition(11); // не виведе нічого
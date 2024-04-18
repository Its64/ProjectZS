export const listOfTasks = {
  if: {
    0: {
      task: "Вам дали 2 купюры. Выведите на экран у какой из них номинал больше. Вам даны 2 переменные: A,B(числа).",
      io: [
        [[50, 20, 0], ["50"]],
        [[44, 60, 0], ["60"]],
        [[123, 53, 0], ["123"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    1: {
      task: "Вам дали зарплату A рублей. Вам надо оплатить B рублей за аренду квартиры. Хватит ли вам денег на оплату аренды. Выведите 1 или 0 в зависимости от результата. Вам даны переменные A,B - числа.",
      io: [
        [[5000, 6000, 0], ["0"]],
        [[440, 320, 0], ["1"]],
        [[123, 53, 0], ["1"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    2: {
      task: "Вы идете в магазин. В магазине хлеб стоит 50 рублей. Если вы купите хлеб, то у вас останется B рублей. Выведите 1 если число B >= 0 и меньше 10, 2 если B >= 10 и 0 если B - отрицательное число. Вам дана переменная B - число.",
      io: [
        [[5000, 0, 0], ["2"]],
        [[4, 0, 0], ["1"]],
        [[-5, 0, 0], ["0"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    3: {
      task: "Вы устроились в кофейню и получаете по A рублей в месяц, но вам предлогают устроиться другую кофейню и предлагают B рублей в месяц. Вы согласитесь перейти если там платят как минимум в 2 раза больше чем в вашей кофейне. Выведите 1 или 0 в зависимости от того перейдете ли вы в компанию или нет. Вам даны переменные A,B - числа",
      io: [
        [[5000, 7000, 0], ["0"]],
        [[4, 9, 0], ["1"]],
        [[5000, 1000, 0], ["0"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    4: {
      task: "Вы учитель русского языка и учите иностранца как правильно говорить года: 2021 год, 12 лет, 45 лет, 3 года. Вам дано число - A(номер года), вам надо вывести (год,лет,года). Например: вам дано число 5, надо вывести '5 лет'. Вам дана переменная A - число.",
      io: [
        [[5, 0, 0], ["5 лет"]],
        [[42, 0, 0], ["42 года"]],
        [[67, 0, 0], ["61 год"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    5: {
      task: "Вы работаете в театре и билет стоит A рублей, а вам дали B рублей. Выведите хватит ли покупателю денег на оплату(вывести 1 или 0), и если да, то сколько вы должны дать сдачи. Вам даны 2 переменные: A,B(числа).",
      io: [
        [[500, 200, 0], ["0"]],
        [[200, 500, 0], ["1", "300"]],
        [[100, 50, 0], ["0"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    6: {
      task: "Вы снимаете кино. Вам нужно A миллионов долларов чтобы снять кино, а вам дали B миллионов долларов. Выведите, хватит ли вам денег на снятие кино(1 или 0) и если нет, то выведите сколько денег вам надо доплатить. Вам даны переменные A,B - числа.",
      io: [
        [[500, 200, 0], ["0", "300"]],
        [[200, 500, 0], ["1"]],
        [[60, 300, 0], ["1"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    7: {
      task: "Вы купили билет в кино на новый фильм. Вам надо прийти в кино A сентября, а сегодня B сентября. Вам надо вывести, успеете ли вы в кино(1 или 0), и если да, вывести сколько дней осталось до кино. Вам даны 2 переменные - A,B(числа).",
      io: [
        [[6, 3, 0], ["1", "3"]],
        [[4, 6, 0], ["0"]],
        [[3, 7, 0], ["0"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    8: {
      task: "Вы работаете над проектом. Вам нужно написать A страниц доклада. У вас есть B дней. Каждый день вы пишете по 1 странице. Успеете ли вы сделать доклад? Выведите 1 или 0, в зависимости от ответа, и, если ответ - да, то вывести сколько дней останется. Вам даны 2 переменные - A,B(числа).",
      io: [
        [[45, 3, 0], ["0"]],
        [[41, 56, 0], ["1", "15"]],
        [[56, 7, 0], ["0"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    9: {
      task: "Вы идете в кино. У вас на выбор 3 фильма: Оппенгеймер, Начало или Престиж. Вы бросаете кубик(на кубике 6 значений), если выпадает 1-2, то Престиж, если 3-4, то Оппенгеймер, 5-6 - Начало. Выведите название фильма на который вы пойдете. Вам дана переменная A - значение кубика, число.",
      io: [
        [[2, 0, 0], ["Престиж"]],
        [[4, 0, 0], ["Оппенгеймер"]],
        [[5, 0, 0], ["Начало"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    10: {
      task: "Вам дана строка A. Вам надо вывести 1 или 0 в зависимости от того является ли она аббревиатурой. Строка является аббривиатурой если все символы заглавные.",
      io: [
        [["ООО", 0, 0], ["1"]],
        [["google", 0, 0], ["0"]],
        [["МГУ", 0, 0], ["1"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
  },
  while: {
    0: {
      task: "Вы делаете тест по математике и вам дана задача вычислить факториал числа A. Вам надо вывести ответ. Вам дана переменная A - число",
      io: [
        [[5, 0, 0], ["120"]],
        [[4, 0, 0], ["24"]],
        [[3, 0, 0], ["6"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    1: {
      task: "Вы идете в магазин. У вас есть A рублей. Вы знаете что B дней назад хлеб стоил 50 рублей и каждый день хлеб дорожает на 10% от прошлой цены. Вам надо вывести сегодняшнюю цену хлеба. Вам нужно вывести 1 или 0 в зависимости от того хватит ли вам денег для покупки хлеба.",
      io: [
        [[5000, 6, 0], ["1"]],
        [[40, 32, 0], ["0"]],
        [[120, 5, 0], ["1"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    2: {
      task: "Вам дано число A. ам надо вывести сумму всех чисел от 1 до A включительно. Вам дана переменная A - число.",
      io: [
        [[5, 0, 0], ["15"]],
        [[4, 0, 0], ["10"]],
        [[1, 0, 0], ["1"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    3: {
      task: "Вы играете в игру и у вас A жизней. Враг наносит B урона. Вам нужно вывести сколько жизней у вас останется после C ударов. Вам даны переменные A,B(числа).",
      io: [
        [[100, 3, 2], ["94"]],
        [[40, 20, 1], ["20"]],
        [[100, 12, 3], ["64"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    4: {
      task: "Вы даете A денег в долг человеку под 10 процентов в месяц(от предыдущего числа). Сколько денег он будет должен вам через B месяцев. Вам даны переменные A,B,C(числа).",
      io: [
        [[100, 1, 0], ["110"]],
        [[50, 1, 0], ["55"]],
        [[10, 0, 0], ["10"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    5: {
      task: "Вам нужно найти 1-ую цифру от 50 до 100 включительно, которая будет делиться на A(переменная, число) и вывести ее на экран.",
      io: [
        [[2, 0, 0], ["50"]],
        [[53, 0, 0], ["53"]],
        [[11, 0, 0], ["55"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    6: {
      task: "Есть 2 команды: (1) прибавить 1, (2) умножить на 2. Вам дано число A и команда B(строка в формате: 1121, где 1 и 2 - команды). Ваша задача применить команды на число A. Вам даны 2 переменные - A(число),B(строка).",
      io: [
        [[2, "21", 0], ["5"]],
        [[200, "2", 0], ["400"]],
        [[60, "112", 0], ["124"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    7: {
      task: "Вам даны 2 числа - A,B. Вам нужно вывести минимальное число, которое делится нацело одновременно на A и на B.",
      io: [
        [[5, 2, 0], ["10"]],
        [[20, 2, 0], ["20"]],
        [[2, 4, 0], ["4"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    8: {
      task: "Вам дано число A. Вам надо вывести сумму всех чисел от 1 до A включительно, которые делятся нацело на 5.",
      io: [
        [[26, 0, 0], ["75"]],
        [[20, 0, 0], ["50"]],
        [[2, 0, 0], ["0"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    9: {
      task: "Вам дано число A и строка B. Ваша задача вывести строку B A раз через пробел.",
      io: [
        [[2, "hello", 0], ["hello hello"]],
        [[3, "no", 0], ["no no no"]],
        [[4, "good", 0], ["good good good good"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    10: {
      task: "Вам дана строка чисел (например: '32574') - A. Вам нужно вывести сумму всех чисел в этой строке.",
      io: [
        [["32574", 0, 0], ["21"]],
        [["86765", 0, 0], ["32"]],
        [["3905",0, 0], ["17"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    11: {
      task: "Вам дали список всех имен сотрудников компании и вам нужно вывести количество людей имена которых начинаются на заглавную букву А. Вам дана переменная a - список строк",
      io: [
        [[["Аоорп", "Спомиымрм"], 0, 0], ["1"]],
        [[["павп", "Спомиымрм"], 0, 0], ["0"]],
        [[["Арсений", "Артем", "Степан"],0, 0], ["2"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
  },
  list: {
    0: {
      task: "Вам дан список чисел. Ваша задача вывести максимальный и минимальный элемент этого списка. Вам дана переменная A - список чисел.",
      io: [
        [[[2,6,3,9], 0, 0], ["9", "2"]],
        [[[4, 4], 0, 0], ["4", "4"]],
        [[[2,5,1], 0, 0], ["5", "1"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    1: {
      task: "Вам дан список строк. Вам надо вывести предложение из этих строк с пробелами. Вам дан список A",
      io: [
        [[["привет", "мир"], 0, 0], ["привет мир"]],
        [[["пока", "мир"], 0, 0], ["пока мир"]],
        [[["сегодня", "Вторник"], 0, 0], ["сегодня Вторник"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    2: {
      task: "Вам дан список чисел - переменная A. Вам надо выводить по очереди все элементы списка, пока элемент не будет равен перменной B - числу (переменную B выводить не надо).",
      io: [
        [[[4,8,6,5,2,3,5,1], 5, 0], ["4", "8", "6"]],
        [[[4,3,7,5,9], 7, 0], ["4", "3"]],
        [[[5,7,3,6,3,6], 3, 0], ["5", "7"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    3: {
      task: "Вам дан список чисел - A. Вам надо вывести все элементы массива умноженные на число B.",
      io: [
        [[[4,8,6], 5, 0], ["20", "40", "30"]],
        [[[4,3,7], 7, 0], ["28", "21", "49"]],
        [[[5,7,3], 3, 0], ["15", "21", "9"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    4: {
      task: "Вам дан список строк - переменная A. У каждой строки в начале и в конце есть пробелы. Вам нужно вывести каждый элемент списка без пробелов.",
      io: [
        [[[" привет  ","  мир  "], 0, 0], ["привет", "мир"]],
        [[["  клавиатура "," мышь  "], 0, 0], ["клавиатура", "мышь"]],
        [[["   город   ", "   мир  "], 0, 0], ["город", "мир"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    5: {
      task: "Вам дан список строк - переменная A. Вам нужно вывести длину каждого элемента списка.",
      io: [
        [[["привет","мир"], 0, 0], ["6", "3"]],
        [[["клавиатура","мышь"], 0, 0], ["10", "4"]],
        [[["город", "мир"], 0, 0], ["5", "3"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    6: {
      task: "Вам дан список имен сотрудников компании, начинающихся с маленькой буквы. Вам надо вывести все эти имена так, чтобы они начанались с заглавной буквы. Вам дана переменная A - список строк.",
      io: [
        [[["привет","мир"], 0, 0], ["Привет", "Мир"]],
        [[["клавиатура","мышь"], 0, 0], ["Клавиатура", "Мышь"]],
        [[["вася", "максим"], 0, 0], ["Вася", "Максим"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    7: {
      task: "Вам дан список строк, вам надо преобразовывать строки в числа, которые обозначают длинну строки умноженную на 2. Вам дана переменная A - список строк.",
      io: [
        [[["привет","мир"], 0, 0], ["12", "6"]],
        [[["клавиатура","мышь"], 0, 0], ["20", "8"]],
        [[["что-то", "ничто"], 0, 0], ["12", "10"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    8: {
      task: "Вам дан список чисел - A. Вам нужно вычислить корень из каждого числа и вывести их.",
      io: [
        [[[4,9,36], 0, 0], ["2.0", "3.0", "6.0"]],
        [[[9,4,64], 0, 0], ["3.0", "2.0", "8.0"]],
        [[[16, 25, 36], 0, 0], ["4.0", "5.0", "6.0"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    9: {
      task: "Вам дан список строк - A. Вам нужно вывести число, полученное при умножении длин всех строк списка.",
      io: [
        [[["привет","мир"], 0, 0], ["18"]],
        [[["клавиатура","мышь"], 0, 0], ["40"]],
        [[["что-то", "ничто"], 0, 0], ["30"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    10: {
      task: "Вы работаете в крупной компании и вам дан спикок файлов. Вам нужно отправить работодателю все файлы с окончанием на .txt. Вам дан список строк - a, вам надо вывести все строки, соответствующие условию.",
      io: [
        [[["game.exe", "text.txt", "main.py"], 0, 0], ["text.txt"]],
        [[["program.exe", "text.txt", "document.txt"], 0, 0], ["text.txt", "document.txt"]],
        [[["config.txt", "debug.exe", "index.js"], 0, 0], ["config.txt"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    11: {
      task: "Вам дано число A, ваша задача прибавлять к 0 число A, до тех пор, пока получившееся число не будет привышать число 80. Нужно  вывести получившееся число.",
      io: [
        [[3, 0, 0], ["81"]],
        [[1, 0, 0], ["8"]],
        [[7, 0, 0], ["84"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    12: {
      task: "Вам даны 2 строки A и B, вам нужно вывести ту строку, которая первая по алфавиту без учета регистра.",
      io: [
        [["agbhf", "hgk", 0], ["agbhf"]],
        [["fgbvjds", "huytf", 0], ["fgbvjds"]],
        [["bgujdioer", "anigf", 0], ["anigf"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    13: {
      task: "Вам дан список чисел - A. Вам нужно вывести сумму всех чисел, которые делятся на число B.",
      io: [
        [[[5,86,25], 5, 0], ["30"]],
        [[[6,8,2], 2, 0], ["16"]],
        [[[90,46,76], 46, 0], ["46"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    14: {
      task: "Вам дан список чисел - A. Вам нужно вывести каждый элемент списка, вычитая из каждого из них наименьшое число в списке.",
      io: [
        [[[5,86,25], 0, 0], ["0", "81", "20"]],
        [[[6,8,2], 0, 0], ["4", "6", "0"]],
        [[[90,46,6], 0, 0], ["84", "40", "0"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    15: {
      task: "Вам дан список чисел - A. Вам нужно вывести индекс наибольшего числа в списке.",
      io: [
        [[[5,86,25], 0, 0], ["1"]],
        [[[6,8,2], 0, 0], ["1"]],
        [[[90,46,6], 0, 0], ["0"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
    16: {
      task: "Вам дан список чисел - A. Вам нужно вывести остаток от деления суммы чисел в списке на 3.",
      io: [
        [[[5,6,5], 0, 0], ["1"]],
        [[[6,8,2], 0, 0], ["1"]],
        [[[4,6,8], 0, 0], ["0"]],
      ],
      solution: `
        if 1 == 1:
          print("something")
      `,
      difficult: "hard",
    },
  },
  func: {

  },
  class: {

  },
};
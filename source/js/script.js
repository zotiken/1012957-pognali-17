// var toggleMenu = document.querySelectorAll('.toggle');
// var menuBlock = document.querySelector(".menu");
// var toggleClose = document.querySelector(".menu__toggle");
// var bisnessToggle = document.querySelectorAll('.bisness-toggle');
// var bisnessBlock = document.querySelector('.modal-bisness-price');


// //--------  при наличии поддержки js------------

// document.body.classList.remove('no-js');
// menuBlock.classList.remove('visible');
// toggleClose.classList.remove('hidden');
// //        ------------------------------

// // меню навигации

// for (let q = 0; q < toggleMenu.length; q++) {
//     toggleMenu[q].onclick = function() {
//         menuBlock.classList.toggle("visible");
//     }
// }

// // бизнес прайс

// for (let q = 0; q < toggleMenu.length; q++) {
//     bisnessToggle[q].onclick = function() {
//         bisnessBlock.classList.toggle("visible");
//     }
// }

// левел

var level = document.querySelectorAll('.fellow-travellers__level');
for (let i = 0; i < level.length; i++) {
    var length = level[i].querySelector('svg path').getTotalLength();
    var path = level[i].querySelector('svg path');
    var text = level[i].querySelector('svg text.circ-text');
    var percent = level[i].getAttribute('data-level');
    var indicator = (length / 100) * percent;
    path.setAttribute('stroke-dasharray', indicator + "," + length);
    text.innerHTML = percent;
}

//

// calendar

// function Calendar2(id, year, month) {
//     var Dlast = new Date(year, month + 1, 0).getDate(),
//         D = new Date(year, month, Dlast),
//         DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
//         DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
//         calendar = '<tr>',
//         month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь",
//             "Октябрь", "Ноябрь", "Декабрь"
//         ];
//     if (DNfirst != 0) {
//         for (var i = 1; i < DNfirst; i++) calendar += '<td>';
//     } else {
//         for (var i = 0; i < 6; i++) calendar += '<td>';
//     }
//     for (var i = 1; i <= Dlast; i++) {
//         if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() ==
//             new Date().getMonth()) {
//             calendar += '<td class="today">' + i + '<span></span>';
//         } else {
//             calendar += '<td class="calendar__item calendar__item--' + i + '">' + i + '<span></span>';
//         }
//         if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
//             calendar += '<tr>';
//         }
//     }
//     for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
//     document.querySelector('#' + id + ' tbody').innerHTML = calendar;
//     document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D
//         .getFullYear();
//     document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
//     document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
//     if (document.querySelectorAll('#' + id + ' tbody tr').length <
//         6
//     ) { // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
//         document.querySelector('#' + id + ' tbody').innerHTML +=
//             '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
//     }
// }
// Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// // переключатель минус месяц
// document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
//         Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year,
//             parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) - 1);
//     }
//     // переключатель плюс месяц
// document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
//         Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year,
//             parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) + 1);
//     }
//     //
// Calendar2("calendar2", 2019, 2);


// calendar end

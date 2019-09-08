var toggleMenu = document.querySelectorAll(".toggle");
var menuBlock = document.querySelector(".menu");
var toggleClose = document.querySelector(".menu__toggle");

var bisnessToggle = document.querySelectorAll(".bisness-toggle");
var bisnessBlock = document.querySelector(".modal-bisness-price");

var filterToggle = document.querySelectorAll(".filter-toggle");
var filterBlockHidden = document.querySelector(".country-filter__region");
var filterBlockHidden2 = document.querySelector(".country-filter__wrapper");
var filterBlockHidden3 = document.querySelector(".country-filter__close ");



//--------  при наличии поддержки js------------

document.body.classList.remove("no-js");
menuBlock.classList.remove("visible");
menuBlock.classList.remove("menu-js-off");
toggleClose.classList.remove("hidden");

// удаление ссылки бизнес
var links = document.querySelector(".create-profile__price");
if (document.querySelector(".create-profile__price")) {
    links.removeAttribute("href");

}

//        ------------------------------

// меню навигации

for (let q = 0; q < toggleMenu.length; q++) {
    toggleMenu[q].onclick = function() {
        menuBlock.classList.toggle("visible");
    }
}

// бизнес прайс

for (let e = 0; e < bisnessToggle.length; e++) {
    bisnessToggle[e].onclick = function() {
        bisnessBlock.classList.toggle("visible-price");
    }
}

// скролл шапка

window.onscroll = function() { myFunction() };

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > 52) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// левел

var level = document.querySelectorAll(".fellow-travellers__level");
for (let i = 0; i < level.length; i++) {
    var length = level[i].querySelector("svg path").getTotalLength();
    var path = level[i].querySelector("svg path");
    var text = level[i].querySelector("svg text.circ-text");
    var percent = level[i].getAttribute("data-level");
    var indicator = (length / 100) * percent;
    path.setAttribute("stroke-dasharray", indicator + ',' + length);
    text.innerHTML = percent;
}

//

// меню  фильтра

for (let q = 0; q < filterToggle.length; q++) {
    filterToggle[q].onclick = function() {
        filterBlockHidden.classList.toggle("visible");
        filterBlockHidden2.classList.toggle("visible");
        filterBlockHidden3.classList.toggle("visible-block");
    }
}

//

// меню стран формы

var DropDownHeader = document.querySelectorAll(".route-select__header-dropdown");
if (DropDownHeader) {
    var DropDownList = document.querySelectorAll(".route-select__wrapper");
    var CountryIndex = document.querySelectorAll(".country-filter__sumbol a");
    // var CountryItemSelect = CountryIndex.getE
    for (let w = 0; w < DropDownHeader.length; w++) {
        DropDownHeader[w].onclick = function() {
            DropDownList[w].classList.toggle("visible-block");
            DropDownHeader[w].style.backgroundColor = "#192144";
            DropDownHeader[w].style.color = "#ffffff";
            DropDownHeader[w].style.zIndex = "1";
            DropDownHeader[w].querySelector(".route-select__icon-arrow").style.background = "transparent";
            DropDownHeader[w].querySelector(".route-select__icon-arrow").querySelector("svg").style.fill = "#ffffff";
            DropDownHeader[w].querySelector(".route-select__icon-arrow").querySelector("svg").querySelector(".svg__it1").style.display = "none";
            DropDownHeader[w].querySelector(".route-select__icon-arrow").querySelector("svg").querySelector(".svg__it2").style.display = "block";

            // filterBlockHidden2.classList.toggle("visible");
            // filterBlockHidden3.classList.toggle("visible-block");
        }

        for (let e = 0; e < CountryIndex.length; e++) {
            CountryIndex[e].onclick = function() {
                DropDownList[w].classList.toggle("visible-block");
                // filterBlockHidden2.classList.toggle("visible");
                // filterBlockHidden3.classList.toggle("visible-block");
                console.log(CountryIndex[e]);
                alert(CountryIndex[e].text);
                DropDownHeader[w].textContent = CountryIndex[e].text;
            }
        }
    }
}



var dropdown = document.querySelectorAll(".dropdown");
if (dropdown) {
    var dropdownArray = Array.prototype.slice.call(dropdown, 0);
    dropdownArray.forEach(function(el) {
        var button = el.querySelector('a[data-toggle="dropdown"]'),
            menu = el.querySelector(".dropdown-menu"),
            arrow = button.querySelector("i.icon-arrow");

        button.onclick = function(event) {
            if (!menu.hasClass("visible-block")) {
                menu.classList.add("visible-block");
                menu.classList.remove("hidden");
                // arrow.classList.add("open");
                // arrow.classList.remove('close');
                event.preventDefault();
            } else {
                menu.classList.remove("visible-block");
                menu.classList.add("hidden");
                // arrow.classList.remove('open');
                // arrow.classList.add('close');
                event.preventDefault();
            }
        };
    })

    Element.prototype.hasClass = function(className) {
        return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
    };

}


// spin number
var spins = document.querySelectorAll(".spin");

if (spins) {
    for (let t = 0; t < spins.length; t++) {
        let span = spins[t].querySelectorAll("span"),
            input = spins[t].querySelector("input");

        input.onchange = function() { input.value = +input.value || 0; };
        span[0].onclick = function() { input.value = Math.max(0, input.value - 1); };
        span[1].onclick = function() { input.value -= -1; };
    }
}
// console.log(spins);

//



// calendar
var calendarRec = document.querySelectorAll(".calendar");
if (document.querySelector(".calendar")) {
    function Calendar2(id, year, month) {
        var Dlast = new Date(year, month + 1, 0).getDate(),
            D = new Date(year, month, Dlast),
            DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
            DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
            calendar = "<tr>",
            month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь",
                "Октябрь", "Ноябрь", "Декабрь"
            ];
        if (DNfirst != 0) {
            for (var i = 1; i < DNfirst; i++) calendar += "<td>";
        } else {
            for (var i = 0; i < 6; i++) calendar += "<td>";
        }
        for (var i = 1; i <= Dlast; i++) {
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() ==
                new Date().getMonth()) {
                calendar += '<td class="today">' + i + "<span></span>";
            } else {
                calendar += '<td class="calendar__item calendar__item--' + i + '">' + i + "<span></span>";
            }
            if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
                calendar += "<tr>";
            }
        }
        for (var i = DNlast; i < 7; i++) calendar += "<td>&nbsp;";
        document.querySelector("#" + id + " tbody").innerHTML = calendar;
        document.querySelector("#" + id + " thead td:nth-child(2)").innerHTML = month[D.getMonth()] + " " + D
            .getFullYear();
        document.querySelector("#" + id + " thead td:nth-child(2)").dataset.month = D.getMonth();
        document.querySelector("#" + id + " thead td:nth-child(2)").dataset.year = D.getFullYear();
        if (document.querySelectorAll("#" + id + " tbody tr").length <
            6
        ) { // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
            document.querySelector("#" + id + " tbody").innerHTML +=
                "<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;";
        }
    }
    Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
    // переключатель минус месяц
    document.querySelector("#calendar2 thead tr:nth-child(1) td:nth-child(1)").onclick = function() {
            Calendar2("calendar2", document.querySelector("#calendar2 thead td:nth-child(2)").dataset.year,
                parseFloat(document.querySelector("#calendar2 thead td:nth-child(2)").dataset.month) - 1);
        }
        // переключатель плюс месяц
    document.querySelector("#calendar2 thead tr:nth-child(1) td:nth-child(3)").onclick = function() {
        Calendar2("calendar2", document.querySelector("#calendar2 thead td:nth-child(2)").dataset.year,
            parseFloat(document.querySelector("#calendar2 thead td:nth-child(2)").dataset.month) + 1);
    }

}

//
Calendar2("calendar2", 2019, 2);


// calendar end

var calendarin = document.querySelector(".calendar__item--26");
calendarin.innerHTML = "26" + "<span>Заезд</span>";
var calendarout = document.querySelector(".calendar__item--28");
calendarout.innerHTML = "28" + "<span>Выезд</span>";

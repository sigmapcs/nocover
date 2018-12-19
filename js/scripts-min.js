(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// import {saludo, despedida} from "./modules/example"
// import {activeMenu} from './modules/active-menu'

// saludo()
// despedida()
// activeMenu()
;

$('input[type=range]').on('input', function (e) {
  var min = e.target.min,
      max = e.target.max,
      val = e.target.value;

  $(e.target).css({
    'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
  });
}).trigger('input');

(function (d, c) {
  if (d.querySelectorAll('.search-page-list')) {
    var list = [].concat(_toConsumableArray(d.querySelectorAll('.search-page-list')));
    list.map(function (ul) {
      var li = [].concat(_toConsumableArray(ul.querySelectorAll('.li-child')));
      if (li.length < 6) {
        li[li.length - 1].style.borderBottom = "1px solid";
      }
    });
  }
  if (document.querySelector('.artists-page')) {
    var colors = ['#00AFF2', '#282C93', '#DE182A', '#FF5A20', '#FFB131', '#FEEE00', '#6DC72B', '#00953B', '#00ACE4', '#752995'];
    var artistsContainer = document.querySelector('.artists-page');
    var artistImages = [].concat(_toConsumableArray(artistsContainer.querySelectorAll('img')));
    var colorindex = 0;
    artistImages.forEach(function (img, i) {
      if (i > 4) {
        img.style.background = colors[colorindex];
        colorindex++;
      }
    });
  }
})(document, console.log);

(function (d, c) {
  var choice = d.querySelector('.choice');
  if (choice) {
    choice.addEventListener('click', function (e) {
      e.preventDefault();
      var t = e.target;
      if (t.tagName === 'A') {
        [].concat(_toConsumableArray(choice.children)).forEach(function (el) {
          el.classList.remove('selected');
        });
      }
      t.parentElement.classList.add('selected');
    });
  }
})(document, console);

(function (d, c) {
  var toggle = d.getElementById('toggle-menu'),
      menu = d.getElementById('main-menu');
  toggle.addEventListener('click', function (e) {
    menu.classList.toggle('show');
  });
})(document, console);

},{}]},{},[1]);

//# sourceMappingURL=scripts-min.js.map

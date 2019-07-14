// addNginxFancyIndexForm.js
// Add a small form to filter through the output of Nginx FancyIndex page
// © 2017, Lilian Besson (Naereen) and contributors,
// open-sourced under the MIT License, https://lbesson.mit-license.org/
// hosted on GitHub, https://GitHub.com/Naereen/Nginx-Fancyindex-Theme
var form = document.createElement('form');
var input = document.createElement('input');

input.name = 'filter';
input.id = 'search';
input.placeholder = 'Escribe para buscar...';

form.appendChild(input);

document.querySelector('h1').after(form);

var listItems = [].slice.call(document.querySelectorAll('#list tbody tr'));

input.addEventListener('keyup', function () {
    var i,
        e = "^(?=.*\\b" + this.value.trim().split(/\s+/).join("\\b)(?=.*\\b") + ").*$",
        n = RegExp(e, "i");
    listItems.forEach(function(item) {
        item.removeAttribute('hidden');
    });
    listItems.filter(function(item) {
        i = item.querySelector('td').textContent.replace(/\s+/g, " ");
        return !n.test(i);
    }).forEach(function(item) {
  	    item.hidden = true;
    });
});

//Traducción
$("a:contains('File Name')").html("Nombre fichero");
$("a:contains('File Size')").html("Tamaño");
$("a:contains('Date')").html("Fecha");
$("a:contains('Parent directory/')").html(".. /");


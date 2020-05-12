var xhr = new XMLHttpRequest();
xhr.open('GET', 'phones.json', false);
xhr.send();
if (xhr.status != 200) {
  // обробити помилку
  alert('Помилка ' + xhr.status + ': ' + xhr.statusText);
} else {
  // вивести результат
  let phone = xhr.responseText;
  phone = JSON.parse(phone);
  console.log(phone["name"]);
}
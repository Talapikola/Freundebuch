fetch('https://restcountries.com/v3.1/all')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});
function appendData(data) {
var mainContainer = document.getElementById("myData");
for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Country Name: ' + data[i].name.common + ' </br>Population: ' + data[i].population;
    mainContainer.appendChild(div);
}
}
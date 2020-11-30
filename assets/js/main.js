let url = "https://melkappaphi.cb3.xyz/";

let newDate = new Date();
let year = newDate.getFullYear();

document.getElementsByTagName("header")[0].insertAdjacentHTML("beforeend", `<div class="title"><h1><a href="` + url + `">Mel Kappa Phi</a></h1></div>`);

document.getElementsByTagName("footer")[0].insertAdjacentHTML("beforeend", `<a href="` + url + `">&copy; ` + year + ` Mel Kappa Phi</a>`);
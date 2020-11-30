let url = window.location.href;

let newDate = new Date();
let year = newDate.getFullYear();

//insert header and footer
document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", "<header></header>");
document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", "<footer></footer>");

//modify header and footer
document.getElementsByTagName("header")[0].insertAdjacentHTML("beforeend", `<div class="title"><h1><a href="` + url + `">Mel Kappa Phi</a></h1></div>`);
document.getElementsByTagName("footer")[0].insertAdjacentHTML("beforeend", `<a href="` + url + `">&copy; ` + year + ` Mel Kappa Phi</a>`);
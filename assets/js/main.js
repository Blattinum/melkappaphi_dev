let url = window.location.href;

let newDate = new Date();
let year = newDate.getFullYear();

//insert and modify header and footer
document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", `<header><div class="title"><h1><a href="` + url + `">Mel Kappa Phi</a></h1></div></header>`);
document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", `<footer><div  class="copyright"><a href="` + url + `">&copy; ` + year + ` Mel Kappa Phi</a></div></footer>`);



let url = "https://melkappaphi.cb3.xyz/";

function clickHeaderH1() {
    window.open(url,"_self");
}

document.getElementsByTagName("header")[0].insertAdjacentHTML("beforeend", `<div class="title"><h1 onclick="clickHeaderH1()">Mel Kappa Phi</h1></div>`);

document.getElementsByTagName("footer")[0].insertAdjacentHTML("beforeend", `<a href="` + url + `">&copy; 2020 Mel Kappa Phi</a>`);
let url = "https://melkappaphi.cb3.xyz/";

function clickHeaderH1() {
    window.open(url,"_self");
}

document.getElementsByTagName("footer")[0].insertAdjacentHTML("beforeend", `<a href="` + url + `">&copy; 2020 Mel Kappa Phi</a>`);
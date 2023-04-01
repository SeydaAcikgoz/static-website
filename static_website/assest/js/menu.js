console.log(window.location.pathname);
const activeMenuItem = document.getElementById(window.location.pathname.replace("/", "").split(".")[0]);
activeMenuItem.style.color = "#FF001F";

//sayfanın hangi bölümünde bulunuyorsak(anasayfa,hakkımızda,iletişim,) ilgili linke renk verdik
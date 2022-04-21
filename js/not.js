// Kosullarla Calismak Bolum Sonu Egzersizi:

/* 
1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir
AA  90-100
BA  85-89
BB  80-84
CB  75-79
CC  70-74
DC  65-69
DD  60-64
FD  50-59
FF  0-49

2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et
3- ff bilgisinde uzgun surat ikonu cikart, digerlerinde ise gulucuk olsun :)
4- ff class bilgisi text-danger, digerlerinin ise text-primary olsun
*/

const gulucuk = `<i class="fa-regular fa-face-laugh-beam"></i>`
const huzun = `<i class="fa-solid fa-face-sad-cry"></i>`

let score = prompt("Kac aldiniz...")
let sonuc;
let yazi = document.querySelector("#info")

if (score <= 100 && score >= 0) {
    sonuc = gulucuk
    yazi.classList.add('text-primary')
    if (score >= 90) {
        sonuc += " AA"
    } else if (score >= 85) {
        sonuc += " BA"
    } else if (score >= 80) {
        sonuc += " BB"
    } else if (score >= 75) {
        sonuc += " CB"
    } else if (score >= 70) {
        sonuc += " CC"
    } else if (score >= 65) {
        sonuc += " DC"
    } else if (score >= 60) {
        sonuc += " DD"
    } else if (score >= 50) {
        sonuc += " FD"
    } else if (score < 50) {
        sonuc = huzun + " FF"
        yazi.classList.remove('text-primary')
        yazi.classList.add('text-danger')
     
    }
    
} else {
    sonuc = "Yanlislik"
}


yazi.innerHTML = `${score} --> ${sonuc}`
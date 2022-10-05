const submit = document.getElementById("btn-sub");

const hitungBMI = (bb,tb) => {
    return bb / (tb/100)**2;
}

submit.addEventListener("click", function(){
    const berat = document.getElementById("bb").value;
    const tinggi = document.getElementById("tb").value;
    const hasil = hitungBMI(berat,tinggi);
    const out = document.getElementById("out");
    if(hasil < 18.5){
        out.innerHTML = `Berat badan anda kurang, BMI anda adalah ${hasil}`;
    }else if(hasil >= 18.5 && hasil <= 24.9){
        out.innerHTML = `Berat badan anda normal, BMI anda adalah ${hasil}`;
    }else if(hasil >= 25 && hasil <= 29.9){
        out.innerHTML = `Berat badan anda berlebih, BMI anda adalah ${hasil}`;
    }else if(hasil >= 30){
        out.innerHTML = `Berat badan anda sangat berlebih, BMI anda adalah ${hasil}`;
    }else{
        out.innerHTML = "Input tidak valid";
    }
})


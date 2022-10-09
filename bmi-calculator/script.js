const submit = document.getElementById("btn-sub");

const hitungBMI = (bb,tb) => {
    return bb / (tb/100)**2;
}

submit.addEventListener("click", function(){
    const berat = document.getElementById("bb").value;
    const tinggi = document.getElementById("tb").value;
    const hasil = hitungBMI(berat,tinggi).toPrecision(4);
    const out = document.getElementById("out");
    if(hasil < 18.5){
        out.innerHTML =
        `<p>BMI anda adalah ${hasil}, Berat badan anda <span class="status" style="color:red">Kurus</span></p>`
    }else if(hasil >= 18.5 && hasil <= 24.9){
        out.innerHTML =
        `<p>BMI anda adalah ${hasil}, Berat badan anda <span class="status" style="color:green">Normal</span></p>`
    }else if(hasil >= 25 && hasil <= 29.9){
        out.innerHTML =
        `<p>BMI anda adalah ${hasil}, Berat badan anda <span class="status" style="color:orange">Berlebih</span></p>`
    }else if(hasil >= 30){
        out.innerHTML =
        `<p>BMI anda adalah ${hasil}, Berat badan anda <span class="status" style="color:red">Sangat Berlebih</span></p>`
    }else{
        out.innerHTML = "Input tidak valid";
    }
})


const app = Vue.createApp({
    data() {
        return {
            daftarCuaca: []
        }
    },

    //Methods khusus milik vue untuk menjalankan aplikasi
    mounted() {
        //Fungsi fetch untuk mengambil data dari URL
        fetch("https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m")
            .then(respon => respon.json())
            .then(data => {
                this.daftarCuaca = data.hourly.time.slice(0, 10).map((waktu, indeks) => {
                    return {
                        waktu: waktu,
                        temperatur: data.hourly.temperature_2m[indeks]
                    }
                });
            });
    }
});

app.mount("#app");
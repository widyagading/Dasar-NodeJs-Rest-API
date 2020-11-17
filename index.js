const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body parser untuk ekstrak data request format JSON
app.use(bodyParser.json())

// penggunaan body parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

//penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

//end point "/test" dengan method GET
app.get("/test", (req,res) => {
    //req -> variable berisi data request
    //res -> variable berisi response dari end point
    // membuat objek berisi data yg akan dijadikan response
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }
    //memberikan response dgn format JSON yang berisi objek diatas
    res.json(response)
})

// menjalankan server pd port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

//end point "/profil/nama/umur" dgn method GET
app.get("/profil/:name/:age", (req,res) => {
    // :name dan :age diberi titik dua menunjukkan "name" dan "age"
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request

    //menampung data yg dikirim
    let name = req.params.name // mengambil nilai parameter name
    let age = req.params.age // mengambil nilai parameter age

    //membuat objek berisi data yg dijadikan rsponse 
    //response berisi data nama dan umur sesuai nilai parameter
    let response = {
        nama: name,
        umur: age
    }

    //memberikan response dgn format JSON yang berisi objek di atas
    res.json(response)
})

// end point "/bujur_sangkar" dgn method POST
app.post("/bujur_sangkar", (req,res)  => {
    // menampung data yang dikirimkan dan mengkonversi jadi tipe numerik
    let panjang = Number(req.body.panjang) // ambil nilai panjang dari body
    let lebar = Number(req.body.lebar) //ambil nilai lebar dari body

    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    //buat objek berisi data yg akan jadi response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }

    //memberikan response dgn format JSON berisi objek diatas
    res.json(response)
})
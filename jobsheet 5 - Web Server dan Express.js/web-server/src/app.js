const express = require('express');
const path = require('path')
const hbs = require('hbs')

const app = express()

const directoriPublic = path.join(__dirname, '../public')
const directoriViews = path.join(__dirname, '../templates/views')
const directoriPartials = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', directoriViews)
hbs.registerPartials(directoriPartials)

app.use(express.static(directoriPublic))

//ini halaman /page utama
app.get('', (req, res) => {
    res.render('index', {
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Agil Mardian Hawari'
    })
});
//ini halaman bantuan/FAQ
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
        nama: 'Agil Mardian Hawari',
        teksBantuan: 'ini adalah teks bantuan'
    })
});
//ini halaman infoCuaca
app.get('/infoCuaca', (req, res) => {
    res.render([{
        prediksiCuaca: 'cuaca berpotensi hujan',
        lokasi: 'padang'
    }])
});
//ini halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang',{
        judul: 'Tentang Saya',
        nama: 'Agil Mardian Hawari'
    })
})

app.get('/bantuan/:artikel', (req, res) =>{
    res.render('404', {
        judul: '404', 
        nama: 'Agil Mardian Hawari',
        pesanKesalahan: "artikel yang dicari tidak ditemukan"
    })
})

app.use((req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Agil Mardian Hawari',
        pesanKesalahan: 'Halaman tidak ditemukan'
    })
})

app.listen(4000, () => {
    console.log('server berjalan pada port 4000')
})
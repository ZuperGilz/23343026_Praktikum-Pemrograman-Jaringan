
const fs = require('fs');
const chalk = require('chalk');

const ambilCatatan = function(){ return 'Ini Catatan M Ilham'; }

const tambahCatatan = function(judul, isi){
    const catatan = muatCatatan();
    const catatanGanda = catatan.filter(note => note.title === judul);

    if(catatanGanda.length === 0){
        catatan.push({ judul, isi });
        simpanCatatan(catatan);
        console.log('Catatan baru ditambahkan!');
    }
    else {
        console.log('Judul catatan telah dipakai');
    }
}

const simpanCatatan = function(catatan){
    const dataJSON = JSON.stringify(catatan);
    fs.writeFileSync('catatan.json', dataJSON);
}

const muatCatatan = function(){
    try {
        const databBuffer = fs.readFileSync('catatan.json');
        const dataJSON = databBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const hapusCatatan = function(judul){
    const catatan = muatCatatan();
    const catatanUntukDisimpan = catatan.filter(note => note.judul !== judul);

    if(catatan.length > catatanUntukDisimpan.length){
        console.log(chalk.green.inverse('Catatan dihapus!'));
        simpanCatatan(catatanUntukDisimpan);
    }
    else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'));
    }
}

const bacaSemua = function(){
    const semuaCatatan = muatCatatan();
    if(semuaCatatan.length === 0){
        console.log(chalk.red.inverse('Catatan kosong!'));
        return;
    }
    semuaCatatan.forEach(({judul, isi}) => console.log({judul, isi}));
    console.log(chalk.green.inverse('Semua catatan berhasil ditampilkan!'));
}

const bacaJudul = function(judul_dicari){
    const semuaCatatan = muatCatatan();
    const target = semuaCatatan.find(catatan => catatan.judul === judul_dicari);

    if(!target){
        console.log(chalk.red.inverse(`Catatan dengan judul ${judul_dicari} tidak ditemukan!`));
        return;
    }
    const {judul, isi} = target;
    console.log({ judul, isi });

    console.log(chalk.green.inverse('Sebuah catatan berhasil ditampilkan'));
}

module.exports = {
    ambilCatatan,
    tambahCatatan,
    hapusCatatan,
    bacaSemua,
    bacaJudul
};

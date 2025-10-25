const fs = require('fs')
// fs.writeFileSync('catatan.txt', 'nama saya agil mardian hawari')
fs.appendFileSync('catatan.txt', 'saya tinggal di padang')

// const catatan = require('./catatan.js')
// const pesan = catatan()
// console.log(pesan)

// const validator = require('validator')
// const ambilCatatan = require('./catatan.js')
// const pesan = ambilCatatan()
// console.log(pesan)
// console.log(validator.isURL('https://proska.com'))

// const chalk = require('chalk')
// console.log(chalk.red('hello world'))

// const ambilCatatan = require('./catatan.js')
// const command = process.argv[2]
// console.log(process.argv[2])

// if (command === 'tambah'){
//     console.log('Tambah catatan')
// } else if (command == 'hapus') {
//     console.log('Hapus catatan')
// }

const yargs = require('yargs');
const catatan = require('./catatan.js');

// kustomisasi versi yargs
yargs.version('10.1.0');

// buat command tambah
yargs.command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        },
        isi: {
            describe: 'Isi catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        catatan.tambahCatatan(argv.judul, argv.isi);
    }
});

// buat command hapus
yargs.command({
    command: 'hapus',
    describe: 'hapus catatan',
    builder: {
        judul: {
            describe: 'Hapus catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        catatan.hapusCatatan(argv.judul);
    }
});

// command baca semua
yargs.command({
    command: 'read_all',
    describe: 'menampilkan semua catatan',
    handler: function(){
        catatan.bacaSemua();
    }
});

// command baca satu
yargs.command({
    command: 'read',
    describe: 'menampilkan sebuah catatan',
    builder: {
        judul: {
            describe: 'Menampilkan satu catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        catatan.bacaJudul(argv.judul);
    }
});


// console.log(yargs.argv);
yargs.parse();
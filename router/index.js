const express = require("express");
const exampleController = require("../controller/exampleController");
const routeMahasiswa = require("./mahasiswa");
const routeDosen = require("./dosen");
const routeMatkul = require("./matakuliah");
const routeDsnMat = require("./dosenmatkul");
const routeMhsBimbingan = require("./mahasiswabimbingan");
const routeJadwalMatkul = require("./jadwalmatkul");
const route = express.Router()

route.get('/',exampleController.index)
route.use('/mahasiswa',routeMahasiswa)
route.use('/dosen',routeDosen)
route.use('/matkul',routeMatkul)
route.use('/dosen-matkul',routeDsnMat)
route.use('/mahasiswa-bimbingan',routeMhsBimbingan)
route.use('/jadwal-matkul',routeJadwalMatkul)

module.exports = route
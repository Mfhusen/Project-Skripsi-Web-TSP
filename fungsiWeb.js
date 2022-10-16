// Membuat deklarasi variabel untuk penggunaan global
var map;
var tampilanArah = null;
var tampilanLayananl;
var garisPolyline;

var nodes = [];
var nodeSebelum = [];
var penanda = [];

// Variabel untuk menampung tujuan lokasi dan jarak
var tujuan = [];
var jarak = [];

// Info default lokasi berisikan nama lokasi, latitude dan longitude
var tujuanDefault = [
  ["Istana Anak-Anak Indonesia", -6.302011, 106.900207],
  ["Anjungan Bali", -6.302664, 106.897567],
  ["Sasono Adiguno TMII", -6.301907, 106.891441],
  ["Museum HAKKA Indonesia", -6.305194, 106.903967],
  ["Teater IMAX Keong Emas", -6.304473, 106.890819],
  ["Museum Indonesia", -6.301047, 106.891444],
  ["Museum Purna Bakti Pertiwi", -6.300346, 106.886441],
];

var gunakanTujuanDefault = false;

// Menentukan destinasi tujuan

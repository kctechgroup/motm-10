// Your code goes here

var vinElem = document.getElementById('vin');
gm.info.getVehicleConfiguration(function(data) {
  vinElem.innerHTML = gm.info.getVIN();
});

function showSpeed(data) {
  console.log(data)
  var speed = data.average_speed;
  if (speed !== undefined) {
    var speedText = document.getElementById('speed');
    speedText.innerHTML = speed;
  }
  speedogauge.set(speed); // set actual value
}

gm.info.watchVehicleData(showSpeed, ['average_speed']);
gm.info.getVehicleData(showSpeed, ['average_speed']);

function showOilTemp(data) {
  console.log(data)
  var oiltemp = data.engine_oil_temp;
  if (oiltemp !== undefined) {
    var oiltempText = document.getElementById('oiltemp');
    oiltempText.innerHTML = oiltemp;
  }
  oiltempgauge.set(oiltemp); // set actual value
}


gm.info.watchVehicleData(showOilTemp, ['engine_oil_temp']);
gm.info.getVehicleData(showOilTemp, ['engine_oil_temp']);

var opts = {
  angle: 0.15, // The span of the gauge arc
  lineWidth: 0.44, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.035, // The thickness
    color: '#000000' // Fill color
  },
  limitMax: true,     // If false, max value increases automatically if value > maxValue
  limitMin: true,     // If true, the min value of the gauge will be fixed
  colorStart: '#6FADCF',   // Colors
  colorStop: '#8FC0DA',    // just experiment with them
  strokeColor: '#E0E0E0',  // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true,     // High resolution support

};

var speedotarget = document.getElementById('speedogauge'); // your canvas element
var speedogauge = new Gauge(speedotarget).setOptions(opts); 
speedogauge.maxValue = 250; // set max gauge value
speedogauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
speedogauge.animationSpeed = 32; // set animation speed (32 is default value)

var oiltemptarget = document.getElementById('oiltempgauge'); // your canvas element
var oiltempgauge = new Gauge(oiltemptarget).setOptions(opts); 
oiltempgauge.maxValue = 215;
oiltempgauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
oiltempgauge.animationSpeed = 32; // set animation speed (32 is default value)
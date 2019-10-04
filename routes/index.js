var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  const signal_svg = fs.readFileSync('public/images/signal.svg', 'utf8');
  const wifi_svg = fs.readFileSync('public/images/wifi.svg', 'utf8');
  const battery_svg = fs.readFileSync('public/images/battery.svg', 'utf8');
  res.render('index', { title: 'Sébastien XAVIER CARLOS',
  icons: {
    'signal': signal_svg,
    'wifi': wifi_svg,
    'battery': battery_svg
  }
 });

});

router.get('/resources', function(req, res, next) {
  res.render('resources', {
    icons: {
      battery: 'Battery by Vicons Design from the Noun Project',
      wifi: 'wifi by Chameleon Design from the Noun Project',
      signal: 'wifi by Vicons Design from the Noun Project'
    }
  })
})

module.exports = router;

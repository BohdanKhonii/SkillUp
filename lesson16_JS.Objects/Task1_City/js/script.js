let city = {
  'Zarephath': 728375,
  'Reinerton': 864402,
  'Spelter': 340533,
  'Henrietta': 932557,
  'Dyckesville': 421758,
  'Yettem': 250492,
  'Gracey': 551885,
  'Floris': 216435,
  'Davenport': 290139,
  'Tioga': 653031,
  checkMore: function () {         
    let max=0,town;
    for(let key in city){
      if (city[key]>max) {
        max=city[key];
        town=key;        
      }
    }
    return town;
  }
}
alert(city.checkMore());
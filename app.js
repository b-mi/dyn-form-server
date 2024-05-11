const config = require('config');
const express = require('express')
const cors = require('cors');
const fs = require('node:fs');
const app = express()
app.use(cors());
app.use(express.json());
const port = 3000

// const ngFormDefPath = config.get('ngFormDefPath');
// console.log('cf', ngFormDefPath);


app.get('/', (req, res) => {
  res.json({ msg: 'Hello World!' });
});

N = 10;

// get states
app.get('/getstates/:filter', (req, res) => {
  source = [
    { "key": 1, "label": "Alabama" },
    { "key": 2, "label": "Alaska" },
    { "key": 3, "label": "Arizona" },
    { "key": 4, "label": "Arkansas" },
    { "key": 5, "label": "California" },
    { "key": 6, "label": "Colorado" },
    { "key": 7, "label": "Connecticut" },
    { "key": 8, "label": "Delaware" },
    { "key": 9, "label": "Florida" },
    { "key": 10, "label": "Georgia" },
    { "key": 11, "label": "Hawaii" },
    { "key": 12, "label": "Idaho" },
    { "key": 13, "label": "Illinois" },
    { "key": 14, "label": "Indiana" },
    { "key": 15, "label": "Iowa" },
    { "key": 16, "label": "Kansas" },
    { "key": 17, "label": "Kentucky" },
    { "key": 18, "label": "Louisiana" },
    { "key": 19, "label": "Maine" },
    { "key": 20, "label": "Maryland" },
    { "key": 21, "label": "Massachusetts" },
    { "key": 22, "label": "Michigan" },
    { "key": 23, "label": "Minnesota" },
    { "key": 24, "label": "Mississippi" },
    { "key": 25, "label": "Missouri" },
    { "key": 26, "label": "Montana" },
    { "key": 27, "label": "Nebraska" },
    { "key": 28, "label": "Nevada" },
    { "key": 29, "label": "New Hampshire" },
    { "key": 30, "label": "New Jersey" },
    { "key": 31, "label": "New Mexico" },
    { "key": 32, "label": "New York" },
    { "key": 33, "label": "North Carolina" },
    { "key": 34, "label": "North Dakota" },
    { "key": 35, "label": "Ohio" },
    { "key": 36, "label": "Oklahoma" },
    { "key": 37, "label": "Oregon" },
    { "key": 38, "label": "Pennsylvania" },
    { "key": 39, "label": "Rhode Island" },
    { "key": 40, "label": "South Carolina" },
    { "key": 41, "label": "South Dakota" },
    { "key": 42, "label": "Tennessee" },
    { "key": 43, "label": "Texas" },
    { "key": 44, "label": "Utah" },
    { "key": 45, "label": "Vermont" },
    { "key": 46, "label": "Virginia" },
    { "key": 47, "label": "Washington" },
    { "key": 48, "label": "West Virginia" },
    { "key": 49, "label": "Wisconsin" },
    { "key": 50, "label": "Wyoming" },
  ];
  result = getFiltered(source, req.params.filter);
  res.json(result);
})

// get cities
app.get('/getcities/:filter', (req, res) => {
  source = [
    { "key": 100, "label": "Bratislava" },
    { "key": 101, "label": "Bratislava I" },
    { "key": 102, "label": "Bratislava II" },
    { "key": 103, "label": "Bratislava III" },
    { "key": 104, "label": "Bratislava IV" },
    { "key": 105, "label": "Bratislava V" },
    { "key": 106, "label": "Malacky" },
    { "key": 107, "label": "Pezinok" },
    { "key": 108, "label": "Senec" },
    { "key": 201, "label": "Dunajská Streda" },
    { "key": 202, "label": "Galanta" },
    { "key": 203, "label": "Hlohovec" },
    { "key": 204, "label": "Piešťany" },
    { "key": 205, "label": "Senica" },
    { "key": 206, "label": "Skalica" },
    { "key": 207, "label": "Trnava" },
    { "key": 301, "label": "Bánovce nad Bebravou" },
    { "key": 302, "label": "Ilava" },
    { "key": 303, "label": "Myjava" },
    { "key": 304, "label": "Nové Mesto nad Váhom" },
    { "key": 305, "label": "Partizánske" },
    { "key": 306, "label": "Považská Bystrica" },
    { "key": 307, "label": "Prievidza" },
    { "key": 308, "label": "Púchov" },
    { "key": 309, "label": "Trenčín" },
    { "key": 401, "label": "Komárno" },
    { "key": 402, "label": "Levice" },
    { "key": 403, "label": "Nitra" },
    { "key": 404, "label": "Nové Zámky" },
    { "key": 405, "label": "Šaľa" },
    { "key": 406, "label": "Topoľčany" },
    { "key": 407, "label": "Zlaté Moravce" },
    { "key": 501, "label": "Bytča" },
    { "key": 502, "label": "Čadca" },
    { "key": 503, "label": "Dolný Kubín" },
    { "key": 504, "label": "Kysucké Nové Mesto" },
    { "key": 505, "label": "Liptovský Mikuláš" },
    { "key": 506, "label": "Martin" },
    { "key": 507, "label": "Námestovo" },
    { "key": 508, "label": "Ružomberok" },
    { "key": 509, "label": "Turčianske Teplice" },
    { "key": 510, "label": "Tvrdošín" },
    { "key": 511, "label": "Žilina" },
    { "key": 601, "label": "Banská Bystrica" },
    { "key": 602, "label": "Banská Štiavnica" },
    { "key": 603, "label": "Brezno" },
    { "key": 604, "label": "Detva" },
    { "key": 605, "label": "Krupina" },
    { "key": 606, "label": "Lučenec" },
    { "key": 607, "label": "Poltár" },
    { "key": 608, "label": "Revúca" },
    { "key": 609, "label": "Rimavská Sobota" },
    { "key": 610, "label": "Veľký Krtíš" },
    { "key": 611, "label": "Zvolen" },
    { "key": 612, "label": "Žarnovica" },
    { "key": 613, "label": "Žiar nad Hronom" },
    { "key": 701, "label": "Bardejov" },
    { "key": 702, "label": "Humenné" },
    { "key": 703, "label": "Kežmarok" },
    { "key": 704, "label": "Levoča" },
    { "key": 705, "label": "Medzilaborce" },
    { "key": 706, "label": "Poprad" },
    { "key": 707, "label": "Prešov" },
    { "key": 708, "label": "Sabinov" },
    { "key": 709, "label": "Snina" },
    { "key": 710, "label": "Stará Ľubovňa" },
    { "key": 711, "label": "Stropkov" },
    { "key": 712, "label": "Svidník" },
    { "key": 713, "label": "Vranov nad Topľou" },
    { "key": 800, "label": "Košice" },
    { "key": 801, "label": "Gelnica" },
    { "key": 802, "label": "Košice I" },
    { "key": 803, "label": "Košice II" },
    { "key": 804, "label": "Košice III" },
    { "key": 805, "label": "Košice IV" },
    { "key": 806, "label": "Košice - okolie" },
    { "key": 807, "label": "Michalovce" },
    { "key": 808, "label": "Rožňava" },
    { "key": 809, "label": "Sobrance" },
    { "key": 810, "label": "Spišská Nová Ves" },
    { "key": 811, "label": "Trebišov  " },
  ]
  result = getFiltered(source, req.params.filter);
  res.json(result);
})

// get colors
app.get('/getcolors/:filter', (req, res) => {
  source = [
    { "key": 1, "label": "AliceBlue" },
    { "key": 2, "label": "AntiqueWhite" },
    { "key": 3, "label": "Aqua" },
    { "key": 4, "label": "Aquamarine" },
    { "key": 5, "label": "Azure" },
    { "key": 6, "label": "Beige" },
    { "key": 7, "label": "Bisque" },
    { "key": 8, "label": "Black" },
    { "key": 9, "label": "BlanchedAlmond" },
    { "key": 10, "label": "Blue" },
    { "key": 11, "label": "BlueViolet" },
    { "key": 12, "label": "Brown" },
    { "key": 13, "label": "BurlyWood" },
    { "key": 14, "label": "CadetBlue" },
    { "key": 15, "label": "Chartreuse" },
    { "key": 16, "label": "Chocolate" },
    { "key": 17, "label": "Coral" },
    { "key": 18, "label": "CornflowerBlue" },
    { "key": 19, "label": "Cornsilk" },
    { "key": 20, "label": "Crimson" },
    { "key": 21, "label": "Cyan" },
    { "key": 22, "label": "DarkBlue" },
    { "key": 23, "label": "DarkCyan" },
    { "key": 24, "label": "DarkGoldenrod" },
    { "key": 25, "label": "DarkGray" },
    { "key": 26, "label": "DarkGreen" },
    { "key": 27, "label": "DarkKhaki" },
    { "key": 28, "label": "DarkMagenta" },
    { "key": 29, "label": "DarkOliveGreen" },
    { "key": 30, "label": "DarkOrange" },
    { "key": 31, "label": "DarkOrchid" },
    { "key": 32, "label": "DarkRed" },
    { "key": 33, "label": "DarkSalmon" },
    { "key": 34, "label": "DarkSeaGreen" },
    { "key": 35, "label": "DarkSlateBlue" },
    { "key": 36, "label": "DarkSlateGray" },
    { "key": 37, "label": "DarkTurquoise" },
    { "key": 38, "label": "DarkViolet" },
    { "key": 39, "label": "DeepPink" },
    { "key": 40, "label": "DeepSkyBlue" },
    { "key": 41, "label": "DimGray" },
    { "key": 42, "label": "DodgerBlue" },
    { "key": 43, "label": "Firebrick" },
    { "key": 44, "label": "FloralWhite" },
    { "key": 45, "label": "ForestGreen" },
    { "key": 46, "label": "Fuchsia" },
    { "key": 47, "label": "Gainsboro" },
    { "key": 48, "label": "GhostWhite" },
    { "key": 49, "label": "Gold" },
    { "key": 50, "label": "Goldenrod" },
    { "key": 51, "label": "Gray" },
    { "key": 52, "label": "Green" },
    { "key": 53, "label": "GreenYellow" },
    { "key": 54, "label": "Honeydew" },
    { "key": 55, "label": "HotPink" },
    { "key": 56, "label": "IndianRed" },
    { "key": 57, "label": "Indigo" },
    { "key": 58, "label": "Ivory" },
    { "key": 59, "label": "Khaki" },
    { "key": 60, "label": "Lavender" },
    { "key": 61, "label": "LavenderBlush" },
    { "key": 62, "label": "LawnGreen" },
    { "key": 63, "label": "LemonChiffon" },
    { "key": 64, "label": "LightBlue" },
    { "key": 65, "label": "LightCoral" },
    { "key": 66, "label": "LightCyan" },
    { "key": 67, "label": "LightGoldenrodYellow" },
    { "key": 68, "label": "LightGray" },
    { "key": 69, "label": "LightGreen" },
    { "key": 70, "label": "LightPink" },
    { "key": 71, "label": "LightSalmon" },
    { "key": 72, "label": "LightSeaGreen" },
    { "key": 73, "label": "LightSkyBlue" },
    { "key": 74, "label": "LightSlateGray" },
    { "key": 75, "label": "LightSteelBlue" },
    { "key": 76, "label": "LightYellow" },
    { "key": 77, "label": "Lime" },
    { "key": 78, "label": "LimeGreen" },
    { "key": 79, "label": "Linen" },
    { "key": 80, "label": "Magenta" },
    { "key": 81, "label": "Maroon" },
    { "key": 82, "label": "MediumAquamarine" },
    { "key": 83, "label": "MediumBlue" },
    { "key": 84, "label": "MediumOrchid" },
    { "key": 85, "label": "MediumPurple" },
    { "key": 86, "label": "MediumSeaGreen" },
    { "key": 87, "label": "MediumSlateBlue" },
    { "key": 88, "label": "MediumSpringGreen" },
    { "key": 89, "label": "MediumTurquoise" },
    { "key": 90, "label": "MediumVioletRed" },
    { "key": 91, "label": "MidnightBlue" },
    { "key": 92, "label": "MintCream" },
    { "key": 93, "label": "MistyRose" },
    { "key": 94, "label": "Moccasin" },
    { "key": 95, "label": "NavajoWhite" },
    { "key": 96, "label": "Navy" },
    { "key": 97, "label": "OldLace" },
    { "key": 98, "label": "Olive" },
    { "key": 99, "label": "OliveDrab" },
    { "key": 100, "label": "Orange" },
    { "key": 101, "label": "OrangeRed" },
    { "key": 102, "label": "Orchid" },
    { "key": 103, "label": "PaleGoldenrod" },
    { "key": 104, "label": "PaleGreen" },
    { "key": 105, "label": "PaleTurquoise" },
    { "key": 106, "label": "PaleVioletRed" },
    { "key": 107, "label": "PapayaWhip" },
    { "key": 108, "label": "PeachPuff" },
    { "key": 109, "label": "Peru" },
    { "key": 110, "label": "Pink" },
    { "key": 111, "label": "Plum" },
    { "key": 112, "label": "PowderBlue" },
    { "key": 113, "label": "Purple" },
    { "key": 114, "label": "Red" },
    { "key": 115, "label": "RosyBrown" },
    { "key": 116, "label": "RoyalBlue" },
    { "key": 117, "label": "SaddleBrown" },
    { "key": 118, "label": "Salmon" },
    { "key": 119, "label": "SandyBrown" },
    { "key": 120, "label": "SeaGreen" },
    { "key": 121, "label": "SeaShell" },
    { "key": 122, "label": "Sienna" },
    { "key": 123, "label": "Silver" },
    { "key": 124, "label": "SkyBlue" },
    { "key": 125, "label": "SlateBlue" },
    { "key": 126, "label": "SlateGray" },
    { "key": 127, "label": "Snow" },
    { "key": 128, "label": "SpringGreen" },
    { "key": 129, "label": "SteelBlue" },
    { "key": 130, "label": "Tan" },
    { "key": 131, "label": "Teal" },
    { "key": 132, "label": "Thistle" },
    { "key": 133, "label": "Tomato" },
    { "key": 134, "label": "Transparent" },
    { "key": 135, "label": "Turquoise" },
    { "key": 136, "label": "Violet" },
    { "key": 137, "label": "Wheat" },
    { "key": 138, "label": "White" },
    { "key": 139, "label": "WhiteSmoke" },
    { "key": 140, "label": "Yellow" },
    { "key": 141, "label": "YellowGreen" },
  ]
  result = getFiltered(source, req.params.filter);
  res.json(result);
})


function getFiltered(source, filter) {
  if (filter === '-')
    filter = '';
  filter = decodeURIComponent(filter);

  console.log('getFiltered', filter);

  let result = [];
  const normFilter = removeDiacritics(filter)

  let cnt = 0;
  for (const item of source) {
    if (!filter) {
      result.push(item);
      cnt++;
      if (cnt >= N) {
        break;
      }
    }
    else if (removeDiacritics(item.label).includes(normFilter)) {
      result.push(item);
      cnt++;
      if (cnt >= N) {
        break;
      }
    }
  }

  result.sort((a, b) => a.label.localeCompare(b.label));
  return result;

}


app.put('/save-json/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const formPath = body.apiFullFormPath;
  const data = body.data;
  const pth = formPath + '/' + id + '.json';
  console.log('save-json', pth);
  const strData = JSON.stringify(data, null, 2);
  fs.writeFile(pth, strData, err => {
    if (err) {
      res.json({ msg: `save-json: error ${id}, ${err}` });
    }
  });
  res.json({ msg: `save-json: ok ${id}` });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function removeDiacritics(str) {
  if (str)
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  return str;
}
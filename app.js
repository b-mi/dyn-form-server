const config = require('config');
const express = require('express')
const cors = require('cors');
const fs = require('node:fs')
const app = express()
app.use(cors());
app.use(express.json());
const port = 3000

// const ngFormDefPath = config.get('ngFormDefPath');
// console.log('cf', ngFormDefPath);


app.get('/', (req, res) => {
  res.json({ msg: 'Hello World3!' });
});

app.get('/getvalues/:id/:filter', (req, res) => {

  N = 5;
  const id = req.params.id;
  const filter = decodeURIComponent(req.params.filter);
  console.log(id, filter);
  let source = [];

  switch (id) {
    case 'city':
      source = [
        { "label": "Bratislava", "key": "BA" },
        { "label": "Senec", "key": "SC" },
        { "label": "Trnava", "key": "TT" },
        { "label": "Poprad", "key": "PP" },
        { "label": "Nitra", "key": "NR" },
        { "label": "Žilina", "key": "ZA" },
        { "label": "Košice", "key": "KE" },
        { "label": "Rožňava", "key": "RV" }
      ];
      break;
    case 'color':
      source = [
        { "label": "Red", "key": "R" },
        { "label": "Green", "key": "G" },
        { "label": "Blue", "key": "B" },
        { "label": "Yellow", "key": "Y" },
        { "label": "Magenta", "key": "M" },
        { "label": "Brown", "key": "BR" },
        { "label": "White", "key": "W" },
        { "label": "Black", "key": "BL" }
      ];

      break;

    default:
      break;
  }

  let result = [];

  if (filter !== '-') {
    const normFilter = removeDiacritics(filter)

    let cnt = 0;
    for (const item of source) {
      if (removeDiacritics(item.label).includes(normFilter)) {
        result.push(item);
        cnt++;
        if (cnt >= N) {
          break;
        }
      }
    }

    // result = source.filter(i => removeDiacritics(i.label).includes(normFilter));
  } else {
    result = source;
  }

  result.sort((a, b) => a.label.localeCompare(b.label));
  res.json(result);
});

app.put('/save-json/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const formPath = body.formPath;
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
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
})

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
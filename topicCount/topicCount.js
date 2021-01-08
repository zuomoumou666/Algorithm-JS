const https = require("https");

function fetch(url) {
  return new Promise((rs, rj) => {
    https.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        rs(JSON.parse(data));
      })
    }).on('error', (e) => {
      console.error(e);
      rj(e);
    });
  });
}

function topicCount(topic) {
  const url = `https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=${topic}`;
  const regex = /<[^>]+>/g;
  fetch(url)
    .then(result => {
      const text = result.parse.text['*'];
      const a = text.replace(regex, ' ');
      console.log(a);
    });
}


topicCount('pizza');
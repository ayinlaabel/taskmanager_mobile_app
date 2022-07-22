const axios = require('axios');

axios.get('http://localhost:4090/lists').then((lists) => console.log(lists));

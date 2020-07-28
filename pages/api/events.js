import axios from 'axios';

export default async (req, res) => {
  try {
    const events = await axios.get('', {
      params: {
        key: 'AIzaSyC7KoAbxjGswPeypdWIjioRPlWFO-Ae6aU',
      },
    });
    res.statusCode = 200;
    res.json(events);
  } catch (err) {
    res.statusCode = 500;
    res.json({ err: err });
  }
};

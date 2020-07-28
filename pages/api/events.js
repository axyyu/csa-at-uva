import axios from 'axios';

export default async (req, res) => {
  try {
    const events = await axios.get(
      'https://www.googleapis.com/calendar/v3/calendars/uvachinesestudentassociation%40gmail.com/events',
      {
        params: {
          key: 'AIzaSyC7KoAbxjGswPeypdWIjioRPlWFO-Ae6aU',
        },
      }
    );
    res.statusCode = 200;
    res.json(events.data);
  } catch (err) {
    res.statusCode = 200;
    res.json({ err: err });
  }
};

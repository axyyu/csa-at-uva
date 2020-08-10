import moment from 'moment';
import useSWR from 'swr';
import { FaYinYang } from 'react-icons/fa';

import Loader from './Loader';

const ThisWeekInCsaTimeline = () => {
  let { data, error } = useSWR(
    'https://csa-at-uva-cms.uk.r.appspot.com/api/events/week'
  );

  if (error) return <div>Failed to retrieve events</div>;
  if (!data) return <Loader />;

  let days = [];
  for (let i = 0; i < 7; i++) {
    let day = moment().day(1 + i);
    let events = data.items.filter((obj) => {
      let startDate = moment(obj.start.dateTime || obj.start.date);
      return day.isSame(startDate, 'day');
    });

    days.push({
      day: day.format('ddd D'),
      events: events,
    });
  }

  console.log(days);

  const dayPanels = days.map((obj, index) => {
    const spacer = <div className='day-spacer'></div>;

    let events = [];
    if (obj.events.length >= 1) {
      let event = obj.events[0];
      let startDate = moment(event.start.dateTime || event.start.date);

      let location = event.location
        ? event.location.substring(0, event.location.indexOf(','))
        : null;
      events.push(
        <div className='day-event'>
          <p>{event.summary}</p>
          <p className='day-time'>
            {location} @ {startDate.format('hA')}
          </p>
        </div>
      );
    }

    if (obj.events.length > 1) {
      let more = obj.events.length - 1;
      events.push(
        <div className='day-event'>
          <p>
            and {more} more event{more > 1 ? 's' : ''}
          </p>
        </div>
      );
    }

    return (
      <div className='day-container'>
        {index % 2 === 1 && spacer}
        <div className='day-wrapper'>
          <div className='day-header'>
            {obj.day}
            <div className='background'></div>
            <div className='top-left-corner'></div>
            <div className='top-right-corner'></div>
            <div className='bot-left-corner'></div>
            <div className='bot-right-corner'></div>
          </div>
          <div className='day-events'>{events}</div>
          <div className='day-bar'></div>
          <FaYinYang className='day-icon' />
        </div>
        {index % 2 === 0 && spacer}
      </div>
    );
  });

  return (
    <>
      <div className='timeline-bar'></div>
      {dayPanels}
    </>
  );
};

const ThisWeekInCsa = () => {
  return (
    <div className='this-week'>
      <div className='this-week-title'>
        <h2>This Week</h2>
        <h2>In CSA</h2>
      </div>
      <div className='vertical'></div>
      <div className='timeline'>
        <ThisWeekInCsaTimeline />
      </div>
    </div>
  );
};

export default ThisWeekInCsa;

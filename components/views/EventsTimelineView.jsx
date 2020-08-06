import useSWR from 'swr';
import PropTypes from 'prop-types';
import moment from 'moment';

import Loader from '../Loader';

const TimelineEvent = (props) => {
  console.log(props);
  const start = moment(props.start);
  const end = moment(props.end);

  return (
    <div className='timeline-event'>
      <div className='timeline-bar'>
        <div className='timeline-line'></div>
        <div className='timeline-dot'>
          <div className='timeline-center'></div>
        </div>
      </div>
      <div className='timeline-event-content'>
        <h3>{props.name}</h3>
        <p className='timeline-event-date'>{start.format('MMMM Do, YYYY')}</p>
        <p className='timeline-event-time'>
          {start.format('h:mm a')} - {end.format('h:mm a')}
        </p>
      </div>
    </div>
  );
};

TimelineEvent.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  name: PropTypes.string,
};

const EventsTimelineView = () => {
  const { data, error } = useSWR(
    'https://csa-at-uva-cms.uk.r.appspot.com/api/events',
    fetch
  );
  console.log(error);

  if (error) return <div>Failed to retrieve events</div>;
  if (!data) return <Loader />;

  const timelineEvents = data.map((obj) => {
    return (
      <TimelineEvent
        key={obj.summary}
        start={obj.start.dateTime || obj.start.date}
        end={obj.end.dateTime || obj.end.date}
        name={obj.summary}
      ></TimelineEvent>
    );
  });
  return <div className='timeline-view'>{timelineEvents}</div>;
};

EventsTimelineView.propTypes = {
  events: PropTypes.array,
};

export default EventsTimelineView;

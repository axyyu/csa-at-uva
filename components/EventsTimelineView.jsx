import { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

TimelineEvent.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  name: PropTypes.string,
};

class TimelineEvent extends Component {
  render() {
    return <div className='timeline-event'>{this.props.name}</div>;
  }
}

EventsTimelineView.propTypes = {
  events: PropTypes.array,
};

class EventsTimelineView extends Component {
  render() {
    const events = this.props.events.map((obj) => {
      return <TimelineEvent start={''} end={''} name={'test'}></TimelineEvent>;
    });
    return <div className='timeline-view'>{events}</div>;
  }
}

export default EventsTimelineView;

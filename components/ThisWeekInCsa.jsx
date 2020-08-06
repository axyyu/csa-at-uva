class ThisWeekInCsa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      events: null,
    };
  }
  render() {
    return (
      <div className='this-week'>
        <div className='this-week-title'>This Week in CSA</div>
        <div className='timeline'></div>
      </div>
    );
  }
}

export default ThisWeekInCsa;

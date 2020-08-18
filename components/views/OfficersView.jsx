import PropTypes from 'prop-types';

import Carousel from '../Carousel';

const OfficerView = (props) => {
  return (
    <div key={props.name} className='officer-container'>
      <div className='officer-img-container'>
        <img className='officer-img' src={props.image}></img>
      </div>
      <div className='officer-info-container'>
        <div className='officer-info'>
          <h2 className='role'>{props.role}</h2>
          <h2 className='names'>{props.name}</h2>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

const ExecView = (props) => {
  const president = props.officers.filter((obj) => obj.role === 'President')[0];
  const vicePres = props.officers.filter(
    (obj) => obj.role === 'Vice President'
  )[0];
  const treasurer = props.officers.filter((obj) => obj.role === 'Treasurer')[0];
  const secretary = props.officers.filter((obj) => obj.role === 'Secretary')[0];

  return (
    <div key={props.name} className='officer-container exec-officer-container'>
      <div className='exec-officer'>
        <div className='exec-img-container'>
          <img src={president.image}></img>
        </div>
        <div className='exec-info'>
          <h2 className='role'>{president.role}</h2>
          <h2 className='name'>{president.name}</h2>
        </div>
      </div>
      <div className='exec-officer'>
        <div className='exec-img-container'>
          <img src={vicePres.image}></img>
        </div>
        <div className='exec-info'>
          <h2 className='role'>{vicePres.role}</h2>
          <h2 className='name'>{vicePres.name}</h2>
        </div>
      </div>
      <div className='exec-officer'>
        <div className='exec-img-container'>
          <img src={treasurer.image}></img>
        </div>
        <div className='exec-info'>
          <h2 className='role'>{treasurer.role}</h2>
          <h2 className='name'>{treasurer.name}</h2>
        </div>
      </div>
      <div className='exec-officer'>
        <div className='exec-img-container'>
          <img src={secretary.image}></img>
        </div>
        <div className='exec-info'>
          <h2 className='role'>{secretary.role}</h2>
          <h2 className='name'>{secretary.name}</h2>
        </div>
      </div>
    </div>
  );
};

const ExecList = (props) => {
  const president = props.officers.filter((obj) => obj.role === 'President')[0];
  const vicePres = props.officers.filter(
    (obj) => obj.role === 'Vice President'
  )[0];
  const treasurer = props.officers.filter((obj) => obj.role === 'Treasurer')[0];
  const secretary = props.officers.filter((obj) => obj.role === 'Secretary')[0];

  return (
    <>
      <div className='officer-role-list'>
        <h4>{president.role}</h4>
        <ul>
          <li>{president.name}</li>
        </ul>
      </div>
      <div className='officer-role-list'>
        <h4>{vicePres.role}</h4>
        <ul>
          <li>{vicePres.name}</li>
        </ul>
      </div>
      <div className='officer-role-list'>
        <h4>{treasurer.role}</h4>
        <ul>
          <li>{treasurer.name}</li>
        </ul>
      </div>
      <div className='officer-role-list'>
        <h4>{secretary.role}</h4>
        <ul>
          <li>{secretary.name}</li>
        </ul>
      </div>
    </>
  );
};

const OfficersView = (props) => {
  const oboard = props.officers.filter((obj) => obj.desc);
  const officerPanels = oboard.map((obj) => (
    <OfficerView key={obj.role} {...obj} />
  ));

  const officerNames = oboard.map((obj) => {
    const names = obj.name.split(',');
    const nameList = names.map((name) => <li>{name.trim()}</li>);
    return (
      <div className='officer-role-list'>
        <h4>{obj.role}</h4>
        <ul>{nameList}</ul>
      </div>
    );
  });
  return (
    <div className='officers-view'>
      <div className='officer-gallery-wrapper'>
        <Carousel>
          <ExecView officers={props.officers} />
          {officerPanels}
        </Carousel>
      </div>

      <div className='officer-names'>
        <ExecList officers={props.officers} />
        {officerNames}
      </div>
    </div>
  );
};

OfficersView.propTypes = {
  officers: PropTypes.array,
};

export default OfficersView;

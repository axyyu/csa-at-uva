import PropTypes from 'prop-types';

const OfficerView = (props) => {
  return (
    <div className='officer-container'>
      <div className='img-frame'>
        <img alt='Officer Img' src={props.officerImg}></img>
      </div>
      <div className='officer-info'>
        <h3>{props.officerName}</h3>
        <p>{props.roleName}</p>
      </div>
    </div>
  );
};

OfficerView.propTypes = {
  officerId: PropTypes.string,
  officerName: PropTypes.string,
  officerImg: PropTypes.string,
  roleName: PropTypes.string,
  exec: PropTypes.bool,
};

const OfficersView = ({ officers }) => {
  console.log(officers);
  const execOfficers = officers
    .filter((obj) => {
      return obj.exec;
    })
    .map((obj) => {
      return <OfficerView key={obj.officerId} {...obj}></OfficerView>;
    });
  const nonExecOfficers = officers
    .filter((obj) => {
      return !obj.exec;
    })
    .map((obj) => {
      return <OfficerView key={obj.officerId} {...obj}></OfficerView>;
    });

  return (
    <div className='officers-view'>
      <div className='exec-container officers-container'>
        <h2>Exec Board</h2>
        <div className='officers-list'>{execOfficers}</div>
      </div>
      <div className='non-exec-container officers-container'>
        <h2>OBoard</h2>
        <div className='officers-list'>{nonExecOfficers}</div>
      </div>
    </div>
  );
};

OfficersView.propTypes = {
  officers: PropTypes.array,
};

export default OfficersView;

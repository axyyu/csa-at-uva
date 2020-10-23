const AlumniYearView = (props) => {
  const alumniList = props.alumniList.map((obj) => {
    let famhead = obj.includes('*');
    let oboard = obj.includes('^');
    let exec = obj.includes('#');
    let name = '';
    try {
      name = obj
        .replaceAll('*', '')
        .replaceAll('^', '')
        .replaceAll('#', '')
        .trim();
    } catch (error) {
      // console.log(error);
    }

    return (
      <div className='alumni-container' key={obj}>
        <h4>{name}</h4>
        {exec && <p>Executive Board</p>}
        {oboard && <p>Officer Board</p>}
        {famhead && <p>Family Head</p>}
      </div>
    );
  });
  return (
    <div className='alumni-year-view'>
      <div className='chinafest'>
        <img src={props.chinafest} alt='Chinafest Image'></img>
      </div>
      <div className='past-year-members'>
        <h2>Graduating Class</h2>
        <div className='alumni-list'>{alumniList}</div>
      </div>
    </div>
  );
};

export default AlumniYearView;

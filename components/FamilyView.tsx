import { Component } from "react";

export type Family = {
  name: string;
  animalIcon: string;
  animalImg: string;
  image: string;
  desc: string;
};

type FamilyViewProps = {
  families: Family[];
};

type FamilyViewState = {
  viewed: boolean;
  current: string;
};

class FamilyView extends Component<FamilyViewProps, FamilyViewState> {
  constructor(props) {
    super(props);

    this.state = {
      viewed: false,
      current: null,
    };
  }

  animateSelect() {
    this.setState({ viewed: true });
  }

  render() {
    const families = this.props.families.map((obj: Family) => {
      return (
        <div key={obj.name} className="family-icon">
          <div className="animal">
            <img className="animal-img" src={obj.animalImg}></img>
            <img className="animal-icon" src={obj.animalIcon}></img>
          </div>

          <h4>{obj.name}</h4>
        </div>
      );
    });

    const families2 = this.props.families.map((obj: Family) => {
      return (
        <div key={obj.name} className="family-container">
          <div className="family-info">
            <div className="animal">
              <img className="animal-img" src={obj.animalIcon}></img>
            </div>

            <h4>{obj.name}</h4>
            <p>{obj.desc}</p>
          </div>
          <div className="family-img-container">
            <img className="family-img" src={obj.image}></img>
          </div>
        </div>
      );
    });
    return (
      <div className="family-view">
        <div className="family-icons">{families}</div>
        <div className="family-list">{families2}</div>
      </div>
    );
  }
}

export default FamilyView;

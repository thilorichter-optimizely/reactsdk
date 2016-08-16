import React, { Component } from 'react';

export default class UpcomingGame extends Component{
  render(){
    return(
      <div className="col-6 text-center game-card">
        <div className="game-card--container container">
          <div className="row">
            <div className="sm-col-8 col-8 text-left">
              <h2>
              {this.props.awayTeam} at {this.props.homeTeam}
              </h2>
            </div>
            <div className="sm-col-4 col-4 text-center">
              <h4>
                {this.props.status}
              </h4>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-left game-notes">
              <p>
                <strong>{this.props.homeAbbrev} Starting Pitcher:</strong> {this.props.homeStartingPitcher} ({this.props.homePitcherERA} ERA - {this.props.homePitcherRecord}) <br />
                <strong>{this.props.awayAbbrev} Starting Pitcher:</strong> {this.props.awayStartingPitcher} ({this.props.awayPitcherERA} ERA - {this.props.awayPitcherRecord})
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

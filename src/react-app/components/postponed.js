import React, { Component } from 'react';

export default class Postponed extends Component{
  render(){
    return(
      <div className="col-6 text-center game-card">
        <div className="game-card--container container">

          <div className="row">
            <div className="sm-col-8 col-8 text-left">
              <h2>
                {this.props.awayTeam}
              </h2>
            </div>
            <div className="sm-col-4 col-4 text-center">
              <h2>
                {this.props.awayScore}
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="sm-col-8 col-8 text-left">
              <h2>
                {this.props.homeTeam}
              </h2>
            </div>
            <div className="sm-col-4 col-4 text-center">
              <h2>
                {this.props.homeScore}
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-left">
              <h4>
                {this.props.status} ({this.props.reason}) {this.props.inningState} {this.props.inning}
              </h4>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

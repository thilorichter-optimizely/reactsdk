/* Pinetar by Eric Stout */

class Postponed extends React.Component{
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

class FinalGame extends React.Component{
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
                {this.props.status} {this.props.inningState} {this.props.inning}
              </h4>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-left game-notes">
              <p>
                <strong>Winning Pitcher:</strong> {this.props.winningPitcher} <br />
                <strong>Losing Pitcher: </strong> {this.props.losingPitcher}
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

class CurrentGame extends React.Component{
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
                {this.props.inningState} {this.props.inning} - {this.props.outs} Out
              </h4>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-left game-notes">
              <p>
                <strong>Current Pitcher:</strong> #{this.props.currentPitchernum} {this.props.currentPitcher} ({this.props.pitcherERA} ERA) <br />
                <strong>Current Batter: </strong> #{this.props.currentBatternum} {this.props.currentBatter} ({this.props.batterHits}-{this.props.batterAtBats} Avg: {this.props.batterAVG})
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-left game-notes game-pbp">
              <p>
                <strong>Play by Play:</strong> <br />
                {this.props.pbp}
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

class UpcomingGame extends React.Component{
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
            <div class="sm-col-4 col-4 text-center">
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

class GameBox extends React.Component{

  constructor() {
    super();

    this.state = {
      games: []
    };
  }

  componentWillMount() {
    this._getGameScores();
  }

  componentDidMount() {
    this._timer = setInterval(() => this._getGameScores(), 45000);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  _getGameScores(){
    this.setState({games: [{"game_type": "R", "double_header_sw": "S", "location": "Chicago, IL", "away_time": "12:20", "broadcast": {"away": {"tv": "FSWI", "radio": "Brewers Radio Network, WTMJ 620"}, "home": {"tv": "WGN", "radio": "670 The Score"} }, "time": "1:20", "home_time": "12:20", "home_team_name": "Cubs", "description": "makeup of 4/27 PPD", "original_date": "2016/08/16", "home_team_city": "Chi Cubs", "venue_id": "17", "gameday_sw": "P", "away_win": "52", "home_games_back_wildcard": "", "away_probable_pitcher": {"last": "Garza", "stats_type": "R", "name_display_roster": "Garza", "number": "22", "era": "4.83", "id": "490063", "throwinghand": "RHP", "s_losses": "4", "first_name": "Matt", "s_era": "4.83", "stats_season": "2016", "last_name": "Garza", "losses": "4", "first": "Matt", "s_wins": "4", "wins": "4"}, "away_team_id": "158", "tz_hm_lg_gen": "ET", "status": {"ind": "S", "status": "Preview", "inning_state": "", "note": ""}, "home_loss": "43", "home_games_back": "", "home_code": "chn", "away_sport_code": "mlb", "home_win": "73", "time_hm_lg": "1:20", "away_name_abbrev": "MIL", "league": "NN", "time_zone_aw_lg": "-4", "away_games_back": "", "home_file_code": "chc", "game_data_directory": "/components/game/mlb/year_2016/month_08/day_16/gid_2016_08_16_milmlb_chnmlb_1", "time_zone": "ET", "away_league_id": "104", "home_team_id": "112", "day": "TUE", "time_aw_lg": "1:20", "away_team_city": "Milwaukee", "tbd_flag": "N", "tz_aw_lg_gen": "ET", "away_code": "mil", "game_media": {"media": {"free": "NO", "title": "MIL @ CHC", "thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/milchn_447184_th_7_preview.jpg", "media_state": "media_off", "start": "2016-08-16T13:20:00-0400", "has_mlbtv": "true", "calendar_event_id": "14-447184-2016-08-16", "enhanced": "N", "type": "game"} }, "game_nbr": "1", "time_date_aw_lg": "2016/08/16 1:20", "away_games_back_wildcard": "", "scheduled_innings": "9", "venue_w_chan_loc": "USIL0225", "first_pitch_et": "", "away_team_name": "Brewers", "time_date_hm_lg": "2016/08/16 1:20", "id": "2016/08/16/milmlb-chnmlb-1", "home_name_abbrev": "CHC", "tiebreaker_sw": "N", "ampm": "PM", "home_division": "C", "home_time_zone": "CT", "away_time_zone": "CT", "hm_lg_ampm": "PM", "home_sport_code": "mlb", "time_date": "2016/08/16 1:20", "links": {"wrapup": "", "preview": "/mlb/gameday/index.jsp?gid=2016_08_16_milmlb_chnmlb_1&mode=preview&c_id=mlb", "home_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_milmlb_chnmlb_1&mode=preview&c_id=mlb", "away_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_milmlb_chnmlb_1&mode=preview&c_id=mlb", "tv_station": "WGN"}, "home_ampm": "PM", "game_pk": "447184", "venue": "Wrigley Field", "home_probable_pitcher": {"last": "Cahill", "stats_type": "R", "name_display_roster": "Cahill", "number": "53", "era": "3.07", "id": "502239", "throwinghand": "RHP", "s_losses": "3", "first_name": "Trevor", "s_era": "3.07", "stats_season": "2016", "last_name": "Cahill", "losses": "3", "first": "Trevor", "s_wins": "1", "wins": "1"}, "home_league_id": "104", "video_thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/milchn_447184_th_7_preview.jpg", "away_loss": "64", "resume_date": "", "away_file_code": "mil", "aw_lg_ampm": "PM", "video_thumbnails": {"thumbnail": [{"content": "http://mediadownloads.mlb.com/mlbam/preview/milchn_447184_th_7_preview.jpg", "height": "70", "scenario": "7", "width": "124"}, {"content": "http://mediadownloads.mlb.com/mlbam/preview/milchn_447184_th_37_preview.jpg", "height": "90", "scenario": "37", "width": "160"} ] }, "time_zone_hm_lg": "-4", "away_ampm": "PM", "gameday": "2016_08_16_milmlb_chnmlb_1", "away_division": "C"}, {"game_type": "R", "double_header_sw": "S", "location": "Chicago, IL", "away_time": "7:05", "broadcast": {"away": {"tv": "FSWI", "radio": "Brewers Radio Network, WTMJ 620"}, "home": {"tv": "WPWR", "radio": "670 The Score"} }, "time": "8:05", "home_time": "7:05", "home_team_name": "Cubs", "description": "", "original_date": "2016/08/16", "home_team_city": "Chi Cubs", "venue_id": "17", "gameday_sw": "P", "away_win": "52", "home_games_back_wildcard": "", "away_probable_pitcher": {"last": "Anderson", "stats_type": "R", "name_display_roster": "Anderson", "number": "57", "era": "4.93", "id": "502624", "throwinghand": "RHP", "s_losses": "10", "first_name": "Chase", "s_era": "4.93", "stats_season": "2016", "last_name": "Anderson", "losses": "10", "first": "Chase", "s_wins": "7", "wins": "7"}, "away_team_id": "158", "tz_hm_lg_gen": "ET", "status": {"ind": "S", "status": "Preview", "inning_state": "", "note": ""}, "home_loss": "43", "home_games_back": "", "home_code": "chn", "away_sport_code": "mlb", "home_win": "73", "time_hm_lg": "8:05", "away_name_abbrev": "MIL", "league": "NN", "time_zone_aw_lg": "-4", "away_games_back": "", "home_file_code": "chc", "game_data_directory": "/components/game/mlb/year_2016/month_08/day_16/gid_2016_08_16_milmlb_chnmlb_2", "time_zone": "ET", "away_league_id": "104", "home_team_id": "112", "day": "TUE", "time_aw_lg": "8:05", "away_team_city": "Milwaukee", "tbd_flag": "N", "tz_aw_lg_gen": "ET", "away_code": "mil", "game_media": {"media": {"free": "NO", "title": "MIL @ CHC", "thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/milchn_448640_th_7_preview.jpg", "media_state": "media_off", "start": "2016-08-16T20:05:00-0400", "has_mlbtv": "true", "calendar_event_id": "14-448640-2016-08-16", "enhanced": "N", "type": "game"} }, "game_nbr": "2", "time_date_aw_lg": "2016/08/16 8:05", "away_games_back_wildcard": "", "scheduled_innings": "9", "venue_w_chan_loc": "USIL0225", "first_pitch_et": "", "away_team_name": "Brewers", "time_date_hm_lg": "2016/08/16 8:05", "id": "2016/08/16/milmlb-chnmlb-2", "home_name_abbrev": "CHC", "tiebreaker_sw": "N", "ampm": "PM", "home_division": "C", "home_time_zone": "CT", "away_time_zone": "CT", "hm_lg_ampm": "PM", "home_sport_code": "mlb", "time_date": "2016/08/16 8:05", "links": {"wrapup": "", "preview": "/mlb/gameday/index.jsp?gid=2016_08_16_milmlb_chnmlb_2&mode=preview&c_id=mlb", "home_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_milmlb_chnmlb_2&mode=preview&c_id=mlb", "away_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_milmlb_chnmlb_2&mode=preview&c_id=mlb", "tv_station": "WPWR"}, "home_ampm": "PM", "game_pk": "448640", "venue": "Wrigley Field", "home_probable_pitcher": {"last": "Hammel", "stats_type": "R", "name_display_roster": "Hammel", "number": "39", "era": "2.90", "id": "434628", "throwinghand": "RHP", "s_losses": "5", "first_name": "Jason", "s_era": "2.90", "stats_season": "2016", "last_name": "Hammel", "losses": "5", "first": "Jason", "s_wins": "12", "wins": "12"}, "home_league_id": "104", "video_thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/milchn_448640_th_7_preview.jpg", "away_loss": "64", "resume_date": "", "away_file_code": "mil", "aw_lg_ampm": "PM", "video_thumbnails": {"thumbnail": [{"content": "http://mediadownloads.mlb.com/mlbam/preview/milchn_448640_th_7_preview.jpg", "height": "70", "scenario": "7", "width": "124"}, {"content": "http://mediadownloads.mlb.com/mlbam/preview/milchn_448640_th_37_preview.jpg", "height": "90", "scenario": "37", "width": "160"} ] }, "time_zone_hm_lg": "-4", "away_ampm": "PM", "gameday": "2016_08_16_milmlb_chnmlb_2", "away_division": "C"}, {"game_type": "R", "double_header_sw": "N", "location": "Baltimore, MD", "away_time": "7:05", "broadcast": {"away": {"tv": "NESN, MLBN (out-of-market only)", "radio": "WEEI 93.7, WCEC 1490 AM"}, "home": {"tv": "MLBN (out-of-market only), MASN", "radio": "105.7 The Fan, Orioles Radio Network"} }, "time": "7:05", "home_time": "7:05", "home_team_name": "Orioles", "description": "", "original_date": "2016/08/16", "home_team_city": "Baltimore", "venue_id": "2", "gameday_sw": "P", "away_win": "65", "home_games_back_wildcard": "", "away_probable_pitcher": {"last": "Rodriguez", "stats_type": "R", "name_display_roster": "Rodriguez, E", "number": "52", "era": "5.43", "id": "593958", "throwinghand": "LHP", "s_losses": "5", "first_name": "Eduardo", "s_era": "5.43", "stats_season": "2016", "last_name": "Rodriguez", "losses": "5", "first": "Eduardo", "s_wins": "2", "wins": "2"}, "away_team_id": "111", "tz_hm_lg_gen": "ET", "status": {"ind": "S", "status": "Preview", "inning_state": "", "note": ""}, "home_loss": "51", "home_games_back": "", "home_code": "bal", "away_sport_code": "mlb", "home_win": "66", "time_hm_lg": "7:05", "away_name_abbrev": "BOS", "league": "AA", "time_zone_aw_lg": "-4", "away_games_back": "", "home_file_code": "bal", "game_data_directory": "/components/game/mlb/year_2016/month_08/day_16/gid_2016_08_16_bosmlb_balmlb_1", "time_zone": "ET", "away_league_id": "103", "home_team_id": "110", "day": "TUE", "time_aw_lg": "7:05", "away_team_city": "Boston", "tbd_flag": "N", "tz_aw_lg_gen": "ET", "away_code": "bos", "game_media": {"media": {"free": "NO", "title": "BOS @ BAL", "thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/bosbal_448635_th_7_preview.jpg", "media_state": "media_off", "start": "2016-08-16T19:05:00-0400", "has_mlbtv": "true", "calendar_event_id": "14-448635-2016-08-16", "enhanced": "N", "type": "game"} }, "game_nbr": "1", "time_date_aw_lg": "2016/08/16 7:05", "away_games_back_wildcard": "", "scheduled_innings": "9", "venue_w_chan_loc": "USMD0018", "first_pitch_et": "", "away_team_name": "Red Sox", "time_date_hm_lg": "2016/08/16 7:05", "id": "2016/08/16/bosmlb-balmlb-1", "home_name_abbrev": "BAL", "tiebreaker_sw": "N", "ampm": "PM", "home_division": "E", "home_time_zone": "ET", "away_time_zone": "ET", "hm_lg_ampm": "PM", "home_sport_code": "mlb", "time_date": "2016/08/16 7:05", "links": {"wrapup": "", "preview": "/mlb/gameday/index.jsp?gid=2016_08_16_bosmlb_balmlb_1&mode=preview&c_id=mlb", "home_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_bosmlb_balmlb_1&mode=preview&c_id=mlb", "away_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_bosmlb_balmlb_1&mode=preview&c_id=mlb", "tv_station": "MLBN (out-of-market only), MASN"}, "home_ampm": "PM", "game_pk": "448635", "venue": "Oriole Park at Camden Yards", "home_probable_pitcher": {"last": "Gallardo", "stats_type": "R", "name_display_roster": "Gallardo", "number": "49", "era": "5.17", "id": "451596", "throwinghand": "RHP", "s_losses": "4", "first_name": "Yovani", "s_era": "5.17", "stats_season": "2016", "last_name": "Gallardo", "losses": "4", "first": "Yovani", "s_wins": "4", "wins": "4"}, "home_league_id": "103", "video_thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/bosbal_448635_th_7_preview.jpg", "away_loss": "52", "resume_date": "", "away_file_code": "bos", "aw_lg_ampm": "PM", "video_thumbnails": {"thumbnail": [{"content": "http://mediadownloads.mlb.com/mlbam/preview/bosbal_448635_th_7_preview.jpg", "height": "70", "scenario": "7", "width": "124"}, {"content": "http://mediadownloads.mlb.com/mlbam/preview/bosbal_448635_th_37_preview.jpg", "height": "90", "scenario": "37", "width": "160"} ] }, "time_zone_hm_lg": "-4", "away_ampm": "PM", "gameday": "2016_08_16_bosmlb_balmlb_1", "away_division": "E"}, {"game_type": "R", "double_header_sw": "N", "location": "Philadelphia, PA", "away_time": "4:05", "broadcast": {"away": {"tv": "SNLA Spanish, SportsNet LA", "radio": "KTNQ 1020, 570 LA Sports, KMPC 1540"}, "home": {"tv": "CSN-P", "radio": "94 WIP"} }, "time": "7:05", "home_time": "7:05", "home_team_name": "Phillies", "description": "", "original_date": "2016/08/16", "home_team_city": "Philadelphia", "venue_id": "2681", "gameday_sw": "P", "away_win": "65", "home_games_back_wildcard": "", "away_probable_pitcher": {"last": "Maeda", "stats_type": "R", "name_display_roster": "Maeda", "number": "18", "era": "3.31", "id": "628317", "throwinghand": "RHP", "s_losses": "7", "first_name": "Kenta", "s_era": "3.31", "stats_season": "2016", "last_name": "Maeda", "losses": "7", "first": "Kenta", "s_wins": "11", "wins": "11"}, "away_team_id": "119", "tz_hm_lg_gen": "ET", "status": {"ind": "S", "status": "Preview", "inning_state": "", "note": ""}, "home_loss": "63", "home_games_back": "", "home_code": "phi", "away_sport_code": "mlb", "home_win": "56", "time_hm_lg": "7:05", "away_name_abbrev": "LAD", "league": "NN", "time_zone_aw_lg": "-4", "away_games_back": "", "home_file_code": "phi", "game_data_directory": "/components/game/mlb/year_2016/month_08/day_16/gid_2016_08_16_lanmlb_phimlb_1", "time_zone": "ET", "away_league_id": "104", "home_team_id": "143", "day": "TUE", "time_aw_lg": "7:05", "away_team_city": "LA Dodgers", "tbd_flag": "N", "tz_aw_lg_gen": "ET", "away_code": "lan", "game_media": {"media": {"free": "NO", "title": "LAD @ PHI", "thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/lanphi_448638_th_7_preview.jpg", "media_state": "media_off", "start": "2016-08-16T19:05:00-0400", "has_mlbtv": "true", "calendar_event_id": "14-448638-2016-08-16", "enhanced": "N", "type": "game"} }, "game_nbr": "1", "time_date_aw_lg": "2016/08/16 7:05", "away_games_back_wildcard": "", "scheduled_innings": "9", "venue_w_chan_loc": "USPA1276", "first_pitch_et": "", "away_team_name": "Dodgers", "time_date_hm_lg": "2016/08/16 7:05", "id": "2016/08/16/lanmlb-phimlb-1", "home_name_abbrev": "PHI", "tiebreaker_sw": "N", "ampm": "PM", "home_division": "E", "home_time_zone": "ET", "away_time_zone": "PT", "hm_lg_ampm": "PM", "home_sport_code": "mlb", "time_date": "2016/08/16 7:05", "links": {"wrapup": "", "preview": "/mlb/gameday/index.jsp?gid=2016_08_16_lanmlb_phimlb_1&mode=preview&c_id=mlb", "home_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_lanmlb_phimlb_1&mode=preview&c_id=mlb", "away_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_lanmlb_phimlb_1&mode=preview&c_id=mlb", "tv_station": "CSN-P"}, "home_ampm": "PM", "game_pk": "448638", "venue": "Citizens Bank Park", "home_probable_pitcher": {"last": "Velasquez", "stats_type": "R", "name_display_roster": "Velasquez", "number": "28", "era": "3.94", "id": "592826", "throwinghand": "RHP", "s_losses": "4", "first_name": "Vince", "s_era": "3.94", "stats_season": "2016", "last_name": "Velasquez", "losses": "4", "first": "Vince", "s_wins": "8", "wins": "8"}, "home_league_id": "104", "video_thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/lanphi_448638_th_7_preview.jpg", "away_loss": "52", "resume_date": "", "away_file_code": "la", "aw_lg_ampm": "PM", "video_thumbnails": {"thumbnail": [{"content": "http://mediadownloads.mlb.com/mlbam/preview/lanphi_448638_th_7_preview.jpg", "height": "70", "scenario": "7", "width": "124"}, {"content": "http://mediadownloads.mlb.com/mlbam/preview/lanphi_448638_th_37_preview.jpg", "height": "90", "scenario": "37", "width": "160"} ] }, "time_zone_hm_lg": "-4", "away_ampm": "PM", "gameday": "2016_08_16_lanmlb_phimlb_1", "away_division": "W"}, {"game_type": "R", "double_header_sw": "N", "location": "Bronx, NY", "away_time": "7:05", "broadcast": {"away": {"tv": "SNET, TVA Sports", "radio": "SN590"}, "home": {"tv": "YES", "radio": "WADO 1280, WFAN 660/101.9 FM"} }, "time": "7:05", "home_time": "7:05", "home_team_name": "Yankees", "description": "", "original_date": "2016/08/16", "home_team_city": "NY Yankees", "venue_id": "3313", "gameday_sw": "P", "away_win": "67", "home_games_back_wildcard": "", "away_probable_pitcher": {"last": "Estrada", "stats_type": "R", "name_display_roster": "Estrada", "number": "25", "era": "2.95", "id": "462136", "throwinghand": "RHP", "s_losses": "5", "first_name": "Marco", "s_era": "2.95", "stats_season": "2016", "last_name": "Estrada", "losses": "5", "first": "Marco", "s_wins": "7", "wins": "7"}, "away_team_id": "141", "tz_hm_lg_gen": "ET", "status": {"ind": "S", "status": "Preview", "inning_state": "", "note": ""}, "home_loss": "57", "home_games_back": "", "home_code": "nya", "away_sport_code": "mlb", "home_win": "61", "time_hm_lg": "7:05", "away_name_abbrev": "TOR", "league": "AA", "time_zone_aw_lg": "-4", "away_games_back": "", "home_file_code": "nyy", "game_data_directory": "/components/game/mlb/year_2016/month_08/day_16/gid_2016_08_16_tormlb_nyamlb_1", "time_zone": "ET", "away_league_id": "103", "home_team_id": "147", "day": "TUE", "time_aw_lg": "7:05", "away_team_city": "Toronto", "tbd_flag": "N", "tz_aw_lg_gen": "ET", "away_code": "tor", "game_media": {"media": {"free": "NO", "title": "TOR @ NYY", "thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/tornya_448648_th_7_preview.jpg", "media_state": "media_off", "start": "2016-08-16T19:05:00-0400", "has_mlbtv": "true", "calendar_event_id": "14-448648-2016-08-16", "enhanced": "N", "type": "game"} }, "game_nbr": "1", "time_date_aw_lg": "2016/08/16 7:05", "away_games_back_wildcard": "", "scheduled_innings": "9", "venue_w_chan_loc": "USNY0172", "first_pitch_et": "", "away_team_name": "Blue Jays", "time_date_hm_lg": "2016/08/16 7:05", "id": "2016/08/16/tormlb-nyamlb-1", "home_name_abbrev": "NYY", "tiebreaker_sw": "N", "ampm": "PM", "home_division": "E", "home_time_zone": "ET", "away_time_zone": "ET", "hm_lg_ampm": "PM", "home_sport_code": "mlb", "time_date": "2016/08/16 7:05", "links": {"wrapup": "", "preview": "/mlb/gameday/index.jsp?gid=2016_08_16_tormlb_nyamlb_1&mode=preview&c_id=mlb", "home_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_tormlb_nyamlb_1&mode=preview&c_id=mlb", "away_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_tormlb_nyamlb_1&mode=preview&c_id=mlb", "tv_station": "YES"}, "home_ampm": "PM", "game_pk": "448648", "venue": "Yankee Stadium", "home_probable_pitcher": {"last": "Pineda", "stats_type": "R", "name_display_roster": "Pineda", "number": "35", "era": "5.07", "id": "501381", "throwinghand": "RHP", "s_losses": "10", "first_name": "Michael", "s_era": "5.07", "stats_season": "2016", "last_name": "Pineda", "losses": "10", "first": "Michael", "s_wins": "6", "wins": "6"}, "home_league_id": "103", "video_thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/tornya_448648_th_7_preview.jpg", "away_loss": "52", "resume_date": "", "away_file_code": "tor", "aw_lg_ampm": "PM", "video_thumbnails": {"thumbnail": [{"content": "http://mediadownloads.mlb.com/mlbam/preview/tornya_448648_th_7_preview.jpg", "height": "70", "scenario": "7", "width": "124"}, {"content": "http://mediadownloads.mlb.com/mlbam/preview/tornya_448648_th_37_preview.jpg", "height": "90", "scenario": "37", "width": "160"} ] }, "time_zone_hm_lg": "-4", "away_ampm": "PM", "gameday": "2016_08_16_tormlb_nyamlb_1", "away_division": "E"}, {"game_type": "R", "double_header_sw": "N", "location": "Cleveland, OH", "away_time": "6:10", "broadcast": {"away": {"tv": "CSN-C", "radio": "WLS 890"}, "home": {"tv": "SportsTime Ohio", "radio": "WMMS 100.7, Indians Radio Network, WTAM 1100"} }, "time": "7:10", "home_time": "7:10", "home_team_name": "Indians", "description": "", "original_date": "2016/08/16", "home_team_city": "Cleveland", "venue_id": "5", "gameday_sw": "P", "away_win": "56", "home_games_back_wildcard": "", "away_probable_pitcher": {"last": "Quintana", "stats_type": "R", "name_display_roster": "Quintana", "number": "62", "era": "2.85", "id": "500779", "throwinghand": "LHP", "s_losses": "8", "first_name": "Jose", "s_era": "2.85", "stats_season": "2016", "last_name": "Quintana", "losses": "8", "first": "Jose", "s_wins": "9", "wins": "9"}, "away_team_id": "145", "tz_hm_lg_gen": "ET", "status": {"ind": "S", "status": "Preview", "inning_state": "", "note": ""}, "home_loss": "49", "home_games_back": "", "home_code": "cle", "away_sport_code": "mlb", "home_win": "67", "time_hm_lg": "7:10", "away_name_abbrev": "CWS", "league": "AA", "time_zone_aw_lg": "-4", "away_games_back": "", "home_file_code": "cle", "game_data_directory": "/components/game/mlb/year_2016/month_08/day_16/gid_2016_08_16_chamlb_clemlb_1", "time_zone": "ET", "away_league_id": "103", "home_team_id": "114", "day": "TUE", "time_aw_lg": "7:10", "away_team_city": "Chi White Sox", "tbd_flag": "N", "tz_aw_lg_gen": "ET", "away_code": "cha", "game_media": {"media": {"free": "NO", "title": "CWS @ CLE", "thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/chacle_448636_th_7_preview.jpg", "media_state": "media_off", "start": "2016-08-16T19:10:00-0400", "has_mlbtv": "true", "calendar_event_id": "14-448636-2016-08-16", "enhanced": "N", "type": "game"} }, "game_nbr": "1", "time_date_aw_lg": "2016/08/16 7:10", "away_games_back_wildcard": "", "scheduled_innings": "9", "venue_w_chan_loc": "USOH0195", "first_pitch_et": "", "away_team_name": "White Sox", "time_date_hm_lg": "2016/08/16 7:10", "id": "2016/08/16/chamlb-clemlb-1", "home_name_abbrev": "CLE", "tiebreaker_sw": "N", "ampm": "PM", "home_division": "C", "home_time_zone": "ET", "away_time_zone": "CT", "hm_lg_ampm": "PM", "home_sport_code": "mlb", "time_date": "2016/08/16 7:10", "links": {"wrapup": "", "preview": "/mlb/gameday/index.jsp?gid=2016_08_16_chamlb_clemlb_1&mode=preview&c_id=mlb", "home_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_chamlb_clemlb_1&mode=preview&c_id=mlb", "away_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_chamlb_clemlb_1&mode=preview&c_id=mlb", "tv_station": "SportsTime Ohio"}, "home_ampm": "PM", "game_pk": "448636", "venue": "Progressive Field", "home_probable_pitcher": {"last": "Kluber", "stats_type": "R", "name_display_roster": "Kluber", "number": "28", "era": "3.21", "id": "446372", "throwinghand": "RHP", "s_losses": "8", "first_name": "Corey", "s_era": "3.21", "stats_season": "2016", "last_name": "Kluber", "losses": "8", "first": "Corey", "s_wins": "12", "wins": "12"}, "home_league_id": "103", "video_thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/chacle_448636_th_7_preview.jpg", "away_loss": "61", "resume_date": "", "away_file_code": "cws", "aw_lg_ampm": "PM", "video_thumbnails": {"thumbnail": [{"content": "http://mediadownloads.mlb.com/mlbam/preview/chacle_448636_th_7_preview.jpg", "height": "70", "scenario": "7", "width": "124"}, {"content": "http://mediadownloads.mlb.com/mlbam/preview/chacle_448636_th_37_preview.jpg", "height": "90", "scenario": "37", "width": "160"} ] }, "time_zone_hm_lg": "-4", "away_ampm": "PM", "gameday": "2016_08_16_chamlb_clemlb_1", "away_division": "C"}, {"game_type": "R", "double_header_sw": "N", "location": "Detroit, MI", "away_time": "6:10", "broadcast": {"away": {"tv": "FSKC", "radio": "RRN, KCSP 610"}, "home": {"tv": "FS-D", "radio": "97.1 The Ticket"} }, "time": "7:10", "home_time": "7:10", "home_team_name": "Tigers", "description": "", "original_date": "2016/08/16", "home_team_city": "Detroit", "venue_id": "2394", "gameday_sw": "P", "away_win": "58", "home_games_back_wildcard": "", "away_probable_pitcher": {"last": "Duffy", "stats_type": "R", "name_display_roster": "Duffy, D", "number": "41", "era": "2.82", "id": "518633", "throwinghand": "LHP", "s_losses": "1", "first_name": "Danny", "s_era": "2.82", "stats_season": "2016", "last_name": "Duffy", "losses": "1", "first": "Danny", "s_wins": "9", "wins": "9"}, "away_team_id": "118", "tz_hm_lg_gen": "ET", "status": {"ind": "S", "status": "Preview", "inning_state": "", "note": ""}, "home_loss": "55", "home_games_back": "", "home_code": "det", "away_sport_code": "mlb", "home_win": "63", "time_hm_lg": "7:10", "away_name_abbrev": "KC", "league": "AA", "time_zone_aw_lg": "-4", "away_games_back": "", "home_file_code": "det", "game_data_directory": "/components/game/mlb/year_2016/month_08/day_16/gid_2016_08_16_kcamlb_detmlb_1", "time_zone": "ET", "away_league_id": "103", "home_team_id": "116", "day": "TUE", "time_aw_lg": "7:10", "away_team_city": "Kansas City", "tbd_flag": "N", "tz_aw_lg_gen": "ET", "away_code": "kca", "game_media": {"media": {"free": "NO", "title": "KC @ DET", "thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/kcadet_448637_th_7_preview.jpg", "media_state": "media_off", "start": "2016-08-16T19:10:00-0400", "has_mlbtv": "true", "calendar_event_id": "14-448637-2016-08-16", "enhanced": "N", "type": "game"} }, "game_nbr": "1", "time_date_aw_lg": "2016/08/16 7:10", "away_games_back_wildcard": "", "scheduled_innings": "9", "venue_w_chan_loc": "USMI0229", "first_pitch_et": "", "away_team_name": "Royals", "time_date_hm_lg": "2016/08/16 7:10", "id": "2016/08/16/kcamlb-detmlb-1", "home_name_abbrev": "DET", "tiebreaker_sw": "N", "ampm": "PM", "home_division": "C", "home_time_zone": "ET", "away_time_zone": "CT", "hm_lg_ampm": "PM", "home_sport_code": "mlb", "time_date": "2016/08/16 7:10", "links": {"wrapup": "", "preview": "/mlb/gameday/index.jsp?gid=2016_08_16_kcamlb_detmlb_1&mode=preview&c_id=mlb", "home_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_kcamlb_detmlb_1&mode=preview&c_id=mlb", "away_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_kcamlb_detmlb_1&mode=preview&c_id=mlb", "tv_station": "FS-D"}, "home_ampm": "PM", "game_pk": "448637", "venue": "Comerica Park", "home_probable_pitcher": {"last": "Verlander", "stats_type": "R", "name_display_roster": "Verlander", "number": "35", "era": "3.42", "id": "434378", "throwinghand": "RHP", "s_losses": "6", "first_name": "Justin", "s_era": "3.42", "stats_season": "2016", "last_name": "Verlander", "losses": "6", "first": "Justin", "s_wins": "12", "wins": "12"}, "home_league_id": "103", "video_thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/kcadet_448637_th_7_preview.jpg", "away_loss": "60", "resume_date": "", "away_file_code": "kc", "aw_lg_ampm": "PM", "video_thumbnails": {"thumbnail": [{"content": "http://mediadownloads.mlb.com/mlbam/preview/kcadet_448637_th_7_preview.jpg", "height": "70", "scenario": "7", "width": "124"}, {"content": "http://mediadownloads.mlb.com/mlbam/preview/kcadet_448637_th_37_preview.jpg", "height": "90", "scenario": "37", "width": "160"} ] }, "time_zone_hm_lg": "-4", "away_ampm": "PM", "gameday": "2016_08_16_kcamlb_detmlb_1", "away_division": "C"}, {"game_type": "R", "double_header_sw": "N", "location": "Cincinnati, OH", "away_time": "7:10", "broadcast": {"away": {"tv": "FS-F", "radio": "WAQI 710, 940 AM WINZ"}, "home": {"tv": "FS-O", "radio": "WLW 700"} }, "time": "7:10", "home_time": "7:10", "home_team_name": "Reds", "description": "", "original_date": "2016/08/16", "home_team_city": "Cincinnati", "venue_id": "2602", "gameday_sw": "P", "away_win": "62", "home_games_back_wildcard": "", "away_probable_pitcher": {"last": "Urena", "stats_type": "R", "name_display_roster": "Urena", "number": "62", "era": "6.69", "id": "570632", "throwinghand": "RHP", "s_losses": "3", "first_name": "Jose", "s_era": "6.69", "stats_season": "2016", "last_name": "Urena", "losses": "3", "first": "Jose", "s_wins": "1", "wins": "1"}, "away_team_id": "146", "tz_hm_lg_gen": "ET", "status": {"ind": "S", "status": "Preview", "inning_state": "", "note": ""}, "home_loss": "69", "home_games_back": "", "home_code": "cin", "away_sport_code": "mlb", "home_win": "48", "time_hm_lg": "7:10", "away_name_abbrev": "MIA", "league": "NN", "time_zone_aw_lg": "-4", "away_games_back": "", "home_file_code": "cin", "game_data_directory": "/components/game/mlb/year_2016/month_08/day_16/gid_2016_08_16_miamlb_cinmlb_1", "time_zone": "ET", "away_league_id": "104", "home_team_id": "113", "day": "TUE", "time_aw_lg": "7:10", "away_team_city": "Miami", "tbd_flag": "N", "tz_aw_lg_gen": "ET", "away_code": "mia", "game_media": {"media": {"free": "NO", "title": "MIA @ CIN", "thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/miacin_448639_th_7_preview.jpg", "media_state": "media_off", "start": "2016-08-16T19:10:00-0400", "has_mlbtv": "true", "calendar_event_id": "14-448639-2016-08-16", "enhanced": "N", "type": "game"} }, "game_nbr": "1", "time_date_aw_lg": "2016/08/16 7:10", "away_games_back_wildcard": "", "scheduled_innings": "9", "venue_w_chan_loc": "USOH0188", "first_pitch_et": "", "away_team_name": "Marlins", "time_date_hm_lg": "2016/08/16 7:10", "id": "2016/08/16/miamlb-cinmlb-1", "home_name_abbrev": "CIN", "tiebreaker_sw": "N", "ampm": "PM", "home_division": "C", "home_time_zone": "ET", "away_time_zone": "ET", "hm_lg_ampm": "PM", "home_sport_code": "mlb", "time_date": "2016/08/16 7:10", "links": {"wrapup": "", "preview": "/mlb/gameday/index.jsp?gid=2016_08_16_miamlb_cinmlb_1&mode=preview&c_id=mlb", "home_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_miamlb_cinmlb_1&mode=preview&c_id=mlb", "away_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_miamlb_cinmlb_1&mode=preview&c_id=mlb", "tv_station": "FS-O"}, "home_ampm": "PM", "game_pk": "448639", "venue": "Great American Ball Park", "home_probable_pitcher": {"last": "DeSclafani", "stats_type": "R", "name_display_roster": "DeSclafani", "number": "28", "era": "3.11", "id": "543101", "throwinghand": "RHP", "s_losses": "1", "first_name": "Anthony", "s_era": "3.11", "stats_season": "2016", "last_name": "DeSclafani", "losses": "1", "first": "Anthony", "s_wins": "6", "wins": "6"}, "home_league_id": "104", "video_thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/miacin_448639_th_7_preview.jpg", "away_loss": "56", "resume_date": "", "away_file_code": "mia", "aw_lg_ampm": "PM", "video_thumbnails": {"thumbnail": [{"content": "http://mediadownloads.mlb.com/mlbam/preview/miacin_448639_th_7_preview.jpg", "height": "70", "scenario": "7", "width": "124"}, {"content": "http://mediadownloads.mlb.com/mlbam/preview/miacin_448639_th_37_preview.jpg", "height": "90", "scenario": "37", "width": "160"} ] }, "time_zone_hm_lg": "-4", "away_ampm": "PM", "gameday": "2016_08_16_miamlb_cinmlb_1", "away_division": "E"}, {"game_type": "R", "double_header_sw": "N", "location": "Atlanta, GA", "away_time": "6:10", "broadcast": {"away": {"tv": "FSNO", "radio": "Go 96.3, La Raza, TIBN"}, "home": {"tv": "FSSE", "radio": "WYAY 106.7, 680 AM/93.7 FM, Braves Radio Network"} }, "time": "7:10", "home_time": "7:10", "home_team_name": "Braves", "description": "", "original_date": "2016/08/16", "home_team_city": "Atlanta", "venue_id": "16", "gameday_sw": "P", "away_win": "47", "home_games_back_wildcard": "", "away_probable_pitcher": {"last": "Santana", "stats_type": "R", "name_display_roster": "Santana, E", "number": "54", "era": "3.62", "id": "429722", "throwinghand": "RHP", "s_losses": "9", "first_name": "Ervin", "s_era": "3.62", "stats_season": "2016", "last_name": "Santana", "losses": "9", "first": "Ervin", "s_wins": "5", "wins": "5"}, "away_team_id": "142", "tz_hm_lg_gen": "ET", "status": {"ind": "S", "status": "Preview", "inning_state": "", "note": ""}, "home_loss": "74", "home_games_back": "", "home_code": "atl", "away_sport_code": "mlb", "home_win": "44", "time_hm_lg": "7:10", "away_name_abbrev": "MIN", "league": "AN", "time_zone_aw_lg": "-4", "away_games_back": "", "home_file_code": "atl", "game_data_directory": "/components/game/mlb/year_2016/month_08/day_16/gid_2016_08_16_minmlb_atlmlb_1", "time_zone": "ET", "away_league_id": "103", "home_team_id": "144", "day": "TUE", "time_aw_lg": "7:10", "away_team_city": "Minnesota", "tbd_flag": "N", "tz_aw_lg_gen": "ET", "away_code": "min", "game_media": {"media": {"free": "NO", "title": "MIN @ ATL", "thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/minatl_448641_th_7_preview.jpg", "media_state": "media_off", "start": "2016-08-16T19:10:00-0400", "has_mlbtv": "true", "calendar_event_id": "14-448641-2016-08-16", "enhanced": "N", "type": "game"} }, "game_nbr": "1", "time_date_aw_lg": "2016/08/16 7:10", "away_games_back_wildcard": "", "scheduled_innings": "9", "venue_w_chan_loc": "USGA0028", "first_pitch_et": "", "away_team_name": "Twins", "time_date_hm_lg": "2016/08/16 7:10", "id": "2016/08/16/minmlb-atlmlb-1", "home_name_abbrev": "ATL", "tiebreaker_sw": "N", "ampm": "PM", "home_division": "E", "home_time_zone": "ET", "away_time_zone": "CT", "hm_lg_ampm": "PM", "home_sport_code": "mlb", "time_date": "2016/08/16 7:10", "links": {"wrapup": "", "preview": "/mlb/gameday/index.jsp?gid=2016_08_16_minmlb_atlmlb_1&mode=preview&c_id=mlb", "home_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_minmlb_atlmlb_1&mode=preview&c_id=mlb", "away_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_minmlb_atlmlb_1&mode=preview&c_id=mlb", "tv_station": "FSSE"}, "home_ampm": "PM", "game_pk": "448641", "venue": "Turner Field", "home_probable_pitcher": {"last": "De La Cruz", "stats_type": "R", "name_display_roster": "De La Cruz, Jo", "number": "60", "era": "4.09", "id": "503444", "throwinghand": "RHP", "s_losses": "5", "first_name": "Joel", "s_era": "4.09", "stats_season": "2016", "last_name": "De La Cruz", "losses": "5", "first": "Joel", "s_wins": "0", "wins": "0"}, "home_league_id": "104", "video_thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/minatl_448641_th_7_preview.jpg", "away_loss": "71", "resume_date": "", "away_file_code": "min", "aw_lg_ampm": "PM", "video_thumbnails": {"thumbnail": [{"content": "http://mediadownloads.mlb.com/mlbam/preview/minatl_448641_th_7_preview.jpg", "height": "70", "scenario": "7", "width": "124"}, {"content": "http://mediadownloads.mlb.com/mlbam/preview/minatl_448641_th_37_preview.jpg", "height": "90", "scenario": "37", "width": "160"} ] }, "time_zone_hm_lg": "-4", "away_ampm": "PM", "gameday": "2016_08_16_minmlb_atlmlb_1", "away_division": "C"}, {"game_type": "R", "double_header_sw": "N", "location": "St. Petersburg, FL", "away_time": "4:10", "broadcast": {"away": {"tv": "FSSD, FOX Deportes San Diego", "radio": "XEMO 860, XPRS 1090"}, "home": {"tv": "Fox  Sports Sun", "radio": "WGES 680, WDAE 620 AM /95.3 FM"} }, "time": "7:10", "home_time": "7:10", "home_team_name": "Rays", "description": "", "original_date": "2016/08/16", "home_team_city": "Tampa Bay", "venue_id": "12", "gameday_sw": "P", "away_win": "50", "home_games_back_wildcard": "", "away_probable_pitcher": {"last": "Jackson", "stats_type": "R", "name_display_roster": "Jackson, E", "number": "33", "era": "4.19", "id": "429719", "throwinghand": "RHP", "s_losses": "2", "first_name": "Edwin", "s_era": "4.19", "stats_season": "2016", "last_name": "Jackson", "losses": "2", "first": "Edwin", "s_wins": "3", "wins": "3"}, "away_team_id": "135", "tz_hm_lg_gen": "ET", "status": {"ind": "S", "status": "Preview", "inning_state": "", "note": ""}, "home_loss": "69", "home_games_back": "", "home_code": "tba", "away_sport_code": "mlb", "home_win": "48", "time_hm_lg": "7:10", "away_name_abbrev": "SD", "league": "NA", "time_zone_aw_lg": "-4", "away_games_back": "", "home_file_code": "tb", "game_data_directory": "/components/game/mlb/year_2016/month_08/day_16/gid_2016_08_16_sdnmlb_tbamlb_1", "time_zone": "ET", "away_league_id": "104", "home_team_id": "139", "day": "TUE", "time_aw_lg": "7:10", "away_team_city": "San Diego", "tbd_flag": "N", "tz_aw_lg_gen": "ET", "away_code": "sdn", "game_media": {"media": {"free": "NO", "title": "SD @ TB", "thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/sdntba_448645_th_7_preview.jpg", "media_state": "media_off", "start": "2016-08-16T19:10:00-0400", "has_mlbtv": "true", "calendar_event_id": "14-448645-2016-08-16", "enhanced": "N", "type": "game"} }, "game_nbr": "1", "time_date_aw_lg": "2016/08/16 7:10", "away_games_back_wildcard": "", "scheduled_innings": "9", "venue_w_chan_loc": "USFL0438", "first_pitch_et": "", "away_team_name": "Padres", "time_date_hm_lg": "2016/08/16 7:10", "id": "2016/08/16/sdnmlb-tbamlb-1", "home_name_abbrev": "TB", "tiebreaker_sw": "N", "ampm": "PM", "home_division": "E", "home_time_zone": "ET", "away_time_zone": "PT", "hm_lg_ampm": "PM", "home_sport_code": "mlb", "time_date": "2016/08/16 7:10", "links": {"wrapup": "", "preview": "/mlb/gameday/index.jsp?gid=2016_08_16_sdnmlb_tbamlb_1&mode=preview&c_id=mlb", "home_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_sdnmlb_tbamlb_1&mode=preview&c_id=mlb", "away_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_sdnmlb_tbamlb_1&mode=preview&c_id=mlb", "tv_station": "Fox  Sports Sun"}, "home_ampm": "PM", "game_pk": "448645", "venue": "Tropicana Field", "home_probable_pitcher": {"last": "Snell", "stats_type": "R", "name_display_roster": "Snell", "number": "4", "era": "3.18", "id": "605483", "throwinghand": "LHP", "s_losses": "5", "first_name": "Blake", "s_era": "3.18", "stats_season": "2016", "last_name": "Snell", "losses": "5", "first": "Blake", "s_wins": "3", "wins": "3"}, "home_league_id": "103", "video_thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/sdntba_448645_th_7_preview.jpg", "away_loss": "68", "resume_date": "", "away_file_code": "sd", "aw_lg_ampm": "PM", "video_thumbnails": {"thumbnail": [{"content": "http://mediadownloads.mlb.com/mlbam/preview/sdntba_448645_th_7_preview.jpg", "height": "70", "scenario": "7", "width": "124"}, {"content": "http://mediadownloads.mlb.com/mlbam/preview/sdntba_448645_th_37_preview.jpg", "height": "90", "scenario": "37", "width": "160"} ] }, "time_zone_hm_lg": "-4", "away_ampm": "PM", "gameday": "2016_08_16_sdnmlb_tbamlb_1", "away_division": "W"}, {"game_type": "R", "double_header_sw": "N", "location": "Arlington, TX", "away_time": "5:05", "broadcast": {"away": {"tv": "CSCA", "radio": "95.7 FM The Game"}, "home": {"tv": "FSSW", "radio": "105.3 The Fan, 1540am ESPN Deportes"} }, "time": "8:05", "home_time": "7:05", "home_team_name": "Rangers", "description": "", "original_date": "2016/08/16", "home_team_city": "Texas", "venue_id": "13", "gameday_sw": "P", "away_win": "52", "home_games_back_wildcard": "", "away_probable_pitcher": {"last": "Triggs", "stats_type": "R", "name_display_roster": "Triggs", "number": "60", "era": "5.50", "id": "592811", "throwinghand": "RHP", "s_losses": "1", "first_name": "Andrew", "s_era": "5.50", "stats_season": "2016", "last_name": "Triggs", "losses": "1", "first": "Andrew", "s_wins": "0", "wins": "0"}, "away_team_id": "133", "tz_hm_lg_gen": "ET", "status": {"ind": "S", "status": "Preview", "inning_state": "", "note": ""}, "home_loss": "50", "home_games_back": "", "home_code": "tex", "away_sport_code": "mlb", "home_win": "70", "time_hm_lg": "8:05", "away_name_abbrev": "OAK", "league": "AA", "time_zone_aw_lg": "-4", "away_games_back": "", "home_file_code": "tex", "game_data_directory": "/components/game/mlb/year_2016/month_08/day_16/gid_2016_08_16_oakmlb_texmlb_1", "time_zone": "ET", "away_league_id": "103", "home_team_id": "140", "day": "TUE", "time_aw_lg": "8:05", "away_team_city": "Oakland", "tbd_flag": "N", "tz_aw_lg_gen": "ET", "away_code": "oak", "game_media": {"media": {"free": "NO", "title": "OAK @ TEX", "thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/oaktex_448658_th_7_preview.jpg", "media_state": "media_off", "start": "2016-08-16T20:05:00-0400", "has_mlbtv": "true", "calendar_event_id": "14-448658-2016-08-16", "enhanced": "N", "type": "game"} }, "game_nbr": "1", "time_date_aw_lg": "2016/08/16 8:05", "away_games_back_wildcard": "", "scheduled_innings": "9", "venue_w_chan_loc": "USTX0045", "first_pitch_et": "", "away_team_name": "Athletics", "time_date_hm_lg": "2016/08/16 8:05", "id": "2016/08/16/oakmlb-texmlb-1", "home_name_abbrev": "TEX", "tiebreaker_sw": "N", "ampm": "PM", "home_division": "W", "home_time_zone": "CT", "away_time_zone": "PT", "hm_lg_ampm": "PM", "home_sport_code": "mlb", "time_date": "2016/08/16 8:05", "links": {"wrapup": "", "preview": "/mlb/gameday/index.jsp?gid=2016_08_16_oakmlb_texmlb_1&mode=preview&c_id=mlb", "home_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_oakmlb_texmlb_1&mode=preview&c_id=mlb", "away_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_oakmlb_texmlb_1&mode=preview&c_id=mlb", "tv_station": "FSSW"}, "home_ampm": "PM", "game_pk": "448658", "venue": "Globe Life Park in Arlington", "home_probable_pitcher": {"last": "Harrell", "stats_type": "R", "name_display_roster": "Harrell, L", "number": "38", "era": "4.20", "id": "449173", "throwinghand": "RHP", "s_losses": "2", "first_name": "Lucas", "s_era": "4.20", "stats_season": "2016", "last_name": "Harrell", "losses": "2", "first": "Lucas", "s_wins": "3", "wins": "3"}, "home_league_id": "103", "video_thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/oaktex_448658_th_7_preview.jpg", "away_loss": "67", "resume_date": "", "away_file_code": "oak", "aw_lg_ampm": "PM", "video_thumbnails": {"thumbnail": [{"content": "http://mediadownloads.mlb.com/mlbam/preview/oaktex_448658_th_7_preview.jpg", "height": "70", "scenario": "7", "width": "124"}, {"content": "http://mediadownloads.mlb.com/mlbam/preview/oaktex_448658_th_37_preview.jpg", "height": "90", "scenario": "37", "width": "160"} ] }, "time_zone_hm_lg": "-4", "away_ampm": "PM", "gameday": "2016_08_16_oakmlb_texmlb_1", "away_division": "W"}, {"game_type": "R", "double_header_sw": "N", "location": "Houston, TX", "away_time": "7:10", "broadcast": {"away": {"tv": "FS-M", "radio": "CRN, KMOX 1120"}, "home": {"tv": "ROOTSW", "radio": "La Nueva 94.1 FM, KBME 790"} }, "time": "8:10", "home_time": "7:10", "home_team_name": "Astros", "description": "", "original_date": "2016/08/16", "home_team_city": "Houston", "venue_id": "2392", "gameday_sw": "P", "away_win": "62", "home_games_back_wildcard": "", "away_probable_pitcher": {"last": "Garcia", "stats_type": "R", "name_display_roster": "Garcia, J", "number": "54", "era": "3.93", "id": "448802", "throwinghand": "LHP", "s_losses": "8", "first_name": "Jaime", "s_era": "3.93", "stats_season": "2016", "last_name": "Garcia", "losses": "8", "first": "Jaime", "s_wins": "9", "wins": "9"}, "away_team_id": "138", "tz_hm_lg_gen": "ET", "status": {"ind": "S", "status": "Preview", "inning_state": "", "note": ""}, "home_loss": "57", "home_games_back": "", "home_code": "hou", "away_sport_code": "mlb", "home_win": "61", "time_hm_lg": "8:10", "away_name_abbrev": "STL", "league": "NA", "time_zone_aw_lg": "-4", "away_games_back": "", "home_file_code": "hou", "game_data_directory": "/components/game/mlb/year_2016/month_08/day_16/gid_2016_08_16_slnmlb_houmlb_1", "time_zone": "ET", "away_league_id": "104", "home_team_id": "117", "day": "TUE", "time_aw_lg": "8:10", "away_team_city": "St. Louis", "tbd_flag": "N", "tz_aw_lg_gen": "ET", "away_code": "sln", "game_media": {"media": {"free": "NO", "title": "STL @ HOU", "thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/slnhou_448647_th_7_preview.jpg", "media_state": "media_off", "start": "2016-08-16T20:10:00-0400", "has_mlbtv": "true", "calendar_event_id": "14-448647-2016-08-16", "enhanced": "N", "type": "game"} }, "game_nbr": "1", "time_date_aw_lg": "2016/08/16 8:10", "away_games_back_wildcard": "", "scheduled_innings": "9", "venue_w_chan_loc": "USTX0617", "first_pitch_et": "", "away_team_name": "Cardinals", "time_date_hm_lg": "2016/08/16 8:10", "id": "2016/08/16/slnmlb-houmlb-1", "home_name_abbrev": "HOU", "tiebreaker_sw": "N", "ampm": "PM", "home_division": "W", "home_time_zone": "CT", "away_time_zone": "CT", "hm_lg_ampm": "PM", "home_sport_code": "mlb", "time_date": "2016/08/16 8:10", "links": {"wrapup": "", "preview": "/mlb/gameday/index.jsp?gid=2016_08_16_slnmlb_houmlb_1&mode=preview&c_id=mlb", "home_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_slnmlb_houmlb_1&mode=preview&c_id=mlb", "away_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_slnmlb_houmlb_1&mode=preview&c_id=mlb", "tv_station": "ROOTSW"}, "home_ampm": "PM", "game_pk": "448647", "venue": "Minute Maid Park", "home_probable_pitcher": {"last": "Keuchel", "stats_type": "R", "name_display_roster": "Keuchel", "number": "60", "era": "4.56", "id": "572971", "throwinghand": "LHP", "s_losses": "11", "first_name": "Dallas", "s_era": "4.56", "stats_season": "2016", "last_name": "Keuchel", "losses": "11", "first": "Dallas", "s_wins": "7", "wins": "7"}, "home_league_id": "103", "video_thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/slnhou_448647_th_7_preview.jpg", "away_loss": "56", "resume_date": "", "away_file_code": "stl", "aw_lg_ampm": "PM", "video_thumbnails": {"thumbnail": [{"content": "http://mediadownloads.mlb.com/mlbam/preview/slnhou_448647_th_7_preview.jpg", "height": "70", "scenario": "7", "width": "124"}, {"content": "http://mediadownloads.mlb.com/mlbam/preview/slnhou_448647_th_37_preview.jpg", "height": "90", "scenario": "37", "width": "160"} ] }, "time_zone_hm_lg": "-4", "away_ampm": "PM", "gameday": "2016_08_16_slnmlb_houmlb_1", "away_division": "C"}, {"game_type": "R", "double_header_sw": "N", "location": "Denver, CO", "away_time": "8:40", "broadcast": {"away": {"tv": "MASN 2", "radio": "106.7 The Fan"}, "home": {"tv": "ROOTRM", "radio": "KNRV 1150, KOA 850"} }, "time": "8:40", "home_time": "6:40", "home_team_name": "Rockies", "description": "", "original_date": "2016/08/16", "home_team_city": "Colorado", "venue_id": "19", "gameday_sw": "P", "away_win": "70", "home_games_back_wildcard": "", "away_probable_pitcher": {"last": "Gonzalez", "stats_type": "R", "name_display_roster": "Gonzalez, G", "number": "47", "era": "4.24", "id": "461829", "throwinghand": "LHP", "s_losses": "9", "first_name": "Gio", "s_era": "4.24", "stats_season": "2016", "last_name": "Gonzalez", "losses": "9", "first": "Gio", "s_wins": "8", "wins": "8"}, "away_team_id": "120", "tz_hm_lg_gen": "ET", "status": {"ind": "S", "status": "Preview", "inning_state": "", "note": ""}, "home_loss": "63", "home_games_back": "", "home_code": "col", "away_sport_code": "mlb", "home_win": "56", "time_hm_lg": "8:40", "away_name_abbrev": "WSH", "league": "NN", "time_zone_aw_lg": "-4", "away_games_back": "", "home_file_code": "col", "game_data_directory": "/components/game/mlb/year_2016/month_08/day_16/gid_2016_08_16_wasmlb_colmlb_1", "time_zone": "ET", "away_league_id": "104", "home_team_id": "115", "day": "TUE", "time_aw_lg": "8:40", "away_team_city": "Washington", "tbd_flag": "N", "tz_aw_lg_gen": "ET", "away_code": "was", "game_media": {"media": {"free": "NO", "title": "WSH @ COL", "thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/wascol_448649_th_7_preview.jpg", "media_state": "media_off", "start": "2016-08-16T20:40:00-0400", "has_mlbtv": "true", "calendar_event_id": "14-448649-2016-08-16", "enhanced": "N", "type": "game"} }, "game_nbr": "1", "time_date_aw_lg": "2016/08/16 8:40", "away_games_back_wildcard": "", "scheduled_innings": "9", "venue_w_chan_loc": "USCO0105", "first_pitch_et": "", "away_team_name": "Nationals", "time_date_hm_lg": "2016/08/16 8:40", "id": "2016/08/16/wasmlb-colmlb-1", "home_name_abbrev": "COL", "tiebreaker_sw": "N", "ampm": "PM", "home_division": "W", "home_time_zone": "MT", "away_time_zone": "ET", "hm_lg_ampm": "PM", "home_sport_code": "mlb", "time_date": "2016/08/16 8:40", "links": {"wrapup": "", "preview": "/mlb/gameday/index.jsp?gid=2016_08_16_wasmlb_colmlb_1&mode=preview&c_id=mlb", "home_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_wasmlb_colmlb_1&mode=preview&c_id=mlb", "away_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_wasmlb_colmlb_1&mode=preview&c_id=mlb", "tv_station": "ROOTRM"}, "home_ampm": "PM", "game_pk": "448649", "venue": "Coors Field", "home_probable_pitcher": {"last": "Bettis", "stats_type": "R", "name_display_roster": "Bettis", "number": "35", "era": "5.27", "id": "518452", "throwinghand": "RHP", "s_losses": "6", "first_name": "Chad", "s_era": "5.27", "stats_season": "2016", "last_name": "Bettis", "losses": "6", "first": "Chad", "s_wins": "10", "wins": "10"}, "home_league_id": "104", "video_thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/wascol_448649_th_7_preview.jpg", "away_loss": "47", "resume_date": "", "away_file_code": "was", "aw_lg_ampm": "PM", "video_thumbnails": {"thumbnail": [{"content": "http://mediadownloads.mlb.com/mlbam/preview/wascol_448649_th_7_preview.jpg", "height": "70", "scenario": "7", "width": "124"}, {"content": "http://mediadownloads.mlb.com/mlbam/preview/wascol_448649_th_37_preview.jpg", "height": "90", "scenario": "37", "width": "160"} ] }, "time_zone_hm_lg": "-4", "away_ampm": "PM", "gameday": "2016_08_16_wasmlb_colmlb_1", "away_division": "E"}, {"game_type": "R", "double_header_sw": "N", "location": "Phoenix, AZ", "away_time": "9:40", "broadcast": {"away": {"tv": "SNY", "radio": "710 WOR, ESPN Deportes 1050"}, "home": {"tv": "FS-A, FS-A+(Sp.)", "radio": "Arizona Sports 98.7 FM, KSUN La Mejor 1400"} }, "time": "9:40", "home_time": "6:40", "home_team_name": "D-backs", "description": "", "original_date": "2016/08/16", "home_team_city": "Arizona", "venue_id": "15", "gameday_sw": "P", "away_win": "59", "home_games_back_wildcard": "", "away_probable_pitcher": {"last": "Syndergaard", "stats_type": "R", "name_display_roster": "Syndergaard", "number": "34", "era": "2.75", "id": "592789", "throwinghand": "RHP", "s_losses": "7", "first_name": "Noah", "s_era": "2.75", "stats_season": "2016", "last_name": "Syndergaard", "losses": "7", "first": "Noah", "s_wins": "9", "wins": "9"}, "away_team_id": "121", "tz_hm_lg_gen": "ET", "status": {"ind": "S", "status": "Preview", "inning_state": "", "note": ""}, "home_loss": "69", "home_games_back": "", "home_code": "ari", "away_sport_code": "mlb", "home_win": "49", "time_hm_lg": "9:40", "away_name_abbrev": "NYM", "league": "NN", "time_zone_aw_lg": "-4", "away_games_back": "", "home_file_code": "ari", "game_data_directory": "/components/game/mlb/year_2016/month_08/day_16/gid_2016_08_16_nynmlb_arimlb_1", "time_zone": "ET", "away_league_id": "104", "home_team_id": "109", "day": "TUE", "time_aw_lg": "9:40", "away_team_city": "NY Mets", "tbd_flag": "N", "tz_aw_lg_gen": "ET", "away_code": "nyn", "game_media": {"media": {"free": "ALL", "title": "NYM @ ARI", "thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/nynari_448642_th_7_preview.jpg", "media_state": "media_off", "start": "2016-08-16T21:40:00-0400", "has_mlbtv": "true", "calendar_event_id": "14-448642-2016-08-16", "enhanced": "N", "type": "game"} }, "game_nbr": "1", "time_date_aw_lg": "2016/08/16 9:40", "away_games_back_wildcard": "", "scheduled_innings": "9", "venue_w_chan_loc": "USAZ0166", "first_pitch_et": "", "away_team_name": "Mets", "time_date_hm_lg": "2016/08/16 9:40", "id": "2016/08/16/nynmlb-arimlb-1", "home_name_abbrev": "ARI", "tiebreaker_sw": "N", "ampm": "PM", "home_division": "W", "home_time_zone": "MST", "away_time_zone": "ET", "hm_lg_ampm": "PM", "home_sport_code": "mlb", "time_date": "2016/08/16 9:40", "links": {"wrapup": "", "preview": "/mlb/gameday/index.jsp?gid=2016_08_16_nynmlb_arimlb_1&mode=preview&c_id=mlb", "home_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_nynmlb_arimlb_1&mode=preview&c_id=mlb", "away_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_nynmlb_arimlb_1&mode=preview&c_id=mlb", "tv_station": "FS-A, FS-A+(Sp.)"}, "home_ampm": "PM", "game_pk": "448642", "venue": "Chase Field", "home_probable_pitcher": {"last": "Shipley", "stats_type": "R", "name_display_roster": "Shipley", "number": "35", "era": "2.96", "id": "640463", "throwinghand": "RHP", "s_losses": "1", "first_name": "Braden", "s_era": "2.96", "stats_season": "2016", "last_name": "Shipley", "losses": "1", "first": "Braden", "s_wins": "2", "wins": "2"}, "home_league_id": "104", "video_thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/nynari_448642_th_7_preview.jpg", "away_loss": "59", "resume_date": "", "away_file_code": "nym", "aw_lg_ampm": "PM", "video_thumbnails": {"thumbnail": [{"content": "http://mediadownloads.mlb.com/mlbam/preview/nynari_448642_th_7_preview.jpg", "height": "70", "scenario": "7", "width": "124"}, {"content": "http://mediadownloads.mlb.com/mlbam/preview/nynari_448642_th_37_preview.jpg", "height": "90", "scenario": "37", "width": "160"} ] }, "time_zone_hm_lg": "-4", "away_ampm": "PM", "gameday": "2016_08_16_nynmlb_arimlb_1", "away_division": "E"}, {"game_type": "R", "double_header_sw": "N", "location": "Anaheim, CA", "away_time": "7:05", "broadcast": {"away": {"tv": "ROOTNW", "radio": "710 ESPN"}, "home": {"tv": "FS-W", "radio": "KWKW 1330, KLAA 830"} }, "time": "10:05", "home_time": "7:05", "home_team_name": "Angels", "description": "", "original_date": "2016/08/16", "home_team_city": "LA Angels", "venue_id": "1", "gameday_sw": "P", "away_win": "63", "home_games_back_wildcard": "", "away_probable_pitcher": {"last": "Miranda", "stats_type": "R", "name_display_roster": "Miranda", "number": "37", "era": "6.00", "id": "664641", "throwinghand": "LHP", "s_losses": "0", "first_name": "Ariel", "s_era": "6.00", "stats_season": "2016", "last_name": "Miranda", "losses": "0", "first": "Ariel", "s_wins": "1", "wins": "1"}, "away_team_id": "136", "tz_hm_lg_gen": "ET", "status": {"ind": "S", "status": "Preview", "inning_state": "", "note": ""}, "home_loss": "69", "home_games_back": "", "home_code": "ana", "away_sport_code": "mlb", "home_win": "49", "time_hm_lg": "10:05", "away_name_abbrev": "SEA", "league": "AA", "time_zone_aw_lg": "-4", "away_games_back": "", "home_file_code": "ana", "game_data_directory": "/components/game/mlb/year_2016/month_08/day_16/gid_2016_08_16_seamlb_anamlb_1", "time_zone": "ET", "away_league_id": "103", "home_team_id": "108", "day": "TUE", "time_aw_lg": "10:05", "away_team_city": "Seattle", "tbd_flag": "N", "tz_aw_lg_gen": "ET", "away_code": "sea", "game_media": {"media": {"free": "NO", "title": "SEA @ LAA", "thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/seaana_448646_th_7_preview.jpg", "media_state": "media_off", "start": "2016-08-16T22:05:00-0400", "has_mlbtv": "true", "calendar_event_id": "14-448646-2016-08-16", "enhanced": "N", "type": "game"} }, "game_nbr": "1", "time_date_aw_lg": "2016/08/16 10:05", "away_games_back_wildcard": "", "scheduled_innings": "9", "venue_w_chan_loc": "USCA0027", "first_pitch_et": "", "away_team_name": "Mariners", "time_date_hm_lg": "2016/08/16 10:05", "id": "2016/08/16/seamlb-anamlb-1", "home_name_abbrev": "LAA", "tiebreaker_sw": "N", "ampm": "PM", "home_division": "W", "home_time_zone": "PT", "away_time_zone": "PT", "hm_lg_ampm": "PM", "home_sport_code": "mlb", "time_date": "2016/08/16 10:05", "links": {"wrapup": "", "preview": "/mlb/gameday/index.jsp?gid=2016_08_16_seamlb_anamlb_1&mode=preview&c_id=mlb", "home_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_seamlb_anamlb_1&mode=preview&c_id=mlb", "away_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_seamlb_anamlb_1&mode=preview&c_id=mlb", "tv_station": "FS-W"}, "home_ampm": "PM", "game_pk": "448646", "venue": "Angel Stadium of Anaheim", "home_probable_pitcher": {"last": "Chacin", "stats_type": "R", "name_display_roster": "Chacin", "number": "49", "era": "5.84", "id": "468504", "throwinghand": "RHP", "s_losses": "8", "first_name": "Jhoulys", "s_era": "5.84", "stats_season": "2016", "last_name": "Chacin", "losses": "8", "first": "Jhoulys", "s_wins": "3", "wins": "3"}, "home_league_id": "103", "video_thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/seaana_448646_th_7_preview.jpg", "away_loss": "54", "resume_date": "", "away_file_code": "sea", "aw_lg_ampm": "PM", "video_thumbnails": {"thumbnail": [{"content": "http://mediadownloads.mlb.com/mlbam/preview/seaana_448646_th_7_preview.jpg", "height": "70", "scenario": "7", "width": "124"}, {"content": "http://mediadownloads.mlb.com/mlbam/preview/seaana_448646_th_37_preview.jpg", "height": "90", "scenario": "37", "width": "160"} ] }, "time_zone_hm_lg": "-4", "away_ampm": "PM", "gameday": "2016_08_16_seamlb_anamlb_1", "away_division": "W"}, {"game_type": "R", "double_header_sw": "N", "location": "San Francisco, CA", "away_time": "10:15", "broadcast": {"away": {"tv": "ROOTPIT", "radio": "KDKA-FM 93.7"}, "home": {"tv": "CSBA", "radio": "KNBR 680, KKSF"} }, "time": "10:15", "home_time": "7:15", "home_team_name": "Giants", "description": "", "original_date": "2016/08/16", "home_team_city": "San Francisco", "venue_id": "2395", "gameday_sw": "P", "away_win": "60", "home_games_back_wildcard": "", "away_probable_pitcher": {"last": "Taillon", "stats_type": "R", "name_display_roster": "Taillon", "number": "50", "era": "2.85", "id": "592791", "throwinghand": "RHP", "s_losses": "2", "first_name": "Jameson", "s_era": "2.85", "stats_season": "2016", "last_name": "Taillon", "losses": "2", "first": "Jameson", "s_wins": "3", "wins": "3"}, "away_team_id": "134", "tz_hm_lg_gen": "ET", "status": {"ind": "S", "status": "Preview", "inning_state": "", "note": ""}, "home_loss": "52", "home_games_back": "", "home_code": "sfn", "away_sport_code": "mlb", "home_win": "66", "time_hm_lg": "10:15", "away_name_abbrev": "PIT", "league": "NN", "time_zone_aw_lg": "-4", "away_games_back": "", "home_file_code": "sf", "game_data_directory": "/components/game/mlb/year_2016/month_08/day_16/gid_2016_08_16_pitmlb_sfnmlb_1", "time_zone": "ET", "away_league_id": "104", "home_team_id": "137", "day": "TUE", "time_aw_lg": "10:15", "away_team_city": "Pittsburgh", "tbd_flag": "N", "tz_aw_lg_gen": "ET", "away_code": "pit", "game_media": {"media": {"free": "NO", "title": "PIT @ SF", "thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/pitsfn_448644_th_7_preview.jpg", "media_state": "media_off", "start": "2016-08-16T22:15:00-0400", "has_mlbtv": "true", "calendar_event_id": "14-448644-2016-08-16", "enhanced": "N", "type": "game"} }, "game_nbr": "1", "time_date_aw_lg": "2016/08/16 10:15", "away_games_back_wildcard": "", "scheduled_innings": "9", "venue_w_chan_loc": "USCA0987", "first_pitch_et": "", "away_team_name": "Pirates", "time_date_hm_lg": "2016/08/16 10:15", "id": "2016/08/16/pitmlb-sfnmlb-1", "home_name_abbrev": "SF", "tiebreaker_sw": "N", "ampm": "PM", "home_division": "W", "home_time_zone": "PT", "away_time_zone": "ET", "hm_lg_ampm": "PM", "home_sport_code": "mlb", "time_date": "2016/08/16 10:15", "links": {"wrapup": "", "preview": "/mlb/gameday/index.jsp?gid=2016_08_16_pitmlb_sfnmlb_1&mode=preview&c_id=mlb", "home_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_pitmlb_sfnmlb_1&mode=preview&c_id=mlb", "away_preview": "/mlb/gameday/index.jsp?gid=2016_08_16_pitmlb_sfnmlb_1&mode=preview&c_id=mlb", "tv_station": "CSBA"}, "home_ampm": "PM", "game_pk": "448644", "venue": "AT&T Park", "home_probable_pitcher": {"last": "Samardzija", "stats_type": "R", "name_display_roster": "Samardzija", "number": "29", "era": "4.23", "id": "502188", "throwinghand": "RHP", "s_losses": "8", "first_name": "Jeff", "s_era": "4.23", "stats_season": "2016", "last_name": "Samardzija", "losses": "8", "first": "Jeff", "s_wins": "10", "wins": "10"}, "home_league_id": "104", "video_thumbnail": "http://mediadownloads.mlb.com/mlbam/preview/pitsfn_448644_th_7_preview.jpg", "away_loss": "56", "resume_date": "", "away_file_code": "pit", "aw_lg_ampm": "PM", "video_thumbnails": {"thumbnail": [{"content": "http://mediadownloads.mlb.com/mlbam/preview/pitsfn_448644_th_7_preview.jpg", "height": "70", "scenario": "7", "width": "124"}, {"content": "http://mediadownloads.mlb.com/mlbam/preview/pitsfn_448644_th_37_preview.jpg", "height": "90", "scenario": "37", "width": "160"} ] }, "time_zone_hm_lg": "-4", "away_ampm": "PM", "gameday": "2016_08_16_pitmlb_sfnmlb_1", "away_division": "C"} ]});
  }


  _mapGameScores(){
    const games = this.state.games;

    return games.map((games) => {
        let homeTeam =  games.home_team_name,
            awayTeam =  games.away_team_name,
            status   = games.status.status,
            inningState =  games.status.inning_state,
            inning   =  games.status.inning;


      // if game is in preview
      if( status == 'Preview' || status == 'Pre-Game'){

        let status = games.home_time + ' ' + games.home_time_zone, // Change the Preview status text to show Start Time
            homeStartingPitcher = games.home_probable_pitcher.name_display_roster,
            awayStartingPitcher = games.away_probable_pitcher.name_display_roster,
            homeAbbrev          = games.home_name_abbrev,
            awayAbbrev          = games.away_name_abbrev,
            homePitcherERA      = games.home_probable_pitcher.era,
            homePitcherRecord   = games.home_probable_pitcher.s_wins + '-' + games.home_probable_pitcher.s_losses,
            awayPitcherERA      = games.away_probable_pitcher.era,
            awayPitcherRecord   = games.away_probable_pitcher.s_wins + '-' + games.away_probable_pitcher.s_losses;

        return(
          <UpcomingGame
            key={games.game_pk}
            homeTeam={homeTeam}
            homeAbbrev={homeAbbrev}
            awayTeam={awayTeam}
            awayAbbrev={awayAbbrev}
            status={status}
            homeStartingPitcher={homeStartingPitcher}
            homePitcherERA={homePitcherERA}
            homePitcherRecord={homePitcherRecord}
            awayStartingPitcher={awayStartingPitcher}
            awayPitcherERA={awayPitcherERA}
            awayPitcherRecord={awayPitcherRecord}
          />
        );

      } else if ( status == 'Final' || status == 'Game Over') {
        // if the game is final
        let status = 'Final',
            awayScore = games.linescore.r.away,
            homeScore = games.linescore.r.home,
            winningPitcher = games.winning_pitcher.name_display_roster,
            losingPitcher  = games.losing_pitcher.name_display_roster;

        return(
          <FinalGame
            key={games.game_pk}
            homeTeam={homeTeam}
            awayTeam={awayTeam}
            status={status}
            inningState={inningState}
            inning={inning}
            winningPitcher={winningPitcher}
            losingPitcher={losingPitcher}
            homeScore={homeScore}
            awayScore={awayScore}
          />
        );
      } else if ( status == 'Postponed') {
        let reason = games.status.reason;
        if( games.linescore ){
          let   awayScore = games.linescore.r.away,
                homeScore = games.linescore.r.home;
          return(
            <Postponed
              key={games.game_pk}
              homeTeam={homeTeam}
              awayTeam={awayTeam}
              status={status}
              inningState={inningState}
              inning={inning}
              homeScore={homeScore}
              awayScore={awayScore}
              reason={reason}
            />
          );
        } else{
          return(
            <Postponed
              key={games.game_pk}
              homeTeam={homeTeam}
              awayTeam={awayTeam}
              status={status}
              inningState={inningState}
              awayTeam={awayTeam}
              status={status}
              inningState={inningState}
              inning={inning}
              reason={reason}
            />
          );
        }

      } else{

        // if the game is current
        let currentPitcher  = games.pitcher.name_display_roster,
            currentPitchernum  = games.pitcher.number,
            pitcherERA      = games.pitcher.era,
            awayScore       = games.linescore.r.away,
            homeScore       = games.linescore.r.home,
            currentBatter   = games.batter.name_display_roster,
            currentBatternum   = games.batter.number,
            batterAtBats    = games.batter.ab,
            batterHits      = games.batter.h,
            batterAVG       = games.batter.avg,
            pbp             = games.pbp.last,
            outs            = games.status.o;

        return(
          <CurrentGame
            key={games.game_pk}
            homeTeam={homeTeam}
            awayTeam={awayTeam}
            status={status}
            inningState={inningState}
            inning={inning}
            currentBatter={currentBatter}
            currentBatternum={currentBatternum}
            batterAtBats={batterAtBats}
            batterHits={batterHits}
            batterAVG={batterAVG}
            currentPitcher={currentPitcher}
            currentPitchernum={currentPitchernum}
            pitcherERA={pitcherERA}
            homeScore={homeScore}
            awayScore={awayScore}
            pbp={pbp}
            outs={outs}
          />
        );
      }

    });
  }

  render() {
    const gameList = this._mapGameScores();

    return(

      <div className="row">
        {gameList}
      </div>
    );
  }
}

ReactDOM.render(
  <GameBox />, document.getElementById('pinetar')
);

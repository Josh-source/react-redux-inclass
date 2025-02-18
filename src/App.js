import React from 'react';
import CharacterList from './components/CharacterList';
import './App.css';
import {connect} from 'react-redux';
import {updateFavChar} from './redux/reducers/showReducer';
import {getStarWarsCharacters} from "./redux/reducers/starWarsReducer";
import {getBreakingBadCharacters} from "./redux/reducers/breakingBadReducers";

class App extends React.Component {
  componentDidMount() {
    this.props.getStarWarsCharacters();
    this.props.getBreakingBadCharacters();
  }
  handleCharChange = e => {
    this.props.updateFavChar(e.target.value);
  }
  render() {
    return (
      <div>
        <div className="App">
          <input placeholder="Favorite Character" onChange={this.handleCharChange}/>
          <h1>{this.props.faveChar}</h1>
        </div>
        <CharacterList />
      </div>
      
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    faveChar: reduxState.showReducer.faveChar
  }
}

export default connect(mapStateToProps, {
  updateFavChar,
  getStarWarsCharacters,
  getBreakingBadCharacters
})(App);

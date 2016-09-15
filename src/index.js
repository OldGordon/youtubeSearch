import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
const API_KEY = 'AIzaSyADff_pUplGffyrNb8hvK9O9QV0P5-beuQ';
import YTSearch from 'youtube-api-search';
//import App from './components/app';

//import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

    YTSearch({key: API_KEY, term:'cats'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo:videos[0]  
       });
      console.log(videos);
    });
  }
   render(){
      return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
ReactDOM.render(
             //<Provider store={createStoreWithMiddleware(reducers)}>
             <App />
             //</Provider>
            , document.querySelector('.container')
);

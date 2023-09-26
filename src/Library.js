import "./Store.css";
import gta5 from "./GTA_5.jpg";
import minecraft from "./minecraft.avif";
import Wish from "./components/Wish"
import GameList from "./GameList";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './components/reducers/';
import rootReducer1 from './components/API/';


const store = createStore(rootReducer, applyMiddleware(thunk));
const store1 = createStore(rootReducer1, applyMiddleware(thunk));


function Store() {
  return (
    <>
      <div className="store-page">
        <div className="contents-container">
          <p className="heading games-text">Library</p>
          <div className="games">
            <img
              src={gta5}
              alt="GTA 5"
              width="256px"
              height="316px"
              className="games-images"
            />
            <img
              src={minecraft}
              alt="Minecraft"
              width="256px"
              height="316px"
              className="games-images"
            />
            <img
              src="https://image.api.playstation.com/vulcan/img/rnd/202009/3007/rkLaT8XuOfQPUoovvEAM4fGN.png"
              alt="Cities Skylines"
              width="256px"
              height="316px"
              className="games-images"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReEGSkCVWU2Pq83IQmpVRv5WH9G4dnQckSbjZSrC4DiIb2KxbitNfvL-tjvY-adfiaFwE&usqp=CAU"
              alt="Horizon"
              width="256px"
              height="316px"
              className="games-images"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg"
              alt="GTA 5"
              width="256px"
              height="316px"
              className="games-images"
            />
          </div>
        </div>
        <Provider store={store}>
          <Wish></Wish>
        </Provider>
        <Provider store={store1}>
          <div className="App">
            <GameList />
          </div>
        </Provider>
      </div>

    </>
  );
}

export default Store;

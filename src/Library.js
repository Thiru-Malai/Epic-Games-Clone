import "./Store.css";
import gta5 from "./GTA_5.jpg";
import minecraft from "./minecraft.avif";

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
      </div>
    </>
  );
}

export default Store;

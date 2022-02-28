import React from "react";
import { DrDre } from "../../assets/Audio";
import {
  ForwardPlayer,
  ListPlayer,
  PausePlayer,
  PlayPlayer,
  StopPlayer,
} from "../../assets/Images";
import { Button } from "../../Components";
import "./Player.scss";

function Player() {
  return (
    <div>
      <audio className="audio" src={DrDre} controls>
        <div pseudo="-webkit-media-controls">
          <div pseudo="-webkit-media-controls-overlay-enclosure"></div>
          <div pseudo="-webkit-media-controls-enclosure">
            <div pseudo="-webkit-media-controls-panel">
              <input
                type="button"
                pseudo="-webkit-media-controls-play-button"
              />
              <input
                type="range"
                step="any"
                pseudo="-webkit-media-controls-timeline"
                max="1.54919"
              />
              <div>
                <div speudo="-webkit-slider-runnable-track" id="track">
                  <div id="thumb"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="upper-buttons"></div>
        <Button imageSrc={}
      </audio>

      {/* <img src={ForwardPlayer} /> */}
      {/* <img src={ListPlayer} /> */}
      {/* <img src={PausePlayer} /> */}
      {/* <img src={PlayPlayer} /> */}
      {/* <img src={StopPlayer} /> */}
    </div>
  );
}

export default Player;
{
  /* <audio className="audio" src={DrDre} controls>
<div pseudo="-webkit-media-controls">
  <div pseudo="-webkit-media-controls-overlay-enclosure"></div>
  <div pseudo="-webkit-media-controls-enclosure">
    <div pseudo="-webkit-media-controls-panel">
      <input
        type="button"
        pseudo="-webkit-media-controls-play-button"
      ></input>
      <input
        type="range"
        step="any"
        pseudo="-webkit-media-controls-timeline"
        max="1.54919"
      >
        <div>
          <div speudo="-webkit-slider-runnable-track" id="track">
            <div id="thumb"></div>
          </div>
        </div>
      </input>
    </div>
  </div>
</div>
</audio> */
}

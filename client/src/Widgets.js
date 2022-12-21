import React from "react";

import Card from "@material-ui/core/Card";

import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      {/* <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div> */}

      <div className="widgets__widgetContainer">
        <h2>Our Sponsors</h2>
      </div>
      <div className="sponsor_cont">
        <Card variant="outlined">
          <a href="https://ethereum.org/en/">
            <img
              src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
              width="300"
              height="200"
            />
          </a>
        </Card>
        <br />
        <Card variant="outlined">
          <a href="https://www.alchemy.com/">
            <img
              src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/6088f4c7c34ad61ab10cdf72_horizontal-logo-onecolor-neutral-alchemy.svg"
              width="300"
              height="65"
              style={{ margin: "15px" }}
            />
          </a>
        </Card>
        <br />

        <Card variant="outlined">
          <a href="https://ipfs.tech/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c2/IPFS_logo.png"
              width="300"
              height="121"
              style={{ margin: "15px" }}
            />
          </a>
        </Card>
      </div>
    </div>
  );
}

export default Widgets;

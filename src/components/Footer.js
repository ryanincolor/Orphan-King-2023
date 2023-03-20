import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = () => {
  
    return (
      <footer className="footer">
        <div className="content">
          <div className="container">
            <div style={{ maxWidth: "100vw" }}>
                <section className="menu">
                  <ul className="menu-list">
                    <li className="navbar-item">
                      <a title="instagram" target="_blank" href="https://www.instagram.com/orphanking_">
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li className="navbar-item">
                      <a title="youtube" target="_blank" href="https://www.youtube.com/@orphankingofficial">
                      <span>YouTube</span>
                    </a>
                    </li>
                    <li className="navbar-item">
                      <a title="youtube" target="_blank" href="https://open.spotify.com/artist/7bFR4AY6BX3kFpFz6614xr?si=ffD-OMaMSFGjC4xSOOS_fA">
                      <span>Spotify</span>
                    </a>
                    </li>
                    <li className="navbar-item">
                      <a title="facebook" target="_blank" href="https://www.facebook.com/orphankng">
                      <span>Facebook</span>
                    </a>
                    </li>
                    <li className="navbar-item">
                      <a title="bandcamp" href="https://orphanking.bandcamp.com/music">
                      <span>Bandcamp</span>
                    </a>
                    </li>
                  </ul>
                </section>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;

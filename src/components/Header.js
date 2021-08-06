import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";

export default function Header() {

    return (
        
        <header className="fixed-top bg-white">
        <div className="container-fluid pt-3 pb-3">
          <div className="w-100">
            <div className="d-flex d-md-none">
              <div style={{width: '40%'}}>
              <Link to="/">
                <StaticImage src="../images/logo.png" alt="logo" className="img-fluid ps-2 position-relative" style={{maxHeight: '180px', top: '8px'}} />
                </Link>
              </div>
              <div className="align-self-end text-nowrap py-1 ps-1 d-inline-block" style={{width: '60%'}}>
                
                  <svg width="100%" height="100%" viewBox="0 0 844 356" style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2}}>
                  <rect x="71.51" y="236.18" width="726.22" height="63.767" fill="#FBFBE7" fill-rule="evenodd" stroke-width="1.0005"/>
 <rect width="843.75" height="355.3" fill="none"/>
 <text x="53.066px" y="225.807px" font-family="'BebasNeue-Regular', 'Bebas Neue', sans-serif" font-size="146.77px">T<tspan x="105.047px 165.024px 216.862px 239.711px 289.407px 346.243px 399.366px 451.347px 474.195px 531.888px 582.584px 635.992px 687.973px 739.811px " y="225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px ">HE LAST BATTEN</tspan></text>
 <text transform="scale(.99691 1.0031)" x="66.575562" y="289.18109" fill="#9e94be" font-family="SourceSansPro-SemiBold, 'Source Sans Pro', sans-serif" font-size="62.504px" font-weight="600" stroke-width=".99691">P<tspan x="98.555367 134.63348 169.95293 198.79549 235.43085 269.73846 301.92062 332.68625 364.66602 400.74518 428.62567 441.27643 476.14032 488.79007 518.44312 535.24194 569.39801 599.15186 635.78613 669.79065 700.55627 732.53607 768.6142" y="289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109" stroke-width=".99691">HOTOGRAPHY &amp; VIDEOGAPHY</tspan></text>
                  </svg>
              </div>
            </div>
            <div className="d-none d-md-flex d-lg-none">
              <div style={{width: '25%'}}>
              <Link to="/">
                <StaticImage src="../images/logo.png" alt="logo" className="img-fluid ps-2 position-relative" style={{maxHeight: '180px', top: '8px'}} />
                </Link>
              </div>
              <div className="align-self-end text-nowrap py-1 ps-1 d-inline-block" style={{width: '38%'}}>
               
                  <svg width="100%" height="100%" viewBox="0 0 844 356" style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2}}>
                  <rect x="71.51" y="236.18" width="726.22" height="63.767" fill="#FBFBE7" fill-rule="evenodd" stroke-width="1.0005"/>
 <rect width="843.75" height="355.3" fill="none"/>
 <text x="53.066px" y="225.807px" font-family="'BebasNeue-Regular', 'Bebas Neue', sans-serif" font-size="146.77px">T<tspan x="105.047px 165.024px 216.862px 239.711px 289.407px 346.243px 399.366px 451.347px 474.195px 531.888px 582.584px 635.992px 687.973px 739.811px " y="225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px ">HE LAST BATTEN</tspan></text>
 <text transform="scale(.99691 1.0031)" x="66.575562" y="289.18109" fill="#9e94be" font-family="SourceSansPro-SemiBold, 'Source Sans Pro', sans-serif" font-size="62.504px" font-weight="600" stroke-width=".99691">P<tspan x="98.555367 134.63348 169.95293 198.79549 235.43085 269.73846 301.92062 332.68625 364.66602 400.74518 428.62567 441.27643 476.14032 488.79007 518.44312 535.24194 569.39801 599.15186 635.78613 669.79065 700.55627 732.53607 768.6142" y="289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109" stroke-width=".99691">HOTOGRAPHY &amp; VIDEOGAPHY</tspan></text>
                  </svg>
                
              </div>
              <div className="d-flex" style={{width: '5%'}}>
              </div>
              <nav className="bg-white d-flex mx-auto navbar navbar-light d-none d-md-flex align-items-center pt-3" style={{width: '35%', maxWidth: '400px'}}>
                <div className="container">
                  <StaticImage src="../images/instagram-ic.svg" alt="instagram icon" className="img-fluid" />
                  <StaticImage src="../images/facebook-ic.svg" alt="facebook icon" className="img-fluid" />
                  <StaticImage src="../images/youtube-ic.svg" alt="youtube icon" className="img-fluid" />
                  <StaticImage src="../images/fiverr-ic.svg" alt="fiverr icon" className="img-fluid" />
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                      <li className="nav-item active">
                        <Link to="/about/" className="nav-link" aria-current="page">about me</Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">galleries</a>
                        <ul className="dropdown-menu" aria-labelledby="dropdown01">
                          <li>
                            <Link to="/galleries/lifestyle" className="dropdown-item">lifestyle</Link>
                          </li>
                          <li>
                          <Link to="/galleries/corporate" className="dropdown-item">corporate</Link>
                          </li>
                          <li>
                          <Link to="/galleries/boudoir" className="dropdown-item">boudoir</Link>
                          </li>
                          <li>
                          <Link to="/galleries/engagement" className="dropdown-item">engagement</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">video</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">blog</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link">contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="d-none d-lg-flex d-xxl-one">
              <div style={{minWidth: '170px'}}>
              <Link to="/">
                <StaticImage src="../images/logo.png" alt="logo" className="img-fluid ps-2 position-relative" style={{maxHeight: '180px', top: '8px'}} />
                </Link>
              </div>
              <div className="align-self-end text-nowrap py-1 ps-1 d-inline-block" style={{maxWidth: '35%', paddingRight: '20px'}}>
                  <svg width="100%" height="100%" viewBox="0 0 844 356" style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2}}>
                  <rect x="71.51" y="236.18" width="726.22" height="63.767" fill="#FBFBE7" fill-rule="evenodd" stroke-width="1.0005"/>
 <rect width="843.75" height="355.3" fill="none"/>
 <text x="53.066px" y="225.807px" font-family="'BebasNeue-Regular', 'Bebas Neue', sans-serif" font-size="146.77px">T<tspan x="105.047px 165.024px 216.862px 239.711px 289.407px 346.243px 399.366px 451.347px 474.195px 531.888px 582.584px 635.992px 687.973px 739.811px " y="225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px 225.807px ">HE LAST BATTEN</tspan></text>
 <text transform="scale(.99691 1.0031)" x="66.575562" y="289.18109" fill="#9e94be" font-family="SourceSansPro-SemiBold, 'Source Sans Pro', sans-serif" font-size="62.504px" font-weight="600" stroke-width=".99691">P<tspan x="98.555367 134.63348 169.95293 198.79549 235.43085 269.73846 301.92062 332.68625 364.66602 400.74518 428.62567 441.27643 476.14032 488.79007 518.44312 535.24194 569.39801 599.15186 635.78613 669.79065 700.55627 732.53607 768.6142" y="289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109 289.18109" stroke-width=".99691">HOTOGRAPHY &amp; VIDEOGAPHY</tspan></text>
                  </svg>
              </div>
              <div className="d-flex ms-auto text-nowrap align-self-end" style={{paddingBottom: '15px'}}>
                <nav className="navbar navbar-expand-lg">
                  <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item active">
                    <Link to="/about/" className="nav-link" aria-current="page">about me</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="dropdown01" href="/" data-bs-toggle="dropdown" aria-expanded="false">galleries</a>
                      <ul className="dropdown-menu" aria-labelledby="dropdown01">
                      <li>
                            <Link to="/galleries/lifestyle" className="dropdown-item">lifestyle</Link>
                          </li>
                          <li>
                          <Link to="/galleries/corporate" className="dropdown-item">corporate</Link>
                          </li>
                          <li>
                          <Link to="/galleries/boudoir" className="dropdown-item">boudoir</Link>
                          </li>
                          <li>
                          <Link to="/galleries/engagement" className="dropdown-item">engagement</Link>
                          </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="nav-link">video</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="nav-link">blog</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="nav-link">contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <nav className="align-items-end bg-white d-none d-lg-flex ms-auto navbar navbar-light" style={{width: '20%', paddingBottom: '25px', maxWidth: '300px'}}>
                <div className="container" style={{maxWidth: '285px', minWidth: '154px'}}>
                  <StaticImage src="../images/instagram-ic.svg" alt="instagram icon" className="lg-icon" />
                  <StaticImage src="../images/facebook-ic.svg" alt="facebook icon" className="lg-icon" style={{maxHeight: '35px'}} />
                  <StaticImage src="../images/youtube-ic.svg" alt="youtube icon" className="lg-icon" style={{maxHeight: '35px'}} />
                  <StaticImage src="../images/fiverr-ic.svg" alt="fiverr icon" className="lg-icon" style={{paddingTop: '3px'}} />
                 
                </div>
              </nav>
            </div>
            <nav className="bg-white d-flex mx-auto navbar navbar-light d-md-none" style={{width: '90%'}}>
              <div className="container">
                <StaticImage src="../images/instagram-ic.svg" className="img-fluid" />
                <StaticImage src="../images/facebook-ic.svg" className="img-fluid" />
                <StaticImage src="../images/youtube-ic.svg" className="img-fluid" />
                <StaticImage src="../images/fiverr-ic.svg" className="img-fluid" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                  <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item active">
                    <Link to="/about/" className="nav-link" aria-current="page">about me</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="/" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">galleries</a>
                      <ul className="dropdown-menu" aria-labelledby="dropdown01">
                      <li>
                            <Link to="/galleries/lifestyle" className="dropdown-item">lifestyle</Link>
                          </li>
                          <li>
                          <Link to="/galleries/corporate" className="dropdown-item">corporate</Link>
                          </li>
                          <li>
                          <Link to="/galleries/boudoir" className="dropdown-item">boudoir</Link>
                          </li>
                          <li>
                          <Link to="/galleries/engagement" className="dropdown-item">engagement</Link>
                          </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="nav-link">video</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="nav-link">blog</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="nav-link">contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    )
}
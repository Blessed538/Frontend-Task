import {React,useState} from 'react';
import './Header.css';


const Header = ({collapse, setCollapse}) => {
  return (
    <div>
      <div className="Header">
        <div className="Header__inner">
          <div className="d-flex justify-between align-center w-100">
            <div className="">
              <a href="https://innoloft.com/public" className="LogoLink__link">
                <img width="100"
                  className="LogoDesktop LogoDesktop--header"
                  src="https://anvkgjjben.cloudimg.io/width/400/x/https://img.innoloft.de/innoloft-no-white-space.svg"
                  alt="logo"
                />
              </a>

            </div>

            <div className="">
                <span onClick={() => {setCollapse({value: !collapse.value})}} className="d-lg-none text-white ham">
                                <img width="30" src="/hamburger.svg" alt="" className=""/>
                </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Header;

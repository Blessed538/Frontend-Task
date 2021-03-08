import React from 'react';
import PropTypes from 'prop-types';
import './SideNav.css';
import { Link } from 'react-router-dom';

const SideNav = ({ collapse, setCollapse }) => {
  return (
    <div className="">
      <aside
        className={collapse.value ? 'aside bg-light-ash h-100' : 'aside active'}
      >
        <div
          className={
            collapse.value ? 'aside bg-light-ash h-100' : 'aside active'
          }
        >
          <div className="h-100 ">
            <div>
              <Link className="py-2 pl-2" to="/">
                Main Page
              </Link>
            </div>
            <div>
              <Link className="mt-2 py-2 pl-2" to="/dashboard">
                Product
              </Link>
            </div>
          </div>
        </div>
      </aside>
      <div
        onClick={() => {
          setCollapse({ value: !collapse.value });
        }}
        className={collapse.value ? 'overlay' : 'overlay active'}
      ></div>
    </div>
  );
};

SideNav.propTypes = {};

export default SideNav;

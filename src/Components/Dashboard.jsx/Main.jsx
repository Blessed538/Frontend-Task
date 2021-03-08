import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import '../Navigation/Navbar';
import { useDispatch } from 'react-redux';
import SideNav from '../SideNav/SideNav';
import { GetProduct } from './../../Store/Action/ProductAction';

const Dashboard = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProduct('6781'));
  }, [dispatch]);

  return (
    <div className="page pl-lg-2 bg-light-ash pt-lg-2 pr-lg-4  ml-lg-2">
      <div className="a">
        <div className="img d-flex mb-2 flex-column">
          <div className="pic flex-grow-1">Product Image</div>

          <div className="info mt-2">Product main info</div>
        </div>

        <div className="d-flex flex-wrap z-0">
          <div className="desc flex-grow-1 mr-lg-2 col-sm-12">
            Description tab
          </div>
          <div className="attr flex-grow-1 col-sm-12">Attributes tab</div>
        </div>
        <div className="tab mt-2">Tab content</div>
      </div>

      <div className="b d-flex flex-column">
        <div className="user flex-grow-1 mb-2">User info</div>

        <div className="map flex-grow-1">Map</div>
      </div>
    </div>
  );
};

export default Dashboard;

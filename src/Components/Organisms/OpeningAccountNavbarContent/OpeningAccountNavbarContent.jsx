import React, { useState, useEffect, useContext } from "react";
import "./OpeningAccountNavbarContent.css";
import Logo from "../../Atoms/Logo/Logo";
import OpeningAccountNavbar from "../../Molecules/OpeningAccountNavbar/OpeningAccountNavbar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { MainContext } from "../../../Context/MainContext";

import OpeningAccountNavbarDropdown from "../OpeningAccountNavbarDropdown/OpeningAccountNavbarDropdown";
import Spinner from "../../Atoms/Spinner/Spinner";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { FaRegCommentDots } from 'react-icons/fa';

function OpeningAccountNavbarContent() {
  const [spinner, setSpinner] = useState(true);
  const [show, setShow] = useState(true);

    
 setTimeout(() => {
   setShow(false)
 }, 2000);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000);
  }, []);

  const { openCloseMenu, openCloseMenuToggler } = useContext(MainContext);
  return (
      <>
          {show && (
              <div className='wrapper'>
                  <div className='pro progress'></div>
              </div>
          )}
          <nav className='opening-account-navbar-parent'>
              <div className='opening-account-container'>
                  <Logo height='39px' width='90px' />
                  <OpeningAccountNavbar
                      needHelp='Need help?'
                      contactUs='Contact us'
                      signIn=' Sign in'
                      helpIcon={
                          <HelpOutlineIcon
                              style={{ position: 'relative', bottom: '3px', color: '#c73391' }}
                          />
                      }
                      commentsIcon={
                          <FaRegCommentDots style={{ color: '#c73391', fontSize: '20px' }} />
                      }
                  />
              </div>

              <div className='opening-account-container-mobile'>
                  <Logo height='39px' width='90px' />
                  <div style={{ cursor: 'pointer' }} onClick={openCloseMenuToggler}>
                      {openCloseMenu === false ? <MenuIcon /> : <CloseIcon />}
                  </div>
              </div>

              {spinner && (
                  <div className='parent-spinner'>
                      <Spinner
                          position='absolute'
                          bottom='15px'
                          right='0px'
                          height='25px'
                          width='25px'
                      />
                  </div>
              )}
          </nav>
          {openCloseMenu === true ? <OpeningAccountNavbarDropdown /> : null}
      </>
  );
}

export default OpeningAccountNavbarContent;

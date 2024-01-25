import React from 'react';
import { useSelector } from 'react-redux';
import Popup from './pages/Popups/Popup';
import './App.css';
import AppMain from './AppMain';
import SidePopup from './pages/SiderPopup/SidePopup';

function App() {
  const popupState = useSelector(state => state.PopupReducer.state);
  const sidPopState = useSelector(state => state.SiderPopReducer.state);
  return (
    <div className="MainAppHolder">
      <AppMain />
      <div className="PopUpHolderDiv" style={sidPopState? { display: 'flex' }: {}}>
        <SidePopup />
      </div>
      <div className="PopUpHolderDiv" style={popupState? { display: 'flex' }: {}}>
        <Popup />
      </div>
    </div>
  );
}

export default App;

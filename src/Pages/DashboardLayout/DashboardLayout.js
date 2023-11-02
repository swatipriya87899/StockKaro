// LayoutWithBars.js
import React, { useEffect, useState } from 'react';
import './DashboardLayout.css';
import Leftbar from '../../Components/Leftbar/Leftbar';

function DashboardLayout({ children }) {

  const [leftBarWidth, setLeftBarWidth] = useState(0);

 

  return (
    <div className="layout">
      <div className='leftbar'><Leftbar/></div>
      <div className="content">{children}</div>
    </div>
  );
}

export default DashboardLayout;
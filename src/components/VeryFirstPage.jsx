import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function VeryFirstPage() {
  return (
   <>
   <div className="content">
   <img src="https://wallpapercave.com/wp/wp4810879.jpg" className='apple' />
   <Link to ="/items" className='link1'><h4>Click Me😁 to See<br></br>
     Smartphones📱</h4>
     </Link>
   </div>
   </>
  )
}

export default VeryFirstPage
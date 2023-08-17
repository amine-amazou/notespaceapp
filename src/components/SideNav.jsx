import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function SideNav({ closeNav }) {
    const navigate = useNavigate();
    const pathname = useLocation();
    useEffect(() => closeNav(), [pathname])
    return (
        <div>
            <div id="mySidenav" className="sidenav">
                <div className='sidenav-header'>
                    <span className='logo'>Notespace</span>
                    <p className="closebtn" onClick={closeNav}>&times;</p>
                </div>
                
                <div className='collections'>
                    <div className='collections-header'>
                        Collections
                    </div>
                    <div className='collections-new'>
                        <span uk-icon="icon: plus"></span> New Collection
                    </div>
                    <div className='collection'>
                        My Collection
                    </div>
                    <div className='collections-footer' onClick={() => navigate('/')}>
                        All Notes
                    </div>
                </div>
                
            </div>
        </div>
    )
}

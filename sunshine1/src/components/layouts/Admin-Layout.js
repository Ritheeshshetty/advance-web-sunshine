import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import AdminStats from './Admin-Stats';
import AdminUsers from './Admin-Users';


function AdminLayout() {
  return (
    <>
    <header className='adminNav'>
      <div className="conatiner">
        <nav>
          
          <h4 style={{"fontSize":"30px","padding":"20px 0px"}}>Admin</h4>
          <ul>
            <li>
              <NavLink to="/admin/users">
              users
              </NavLink>
              
            </li>
            <li>
            <NavLink to="/admin/stats">
              stats
            </NavLink>
            </li>
            <li>
            <NavLink to="/admin">
              home
            </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div className='userdash dashboard'>
      <h1>Welcome to Sunshine Express News APP Dashboard</h1>
      <AdminStats/>
    </div>
    <Outlet/>
    </>
  )
}

export default AdminLayout;
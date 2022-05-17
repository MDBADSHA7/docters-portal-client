import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/UseAdmin';
const Dasboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-3xl font-bold text-purple-700'>Welcome to your Dasboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dasboard">My Appointments</Link></li>
                    <li><Link to="/dasboard/review">My Reviews</Link></li>
                    <li><Link to="/dasboard/history">My History</Link></li>
                    {admin && <li><Link to="/dasboard/users">All Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dasboard;
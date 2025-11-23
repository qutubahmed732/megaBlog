import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth.js';
import { logout } from '../../Redux-store/features/authSlice.js';

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => dispatch(logout())).catch((e) => console.log(e));
    }
    return (
        <button className='inline-block px-6 py-2 text-xl duration-200 text-[#EAECEF] hover:bg-blue-100 font-[500] rounded-full border-transparent hover:border-b-2 hover:border-[#EAECEF] hover:text-neutral-500' onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn
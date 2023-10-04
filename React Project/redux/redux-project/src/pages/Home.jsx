import React, { useEffect } from 'react';
import { retriveUser } from '../Store/action/users';
import { useDispatch } from 'react-redux';
const Home = () => {
    const dispatch =useDispatch();   
    useEffect(()=>{
        console.log("called use effect from home pages");
        getUsers()
    })
    async function getUsers() {
        console.log("called get users function");
        let abc =await dispatch
        (retriveUser());
        console.log(abc);
    }
    return (
        <div>
            wel-come
        </div>
    );
};

export default Home;
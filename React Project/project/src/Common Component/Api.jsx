import React, { useState,useEffect } from 'react';

const Api = () => {
const [apidata, setapidata]=useState();
const [loading,setloading]=useState(false);
    useEffect(()=>{
        fetch('https://jayramin.000webhostapp.com/allusers').then(res=>{console.log(res);return res.json()}).then((result)=>{
            console.log(result);
        })
let ApiList=Object.entries(result.Data).map(([key,val],index)=>{
    return<li key={key}>{val.username}</li>
});
console.log("result": ApiList)
    },[])
    return (
        <>

        </>
    );
};

export default Api;
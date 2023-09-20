import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
function App() {
  const [justifyActive, setJustifyActive] = useState('tab1');;
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };
  // toast msg function START
  const diffToastreg=()=>{
    toast("Your registration is succesfull")
  }
  const Loginmsg=()=>{
    toast("Your Login is succesfull")
  }
  // toast msg function END
  // set form data in state 

  let [status, setStatus] = useState(true)
  let [formData, SetFormData] = useState({})

  // method of getting data in form START
  const setDataInFormState = (event) => {
    SetFormData({ ...formData, [event.target.name]: event.target.value })
  }

  // method of getting data in form END
  // pass the registration data in json server
  const Registration = async () => { 
    // console.log(formData);
   
    await fetch('http://localhost:3004/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=utf-8',

      },
      body: JSON.stringify(formData)
    }).then(res => { console.log(res); return res.json() }).then((result) => {
      // diffToastreg() 
  //  if (formData=null) {
  //    console.log("first if ");
  //    //  alert("please fill up the all field")
  //   } else {
  //     console.log("else if ");

      diffToastreg()
  //  }

      // console.log("result:",result);
SetFormData({})      
console.log("set form data ",formData);
    })
  }
  return (
    <>
    <MDBContainer className="bg-light square border border-1 p-3 my-5 d-flex flex-column w-50 border-success">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f22e69' }}>
                <MDBIcon fab icon='facebook-f' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f22e69' }}>
                <MDBIcon fab icon='twitter' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f22e69' }}>
                <MDBIcon fab icon='google' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f22e69' }}>
                <MDBIcon fab icon='github' size="sm" />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          {JSON.stringify(formData)}
          <MDBInput wrapperClass='mb-4' name='username' onChange={(event) => { SetFormData({ ...formData, [event.target.name]: event.target.value }) }} label='Email address' id='form1' type='email' />
          <MDBInput wrapperClass='mb-4' name='password' onChange={setDataInFormState} label='Password' id='form2' type='password' />

          {/* <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div> */}

          {/* <MDBBtn className="mb-4 w-100" onClick={() => {diffToastreg(), setStatus(!status) }}>Sign in</MDBBtn> */}
          <MDBBtn className="mb-4 w-100" onClick={() => {Loginmsg() }}>Sign in</MDBBtn>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign un with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f22e69' }}>
                <MDBIcon fab icon='facebook-f' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f22e69' }}>
                <MDBIcon fab icon='twitter' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f22e69' }}>
                <MDBIcon fab icon='google' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#f22e69' }}>
                <MDBIcon fab icon='github' size="sm" />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>
{JSON.stringify(formData)}
          <MDBInput wrapperClass='mb-4' name='name' onChange={setDataInFormState} label='Name' id='form1' type='text' />
          <MDBInput wrapperClass='mb-4' name='username' onChange={setDataInFormState} label='Username' id='form1' type='text' />
          <MDBInput wrapperClass='mb-4' name='email' onChange={setDataInFormState} label='Email' id='form1' type='email' />
          <MDBInput wrapperClass='mb-4' name='password' onChange={setDataInFormState} label='Password' id='form1' type='password' />

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn onClick={Registration} className="mb-4 w-100">Sign up</MDBBtn>
          {/* <MDBBtn onClick={()=>{Registration()}} className="mb-4 w-100">Sign up</MDBBtn> */}
          {/* <MDBBtn onClick={()=>{Registration();diffToastreg()}} className="mb-4 w-100">Sign up</MDBBtn> */}

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
    <ToastContainer/>
    </>

  );
}

export default App;
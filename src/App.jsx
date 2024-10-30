import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import ReferenceForm from './components/ReferenceForm/referenceform'
// import HookForm from './components/HookForm/HookForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'

function App() {

  // const handleSignUpSubmit = data => {
  //     console.log("Sign up data", data);
  // }

  // const handleProfileUpdate = data => {
  //     console.log("Update Profile", data);
  // }

  return (
    <>
      
      <h2>Form Master</h2>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <ReferenceForm></ReferenceForm> */}
      {/* <HookForm></HookForm> */}

      {/* <ReusableForm 
      formTitle={"Sign Up"} 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign up</h2>
          <p>Please Sign Up Right Now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={"Profile Update"} 
      handleSubmit={handleProfileUpdate}       
      submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always Keep Your Profile Updated</p>
        </div>
      </ReusableForm> */}

      <Grandpa></Grandpa>

    </>
  )
}

export default App

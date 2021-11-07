import {Route} from 'react-router-dom'
import DoctorProfile from "./components/usersPages/DoctorProfile";
import PatientProfile from "./components/usersPages/Patients/PatientProfile"
import SignUp from "./components/registration/SignUp";
import SignIn from "./components/registration/SignIn";
import RestorePassword from "./components/registration/RestorePassword";
import RestorePasswordMessage from "./components/registration/RestorePasswordMessage";


function App() {
  return (
    <div className="App">
       <Route path="/" exact component={SignUp} />
       <Route path="/SignIn"  component={SignIn} />
      <Route path="/RestorePassword" component={RestorePassword} />
      <Route path="/RestorePassword2" component={RestorePasswordMessage} />
       <Route path="/doctor"  component={DoctorProfile} />
       <Route path="/patient" component={PatientProfile} />
    </div>
  );
}

export default App;

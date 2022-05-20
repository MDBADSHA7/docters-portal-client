
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dasboard from './Pages/Dasboard/Dasboard';
import MyAppointsments from './Pages/Dasboard/MyAppointsments';
import MyReview from './Pages/Dasboard/MyReview';
import MyHistry from './Pages/Dasboard/MyHistry';
import Users from './Pages/Dasboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dasboard/AddDoctor';
import ManageDoctor from './Pages/Dasboard/ManageDoctor';
import Payment from './Pages/Dasboard/Payment';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signUp" element={<SignUp></SignUp>}></Route>
        <Route path="appointment" element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}>
        </Route>
        <Route path="dasboard" element={<RequireAuth>
          <Dasboard></Dasboard>
        </RequireAuth>}>
          <Route index element={<MyAppointsments></MyAppointsments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistry></MyHistry>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctor></ManageDoctor></RequireAdmin>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

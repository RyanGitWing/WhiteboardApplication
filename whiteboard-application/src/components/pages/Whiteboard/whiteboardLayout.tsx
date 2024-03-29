import { FC } from 'react';

import Box from '@mui/material/Box';

import LoginForm from './loginForm';
import RegisterForm from './registrationForm';
// import AdminForm from './adminForm';
import AdminAssignSess from './adminAssignSess';
import AdminScholarList from './adminScholarList';
import AdminStudentList from './adminStudentList';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Calendar from '../../Calendar/calendar';
import RequestSession from '../Scheduler/requestSession';
import SetAvailability from '../Scheduler/setAvailability';
import WhiteboardRework from '../../Whiteboard/whiteboardRework';
import { MessageWindow } from '../../Whiteboard';


const WhiteboardLayout: FC = () => (
  <Router>
    <div className="App">
        <div className="container d-flex align-items-center flex-column">
          <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
            <Route path='/home' element={<Calendar role="scholar"/>}/>
            <Route path='/request-session' element={<RequestSession role="student"/>}/>
            <Route path='/create-session' element={<RequestSession role="scholar"/>}/>
            <Route path='/set-availability' element={<SetAvailability/>}/>
            {/* <Route path="/adminPage" element={<AdminForm/>}/> */}
            <Route path="/adminAssignSessions" element={<AdminAssignSess/>}/>
            <Route path="/adminScholarList" element={<AdminScholarList/>}/>
            <Route path="/adminStudentList" element={<AdminStudentList/>}/>
            <Route path="/whiteboard" element={
              <Box display="flex">
                <WhiteboardRework />
                <MessageWindow />
              </Box>}/>
          </Routes>
        </div>
    </div>
    </Router>
);

export default WhiteboardLayout;
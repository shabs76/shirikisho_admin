import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './appMain.css';
// storage
import { getSessionStore } from './shared/storage';
// actions
import { saveLogin } from './redux/actions/loginAction';
// components
import Login from './pages/login/Login';
import ErrorPage from './pages/Errors/ErrorPage';
import Dash from './pages/dash/Dash';
import HomeDash from './pages/homeDash/HomeDash';
import DriversMain from './pages/drivers/DriversMain';
import ParksMainPage from './pages/parks/ParksMainPage';
import AdminsMain from './pages/admins/AdminsMain';
import Reports from './pages/reports/Reports';
import Collections from './pages/collections/Collections';
import Arrears from './pages/arrears/Arrears';
import Services from './pages/services/Services';


function AppMain() {
    const dispatch = useDispatch();
    const logState = useSelector(state => state.loginReducer.state);
    if (logState !== 'login' && getSessionStore('logKey') !== 'not-set') {
        dispatch(saveLogin(getSessionStore('logKey'), getSessionStore('logSess')));
    }
    return (
        <RouterProvider 
            router={createBrowserRouter([
                {
                    path: '/',
                    element: <Login />,
                    errorElement: <ErrorPage/>
                },
                {
                    path: '/login',
                    element: <Login />,
                    errorElement: <ErrorPage/>
                },
                {
                    path:'/dash',
                    element: logState === 'login' || getSessionStore('logKey') !== 'not-set'  ? <Dash/> : <Navigate to="/" />,
                    // element:  <Dash/>,
                    errorElement: <ErrorPage />,
                    children: [
                        {
                            path:'',
                            element: <HomeDash />
                        },
                        {
                            path:'drivers',
                            element: <DriversMain />
                        },
                        {
                            path:'parks',
                            element: <ParksMainPage />
                        },
                        {
                            path: 'admins',
                            element: <AdminsMain />
                        },
                        {
                            path: 'reports',
                            element: <Reports />
                        },
                        {
                            path: 'collections',
                            element: <Collections />
                        }, 
                        {
                            path: 'arrears',
                            element: <Arrears />
                        }, 
                        {
                            path: 'services',
                            element: <Services />
                        }
                    ]
                }
            ])}
        />
    );
}

export default AppMain;

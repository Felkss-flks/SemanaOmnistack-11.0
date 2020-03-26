import { BrowserRouter, Route, Switch} from 'react-router-dom';
import React from'react';

import Register from './pages/Register';
import Logon from './pages/Logon';
import Profile from './pages/Profile';
import NewIncident from './pages/Newincident';

export default function Routes()
{
    return(
        <BrowserRouter>
           
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>

            </Switch>

        </BrowserRouter>
    );
}
//Switch garante que apenas uma rota seja chamada por vez
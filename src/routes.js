import { BrowserRouter, Route, Switch } from 'react-router-dom'

import logon from './pages/logon';
import Dashboard from './pages/dashboard';

export default function Routes() {

    return (
        <BrowserRouter>

            <Switch>
                <Route path={"/"} exact component={logon}/>
                <Route path={"/dashboard"} component={Dashboard}/>
            </Switch>

        </BrowserRouter>



    )
}
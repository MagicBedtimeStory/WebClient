import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import MainContainer from '../main/MainContainer';
import AdventurerContainer from '../adventurer/AdventurerContainer';

const history = useRouterHistory(createHashHistory)({ queryKey: false });

var routes = (
    <Router history={history}>
        <Route>
            <Route path='/' component={MainContainer}>
                <IndexRoute component={AdventurerContainer} />
                {/*<Route path='competitions' component={CompetitionsContainer} />*/}
                {/*<Route path='competitors/:competitionId' component={CompetitorsContainer} />*/}
                {/*<Route path='round-robin/:competitionId' component={RoundRobinContainer} />*/}
                {/*<Route path='tournament/:competitionId' component={TournamentContainer} />*/}
            </Route>
        </Route>
    </Router>
);

module.exports = routes;
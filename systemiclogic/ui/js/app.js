require("babel-core/register");
require("babel-polyfill");
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer';
import MainContainerComponent from './ToolBox/Components/AllComponents/MainContainerComponent';
import {AllReducers} from './AppSpecific/Reducers/AllReducers';
import HeaderPanelComponent from './ToolBox/Components/AllComponents/HeaderPanelComponent';
import PageContentHolderComponent from './ToolBox/Components/AllComponents/PageContentHolderComponent';
let ReduxStore=createStore(AllReducers);

ReactDOM.render(
    <Provider store={ReduxStore}>
        <MainContainerComponent>
            <HeaderPanelComponent>
                Do you have an original idea? Tell us more below...
            </HeaderPanelComponent>
            <PageContentHolderComponent>
                <AppContainer/>
            </PageContentHolderComponent>
        </MainContainerComponent>
    </Provider>,
    document.getElementById('root')
);
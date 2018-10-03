import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import ShowAll from './components/ShowAll';
import Eat from './components/Eat';
import Drink from './components/Drink';
import Decorate from './components/Decorate';
import EatDetail from './components/EatDetail';
import DrinkDetail from './components/DrinkDetail';
import DecorateDetail from './components/DecorateDetail';
import AllDetail from './components/ShowAllDetail';
import BasketDisplay from './components/BasketDisplay';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/eatDetail" component={EatDetail}/>
				<Route path="/drinkDetail" component={DrinkDetail}/>
				<Route path="/decorateDetail" component={DecorateDetail}/>
				<Route path="/allDetail" component={AllDetail}/>
				<Route path="/all" component={ShowAll}/>
				<Route path="/eat" component={Eat}/>
				<Route path="/drink" component={Drink}/>
				<Route path="/decorate" component={Decorate}/>
				<Route path="/basket" component={BasketDisplay}/>
				<Route path="/" component={App}/>
			</Switch>
		</div>
	</BrowserRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();

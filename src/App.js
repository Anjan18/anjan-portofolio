import React, { useState } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Loadable from 'react-loadable'

// image
import FRONT_IMAGE from 'components/front_image/front_image'

const Loading = () => <div>loading</div>

// lazy Loading components
const HOME = Loadable({
	loader: () => import('pages/home/home'),
	loading: Loading,
})

const BACKGROUND = Loadable({
	loader: () =>
		import('components/background/background'),
	loading: Loading,
})

const NAVIGATION = Loadable({
	loader: () =>
		import('components/navigation/navigation.jsx'),
	loading: Loading,
})

const WORK = Loadable({
	loader: () => import('pages/work/work'),
	loading: Loading,
})

const App = ({ match }) => {
	// state of window size
	const [window_state, set_window_state] = useState(
		window.innerWidth <= 450 ? true : false
	)

	// resize window function
	let resize_function = () => {
		if (window.innerWidth <= 450)
			return set_window_state(true)
		if (window.innerWidth > 450)
			return set_window_state(false)
	}

	window.addEventListener('resize', resize_function)
	return (
		<>
			{!window_state ? <BACKGROUND /> : null}
			<FRONT_IMAGE window_state={window_state} />

			<NAVIGATION window_state={window_state} />
			<Switch>
				<Route
					exact
					path="/"
					component={HOME}
				/>
				<Route
					exact
					path="/work"
					component={WORK}
				/>
			</Switch>
		</>
	)
}

export default withRouter(App)

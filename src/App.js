import React, { useState } from 'react'
import {
	Switch,
	Route,
	withRouter,
	NavLink,
} from 'react-router-dom'
import Loadable from 'react-loadable'

// image
import FRONT_IMAGE from 'components/front_image/front_image'

import PAGES from 'pages/root/page'

export const Loading = () => <div>loading</div>

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

export let global_break = 1600

const App = ({ location, match }) => {
	// state of window size
	const [window_state, set_window_state] = useState(
		window.innerWidth <= global_break ? true : false
	)

	// resize window function
	let resize_function = () => {
		if (window.innerWidth <= global_break)
			return set_window_state(true)
		if (window.innerWidth > global_break)
			return set_window_state(false)
	}

	window.addEventListener('resize', resize_function)

	return (
		<>
			<Switch>
				<Route
					exact
					path="/:id"
					component={PAGES}
				/>
			</Switch>
			{location.pathname === '/' ? <HOME /> : null}

			<BACKGROUND />
			<FRONT_IMAGE window_state={window_state} />

			<NAVIGATION window_state={window_state} />
		</>
	)
}

export default withRouter(App)

import React, { useState } from 'react'
import Loadable from 'react-loadable'

// import { Loading } from 'App'
const Loading = () => <div> </div>

const WORK = Loadable({
	loader: () => import('pages/work/work'),
	loading: Loading,
})

const PAGES = ({ match }) => {
	const [url_param] = useState(match.params.id)
	switch (url_param) {
		case 'work':
			return <WORK />

			break

		default:
			return null
	}
}

export default PAGES

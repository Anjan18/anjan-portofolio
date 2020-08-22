import React, { useState } from "react"
import Loadable from "react-loadable"

// components
const Loading = () => <div>loading</div>

//  lazy loading components
const NAVIGATION_BAR = Loadable({
	loader: () => import("components/navigation_bar/navigation_bar"),
	loading: Loading,
})

const HAMBURGER_MENU = Loadable({
	loader: () => import("components/hamburger_menu/hamburger_menu"),
	loading: Loading,
})

const NAVIGATION = ({ window_state }) => {
	const [should_show_navbar, set_should_show_navbar] = useState(false)

	// is hamburger_menu clicked or not
	const [is_menu_clicked, set_is_menu_clicked] = useState(false)

	// toggle the navigation
	const toggle_navigation = (event) => {
		set_is_menu_clicked(!is_menu_clicked)
		set_should_show_navbar(!should_show_navbar)
	}

	return (
		<>
			{window_state === true ? (
				<HAMBURGER_MENU click={toggle_navigation} />
			) : null}

			{should_show_navbar ? <NAVIGATION_BAR /> : null}
		</>
	)
}

export default NAVIGATION

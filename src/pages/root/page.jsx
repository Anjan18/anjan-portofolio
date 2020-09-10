import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Loadable from 'react-loadable'
import {withRouter} from 'react-router'

// import { Loading } from 'App'
const Loading = () => <div> </div>

const WORK = Loadable({
	loader: () => import('pages/work/work'),
	loading: Loading,
})

const ABOUT_ME = Loadable({
	loader: () => import('pages/about_me/about_me'),
	loading: Loading,
})

const SERVICES = Loadable({
	loader: () => import('pages/services/services'),
	loading: Loading,
})


const COMPONENT_BOX = styled.div`
	height: 95vh;
	width: 50vw;
	background: aqua;
  position: absolute; top: 0;
  z-index: 1;

  @media (min-width: 1600px)
  {
        width: 60vw;
  }
`

// const PAGES = ({ match }) => {
//         console.log(url_param)
// 	// switch (url_param) {
// 	// 	case 'work':
// 	// 		return <WORK />
// 	// 		break

//           // case 'about_me':
//                   // return <ABOUT_ME />
//                           // break


// 	// 	default:
// 	// 		return null
// 	// }


//         return (
//                 <>
//                 </>
//         )
// }
const PAGES_COMPONENT = ({ match: {params: {id} } }) => {
	const [url_param, set_url_param] = useState(id)

        React.useEffect(()=>{
                set_url_param(id)
                console.log(url_param)
                        }, [id])

	return (
		<COMPONENT_BOX>
                        {
url_param=== 'work' ? <WORK /> : null
                        }
                        {
url_param=== 'services' ? <SERVICES/> : null
                        }
                        {
                               url_param === 'about_me' ? <ABOUT_ME/> : null
                        }

		</COMPONENT_BOX>
	)
}
export default  PAGES_COMPONENT 

import React from 'react'
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import HeaderMenu from "./HeaderMenu"

const HeaderMenuContainer = (props) => {





    return <HeaderMenu pathname={props.location.pathname} />
}




export default compose(
    withRouter
)(HeaderMenuContainer)
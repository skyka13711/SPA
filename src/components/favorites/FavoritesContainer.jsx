import React from 'react'
import { connect } from "react-redux"
import Favorites from './Favorites'
import { deleteHistory, UpdateHistory } from '../../redux/search-history'
import { setResult } from '../../redux/search-reducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

const FavoritesContainer = (props) => {
    
    return (
        <Favorites searchHistory={props.searchHistory}
            deleteHistory={props.deleteHistory}
            UpdateHistory={props.UpdateHistory}
            setResult={props.setResult}
            history={props.history}
        />
    )
}

let mapStateToProps = state => ({
    searchHistory: state.searchHistory.history,
})

export default compose(
    connect(mapStateToProps, { deleteHistory, UpdateHistory, setResult }),
    withRouter
)(FavoritesContainer)
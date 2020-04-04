import React from 'react'
import Content from './Content'
import { connect } from 'react-redux'
import { setResult } from '../../redux/search-reducer'
import { setHistory } from '../../redux/search-history'

const ContentContainer = (props) => {

    return <Content
        isResult={props.isResult}
        setResult={props.setResult}
        result={props.result}
        searchVal={props.searchVal}
        currentVal={props.currentVal}
        setHistory={props.setHistory}
    />

}

let mapStateToProps = state => ({
    isResult: state.searchResult.isResult,
    result: state.searchResult.result,
    searchVal: state.searchResult.searchVal,
    currentVal: state.searchResult.currentVal,
})

export default connect(mapStateToProps, { setResult, setHistory })(ContentContainer)
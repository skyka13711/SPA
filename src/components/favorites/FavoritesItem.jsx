import React, { useState } from 'react'
import style from './FavoritesItem.module.css'
import { Modal } from 'antd'
import FavoritesForm from './FavoritesForm'

const FavoriteItem = (props) => {
    let [editInquiry, setEditInquiry] = useState(false)
    let [editForm, setEditForm] = useState(false)

    let search = () => {
        let name = props.name
        let maxResults = props.maxResults
        props.setResult(name, maxResults)
        props.history.push('/search')
    }


    return (
        <>
            <li
                onClick={search}
                onMouseEnter={() => setEditInquiry(true)} onMouseLeave={() => setEditInquiry(false)} className={editInquiry ? style.Favorites__item + ' ' + style.mask : style.Favorites__item}> {props.searchVal}
                {editInquiry ? <span className={style.container}> <span onClick={(e) => {
                    e.stopPropagation()
                    setEditForm(true)
                }} className={style.edit}>Изменить</span> <span
                    onClick={(e) => {
                        e.stopPropagation()
                        props.deleteHistory(props.id)
                    }}
                    className={style.delete}>Удалить</span></span> : ''}
            </li>


            <Modal
                header={null}
                footer={null}
                visible={editForm}
            >
                <FavoritesForm id={props.id}
                    name={props.name}
                    searchVal={props.searchVal}
                    setEditForm={setEditForm}
                    UpdateHistory={props.UpdateHistory}
                    maxResults={props.maxResults} /> </Modal>
        </>
    )


}

export default FavoriteItem
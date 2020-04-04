import React from 'react'
import FavoritesItem from './FavoritesItem'
import style from './Favorites.module.css'
const Favorites = (props) => {



    return (
        <div className={style.Favorites__container}>
            <h2>Избранное</h2>
            <ul className={style.Favorites__list}>
                {props.searchHistory.map(item => {
                    debugger
                    return < FavoritesItem
                        deleteHistory={props.deleteHistory}
                        UpdateHistory={props.UpdateHistory}
                        key={item.id}
                        name={item.searchName}
                        searchVal={item.searchVal}
                        id={item.id}
                        maxResults={item.maxResults}
                        setResult={props.setResult}
                        history={props.history}
                    />

                })}
            </ul>
        </div>
    )



}

export default Favorites
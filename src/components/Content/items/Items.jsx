import React from 'react'
import style from './items.module.css'

const Items = ({ result, searchVal }) => {

    let items = result.items.map(item => {

        return <div key={item.snippet.title} className={style.item}>
            <div>
                <iframe allowFullScreen width="100%" height="226"
                    src={`https://www.youtube.com/embed/${item.id.videoId}?rel=0&showinfo=0&autoplay=1&fs=1`}
                    frameborder="0">
                </iframe>
            </div>
            <div className={style.item__title}>{item.snippet.title}</div>
            <div className={style.item__chanelId}>{item.snippet.channelTitle}</div>
            <div className={style.item__viewCount}>{item.viewCount}</div>
        </div>
    })

    return (
        <div className={style.descr}> Видео по запросу <span >{`«${searchVal}»`}</span>
            <span className={style.view__count}>{result.pageInfo.totalResults}</span>
            <div className={style.item__container}>
                {items}
            </div>
        </div>
    )
}

export default Items
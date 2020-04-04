import React, { useState } from 'react'
import { Input, Modal, Select } from 'antd';
import style from './Content.module.css'
import Items from './items/Items';
import { HeartOutlined } from '@ant-design/icons';
import HistoryForm from '../Form/HistoryForm';


const { Search } = Input

const Content = (props) => {

    let [isfavorite, setIsfavorite] = useState(false)
    let [searchVal, setSearchVal] = useState('')
    let toggleFavorites = () => {
        if (isfavorite) {
            return setIsfavorite(false)
        }
        return setIsfavorite(true)
    }



    return <div className={style.container}>
        <div className={!props.isResult ? style.search : style.search + ' ' + style.active}>
            <h1>Поиск видео</h1>
            <div className={style.search__wrapper}>
                <Search
                    placeholder="Что хотите посмотреть?"
                    enterButton="Найти"
                    size="large"
                    onSearch={() => { props.setResult(searchVal, 12) }}
                    onChange={(e) => {
                        setSearchVal(e.target.value)
                    }}
                    onPressEnter={() => { props.setResult(searchVal) }}
                    style={{
                        width: 670,
                    }}
                    suffix={
                        props.isResult && <HeartOutlined onClick={toggleFavorites} className={!isfavorite && style.input__heart}
                            style={{
                                color: '#1390E5',
                            }} />
                    }
                />
                <div className={style.modal}>
                    <Modal
                        header={null}
                        footer={null}
                        visible={isfavorite}
                    >
                        <HistoryForm
                            setIsfavorite={setIsfavorite}
                            setHistory={props.setHistory}
                            currentVal={props.currentVal}
                        />
                    </Modal>
                </div>
            </div>
        </div>

        {props.isResult && <Items result={props.result} searchVal={props.currentVal} />}
    </div >
}



export default Content
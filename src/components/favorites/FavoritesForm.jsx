import React, { useState } from 'react'

import style from '../Form/Form.module.css'
import { Input, Select, Button, InputNumber } from 'antd'


const { Option } = Select;
const FavoritesForm = (props) => {


    let [nameVal, setNameval] = useState(props.searchVal)
    let [name, setName] = useState(props.name)
    let [maxResults, setMaxResults] = useState(props.maxResults)


    let OkHandle = (id) => {
        debugger
        props.UpdateHistory(name, nameVal, id, maxResults)
        props.setEditForm(false)

    }
    let onChangeHandler = (e) => {
        let val = Number(e.target.value)
        setMaxResults(val)
    }

    let canselHandler = () => {
        props.setEditForm(false)
    }



    let optionInputText = {
        marginBottom: '46px',
        borderRadius: '5px',
        padding: '12px',

    }
    let optionInputSelect = {
        width: '100%',
        marginBottom: '50px'
    }

    return (
        <div>
            <div className={style.modal__title}>Сохранить запрос</div>
            <Input name="value" onChange={(e) => setName(e.target.value)} style={optionInputText} size="large" defaultValue={props.name} />

            <Input onChange={(e) => setNameval(e.target.value)} style={optionInputText} size="large" defaultValue={props.searchVal} placeholder={'Укажите название'} />

            <Select name="Option" style={optionInputSelect} size="large" defaultValue={'Без фильтра'}>
                <Option value="Option">Option</Option>
                <Option value="Option">Option</Option>
                <Option value="Option">Option</Option>
            </Select>
            <div className={style.input__range}>
                <input onChange={(e) => {
                    onChangeHandler(e)
                }}
                    type='range' step='1' min='1' max='20' value={maxResults} />
                <div className={style.input__number}>
                    <InputNumber
                        min={1}
                        max={20}
                        value={maxResults}
                        onChange={(e) => setMaxResults(e)} />

                </div>
            </div>
            <Button onClick={() => {
                canselHandler()
            }
            } className={style.modal__btn + ' ' + style.left}>Не сохранять </Button>
            <Button htmlType="submit" onClick={(e) => {
                OkHandle(props.id)
            }} className={style.modal__btn + ' ' + style.right} type="primary">Сохранить </Button>


        </div>
    )


}




export default FavoritesForm
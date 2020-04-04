import React, { useState } from 'react'
import { Input, Select, Button, InputNumber } from 'antd';
import style from './Form.module.css'




const { Option } = Select;

const HistoryForm = (props) => {

    let [nameVal, setNameval] = useState('')
    let [maxResults, setMaxResults] = useState(12)

    let OkHandle = () => {
        
        props.setHistory(props.currentVal, nameVal, maxResults)
        props.setIsfavorite(false)

    }
    let canselHandler = () => {
        props.setIsfavorite(false)
    }



    let optionInputText = {
        marginBottom: '46px',
        borderRadius: '5px',
        padding: '12px',

    }
    let optionInputSelect = {
        width: '100%',
        marginBottom: '100px'
    }

    return (
        <div>
            <div className={style.modal__title}>Сохранить запрос</div>
            <Input name="value" style={optionInputText} size="large" value={props.currentVal} disabled />

            <Input onChange={(e) => setNameval(e.target.value)} style={optionInputText} size="large" placeholder={'Укажите название'} />

            <Select name="Option" style={optionInputSelect} size="large" defaultValue={'Без фильтра'}>
                <Option value="Option">Option</Option>
                <Option value="Option">Option</Option>
                <Option value="Option">Option</Option>
            </Select>
            <div className={style.input__range}>
                <input onChange={(e) => setMaxResults(e.target.value)} type='range' step='1' min='1' max='20' value={maxResults} />
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
                OkHandle()
            }} className={style.modal__btn + ' ' + style.right} type="primary">Сохранить </Button>


        </div>
    )


}


export default HistoryForm;


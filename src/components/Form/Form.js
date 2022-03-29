import React, { useState } from 'react';
import { cities, sources } from '../../utils/constants';
import './Form.css';

function Form(props) {
  const [city, setCity] = useState('');
  const [source, setSource] = useState('');
  const [field, setField] = useState(true);

  function fieldOpen() {
    setField(!field);
  }

  const isField = field ? true : false

  const options = cities.map((text, index) => {
    return <option className="form__option" key={index}>{text.id} {text.name}</option>;
  });
  const items = sources.map((text, index) => {
    return <option className="form__option" key={index}>{text}</option>;
 });
  return (
    <form className='form'>
      <label className = 'input__label input__label_name' htmlFor='name'>Ваше имя *</label>  
        <input
          autoComplete="off"
          type="text"
          className="input__item input__item_name"
          placeholder="Иван"
          name="name"
          id="name"
          minLength='2'
          required
        />
      <label className = 'input__label input__label_tel' htmlFor='tel'>Номер телефона *</label>  
        <input
          autoComplete="off"
          type="tel"
          className="input__item input__item_tel"
          placeholder="+7 (000) 000-00-00"
          name="tel"
          id="tel"
          
          required
        />
      <label className = 'input__label input__label_email' htmlFor='email'>E-mail *</label>  
        <input
          autoComplete="off"
          type="email"
          className="input__item input__item_email"
          placeholder="example@skdesign.ru"
          name="email"
          id="email"
          required
        />
      <label className = 'input__label input__label_url' htmlFor='url'>Ссылка на профиль *</label>  
        <input
          autoComplete="off"
          type="url"
          className="input__item input__item_url"
          placeholder="instagram.com/skdesign"
          name="url"
          id="url"
          required
        />
      <select className = "form__city" placeholder="Выберите город" name="city" value={city} onChange={(event) => setCity(event.target.city)}>
        {options}
      </select>
      <label className = 'input__label input__label_org' htmlFor='org'>Название организации/студии *</label>  
        <input
          autoComplete="off"
          type="text"
          className="input__item input__item_org"
          placeholder="SK Design"
          name="org"
          id="org"
      />
      <div className = "form__field"><button type = "button" onClick = {fieldOpen} className = {`passive ${isField ? '' : 'active'}`}>{isField ? 'Показать дополнительные поля' : 'Скрыть дополнительные поля'}</button>
        <select className= {`form__source ${isField ? '' : 'form_open'}`} value={source} onChange={(event) => setSource(event.target.source)}>
        {items}
      </select>
        <label className={`input__label input__label_user ${isField ? '' : 'form_open'}`} htmlFor='user'>Получатель</label>  
        <input
          autoComplete="off"
          type="text"
          className={`input__item input__item_user ${isField ? '' : 'form_open'}`}
          placeholder="ФИО"
          name="user"
          id="user"
        /></div>
      <button className = "form__button form__button_active" type="submit">Отправить заявку</button>
    </form>
  )
}

export default Form;
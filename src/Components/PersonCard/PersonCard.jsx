import React from 'react';
import './PersonCard.css';

export const PersonCard = ({ personData }) => {

  return (
    <div id='contCard'>
      { personData ?
        (<div className="alert alert-primary" role="alert">
          <p> Выбран пользователь: <b>{ personData.firstName } { personData.lastname }</b></p>
          <p>Описание: </p>
          <div id='textarea'>
            <div>{ personData.description }</div>
          </div> <br />
          <p>Адрес проживания: <b>{ personData.address.zip }</b></p>
          <p> Город: <b>{ personData.address.city }</b></p>
          <p>Провинция/штат: <b>{ personData.address.state }</b></p>
          <p>Индекс: <b>{ personData.address.zip }</b></p>

        </div>
        ) : null

      }
    </div>
  );

};
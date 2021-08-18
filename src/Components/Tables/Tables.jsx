import React, { useState } from 'react';
import './Tables.css';
import { PersonCard } from '../PersonCard/PersonCard';

export const Tables = ({ data }) => {
  const [ sortDir, setSortDir ] = useState('');
  const [ sortedData, setSortedData ] = useState(data);
  const [ sortedField, setSortedField ] = useState('');
  const [ personData, setPersonData ] = useState(null);

  const onSort = (sortProps) => {


    setSortDir(sortDir === 'asc' ? 'desc' : 'asc');

    sortedData.sort((a, b) => {

      if(a[ sortProps ] < b[ sortProps ]) {
        return sortDir === 'asc' ? -1 : 1;
      }
      if(a[ sortProps ] > b[ sortProps ]) {
        return sortDir === 'asc' ? 1 : -1;
      }
      return 0;
    }
    );
    setSortedData(sortedData);
    setSortedField(sortProps);
  };

  const rowSelect = (el) => {
    setPersonData(el);
    console.log(personData);
  };


  console.log('table render');
  return (
    <div>
      <table className="table">

        <thead>
          <tr>
            <th onClick={ () => onSort('id') } >id
              {
                sortedField === 'id' ?
                  (sortDir === 'asc' ? <i className="bi bi-arrow-down"></i>
                    : <i className="bi bi-arrow-up"></i>)
                  : null
              }
            </th>
            <th onClick={ () => onSort('firstName') }>FirstName
              {
                sortedField === 'firstName' ?
                  (sortDir === 'asc' ? <i className="bi bi-arrow-down"></i>
                    : <i className="bi bi-arrow-up"></i>)
                  : null
              }
            </th>
            <th onClick={ () => onSort('lastname') }>LastName
              {
                sortedField === 'lastname' ?
                  (sortDir === 'asc' ? <i className="bi bi-arrow-down"></i>
                    : <i className="bi bi-arrow-up"></i>)
                  : null
              }
            </th>
            <th onClick={ () => onSort('email') }>email
              {
                sortedField === 'email' ?
                  (sortDir === 'asc' ? <i className="bi bi-arrow-down"></i>
                    : <i className="bi bi-arrow-up"></i>)
                  : null
              }
            </th>
            <th onClick={ () => onSort('phone') }>phone
              {
                sortedField === 'phone' ?
                  (sortDir === 'asc' ? <i className="bi bi-arrow-down"></i>
                    : <i className="bi bi-arrow-up"></i>)
                  : null
              }
            </th>
          </tr>
        </thead>
        { sortedData.map((item) =>

          <tbody key={ item.id + item.firstName }>
            <tr onClick={ () => rowSelect(item) } >
              <th scope="raw">{ item.id }</th>
              <td>{ item.firstName }</td>
              <td>{ item.lastname }</td>
              <td>{ item.email }</td>
              <td>{ item.phone }</td>
            </tr>

          </tbody>
        )
        }
      </table>
      <PersonCard personData={ personData } />
    </div>
  );
};
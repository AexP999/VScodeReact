import React, { useState } from 'react';
import './Tables.css';

export const Tables = ({ data }) => {
  const [ sortDir, setSortDir ] = useState('asc');
  const [ sortedData, setSortedData ] = useState(data);

  const onSort = (sortedField) => {

    setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    console.log('sortDir', sortDir);

    sortedData.sort((a, b) => {

      if(a[ sortedField ] < b[ sortedField ]) {
        return sortDir === 'asc' ? -1 : 1;
      }
      if(a[ sortedField ] > b[ sortedField ]) {
        return sortDir === 'asc' ? 1 : -1;
      }
      return 0;
    }
    );
    setSortedData(sortedData);
  };
  console.log('table render');
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={ () => onSort('id') } >id</th>
          <th onClick={ () => onSort('firstName') }>FirstName</th>
          <th onClick={ () => onSort('lastname') }>LastName</th>
          <th onClick={ () => onSort('email') }>email</th>
          <th onClick={ () => onSort('phone') }>phone</th>
        </tr>
      </thead>
      { sortedData.map((item) =>

        <tbody key={ item.id + item.firstName }>
          <tr >
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
  );
};
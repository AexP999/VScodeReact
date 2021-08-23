import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Tables.css';
import { PersonCard } from '../PersonCard/PersonCard';
import { Search } from '../Search/Search';
import { USERDATAARRAY, ELEMENTSPERPAGE } from '../constants';

export const Tables = ({ data }) => {
  const [ sortDir, setSortDir ] = useState('');
  const [ sortedData, setSortedData ] = useState(data);
  const [ sortedField, setSortedField ] = useState('');
  const [ personData, setPersonData ] = useState(null);
  const [ currentPage, setCurrentPage ] = useState(0);

  const pageCount = Math.ceil(sortedData.length / ELEMENTSPERPAGE);
  const lastElementInPage = (currentPage + 1) * ELEMENTSPERPAGE;
  const firstElementInPage = lastElementInPage - ELEMENTSPERPAGE;
  const currentElementsInPage = sortedData.slice(firstElementInPage, lastElementInPage);

  console.log('currentElementsInPage', currentElementsInPage);
  console.log('lastElementInPage', lastElementInPage);
  console.log('firstElementInPage', firstElementInPage);
  console.log('currentPage', currentPage);

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
  };

  const pageHandler = ({ selected }) => {
    setCurrentPage(selected);
  };

  const onSearch = (search) => {
    console.log(search);
  };


  console.log('table render');
  return (
    <div>
      <Search onSearch={ onSearch } />
      <table className="table">
        <thead>
          <tr>
            { USERDATAARRAY.map((item, i) =>
              <th key={ item + i } onClick={ () => onSort(item) } >{ item }
                {
                  sortedField === item ?
                    (sortDir === 'asc' ? <i className="bi bi-arrow-down"></i>
                      : <i className="bi bi-arrow-up"></i>)
                    : null
                }
              </th>) }
          </tr>
        </thead>
        { currentElementsInPage.map((item) =>
          <tbody key={ item.id + item.firstName }>
            <tr onClick={ () => rowSelect(item) } >
              <th scope="raw">{ item.id }</th>
              <td>{ item.firstName }</td>
              <td>{ item.lastname }</td>
              <td>{ item.email }</td>
              <td>{ item.phone }</td>
            </tr>
          </tbody>
        ) }
      </table>
      {
        data.length > ELEMENTSPERPAGE
          ? <ReactPaginate
            previousLabel={ 'prev' }
            nextLabel={ 'next' }
            breakLabel={ '...' }
            breakClassName={ 'break-me' }
            pageCount={ pageCount }
            marginPagesDisplayed={ 5 }
            pageRangeDisplayed={ 5 }
            onPageChange={ pageHandler }
            containerClassName={ 'pagination' }
            activeClassName={ 'active' }
            pageClassName="page-item"
            activeLinkClassName={ "page-link" }
            pageLinkClassName={ "page-link" }
            previousLinkClassName={ "page-link" }
            nextLinkClassName={ "page-link" }
            previousClassName={ "page-item" }
            nextClassName={ "page-item" }
            forcePage={ currentPage }
          />
          : null
      }

      <PersonCard personData={ personData } />
    </div>
  );
};
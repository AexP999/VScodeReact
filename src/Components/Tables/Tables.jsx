import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Tables.css';
import { PersonCard } from '../PersonCard/PersonCard';
import { Search } from '../Search/Search';
import { USERDATAARRAY, ELEMENTSPERPAGE } from '../constants';

export const Tables = ({ data }) => {
  const [ sortDir, setSortDir ] = useState('');         //Стейт направление сортировки
  const [ sortedData, setSortedData ] = useState(data); //Стейт отсортированные данные
  const [ sortedField, setSortedField ] = useState(''); //Стейт поле сортировки
  const [ personData, setPersonData ] = useState(null); //Данные для карточки юзера
  const [ currentPage, setCurrentPage ] = useState(0);  //текущая страниц пагинации
  const [ search, setSearch ] = useState('');   //поисковая фраза


  const getFilteredData = () => {   //ф-ия сортировки данных
    if(!search) {
      return sortedData;
    }
    return sortedData.filter(elem => {

      for(const iter of USERDATAARRAY) {
        if(elem[ iter ].toString().toLocaleLowerCase().includes(search.toLocaleLowerCase())) {  //приведение к нижнему регистру
          return elem;    //toString для цифр
        }
      }
    }
    );
  };


  const filteredData = getFilteredData(); //вызов ф-ии сортировки данных

  const pageCount = Math.ceil(filteredData.length / ELEMENTSPERPAGE); //количество страниц
  const lastElementInPage = (currentPage + 1) * ELEMENTSPERPAGE;    //номер последней строки на странице пагинации
  const firstElementInPage = lastElementInPage - ELEMENTSPERPAGE; //номер первой строки на странице пагинации

  const currentElementsInPage = filteredData.slice(firstElementInPage, lastElementInPage); // массив строк на странице пагинаций

  console.log('currentElementsInPage', currentElementsInPage);
  console.log('lastElementInPage', lastElementInPage);
  console.log('firstElementInPage', firstElementInPage);
  console.log('currentPage', currentPage);


  const onSort = (sortProps) => {       //ф-ия сортировки. пропс -по какому заголовку сортируем

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

  const rowSelect = (el) => {   //ф-ия выбор ряда для вывода данных юзера
    setPersonData(el);
  };

  const pageHandler = ({ selected }) => { //ф-ия при нажатии на страницу пагинации. Аргумент - текущая страница
    setCurrentPage(selected);
  };

  const onSearch = (search) => {  // ф-ия при нажатии на кнопку Search. Арг - фраза поиска
    setSearch(search);
    setCurrentPage(0);      // текущая страница ставится ноль, т.к. не известно, на какой странице мы были
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
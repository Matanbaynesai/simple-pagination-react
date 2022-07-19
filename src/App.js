import { useState } from 'react';
import './App.css';
import mockData from './MOCK_DATA.json';
import ReactPaginate from 'react-paginate';

function App() {

  const [data] =  useState(mockData.slice(0,50));
  const [pageNumber , setPageNumber] =  useState(0);
  console.log(data);
  const usersPerPage = 15;
  const pageVisited= pageNumber * usersPerPage;

  const displayUsers = data.slice(pageVisited,pageVisited + usersPerPage)
  .map(item => {
    return(
      <div className='container'>
      <p>{item.first_name}</p>
      <p>{item.last_name}</p>
      <p>{item.email}</p>
      </div>
    )
  })
  const pageCount = Math.ceil(data.length / usersPerPage);
  //react paginate contain an object call selected what we doin 
  // is distructuring this object ,
  // selected is the number of the page we want to move to
  const changePage = ({selected})=>{
    setPageNumber(selected)
  }
  return (
    <div className="App">
     {displayUsers}
     <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      pageCount={pageCount}
      onPageChange={changePage}
      //giving className to the elemnts
      containerClassName={"paginationBtn"}
      previousLinkClassName={"previousBtn"}
      nextLinkClassName={"nextBtn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
     />
    </div>
  );
}

export default App;

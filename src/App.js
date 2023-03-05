import { useState, useEffect } from 'react';
import DataTable from './components/table/dataTable.component';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  const [datas, setData] = useState([]);
  const [currentPage, setCurentPage] = useState(1);
  const userPerPage = 4;
  const lastIndex = currentPage*userPerPage;
  const firstIndex = lastIndex - userPerPage;
  const records = datas.sort((a, b) => a.name.localeCompare(b.name)).slice(firstIndex,lastIndex); 
  const nPages = Math.ceil(datas.length/userPerPage);
  const numbers = [...Array(nPages+1).keys()].slice(1);

  console.log(numbers);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then((data) => setData(data));
    }, [])

  return (

    <div className='App' >
      <DataTable data = {records} />
      <nav class="container d-flex align-items-center justify-content-center">
        <ul className='pagination'>
          <li className='page-item'>
              <a href='#' className='page-link' onClick={() => changePage()}>Prev</a>
          </li>

          {
            numbers.map(num => {
              return(
                <li className={`page-item ${currentPage === num ? 'active' : ''}`}>
                  <a href='#' className='page-link' onClick={() => changeCPage(num)}>{num}</a>
                </li>
              )
            })
          }

          <li className='page-item'>
              <a href='#' className='page-link' onClick={() => nextPage()}>Next</a>
          </li>
        </ul>
      </nav>
    </div>

  );
  function changePage(){
    if(currentPage > 1 ){
      setCurentPage(currentPage - 1)
    }
  }
  function changeCPage(id){
    setCurentPage(id);
  }
  function nextPage(){  
    if(currentPage < nPages){
      setCurentPage(currentPage + 1)
    }
  }
}

export default App;

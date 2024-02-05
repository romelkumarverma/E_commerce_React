import React from 'react';
import Table from 'react-bootstrap/Table';
import { Chart } from "react-google-charts";
import './Home.css'


export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

function Home() {
  return (
    <div >
      <div className='p-4 d-flex justify-content-around mt-3' style={{ marginLeft: "150px" }}>

        <div className='px-3 pt-2 pb-3 border shadow-sm w-25 ml-3'>
          <div className='text-center pb-1'>
            <h4>Retailers:</h4>
          </div>
          <div className=''>
            <h5>Total:</h5>
          </div>
        </div>

        <div className='px-3 pt-2 pb-3 border shadow-sm w-25 ' style={{ marginLeft: '30px', width: '350px' }}>
          <div className='text-center pb-1'>
            <h4>Shops</h4>
          </div>
          <div className=''>
            <h5>Total:</h5>
          </div>
        </div>

        <div className='px-3 pt-2 pb-3 border shadow-sm w-25' style={{ marginLeft: '30px' }}>
          <div className='text-center pb-1'>
            <h4>Users</h4>
          </div>
          <div className=''>
            <h5>Total:</h5>
          </div>
        </div>

        <div className='px-3 pt-2 pb-3 border shadow-sm w-25' style={{ marginLeft: '30px' }}>
          <div className='text-center pb-1'>
            <h4>Revenues</h4>
          </div>
          <div className=''>
            <h5>Total:</h5>
          </div>
        </div>

      </div>



      <div className='row'>
        <div div className='d-flex' style={{ marginTop: '80px', width: '600px', display: 'flex' }}  >
          <Chart
            chartType="LineChart"
            width="80%"
            height="200px"
            data={data}
            options={options}
          />
        </div>

        <div className='' style={{ marginTop: '80px', width: '300px' }}>
          <Table class='table'>
            <thead class="table-info">
              <tr>
                <th scope='col'>S.No</th>
                <th scope='col'>First</th>
                <th scope='col'>Last</th>
                <th scope='col'>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td >2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Kumar</td>
                <td>Verma</td>
                <td>abc</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Home








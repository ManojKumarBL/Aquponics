import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './pH.css'

class Table extends Component {
    render() { 

      return (
        <div class="jumbotron text-center"> 
          <h1>Dashboard Table</h1>  
          <div class="container mt-5">
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4">
        <table>
        <tr>
          <th>Serial_no</th>
          <th>Sensor Name</th>
          <th>Dashboard</th>
          
        </tr>
        <tr>
          <td>1</td>
          <td>pH of Water</td>
          <Link to="/phsensor">
          <td> pH Dashboard</td>
          </Link>
        </tr>
        <tr>
          <td>2</td>
          <td>Terbidity</td>
          <Link to="/terbidity">
          <td>Terbidity Dashboard</td>
          </Link>
          </tr>
        <tr>
          <td>3</td>
          <td>Water Temperature </td>
          <Link to="/watertemperature">
          <td>Water Temperature Dashboard</td>
          </Link>
          
        </tr>
        <tr>
          <td>4</td>
          <td>Water Pressure </td>
          <Link to="/waterpressure">
          <td>Wateer Pressure Dashboard</td>
          </Link>
          
        </tr>
      </table>
      </div>
      <div class="col-md-4"></div>
      </div>
      </div>
      </div>
      )

   }

}

export default Table 
import React from 'react';
import BarChart from './BarChart';


const data = [
  {year: 2000,  sales: Math.floor(Math.random() * 8778000)},
  {year: 2001,  sales: Math.floor(Math.random() * 1352000)},
  {year: 2002,  sales: Math.floor(Math.random() * 2442000)},
  {year: 2003,  sales: Math.floor(Math.random() * 6778000)},
  {year: 2004,  sales: Math.floor(Math.random() * 5778000)},
  {year: 2005,  sales: Math.floor(Math.random() * 3778000)},
  {year: 2006,  sales: Math.floor(Math.random() * 8778000)},
  {year: 2007,  sales: Math.floor(Math.random() * 5778000)},
  {year: 2008,  sales: Math.floor(Math.random() * 3778000)},
  {year: 2009,  sales: Math.floor(Math.random() * 9778000)},
  {year: 2010,  sales: Math.floor(Math.random() * 7778000)},
  {year: 2011,  sales: Math.floor(Math.random() * 5778000)},
  {year: 2012,  sales: Math.floor(Math.random() * 6778000)},
  {year: 2013,  sales: Math.floor(Math.random() * 2778000)},
  {year: 2014,  sales: Math.floor(Math.random() * 3778000)},
  {year: 2015,  sales: Math.floor(Math.random() * 8678000)},
  {year: 2016,  sales: Math.floor(Math.random() * 6778000)},
  {year: 2017,  sales: Math.floor(Math.random() * 7778000)},
]
function random() {
    console.log("called")
   window.location.reload(true)
}
function RenderBchart() {
  
    return (
      <div className="rbchart">
        <header className="rbchart-header">
            <div id='randomer' onClick={random}>
          <BarChart data={data} />
          </div>
        </header>
      </div>
    );
  }
  
  export default RenderBchart;
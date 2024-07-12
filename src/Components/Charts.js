// import { type } from '@testing-library/user-event/dist/type';
import { name } from 'plotly.js/lib/bar';
import React from 'react'
import Plot from 'react-plotly.js';

const Charts = () => {
    const data1 =  [
        {
          x: ['2000-01-01', '2000-01-02', '2000-01-03', '2000-01-04', '2000-01-05', '2000-01-06', '2000-01-07', '2000-01-08', '2000-01-09', '2000-01-10', '2000-01-11', '2000-01-12', '2000-01-13', '2000-01-14', '2000-01-15', '2000-01-16', '2000-01-17', '2000-01-18', '2000-01-19', '2000-01-20', '2000-01-21', '2000-01-22', '2000-01-23', '2000-01-24', '2000-01-25', '2000-01-26', '2000-01-27', '2000-01-28', '2000-01-29', '2000-01-30', '2000-01-31'],
          y: [4.3, 8.2, 4.1, 5.6, -3, -0.2, 0.3, 0.4, 4.1, 5, 0,0,0,0, -17, -11.3, -5.5, -6.5, -16.9, -12, -6.1, -6.6, -7.9, 0,0,0,5, -1.3, -1.1],
          type: 'scatter',
          mode: 'lines',
          marker: {color: 'blue'},
          name:'sum of status2',
          yaxis: 'y2',
        },
        {type: 'bar', x: ['2000-01-01', '2000-01-02', '2000-01-03', '2000-01-04', '2000-01-05', '2000-01-06', '2000-01-07', '2000-01-08', '2000-01-09', '2000-01-10', '2000-01-11', '2000-01-12', '2000-01-13', '2000-01-14', '2000-01-15', '2000-01-16', '2000-01-17', '2000-01-18', '2000-01-19', '2000-01-20', '2000-01-21', '2000-01-22', '2000-01-23', '2000-01-24', '2000-01-25', '2000-01-26', '2000-01-27', '2000-01-28', '2000-01-29', '2000-01-30', '2000-01-31'], y: [4.3, 8.2, 4.1, 5.6, -3, -0.2, 0.3, 0.4, 4.1, 5, 4.6, -0.2, -8.5, -9.1, -2.7, -2.7, -17, -11.3, -5.5, -6.5, -16.9, -12, -6.1, -6.6, -7.9, -10.8, -14.8, -11, -4.4, -1.3, -1.1], marker: {color: '#0a8bd5'}, name:'sum of late fees'},
      ];

      var layout1 = {
        margin: {t:0,r:100,b:0,l:200},

        xaxis:{
          automargin: true,
          type:'date',
          ticks: '',
          showtick: false,
        tickangle: 0,
        title: {
          text: "Month",
          standoff: 20
        }
        },
        yaxis:{
            showgrid: true,
            ticks:'',
            title: 'Sum of late fees',
            
        },

        yaxis2: {
          title: 'sumo of status 2',
        
          overlaying: 'y',
          side: 'right'
        }
        
      };

      const data2 =  [
        {
          x: ['December 2023', 'January 2024', 'February 2020',],
          y: [4.7, 16.5, 9  ],
          type: 'scatter',
          mode: 'lines',
          marker: {color: 'blue'},
          name:'sum of Total ITC for tax',
          yaxis: 'y2',
        },
        {type: 'scatter', mode:'lines', x: ['December 2023', 'January 2024', 'February 2020'], y: [6,15.7,10], marker: {color: 'red'}, name:'sum of total Tax'},
      ];

      var layout2 = {
        margin: {t:100,r:100,b:0,l:100},
        title:'Sum of Total ITC for tax and Sum of Total tax by year and  month',
        width:1300,
        height:500,
      

        xaxis:{
          automargin: true,
          
          // type:'date',
          // ticks: '',
          // showtick: false,
        // tickangle: 0,
        title: {
          text: "Month",
          standoff: 20
        }
        },
        yaxis:{
            showgrid: true,
            ticks:'',
            title: 'Sum of late fees',
            range:[4,20]
            
        },

        yaxis2: {
          title: 'sumo of status 2',
        
          overlaying: 'y',
          side: 'right',
          range:[4,20],
        }
        
      };
      
      const config = {displayModeBar: false};
  return (
    <div className=''>

      <Plot
        data={data1}
        layout={layout1}
        config={config}
      />
      <br/>
      <Plot
      data={data2}
      layout={layout2}
      config={config}
      />
    </div>
  )
}

export default Charts
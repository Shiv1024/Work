import React from 'react'
import Plot from 'react-plotly.js';
const AmountCountGraph = () => {
    const data1 =  [
        {
          x: ['Asset Loan', 'Business Loan', 'Credit Card', 'Other', 'Personal Loan', 'Working Capital Limit', 'Total'],
          y: [1,9,0,3,0,0,13],
          type: 'bar',
        //   mode: 'lines',
        //   marker: {color: 'blue'},
          name:'Guarantor',
        //   yaxis: 'y2',
        },
        {type: 'bar', x: ['Asset Loan', 'Business Loan', 'Credit Card', 'Other', 'Personal Loan', 'Working Capital Limit', 'Total'],
             y: [2,1,5,0,0,2,10],
            //   marker: {color: '#0a8bd5'},
               name:'individual'
            },

            {type: 'bar', x: ['Asset Loan', 'Business Loan', 'Credit Card', 'Other', 'Personal Loan', 'Working Capital Limit', 'Total'],
                y: [4,17,0,1,1,0,23],
                //  marker: {color: '#0a8bd5'},
                  name:'Joint'
               },

               {type: 'bar', x: ['Asset Loan', 'Business Loan', 'Credit Card', 'Other', 'Personal Loan', 'Working Capital Limit', 'Total'],
                y: [7,27,5,4,1,2,46],
                //  marker: {color: '#0a8bd5'},
                  name:'Total'
               },
      ];

      var layout1 = {
        margin: {t:0,r:0,b:80,l:50},
        barmode:'group',
        xaxis:{
        //   automargin: true,
        //   type:'date',
        //   ticks: '',
        //   showtick: false,
        // tickangle: 0,
        title: {
          text: "Category",
          standoff: 20
        }
        },
        // yaxis:{
        //     showgrid: true,
        //     ticks:'',
        //     title: 'Sum of late fees',
            
        // },

        // yaxis2: {
        //   title: 'sumo of status 2',
        
        //   overlaying: 'y',
        //   side: 'right'
        // }
        
      };

      const config = {displayModeBar: false};
  return (
    <div className='relative ml-96 pl-20'>
        <Plot
        data={data1}
        layout={layout1}
        config={config}
      />
    </div>
  )
}

export default AmountCountGraph
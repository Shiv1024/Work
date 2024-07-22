import React from 'react'
import Plot from 'react-plotly.js';
const AmountGraph = () => {
    const data1 =  [
        {
          x: ['Asset Loan', 'Business Loan', 'Credit Card', 'Other', 'Personal Loan', 'Working Capital Limit', 'Total'],
          y: [0,
            20975727,
            0,
            32697507,
            0,
            0,
            53673234,
            ],
          type: 'bar',
        //   mode: 'lines',
        //   marker: {color: 'blue'},
          name:'Guarantor',
        //   yaxis: 'y2',
        },
        {type: 'bar', x: ['Asset Loan', 'Business Loan', 'Credit Card', 'Other', 'Personal Loan', 'Working Capital Limit', 'Total'],
             y: [138995,
                241130,
                295573,
                0,
                0,
                4648951,
                5324649,
                ],
            //   marker: {color: '#0a8bd5'},
               name:'individual'
            },

            {type: 'bar', x: ['Asset Loan', 'Business Loan', 'Credit Card', 'Other', 'Personal Loan', 'Working Capital Limit', 'Total'],
                y: [25201594,
                    23297718,
                    0,
                    22661349,
                    513637,
                    0,
                    71674298,
                    ],
                //  marker: {color: '#0a8bd5'},
                  name:'Joint'
               },

               {type: 'bar', x: ['Asset Loan', 'Business Loan', 'Credit Card', 'Other', 'Personal Loan', 'Working Capital Limit', 'Total'],
                y: [25340589,
                    44514575,
                    295573,
                    55358856,
                    513637,
                    4648951,
                    130672181,
                    ],
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

export default AmountGraph
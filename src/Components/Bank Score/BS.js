import React from 'react'
import Sidebar from '../Sidebar2';
import Plot from 'react-plotly.js';
import { useNavigate } from 'react-router-dom';

const BS = () => {
    const navigate = useNavigate();
    const dataChart = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: 1318,
            title: { text: "Bank Statement" },
            type: "indicator",
            mode: "gauge+number",
            delta: { reference: 400 },
            gauge: { axis: { range: [null, 2000] } }
        }
    ];

    const factor1 = [
        {
            type: "indicator",
            mode: "number+gauge+delta",
            gauge: { bar: { color: "red" }, shape: "bullet" },
            value: 88,
            domain: { x: [0, 1], y: [0, 1] },
            title: { text: "Detrimental Factors" }
        }
    ];

    const factor2 = [
        {
            type: "indicator",
            mode: "number+gauge+delta",
            gauge: { shape: "bullet" },
            value: 158,
            domain: { x: [0, 1], y: [0, 1] },
            title: { text: "Engagement" }
        }
    ];

    const factor3 = [
        {
            type: "indicator",
            mode: "number+gauge+delta",
            gauge: { shape: "bullet" },
            value: 423,
            domain: { x: [0, 1], y: [0, 1] },
            title: { text: "Prudence" }
        }
    ];

    const factor4 = [
        {
            type: "indicator",
            mode: "number+gauge+delta",
            gauge: { shape: "bullet" },
            value: 390,
            domain: { x: [0, 1], y: [0, 1] },
            title: { text: "Frequency" }
        }
    ];

    const factor5 = [
        {
            type: "indicator",
            mode: "number+gauge+delta",
            gauge: { shape: "bullet" },
            value: 445,
            domain: { x: [0, 1], y: [0, 1] },
            title: { text: "XNS Behaviour" }
        }
    ];

    const layout = { width: 800, height: 400, margin: { l: 200 } };
    const layoutFactor = { width: 900, height: 210, margin: { l: 250, pad: 10 } };
    const config = { displayModeBar: false };

    return (
        <div className="flex">
            <div className='flex-none'>
                <Sidebar />
            </div>
            <div className='ml-80'>
                <div className="">
                    <Plot
                        data={dataChart}
                        layout={layout}
                        config={config}
                    />
                </div>
                <div>
                    <div className="my-0 py-0 hover:cursor-pointer">
                        <Plot
                            data={factor1}
                            layout={layoutFactor}
                            config={config}
                        />
                    </div>
                    <div className='my-0 py-0 hover:cursor-pointer'>
                        <Plot
                            data={factor2}
                            layout={layoutFactor}
                            config={config}
                        />
                    </div>
                    <div className="my-0 py-0 hover:cursor-pointer">
                        <Plot
                            data={factor3}
                            layout={layoutFactor}
                            config={config}
                        />
                    </div>
                    <div className="my-0 py-0 hover:cursor-pointer">
                        <Plot
                            data={factor4}
                            layout={layoutFactor}
                            config={config}
                        />
                    </div>
                    <div className="my-0 py-0 hover:cursor-pointer">
                        <Plot
                            data={factor5}
                            layout={layoutFactor}
                            config={config}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BS

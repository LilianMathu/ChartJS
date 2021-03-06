import React, { Component } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';

export default class Chart extends Component {
    constructor(props) {  //is a function that run when the component is initialized
        super(props);
        this.state = {
            chartData: {
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        };



    };

    //set default props
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: "right"
    };

    render() {
        return (
            <div>
                <div className="chart">
                    <Bar
                        data={this.state.chartData}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                text: "Largest cities in Massachusetts",
                                fontSize: 25
                            },

                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}

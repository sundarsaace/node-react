import React, { Component } from "react";
import Highcharts from 'highcharts';

class LineChart extends Component{
    constructor(props){
        super(props)
        this.initCharts = this.initCharts.bind(this);
    }
    initCharts(chartsData){
        Highcharts.chart('chart-container', {

            title: {
                text: 'Solar Employment Growth by Sector, 2010-2016'
            },
        
            subtitle: {
                text: 'Source: thesolarfoundation.com'
            },
        
            yAxis: {
                title: {
                    text: 'Number of Employees'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },
        
            series: chartsData,
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });
    }

    componentDidMount(){
       fetch('api/getChartsData')
       .then(resp => resp.json())
       .then(resp => {
        this.initCharts(resp.data);
       })
      
    }

    render(){
        return (
            <div id="chart-container" className="chart-container"></div>
        )
    }
}

export default LineChart;
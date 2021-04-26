import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import API_URLS from '../../config/api-urls/apis'
import { getOverallStats, getChartData } from '../../utils/utils-functions'
import ResultTable from '../../components/search-result/result-table'
import AboutUs from '../../components/about-us'
import StackedColumnChart from '../../components/charts/stacked-columns-charts'
import Info from '../../components/info'
// import Loader from 'react-loader'

import HomeSection from '../../components/home-section'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
            overallstats: null,
            chartdata: null
        }
    }


    componentDidMount() {
        fetch(API_URLS.v1.getCovidData).then(response => response.json()).then((repos) => {
            this.setState({
                overallstats: getOverallStats(repos),
                data: repos.sort((a, b) => (Number(a.sno) > Number(b.sno)) ? 1 : ((Number(b.sno) > Number(a.sno)) ? -1 : 0)),
                chartdata: getChartData(repos)

            });
        });

    }


    render() {
        return (
            <>
                <Header />
                <HomeSection overallstats={this.state.overallstats} />
                {this.state.data !== null ? <ResultTable id='results' data={this.state.data} /> : null}
                <StackedColumnChart chartdata={this.state.chartdata} />
                <AboutUs />
                <Info />
                <Footer />
            </>
        )
    }
}

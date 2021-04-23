import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import API_URLS from '../../config/api-urls/apis'
import { getOverallStats } from '../../utils/utils-functions'
import ResultTable from '../../components/search-result/result-table'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
            overallstats: null
        }
    }


    componentDidMount() {
        fetch(API_URLS.v1.getCovidData).then(response => response.json()).then((repos) => {
            this.setState({
                overallstats: getOverallStats(repos),
                data: repos

            });
        });

    }


    render() {
        return (
            <>
                <Header />
                <div className='box'>
                    <div className='columns'>

                        <div className='column has-text-centered'>
                            Total Cases
                                <div>
                                {this.state.overallstats != null ? this.state.overallstats.totalcases : null}
                            </div>
                        </div>
                        <div className='column has-text-centered'>
                            Total Recovered
                                <div>
                                {this.state.overallstats != null ? this.state.overallstats.totalrecovered : null}
                            </div>
                        </div>
                        <div className='column has-text-centered'>
                            Total Deaths
                                <div>
                                {this.state.overallstats != null ? this.state.overallstats.totaldeaths : null}
                            </div>
                        </div>

                    </div>

                </div>
                {this.state.data !== null ?

                    <ResultTable data={this.state.data} />

                    : null}
                <Footer />
            </>
        )
    }
}

import React, { Component } from 'react'
import SearchResultRow from './index.js'
import './index.css'

export default class ResultTable extends Component {
  render() {
    return (
      <section id='results' className='section results_section_bg'>
        <div className="hero-body">
          <h1 className='title'> Results</h1>
          <h2 className='subtitile'>Below table shows the statistics statewise accross india</h2>
          <div className='columns'>          
            <div className='column is-three-quarters'>
              <div className='table-conatiner'>
                <table className="table is-bordered is-striped is-narrow has-text-left p-1">
                  <thead>
                    <tr className=''>
                      <th><abbr title="Pos">Pos</abbr></th>
                      <th><abbr title="Statename">State Name</abbr></th>
                      <th><abbr title="Active">Active</abbr></th>
                      <th><abbr title="Positive">Positive</abbr></th>
                      <th><abbr title="Cured">Cured</abbr></th>
                      <th><abbr title="Death">Death</abbr></th>                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.props.data.map(element => {
                        if (element.state_name !== "") {
                          return <SearchResultRow data={element} />
                        }
                        else
                          return null;
                      })
                    }
                  </tbody>

                </table>
              </div>
            </div>
           
          </div>
        </div>
      </section>

    )
  }
}

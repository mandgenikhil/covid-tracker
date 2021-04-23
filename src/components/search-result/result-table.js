import React, { Component } from 'react'
import SearchResultRow from './index.js'

export default class ResultTable extends Component {
  render() {
    return (
      <div className='columns'>
        <div className='column'>

        </div>
        <div className='column'>
          <table className="table is-bordered is-striped is-narrow has-text-centered">
            <thead>
              <tr>
                <th><abbr title="Pos">Pos</abbr></th>
                <th>State Name</th>
                <th><abbr title="Active">Active</abbr></th>
                <th><abbr title="Positive">Positive</abbr></th>
                <th><abbr title="Cured">Cured</abbr></th>
                <th><abbr title="Death">Death</abbr></th>
                <th><abbr title="New Active">New Active</abbr></th>
                <th><abbr title="New Positive">New Positive</abbr></th>
                <th><abbr title="New Cured">New Cured</abbr></th>
                <th><abbr title="New Death">New Death</abbr></th>
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
        <div className='column'>

        </div>
      </div>
    )
  }
}

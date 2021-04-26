import React, { Component } from 'react'

export default class SearchResult extends Component {


    render() {
        return (

            <tr className='is-size-7'>
                <td>{this.props.data.sno}</td>
                <td>{this.props.data.state_name}</td>
                <td>{this.props.data.active}</td>
                <td>{this.props.data.positive}</td>
                <td>{this.props.data.cured}</td>
                <td>{this.props.data.death}</td>                
            </tr>


        )
    }
}

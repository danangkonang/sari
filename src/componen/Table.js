import React, { Component } from 'react'
const $ = require('jquery')
$.Datatable = require('datatables.net')
export default class Tbl extends Component {
    componentDidMount() {
        this.$el = $(this.el)
        this.$el.DataTable(
            {
                data: this.props.data,
                columns: [
                    {title:"No"},
                    {title:"Nama"},
                    {title:"Sumbangan"}
                ]
            }
        )
    }

    render() {
        return (
            <table className="table table-striped table-bordered dt-responsive nowrap" width="100%" ref={el => this.el = el} >
            </table>
        )
    }
}
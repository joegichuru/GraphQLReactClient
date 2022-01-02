import React, {Component} from 'react';
import {graphQLRequest} from "./request";
import {Queries} from "./queries";
import {JobList} from "./JobList";

export class CompanyDetail extends Component {
    constructor(props) {
        super(props);
        const {companyId} = this.props.match.params;
        this.state = {company: null, companyId: companyId};
    }

    componentDidMount() {
        graphQLRequest(Queries.company, {id: this.state.companyId})
            .then(data => {
                this.setState({company: data.company})
            }).catch(error => {

        })
    }

    render() {
        const {company} = this.state;
        if (!company) {
            return null
        }
        return (
            <div>
                <h1 className="title">{company.name}</h1>
                <div className="box">{company.description}</div>
                <h5 className="title is-5">Jobs at {company.name}</h5>
                <JobList jobs={company.jobs}/>
            </div>
        );
    }
}

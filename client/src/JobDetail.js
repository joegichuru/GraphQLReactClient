import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {graphQLRequest} from "./request";
import {Queries} from "./queries";

export class JobDetail extends Component {
  constructor(props) {
    super(props);
    const {jobId} = this.props.match.params;

    this.state = {job: null,jobId:jobId};
  }
componentDidMount() {
      graphQLRequest(Queries.job,{id:this.state.jobId})
          .then(data=>{
              this.setState({job:data.job})
          }).catch(error=>{
      })
}

    render() {
    const {job} = this.state;
    if(!job){
        return null
    }
    return (
      <div>
        <h1 className="title">{job.title}</h1>
        <h2 className="subtitle">
          <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
        </h2>
        <div className="box">{job.description}</div>
      </div>
    );
  }
}

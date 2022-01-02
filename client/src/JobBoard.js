import React, { Component } from 'react';
import { JobList } from './JobList';
import {graphQLRequest} from "./request";
import {Queries} from "./queries";
export class JobBoard extends Component {
    constructor(props) {
        super(props);
        this.state={
            jobs:[],
            loading:false,
            error:null
        }
    }
    componentDidMount() {
        this.setState({loading:true})
        graphQLRequest(Queries.jobs).then(data=>{
            this.setState({jobs:data.jobs})
        }).catch(error=>{
           this.setState({error:error})
        }).finally(()=>{
            this.setState({loading:false})
        })
    }

    render() {
    return (
      <div>
        <h1 className="title">Job Board</h1>
        <JobList jobs={this.state.jobs} />
          {this.state.loading&&    <p style={{
              alignSelf:'center',
              fontSize:25,
              textAlign:'center'
          }}>Loading...</p>}
          {
              this.state.error&& <span className={'has-background-danger'} style={{
                  color:'white',
                  padding:10,
                  alignSelf:'center',
                  justifyContent:'center',
                  borderRadius:5
              }}>{this.state.error.message}</span>
          }
      </div>
    );
  }
}

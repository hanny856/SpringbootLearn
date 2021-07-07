import React, {Component , useState } from 'react';
import '../../CSS/Dashboard.css';
class DeptAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            deptno: '', 
            dname :'',
            loc : '',
        };
        this.handleInputData = this.handleInputData.bind(this);
    }
    dataSubmit=(e) =>{
        e.preventDefault();
        const data={
                "dname" : e.target.dname.value,
                "loc" : e.target.loc.value
            };
        this.props.addApi(data);
        document.getElementsByName('dname')[0].value="";
        document.getElementsByName('loc')[0].value="";

    }
    handleInputData(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name] : value
        })
    }
    render(){
        return(
            <div className="container">
            <form onSubmit={this.dataSubmit}> 
                <input placeholder="부서" name="dname" type="text" onChange={this.handleInputData}></input>
                <input placeholder="지역" name="loc" type="text" onChange={this.handleInputData}></input>
                <button type="submit">추가</button>
            </form>
            
        </div>
        );
    }
}

export default DeptAdd;
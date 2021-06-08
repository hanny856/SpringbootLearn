import React, {Component} from 'react';
import DeptInfo from './DeptInfo';
import SearchForm from './SearchForm';
import './CSS/Dashboard.css';
import DeptAdd from './DeptAdd';

class DeptList extends Component {
    delApi = (data) =>{
        this.props.delApi(data);
    }
    addApi = (data)=>{
        this.props.addApi(data);
    }
    static defaultProps={
        data: []
    }
    render(){
        const { data } = this.props;
        const list = data.map(
            dept => (<DeptInfo key={dept.deptno} dept={dept} delApi = {this.delApi} />)
        ); 
        return(
            <div>
                <DeptAdd addApi={this.addApi}/>
                {list}
            </div>
        );
    }
}

export default DeptList;
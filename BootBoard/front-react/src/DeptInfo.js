import React, {Component} from "react";
import './CSS/Dashboard.css';

class DeptInfo extends Component {
    static defaultProps={
        dept: {
            deptno: 0,
            dname: '부서명',
            loc: '지역명'
        }
    }
    delete=(data)=>{
        this.props.delApi(data);
    }
    render(){
        const style ={
            border: '1px solid black',
            padding: '9px',
            margin: '9px'
        };
        const{
            deptno, dname, loc
        } = this.props.dept;
        return(
            
            <div>
                <div style={style} className="box">
                    <div><b>{dname}</b></div>
                    <div>{loc}</div>
                    <button onClick={this.delete.bind(this,deptno)}>삭제</button>
                </div>
            </div>
        );
    }

}

 export default DeptInfo
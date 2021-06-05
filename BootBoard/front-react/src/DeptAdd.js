import React, {Component} from 'react';
import './CSS/Dashboard.css';
class DeptAdd extends Component {
    render(){
        return(
            <div className="container">
            <form>
                <input placeholder="번호" name="deptno" type="text"></input>
                <input placeholder="부서" name="dname" type="text"></input>
                <input placeholder="지역" name="loc" type="text"></input>
                <button className="">추가</button>
            </form>
            
        </div>
        );
    }
}

export default DeptAdd;
import React, {Component} from "react";
import axios from "axios";
import DeptList from './DeptList';
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class MainComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: "",
            sourceList:[
                {
                    deptno: 10,
                    dname:'ACCOUNTING',
                    loc:'NEW YORK'
                }
            ]
        }
    }

    componentDidMount(){
        this.getApi();
    }
    addApi=(data)=>{
        axios.add("http://localhost:8090/board/add", {
            params:{
                deptno: data,
                dname:data,
                loc:data
            }
        })
            .then(res=>{
                this.setState({
                    sourceList: res.data
                })
            })
            .catch(res => console.log(res))
    }
    delApi=(data)=>{
        axios.delete("http://localhost:8090/board/del", {
            params:{
                deptno: data
            }
        })
            .then(res=>{
                this.setState({
                    sourceList: res.data
                })
            })
            .catch(res => console.log(res))
    }
    getApi = () => {
        axios.get("http://localhost:8090/board/list")
            .then(res=>{
                this.setState({
                    message: res.data.message,
                    sourceList: res.data.message
                })
                console.log(this.state.sourceList);
            })
            .catch(res => console.log(res))
    }
    handleCreate = (data) => {
        const { sourceList } = this.state;
        this.setState({
            sourceList: sourceList.concat({deptno: this.deptno++, ...data })
        })
    }

    render(){
       return(
           <div>
               <DeptList data = {this.state.sourceList} delApi = {this.delApi} addApi={this.addApi}/>
           </div>
       );
    }

}

 export default MainComponent
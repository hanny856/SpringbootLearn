import React, {Component} from "react";
import axios from "axios";

class MainComponent extends Component {
    deptno=40;
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
        const { sourceList } = this.state;
        return(
            <div>
                <form onCreate={this.handleCreate}>
                    <input
                    placeholder="부서이름"
                    value={this.state.dname}
                    />
                    <input
                    placeholder="지역"
                    value={this.state.loc}
                    />
                </form>
                {JSON.stringify(sourceList)}
            </div>
            
        )
    }

}

 export default MainComponent
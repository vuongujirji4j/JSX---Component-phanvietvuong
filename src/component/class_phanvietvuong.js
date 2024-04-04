import react, {component} from "react";
class class_phanvietvuong extends component{
    constructor(props){
        super(props);
        this.this.state={
            fullname:"phan viet vuong",
            class:"k22cntt"
        }
    }
    users ={
        name:"phan viet vuong",
        age:20
    }
    handlechange=(event)=>{
        this.setstate({
            fullname:"chach"
        })
    }
    render(){
        return (
            <div>
                <h1>this is class component</h1>
                {users.name}-{this.users.age}
                <h2>hello {this.props.username}!wellcome to {this.props.name}</h2>
              <hr/>
              <h3>info:{this.props.info}</h3>
              <h3>time:{this.props.time}</h3>
             <hr/>
             <h3>state:
                fullname: {this.state.fullname} _
                class: {this.state.class}

             </h3>
             <button onClick={this.handlechange}>change name</button>
            </div>
        );
    }
}
export default class_phanvietvuong;
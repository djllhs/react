var A=React.createClass({
    render:function(){
        return (
            <div>{this.props.data.a}</div>
        )
    }
})
var B=React.createClass({
    getInitialState(){
        return{
            a:1,
            b:2,
            c:3
        }
    },
    render(){
      return(
          <div>qqq</div>
      )
    }
})
ReactDOM.render({
    <B/>,
        document.getElementById("container")
})
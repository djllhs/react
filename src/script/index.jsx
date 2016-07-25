class FormBox extends React.Component{
    handleClick(){
       alert(1);
        //var username=this.refs.username.value.trim();
        //var pwd=this.refs.pwd.value.trim();
        //if(!username && !pwd){
        //    alert(username);
        //    return;
        //}
        //this.refs.username.value="";
        //this.refs.pwd.value="";
    }
    render(){
        return(
            <form className="formBox">
                <div>
                    <label>用户名：</label>
                    <input type="text" ref="username"/>
                </div>
                <div>
                    <label>密码</label>
                    <input type="password" ref="pwd"/>
                </div>
                <input type="button" value="登陆" onClick={this.handleClick}/>
            </form>
        );
    }
}
React.render(
    <FormBox/>,
    document.getElementById("container")
)
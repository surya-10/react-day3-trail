import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

    let navigate = useNavigate();

    function change(){
        setShow(!show);
        let angle = document.querySelector(".angle");
        console.log(angle.className)
        if(angle.className=="fa-solid fa-angle-right angle"){
            angle.className="fa-solid fa-angle-down angle";
        }
        else{
            angle.className="fa-solid fa-angle-right angle";
        }
    }
    function changing(){
        setShow2(!show2);
        let angle = document.querySelector(".angle2");
        console.log(angle.className)
        if(angle.className=="fa-solid fa-angle-right angle2"){
            angle.className="fa-solid fa-angle-down angle2";
        }
        else{
            angle.className="fa-solid fa-angle-right angle2";
        }
    }
    function changing2(){
        setShow3(!show3);
        let angle = document.querySelector(".angle3");
        console.log(angle.className)
        if(angle.className=="fa-solid fa-angle-right angle3"){
            angle.className="fa-solid fa-angle-down angle3";
        }
        else{
            angle.className="fa-solid fa-angle-right angle3";
        }
    }
    function showLeftBar(){
        let left = document.querySelector(".left-menu");
        console.log(left.className)
        if(left.className==="left-menu"){
            left.className+=" left-menu1";
        }
        else{
            left.className="left-menu";
        }
    }
    let [show, setShow] = useState(false);
    let [show2, setShow2] = useState(false);
    let [show3, setShow3] = useState(true);
    return (
        <div className="base-div">
            <div className="inner-div">
            <div className="menu">
            <div className="left-menu">
            
                <h4 className="h4"><i class="fa-sharp fa-solid fa-face-smile smile"></i><span>SB ADMIN <sup>2</sup></span></h4>
                <button className="dashboard-btn" onClick={()=>navigate("/")}><i class="fa-solid fa-gauge-high"></i><span>Dashboard</span></button>
                <div className="interfaces">
                    <p className="inter">Interface</p>
                    <h4 onClick={change} className="settings"><i class="fa-solid fa-gear gear"></i><small>Component</small><i class="fa-solid fa-angle-right angle"></i></h4>
                    <div className="inter-parent">
                    <div className="components">
                        
                        {show && (<div className="components-child">
                        <p>Custom components</p>
                        <button onClick={()=>navigate("/buttons")}>Buttons</button>
                        <button onClick={()=>navigate("/cards")}>Cards</button>
                        </div>
                        )}
                        
                    </div>
                    </div>
                    
                    <div className="utilities settings">
                        <h4 onClick={changing}><i class="fa-solid fa-wrench wrench"></i>utilities<i class="fa-solid fa-angle-right angle2"></i></h4>
                        <div className="inter-parent2">
                        <div className="components">
                        
                        {show2 && (<div className="components-child utility-comp">
                        <p>Custom utilities</p>
                        <button onClick={()=>navigate("/colors")}>Colors</button>
                        <button onClick={()=>navigate("/borders")}>Borders</button>
                        <button onClick={()=>navigate("/animation")}>Animations</button>
                        <button onClick={()=>navigate("/others")}>Others</button>
                        </div>
                        )}
                        
                    </div>
                    
                    </div>
                    </div>

                </div>
                <div className="add-ons">
                <p className="inter">ADDONS</p>
                
                <div className="utilities settings add-on-utility">

                        <h4 onClick={changing2}><i class="fa-solid fa-wrench wrench"></i>Pages<i class="fa-solid fa-angle-right angle3"></i></h4>
                        <div className="inter-parent2">
                        <div className="components">
                        
                        {show3 && (<div className="components-child ch2">
                        <p>Custom utilities</p>
                        <button onClick={()=>navigate("/login")}>Login</button>
                        <button onClick={()=>navigate("/register")}>Register</button>
                        <button onClick={()=>navigate("/reset")}>Forgot Password</button>
                        <p className="inter">OTHER PAGES</p>
                        <button onClick={()=>navigate("/nopage")}>404 Page</button>
                        <button onClick={()=>navigate("/blank")}>Blank Page</button>
                        </div>
                        )}
                        
                    </div>
                    </div>
                    
                    </div>
                    <div className="table-nav settings">
                        <button onClick={()=>navigate("/table")}><i class="fa-solid fa-table"></i>Table</button>
                    </div>
                    </div>
               
            </div>
            <div className="nav">
                <div className="nav-search">
                <div className="search">
                <i class="fa-solid fa-bars bars" onClick={showLeftBar}></i>
                <input type="text" placeholder="Search for...."/>
                <span><i className="fa-sharp fa-solid fa-magnifying-glass search-icon"></i></span>
                </div>
                <div className="account">
                <i className="fa-sharp fa-solid fa-bell bell"></i>
                <i className="fa-sharp fa-solid fa-envelope envelope"></i>
                <span className="name">Surya</span>
                <img src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"/>
                </div>
                
                
            </div>
            {/* <Dashboard/> */}
            <div className="login-div">
            <h4 className="login-tile">Welcome Back!</h4>
            <div className="login">
                <input type="text" className="log-inp" placeholder="Enter Email Address.."/>
                <input type="password" className="log-inp" placeholder="password"/>
                <div><input type="checkbox" />Remember Me</div>
                <button className="login-btn" onClick={()=>navigate("/")}>Login</button>
            </div>
            <div className="other-option">
            <button className="google"><i class="fa-brands fa-google"></i>.btn-Google</button>
            <button className="facebook"><i class="fa-brands fa-facebook-f fb"></i>.btn-Facebook</button>
            </div>
            <div className="data-clr">
                <a href="#">Forgot Password ?</a>
                <a href="#">create an Account!</a>
            </div>
        </div>
            </div>
            

            </div>
            </div>
            </div>









        // <div className="login-div">
        //     <h4 className="login-tile">Welcome Back!</h4>
        //     <div className="login">
        //         <input type="text" placeholder="Enter Email Address.."/>
        //         <input type="password" placeholder="password"/>
        //         <input type="checkbox" />Remember Me
        //         <button className="login-btn">Login</button>
        //     </div>
        //     <div className="other-option">
        //     <button className="google"><i class="fa-brands fa-google"></i>.btn-Google</button>
        //     <button className="facebook"><i class="fa-brands fa-facebook-f fb"></i>.btn-Facebook</button>
        //     </div>
        //     <div className="data-clr">
        //         <a href="#">Forgot Password ?</a>
        //         <a href="#">create an Account!</a>
        //     </div>
        // </div>
    )
}

export default Login;
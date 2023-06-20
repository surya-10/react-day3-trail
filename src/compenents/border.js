import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Border(){

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
    let [show2, setShow2] = useState(true);
    let [show, setShow] = useState(false);
    let [show3, setShow3] = useState(false);
    return (
        <div className="base-div">
        <div className="inner-div">
        <div className="menu">
        <div className="left-menu border-left-menu">
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
        {/* <Buttons/> */}
        <div className="border-div">
            <h3>Border Utilities</h3>
            <p className="border-div-para">Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. 
                The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
            <div className="borders">
                <div className="border-one">
                    <p>.border-left-primary</p>
                    <p>.border-left-secondary</p>
                    <p>.border-left-success</p>
                    <p>.border-left-info</p>
                    <p>.border-left-warning</p>
                    <p>.border-left-danger</p>
                    <p>.border-left-dark</p>
                </div>
                <div className="border-two">
                <p>.border-left-primary</p>
                    <p>.border-bottom-secondary</p>
                    <p>.border-bottom-success</p>
                    <p>.border-bottom-info</p>
                    <p>.border-bottom-warning</p>
                    <p>.border-bottom-danger</p>
                    <p>.border-bottom-dark</p>
                </div>
            </div>
        </div>
        </div>
        

        </div>
        </div>
        </div>






        // <div className="border-div">
        //     <h3>Border Utilities</h3>
        //     <p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. 
        //         The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
        //     <div className="borders">
        //         <div className="border-one">
        //             <p>.border-left-primary</p>
        //             <p>.border-left-secondary</p>
        //             <p>.border-left-success</p>
        //             <p>.border-left-info</p>
        //             <p>.border-left-warning</p>
        //             <p>.border-left-danger</p>
        //             <p>.border-left-dark</p>
        //         </div>
        //         <div className="border-two">
        //         <p>.border-left-primary</p>
        //             <p>.border-bottom-secondary</p>
        //             <p>.border-bottom-success</p>
        //             <p>.border-bottom-info</p>
        //             <p>.border-bottom-warning</p>
        //             <p>.border-bottom-danger</p>
        //             <p>.border-bottom-dark</p>
        //         </div>
        //     </div>
        // </div>
    )
}
export default Border;
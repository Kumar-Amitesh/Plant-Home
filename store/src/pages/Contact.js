import AddContactApp from "../components/AddContactApp";
import img23 from "../images/23.png"
import Image from "../images/Image.png"
import Icon from "../images/Icon.png"
export default function Contact(){
    return (
        <div>
            <div id="right">
                <img className="icon-image" src={img23} alt=""/>
                <img src={Image} alt=""/>
                <img src={Icon} alt=""/>
                <div id="below"></div>
            </div>
            {/* <img src={Image} alt="" style={{float:"right",height:"200px",width:"200px"}}/> */}
            <AddContactApp/>
        </div>
    )
}
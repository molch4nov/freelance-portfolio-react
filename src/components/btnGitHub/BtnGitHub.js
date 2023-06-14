import "./style.css"
import image1 from "../../img/icons/gitHub-black.svg";

export function BtnGitHub({link}){
    return (
        <a href={link} className="btn-outline">
            <img src={image1} alt=""/>
            GitHub repo
        </a>
    )
}
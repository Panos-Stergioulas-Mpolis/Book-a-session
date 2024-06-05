import students from "../../assets/students.jpg"
import list from "../../assets/list.jpg"
import certificate from "../../assets/certificate.jpg"
import "./homepage.scss"


export default function HomePage() {
  return (
    <div className="home-page">
      <h1 className="home-page-title">Our Mission: Your Success</h1>
      <ul className="home-page-items">
        <li className="home-page-item"><img alt="what we do image" src={students}/><div><h3>What we do</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed porro, corporis rem velit quas dolorem accusamus exercitationem ut autem sunt optio repellat dignissimos a totam nostrum iste. Possimus, nemo!</p></div></li>
        <li className="home-page-item"><div><h3>What we offer</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed porro, corporis rem velit quas dolorem accusamus exercitationem ut autem sunt optio repellat dignissimos a totam nostrum iste. Possimus, nemo!</p></div><img alt="what we offer image" src={list}/></li>
        <li className="home-page-item"><img alt="what you get image" src={certificate}/><div><h3>What you get</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed porro, corporis rem velit quas dolorem accusamus exercitationem ut autem sunt optio repellat dignissimos a totam nostrum iste. Possimus, nemo!</p></div></li>
      </ul>
    </div>
    
  );
}

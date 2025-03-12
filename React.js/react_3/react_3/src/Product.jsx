import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) { 
    let oldPrices = ["12,495","11,900", "1,599", "599"]; 
    let newPrices = ["8,999", "9,1999", "899", "278"];
    let Description = [
        ["8,000 DPI",  "5 programmable buttons"],
        ["intutive surfaces", "designed by ipad pro"],
         ["designed by ipad pro", "intutive surfaces"],
         ["wireless", "optical orientation"],
        ];
    return (
        <div className="Product"> 
        <h4>{title}</h4>
           <p>{Description[idx] [0]}</p>
           <p>{Description[idx] [1]}</p>
           <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;
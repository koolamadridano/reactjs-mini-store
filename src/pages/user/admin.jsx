import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Admin() {
    const [items, setItems]  = useState([]);
    const navigate = useNavigate();
    const getItems = async () => {
       await axios.get('https://api-react-mini-store.herokuapp.com/api/order')
            .then((value) => {
                setItems(value.data);
                console.log(value.data);
            })
            .catch((err) => console.error(err));
    }
    useEffect(() => {
        localStorage.removeItem("accountId");
        localStorage.removeItem("email");
        localStorage.removeItem("address");
        getItems();
    }, [])

    const formatPricePHP = (price) => {
        var strPrice = price.toFixed(2).toString();
        var a = strPrice.split("");
        if (price > 1000000000) a.splice(a.length - 12, 0, ",");
        if (price > 1000000) a.splice(a.length - 9, 0, ",");
        if (price > 1000) a.splice(a.length - 6, 0, ",");
        return "₱" + a.join("");
      }

    const calculate = (items) => {
        let total = 0;
        for (let index = 0; index < items.length; index++) {
            total+= items[index].price_data.unit_amount.toString().slice(0, -2) *  items[index].quantity;
        }
        return  total;
    }
    window.document.title  = "Orders | Admin"
  return (
    <div>
    
        <div className="container">
            <div className="row mt-3">
                <div className="col"></div>            
                    <div className="col-md-7 d-flex justify-content-end">
                        <span 
                        onClick={() => navigate("/login")}
                        className='nav-item ktext-fade  ms-5 pointer ' style={{ lineHeight: 2 }} >
                        Logout
                        </span>
                    </div>
                <div className="col"></div>            
            </div>
            <div className="row mt-3">
                <div className="col"></div>            
                <div className="col-md-7">
                    {items.map((element) => {
                        return <div key={element._id} className=" bg-white  p-5 mt-2">
                            <p className='p-0 m-0 fw-bold'>{element.customerEmail}</p>
                            <p className='p-0 m-0 fw-bold' style={{fontSize: "11px"}}>{element.customerAddress}</p>
                            <p className='p-0 m-0 fw-bold' style={{fontSize: "11px"}}>{formatPricePHP(calculate(element.orders))}</p>
                            <hr />
                            <div>
                                {element.orders.map((order, index) => {
                                    let price= order.price_data.unit_amount.toString().slice(0, -2);
                                    let subTotal = formatPricePHP(order.quantity * parseInt(price));
                    
                                return <div key={index} className="mt-3 d-flex justify-content-between">
                                        <div className="">
                                            <div className="fw-bold"  style={{fontSize: "11px"}}>{order.price_data.product_data.name}</div>
                                            <span className='text-muted' style={{fontSize: "11px"}}> SUB TOTAL {subTotal}</span>
                                        </div>
                                        <span className="badge bg-white rounded-pill text-dark"  style={{fontSize: "11px"}}>QTY {order.quantity}</span>
                                    </div>
                                })}
                            </div>
                        </div>
                    })}
            
                </div>
                <div className="col"></div>
        </div>
        </div>
    </div>
  )
}

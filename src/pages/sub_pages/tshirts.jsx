import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartState, cartStateItems } from "../../state/cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Tshirts({ formatPricePHP, items }) {

  const [selected, setSelected] = useState({});
  let [selectedQty, setSelectedQty] = useState(1);
  const setCartItems = useSetRecoilState(cartState);
  const cartItems = useRecoilValue(cartStateItems);

  const handleAddToCart = () => {
    console.log(cartItems);
    if(cartItems.find(element => element.selected.id == selected.id) == undefined) {
        setCartItems((prev) => [...prev, {
            selectedQty,
            selected
        }]);
        toast.success(`${selected.title} was added to your cart`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,      
            closeButton: false
  
        });
        return;
    }

    let newList = cartItems.map((item) => {
        if (item.selected.id === selected.id) return { ...item, selectedQty:  item.selectedQty +selectedQty };
        else return item;
      });
  
    setCartItems(newList);
    toast.success(`${selected.title} quantity was updated`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        closeButton: false
    });
  }
  const handleAdjustItemQty = (type) => {
      if(type === "increment") {
        setSelectedQty(selectedQty +=1);
        return;
      }
      if(type === "decrement") {
       if(selectedQty !== 1) {
            setSelectedQty(selectedQty -=1);
            return;
       }
    }
  }
  const handleSelectedItem = (item) => {
    setSelected(item);
  }
  
  return (
   <div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            style={{fontSize: "12px"}}
        />
        <div 
            className="modal fade" 
            id="staticBackdrop" 
            data-bs-backdrop="static" 
            data-bs-keyboard="false" 
            tabIndex="-1" 
            aria-labelledby="staticBackdropLabel" 
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-5">
                        <div className="row">
                            <div className="col">
                                <img src={selected.url} alt={selected.title}/>
                            </div>
                            <div className="col-md-5">
                                <h4 className="p-0 m-0 fw-bold mt-5">{selected.title}</h4>
                                <h5 className="p-0 m-0">{formatPricePHP(selected.price ?? 0)}</h5>
                                <div className="d-flex mt-5">
                                    <span  
                                        onClick={() => handleAdjustItemQty("decrement")}
                                        className="uk-icon-button pointer"  
                                        uk-icon="icon: minus"></span>
                                    <h5 className="p-0 m-0 mt-2 mx-4">
                                        {selectedQty}
                                    </h5>
                                    <span  
                                        onClick={() => handleAdjustItemQty("increment")}
                                        className="uk-icon-button pointer"  
                                        uk-icon="icon: plus"></span>
                                </div>
                                <p className="p-0 m-0 mt-5 text-muted">TOTAL</p>
                                <h5 className="p-0 m-0">{formatPricePHP(selected.price * selectedQty  ?? 0)}</h5>
                                <button 
                                    onClick={() => handleAddToCart(selected)}
                                    type="button" 
                                    className="btn btn-success w-100 mt-5">ADD TO CART</button>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <div className="container mt-5" style={{height: "100vh"}}>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
                {items.map((element) => (
                    <div 
                        onClick={() => {
                            setSelectedQty(1); // Reset QTY
                            handleSelectedItem(element); //
                        }}
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"
                        className="col pointer" 
                        key={element.id}>
                            <div className="card border-0">
                                <img
                                    src={element.url}
                                    className="card-img-top img-fluid"
                                    alt={element.title}
                                />
                                <div className="card-body ">
                                    <h5
                                    className="card-title card-text p-0 m-0"
                                    style={{ fontSize: "14px" }}
                                    >
                                    {element.title}
                                    </h5>
                                    <p className="card-text p-0 m-0 " style={{ fontSize: "12px" }}>
                                    {formatPricePHP(element.price)}
                                    </p>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        </div>
   </div>
  );
}

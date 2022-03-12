import React from 'react'

export const ModalItempreview = ({ title, price, qty, url}) => {
  return (
    <div 
        className="modal fade" 
        id="staticBackdrop" 
        data-bs-backdrop="static" 
        data-bs-keyboard="false" 
        tabIndex="-1" 
        aria-labelledby="staticBackdropLabel" 
        aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header border-0">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col">
                            <img src={url} alt={title} />
                        </div>
                        <div className="col">
                            <h4 className="p-0 m-0 fw-bold">{title}</h4>
                            <h5 className="p-0 m-0">{formatPricePHP(price ?? 0)}</h5>
                            <div className="d-flex  mt-5">
                                <span  
                                    onClick={() => handleAdjustItemQty("decrement")}
                                    class="uk-icon-button pointer"  
                                    uk-icon="icon: minus"></span>
                                <h5 className="p-0 m-0 mt-2 mx-4">
                                    {qty}
                                </h5>
                                <span  
                                    onClick={() => handleAdjustItemQty("increment")}
                                    class="uk-icon-button pointer"  
                                    uk-icon="icon: plus"></span>
                            </div>
                            <p className="p-0 m-0 mt-5 text-muted">TOTAL</p>
                            <h5 className="p-0 m-0">{formatPricePHP(price * qty  ?? 0)}</h5>
                            <button type="button" className="btn btn-success w-100 mt-5">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  )
}

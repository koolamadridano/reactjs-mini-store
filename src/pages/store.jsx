import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartState, cartStateItems } from "../state/cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Store({formatPricePHP}) {
  const itemsCannedGoods = [
    {
      id: "267758b7-e174-4b57-88fd-d3ecfe03bee0",
      title: "Argentina Corned Beef",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647060007/projects/mini-store/Canned%20Goods/argentina_00000_vobtsz.png",
      price: 27,
      unit_amount: 2700,
    },
    {
      id: "b4c87edb-351b-4ff8-a4f9-ff1a23acc12f",
      title: "Century Tuna",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647060007/projects/mini-store/Canned%20Goods/century_00000_ipk7ws.png",
      price: 32,
      unit_amount: 3200,
    },
    {
      id: "576b0593-5180-42b8-b05d-7227931c3d8a",
      title: "Fresca Tuna Caldereta",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647060007/projects/mini-store/Canned%20Goods/fresca_00000_y9lm03.png",
      price: 25,
      unit_amount: 2500,
    },
    {
      id: "eeb4e3ef-e609-4bca-9205-7d7708d40f97",
      title: "Beefloaf",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647060007/projects/mini-store/Canned%20Goods/beef_loaf_00000_ctac5k.png",
      price: 18,
      unit_amount: 1800,
    },
    {
      id: "540e5e9b-85ba-4d6b-84b3-7495c8250636",
      title: "555 Sardines",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647060007/projects/mini-store/Canned%20Goods/555_00000_cm6hwi.png",
      price: 19,
      unit_amount: 1900,
    },
  ];
  const itemsMobilePhoneAccessories = [
    {
      id: "f3d1fe2d-5b52-4dbd-ab87-a723b0058674",
      title: "Universal Type C Charger",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647061396/projects/mini-store/Mobile%20Phone%20Accessories/Accessories2_cwljey.png",
      price: 125,
      unit_amount: 12500,
    },
    {
      id: "51311985-58e7-4380-83a9-b920ed452dd2",
      title: "iPhone Charger",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647061397/projects/mini-store/Mobile%20Phone%20Accessories/Accessories1_bmegrt.png",
      price: 590,
      unit_amount: 59000,
    },
    {
      id: "d1b4f4aa-bbe9-40c9-ae4a-c43f4dc16151",
      title: "Universal Jack Headset",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647061397/projects/mini-store/Mobile%20Phone%20Accessories/Accessories3_hkym13.png",
      price: 250,
      unit_amount: 25000,
    },
    {
      id: "ad5ea34a-eb1b-4497-ad87-4d5a5583e7db",
      title: "iPhone 10 Jelly Case Pink",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647061397/projects/mini-store/Mobile%20Phone%20Accessories/Accessories5_uztlop.png",
      price: 160,
      unit_amount: 16000,
    },
    {
      id: "8789cd57-262c-41f8-8e4d-48a7f325830f",
      title: "iPhone 10 Jelly Case Dark Blue",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647061397/projects/mini-store/Mobile%20Phone%20Accessories/Accessories4_ru7kra.png",
      price: 160,
      unit_amount: 16000,
    },
  ];
  const itemsTablets = [
    {
      id: "5e514890-c565-414a-9ff3-03c83c878bae",
      title: "1440 Amoled TAB EMS24 PRO",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647062599/projects/mini-store/Tablets/tablet2_y9hqxx.png",
      price: 17000,
      unit_amount: 1700000,
    },
    {
      id: "ada06a9f-c2ad-484b-868c-0167643a254e",
      title: "1440 Amoled TAB EMS24 LITE",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647062599/projects/mini-store/Tablets/tablet1_jyzq6n.png",
      price: 15000,
      unit_amount: 1500000,
    },
    {
      id: "ce20701c-f6b2-461c-9e55-4828f7ce9891",
      title: "1440 Amoled TAB EMS23",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647062599/projects/mini-store/Tablets/tablet3_bzvopt.png",
      price: 13000,
      unit_amount: 1300000,
    },
    {
      id: "57ec0742-44d5-4b1e-abb8-ce0b9d8e121e",
      title: "1440 Amoled TAB EMS22",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647062599/projects/mini-store/Tablets/tablet4_pq1bmj.png",
      price: 12000,
      unit_amount: 1200000,
    },
    {
      id: "a6a9170e-bafe-40ce-841f-fdf648492805",
      title: "1440 Amoled TAB EMS21",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647062599/projects/mini-store/Tablets/tablet5_awmjze.png",
      price: 11000,
      unit_amount: 1100000,
    },
  ];
  const itemsMobilePhones = [
    {
      id: "dc9dfdfc-c565-414a-9ff3-03c83c878bae",
      title: "Google Pixel Universe Pro",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647063286/projects/mini-store/Mobile%20Phones/phone4_d7r4oj.png",
      price: 12000,
      unit_amount: 1200000,
    },
    {
      id: "d5fe2b17-c2ad-484b-868c-0167643a254e",
      title: "iPhone X Space Gray",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647063286/projects/mini-store/Mobile%20Phones/phone3_glr8a8.png",
      price: 11000,
      unit_amount: 1100000,
    },
    {
      id: "8fa53d59-f6b2-461c-9e55-4828f7ce9891",
      title: "PhoneX DD2",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647063286/projects/mini-store/Mobile%20Phones/phone1_brezj5.png",
      price: 10000,
      unit_amount: 1000000,
    },
    {
      id: "5150fa30-44d5-4b1e-abb8-ce0b9d8e121e",
      title: "OPPO F9X",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647063286/projects/mini-store/Mobile%20Phones/phone2_crao7h.png",
      price: 9000,
      unit_amount: 900000,
    },
    {
      id: "884cd389-bafe-40ce-841f-fdf648492805",
      title: "OPPO F3A",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647063286/projects/mini-store/Mobile%20Phones/phone5_jrdrv9.png",
      price: 6000,
      unit_amount: 600000,
    },
  ];
  const itemsSoap = [
    {
      id: "826e7e7d-ce4c-4487-bbd8-856b726b1dc1",
      title: "Safe Guard Aloe Vera",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647066276/projects/mini-store/Soap/ping_00000_rnq2ob.png",
      price: 15,
      unit_amount: 1500,
    },
    {
      id: "be52b51b-ea0f-4760-af34-d9f1c83444aa",
      title: "Safe Guard Lemon",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647066276/projects/mini-store/Soap/yellow_00000_u1nfta.png",
      price: 15,
      unit_amount: 1500,
    },
    {
      id: "e4accbdc-0618-4f49-b13d-ee6e53c27151",
      title: "Safe Guard Menthol",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647066276/projects/mini-store/Soap/blue_00000_ftkpgb.png",
      price: 15,
      unit_amount: 1500,
    },
    {
      id: "8bb157d3-e7b2-49b9-8c54-3c117d9b4fc1",
      title: "Safe Guard Herbal Extract",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647066276/projects/mini-store/Soap/green_00000_kqwyln.png",
      price: 15,
      unit_amount: 1500,
    },
    {
      id: "f6a06eee-8f95-4ed9-abeb-608c0d430568",
      title: "Safe Guard Papaya",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647066276/projects/mini-store/Soap/papaya_00000_ry325a.png",
      price: 15,
      unit_amount: 1500,
    },
  ];
  const itemsTshirts = [
    {
      id: "9b873f88-6714-4a58-9c23-f5a213a392a1",
      title: "Plain White TShirt",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647066586/projects/mini-store/Tshirts/plain_white_wr4ljo.png",
      price: 76,
      unit_amount: 7600,
    },
    {
      id: "1dbc4fc2-58f6-4b09-b42f-b7997efbcbd6",
      title: "Plain Red TShirt",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647066586/projects/mini-store/Tshirts/red_00000_f3tllz.png",
      price: 76,
      unit_amount: 7600,
    },
    {
      id: "d62ea2e3-cd4f-49f8-9d88-06745b99bc2b",
      title: "Plain Orange TShirt",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647066586/projects/mini-store/Tshirts/orange_00000_fb5o4j.png",
      price: 76,
      unit_amount: 7600,
    },
    {
      id: "fe24bd93-87ad-4740-a527-6ea79e666de9",
      title: "Plain Green TShirt",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647066586/projects/mini-store/Tshirts/green_00000_pk7eq0.png",
      price: 76,
      unit_amount: 7600,
    },
    {
      id: "18b70de6-3b71-4ede-9048-57bef49e1a7c",
      title: "Plain Black TShirt",
      url: "https://res.cloudinary.com/diigkcc6g/image/upload/v1647066586/projects/mini-store/Tshirts/black_00000_ahzwjn.png",
      price: 76,
      unit_amount: 7600,
    },
  ];
  const [selected, setSelected] = useState({});
  let [selectedQty, setSelectedQty] = useState(1);
  const setCartItems = useSetRecoilState(cartState);
  const cartItems = useRecoilValue(cartStateItems);
  const navigate = useNavigate();

  const handleAddToCart = () => {
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
  useEffect(() => {
    var dummyToken = localStorage.getItem("accountId");
    if(dummyToken == null) {
      navigate("/login");
      return;
    }
  }, [])

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
                        <button id="staticBackdropButton" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
      
      <div className="container-fluid mb-5">
            {/* Start Mobile Phones  */}
            <section >
              <h2 className="p-0 m-0 mt-5 mb-5 fw-bold">Mobile Phones</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
                {itemsMobilePhones.map((element) => (
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
                            <div className="card-body">
                              <h5
                                className="card-title card-text p-0 m-0"
                                style={{ fontSize: "14px" }}
                              >
                                {element.title}
                              </h5>
                              <p
                                className="card-text p-0 m-0"
                                style={{ fontSize: "12px" }}
                              >
                                {formatPricePHP(element.price)}
                              </p>
                            </div>
                          </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Start Tablets  */}
            <section>
              <h2 className="p-0 m-0 mt-5 mb-5 fw-bold">Tablets</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
                {itemsTablets.map((element) => (
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
                            <div className="card-body">
                              <h5
                                className="card-title card-text p-0 m-0"
                                style={{ fontSize: "14px" }}
                              >
                                {element.title}
                              </h5>
                              <p
                                className="card-text p-0 m-0"
                                style={{ fontSize: "12px" }}
                              >
                                {formatPricePHP(element.price)}
                              </p>
                            </div>
                          </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Start Mobile Phone Accessories  */}
            <section>
              <h2 className="p-0 m-0 mt-5 mb-5 fw-bold">
                Mobile Phone Accessories
              </h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
                {itemsMobilePhoneAccessories.map((element) => (
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
                          <div className="card-body">
                            <h5
                              className="card-title card-text p-0 m-0"
                              style={{ fontSize: "14px" }}
                            >
                              {element.title}
                            </h5>
                            <p
                              className="card-text p-0 m-0"
                              style={{ fontSize: "12px" }}
                            >
                              {formatPricePHP(element.price)}
                            </p>
                          </div>
                        </div>
                </div>
                ))}
              </div>
            </section>

            {/* Start Food and Necessities */}
            <section>
              <h2 className="p-0 m-0 mt-5 mb-4 fw-bold">
                Food and Necessities
              </h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
                {itemsCannedGoods.map((element) => (
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
                          <div className="card-body">
                            <h5
                              className="card-title card-text p-0 m-0"
                              style={{ fontSize: "14px" }}
                            >
                              {element.title}
                            </h5>
                            <p
                              className="card-text p-0 m-0"
                              style={{ fontSize: "12px" }}
                            >
                              {formatPricePHP(element.price)}
                            </p>
                          </div>
                        </div>
                    </div>
                ))}
              </div>
            </section>

            {/* Start TSHirts */}
            <section>
              <h2 className="p-0 m-0 mt-5 mb-4 fw-bold">TShirts</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
                {itemsTshirts.map((element) => (
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
                          <div className="card-body">
                            <h5
                              className="card-title card-text p-0 m-0"
                              style={{ fontSize: "14px" }}
                            >
                              {element.title}
                            </h5>
                            <p
                              className="card-text p-0 m-0"
                              style={{ fontSize: "12px" }}
                            >
                              {formatPricePHP(element.price)}
                            </p>
                          </div>
                        </div>
                    </div>
                ))}
              </div>
            </section>

            {/* Start Soap */}
            <section >
              <h2 className="p-0 m-0 mt-5 mb-4 fw-bold">Soap</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
                {itemsSoap.map((element) => (
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
                          <div className="card-body">
                            <h5
                              className="card-title card-text p-0 m-0"
                              style={{ fontSize: "14px" }}
                            >
                              {element.title}
                            </h5>
                            <p
                              className="card-text p-0 m-0"
                              style={{ fontSize: "12px" }}
                            >
                              {formatPricePHP(element.price)}
                            </p>
                          </div>
                        </div>
                    </div>
                ))}
              </div>
            </section>
      
      </div>
    </div>
  );
}


import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartState, cartStateItems } from "./state/cart";
import Cancelled from "./pages/cancelled";
import Store from "./pages/store";
import FoodAndNecessities from "./pages/sub_pages/food_and_necessities";
import MobilePhones from "./pages/sub_pages/mobile_phones";
import MobilePhoneAccessories from "./pages/sub_pages/mobile_phone_accessories";
import Soap from "./pages/sub_pages/soap";
import Tablets from "./pages/sub_pages/tablets";
import Tshirts from "./pages/sub_pages/tshirts";
import Success from "./pages/success";
import axios from "axios";
import Login from "./pages/user/login";
import Register from "./pages/user/register";
import Admin from "./pages/user/admin";

function App() {
  const cartItems = useRecoilValue(cartStateItems);
  const setCartItems = useSetRecoilState(cartState);
  const [isAuthenticated, setIsAuthenticated] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const cannedGoods = [
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
  const mobilePhoneAccessories = [
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
  const mobilePhones = [
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
      id: "5150fa30-44d5-4b1e-abb8-ce0b9d8e121g",
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
  const soap = [
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
  const tablets = [
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
  const tshirts = [
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
  const navItems = [
    {
      id: "25475553-e3ff-462a-ada7-92e0daa95eb2",
      title: "All",
      route: "/",
    },
    {
      id: "b2bef96e-d38b-4d62-8677-40fdf6c7a616",
      title: "Mobile Phones",
      route: "/phone",

    },
    {
      id: "680d0fe9-58b1-4b86-9f28-c219f39d349d",
      title: "Tablets",
      route: "/tablets",
    },
    {
      id: "af90f5de-5a7c-427c-9492-21dfb81e9d1b",
      title: "Mobile Phone Accessories",
      route: "/phone/accessories",

    },
    {
      id: "ea58bbfb-18c2-4ead-b4f4-cd1dba84a623",
      title: "Food and Necessities",
      tagId: "food-and-necessities",
      route: "/food-and-necessities",
    },
    {
      id: "57ffcd57-369c-4eaa-af7b-ed1901951168",
      title: "TShirts",
      tagId: "tshirts",
      route: "/tshirts",
    },
    {
      id: "9d441601-7063-4ae5-ac8d-143abf06e689",
      title: "Soap",
      route: "/soap",
    },
  ];

  function formatPricePHP(price) {
    var strPrice = price.toFixed(2).toString();
    var a = strPrice.split("");
    if (price > 1000000000) a.splice(a.length - 12, 0, ",");
    if (price > 1000000) a.splice(a.length - 9, 0, ",");
    if (price > 1000) a.splice(a.length - 6, 0, ",");
    return "₱" + a.join("");
  }

  const handleCheckout = async () => {
     try {
       var data = cartItems.map((element) =>  {
        return {
            "price_data": {
                "currency": "php",
                "product_data": {
                    "name": element.selected.title
                },
                "unit_amount":  element.selected.unit_amount
            },
            "quantity": element.selectedQty
        }
       });
   
       let onCheckout = await axios.post("https://api-react-mini-store.herokuapp.com/api/order", {
          "customerId": localStorage.getItem("accountId"),
          "customerEmail": localStorage.getItem("email"),
          "customerAddress": localStorage.getItem("address"),
          "total": 0,
          "orders": [...data ]
        });
        var onAddToCart = await axios.post("https://api-react-mini-store.herokuapp.com/api/initialize-checkout", {
          "email": localStorage.getItem("email"),
          "items": [ ...data ]
        });

        if(onCheckout.status == 200) {
          window.location.href = onAddToCart.data.url;
          return;
        }

     } catch (error) {
       console.log(error)
     }

  }

  const calculate = (items) => {
    let total = 0;
   for (let index = 0; index < items.length; index++) {
    total+= items[index].selected.price *  items[index].selectedQty;
   }
    return  total;
  }

  const handleAdjustItemQty = (type, selectedItem) => {
  

    if(type === "increment") {
      let newList = cartItems.map((item) => {
          if (item.selected.id === selectedItem.selected.id) return { ...item, selectedQty:  item.selectedQty +1 };
          else return item;
      });

     setCartItems(newList);
      return;
    }
    if(type === "decrement") {
      let newList = cartItems.map((item) => {
          if (item.selected.id === selectedItem.selected.id) {
            if(item.selectedQty != 1) {
              return { ...item, selectedQty:  item.selectedQty -1 }
            }
          };
          return item;
      });

     setCartItems(newList);
    return;

  }
  }

  useEffect(() => {
    var dummyToken = localStorage.getItem("accountId");
    if(dummyToken != null ) {
      setIsAuthenticated(true);
      return;
    }
    setIsAuthenticated(false);
  }, [location.pathname])
  
  return (
    <>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCart" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
        <h4 className="fw-bolder p-0 m-0" id="offcanvasRightLabel">MY SHOPPING CART ({cartItems.length})</h4>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {cartItems.slice(0).reverse().map((element) => {
          return <div  className="mt-2" key={element.selected.id}>
            <div className="row ">
              <div className="col-md-4 ">
                <img  
                  style={{height:"100px"}}
                  src={element.selected.url}
                  alt={element.selected.id} />
              </div>
              <div className="col">
                <h5 className="p-0 m-0 fw-bold">{element.selected.title}</h5>
                <h6  className="p-0 m-0">{formatPricePHP(element.selected.price)}</h6>
                <div className="d-flex mt-3">
                <span  
                      onClick={() => handleAdjustItemQty("decrement", element)}
                      className="uk-icon-button pointer"  
                      uk-icon="icon: minus"></span>
                  <span className="mx-2"></span>
                  <span  
                      onClick={() => handleAdjustItemQty("increment", element)}
                      className="uk-icon-button pointer"  
                      uk-icon="icon: plus"></span>
              </div>
                <h6  className="p-0 m-0 mt-3" style={{fontSize:"12px"}}>QTY {element.selectedQty}</h6>
                <h6  className="p-0 m-0"  style={{fontSize:"12px"}}>SUB TOTAL {formatPricePHP(element.selectedQty * element.selected.price)}</h6>
            
             
              </div>
              <hr className="mt-3"/>
            </div>
          </div>
        })}
        {cartItems.length != 0 && 
            <div>
              <p className="p-0 m-0 text-muted mt-5">TOTAL</p>
              <h2 className="p-0 m-0 fw-bold">{formatPricePHP(calculate(cartItems))}</h2>

              <button 
                    onClick={() => handleCheckout()}
                    type="button" 
                    className="btn btn-success w-100 mt-4">CHECKOUT</button>
            </div>}
      </div>
    </div>
    
    {isAuthenticated && 
    <nav className="navbar navbar-expand-lg kbg-primary sticky-top p-5">
      <div className="container-fluid">
        {/* START TITLE */}
        <span
          onClick={() => navigate("/")}
          className="pointer"
          style={{ fontSize: "25px", fontWeight: "bold" }}
        >
          Pabilona Center
        </span>
        {/* START BUTTON TOGGLER */}
        <span
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="uk-icon-button " uk-icon="icon: menu"></span>
        </span>
        {/* START OFF CANVAS */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel" >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Categories
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 p-0 m-0">
           
                {navItems.map((element) => (
                  <li
                  onClick={() => {
                    navigate(element.route);
                  }}
                    key={element.id}
                    className={`nav-item ktext-fade  ms-3 pointer ${location.pathname == element.route? 'fw-bold': ''}`}
                    style={{ lineHeight: 2 }}
                  >
                    {element.title}
                  </li>
                ))}
             
              <li 
                  data-bs-toggle="offcanvas" 
                  data-bs-target="#offcanvasCart" 
                  aria-controls="offcanvasRight"
                  className="nav-item ktext-fade ms-5 pointer">
                <span uk-icon="icon: bag;"></span> 
                <span style={{fontSize: "8px"}}> {cartItems.length}</span>
              </li>
              <li
                  onClick={() => {
                    localStorage.removeItem("accountId");
                    localStorage.removeItem("email");
                    localStorage.removeItem("address");
                    navigate('/login');
                  }}
                  
                    className='nav-item ktext-fade  ms-5 pointer '
                    style={{ lineHeight: 2 }}
                  >
                    Logout
                  </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>}

     <div className="container-fluid">
        <div className="row">
              <div className="col-md-2"> </div>
              <div className="col"> 
                <Routes>
                  <Route path="cancelled" element={<Cancelled />} />
                  <Route path="success" element={<Success />} />

                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="admin" element={<Admin />} />


                  <Route 
                    path="/" 
                    element={<Store 
                      formatPricePHP={formatPricePHP}/>} 
                  />

                  <Route
                    path="food-and-necessities"
                    element={<FoodAndNecessities 
                      formatPricePHP={formatPricePHP} 
                      items={cannedGoods} />}
                  />
                  <Route
                    path="phone/accessories"
                    element={<MobilePhoneAccessories 
                      formatPricePHP={formatPricePHP} 
                      items={mobilePhoneAccessories}/>}
                  />
                  <Route
                    path="phone"
                    element={<MobilePhones  
                      formatPricePHP={formatPricePHP}  
                      items={mobilePhones}/>}
                  />
                  <Route 
                    path="soap" 
                    element={<Soap 
                      formatPricePHP={formatPricePHP}  
                      items={soap}/>} 
                  />
                  <Route
                    path="tablets"
                    element={<Tablets 
                      formatPricePHP={formatPricePHP} 
                      items={tablets}/>}
                  />
                  <Route
                    path="tshirts"
                    element={<Tshirts 
                      formatPricePHP={formatPricePHP} 
                      items={tshirts}/>}
                  />
                </Routes>
              </div>
              <div className="col-md-2"> </div>
        </div>
     </div>
    </>
  );
}

export default App;

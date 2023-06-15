import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";

export function Household() {
    return (
        <div>
            <div className="fruits-container">
                <p>Cleaning & Household</p>
            </div>
            <Saop />
            <Liquid />
        </div>
    );
}

function Saop() {
    const soap = [{
        "id": "1",
        "img": "https://images-eu.ssl-images-amazon.com/images/I/51RLCHjNuTL.AC_SL240_.jpg",
        "title": "Harpic Disinfectant Toilet Cleaner Liquid, Original - 1 Litre",
        "rate": "₹195.00",
        "strike": "₹215.00",
        "off": "9% Off"
    }, {
        "id": "2",
        "img": "https://images-eu.ssl-images-amazon.com/images/I/51fFgtFBshL.AC_SL240_.jpg",
        "title": "Dettol Antiseptic Liquid for First Aid , Surface Disinfection and Personal Hygiene , 1000ml",
        "rate": "₹350.00 ",
        "strike": "₹420.00",
        "off": "20% Off"
    },
    {
        "id": "3",
        "img": "https://images-eu.ssl-images-amazon.com/images/I/81+w5GKx+iL.AC_SL240_.jpg",
        "title": "Mangaldeep Sadhvi Agarbatti - 100 Sticks",
        "rate": "₹35.00",
        "strike": "₹50.00",
        "off": "15% Off"
    },
    {
        "id": "4",
        "img": "https://images-eu.ssl-images-amazon.com/images/I/71DySGgS2pL.AC_SL240_.jpg",
        "title": "Odonil Bathroom Air Freshener Blocks Mixed Fragrances - 192g (48g*4) | Mixed Fragrances: Jamine, Lavender, Orchid, Rose",
        "rate": "₹144.00",
        "strike": "₹192.00",
        "off": "25% Off"
    },
    {
        "id": "5",
        "img": "https://images-eu.ssl-images-amazon.com/images/I/61ftEQm6BxL.AC_SL240_.jpg",
        "title": "Godrej aer Spray | Room Freshener for Home & Office - Cool Surf Blue (220 ml)",
        "rate": "₹126.00",
        "strike": "₹169.00",
        "off": "25% Off"
    }
    ]
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Household Cleaner & Air Freshner</p>
            <div className="mango-flex">
                {soap.map((soap, index, id) => <SoapList soap={soap} key={index} id={id} />)}
            </div>
        </div>
    )
}

function SoapList({ soap, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={soap.img} alt={soap.title} />
            <p className="mango-title" onClick={() => navigate(`/household/${soap.id}`)}>{soap.title} </p>
            <span className="mango-rate">{soap.rate}</span>
            <span className="strike">{soap.strike}</span>
            <p className="offer">{soap.off}</p>
        </div>
    )
}

export function Fruit() {
    const { id } = useParams()
    const [fruits, setFruits] = useState([])
    return (
        <div>
            <p>{fruits.name}</p>
        </div>
    )
}
function Liquid() {
    const liquid = [{
        "id": "1",
        "img": "https://images-eu.ssl-images-amazon.com/images/I/61IXM85WXZL.AC_SL240_.jpg",
        "title": "Vim Fresh Lemon Dishwash Bar 200 g (Combo Pack of 3)",
        "rate": "₹58.00",
        "strike": "₹65.00",
        "off": "11% Off"
    }, {
        "id": "2",
        "img": "https://images-eu.ssl-images-amazon.com/images/I/51+fkgJSLFL.AC_SL240_.jpg",
        "title": "Vim Dishwash Liquid Gel Lemon,750 ml bottle",
        "rate": "₹143.00 ",
        "strike": "₹199.00",
        "off": "28% Off"
    },

    {
        "id": "3",
        "img": "https://images-eu.ssl-images-amazon.com/images/I/71AfKPJFjoL.AC_SL240_.jpg",
        "title": "Surf Excel Matic Liquid Detergent Front Load Pouch 2l",
        "rate": "₹412.00",
        "strike": "₹480.00",
        "off": "17% Off"
    },
    {
        "id": "4",
        "img": "https://images-eu.ssl-images-amazon.com/images/I/61LvAK2iVmL.AC_SL240_.jpg",
        "title": "Comfort Morning Fresh Fabric Conditioner 2 L Refill Pack",
        "rate": "₹408.00",
        "strike": "₹412.00",
        "off": "16% Off"
    },
    {
        "id": "5",
        "img": "https://images-eu.ssl-images-amazon.com/images/I/61hIZccPhQL.AC_SL240_.jpg",
        "title": "RIN Detergent Bar - 250 g (Pack of 4)",
        "rate": "₹95.00",
        "strike": "₹104.00",
        "off": "9% Off"
    }]
    return (
        <div className="mangoes">
            <p className="mangoes-ptag">Dish washer & Laundary Detergent</p>
            <div className="mango-flex">
                {liquid.map((liquid, index, id) => <LiquidList liquid={liquid} key={index} id={id} />)}
            </div>
        </div>
    )
}



function LiquidList({ liquid, id }) {
    const navigate = useNavigate()
    return (
        <div className="mangolist" >
            <img src={liquid.img} alt={liquid.title} />
            <p className="mango-title" onClick={() => navigate(`/rice/${liquid.id}`)}>{liquid.title} </p>
            <span className="mango-rate">{liquid.rate}</span>
            <span className="strike">{liquid.strike}</span>
            <p className="offer">{liquid.off}</p>
        </div>
    )
}

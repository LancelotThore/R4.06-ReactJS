import Plan from "./Plan";

export default function Pricing({title, description, plans}) {

    let handler = function() {
        console.log("click");
    }

    return (
        <div className="offer">
            <div className="offer-section">
                <h2 className="offer-section__title">{title}</h2>
                <p className="offer-section__description">{description}</p>
                <div className="offer-section__description">
                    <label className="switch" htmlFor="">
                        <input onClick={handler} type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="box">
                    {plans.map((plan, index) => (
                        <Plan key={index} label={plan.name} price={plan.price} advantage={plan.advantage}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
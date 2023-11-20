import { Link } from "react-router-dom";
import MenuItem from "../../../pages/Shared/MenuItem/MenuItem";
import Cover from "../../../pages/Shared/cover/Cover";


const MenuCategory = ({items,tittle,img}) => {
    return (
        <div className="mt-10">
            {
                tittle&& <Cover img={img} tittle={tittle}></Cover> 
            }
            <div className="grid md:grid-cols-2 gap-10">
                {
                    items?.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
                <br />
                <Link to={`/shop/${tittle}`}>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">ORDER YOUR FAVOURITE FOOD </button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;
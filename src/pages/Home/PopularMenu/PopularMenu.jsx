import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  // constoinde

  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //     fetch('http://localhost:5000/menus')
  //         .then(res => res.json())
  //         .then(data => {
  //             const popularItems = data.filter(item => item.category === 'popular');
  //             setMenu(popularItems)
  //         })
  // }, [])
  const [menu,loding] = useMenu();
  const popularItems = menu?.filter((item) => item.category === "popular");
  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popularItems?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-4">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;

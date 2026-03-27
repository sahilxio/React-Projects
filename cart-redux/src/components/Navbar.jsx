import { IoCart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center p-4 bg-emerald-500">
      <h1
        className="text-xl font-semibold cursor-pointer"
        onClick={() => navigate("/products")}
      >
        Vouge
      </h1>

      <div>
        <IoCart
          size={30}
          onClick={() => navigate("/cart")}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;

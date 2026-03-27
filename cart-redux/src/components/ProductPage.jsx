import { products } from "../Data/ProductData";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { ToastContainer, toast, Bounce } from "react-toastify";

const ProductPage = () => {
  const dispatch = useDispatch();
  const notify = () =>
    toast.success("Added to cart!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  return (
    <div className="text-black mt-5">
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        className="px-4 py-3 mb-3 w-[100%]"
      />
      <div className="grid lg:grid-cols-4 gap-6 p-4 sm:grid-cols-1">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl overflow-hidden w-full h-auto relative z-0 transition-all duration-300 hover:scale-105  "
          >
            <img src={product.image} className="w-full h-48 object-cover " />

            <div className="p-2">
              <p className="text-lg font-semibold mb-1">{product.title}</p>

              <div className="flex gap-5 justify-between items-center mb-2">
                <p className="font-semibold text-gray-500">₹{product.price}</p>

                <button
                  className="px-3 py-2 bg-slate-500 text-white rounded-lg font-medium hover:bg-teal-500 transition-all duration-100"
                  onClick={() => {
                    (dispatch(addToCart(product)), notify());
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

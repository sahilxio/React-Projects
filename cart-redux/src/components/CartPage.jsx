import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  quantityDown,
  quantityUp,
  removeFromCart,
} from "../redux/features/cartSlice";
import { FaTrash } from "react-icons/fa6";
import { ToastContainer, toast, Flip } from "react-toastify";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cart.cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const notify = () =>
    toast.error("removed from cart!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });

  return (
    <div className="flex flex-col items-center text-black gap-4 p-4">
      <ToastContainer className="w-full px-3 mb-5" />

      <button
        className="text-white flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-red-400 font-semibold"
        onClick={() => dispatch(clearCart())}
      >
        <FaTrash />
      </button>

      {cart.cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row items-center gap-3 bg-white p-3 rounded-xl w-full max-w-md"
        >
          {/* Image */}
          <img
            src={item.image}
            className="w-full h-32 sm:h-20 object-cover rounded-lg"
          />

          {/* Content */}
          <div className="flex flex-col w-full gap-2">
            <p className="text-xs font-semibold line-clamp-2">{item.title}</p>

            <p className="text-sm font-semibold">₹{item.price}</p>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  className="rounded-full bg-slate-300 px-2 py-1 text-xs font-semibold"
                  onClick={() => dispatch(quantityDown(item))}
                >
                  -
                </button>

                <p className="text-xs font-semibold">{item.quantity}</p>

                <button
                  className="rounded-full bg-slate-300 px-2 py-1 text-xs font-semibold"
                  onClick={() => dispatch(quantityUp(item))}
                >
                  +
                </button>
              </div>

              <button
                className="px-3 py-1 bg-slate-500 rounded-xl text-white text-xs"
                onClick={() => {
                  dispatch(removeFromCart(item));
                  notify();
                }}
              >
                remove
              </button>
            </div>
          </div>
        </div>
      ))}

      <h1 className="text-white font-semibold px-4 py-2 bg-emerald-500 rounded-full text-sm">
        Total: ₹{total}
      </h1>
    </div>
  );
};

export default CartPage;

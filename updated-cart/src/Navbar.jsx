import { FaCartPlus } from 'react-icons/fa';
import { useGlobalAppContext } from './context';
const Navbar = () => {
const {totalAmount}=useGlobalAppContext()

  return (
    <nav>
      <div className='nav-center'>
        <h4>MyCart</h4>
        <div className='nav-container'>
          <FaCartPlus className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

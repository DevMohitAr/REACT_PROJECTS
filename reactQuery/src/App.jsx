import { ToastContainer } from 'react-toastify';
import Items from './Items';
import Form from './Form';




const App = () => {
 
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form />
      <Items/>
    </section>
  );
};
export default App;

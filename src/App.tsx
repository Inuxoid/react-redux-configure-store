import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from './store/store'; // Импортируем типы из вашего хранилища
import {addCash, getCash} from './store/cashSlice'; // Используйте действия из слайсов
import {addCustomer, addCustomersArray, deleteCustomer} from './store/customerSlice';
import {Customer} from "./types.ts";
import {fetchCustomers} from "./asyncActions/customers.ts";

function App(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const cash : number = useSelector((state: RootState) => state.cash.cash);
  const customers : Customer[] = useSelector((state: RootState) => state.customers.customers);

  // Обертки для диспетчеризации действий
  const handleAddCash = (amount: number) => dispatch(addCash(amount));
  const handleGetCash = (amount: number) => dispatch(getCash(amount));
  const handleAddCustomer = (customerName: string) => {
    const customer = {name: customerName, id: Date.now()};
    dispatch(addCustomer(customer));
  };
  const handleAddCustomersArray = (customers: Customer[]) => {dispatch(addCustomersArray(customers))}
  const handleRemoveCustomer = (customerId: number) => dispatch(deleteCustomer(customerId));


  return (
      <div>
        <div style={{fontSize: '20pt', margin: '20px'}}>{cash}</div>
        <div style={{display: "flex"}}>
          <button
              onClick={() => handleAddCash(Number(prompt()))}
              style={{fontSize: '16pt', margin: '20px'}}
          >
            Пополнить счёт
          </button>

          <button
              onClick={() => handleGetCash(Number(prompt()))}
              style={{fontSize: '16pt', margin: '20px'}}
          >
            Снять со счёта
          </button>

          <button
              onClick={() => handleAddCustomer(String(prompt()))}
              style={{fontSize: '16pt', margin: '20px'}}
          >
            Добавить клиента
          </button>

          <button
              onClick={async () => handleAddCustomersArray(await fetchCustomers())}
              style={{fontSize: '16pt', margin: '20px'}}
          >
            Добавить много клиентов
          </button>
        </div>

        {customers.length > 0 ?
            <div>
              {customers.map(customer =>
                  <div
                      onClick={() => handleRemoveCustomer(customer.id)}
                      key={customer.id}
                      style={{fontSize:'2rem', border:'1px solid black', padding:'10px 20px', margin:'10px'}}
                  >
                    {customer.name} {customer.id}
                  </div>
              )}
            </div>
            :
            <div style={{fontSize:'2rem', marginTop:'20px'}}>
              Клиенты отсутствуют
            </div>
        }

      </div>
  )
}

export default App;

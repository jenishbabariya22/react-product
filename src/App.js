import logo from './logo.svg';
import './App.css';
import Record from './Record';
const App = () => {

  const record = [
    {
      id: 1,
      name: "samsung",
      price: 1000,
      qty: 1,
      category: "mobile",
      color: "lightgreen"
    },
    {
      id: 2,
      name: "t.v",
      price: 500,
      qty: 1,
      category: "electronics",
      color: "lightpink"
    },
    {
      id: 3,
      name: "washing machine",
      price: 250,
      qty: 1,
      category: "electronics",
      color: "lightgreen"
    },
    {
      id: 4,
      name: "vivo",
      price: 100,
      qty: 1,
      category: "mobile",
      color: "lightpink"
    },
    {
      id: 5,
      name: "puma",
      price: 50,
      qty: 1,
      category: "cloth",
      color: "lightgreen"
    },
    {
      id: 6,
      name: "cotton",
      price: 20,
      qty: 1,
      category: "cloth",
      color: "lightpink"
    },
    {
      id: 7,
      name: "oppo",
      price: 400,
      qty: 1,
      category: "mobile",
      color: "lightgreen"
    },
    {
      id: 8,
      name: "gujarati",
      price: 150,
      qty: 1,
      category: "food",
      color: "lightpink"
    },
    {
      id: 9,
      name: "punjabi",
      price: 100,
      qty: 1,
      category: "food",
      color: "lightgreen"
    },
  ];






  return (
    <>
      <Record
        allrecord={record}
      />
    </>
  )
};
export default App;

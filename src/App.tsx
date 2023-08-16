import React, { useState } from "react";
import "./App.css";
import {
  BadList,
  BadProductPage,
  BadProfilePage,
  BasedOnPropsUpdate,
  BasedOnPropsUpdateWellDone,
  CachingExpensiveCalculations,
  CachingExpensiveCalculationsWellDone,
  GoodList,
  GoodProductPage,
  GoodProfilePage,
} from "./components/useEffectOptimizations";

const todoList = [
  { id: 1, todo: "Wash the car" },
  { id: 2, todo: "Read the article" },
  { id: 3, todo: "Buy some Yogurt" },
  { id: 4, todo: "Practice Harmony" },
  { id: 5, todo: "Write a song" },
  { id: 6, todo: "Book a place at a lake" },
  { id: 7, todo: "Look for a pillow" },
  { id: 8, todo: "Walk for 3 miles" },
  { id: 9, todo: "Make a wish" },
  { id: 10, todo: "Climb a tree" },
];

function App() {
  const [cases, setCases] = useState<number[]>([]);

  const [filter, setFilter] = useState<string>("");
  const findId = (currentId: number) => cases.find((id) => currentId === id);
  const clickHandler = (id: number) => {
    if (findId(id)) {
      const updatedCases = cases.filter((element) => element !== id);
      setCases(updatedCases);
    } else {
      setCases([...cases, id]);
    }
  };

  const [userId, setUserId] = useState<number>(0);

  const [ids, setIds] = useState<number[]>([1, 3, 5, 7]);

  const [product, setProduct] = useState<{
    id: number;
    name: string;
    isInCart: boolean;
  }>({ id: 1, name: "Shoes", isInCart: false });

  return (
    <div className="App">
      <div>
        <button onClick={() => clickHandler(1)}>{`${
          findId(1) ? "HIDE" : "SHOW"
        } CASE 1: `}</button>
        <span> Updating state based on props or state </span>
        {findId(1) && (
          <div>
            <BasedOnPropsUpdate />
            <BasedOnPropsUpdateWellDone />
          </div>
        )}
        <br />
      </div>

      <div>
        <button onClick={() => clickHandler(2)}>{`${
          findId(2) ? "HIDE" : "SHOW"
        } CASE 2: `}</button>
        <span> Caching expensive calculations</span>
        {findId(2) && (
          <div>
            <input
              value={filter}
              placeholder="Filter"
              onChange={(event) => setFilter(event.target.value)}
            />
            <br />
            <br />
            <span>Without caching</span>
            <CachingExpensiveCalculations todoList={todoList} filter={filter} />
            <span>With caching</span>
            <CachingExpensiveCalculationsWellDone
              todoList={todoList}
              filter={filter}
            />
          </div>
        )}
        <br />
      </div>

      <div>
        <button onClick={() => clickHandler(3)}>{`${
          findId(3) ? "HIDE" : "SHOW"
        } CASE 3: `}</button>
        <span> Resetting all state when a prop change </span>
        {findId(3) && (
          <div>
            <button onClick={() => setUserId(userId - 1)}>-</button>
            <span>{userId}</span>
            <button onClick={() => setUserId(userId + 1)}>+</button>
            <br />
            <br />
            <BadProfilePage userId={userId} />
            <br />
            <GoodProfilePage key={userId} userId={userId} />
          </div>
        )}
        <br />
      </div>

      <div>
        <button onClick={() => clickHandler(4)}>{`${
          findId(4) ? "HIDE" : "SHOW"
        } CASE 4: `}</button>
        <span> Adjusting some state when a prop change </span>
        {findId(4) && (
          <div>
            <button onClick={() => setIds([...ids, 9])}>Add Id</button>
            <br />
            <br />
            <BadList ids={ids} />
            <br />
            <GoodList ids={ids} />
          </div>
        )}
        <br />
      </div>

      <div>
        <button onClick={() => clickHandler(5)}>{`${
          findId(5) ? "HIDE" : "SHOW"
        } CASE 5: `}</button>
        <span> Sharing logic between event handlers </span>
        <br /><br />
        {findId(5) && (
          <div>
            <button onClick={() => setProduct({ ...product, isInCart: false })}>take product out of the cart</button>
            <br />
            <div>{`Id: ${product.id} || name: ${product.name} || isInCart: ${product.isInCart}`}</div>
            <br /><br />
            <BadProductPage
              product={product}
              addToCart={(product: {
                id: number;
                name: string;
                isInCart: boolean;
              }) => setProduct(product)}
            />
            <br />
            <GoodProductPage
              product={product}
              addToCart={(product: {
                id: number;
                name: string;
                isInCart: boolean;
              }) => setProduct(product)}
            />
          </div>
        )}
        <br />
      </div>
    </div>
  );
}

export default App;

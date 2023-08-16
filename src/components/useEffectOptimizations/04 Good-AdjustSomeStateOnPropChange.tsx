import React, { useState } from "react";

interface ComponentProps {
  ids: number[];
}

const GoodList: React.FC<ComponentProps> = ({ ids }) => {
  console.time('✅')
  const [index, setIndex] = useState<number>(0)
  const [selection, setSelection] = useState<number>(ids[index]);

  // ✅ Better: Adjust the state while rendering
  const [prevItems, setPrevItems] = useState(ids);
  // make sure the evaluation is well done
  if (!prevItems.every((val, index) => val === ids[index])) {
    setPrevItems(ids);
    setIndex(0)
    setSelection(ids[0]);
  }
  console.timeEnd('✅')

  return (
    <div>
      <div>{`Ids: ${ids}`}</div>
      <div>{`Selected Id: ${selection}`}</div>
      <button onClick={() => {setIndex(index + 1); setSelection(ids[index + 1])}}>Change Selected</button>
    </div>
  )
}

export { GoodList };

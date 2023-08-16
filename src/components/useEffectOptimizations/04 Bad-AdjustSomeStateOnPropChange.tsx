import React, { useState, useEffect } from "react";

interface ComponentProps {
  ids: number[];
}

const BadList: React.FC<ComponentProps> = ({ ids }) => {
  console.time('❌')
  const [index, setIndex] = useState<number>(0)
  const [selection, setSelection] = useState<number>(ids[index]);

    // ❌ Avoid: Adjusting state on prop change in an Effect
    useEffect(() => {
      setIndex(0)
      setSelection(ids[0]);
    }, [ids]);
    console.timeEnd('❌')

  return (
    <div>
      <div>{`Ids: ${ids}`}</div>
      <div>{`Selected Id: ${selection}`}</div>
      <button onClick={() => {setIndex(index + 1); setSelection(ids[index + 1])}}>Change Selected</button>
    </div>
  )
}

export { BadList };

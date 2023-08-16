import React, { useEffect, useState } from "react";

interface ComponentProps {
  userId: number;
}

const BadProfilePage: React.FC<ComponentProps> = ({ userId }) => {
  console.time('❌')
  const [comment, setComment] = useState<string>('');
  
  // ❌ Avoid: Resetting state on prop change in an Effect
  useEffect(() => {
    setComment('');
  }, [userId])
  console.timeEnd('❌')

  return (
    <div>
      <div>{`User ID: ${userId}`}</div>
      <input
        value={comment}
        placeholder="Add a comment"
        onChange={(event) => (setComment(event.target.value))}
      />
    </div>
  )
}

export { BadProfilePage };

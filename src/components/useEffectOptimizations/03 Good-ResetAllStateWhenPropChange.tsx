import React, { useState } from "react";

interface ComponentProps {
  userId: number;
}

const GoodProfilePage: React.FC<ComponentProps> = ({ userId }) => {
  console.time('✅')
  // ✅ This and any other state below will reset on key change automatically
  const [comment, setComment] = useState<string>('');
  console.timeEnd('✅')

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

export { GoodProfilePage };

import { useState, memo, useEffect } from 'react';
import { getInitialState, getUpdatedBoard } from './utils';

function Box({ data, updateBoard }) {
  const [isHovering, setIsHovering] = useState(false);
  const [color, setColor] = useState(data?.isBlack ? 'black' : 'white');
  const handleMouseEnter = () => {
    updateBoard((b) => getUpdatedBoard(data.row, data.col, b));
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    updateBoard(getInitialState());
    setIsHovering(false);
  };

  useEffect(() => {
    if (data.isBlack) setColor('black');
    if (!data.isBlack) setColor('white');
    if (data.isAttackable) setColor('lightblue');
  }, [data]);

  return (
    <div
      className={color}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovering && (
        <img
          className='bishop'
          alt='bishop'
          src='https://www.pngmart.com/files/13/Bishop-PNG-Clipart.png'
        />
      )}
    </div>
  );
}

export default memo(Box);

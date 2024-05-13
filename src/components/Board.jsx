import { useState, useEffect } from "react";
import Tile from "./Tile";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "@constants"
import { canSwap, shuffle, swap, isSolved } from "@utils"

function Board({ image, setImages }) {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  // const [isStarted, setIsStarted] = useState(false);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles)
    setTiles(shuffledTiles);
  }

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1))
      setTiles(swappedTiles)
    }
  }

  const handleTileClick = (index) => {
    swapTiles(index)
  }

  const handleShuffleClick = () => {
    shuffleTiles()
  }

  const handleStartClick = () => {
    shuffleTiles()
    // setIsStarted(true)
  }

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };
  const hasWon = isSolved(tiles)

  useEffect(() => {
    shuffleTiles();
  }, [])

  useEffect(() => {
    if(!hasWon) return;
    setImages((images) =>
      images.map((img) => {
        if (img?.id === image?.id) {
          return { ...img, solved: true };
        } else {
          return img;
        }
      })
    );
  }, [hasWon])

  return (
    <>
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            imgUrl={image?.image}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
    </>
  );
}

export default Board;

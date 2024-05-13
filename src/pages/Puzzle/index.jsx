import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CheraFirst, CheraSecond, CheraThird, CholaFirst, CholaSecond, CholaThird, PandyaFirst, PandyaSecond, PandyaThird } from "@assets";
import { Board, Details } from "@components";

import cheraSolvedSound from "@assets/cheraSolvedSound.mp3";
import cholaSolvedSound from "@assets/cholaSolvedSound.mp3";
import pandyaSolvedSound from "@assets/pandyaSolvedSound.mp3";

const Puzzle = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [details, setDetails] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if(id === "chera") {
      setImages([
        {
          "id": 0,
          "image": CheraFirst,
          "solved": true,
          "interactable": true,
          "audio": cheraSolvedSound
        },
        {
          "id": 1,
          "image": CheraSecond,
          "solved": true,
          "interactable": false,
          "audio": cheraSolvedSound
        },
        {
          "id": 2,
          "image": CheraThird,
          "solved": true,
          "interactable": false,
          "audio": cheraSolvedSound
        },
      ]);
      setDetails("")
    } else if(id === "chola") {
      setImages([
        {
          "id": 0,
          "image": CholaFirst,
          "solved": false,
          "interactable": true,
          "audio": cholaSolvedSound
        },
        {
          "id": 1,
          "image": CholaSecond,
          "solved": false,
          "interactable": false,
          "audio": cholaSolvedSound
        },
        {
          "id": 2,
          "image": CholaThird,
          "solved": false,
          "interactable": false,
          "audio": cholaSolvedSound
        },
      ]);
      setDetails("")
    } else if(id === "pandya") {
      setImages([
        {
          "id": 0,
          "image": PandyaFirst,
          "solved": false,
          "interactable": true,
          "audio": pandyaSolvedSound
        },
        {
          "id": 1,
          "image": PandyaSecond,
          "solved": false,
          "interactable": false,
          "audio": pandyaSolvedSound
        },
        {
          "id": 2,
          "image": PandyaThird,
          "solved": false,
          "interactable": false,
          "audio": pandyaSolvedSound
        },
      ]);
      setDetails("")
    }
  }, [id])

  useEffect(() => {
    if(!images[0] && !images[1] && !images[2]) return
    if(images[0].solved && images[1].solved && images[2].solved) {
      setShowDetails(true);
    }
    const audio = new Audio(images[0].audio);
      audio.play();
  }, [images])

  return (
    // wrap for entire section
    <div className="screen bg-light-bg flex">

      {/* details section */}
      { showDetails && <Details details={details} id={id} /> }

      <div className="screen center">
        { !images[0]?.solved && <Board image={images[0]} setImages={setImages} /> }
        { images[0]?.solved && !images[1]?.solved && <Board image={images[1]} setImages={setImages} /> }
        { images[1]?.solved && !images[2]?.solved && <Board image={images[2]} setImages={setImages} /> }
      </div>

    </div>
  )
}

export default Puzzle

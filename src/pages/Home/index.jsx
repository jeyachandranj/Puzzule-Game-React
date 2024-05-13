import { useNavigate } from "react-router-dom";
import { CheraMain, CholaMain, PandyaMain } from "@assets"

const Home = () => {
  const data = [
    {
      "image": CheraMain,
      "redirect": "chera"
    },
    {
      "image": CholaMain,
      "redirect": "chola"
    },
    {
      "image": PandyaMain,
      "redirect": "pandya"
    },
  ]

  const navigate = useNavigate();

  return (
    // wrap for entire section
    <div className="screen bg-light-bg around">

      {/* card componets */}
      {
        data.map((dt) => (
          <div className="relative h-[21rem] w-[21rem] rounded-md bg-black">
            <img src={dt.image} alt="missing" className="full rounded-md" />

            <button
              className="absolute bottom-3 right-3 p-2 px-4 bg-light-secondary text-light-primary rounded-md hover:opacity-80"
              onClick={() => navigate(`/solve/${dt.redirect}`)}
            >
              Solve
            </button>
          </div>
        ))
      }

    </div>
  )
}

export default Home

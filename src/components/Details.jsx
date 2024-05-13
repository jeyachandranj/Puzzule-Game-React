import { useNavigate } from "react-router-dom"
import BgVideo from "../assets/winner.mp4";
const Details = ({ details, id }) => {
  const navigate = useNavigate();
  const lor = "வெற்றி தள்ளிப் போகலாம், ஆனால் முயற்சி வீண்போகாது."

  return (
    <div className="z-20 fixed screen bg-gray-600 center gap-3">
      <div className="h-[33rem] w-[33rem] bg-light-bg rounded-lg p-6">

        {/* details */}
        

        <div>
        <video autoPlay loop muted style={{marginTop:"100px"}} >
          <source src={BgVideo} type="video/mp4" />
        </video> 
        </div>

      <h4 style={{color:"black","font-weight":"bold"}}>  **  வெற்றி தள்ளிப் போகலாம், ஆனால் முயற்சி வீண்போகாது  **  </h4>

      </div>
    </div>
  )
}

export default Details

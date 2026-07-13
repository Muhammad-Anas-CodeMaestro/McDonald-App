import mcdonaldpic from "/McDonaldWRB.jpg"
import user_dp from "/solid_user.png"
import face_agent from "/face_agent.png"
import { useNavigate } from "react-router-dom"
import McDonaldBackground from "../componets/BackgroungLayout";
import mcdonald from "/McDonaldM.png"
import mcdonaldPic from "/McDonaldPic.png"
export default function UserTypeSelection ()
{
  const navigate = useNavigate();
  return (
    <McDonaldBackground leftImage={mcdonald} rightImage={mcdonaldPic}>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col gap-5 items-center p-2">
          <img src={ mcdonaldpic } alt="mcdonald" className="w-18 h-18" />
          <p>Please choose user flow to login into system!</p>
          <div className="flex gap-15 pt-10">
            <div className="bg-white rounded-lg text-red-500 py-4 px-18 flex flex-col gap-2 items-center cursor-pointer" onClick={ () => navigate('/dashboard') }>
              <img src={ user_dp } alt="user_dp" className="w-15 h-15" />
              <span>User Flow</span>
            </div>
            <div className="bg-white rounded-sm text-red-500 py-4 px-18 flex flex-col gap-2 items-center cursor-pointer" onClick={ () => navigate('/dashboard') }>
              <img src={ face_agent } alt="agent_Dp" className="w-15 h-15" />
              <span>Agent Flow</span>
            </div>
          </div>
        </div>
      </div>
    </McDonaldBackground>
  )
}
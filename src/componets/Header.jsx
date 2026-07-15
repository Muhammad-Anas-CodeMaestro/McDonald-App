import align_left from "/align_left.png"
import notification from "/notification.png"
import { useAuth } from "../context/AuthContext"

export default function Header ()
{
  const { user, logout } = useAuth();
  return (
    <div className='py-4 px-6 flex justify-between w-full'>
      <div className='flex gap-3 items-center'>
        <img src={ align_left } alt="bars" />
        <span className='font-light text-lg'>
          Welcome!
          <span className="font-medium text-lg">
            {` ${user.name}`}
          </span>
        </span>
      </div>
      <div className="flex gap-4 items-center">
        <img src={ notification } alt="notificationicon" />
        <button onClick={ logout } className="flex items-center justify-center bg-gray-50 rounded-3xl cursor-pointer px-2 py-1   gap-3">
          <img src="/side_image.jpg" alt="image" className="h-10 w-10 rounded-3xl" />
          <div className="flex flex-col">
            <span className='font-semibold text-lg'>{ user ? user.name : 'User' }</span>
            <span className="text-sm text-gray-500 leading-none">{ user.role }</span>
          </div>
          <img src="/arrow_down.png" alt="arrow_icon" className="pr-3"/>
        </button>
      </div>
    </div>
  )
}
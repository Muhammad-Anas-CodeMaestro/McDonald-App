import align_left from "/align_left.png"
import notification from "/notification.png"

export default function Header ()
{
  return (
    <div className='py-4 px-6 flex justify-between w-full'>
      <div className='flex gap-3 items-center'>
        <img src={ align_left } alt="bars" />
        <h2 className='font-medium text-lg'> Welcome! User </h2>
      </div>
      <div className="flex gap-3 items-center">
        <img src={notification} alt="notificationicon" />
        <h2 className='font-semibold text-lg pr-3'>User</h2>
      </div>
    </div>
  )
}
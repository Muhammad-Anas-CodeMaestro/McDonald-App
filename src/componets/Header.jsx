import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";

export default function Header () {
  return (
    <div className='py-4 px-6 flex justify-between w-full'>
      <div className='flex gap-4 items-center'>
        <FontAwesomeSvgIcon icon={ faBars } className='h-8' />
        <h2 className='font-medium text-lg'> Welcome! User </h2>
      </div>
      <h2 className='font-semibold text-lg pr-3'>User</h2>
    </div>
  )
}
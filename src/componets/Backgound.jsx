import McDonaldPic from '/McDonaldPic.png';
import McDnaldLogo from '/McDonaldM.png';

export default function Background () {
  return (
    <div className='flex w-screen h-screen bg-yellow-500'>
      <div>
        <img src={ McDnaldLogo } alt="McDonald's" className="w-1/2" />
      </div>
      <div>
        <img src={ McDonaldPic } alt="McDonald's" className="w-1/2" />
      </div>
    </div>
  )
}
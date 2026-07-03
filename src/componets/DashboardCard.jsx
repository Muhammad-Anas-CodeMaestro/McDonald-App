import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';

export default function DashboardCard ({
  icon,
  title,
  value,
  bgClass,
  titleColorClass,
  iconColorClass,
  bubbleColorClass,
  bubblePositionClass,
  iconClassName = 'w-5 h-5',
})
{
  return (
    <div className={ `flex justify-between ${ bgClass } p-2 rounded-lg w-full relative overflow-hidden` }>
      <div className='relative'>
        <div className='relative flex'>
          <div className={ `bg-white z-1 p-2 ${ iconColorClass } w-fit` }>
            <FontAwesomeSvgIcon icon={ icon } className={ iconClassName } />
          </div>
          { bubbleColorClass && (
            <div
              className={ `absolute left-8 top-2 opacity-50  w-5 h-5 ${ bubbleColorClass } rotate-45` }
            ></div>
          ) }
          { bubbleColorClass && (
            <div
              className={ `absolute left-15 top-6 opacity-50 w-3 h-3 ${ bubbleColorClass } rotate-45` }
            ></div>
          ) }
        </div>
        <h3 className={ `${ titleColorClass } font-medium pt-2` }>{ title }</h3>
      </div>
      { bubbleColorClass && (
        <div
          className={ `absolute top-15 left-52 w-20 h-20 ${ bubbleColorClass } rounded rotate-45 border-4 border-white` }
        ></div>
      ) }
      <h2 className='font-bold text-lg'>{ value }</h2>
    </div>
  );
}


import React from 'react'

const Confirmation = ({ modeldata}) => {
  const {text1,text2,btntext1,btntext2,btnhandler1,btnhandler2}=modeldata;
  return (
<div className='relative flex flex-col justify-center items-center mx-auto'>
<div className='text-white fixed inset-0 z-[1000]  flex  top-[40vh] flex-col gap-3  bg-richblack-900 px-4  justify-center items-center mx-auto  py-1 w-[25vw] h-[35vh] border-richblack-500 border rounded-lg'>
<div className='text-white font-bold text-[1.6rem] font-inter'>{text1}</div>
<div className='text-richblack-400 font-bold text-[1.4rem] font-inter'>{text2}</div>
<div className='flex flex-row gap-20'>
<button onClick={btnhandler1} className='flex flex-row gap-2 bg-yellow-300 px-4 py-2 rounded-md'>
{btntext1}
</button>
<button onClick={btnhandler2} className='flex flex-row gap-2 bg-yellow-300 px-4 py-2 rounded-md'>
{btntext2}
</button>
</div>
</div>
</div>
  )
}

export default Confirmation

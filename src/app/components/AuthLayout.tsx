import React, {ReactNode} from 'react';
// import sideImage from '../../../public/assets/side_image.jpg'
import styles from '../../../public/styles/authLayout.module.css'
const AuthLayout = ({children}:{children: ReactNode}) => {
  return (
    <div className='flex h-screen bg-gradient-to-b from-blue-400'>
        <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
            <div className={styles.imgStyle}>
                <div className={styles.mainImg}></div>
                {/* <Image src={sideImage} alt={''} height={522} /> */}
            </div>
            <div className="right flex flex-col justify-evenly ">
                <div className="text-center py-10 ">
                    {children}
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AuthLayout
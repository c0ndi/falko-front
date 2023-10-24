// import FalkoBlack from '@/public/images/falko-black.png'
import FalkoWalking from '@/public/images/walking.gif'
import Image from 'next/image'
import s from './index.module.scss';

export default function Loading() {
   return (
      <div className={s.wrapper}>
         <Image src={FalkoWalking} alt={'FalkoLogoBlack'} height={120} priority />
      </div>
   )
}
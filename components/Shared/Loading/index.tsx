import FalkoBlack from '@/public/images/falko-black.png'
import Image from 'next/image'
import s from './index.module.scss';

export default function Loading() {
   return (
      <div className={s.wrapper}>
         <Image src={FalkoBlack} alt={'FalkoLogoBlack'} height={75} priority />
      </div>
   )
}
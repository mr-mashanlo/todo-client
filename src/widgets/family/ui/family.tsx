import { motion } from 'motion/react';
import { type FC } from 'react';

import { useMorph, useMousePosition } from '@/shared/hooks';

import { EYE, FACE, MOUTH } from '../model/config';

interface Props {
  mood?: 'neutral' | 'angry' | 'sad'
}

const Family: FC<Props> = ( { mood = 'neutral' } ) => {
  const { x, y } = useMousePosition();

  const AMouth = useMorph( MOUTH[mood].A );
  const BMouth = useMorph( MOUTH[mood].B );
  const CMouth = useMorph( MOUTH[mood].C );

  const ALEye = useMorph( EYE[mood].AL );
  const AREye = useMorph( EYE[mood].AR );
  const BLEye = useMorph( EYE[mood].BL );
  const BREye = useMorph( EYE[mood].BR );
  const CLEye = useMorph( EYE[mood].CL );
  const CREye = useMorph( EYE[mood].CR );

  return (
    <div className="w-[7rem] sm:w-[20rem]">
      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 0H155V300H35V0Z" fill="#B1A1FF"/>
        <motion.g animate={FACE[mood].C( x, y )} transition={{ type: 'tween', ease: 'backOut' }}>
          <motion.path d={CLEye} fill="black" />
          <motion.path d={CREye} fill="black"/>
          <motion.path d={CMouth} fill="black"/>
        </motion.g>

        <path d="M205 40C238.137 40 265 66.8629 265 100V300H145V100C145 66.8629 171.863 40 205 40Z" fill="#FFDC8A" />
        <motion.g animate={FACE[mood].B( x, y )} transition={{ type: 'tween', ease: 'backOut' }}>
          <motion.path d={BLEye} fill="black" />
          <motion.path d={BREye} fill="black"/>
          <motion.path d={BMouth} fill="black"/>
        </motion.g>

        <path d="M150 150C232.843 150 300 217.157 300 300H0C0 217.157 67.1573 150 150 150Z" fill="#FF7171" />
        <motion.g animate={FACE[mood].A( x, y )} transition={{ type: 'tween', ease: 'backOut' }}>
          <motion.path d={ALEye} fill="black" />
          <motion.path d={AREye} fill="black"/>
          <motion.path d={AMouth} fill="black"/>
        </motion.g>
      </svg>
    </div>
  );
};

export default Family;
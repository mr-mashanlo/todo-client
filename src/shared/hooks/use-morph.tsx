import { interpolate } from 'flubber';
import { animate, useMotionValue } from 'motion/react';
import { useEffect } from 'react';

const useMorph = ( path: string ) => {
  const d = useMotionValue( path );

  useEffect( () => {
    const interpolator = interpolate( d.get(), path, { maxSegmentLength: 2 } );

    const animation = animate( 0, 1, {
      duration: 0.5,
      ease: 'easeInOut',
      onUpdate: latest => d.set( interpolator( latest ) )
    } );

    return () => animation.stop();
  }, [ d, path ] );

  return d;
};

export default useMorph;
import { Button, Dialog, DialogPanel } from '@headlessui/react';
import { type FC, type ReactNode, useState } from 'react';

interface Props {
  button: ReactNode,
  panel: ReactNode
}

const Modal: FC<Props> = ( { button, panel } ) => {
  const [ isOpen, setIsOpen ] = useState( false );

  return (
    <>
      <Button onClick={() => setIsOpen( true )} className="cursor-pointer">{button}</Button>
      <Dialog open={isOpen} onClose={() => setIsOpen( false )}>
        <div className="w-screen fixed inset-0 z-10 overflow-y-auto flex items-center justify-center bg-black/80">
          <div className="p-5 bg-white rounded-2xl">
            <DialogPanel transition>{panel}</DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
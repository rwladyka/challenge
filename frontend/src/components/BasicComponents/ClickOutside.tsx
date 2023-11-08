import { ReactNode, useEffect, useRef } from 'react';

type OutsideClickProps = {
  children: ReactNode;
  onClickOutside: () => void;
};

const ClickOutside = ({ children, onClickOutside }: OutsideClickProps) => {
  const component = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function listener({ target }: MouseEvent) {
      if (!target || !component.current) return;

      if (target instanceof Node && !component.current?.contains(target)) {
        onClickOutside();
      }
    }

    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  });

  return <div ref={component}>{children}</div>;
};

export default ClickOutside;

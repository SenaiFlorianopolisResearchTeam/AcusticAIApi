// Lib deps
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// Types
type ClientPortalInterface = {
  children: React.ReactNode;
  show?: boolean;
  onClose?: () => void;
  selector: string;
};

const ClientPortal = ({ children, selector, show }: ClientPortalInterface) => {
  const ref = useRef<Element | null>(null);
  useEffect(() => {
    ref.current = document.getElementById(selector);
  }, [selector]);
  return show && ref.current ? createPortal(children, ref.current) : null;
};

export default ClientPortal;

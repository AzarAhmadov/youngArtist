import { ReactLenis } from "lenis/react";
import { PropsWithChildren } from "react";

const SmoothProvider = ({ children }: PropsWithChildren) => {
   return <ReactLenis root>{children}</ReactLenis>;
};
export default SmoothProvider;

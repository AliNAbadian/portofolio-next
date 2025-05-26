import Lenis from "lenis";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface LenisContextProps {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextProps>({ lenis: null });

interface LenisProviderProps {
  children: React.ReactNode;
}

export function LenisProvider(props: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      syncTouch: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    setLenis(lenis);

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    let animationFrameHandle = 0;

    const render: FrameRequestCallback = (time) => {
      lenis?.raf(time);
      animationFrameHandle = requestAnimationFrame(render);
    };
    animationFrameHandle = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameHandle);
    };
  }, [lenis]);

  const memoedValue = useMemo(() => ({ lenis: lenis }), [lenis]);

  return (
    <LenisContext.Provider value={memoedValue}>
      {props.children}
    </LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}

interface ScrollProps {
  scroll: number;
}

export function useScroll(callback: ({ scroll }: ScrollProps) => void) {
  const { lenis } = useContext(LenisContext);

  useEffect(() => {
    if (!lenis) return;
    lenis.on("scroll", callback);

    return () => {
      lenis.off("scroll", callback);
    };
  }, [lenis, callback]);
}

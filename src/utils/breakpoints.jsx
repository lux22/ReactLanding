import { useMediaQuery } from "react-responsive";

export const useBreakpoints = () => {
  const isMobileSmall = useMediaQuery({ query: "(max-width: 325px)" });
  const isMobileMid = useMediaQuery({ query: "(max-width: 375px)" });
  const isMobileFloor = useMediaQuery({ query: "(max-width: 425px)" });

  const isTabletFloor = useMediaQuery({ query: "(max-width: 426px)" });
  const isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const isTabletCeil = useMediaQuery({ query: "(max-width: 1199px)" });

  const isLaptopFloor = useMediaQuery({ query: "(min-width: 1025px)" });
  const isLaptopCeil = useMediaQuery({ query: "(min-width:1280px)" });

  const isXHDFloor = useMediaQuery({ query: "(max-width: 1280px)" });
  const isXHDCeil = useMediaQuery({ query: "(max-width: 1600px)" });

  return {
    isMobileSmall,
    isMobileMid,
    isMobileFloor,
    isTabletFloor,
    isTabletMid,
    isTabletCeil,
    isLaptopFloor,
    isLaptopCeil,
    isXHDFloor,
    isXHDCeil,
  };
};

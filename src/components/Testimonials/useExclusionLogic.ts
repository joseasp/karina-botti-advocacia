import { useState, useCallback } from "react";
import { filterExcluding } from "./utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  keyPhrase: string;
  fullText: string;
  photo?: string;
  size: 'small' | 'medium' | 'large';
}

export const useExclusionLogic = (allCards: Testimonial[]) => {
  const [topVisible, setTopVisible] = useState<number[]>([]);
  const [bottomVisible, setBottomVisible] = useState<number[]>([]);

  const getAvailableForTop = useCallback((): Testimonial[] => {
    return filterExcluding(allCards, bottomVisible);
  }, [allCards, bottomVisible]);

  const getAvailableForBottom = useCallback((): Testimonial[] => {
    return filterExcluding(allCards, topVisible);
  }, [allCards, topVisible]);

  return {
    topVisible,
    bottomVisible,
    setTopVisible,
    setBottomVisible,
    getAvailableForTop,
    getAvailableForBottom,
  };
};

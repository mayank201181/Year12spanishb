// Phase C placeholder — Year 12 IB Spanish B Concept Shorts will be sliced in Phase C
// after the Year 9 video batch completes.
export interface ShortCaption {
  t: number;
  who: string;
  text: string;
}

export interface ShortClip {
  id: string;
  topicId: string;
  topicShort: string;
  topicIcon: string;
  strand: string;
  level?: "SL" | "HL";
  index: number;
  totalInTopic: number;
  title: string;
  summary: string;
  src: string;
  poster: string;
  startSec: number;
  endSec: number;
  durationSec: number;
  captions: ShortCaption[];
}

export const SHORTS: ShortClip[] = [];

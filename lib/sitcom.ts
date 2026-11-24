// Phase C placeholder — Year 12 IB Spanish B sitcom episodes will be rendered in Phase C
// after the Year 9 video batch completes.
export interface PauseChallenge {
  question: string;
  options: [string, string, string, string];
  answerIndex: number;
  explanation: string;
}

export interface SitcomChapter {
  t: number;
  label: string;
}

export interface SitcomEpisode {
  num: number;
  topicId: string;
  topicShort: string;
  title: string;
  logline: string;
  src: string;
  poster: string;
  vtt: string;
  durationSec: number;
  chapters: SitcomChapter[];
  pauses: PauseChallenge[];
}

export const SITCOM_EPISODES: SitcomEpisode[] = [];

export function sitcomEpisodeFor(topicId: string): SitcomEpisode | undefined {
  return SITCOM_EPISODES.find((e) => e.topicId === topicId);
}

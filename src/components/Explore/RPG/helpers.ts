import { ReactourStepContentArgs } from "reactour";
import { getAliceQuestConfig } from "./Quest/Alice";
import { getCarlQuestConfig } from "./Quest/Carl";

export const PEOPLE = [
  "alice",
  "carl",
  "jae",
  "ling",
  "megan",
  "nino",
  "reese",
  "tiana",
];

export type QuestConfig = ({
  acceptQuest,
  declineQuest,
}: {
  acceptQuest: () => void;
  declineQuest: () => void;
}) => (
  | {
      selector: string;
      content: JSX.Element;
      style: {
        minWidth: string;
        fontFamily: string;
      };
    }
  | {
      selector: string;
      content: (args: ReactourStepContentArgs) => React.ReactNode;
      style: {
        minWidth: string;
        fontFamily: string;
      };
    }
)[];

export type CharacterDetail = {
  tooltip: string;
  quest: QuestConfig;
};

export const getCharacterDetails: Record<string, CharacterDetail> = {
  alice: {
    tooltip: "Hey!",
    quest: getAliceQuestConfig,
  },
  carl: { tooltip: "Oh, hello fella!", quest: getCarlQuestConfig },
  jae: { tooltip: "Huh?", quest: getAliceQuestConfig },
  ling: { tooltip: "Hello!", quest: getAliceQuestConfig },
  megan: { tooltip: "How's it going?", quest: getAliceQuestConfig },
  nino: { tooltip: "Hmm...", quest: getAliceQuestConfig },
  reese: { tooltip: "What's up?", quest: getAliceQuestConfig },
  tiana: { tooltip: "Hi there :D", quest: getAliceQuestConfig },
};

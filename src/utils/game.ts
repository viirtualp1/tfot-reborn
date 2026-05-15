import {
  type Character,
  type TextEngineSequenceStep,
  TextEngineSequenceStepType,
} from "text-engine/types";

enum GameCharacters {
  IVAN = "ivan",
}

const characters: Record<GameCharacters, Character> = {
  [GameCharacters.IVAN]: {
    id: GameCharacters.IVAN,
    name: "Ivan",
  },
};

export const formattedCharacters: Character[] = [
  characters[GameCharacters.IVAN],
];

export const sequence: TextEngineSequenceStep[] = [
  {
    type: TextEngineSequenceStepType.DIALOG,
    data: {
      title: characters[GameCharacters.IVAN].name,
      text: "Hello!",
    },
  },
  {
    type: TextEngineSequenceStepType.DIALOG,
    data: {
      title: GameCharacters.IVAN,
      text: "Hello2!",
    },
  },
];

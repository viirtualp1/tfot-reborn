import {
  type Character,
  type TextEngineSequenceStep,
  TextEngineSequenceStepType,
  TextEngineSequenceActionType,
} from "text-engine/types";

enum GameCharacters {
  NIKITA = "nikita",
  YEAR = "year",
}

const characters: Record<GameCharacters, Character> = {
  [GameCharacters.NIKITA]: {
    id: GameCharacters.NIKITA,
    name: "Nikita",
  },
  [GameCharacters.YEAR]: {
    id: GameCharacters.YEAR,
    name: "Year",
  },
};

export const formattedCharacters: Character[] = [
  characters[GameCharacters.NIKITA],
];

export const sequence: TextEngineSequenceStep[] = [
  {
    type: TextEngineSequenceStepType.DIALOG,
    data: {
      title: characters[GameCharacters.NIKITA].name,
      text: `Hello, ${characters[GameCharacters.YEAR].name}!`,
    },
  },
  {
    type: TextEngineSequenceStepType.DIALOG,
    data: {
      title: characters[GameCharacters.YEAR].name,
      text: `Hello, ${characters[GameCharacters.NIKITA].name}!`,
    },
  },
  {
    type: TextEngineSequenceStepType.ACTION,
    data: {
      label: "Choose",
      action: {
        type: TextEngineSequenceActionType.CHOOSE_ONE,
        options: [
          {
            text: "Option 1",
            affect: [
              {
                character: characters[GameCharacters.NIKITA].id,
                value: -10,
              },
            ],
          },
          {
            text: "Option 2",
            affect: [
              {
                character: characters[GameCharacters.YEAR].id,
                value: 10,
              },
            ],
          },
        ],
      },
    },
  },
];

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
    relationships: {
      [GameCharacters.YEAR]: 100,
    },
  },
  [GameCharacters.YEAR]: {
    id: GameCharacters.YEAR,
    name: "Year",
    relationships: {
      [GameCharacters.NIKITA]: 100,
    },
  },
};

export const formattedCharacters: Character[] = [
  characters[GameCharacters.NIKITA],
  characters[GameCharacters.YEAR],
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
        id: "action-1",
        type: TextEngineSequenceActionType.CHOOSE_ONE,
        options: [
          {
            id: "option-1",
            text: "Negative",
            affect: [
              {
                affectFrom: characters[GameCharacters.YEAR].id,
                affectTo: characters[GameCharacters.NIKITA].id,
                value: -10,
              },
            ],
          },
          {
            id: "option-2",
            text: "Positive",
            affect: [
              {
                affectFrom: characters[GameCharacters.YEAR].id,
                affectTo: characters[GameCharacters.NIKITA].id,
                value: 10,
              },
            ],
          },
        ],
      },
    },
  },
];

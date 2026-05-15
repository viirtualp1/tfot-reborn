<template>
  <div class="px-5">
    <h1 class="mb-5">TFOT reborn</h1>

    <h2>Characters</h2>
    <ul class="mb-5 rounded-lg">
      <li
        v-for="character in textEngine.state.characters"
        :key="character.id"
        class="text-lg"
      >
        {{ character.name }}
      </li>
    </ul>

    <h2>Sequence</h2>
    <ul class="p-2 rounded-lg">
      <li
        v-for="(sequence, sequenceIndex) in textEngine.state.sequence"
        :key="sequenceIndex"
        class="text-left border rounded-sm mb-2 p-2 text-lg"
      >
        <template v-if="sequence.type === TextEngineSequenceStepType.DIALOG">
          <div class="bg-emerald-200 px-2 mb-1 rounded-sm">
            {{ sequence.data.title }}
          </div>
          <div>{{ sequence.data.text }}</div>
        </template>
        <template
          v-else-if="sequence.type === TextEngineSequenceStepType.ACTION"
        >
          <div class="bg-emerald-200 px-2 mb-1 rounded-sm">
            {{ sequence.data.label }}
          </div>
          <div class="flex gap-1">
            <button
              v-for="(option, optionIndex) in sequence.data.action.options"
              :key="optionIndex"
              class="bg-emerald-500 text-white flex-1 px-2 cursor-pointer mb-1 rounded-sm"
            >
              {{ option.text }}
            </button>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { TextEngine } from "text-engine/core";
import { TextEngineSequenceStepType } from "text-engine/types";
import { formattedCharacters, sequence } from "./utils/game";

const textEngine = new TextEngine({
  characters: formattedCharacters,
  sequence,
});

// const sequences: TextEngineSequenceStep[] = [
//   {
//     type: TextEngineSequenceStepType.ACTION,
//     data: {
//       label: "Choose 1",
//       actions: {
//         type: TextEngineSequenceActionType.CHOOSE_ONE,
//         options: [
//           {
//             text: "First option",
//             affect: [
//               {
//                 character: "Igor",
//                 value: 1,
//               },
//             ],
//           },
//         ],
//       },
//     },
//   },
// ];
</script>

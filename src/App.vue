<template>
  <div>{{ sequences }}</div>
</template>

<script setup lang="ts">
import {
  type TextEngineSequenceStep,
  TextEngineSequenceStepType,
  TextEngineSequenceActionType,
} from "text-engine/core";

const sequences: TextEngineSequenceStep[] = [
  {
    type: TextEngineSequenceStepType.ACTION,
    data: {
      label: "Choose 1",
      actions: {
        type: TextEngineSequenceActionType.CHOOSE_ONE,
        options: [
          {
            text: "First option",
            affect: [
              {
                character: "Igor",
                value: 1,
              },
            ],
          },
        ],
      },
    },
  },
];
</script>

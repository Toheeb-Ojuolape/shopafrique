<template>
  <div>
    <p>
      Paste the code snippet in the header of your website and start earning as
      people view and click on ads.
    </p>
    <v-tabs v-model="tab">
      <v-tab>Website</v-tab>
      <v-tab>Telegram</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <CodeSnippet :code="code" />
      </v-tab-item>
      <v-tab-item>
        <TelegramInstruction />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>


<script>
import CodeSnippet from "../../Misc/Creator/CodeSnippet.vue";
import TelegramInstruction from "../../Misc/Creator/TelegramInstruction.vue";
export default {
  props: {
    code: {
      type: String,
    },
  },
  components: {
    CodeSnippet,
    TelegramInstruction,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>
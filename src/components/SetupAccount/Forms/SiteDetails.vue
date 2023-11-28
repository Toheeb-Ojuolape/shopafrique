<template>
  <div>
    <p v-if="isAddSite">
      Earn by advertising on your terms – connect your website, social, and game
      accounts and reach your audience wherever they are
    </p>

    <div>
      <div>Platform</div>
      <div class="platform-cards">
        <PlatformCard
          @choosePlatform="choosePlatform"
          :icon="'website'"
          :title="'Website'"
          :active="platform === 'Website'"
        />
        <PlatformCard
          @choosePlatform="choosePlatform"
          :icon="'game'"
          :title="'Mobile Game'"
          :active="platform === 'Mobile Game'"
          :disabled="true"
        />
        <PlatformCard
          @choosePlatform="choosePlatform"
          :icon="'mobile'"
          :title="'Mobile App'"
          :active="platform === 'Mobile App'"
          :disabled="true"
        />
      </div>
    </div>

    <div>
      <div>Social Media</div>
      <div class="platform-cards">
        <PlatformCard
          @choosePlatform="choosePlatform"
          :icon="'telegram'"
          :title="'Telegram'"
          :active="platform === 'Telegram'"
        />
        <PlatformCard
          @choosePlatform="choosePlatform"
          :icon="'facebook'"
          :title="'Facebook'"
          :disabled="true"
        />
        <PlatformCard
          @choosePlatform="choosePlatform"
          :icon="'instagram'"
          :title="'Instagram'"
          :disabled="true"
        />
        <PlatformCard :icon="'whatsapp'" :title="'Whatsapp'" :disabled="true" />
      </div>
    </div>

    <div v-if="platform === 'Website'">
      <FormInput
        @handleInput="handleInput"
        :placeholder="'Enter your website\'\s url e.g https://bitcoin.com'"
        :name="'website'"
        :label="'Enter your website url'"
      />
    </div>
  </div>
</template>


<script>
import PlatformCard from "@/components/Misc/Creator/PlatformCard.vue";
import FormInput from "@/components/Misc/Forms/FormInput.vue";
export default {
  components: {
    PlatformCard,
    FormInput,
  },
  props: {
    isAddSite: {
      type: Boolean,
    },
  },
  data() {
    return {
      platform: "",
    };
  },
  methods: {
    choosePlatform(e) {
      this.platform = e;
    },
    handleInput(e) {
      this.$emit("handleInput", {
        channel: this.platform,
        website: e.website,
      });
    },
  },
};
</script>
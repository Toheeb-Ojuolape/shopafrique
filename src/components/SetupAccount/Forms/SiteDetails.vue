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
        />
        <PlatformCard
          @choosePlatform="choosePlatform"
          :icon="'mobile'"
          :title="'Mobile App'"
          :active="platform === 'Mobile App'"
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
  </div>
</template>


<script>
import PlatformCard from "@/components/Misc/Creator/PlatformCard.vue";
export default {
  components: {
    PlatformCard,
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
  },
};
</script>
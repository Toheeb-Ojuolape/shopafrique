<template>
  <div>
    <div class="campaign-creative-options">
      <CampaignCreativeOption
        :active="active === 'image'"
        :image="'image'"
        :title="'Image'"
        @selectMedia="selectMedia"
      />
      <CampaignCreativeOption
        :active="active === 'video'"
        :image="'video'"
        :title="'Video'"
        @selectMedia="selectMedia"
      />
      <CampaignCreativeOption
        :active="active === 'carousel'"
        :image="'carousel'"
        :title="'Carousel'"
        @selectMedia="selectMedia"
      />
    </div>

    <div v-if="active === 'image'">
      <p>Media | Upload your file</p>
      <FileUpload @selectImage="selectImage" />
    </div>

    <div v-if="active === 'video'">
      <p>Enter the link to your video(Vimeo, Dropbox, Google Drive)</p>
      <v-text-field
        outlined
        dense
        type="text"
        @input="setMediaLink"
        v-model="mediaLink"
        prepend-inner-icon="mdi-link"
      />
      <div v-if="mediaLink">
        <iframe
          width="560"
          height="315"
          :src="mediaLink"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>


<script>
import CampaignCreativeOption from "./CampaignCreativeOption.vue";
import FileUpload from "../../Misc/Forms/FileUpload.vue";
export default {
  data() {
    return {
      mediaLink: "",
    };
  },
  props: {
    active: {
      type: String,
    },
  },
  components: {
    CampaignCreativeOption,
    FileUpload,
  },
  methods: {
    selectMedia(e) {
      this.$emit("selectMedia", e);
    },
    setMediaLink(e) {
      this.$emit("selectImage", e);
    },
    selectImage(e) {
      this.$emit("selectImage", e)
    },
  },
};
</script>
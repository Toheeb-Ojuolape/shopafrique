<template>
  <div>
    <div class="image-upload">
      <div>
        <v-img
          style="margin: auto; width: 40px"
          src="../../../assets/image.png"
          alt="image"
        />

        <div>
          Drop your image here, or
          <button text @click="uploadImage" class="brand-color">browse</button>
          <input
            ref="image"
            hidden
            type="file"
            accept="image/png, image/jpeg"
            @change="handleImage"
          />
        </div>
      </div>
    </div>

    <div v-if="image" class="photo-selected">
      <img width="70px" :src="image" />

      <p class="mt-3">{{ name }}</p>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      image: "",
      name: "",
    };
  },
  methods: {
    uploadImage(e) {
      e.preventDefault();
      this.$refs.image.click();
    },

    handleImage(event) {
      const selectedFile = event.target.files[0];
      this.name = selectedFile.name;
      if (selectedFile) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.image = e.target.result;
          this.$emit("setImage", event);
        };
        reader.readAsDataURL(selectedFile);
      }
    },
  },
};
</script>



<style>
</style>
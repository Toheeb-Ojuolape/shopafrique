<template>
  <div>
    <div @click="uploadFile" class="file-upload">
      <div>
        <img
          width="50px"
          :src="
            image === 'fileupload'
              ? require(`../../../assets/${image}.svg`)
              : image
          "
        />
      </div>
      <div>
        <h3>Upload</h3>
        <p>Supports: PNG, JPEG</p>
      </div>
    </div>

    <input
      @change="selectImage"
      ref="image"
      type="file"
      accept="image/*"
      hidden
    />
  </div>
</template>


<script>
export default {
  data() {
    return {
      image: "fileupload",
      file: "",
    };
  },
  methods: {
    uploadFile() {
      this.$refs.image.click();
    },
    selectImage(e) {
      this.file = e.target.files[0];
      var input = e.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.image = e.target.result;
          this.$emit("selectImage",e.target.result)
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>
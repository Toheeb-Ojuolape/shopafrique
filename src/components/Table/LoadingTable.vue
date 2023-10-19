<template>
  <div class="tableWidth">
    <table class="table" cellspacing="0">
      <tbody class="tableBody" v-for="(_, i) in data" :key="i">
        <tr>
          <td>
            <v-checkbox />
          </td>
          <td><v-skeleton-loader type="list-item"></v-skeleton-loader></td>
          <td>
            <v-skeleton-loader type="list-item"></v-skeleton-loader>
          </td>
          <td><v-skeleton-loader type="list-item"></v-skeleton-loader></td>
          <td><v-skeleton-loader type="list-item"></v-skeleton-loader></td>
          <td><v-skeleton-loader type="list-item"></v-skeleton-loader></td>
          <td><v-skeleton-loader type="list-item"></v-skeleton-loader></td>
          <td><v-skeleton-loader type="list-item"></v-skeleton-loader></td>
          <td v-if="type === 'campaign'"><v-btn depressed>Details</v-btn></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "LoadingTable",
  props: {
    data: {
      type: Array,
    },
    buttonTitle: {
      type: String,
    },
    type: {
      type: String,
    },
    view: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
  },
};
</script>
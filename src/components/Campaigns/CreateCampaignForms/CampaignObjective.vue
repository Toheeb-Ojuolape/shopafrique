<template>
  <div class="campaign-objective">
    <ObjectiveOption
      :icon="'increase-awareness'"
      :title="'Increase awareness'"
      :description="'Show your campaign to more people'"
      @selectObjective="selectObjective"
      :objective="objective"
    />
    <ObjectiveOption
      :icon="'drive-traffic'"
      :title="'Drive traffic'"
      :description="'Get more people to click your ad'"
      @selectObjective="selectObjective"
      :objective="objective"
    />
  </div>
</template>


<script>
import ObjectiveOption from "@/components/Misc/Forms/ObjectiveOption.vue";
export default {
  name: "CampaignObjective",
  components: {
    ObjectiveOption,
  },
  props:{
    objective:{
      type:String
    }
  },
  methods:{
    selectObjective(e){
      this.$emit("selectObjective",e)
    }
  }
};
</script>
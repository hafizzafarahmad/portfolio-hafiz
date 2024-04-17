<template>
  <!-- class="text-center" style="overflow:hidden" -->
  <div >
    <!-- <b-row align-h="center" align-v="center" style="height: 100vh">
      <b-col xl="3" md="4" sm="6" cols="6">
        <img src="@/assets/50168181.png" class="about-img" style="width: 100%;" />
        <div class="mt-4">
          <strong>Domain Owner: Hafiz</strong>
        </div>
      </b-col>
      
    </b-row> -->
    <Main></Main>
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
export default {
  components: {
    Main,
  },
  name: "IndexPage",
};
</script>

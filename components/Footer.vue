<template>
  <div class="bg-secondary">
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div
          class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow"
          style="color: white"
        >
          <span>Hafiz Zafar Ahmad © 2023</span>
        </div>

        <!-- <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <div class="text-center">
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('linkedin')"
              v-tooltip.bottom="'LinkedIn'"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('github')"
              v-tooltip.bottom="'GitHub'"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('resume')"
              v-tooltip.bottom="'Resume'"
            >
              <font-awesome-icon :icon="['far', 'file']" />
            </button>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      linkedin: "",
      github: "",
      behance: "",
      resume: "",
    };
  },
  computed: {
    data() {
      return this.$store.state.profile.data;
    },
  },
  mounted() {
    this.setData();
  },
  methods: {
    setData() {
      this.picture = this.data.flat_picture;
      this.description = this.data.description;
      this.name = this.data.name;
      this.linkedin = this.data.links.linkedin;
      this.github = this.data.links.flat_picture;
      this.behance = this.data.links.github;
      this.resume = this.data.links.resume;
    },
    open(link) {
      switch (link) {
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "behance":
          window.open(this.behance, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>
span {
  font-weight: 500;
}

.btn {
  border-color: white;
  color: white;
}

.btn:hover {
  background-color: white;
  border-color: white;
  color: gray;
}

.btn:focus {
  background-color: white;
  border-color: white;
  color: gray;
}

@media screen and (max-width: 580px) {
  .pbelow {
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>

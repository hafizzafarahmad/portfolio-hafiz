<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >About Me.</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <div class="row">
        <div class="section col-xl-12 col-bg-12 col-md-12 col-sm-12">
          <div class="container text-center">
            <!-- about wrapper -->
            <div class="about">
              <!-- <div class="about-img-holder">
                <img src="assets/imgs/avatar-1.jpg" class="about-img" />
              </div> -->
              <div class="about-caption">
                <b-col xl="8" class="mx-auto">
                  <p style="font-size:larger" v-html="description"></p>
                  <b-row class="my-3">
                    <b-col xl="7" lg="9" md="7" sm="12">
                      <div class="d-flex align-items-center mt-2" style="height: 100%;">
                        <p style="font-size:larger" v-html="description2"></p>
                      </div>
                    </b-col>
                    <b-col xl="5" lg="3" md="5" sm="12">
                      <img src="@/assets/50168181.png" class="about-img" style="width: 100%" />
                    </b-col>
                  </b-row>
                  <p style="font-size:larger" v-html="description3"></p>
                </b-col>
                <div class="text-center pb-4">
                  <!-- <button
                    class="btn btn-outline-secondary mx-2"
                    @click="open('linkedin')"
                    v-tooltip.bottom="'LinkedIn'"
                  >
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                  </button> -->
                  <!-- <button
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
                  </button> -->
                  <!-- <button
                    @click="open('github')"
                    class="btn-rounded btn btn-outline-secondary mt-4 mr-4"
                  >
                    <font-awesome-icon :icon="['fab', 'github']" /> Github
                  </button>
                  <button
                    @click="open('resume')"
                    class="btn-rounded btn btn-outline-secondary mt-4"
                  >
                    <font-awesome-icon :icon="['far', 'file']" /> Resume
                  </button> -->
                </div>
              </div>
            </div>
            <!-- end of about wrapper -->
          </div>
        </div>
        <!-- <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="education" :nightMode="nightMode" />
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="experience" :nightMode="nightMode" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "@/components/helpers/Timeline";

export default {
  name: "About",
  components: {
    Timeline,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      education: {
        title: "education",
        data: null,
      },
      experience: {
        title: "experiences",
        data: null,
      },
      description: "",
      description2: "",
      description3: "",
      name: "",
      linkedin: "",
      github: "",
      resume: "",
    };
  },
  computed: {
    info() {
      return this.$store.state.profile.data;
    },
  },
  mounted() {
    this.education.data = this.info.education;
    this.experience.data = this.info.experience;
    this.description = this.info.description;
    this.description2 = this.info.description2;
    this.description3 = this.info.description3;
    this.name = this.info.name;
    this.linkedin = this.info.links.linkedin;
    this.github = this.info.links.github;
    this.resume = this.info.links.resume;
  },
  methods: {
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
.title {
  font-size: 30px;
  font-weight: 500;
}
</style>

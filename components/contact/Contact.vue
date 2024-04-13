<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-white': !nightMode,
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
        <strong
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          style="font-size: xx-large;"
          ><font-awesome-icon
              size="1x"
              class="mr-2"
              icon="fa-rocket"
            />hey there!</strong
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <div class="row">
        <div class="section col-xl-12 col-bg-12 col-md-12 col-sm-12">
          <div class="container text-center">
            <div class="about">
              <div class="about-caption">
                <b-col xl="4" lg="6" md="8" sm="12" cols="12" class="mx-auto">
                  <p style="font-size:x-large">I’m always up for a chat!</p>
                  <p style="font-size:x-large">I can be reached at 
                    <strong class="cursor-hover" @click="open('email')">{{ email }}</strong></p>
                </b-col>
                <div class="text-center pb-4">
                  
                </div>
              </div>
            </div>
            <!-- end of about wrapper -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "@/components/helpers/Timeline";

export default {
  name: "Contact",
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
      email: ""
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
    this.email = this.info.links.email;
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
        case "email":
          window.open(`mailto:${this.email}`, "_blank");
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

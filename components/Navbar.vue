<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light fixed-top p-st"
      :class="{
        'bg-light': !nightMode,
        'navbar-blur': navbarConfig.blur,
        'bg-dark2': nightMode,
      }"
    >
      <div class="container">
        <a
          class="navbar-brand"
          href="/"
          @click.prevent="$emit('scroll', 'home')"
        >
          <Logo :nightMode="nightMode" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span style="color: gray; font-size: 23px"
            ><i class="fas fa-bars"></i>
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2">
              <!-- <div
                :class="[
                  'header__link-wrapper',
                  { 'header__link-wrapper--active': selectedTab == 'home' },
                ]"
                @click="onSelectTab('home')"
              >
                <NuxtLink class="header__link link" :to="'/'" :exact="true">
                  <div class="link__icon-wrapper">
                    <svg class="link__icon">
                      <use :href="iconPath('home')" />
                    </svg>
                  </div>
                  <span class="link__text">Home</span>
                </NuxtLink>
              </div> -->
              <a
                class="nav-link"
                href="/"
                @click.prevent="$emit('scroll', 'home')"
                :class="{ 'text-light': nightMode }"
                >Home</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/about"
                @click.prevent="$emit('scroll', 'about')"
                :class="{ 'text-light': nightMode }"
                >About</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/skills"
                @click.prevent="$emit('scroll', 'skills')"
                :class="{ 'text-light': nightMode }"
                >Skills</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/portfolio"
                @click.prevent="$emit('scroll', 'portfolio')"
                :class="{ 'text-light': nightMode }"
                >Portfolio</a
              >
            </li>
            <!-- <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/contact"
                @click.prevent="$emit('scroll', 'contact')"
                :class="{ 'text-light': nightMode }"
                >Contact</a
              >
            </li> -->
            <li class="nav-item ml-2">
              <a
                class="nav-link"
                href="#"
                @click.prevent="switchMode"
                :class="{ 'text-light': nightMode }"
                ><i
                  :class="{
                    'fas fa-moon': nightMode,
                    'far fa-moon': !nightMode,
                  }"
                  v-tooltip.bottom="nightMode ? 'Light Mode' : 'Night Mode'"
                ></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "@/components/helpers/Logo";

export default {
  name: "Navbar",
  components: {
    Logo,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      selectedTab: "",
      navbarConfig: {
        blur: false,
      },
      localNightMode: this.nightMode,
    };
  },

  computed: {
    info() {
      return this.$store.state.profile.data;
    },
  },
  mounted() {
    const html = document.querySelector("html");
    html?.classList.add("dark-scheme");
    html?.classList.remove("light-scheme");
    this.navbarConfig = this.info.config.navbar;
  },
  methods: {
    onSelectTab(tab) {
      this.selectedTab = tab;
      this.$emit("scroll", "home");
    },
    switchMode() {
      this.localNightMode = !this.localNightMode;
      this.$emit("nightMode", this.localNightMode);
    },
    iconPath(icon) {
      console.log("@/assets/sprite.svg" + "#" + icon);
      return require("@/assets/sprite.svg") + "#" + icon;
    },
  },
};
</script>

<style scoped lang="scss">
@use "~/assets/styles/global/variables" as *;
@use "~/assets/styles/mixins/mixins" as *;
.nav-link {
  font-weight: 500;
}
.nav-link:hover {
  background-color: rgba(160, 159, 159, 0.336);
}

button {
  border: none;
  outline: none;
}

button:hover {
  border: none;
  outline: none;
}

nav {
  border-bottom: 1px solid rgba(160, 159, 159, 0.336);
  position: fixed !important;
}

.navbar-blur {
  background-color: #ffffff7e;
  backdrop-filter: blur(12px);
}

/* Animated */

.header {
  @include size(100%, auto);
  @include flex(center, flex-end);
  max-width: $max-width;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: rem(10px);
  font-family: var(--font-family-secondary);
  z-index: 2;

  &__nav {
    @include fixed(auto, 0, 0, 0);
    @include size(100%, #{rem($nav-height)});
    @include flex(center, space-around);
    border-top: $border;
    background-color: var(--tertiary);
    transition: background-color 0.15s ease-in-out;
    visibility: hidden;
    @media screen and (min-width: 1024px) {
      position: unset;
      flex-basis: 35%;
      justify-content: space-between;
      margin-top: auto;
      border-top: none;
      padding-left: 10px;
      background-color: transparent;
      transition: none;
    }
  }
  &__link {
    @include flex(center, space-between);
    position: relative;
    @media screen and (min-width: 1024px) {
      position: unset;
      justify-content: space-between;
      border-top: none;
      background-color: transparent;
    }
  }
  &__link-wrapper {
    @media screen and (min-width: 1024px) {
      &:hover {
        .link__text {
          transform: scale3d(1, 1, 1);
        }
      }
    }
    &--active {
      .link__icon {
        fill: var(--primary-light);
        animation: bounce 0.85s cubic-bezier(0.28, 0.84, 0.42, 1);
        @media screen and (min-width: 1024px) {
          fill: var(--tertiary);
        }
      }
      .link__text::after {
        content: "";
        transform: translate3d(0, 0, 0);
        background-color: var(--tertiary);
      }
    }
  }

  &__settings {
    @include size(100%, auto);
    @include flex(center, space-between);
  }

  &__lang {
    @include size(100%, auto);
    @include flex(center, flex-start);
    margin-right: 20px;
    padding-left: 15px;
    @media screen and (min-width: 1024px) {
      @include flex(center, flex-end);
    }
    .link {
      font-size: rem(16px);
      font-weight: 700;
    }
    .link.nuxt-link-active {
      text-decoration: underline;
      text-decoration-color: var(--secondary);
      text-decoration-skip-ink: none;
      text-decoration-thickness: rem(2px);
      text-underline-offset: rem(5px);
    }
  }

  &__separator {
    color: var(--tertiary);
    font-weight: 700;
    margin: 0 10px;
  }
}

.link {
  @include flex(center, center, column);
  color: var(--primary);
  font-size: rem(12px);
  font-weight: 700;
  text-decoration: none;
  text-transform: capitalize;
  -webkit-tap-highlight-color: transparent;
  transition: color 0.15s linear;
  @media screen and (min-width: 1024px) {
    font-size: rem(16px);
  }

  &__icon-wrapper {
    @include size(rem(20px), rem(20px));
    @include flex(center, center);
    @media screen and (min-width: 1024px) {
      @include size(rem(32px), rem(32px));
      fill: var(--background);
      color: var(--primary);
    }
  }

  &__icon {
    @include size(rem(18px), rem(18px));
    color: var(--stroke);
    fill: var(--tertiary);
    transform: translateZ(0);
    transform-origin: center center;
    backface-visibility: hidden;
    -webkit-font-smoothing: subpixel-antialiased;
    z-index: 2;
    visibility: hidden;
    transition: fill 0.15s ease-in-out, color 0.15s ease-in-out;
    @media screen and (min-width: 1024px) {
      @include size(rem(30px), rem(30px));
      fill: var(--background);
      color: var(--primary);
    }
  }

  &__text {
    color: var(--primary-dark);
    @media screen and (min-width: 1024px) {
      @include flex(center, center, column);
      color: var(--primary);
      transform: scale3d(0, 0, 0);
      will-change: transform;
      transform-origin: center center;
      backface-visibility: hidden;
      -webkit-font-smoothing: subpixel-antialiased;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
}

@keyframes bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-5px);
  }
  50% {
    transform: scale(1.05, 0.95) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(-2px);
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
</style>

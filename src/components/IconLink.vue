<template>
  <a :href="href" target="_blank">
    <FontAwesomeIcon :icon="[prefix, iconName]" class="icon" />
  </a>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  props: {
    href: {
      type: String,
      default: () => "",
    },
    prefix: {
      type: String,
      default: () => "",
    },
    iconName: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss">
.icon {
  padding: 20px;
  font-size: 2rem;
}
</style>

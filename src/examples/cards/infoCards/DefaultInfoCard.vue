<script setup>
defineProps({
  icon: {
    type: [String, Object],
    default: "",
    component: String,
    size: String,
    color: String,
  },
  image: {
    type: Object,
    component: String,
    class: String,
    default: () => {},
  },
  title: {
    type: [String, Object],
    required: true,
    text: String,
    class: String,
  },
  description: {
    type: [String, Object],
    required: true,
    text: String,
    class: String,
  },
  col: {
    type: String,
    default: "",
  },
  action: {
    type: Array,
    route: String,
    label: String,
    color: String,
    required: true,
  }
});
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>
<template>
  <div :class="`${col ? col : 'col-md-6'}`">
    <div v-bind="$attrs" class="info">
      <i
        v-if="icon"
        class="material-icons text-gradient"
        :class="`${
          typeof icon == 'object'
            ? `text-${icon.color} text-${icon.size}`
            : 'text-warning text-3xl'
        }`"
        >{{ typeof icon == "object" ? icon.component : icon }}</i
      >
      <img v-if="image" :src="image.component" :class="image.class" />
      <h5
        :class="
          typeof title == 'string' ? 'font-weight-bolder mt-3' : title.class
        "
      >
        {{ typeof title == "string" ? title : title.text }}
      </h5>
      <p :class="typeof description == 'string' ? 'pe-5' : description.class">
        {{ typeof description == "string" ? description : description.text }}
      </p>
      <div class="buttons-group">
        <a
          v-for="({ route, color, label }, index) of action"
          :key="index"
          :href="route"
          target="_blank"
          class="btn btn-sm mt-3 inline-block ms-1"
          :class="`${color ? `btn-${color}` : 'btn-warning'}`"
          >{{ label }}</a
        >
      </div>
    </div>
  </div>
</template>

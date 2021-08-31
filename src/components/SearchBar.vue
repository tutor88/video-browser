<template>
  <div class="apples">
    <input @input="onInput" />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput: function(e) {
      this.$emit('termChange', e.target.value);
    }
  }
};
</script>

<style scoped>
input {
  width: 40%;
}
div {
  text-align: center;
  margin: 20px;
}
</style>

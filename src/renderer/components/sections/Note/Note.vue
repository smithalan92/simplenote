<template>
  <div class="s-note">
    <div class="s-note__title"> {{ title }}</div>
    <div class="s-note__dates">
      <span>Created at {{ createdAt }}</span>
      <span v-if="modifiedAt">Updated at {{ modifiedAt }} </span>
    </div>
    <div class="s-note__contents"> {{ note.contents }}</div>
  </div>
</template>
<script src="./Note.js"></script>
<style src="./Note.scss" lang="scss"></style>

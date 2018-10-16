<template>
  <div
    class="s-app"
    id="app">
    <title-bar/>
    <div class="s-app__body">
      <div
        class="s-app__blank-slate"
        v-if="shouldShowBlankSlate">
        <suprise-icon class="s-app__blank-slate-image"/>
        <span class="s-app__blank-slate-text">No notes yet..</span>
        <button
          class="sn-button"
          @click="onClickAddNote">Add Note</button>
      </div>
      <div
        class="s-app__content"
        v-else>
        <app-sidebar/>
        <note :current-note-id="currentlySelectedNote"/>
      </div>
    </div>
  </div>
</template>
<style src="../../../styles/index.scss" lang="scss"></style>
<style src="./App.scss" lang="scss"></style>
<script src="./App.js"></script>

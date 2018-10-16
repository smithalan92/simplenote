import { mapGetters } from 'vuex';
import NotePreview from '@sections/NotePreview';

export default {
  name: 'Nav',

  components: {
    NotePreview,
  },

  computed: {
    ...mapGetters({
      notes: 'notes/getNotes',
    }),
  },

  methods: {
    onClickNote(id) {
      this.$store.dispatch('general/setCurrentNote', id);
    },
  },
};

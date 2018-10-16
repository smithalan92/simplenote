import { mapGetters } from 'vuex';
import TitleBar from '@sections/TitleBar';
import SupriseIcon from '@/assets/surprise.svg';
import AppSidebar from '@sections/AppSidebar';
import Note from '@sections/Note';

export default {
  name: 'App',

  components: {
    TitleBar,
    SupriseIcon,
    AppSidebar,
    Note,
  },


  computed: {
    ...mapGetters({
      notes: 'notes/getNotes',
    }),

    shouldShowBlankSlate() {
      return this.notes.length === 0;
    },

    currentlySelectedNote() {
      return this.$store.state.general.currentNoteId;
    },
  },

  methods: {
    onClickAddNote() {
      this.$store.dispatch('notes/addNote');
    },
  },
};

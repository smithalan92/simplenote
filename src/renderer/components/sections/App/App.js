import { mapGetters } from 'vuex';
import TitleBar from '@sections/TitleBar';
import SupriseIcon from '@/assets/surprise.svg';
import AppSidebar from '@sections/AppSidebar';

export default {
  name: 'App',

  components: {
    TitleBar,
    SupriseIcon,
    AppSidebar,
  },


  computed: {
    ...mapGetters({
      notes: 'notes/getNotes',
    }),

    shouldShowBlankSlate() {
      return this.notes.length === 0;
    },
  },

  methods: {
    onClickAddNote() {
      this.$store.dispatch('notes/addNote');
    },
  },
};

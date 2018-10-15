import os from 'os';
import Minimize from '@/assets/minimize.svg';
import Maximize from '@/assets/maximize.svg';
import Restore from '@/assets/restore.svg';
import Close from '@/assets/close.svg';

export default {
  name: 'TitleBar',

  components: {
    Minimize,
    Maximize,
    Restore,
    Close,
  },

  data() {
    return {
      isMaximized: false,
      shouldShowTitleBarActions: os.platform() !== 'darwin',
    };
  },

  methods: {
    windowAction(action) {
      // ipcRenderer.send(IPCEventNames.RENDERER.WINDOW_ACTION, action);

      if (action === 'maximize') this.isMaximized = true;
      if (action === 'restore') this.isMaximized = false;
    },
  },
};

// Fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faEye,
  faEyeSlash,
  faCheck,
  faExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export const installGlobalIcons = () => {
  library.add(faEye);
  library.add(faEyeSlash);
  library.add(faCheck);
  library.add(faExclamation);
  library.add(faXmark);
};

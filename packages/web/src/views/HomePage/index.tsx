import Image from "@/components/Image";
import SpaceArround from "@/components/SpaceArround";
import { getImage } from "@/plugins/ImageAutoLoader/ImageCollector";
import { defineComponent } from "vue";
import styles from "./index.module.scss";

export default defineComponent({
  setup() {
    return () => {
      return (
        <SpaceArround>
          <Image class={styles.avatar} src={getImage("pokemon")}></Image>
        </SpaceArround>
      );
    };
  },
});

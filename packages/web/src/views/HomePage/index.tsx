import { getImage } from "@/plugins/ImageAutoLoader/ImageCollector";
import { defineComponent } from "vue";
import styles from "./index.module.scss";
import SpaceArround from "@/components/SpaceArround";

export default defineComponent({
  setup() {
    return () => {
      return (
        <SpaceArround class={styles.homePageWrapper}>
          <div class={styles.profileWrapper}>
            <img class={styles.avatar} src={getImage("pokemon")} alt="" />
            <div class={styles.nickName}>yiwwhl</div>
          </div>
          <div class={styles.footer}>© {new Date().getFullYear()}</div>
          <div class={styles.contentWrapper}></div>
        </SpaceArround>
      );
    };
  },
});

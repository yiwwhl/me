import { PropType, defineComponent } from "vue";
import styles from "./index.module.scss";
import { CardConfig } from "@/components/Card/type";

export default defineComponent({
  props: {
    config: Object as PropType<CardConfig>,
  },
  setup(props, { slots }) {
    function handleClick() {
      props.config?.click();
    }
    return () => {
      return (
        <div onClick={handleClick} class={styles.cardWrapper}>
          {slots.default?.()}
        </div>
      );
    };
  },
});

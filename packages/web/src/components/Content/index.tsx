import { CSSProperties, PropType, defineComponent } from "vue";
import styles from "./index.module.scss";
import { LayoutDirection } from "@me/typings/enum";

export default defineComponent({
  props: {
    direction: {
      type: String as PropType<LayoutDirection>,
      default: LayoutDirection.HORIZONTAL,
    },
  },
  setup(props, { slots }) {
    return () => {
      const baseLayoutConfig: CSSProperties = {
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      };

      const directionLayoutConfig: Record<LayoutDirection, CSSProperties> = {
        [LayoutDirection.HORIZONTAL]: {
          flexDirection: "row",
        },
        [LayoutDirection.VERTICAL]: {
          flexDirection: "column",
        },
      };

      return (
        <div
          style={{ ...baseLayoutConfig, ...directionLayoutConfig[props.direction] }}
          class={styles.contentWrapper}
        >
          {slots.default?.()}
        </div>
      );
    };
  },
});

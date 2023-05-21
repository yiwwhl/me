import { appendPx } from "@/services";
import { CSSProperties, defineComponent } from "vue";

export default defineComponent({
  props: {
    size: {
      type: Number,
      default: 20,
    },
  },
  setup(props, { slots }) {
    const spaceArroundStyle: CSSProperties = {
      padding: appendPx(props.size),
      boxSizing: "border-box",
    };
    return () => {
      return <div style={spaceArroundStyle}>{slots.default?.()}</div>;
    };
  },
});

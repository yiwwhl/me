import { Size } from "@/services/Size";
import { CSSProperties, PropType, defineComponent } from "vue";

export default defineComponent({
  props: {
    src: {
      type: String,
      default: "",
    },
    size: {
      type: String as PropType<AnySize>,
      default: "small",
    },
  },
  setup(props) {
    const imgStyleMap: Partial<Record<AnySize, CSSProperties>> = {
      small: {
        width: Size.small,
        height: Size.small,
      },
    };

    return () => {
      return <img style={imgStyleMap[props.size]} src={props.src}></img>;
    };
  },
});

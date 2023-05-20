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
        width: "200px",
        height: "200px",
      },
    };

    return () => {
      return <img style={imgStyleMap[props.size]} src={props.src}></img>;
    };
  },
});

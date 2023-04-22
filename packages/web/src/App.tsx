import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld";
import { getImage } from "./plugins/ImageAutoLoader/ImageCollector";

export default defineComponent({
  setup() {
    console.log(getImage("pokemon"));

    return () => {
      return (
        <>
          <h1>Book Shop</h1>
          <HelloWorld />
          <img src={getImage("pokemon")} alt="" />
        </>
      );
    };
  },
});

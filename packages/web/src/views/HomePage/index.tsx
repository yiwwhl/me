import Image from "@/components/Image";
import SpaceArround from "@/components/SpaceArround";
import { getImage } from "@/plugins/ImageAutoLoader/ImageCollector";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => {
      return (
        <SpaceArround>
          <Image src={getImage("pokemon")}></Image>
        </SpaceArround>
      );
    };
  },
});

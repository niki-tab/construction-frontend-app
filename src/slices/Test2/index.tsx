import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Test2`.
 */
export type Test2Props = SliceComponentProps<Content.Test2Slice>;

/**
 * Component for "Test2" Slices.
 */
const Test2 = ({ slice }: Test2Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for test2 (variation: {slice.variation}) Slices
    </section>
  );
};

export default Test2;

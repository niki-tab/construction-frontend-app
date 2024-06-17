import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TestButton`.
 */
export type TestButtonProps = SliceComponentProps<Content.TestButtonSlice>;

/**
 * Component for "TestButton" Slices.
 */
const TestButton = ({ slice }: TestButtonProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for test_button (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TestButton;

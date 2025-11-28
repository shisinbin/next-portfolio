import Callout from '@/components/Callout';
import CodeSnippet from '@/components/CodeSnippet';
import ExpandableSection from '@/components/ExpandableSection';
import Figure from '@/components/Figure';
import SectionHeading from '@/components/SectionHeading';
import SmartLink from '@/components/SmartLink';
import Spacer from '@/components/Spacer';
import Image from 'next/image';

export const COMPONENT_MAP = {
  pre: CodeSnippet,
  // h2: (props) => (
  //   <h2
  //     style={{
  //       color: 'hsl(210deg 50% 30%)',
  //       textDecoration: 'dashed underline',
  //     }}
  //     {...props}
  //   />
  // ),
  Callout,
  Image,
  Figure,
  a: SmartLink,
  ExpandableSection,
  h2: SectionHeading,
  Spacer,
};

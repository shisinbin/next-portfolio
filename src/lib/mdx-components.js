import Callout from '@/components/Callout';
import CodeSnippet from '@/components/CodeSnippet';
import Figure from '@/components/Figure';
import SmartLink from '@/components/SmartLink';
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
};

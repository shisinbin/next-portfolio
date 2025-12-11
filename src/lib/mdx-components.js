import Callout from '@/components/Callout';
import CodeSnippet from '@/components/CodeSnippet';
import ExpandableSection from '@/components/ExpandableSection';
import Figure from '@/components/Figure';
import SectionHeading from '@/components/SectionHeading';
import SmartLink from '@/components/SmartLink';
import Spacer from '@/components/Spacer';

const basicPreStyles = {
  marginBottom: '2rem',
  backgroundColor: 'palegoldenrod',
  borderRadius: '8px',
  padding: '16px',
  overflowX: 'auto',
  overflowWrap: 'anywhere',
  whiteSpace: 'pre-wrap',
  color: 'var(--gray-100, white)',
  background: 'hsl(200deg, 13%, 22%)',
  fontSize: 'clamp(0.875rem, 1.5vw + 0.5rem, 1.125rem)',
};

export const COMPONENT_MAP = {
  pre: CodeSnippet,
  // pre: (props) => <pre style={basicPreStyles} {...props} />,
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
  Figure,
  a: SmartLink,
  ExpandableSection,
  h2: SectionHeading,
  Spacer,
};

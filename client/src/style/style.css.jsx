const container = {
  width: '100%',
  maxWidth: '82.5rem',
  padding: ' 0px 0.75rem',
  margin: '0px auto',
};

const title = {
  display: 'block',
  marginBlockStart: '0.83em',
  marginBlockEnd: '0.83em',
  marginInlineStart: '0px',
  marginInlineEnd: '0px',
  fontFamily: 'Nunito Sans, sans-serif',
  fontSize: '2rem',
  lineHeight: '2.6876rem',
  fontWeight: '400',
};

const circle = {
  backgroundColor: 'transparent',
  border: '1px solid rgb(224,224,224)',
  height: '32px',
  borderRadius: '50%',
  MozBorderRadius: '50%',
  WebkitBorderradius: '50%',
  width: '32px',
  fontSize: '15px',
};

const productContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  overflowX: 'scroll',
  maxWidth: '100%',
  margin: '0.75rem -1.09375rem 0px',
};

const product = {
  fontSize: '16px',
  position: 'relative',
  lineHeight: '1.5625rem',
  fontWeight: '500',
  listStyle: 'none',
  fontFamily: 'Nunito Sans, sans-serif',
};

const stars = {
  padding: '0px',
  display: 'inline-flex',
  width: '80px',
  height: '15px',
};

const star = {
  width: '15px',
  height: '15px',
};

const bag = {
  fontSize: '1rem',
  lineHeight: '1.5625rem',
  fontWeight: '500',
  padding: '0.625rem',
  display: 'block',
  width: '100%',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '4px',
  borderCollapse: 'collapse',
  backgroundColor: 'rgb(253,128,36)',
  borderColor: 'rgb(253,128,36)',
  color: 'rgb(0,0,0)',
  fontFamily: 'Nunito Sans, sans-serif',
};

export default {
  container,
  title,
  circle,
  productContainer,
  product,
  stars,
  star,
  bag,
};

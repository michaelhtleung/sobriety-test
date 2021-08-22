import styled from "styled-components";
import Container from "./Container";
import Header from "./Header";

const Title = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 50px;

/* or 72px */
letter-spacing: 0.02em;

color: #000000;
`;

const Subtitle = styled(Title)`
font-size: 19px;
line-height: 32px;
text-align: left;
`;

const AuthForm = ({ title, subtitle, children }) => {
  return (
    <Container>
      <Header>carma</Header>
      <Container style={{alignItems: "flex-start"}}>
        <svg style={{marginBottom: "20px"}} width="46" height="37" viewBox="0 0 46 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38.5145 10.0118C38.8799 10.0118 39.1765 10.3531 39.1765 10.7735V11.5521C39.1765 12.7602 37.9505 13.0588 37.0369 13.0588L35.599 10.0118H38.5145ZM36.6066 15.3533C37.4526 17.1602 37.8591 18.7843 37.8591 20.9385C37.8591 23.0258 37.3335 24.7976 36.5285 27.0037V29.8177C36.5285 30.6586 35.9353 31.3412 35.2044 31.3412H33.2184C32.4875 31.3412 31.8944 30.6586 31.8944 29.8177V28.2941H14.6821V29.8177C14.6821 30.6586 14.089 31.3412 13.3581 31.3412H11.3721C10.6412 31.3412 10.0481 30.6586 10.0481 29.8177V27.0037C9.24306 24.7976 8.71742 23.0258 8.71742 20.9385C8.71742 18.7843 9.1239 17.1602 9.96995 15.3533C11.0676 13.0116 12.4207 10.0925 13.8493 7.3517C14.9456 5.24618 15.5202 4.75103 16.8654 4.47375C18.8938 4.05478 20.7289 3.91766 23.2883 3.91766C25.8476 3.91766 27.6827 4.05478 29.7111 4.47375C31.0563 4.75103 31.6309 5.24618 32.7272 7.3517C34.1558 10.0925 35.509 13.0116 36.6066 15.3533ZM15.3441 19.9147C15.3441 18.6532 14.4544 17.6294 13.3581 17.6294C12.2618 17.6294 11.3721 18.6532 11.3721 19.9147C11.3721 21.1762 12.2618 22.2 13.3581 22.2C14.4544 22.2 15.3441 21.1762 15.3441 19.9147ZM28.5843 21.4383C28.5843 21.0178 28.2878 20.6765 27.9223 20.6765H18.6542C18.2888 20.6765 17.9922 21.0178 17.9922 21.4383C17.9922 21.8587 18.2888 22.2 18.6542 22.2H27.9223C28.2878 22.2 28.5843 21.8587 28.5843 21.4383ZM32.4783 13.0177C32.4783 13.0177 31.4985 10.2357 30.3188 8.23077C30.0513 7.77676 29.6369 7.46596 29.1682 7.36846C27.1676 6.95406 25.4146 6.82151 23.2883 6.82151C21.1619 6.82151 19.4089 6.95406 17.4083 7.36846C16.9396 7.46444 16.5252 7.77524 16.2577 8.23077C15.078 10.2342 14.0982 13.0177 14.0982 13.0177C16.2696 13.4946 19.8034 13.7749 23.2883 13.7749C26.7731 13.7749 30.3069 13.4946 32.4783 13.0177ZM35.2044 19.9147C35.2044 18.6532 34.3147 17.6294 33.2184 17.6294C32.1221 17.6294 31.2324 18.6532 31.2324 19.9147C31.2324 21.1762 32.1221 22.2 33.2184 22.2C34.3147 22.2 35.2044 21.1762 35.2044 19.9147ZM10.9775 10.0118H8.06203C7.6966 10.0118 7.40002 10.3531 7.40002 10.7735V11.5521C7.40002 12.7602 8.62607 13.0588 9.53964 13.0588L10.9775 10.0118Z" fill="black"/>
          <rect width="1.95882" height="34.8377" fill="#F94E4E"/>
          <rect x="9.57648" width="2.16234" height="8.70588" transform="rotate(90 9.57648 0)" fill="#F94E4E"/>
          <rect x="8.70587" y="34.8376" width="2.16234" height="8.70588" transform="rotate(90 8.70587 34.8376)" fill="#F94E4E"/>
          <rect x="45.7059" y="34.8376" width="2.16234" height="8.70588" transform="rotate(90 45.7059 34.8376)" fill="#F94E4E"/>
          <rect x="45.7059" width="2.16234" height="8.70588" transform="rotate(90 45.7059 0)" fill="#F94E4E"/>
          <rect x="43.7471" width="1.95882" height="34.8377" fill="#F94E4E"/>
        </svg>
        <Title>{title}</Title>
        <Subtitle style={{marginBottom: "20px"}}>{subtitle}</Subtitle>
        {children}
      </Container>
    </Container>
  );
}

export default AuthForm;
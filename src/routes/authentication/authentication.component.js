import SignUpForm from '../../components/sign-up/SignUp';
import SignInForm from '../../components/sign-in/SignIn';
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

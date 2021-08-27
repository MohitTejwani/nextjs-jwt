import Link from 'next/link';

/* Components */

const User = ({ props }) => {
  const { user } = props;

  return (
    <p className="account">
      {(user && (
        <Link href={{ pathname: '/user/logout' }}>
          <a>Logout</a>
        </Link>
      )) }
    </p>
  );
};

export default User;

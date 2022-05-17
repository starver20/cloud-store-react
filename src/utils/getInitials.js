const getInitials = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  let initials =
    user?.user?.firstName.slice(0, 1) + user?.user?.lastName.slice(0, 1);
  return initials;
};

export default getInitials;

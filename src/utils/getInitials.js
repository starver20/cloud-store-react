const getInitials = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  let initials = user?.firstName.slice(0, 1) + user?.lastName.slice(0, 1);
  console.log(initials);
  return initials;
};

export default getInitials;

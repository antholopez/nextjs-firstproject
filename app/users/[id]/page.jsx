async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const { data } = await res.json();
  return data;
}

export default async function UsersPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div>
      <h1>User Details</h1>
      <img src={user.avatar} alt={user.email} />
      <div>
        <h3>
          {user.id} {user.first_name} {user.last_name}
        </h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

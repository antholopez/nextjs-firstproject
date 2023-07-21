import Users from "@/components/Users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const { data } = await res.json();
  return data;
}

export default async function UsersPage() {
  const users = await fetchUsers();

  return <Users users={users}></Users>;
}

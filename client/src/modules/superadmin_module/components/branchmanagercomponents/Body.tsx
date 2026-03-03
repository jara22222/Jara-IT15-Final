import { UserTable } from "./UserTable";

export default function Body() {
  return (
    <section className="flex text-primary gap-2 flex-col px-5">
      <h1 className="text-3xl font-bold">Branch Managers</h1>
      <UserTable />
    </section>
  );
}

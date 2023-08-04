import Table from "@/components/Table";
import VoiceNoteInput from "@/components/VoiceNoteInput";

export default function IndexPage() {
  const list = [
    {
      description: "gelatina universal sabor fresa sobre",
      price: 2,
      quantity: 3,
      date: "03/08/2023",
    },
    {
      description: "sporade",
      price: 2.5,
      quantity: 1,
      date: "03/08/2023",
    },
  ];

  return (
    <>
      <VoiceNoteInput />
      <Table list={list} />
    </>
  );
}

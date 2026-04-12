export default function App() {
  return (
    <div className="grid grid-cols-12">
      <div className="bg-red-800 col-span-4">Child 1</div>
      <div className="bg-red-500 col-span-6">Child 2</div>
      <div className="bg-red-200 col-span-2">Child 3</div>
    </div>
  );
}
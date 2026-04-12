export default function App() {
  return (
    <div className="sm:grid grid-cols-12">
      <div className="bg-red-800 col-span-4">Child 1</div>
      <div className="bg-red-500 col-span-6">Child 2</div>
      <div className="bg-red-200 col-span-2">Child 3</div>
    </div>
    // <div className="md:bg-green-800 sm:bg-blue-300 bg-red-900">Hello</div>
  );
}
import ColumnLeft from "./components/columns/ColumnLeft";
import ColumnRight from "./components/columns/ColumnRight";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";


export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ColumnLeft />
        <ErrorBoundary>
          <ColumnRight />
        </ErrorBoundary>
      </div>
    </div>
  );
}

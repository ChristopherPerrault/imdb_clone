import Card from "./Card";

interface Result {
  id: string;
  original_title: string;
  overview: string;
  vote_count: number;
}

interface ResultsProps {
  results: Result[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;

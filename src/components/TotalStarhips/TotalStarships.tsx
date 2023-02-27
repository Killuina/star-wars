interface TotalStarshipsProps {
  totalStarships: number;
}

const TotalStarships = ({
  totalStarships,
}: TotalStarshipsProps): JSX.Element => {
  return <span className="starships-counter">{totalStarships}</span>;
};

export default TotalStarships;

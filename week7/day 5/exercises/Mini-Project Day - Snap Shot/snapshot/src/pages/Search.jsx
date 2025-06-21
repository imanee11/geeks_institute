import { useParams } from "react-router-dom";
import ImageGrid from "../components/ImageGrid";

const Search = () => {
    const { query } = useParams();
    return <ImageGrid query={query} />;
};

export default Search;

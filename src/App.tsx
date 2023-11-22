import { Flex } from "@radix-ui/themes";
import { GamesService } from "./services/GamesService";
import GameCard from "./components/GameCard";

function App() {
    const gamesList = GamesService.fetchGames();

    return (
        <Flex className="flex-wrap">
            {gamesList.map((value) => {
                return <GameCard key={value.id} game={value} />;
            })}
        </Flex>
    );
}

export default App;

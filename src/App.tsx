import { Flex, Text } from "@radix-ui/themes";
import { GamesService } from "./services/GamesService";
import { useState } from "react";
import { Game } from "./types/Game";
import GameCard from "./components/GameCard";

function App() {
    const [gamesList, setGameList] = useState<Game[] | undefined>();

    if (gamesList === undefined) {
        GamesService.fetchGamesAsync().then((res) => {
            setGameList(res);
        });
    }

    if (gamesList === undefined) {
        return null;
    }

    return (
        <Flex className="flex-wrap">
            {gamesList.map((value) => {
                return <GameCard key={value.id} game={value} />;
            })}
        </Flex>
    );
}

export default App;

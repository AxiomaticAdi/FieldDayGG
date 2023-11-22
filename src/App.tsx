import { Flex, Heading, Text } from "@radix-ui/themes";
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

    // if there are no games hydrated yet, render nothing
    if (gamesList === undefined) {
        return null;
    }

    return (
        <Flex className="justify-center align-center flex-col p-8">
            <Heading className="flex-1 self-center">FieldDay.gg</Heading>
            <Flex className="flex-row flex-wrap flex-1 justify-center self-center">
                {gamesList.map((value) => {
                    return <GameCard key={value.id} game={value} />;
                })}
            </Flex>
        </Flex>
    );
}

export default App;

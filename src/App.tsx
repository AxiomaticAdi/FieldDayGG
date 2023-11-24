import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { GamesService } from "./services/GamesService";
import { useState } from "react";
import { Game } from "./types/Game";
import GameCardModal from "./components/GameCardModal";

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
        <Flex className="align-center flex-col justify-center p-8">
            <Heading className="flex-1 self-center">FieldDay.gg</Heading>
            <Flex className="flex-1 flex-row flex-wrap justify-center self-center">
                {gamesList.map((value) => {
                    return <GameCardModal key={value.id} game={value} />;
                })}
            </Flex>
            <Button> TEST ME </Button>
        </Flex>
    );
}

export default App;

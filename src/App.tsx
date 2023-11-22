import { Flex, Text } from "@radix-ui/themes";
import { GamesService } from "./services/GamesService";
import { useState } from "react";
import { Game } from "./types/Game";

function App() {
    const [data, setData] = useState<Game[] | undefined>();

    if (data === undefined) {
        GamesService.fetchGamesAsync().then((res) => {
            setData(res);
        });
    }

    console.log(data);

    return (
        <Flex>
            <Text>TEST</Text>
            {/* <GameCard /> */}
        </Flex>
    );
}

export default App;

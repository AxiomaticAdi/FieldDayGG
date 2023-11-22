import { Game } from "../types/Game";
import { Setting } from "../types/Setting";

function fetchGames(): Game[] {
    const fieldDayGames: Game[] = [
        {
            id: "game1",
            name: "Egg Toss",
            imgUri: "EggToss.png",
            setting: Setting.Outdoor,
            equipment: ["eggs"],
            minPlayerCount: 2,
            maxPlayerCount: 50, // Assuming a large group can be divided into pairs
        },
        {
            id: "game2",
            name: "Tug of War",
            imgUri: "TugOfWar.png",
            setting: Setting.Any,
            equipment: ["rope"],
            minPlayerCount: 4,
        },
    ];

    return fieldDayGames;
}

export const GamesService = {
    fetchGames,
};

import axios from "axios";

import { Game } from "../types/Game";
import { Setting } from "../types/Setting";

const dataEndpoint = "https://docs.google.com/spreadsheets/d/1puezgtVv4978tGpoEjxrW-GALXBaUSx6_SBmFZRABlw/gviz/tq?";

type SheetCell = {
    v: string | number;
    f: string | undefined;
};

type SheetRow = {
    c: (SheetCell | null)[];
};

export function sheetRowToMatch(cell: SheetRow, id: string): Game {
    const gameId = String(cell.c[0]?.v) ?? "";
    const name = String(cell.c[1]?.v) ?? "";
    const image = String(cell.c[2]?.v) ?? "";
    const settingRaw = String(cell.c[3]?.v) ?? "";
    const setting = settingRaw === "outdoor" ? Setting.Outdoor : settingRaw === "indoor" ? Setting.Indoor : Setting.Any;

    const equipment = String(cell.c[4]?.v).split(",") ?? "";
    const minCount = Number(cell.c[5]?.v) ?? 0;
    const maxCount = Number(cell.c[6]?.v) ?? 0;

    return {
        id: gameId,
        equipment: equipment,
        imgUri: image === "undefined" ? undefined : image,
        minPlayerCount: minCount,
        name: name,
        setting: setting,
        maxPlayerCount: maxCount
    }
}

function mapObjectToGames(resultObj: any): Game[] | undefined {
    const games: Game[] = [];

    if (resultObj.table === undefined || resultObj.table.rows === undefined) {
        console.log("Error parsing JSON object from data: resultObj.table or resultObj.table.rows is undefined.");
        return undefined;
    }

    for (let i = 0; i < resultObj.table.rows.length; i++) {
        const cell = resultObj.table.rows[i];
        const game = sheetRowToMatch(cell, i.toString());
        games.push(game);
    }

    return games;
}

async function fetchGamesAsync(): Promise<Game[]> {
    const result = await axios.get<string>(dataEndpoint, {}).then((res) => {
        // strip out the setResponse text from the data
        let raw: string = res.data;
        const startText = ".setResponse(";
        raw = raw.substring(raw.indexOf(startText) + startText.length);
        raw = raw.substring(0, raw.length - 2);
        const resultObj = JSON.parse(raw);
        const matches = mapObjectToGames(resultObj);

        if (matches !== undefined) {
            return matches;
        } else {
            console.log("mapping resultObj to matches failed.");
        }
    });

    return result ?? [];
}

export const GamesService = {
    fetchGamesAsync,
};

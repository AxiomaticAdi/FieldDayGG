import * as Dialog from "@radix-ui/react-dialog";
import { Game } from "../types/Game";
import "./styles.css";
import GameCard from "./GameCard";

export default function GameCardModal({ game }: { game: Game }) {
    return (
        <Dialog.Root>
            <Dialog.Trigger type="button">
                <GameCard game={game} />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                    <Dialog.Title className="text-3x font-extrabold leading-tight">
                        {game.name}
                    </Dialog.Title>
                    <Dialog.Description className="DialogDescription">
                        <div>{game.setting}</div>
                        <div>{game.equipment}</div>
                        <div>{game.minPlayerCount}</div>
                        <div>{game.maxPlayerCount}</div>
                    </Dialog.Description>
                    {/* <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                        <Dialog.Close asChild>
                            <button className="Button green">Save changes</button>
                        </Dialog.Close>
                    </div> */}
                    <Dialog.Close
                        className="absolute right-6 top-0 rounded-lg border
                    border-teal-400 px-6 py-2 text-zinc-400 hover:border-teal-200"
                    >
                        <button className="IconButton" aria-label="Close">
                            CLOSE
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

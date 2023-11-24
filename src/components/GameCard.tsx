import * as Dialog from '@radix-ui/react-dialog';
import { Card, Flex, Inset, Text, Strong } from "@radix-ui/themes";
import { Game } from "../types/Game";
import './styles.css';

const placeholder = "https://img.freepik.com/premium-vector/lightning-electric-power-vector-logo-design-element-energy-thunder-electricity-symbol_666746-43.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699401600&semt=ais";

export default function GameCard({ game }: { game: Game }) {
    const imageUri = game.imgUri ?? placeholder;

    console.log(game);

    return (
        <Dialog.Root>
            <Dialog.Trigger type="button">
                <Flex className="p-5">
                    <Card style={{ width: 200 }}>
                        <Inset clip="padding-box" side="top" pb="current">
                            <img
                                src={imageUri}
                                alt={game.name}
                                style={{
                                    display: "block",
                                    objectFit: "cover",
                                    width: "100%",
                                    height: 200,
                                    backgroundColor: "var(--gray-5)",
                                }}
                            />
                        </Inset>
                        <Text as="p" size="3" className="text-center">
                            <Strong>{game.name}</Strong>
                        </Text>
                    </Card>
                </Flex>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                    <Dialog.Title className="text-3x leading-tight font-extrabold">{game.name}</Dialog.Title>
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
                    <Dialog.Close className="absolute right-6 top-0 text-zinc-400 rounded-lg
                    border px-6 py-2 border-teal-400 hover:border-teal-200">
                        <button className="IconButton" aria-label="Close">
                            CLOSE
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

import { Card, Flex, Inset, Text, Strong } from "@radix-ui/themes";
import { Game } from "../types/Game";

const placeholder =
    "https://img.freepik.com/premium-vector/lightning-electric-power-vector-logo-design-element-energy-thunder-electricity-symbol_666746-43.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699401600&semt=ais";

export default function GameCardModal({ game }: { game: Game }) {
    const imageUri = game.imgUri ?? placeholder;

    console.log(game);

    return (
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
    );
}

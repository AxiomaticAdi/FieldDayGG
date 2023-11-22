import { Card, Flex, Inset, Text, Strong } from "@radix-ui/themes";
import { Game } from "../types/Game";

export default function GameCard({ game }: { game: Game }) {
    return (
        <Flex className="p-5">
            <Card>
                <Inset clip="padding-box" side="top" pb="current">
                    <img
                        src={game.imgUri}
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

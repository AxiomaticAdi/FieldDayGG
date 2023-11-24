import { Card, Flex, Text, Strong } from "@radix-ui/themes";
import { Game } from "../types/Game";

export default function GameCardModal({ game }: { game: Game }) {
    return (
        <Flex className="p-5">
            <Card style={{ width: 200 }}>
                {/* <Inset clip="padding-box" side="top" pb="current">
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
                </Inset> */}
                <Text as="p" size="3" className="text-center">
                    <Strong>{game.name}</Strong>
                </Text>
            </Card>
        </Flex>
    );
}

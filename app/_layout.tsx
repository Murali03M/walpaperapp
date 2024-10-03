import { Link } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default async function Layout() {

    return (
        <SafeAreaView>

            <Link href={"/explore"}>
                <Text>Explore</Text>
            </Link>

            <Link href={"/foryou"}>
                <Text>Foryou</Text>
            </Link>

            <Link href={"/account"}>
                <Text>account</Text>
            </Link>

        </SafeAreaView>
    )
}
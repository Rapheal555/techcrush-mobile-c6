import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { MyProvider } from "@/context/AuthContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { SQLiteProvider, type SQLiteDatabase } from "expo-sqlite";
export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <MyProvider>
      <SQLiteProvider databaseName="test.db" onInit={migrateDbIfNeeded}>
        <ThemeProvider
          value={colorScheme === "light" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={{ presentation: "modal", title: "Modal" }}
            />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </SQLiteProvider>
    </MyProvider>
  );
}

async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  let { user_version: currentDbVersion } = (await db.getFirstAsync<{
    user_version: number;
  }>("PRAGMA user_version")) ?? { user_version: 0 };
  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }
  if (currentDbVersion === 0) {
    await db.execAsync(`
PRAGMA journal_mode = 'wal';
CREATE TABLE users (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, email TEXT NOT NULL, age INTEGER);
`);
    // await db.runAsync(
    //   "INSERT INTO todos (value, intValue) VALUES (?, ?)",
    //   "hello",
    //   1,
    // );

    currentDbVersion = 1;
  }
  // if (currentDbVersion === 1) {
  //   Add more migrations
  // }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

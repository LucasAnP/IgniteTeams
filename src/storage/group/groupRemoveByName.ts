import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const groupsInStorage = await groupsGetAll();
    const filtered = groupsInStorage.filter((group) => group !== groupDeleted);
    const groups = JSON.stringify(filtered);

    await AsyncStorage.setItem(GROUP_COLLECTION, groups);
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
  } catch (error) {
    throw error;
  }
}

/*
This is a dummy "database" with functions to:
- fetch all of the Joymart items
- add/remove item in cart
- add/remove item in Routine Essentials
- show all routine essential items
- show all cart items
In an actual implementation, this would be linked to the shop's actual database
*/

import { get, update } from "idb-keyval";
import ITEMS from "../database/items";
import { ItemDetails } from "../constants/item";

export async function tourIsShown({ tourName }: { tourName: string }) {
  const value = await get(tourName);
  console.log(value);
  if (value === true) {
    return true;
  }
  return false;
}

function returnAllItems(): Map<string, ItemDetails> {
  /*
  itemTable - Map of all items sold in Joyment
    Find item by id: itemTable.get('a')
    Iterate all items: itemTable.forEach((value, key) { ... })
  */
  const itemTable = new Map<string, ItemDetails>();
  ITEMS.forEach((item, id) => {
    itemTable.set(`${id}`, item);
    console.log(`Set Item#${id}:`);
    console.log(item);
  });
  console.log("Initialized itemTable");
  return itemTable;
}

export const ITEMS_MAP = returnAllItems();

// CartItem - one singular entry
/* In the future, if we want to add CartItem variants (e.g. color of shirt, flavor of soda, etc), we
 * can add it as another attribute.
 *
 * Example
 * {
 *   itemId: {
 *      count: number, (ADDED)
 *      variant: string, (NOT ADDED)
 *      ..
 *   }
 *   ..
 * }
 *
 * Note: we don't have a user table or authentication for the prototype, so the cart is stored on the
  pseudouser's local machine using idb-keyval
*/
export type CartItem = [string, number]; // string - id, number - count (number of items purchasing)
export function useCart() {
  async function getCart() {
    return await get("cart");
  }

  async function addToCart({
    itemId,
    count = 1,
  }: {
    itemId: number;
    count: number;
  }) {
    console.log("updating cart");
    await update("cart", (data) => {
      const newData = data || {};
      newData[itemId] = { count };
      console.log(newData);

      return newData;
    })
      .then(() => console.log(`Added Item#${itemId} to Cart`))
      .catch((e) => console.log(`Added Item#${itemId} to Cart Failed: ${e}`));
  }

  async function removeFromCart({ itemId }: { itemId: number }) {
    await update("cart", (data) => {
      const newData = data || {};
      delete newData[itemId];
      return newData;
    })
      .then(() => {
        console.log(`Removed Item#${itemId} from Cart`);
      })
      .catch((e) =>
        console.log(`Remove Item#${itemId} from Cart Failed: ${e}`)
      );
  }

  return {
    get: getCart,
    add: addToCart,
    remove: removeFromCart,
  };
}

/*
  routine essentials - a list of items the user selected to store so it's easier to add/reference, stored
  in Object form (empty metadata, more added later)
    Datastructure
    {
      itemId: {},
      ..
    }
  Note: we don't have a user table or authentication for the prototype, so RE is stored on the
  pseudouser's local machine using idb-keyval
*/
export type RoutineEssentialItem = [string, {}]; // string - id, {} - empty array, if we want to add more attributes in the future, they go here

export function useRoutineEssentals() {
  async function getRoutineEssentals() {
    return await get("routine-essentials");
  }

  async function addToRoutineEssentals({ itemId }: { itemId: number }) {
    console.log("updating routine-essentials");
    await update("routine-essentials", (data) => {
      const newData = data || {};
      newData[itemId] = {}; // TODO: fill in more metadata later
      console.log(newData);

      return newData;
    })
      .then(() => console.log(`Added Item#${itemId} to Routine Essentals`))
      .catch((e) =>
        console.log(`Add Item#${itemId} to Routine Essentals Failed ${e}`)
      );
  }

  async function removeFromRoutineEssentals({ itemId }: { itemId: number }) {
    await update("routine-essentials", (data) => {
      const newData = data || {};
      delete newData[itemId];
      return newData;
    })
      .then(() => {
        console.log(`Removed Item#${itemId} from Routine Essentals`);
      })
      .catch((e) =>
        console.log(`Remove Item#${itemId} from Routine Essentals Failed ${e}`)
      );
  }

  return {
    get: getRoutineEssentals,
    add: addToRoutineEssentals,
    remove: removeFromRoutineEssentals,
  };
}

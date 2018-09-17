/* eslint-disable no-constant-condition */
import developers from '../../data/devs.json'
import { randomIndexInArray, printFriend, sleep } from '../../shared'

const closestFriendsGenerator = function *(developersList, index) {
  const cursor = {
    prev: index,
    next: index
  }

  while (true) {
    cursor.prev--
    cursor.next++

    const nextFriend = developersList[cursor.next]
    const prevFriend = developersList[cursor.prev]

    // no more friends left :(
    if (!nextFriend && !prevFriend) return

    yield [prevFriend, nextFriend]
  }
}

;(async function main() {
  const colosestFriends = closestFriendsGenerator(developers, 30)

  const closestFriends = colosestFriends.next().value

  console.log(printFriend(closestFriends[0]), '--', printFriend(closestFriends[1]))

  // do some kind of computation
  await sleep(2000)

  const notSoCloseFriends = colosestFriends.next().value

  console.log(printFriend(notSoCloseFriends[0]), '--', printFriend(notSoCloseFriends[1]))
})()
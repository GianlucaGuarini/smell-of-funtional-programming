/* eslint-disable no-constant-condition */
import developers from '../../data/devs.json'
import { randomIndexInArray, printFriend, sleep } from '../../shared'

const friendsGenerator = function *(developersList, index) {
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
  const DEVELOPER_INDEX = 30
  const friends = friendsGenerator(developers, DEVELOPER_INDEX)

  const [closestFriendLeft, closestFriendRight] = friends.next().value

  console.log('the closest friends of', developers[DEVELOPER_INDEX].first_name, 'are:')
  console.log(
    printFriend(closestFriendLeft),
    '--',
    printFriend(closestFriendRight)
  )

  // simulate some kind of computation
  await sleep(2000)

  const [otherPossibleFriendLeft, otherPossibleFriendRight] = friends.next().value

  console.log('other possible friends are:')
  console.log(
    printFriend(otherPossibleFriendLeft),
    '--',
    printFriend(otherPossibleFriendRight)
  )
})()
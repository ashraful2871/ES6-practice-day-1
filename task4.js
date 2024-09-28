const evenFriends = (friends) => {
  const result = [];
  for (const friend of friends) {
    if (friend.length % 2 === 0) {
      result.push(friend);
    }
  }
  return result;
};
const friends = evenFriends(["ashraful", "rokon", "protik", "zidan"]);
console.log(friends);

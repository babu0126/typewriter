const biggestFollower = (objs) => {
  let followerCounter = 0;
  let bigFollowerName = '';
  for (const obj in objs) {
    if (objs[obj].follows.push() > followerCounter) {
      followerCounter = objs[obj].follows.push();
      bigFollowerName = objs[obj].name;
    }
  }
  return bigFollowerName;
  // returns the name of the individual who follows the most people.
};

const mostPopular = (objs) => {
  let arrs = [];
  let count = {};
  let max = 0;
  let output = '';
  
  for (const obj in objs) {
    objs[obj].follows.forEach(element => arrs.push(element));
  }
  for (const arr of arrs) {
    if (!count[arr]) {
      count[arr] = {counter: 1};
    } else {
      count[arr].counter += 1;
      count[arr].name = objs[arr].name;
    }
  }
  for (const obj in count) {
    if (count[obj].counter > max) max = count[obj].counter;
  }
  for (const obj in count) {
    if (count[obj].counter === max) {
      output += `${count[obj].name}, `;
    }
  }
  return output;
  // returns the name of the most popular (most followed) individual.
};

const printAll = (objs) => {
  let output = {};
  for (const obj in objs) {
    if (!output[objs[obj].name]) {
      output[objs[obj].name] = {following: [],followed: []};
    } // create output
    for (const index in objs[obj].follows) {
      objs[obj].follows[index] = objs[objs[obj].follows[index]].name;
    } // change the object.follows to 'Alice...etc.'
    if (Object.prototype.hasOwnProperty.call(output, objs[obj].name)) {
      output[objs[obj].name].following = objs[obj].follows;
    } // assign the follows array to the output followings.
  }
  for (const obj in output) {
    for (const val of output[obj].following) {
      output[val].followed.push(obj);
    }
  }
  return output;
  // outputs a list of everyone and for each of them, the names of who they follow and who follows them.
};

const unrequitedFollowers = (objs) => {
  // console.log(objs);
  let listOfNames = [];
  for (const obj in objs) {
    let difference = objs[obj].following.filter(x => !objs[obj].followed.includes(x));
    if (difference.length) {
      listOfNames.push(obj);
      console.log(listOfNames);
    }
  }
  return listOfNames;
  // returns a list of names for those who follow someone that doesn't follow them back.
};

const mostFollowersOverThirty = (objs) => {

  let listOfNames = listofNamesOverThirty(objs);
  let newObj = printAll(objs);
  let output = {};
  let max = 0;
  let string = '';

  for (const obj in newObj) {
    if (!output[obj]) {
      output[obj] = {count: 0};
    }
    for (const val of listOfNames) {
      if (newObj[obj].followed.includes(val)) {
        output[obj].count += 1;
      }
    }
  }
  for (const obj in output) {
    if (output[obj].count > max) max = output[obj].count;
  }
  for (const obj in output) {
    if (output[obj].count === max) {
      string += `${obj}, `;
    }
  }
  return string;
// Identify who has the most followers over 30
};

const followMostPeopleOverThirty = (objs) => {
  let listOfNames = listofNamesOverThirty(objs);
  let newObj = printAll(objs);
  let output = {};
  let max = 0;
  let string = '';
  for (const obj in newObj) {
    if (!output[obj]) {
      output[obj] = {count: 0};
    }
    for (const val of listOfNames) {
      if (newObj[obj].following.includes(val)) {
        output[obj].count += 1;
      }
    }
  }
  for (const obj in output) {
    if (output[obj].count > max) max = output[obj].count;
  }
  for (const obj in output) {
    if (output[obj].count === max) {
      string += `${obj}, `;
    }
  }
  console.log(string);
  return string;
};

const summaryOfFollowers = (objs) => {
  let newObj = printAll(objs);
  console.log(newObj);
  for (const obj in newObj) {
    newObj[obj].following =  newObj[obj].following.length;
    newObj[obj].followed = newObj[obj].followed.length;
  }
  return newObj;
};


const listofNamesOverThirty = (objs) => {
  let listOfNames = [];
  for (const obj in objs) {
    if (objs[obj].age > 30) {
      listOfNames.push(objs[obj].name);
    }
  }
  return listOfNames;
};

const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

biggestFollower(data);
mostPopular(data);
unrequitedFollowers(printAll(data));
mostFollowersOverThirty(data);
followMostPeopleOverThirty(data);
summaryOfFollowers(data);
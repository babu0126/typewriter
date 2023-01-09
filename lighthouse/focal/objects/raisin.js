const raisinAlarm = function(cookie) {
  for (const value of cookie) {
    if (value === "🍇") return `Raisin alert!`;
  }
  return `All good!`;
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function(cookies) {
  let result = [];
  for (const index in cookies) {
    if (cookies[index].includes("🍇")) result.push('Raisin alert!');
    else result.push('All good!');
  }
  return result;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);
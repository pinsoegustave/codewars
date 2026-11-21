const logs = new WeakMap();
​
function addRecord(caller, entry) {
  if (!logs.has(caller, entry)) {
    logs.set(caller, []);
  }
  logs.get(caller).push(entry);
}
// Create the NSA object 
const NSA = {
  log(person) {
    const entries = logs.get(person);
    if (!entries || entries.length === 0) {
      return "No Entries";
    }
    const output = entries.join("\n");
    logs.delete(person);
    return output;
  }
};
​
// Create the Person class
class Person {
    constructor(name) {
      this.name = name;
    }
    call(cellphone, callee) {
      const entry = `${this.name} called ${callee.name} from ${cellphone.owner.name}'s phone(${cellphone.number})`;
      addRecord(this, entry);
    }
    text(cellphone, ...callees) {
      for (const callee of callees) {
        const entry = `${this.name} texted ${callee.name} from ${cellphone.owner.name}'s phone(${cellphone.number})`;
        addRecord(this, entry);
      }
    }
}
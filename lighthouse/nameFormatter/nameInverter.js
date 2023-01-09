const nameInverter = function(name) {
  if (name === '') return '';
  if (name === undefined) throw 'error';
  const spacesCheck = name.match(/\s/g);
  let nameSplit = name.split(' ');
  
  if (name.includes('.')) {
    if(!name.includes(' ')) return '';
    let spaces =spacesCheck.length;
    if (spaces === 4) {
      nameSplit = nameSplit.slice(1, -1);
      spaces = 2;
    }
    if (spaces === 1) return name;
    if (spaces === 2 ) {
      let honorName = (nameSplit[0]).concat(nameSplit.slice(1).reverse());
      honorName = honorName.replace('.', '. ');
      honorName = honorName.replace(',', ', ');
      return honorName;
      }
    } else {
    if (name.charAt(0) === ' ') return name.replaceAll(' ', '');
    if (spacesCheck === null) return name;
    if (spacesCheck.length === 1) return nameSplit.reverse().toString().replace(",",", ");
  }
}
console.log(nameInverter('dr.'));

module.exports = nameInverter; 
module.exports = function createDreamTeam(arrMembers) {
  return Array.isArray(arrMembers) ? arrMembers.filter(i => typeof i == 'string').filter(i => /^[a-zA-Z\s]*/.test(i)).map(i => i.trim()).map(i => i = i[0].toUpperCase()).sort().join('') : false;
};
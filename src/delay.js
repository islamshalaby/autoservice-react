export default ms => {
  if (!ms) {
    throw new Error('Function get called without specifying milliseconds');
  }

  return new Promise(resolve => setTimeout(() => resolve('DONE'), ms));
};
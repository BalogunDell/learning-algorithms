/* Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile - Optional
ar: the colors of each sock

Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers describing the colors  of the socks in the pile.

Output Format

Return the total number of matching pairs of socks that John can sell.

Sample Input

9
10 20 20 10 10 30 50 10 20

Sample Output
3
*/

const getSocksPair = (array, n = 0) => {
  const uniqueSocksWithCount = new Map();
  for(let ar of array) {
    if (uniqueSocksWithCount.has(ar)) {
      uniqueSocksWithCount.set(ar, uniqueSocksWithCount.get(ar) + 1)
    } else {
      uniqueSocksWithCount.set(ar,1);
    }
  }
  let pairs = 0;
  uniqueSocksWithCount.forEach(sockCount => pairs += Math.floor(sockCount / 2));
  
  return pairs;
}

getSocksPair([10,20, 20, 10, 10, 30, 50, 10, 20])
